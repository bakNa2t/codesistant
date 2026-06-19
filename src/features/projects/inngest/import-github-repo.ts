import { Octokit } from "octokit";
import { NonRetriableError } from "inngest";

import { convex } from "@/lib/convex-client";
import { inngest } from "@/inngest/client";

import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

interface ImportGithubRepoEvent {
  owner: string;
  repo: string;
  projectId: Id<"projects">;
  githubToken: string;
}

export const importGithubRepo = inngest.createFunction(
  {
    id: "import-github-repo",
    onFailure: async ({ event, step }) => {
      const internalKey = process.env.CONVEX_INTERNAL_KEY;
      if (!internalKey) return;

      const { projectId } = event.data.event.data as ImportGithubRepoEvent;

      await step.run("set-failed-status", async () => {
        await convex.mutation(api.system.updateImportStatus, {
          internalKey,
          projectId,
          status: "failed",
        });
      });
    },
  },
  { event: "github/import.repo" },
  async ({ event, step }) => {
    const { owner, repo, projectId, githubToken } =
      event.data as ImportGithubRepoEvent;

    const internalKey = process.env.CONVEX_INTERNAL_KEY;
    if (!internalKey) {
      throw new NonRetriableError("CONVEX_INTERNAL_KEY is not configured");
    }

    const octokit = new Octokit({ auth: githubToken });

    // Cleanup any existing files in the project
    await step.run("cleanup-project", async () => {
      await convex.mutation(api.system.cleanup, {
        internalKey,
        projectId,
      });
    });

    const tree = await step.run("fetch-repo-tree", async () => {
      try {
        const { data } = await octokit.rest.git.getTree({
          owner,
          repo,
          tree_sha: "main",
          recursive: "1",
        });

        return data;
      } catch {
        // Fallback to master branch
        const { data } = await octokit.rest.git.getTree({
          owner,
          repo,
          tree_sha: "master",
          recursive: "1",
        });

        return data;
      }
    });
  },
);
