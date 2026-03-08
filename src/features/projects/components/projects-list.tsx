import Link from "next/link";
import { ArrowRightIcon, GlobeIcon } from "lucide-react";

import { Kbd } from "@/components/ui/kbd";
import { Spinner } from "@/components/ui/spinner";

import { Doc } from "../../../../convex/_generated/dataModel";
import { useProjectsPartial } from "../hooks/use-projects";

interface ProjectsListProps {
  onViewAll: () => void;
}

const ProjectItem = ({ data }: { data: Doc<"projects"> }) => {
  <Link
    href={`/projects/${data._id}`}
    className="flex items-center justify-between w-full py-1 text-sm text-foreground/60 font-medium hover:text-foreground group"
  >
    <div className="flex items-center gap-2">
      <GlobeIcon />
    </div>
    <ArrowRightIcon />
  </Link>;
};

export const ProjectsList = ({ onViewAll }: ProjectsListProps) => {
  const projects = useProjectsPartial(6);

  if (projects === undefined) {
    return <Spinner className="size-4 text-ring" />;
  }

  return (
    <div className="flex flex-col gap-4">
      {projects.length > 0 && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-muted-foreground">
              Recent projects
            </span>

            <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <span>View all</span>
              <Kbd className="bg-accent border">Ctrl+K</Kbd>
            </button>
          </div>

          <ul className="flex flex-col">
            {projects.map((project) => (
              <ProjectItem key={project._id} data={project} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
