import { useCallback, useEffect, useMemo, useRef } from "react";
import { DefaultChatTransport } from "ai";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/core/style.css";
import { en } from "@blocknote/core/locales";
import { BlockNoteView } from "@blocknote/ariakit";
import "@blocknote/ariakit/style.css";
import {
  useCreateBlockNote,
  SuggestionMenuController,
  FormattingToolbar,
  FormattingToolbarController,
  getFormattingToolbarItems,
} from "@blocknote/react";
import {
  AIExtension,
  AIMenu,
  AIMenuController,
  AIToolbarButton,
  getDefaultAIMenuItems,
} from "@blocknote/xl-ai";
import { en as aiEn } from "@blocknote/xl-ai/locales";
import "@blocknote/xl-ai/style.css";
import { blocknoteSchema } from "../../lib/blocknote/schema";
import { getArticleSlashMenuItemsWithAI } from "../../lib/blocknote/slash-menu-items";
import { patchProseMirrorRenderSpec } from "../../lib/blocknote/patch-render-spec";
import { sanitizeInitialDoc } from "../../lib/blocknote/sanitize-initial-doc";
import {
  expandSectionCommand,
  rewriteToneCommand,
  summarizeSelectionCommand,
} from "../../lib/blocknote/ai-menu-items";

patchProseMirrorRenderSpec();

const SCHEMA_BLOCK_TYPES = Object.keys(blocknoteSchema.blockSpecs);
const AI_ENDPOINT = "/api/chat";

const FormattingToolbarWithAI = () => (
  <FormattingToolbar>
    {getFormattingToolbarItems()}
    <AIToolbarButton />
  </FormattingToolbar>
);

function CustomAIMenu() {
  return (
    <AIMenu
      items={(editor, aiResponseStatus) => {
        if (aiResponseStatus !== "user-input") {
          return getDefaultAIMenuItems(editor, aiResponseStatus);
        }

        const commands = editor.getSelection()
          ? [rewriteToneCommand(editor), summarizeSelectionCommand(editor)]
          : [expandSectionCommand(editor)];

        return [...getDefaultAIMenuItems(editor, aiResponseStatus), ...commands];
      }}
    />
  );
}

/**
 * @param {{
 *   initialDoc: unknown;
 *   onChange: (doc: unknown) => void;
 *   editorRef?: React.MutableRefObject<import("@blocknote/core").BlockNoteEditor | null>;
 *   onOpenPicker?: (kind: import("../../lib/blocknote/custom-block-catalog.js").EmbedKind) => void;
 *   onInsertBlock?: (kind: import("../../lib/blocknote/custom-block-catalog.js").EmbedKind) => void;
 * }} props
 */
export function BlogEditor({
  initialDoc,
  onChange,
  editorRef,
  onOpenPicker,
  onInsertBlock,
}) {
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const pickerCallbacksRef = useRef({ onOpenPicker, onInsertBlock });
  pickerCallbacksRef.current = { onOpenPicker, onInsertBlock };

  const sanitizedDoc = useMemo(
    () => sanitizeInitialDoc(initialDoc, SCHEMA_BLOCK_TYPES),
    [initialDoc],
  );

  const editor = useCreateBlockNote({
    schema: blocknoteSchema,
    dictionary: {
      ...en,
      ai: aiEn,
    },
    extensions: [
      AIExtension({
        transport: new DefaultChatTransport({
          api: AI_ENDPOINT,
        }),
      }),
    ],
    initialContent: sanitizedDoc.blocks,
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
      getArticleSlashMenuItemsWithAI(editor, pickerCallbacksRef.current, query),
    [editor],
  );

  return (
    <BlockNoteView
      editor={editor}
      formattingToolbar={false}
      slashMenu={false}
      theme="light"
    >
      <AIMenuController aiMenu={CustomAIMenu} />
      <FormattingToolbarController formattingToolbar={FormattingToolbarWithAI} />
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
  article: "articleEmbed",
  collection: "collectionEmbed",
  tableOfContents: "tableOfContents",
  highlightNotification: "highlightNotification",
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
