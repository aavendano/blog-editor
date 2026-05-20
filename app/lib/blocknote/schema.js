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
import {
  ProductHorizontalBlock,
  ProductHorizontalExternal,
} from "../../components/editor/blocks/ProductHorizontalBlock";
import {
  ArticleEmbedBlock,
  ArticleEmbedExternal,
} from "../../components/editor/blocks/ArticleEmbedBlock";

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

const productHorizontal = createReactBlockSpec(
  {
    type: "productHorizontal",
    propSchema: {
      productGid: { default: "" },
      layout: { default: "row", values: ["row"] },
      productTitle: { default: "" },
      productImageUrl: { default: "" },
      productHandle: { default: "" },
      productPriceLabel: { default: "" },
    },
    content: "none",
  },
  {
    render: ProductHorizontalBlock,
    toExternalHTML: ProductHorizontalExternal,
  },
);

const articleEmbed = createReactBlockSpec(
  {
    type: "articleEmbed",
    propSchema: {
      articleGid: { default: "" },
      articleTitle: { default: "" },
      articleHandle: { default: "" },
      blogHandle: { default: "" },
      blogTitle: { default: "" },
      articleImageUrl: { default: "" },
      articleExcerpt: { default: "" },
    },
    content: "none",
  },
  {
    render: ArticleEmbedBlock,
    toExternalHTML: ArticleEmbedExternal,
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
    productHorizontal: productHorizontal(),
    articleEmbed: articleEmbed(),
    collectionEmbed: collectionEmbed(),
  },
});
