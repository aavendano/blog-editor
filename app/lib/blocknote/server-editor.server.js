import { ServerBlockNoteEditor } from "@blocknote/server-util";
import { blocknoteSchema } from "./schema";

/** @type {import("@blocknote/server-util").ServerBlockNoteEditor | null} */
let editor = null;

export function getServerBlockNoteEditor() {
  if (!editor) {
    editor = ServerBlockNoteEditor.create({ schema: blocknoteSchema });
  }
  return editor;
}
