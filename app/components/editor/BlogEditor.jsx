import { useEffect, useRef } from "react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/core/style.css";
import { BlockNoteViewRaw, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { blocknoteSchema } from "../../lib/blocknote/schema";
import { patchProseMirrorRenderSpec } from "../../lib/blocknote/patch-render-spec";

patchProseMirrorRenderSpec();

/**
 * @param {{
 *   initialDoc: unknown;
 *   onChange: (doc: unknown) => void;
 *   editorRef?: React.MutableRefObject<import("@blocknote/core").BlockNoteEditor | null>;
 * }} props
 */
export function BlogEditor({ initialDoc, onChange, editorRef }) {
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const editor = useCreateBlockNote({
    schema: blocknoteSchema,
    initialContent: Array.isArray(initialDoc) ? initialDoc : undefined,
  });

  useEffect(() => {
    if (editorRef) {
      editorRef.current = editor;
    }
  }, [editor, editorRef]);

  useEffect(() => {
    const unsubscribe = editor.onChange(() => {
      onChangeRef.current(editor.document);
    });
    return () => unsubscribe();
  }, [editor]);

  return (
    <div className="article-editor-content">
      <BlockNoteViewRaw editor={editor} />
    </div>
  );
}

/**
 * @param {import("@blocknote/core").BlockNoteEditor} editor
 * @param {"product" | "collection"} kind
 * @param {Record<string, string>} props
 */
export function insertEmbedBlock(editor, kind, props) {
  const type = kind === "product" ? "productEmbed" : "collectionEmbed";
  const cursor = editor.getTextCursorPosition();
  return editor.insertBlocks([{ type, props }], cursor.block, "after");
}
