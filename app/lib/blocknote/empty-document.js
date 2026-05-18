/** @returns {import("@blocknote/core").PartialBlock[]} */
export function emptyDocument() {
  return [
    {
      type: "paragraph",
      content: "",
    },
  ];
}
