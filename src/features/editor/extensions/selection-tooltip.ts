import { Tooltip, showTooltip, EditorView } from "@codemirror/view";
import { StateField, EditorState } from "@codemirror/state";
import { showQuickEditEffect, quickEditState } from "./quick-edit";

let editorView: EditorView | null = null;

const createTooltipForSelection = (state: EditorState): readonly Tooltip[] => {
  const selection = state.selection.main;

  if (selection.empty) {
    return [];
  }

  const isQuickEditActive = state.field(quickEditState);
  if (isQuickEditActive) {
    return [];
  }
};

const captureViewExtension = EditorView.updateListener.of((update) => {
  editorView = update.view;
});

export const selectionTooltip = () => [
  selectionTooltipField,
  captureViewExtension,
];
