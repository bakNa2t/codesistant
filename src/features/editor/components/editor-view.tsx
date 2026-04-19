import Image from "next/image";
import { useRef } from "react";

import { CodeEditor } from "./code-editor";
import { TopNavigation } from "./top-navigation";
import { FileBreadcrumbs } from "./file-breadcrumbs";

import { useEditor } from "../hooks/use-editor";
import { Id } from "../../../../convex/_generated/dataModel";
import { useFile, useUpdateFile } from "@/features/projects/hooks/use-files";

const DEBOUNCE_MS = 1500;

export const EditorView = ({ projectId }: { projectId: Id<"projects"> }) => {
  const { activeTabId } = useEditor(projectId);
  const activeFile = useFile(activeTabId);
  const updateFile = useUpdateFile();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
        {activeFile && (
          <CodeEditor
            key={activeFile._id}
            filename={activeFile.name}
            initialValue={activeFile.content ?? ""}
            onChange={(content) => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }

              timeoutRef.current = setTimeout(() => {
                updateFile({ id: activeFile._id, content });
              }, DEBOUNCE_MS);
            }}
          />
        )}
      </div>
    </div>
  );
};
