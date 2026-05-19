import { BlockNoteSchema, defaultBlockSpecs } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
import {
  ProductEmbedBlock,
  ProductEmbedExternal,
} from "../../components/editor/blocks/ProductEmbedBlock";
import {
  CollectionEmbedBlock,
  CollectionEmbedExternal,
} from "../../components/editor/blocks/CollectionEmbedBlock";

const productEmbed = createReactBlockSpec(
  {
    type: "productEmbed",
    propSchema: {
      productGid: { default: "" },
      layout: { default: "card", values: ["card", "row"] },
      productTitle: { default: "" },
      productImageUrl: { default: "" },
      productHandle: { default: "" },
      productPriceLabel: { default: "" },
    },
    content: "none",
  },
  {
    render: ProductEmbedBlock,
    toExternalHTML: ProductEmbedExternal,
  },
);

const collectionEmbed = createReactBlockSpec(
  {
    type: "collectionEmbed",
    propSchema: {
      collectionGid: { default: "" },
      layout: { default: "card", values: ["card", "row"] },
      collectionTitle: { default: "" },
      collectionImageUrl: { default: "" },
      collectionHandle: { default: "" },
    },
    content: "none",
  },
  {
    render: CollectionEmbedBlock,
    toExternalHTML: CollectionEmbedExternal,
  },
);

export const blocknoteSchema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    productEmbed: productEmbed(),
    collectionEmbed: collectionEmbed(),
  },
});
