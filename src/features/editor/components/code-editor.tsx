import { useEffect, useRef } from "react";
import { basicSetup, EditorView } from "codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { javascript } from "@codemirror/lang-javascript";

import { customTheme } from "../extensions/theme";

export const CodeEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const view = new EditorView({
      doc: "Start document",
      parent: editorRef.current,
      extensions: [
        oneDark,
        customTheme,
        basicSetup,
        javascript({ typescript: true }),
      ],
    });

    viewRef.current = view;

    return () => view.destroy();
  }, []);

  return <div ref={editorRef} className="pl-4 size-full bg-background" />;
};
