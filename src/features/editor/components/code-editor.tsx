import { useEffect, useMemo, useRef } from "react";
import { EditorView, keymap } from "@codemirror/view";
import { oneDark } from "@codemirror/theme-one-dark";
import { indentWithTab } from "@codemirror/commands";
import { indentationMarkers } from "@replit/codemirror-indentation-markers";

import { minimap } from "../extensions/minimap";
import { customTheme } from "../extensions/theme";
import { customSetup } from "../extensions/custom-setup";
import { getLanguageExtension } from "../extensions/language-extansion";

interface CodeEditorProps {
  filename: string;
}

export const CodeEditor = ({ filename }: CodeEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);

  const languageExtenson = useMemo(() => {
    return getLanguageExtension(filename);
  }, [filename]);

  useEffect(() => {
    if (!editorRef.current) return;

    const view = new EditorView({
      doc: "Start document",
      parent: editorRef.current,
      extensions: [
        oneDark,
        customTheme,
        customSetup,
        languageExtenson,
        keymap.of([indentWithTab]),
        minimap(),
        indentationMarkers(),
      ],
    });

    viewRef.current = view;

    return () => view.destroy();
  }, []);

  return <div ref={editorRef} className="pl-4 size-full bg-background" />;
};
