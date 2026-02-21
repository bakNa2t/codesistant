"use client";

import { useMutation, useQuery } from "convex/react";

import { Button } from "@/components/ui/button";

import { api } from "../../convex/_generated/api";

export default function Home() {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);

  return (
    <div className="flex min-h-screen items-center justify-center not-[]:font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className=" flex flex-col gap-4prose dark:prose-invert">
          <h1>Welcome to Codesistant</h1>
          <p>Here you can find the best code editor for your needs</p>

          <Button
            onClick={() =>
              createProject({
                name: "New Project",
              })
            }
          >
            Add new
          </Button>

          {projects?.map((project) => (
            <div key={project._id} className="flex flex-col p-2 border rounded">
              <p>{project.name}</p>
              <p>OwnerId: {project.ownerId}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
