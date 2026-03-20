"use client";

import { cn } from "@/lib/utils";
import { Id } from "../../../../convex/_generated/dataModel";

const Tab = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-3 h-full cursor-pointer text-muted-foreground border-r hover:bg-accent/30",
        isActive && "bg-background text-foreground",
      )}
    >
      <span className="text-sm">{label}</span>
    </div>
  );
};

export const ProjectIdView = ({ projectId }: { projectId: Id<"projects"> }) => {
  return (
    <div className="flex flex-col h-full">
      <nav className="flex items-center h-8.75 bg-sidebar border-b">
        <Tab label="Code" isActive={false} onClick={() => {}} />
        <Tab label="Preview" isActive={false} onClick={() => {}} />
      </nav>
    </div>
  );
};
