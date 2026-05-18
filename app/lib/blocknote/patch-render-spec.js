import { DOMSerializer } from "prosemirror-model";

let patched = false;

/**
 * BlockNote/TipTap `renderHTML` returns `{ dom, contentDOM }` for container nodes.
 * ProseMirror's `renderSpec` only passes that through when `dom` is a text node;
 * element `dom` values fall through and throw "Invalid array passed to renderSpec".
 */
export function patchProseMirrorRenderSpec() {
  if (patched || typeof document === "undefined") return;
  patched = true;

  const original = DOMSerializer.renderSpec.bind(DOMSerializer);

  DOMSerializer.renderSpec = (doc, structure, xmlNS, blockArraysIn) => {
    if (structure && typeof structure === "object") {
      if (structure.nodeType === 1) {
        return { dom: structure };
      }
      if (
        structure.dom &&
        typeof structure.dom === "object" &&
        structure.dom.nodeType === 1
      ) {
        return structure;
      }
    }
    return original(doc, structure, xmlNS, blockArraysIn);
  };
}
