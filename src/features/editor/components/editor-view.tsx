import { TopNavigation } from "./top-navigation";

import { FileBreadcrumbs } from "./file-breadcrumbs";

import { Id } from "../../../../convex/_generated/dataModel";
import { useEditor } from "../hooks/use-editor";

export const EditorView = ({ projectId }: { projectId: Id<"projects"> }) => {
  const { activeTabId } = useEditor(projectId);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center">
        <TopNavigation projectId={projectId} />
      </div>
      {activeTabId && <FileBreadcrumbs projectId={projectId} />}
    </div>
  );
};
