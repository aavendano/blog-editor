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
  ProductRowBlock,
  ProductRowExternal,
} from "../../components/editor/blocks/ProductRowBlock";
import {
  ArticleEmbedBlock,
  ArticleEmbedExternal,
} from "../../components/editor/blocks/ArticleEmbedBlock";
import {
  TableOfContentsBlock,
  TableOfContentsExternal,
} from "../../components/editor/blocks/TableOfContentsBlock";
import {
  HighlightNotificationBlock,
  HighlightNotificationExternal,
} from "../../components/editor/blocks/HighlightNotificationBlock";

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

const productRow = createReactBlockSpec(
  {
    type: "productRow",
    propSchema: {
      product1Gid: { default: "" },
      product1Title: { default: "" },
      product1ImageUrl: { default: "" },
      product1Handle: { default: "" },
      product1PriceLabel: { default: "" },
      product2Gid: { default: "" },
      product2Title: { default: "" },
      product2ImageUrl: { default: "" },
      product2Handle: { default: "" },
      product2PriceLabel: { default: "" },
      product3Gid: { default: "" },
      product3Title: { default: "" },
      product3ImageUrl: { default: "" },
      product3Handle: { default: "" },
      product3PriceLabel: { default: "" },
      product4Gid: { default: "" },
      product4Title: { default: "" },
      product4ImageUrl: { default: "" },
      product4Handle: { default: "" },
      product4PriceLabel: { default: "" },
    },
    content: "none",
  },
  {
    render: ProductRowBlock,
    toExternalHTML: ProductRowExternal,
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

const tableOfContents = createReactBlockSpec(
  {
    type: "tableOfContents",
    propSchema: {
      tocTitle: { default: "Tabla de contenido" },
      tocItems: { default: "[]" },
    },
    content: "none",
  },
  {
    render: TableOfContentsBlock,
    toExternalHTML: TableOfContentsExternal,
  },
);

const highlightNotification = createReactBlockSpec(
  {
    type: "highlightNotification",
    propSchema: {
      notificationVariant: {
        default: "is-light",
        values: ["is-link", "is-primary", "is-light", "is-dark"],
      },
      notificationTitle: { default: "" },
      notificationLinkUrl: { default: "" },
      notificationLinkLabel: { default: "" },
    },
    content: "inline",
  },
  {
    render: HighlightNotificationBlock,
    toExternalHTML: HighlightNotificationExternal,
  },
);

export const blocknoteSchema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    productEmbed: productEmbed(),
    productHorizontal: productHorizontal(),
    productRow: productRow(),
    articleEmbed: articleEmbed(),
    collectionEmbed: collectionEmbed(),
    tableOfContents: tableOfContents(),
    highlightNotification: highlightNotification(),
  },
});
