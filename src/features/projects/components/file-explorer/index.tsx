import { useState } from "react";
import {
  ChevronRightIcon,
  CopyMinusIcon,
  FilePlusCornerIcon,
  FolderPlusIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useProject } from "../../hooks/use-projects";
import { cn } from "@/lib/utils";
import { Id } from "../../../../../convex/_generated/dataModel";

export const FileExplorer = ({ projectId }: { projectId: Id<"projects"> }) => {
  const [isOpen, setIsOpen] = useState(false);

  const project = useProject(projectId);

  return (
    <div className="h-full bg-sidebar">
      <ScrollArea>
        <div
          role="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex items-center gap-0.5 h-5.5 bg-accent font-bold group/project cursor-pointer w-full text-left "
        >
          <ChevronRightIcon
            className={cn(
              "size-4 shrink-0 text-muted-foreground",
              isOpen && "rotate-90",
            )}
          />

          <p className="text-xs uppercase line-clamp-1">
            {project?.name ?? "Loading..."}
          </p>

          <div className="flex items-center gap-0.5 ml-auto opacity-0 group-hover/project:opacity-100 transition-none duration-0">
            <Button
              variant="highlight"
              size="icon-xs"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsOpen(true);
                // Set creating to true
              }}
            >
              <FilePlusCornerIcon className="size-3.5" />
            </Button>

            <Button
              variant="highlight"
              size="icon-xs"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsOpen(true);
                // Set creating folder to true
              }}
            >
              <FolderPlusIcon className="size-3.5" />
            </Button>

            <Button
              variant="highlight"
              size="icon-xs"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();

                // Reset collapse
              }}
            >
              <CopyMinusIcon className="size-3.5" />
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
