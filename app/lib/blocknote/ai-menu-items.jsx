import { RiExpandUpDownLine, RiFileTextLine, RiQuillPenLine } from "react-icons/ri";
import { AIExtension, aiDocumentFormats } from "@blocknote/xl-ai";

function updateOnlyTools() {
  return aiDocumentFormats.html.getStreamToolsProvider({
    defaultStreamTools: {
      add: false,
      delete: false,
      update: true,
    },
  });
}

function addOnlyTools() {
  return aiDocumentFormats.html.getStreamToolsProvider({
    defaultStreamTools: {
      add: true,
      delete: false,
      update: false,
    },
  });
}

/**
 * @param {import("@blocknote/core").BlockNoteEditor} editor
 */
export function rewriteToneCommand(editor) {
  return {
    key: "rewrite_tone_blog",
    title: "Reescribir tono",
    aliases: ["tono", "reescribir", "estilo"],
    icon: <RiQuillPenLine size={18} />,
    onItemClick: async () => {
      await editor.getExtension(AIExtension)?.invokeAI({
        userPrompt:
          "Reescribe el texto seleccionado en tono profesional, claro y cercano para un articulo de blog de ecommerce.",
        useSelection: true,
        streamToolsProvider: updateOnlyTools(),
      });
    },
    size: "small",
  };
}

/**
 * @param {import("@blocknote/core").BlockNoteEditor} editor
 */
export function expandSectionCommand(editor) {
  return {
    key: "expand_section_blog",
    title: "Expandir seccion",
    aliases: ["expandir", "ideas", "desarrollar"],
    icon: <RiExpandUpDownLine size={18} />,
    onItemClick: async () => {
      await editor.getExtension(AIExtension)?.invokeAI({
        userPrompt:
          "Agrega 2 o 3 parrafos nuevos que expandan la idea actual con ejemplos accionables para una tienda Shopify.",
        useSelection: false,
        streamToolsProvider: addOnlyTools(),
      });
    },
    size: "small",
  };
}

/**
 * @param {import("@blocknote/core").BlockNoteEditor} editor
 */
export function summarizeSelectionCommand(editor) {
  return {
    key: "summarize_selection_blog",
    title: "Resumir seleccion",
    aliases: ["resumir", "resumen", "sintesis"],
    icon: <RiFileTextLine size={18} />,
    onItemClick: async () => {
      await editor.getExtension(AIExtension)?.invokeAI({
        userPrompt:
          "Resume el texto seleccionado en un parrafo breve, directo y util para lectores de blog.",
        useSelection: true,
        streamToolsProvider: updateOnlyTools(),
      });
    },
    size: "small",
  };
}
