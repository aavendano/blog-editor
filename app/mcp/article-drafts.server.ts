import prisma from "../db.server";
import { getDraftById } from "../models/article-draft.server";
import { markdownToDraftContent } from "./blocknote.server";
import { normalizeShopifyBlogGid } from "./normalize-blog-gid.server";
import { resolveShopForMcp } from "./resolve-shop.server";
import {
  createArticleDraftInputSchema,
  editArticleDraftInputSchema,
  type CreateArticleDraftInput,
  type EditArticleDraftInput,
} from "./schemas";

export type ArticleDraftToolPayload = {
  articleDraftId: string;
  shop: string;
  shopifyBlogGid: string;
  title: string;
  handle: string | null;
  status: string;
  updatedAt: string;
};

function toToolPayload(draft: {
  id: string;
  shop: string;
  shopifyBlogGid: string;
  title: string;
  handle: string | null;
  status: string;
  updatedAt: Date;
}): ArticleDraftToolPayload {
  return {
    articleDraftId: draft.id,
    shop: draft.shop,
    shopifyBlogGid: draft.shopifyBlogGid,
    title: draft.title,
    handle: draft.handle,
    status: draft.status,
    updatedAt: draft.updatedAt.toISOString(),
  };
}

export async function createArticleDraftFromMcp(
  raw: unknown,
): Promise<ArticleDraftToolPayload> {
  const input: CreateArticleDraftInput =
    createArticleDraftInputSchema.parse(raw);
  const shop = await resolveShopForMcp(input.shop);
  const { blocknoteDoc, htmlPreview } = await markdownToDraftContent(
    input.markdown,
  );

  const draft = await prisma.articleDraft.create({
    data: {
      shop,
      shopifyBlogGid: normalizeShopifyBlogGid(input.shopifyBlogGid),
      title: input.title,
      handle: input.handle ?? null,
      blocknoteDoc,
      htmlPreview,
      status: "draft",
    },
  });

  return toToolPayload(draft);
}

export async function editArticleDraftFromMcp(
  raw: unknown,
): Promise<ArticleDraftToolPayload> {
  const input: EditArticleDraftInput = editArticleDraftInputSchema.parse(raw);
  const shop = await resolveShopForMcp(input.shop);
  const existing = await getDraftById(input.articleDraftId, shop);
  if (!existing) {
    throw new Error(
      `Article draft not found for articleDraftId=${input.articleDraftId} and shop=${shop}`,
    );
  }

  const data: {
    title?: string;
    handle?: string | null;
    blocknoteDoc?: unknown;
    htmlPreview?: string;
    status: "draft";
  } = { status: "draft" };

  if (input.title !== undefined) {
    data.title = input.title;
  }
  if (input.handle !== undefined) {
    data.handle = input.handle;
  }
  if (input.markdown !== undefined) {
    const { blocknoteDoc, htmlPreview } = await markdownToDraftContent(
      input.markdown,
    );
    data.blocknoteDoc = blocknoteDoc;
    data.htmlPreview = htmlPreview;
  }

  const updated = await prisma.articleDraft.update({
    where: { id: existing.id },
    data,
  });

  return toToolPayload(updated);
}
