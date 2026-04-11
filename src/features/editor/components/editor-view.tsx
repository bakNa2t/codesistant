import { TopNavigation } from "./top-navigation";

import { Id } from "../../../../convex/_generated/dataModel";

export const EditorView = ({ projectId }: { projectId: Id<"projects"> }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center">
        <TopNavigation projectId={projectId} />
      </div>
    </div>
  );
};
