import { useCallback, useEffect, useRef } from "react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/core/style.css";
import { BlockNoteView } from "@blocknote/ariakit";
import "@blocknote/ariakit/style.css";
import { useCreateBlockNote, SuggestionMenuController } from "@blocknote/react";
import { blocknoteSchema } from "../../lib/blocknote/schema";
import { getArticleSlashMenuItems } from "../../lib/blocknote/slash-menu-items";
import { patchProseMirrorRenderSpec } from "../../lib/blocknote/patch-render-spec";

patchProseMirrorRenderSpec();

/**
 * @param {{
 *   initialDoc: unknown;
 *   onChange: (doc: unknown) => void;
 *   editorRef?: React.MutableRefObject<import("@blocknote/core").BlockNoteEditor | null>;
 *   onOpenPicker?: (kind: import("../../lib/blocknote/custom-block-catalog.js").EmbedKind) => void;
 * }} props
 */
export function BlogEditor({
  initialDoc,
  onChange,
  editorRef,
  onOpenPicker,
}) {
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const pickerCallbacksRef = useRef({ onOpenPicker });
  pickerCallbacksRef.current = { onOpenPicker };

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

  const getSlashMenuItems = useCallback(
    async (query) =>
      getArticleSlashMenuItems(editor, pickerCallbacksRef.current, query),
    [editor],
  );

  return (
    <BlockNoteView editor={editor} slashMenu={false} theme="light">
      <SuggestionMenuController
        triggerCharacter="/"
        getItems={getSlashMenuItems}
      />
    </BlockNoteView>
  );
}

/** @type {Record<import("../../lib/blocknote/custom-block-catalog.js").EmbedKind, string>} */
const BLOCK_TYPE_BY_KIND = {
  product: "productEmbed",
  productHorizontal: "productHorizontal",
  productRow: "productRow",
  article: "articleEmbed",
  collection: "collectionEmbed",
};

/**
 * @param {import("@blocknote/core").BlockNoteEditor} editor
 * @param {import("../../lib/blocknote/custom-block-catalog.js").EmbedKind} kind
 * @param {Record<string, string>} props
 */
export function insertEmbedBlock(editor, kind, props) {
  const type = BLOCK_TYPE_BY_KIND[kind];
  const cursor = editor.getTextCursorPosition();
  return editor.insertBlocks([{ type, props }], cursor.block, "after");
}
