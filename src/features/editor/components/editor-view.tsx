import Image from "next/image";

import { CodeEditor } from "./code-editor";
import { TopNavigation } from "./top-navigation";
import { FileBreadcrumbs } from "./file-breadcrumbs";

import { Id } from "../../../../convex/_generated/dataModel";
import { useEditor } from "../hooks/use-editor";
import { useFile } from "@/features/projects/hooks/use-files";

export const EditorView = ({ projectId }: { projectId: Id<"projects"> }) => {
  const { activeTabId } = useEditor(projectId);
  const activeFile = useFile(activeTabId);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center">
        <TopNavigation projectId={projectId} />
      </div>
      {activeTabId && <FileBreadcrumbs projectId={projectId} />}

      <div className="flex-1 min-h-0 bg-background">
        {!activeFile && (
          <div className="flex items-center justify-center size-full">
            <Image
              src="/logo-alt.svg"
              alt="Codesistant"
              width={50}
              height={50}
              className="opacity-25"
            />
          </div>
        )}
        {activeFile && <CodeEditor />}
      </div>
    </div>
  );
};
