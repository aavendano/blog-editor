import prisma from "../db.server";
import { emptyDocument } from "../lib/blocknote/empty-document";

export async function listDraftsByShop(shop) {
  return prisma.articleDraft.findMany({
    where: { shop },
    orderBy: { updatedAt: "desc" },
  });
}

export async function getDraftById(id, shop) {
  return prisma.articleDraft.findFirst({
    where: { id, shop },
  });
}

export async function getDraftByShopifyArticleGid(shopifyArticleGid, shop) {
  return prisma.articleDraft.findFirst({
    where: { shopifyArticleGid, shop },
  });
}

export async function createDraft({
  shop,
  shopifyBlogGid,
  title,
  shopifyArticleGid = null,
  handle = null,
  blocknoteDoc = emptyDocument(),
}) {
  return prisma.articleDraft.create({
    data: {
      shop,
      shopifyBlogGid,
      title,
      shopifyArticleGid,
      handle,
      blocknoteDoc,
      status: shopifyArticleGid ? "draft" : "draft",
    },
  });
}

export async function updateDraft(id, shop, data) {
  return prisma.articleDraft.updateMany({
    where: { id, shop },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });
}

export async function updateDraftDoc(id, shop, { title, handle, blocknoteDoc, htmlPreview }) {
  const draft = await getDraftById(id, shop);
  if (!draft) return null;

  return prisma.articleDraft.update({
    where: { id },
    data: {
      ...(title !== undefined && { title }),
      ...(handle !== undefined && { handle }),
      ...(blocknoteDoc !== undefined && { blocknoteDoc }),
      ...(htmlPreview !== undefined && { htmlPreview }),
    },
  });
}

export async function linkShopifyArticle(id, shop, shopifyArticleGid) {
  return prisma.articleDraft.updateMany({
    where: { id, shop },
    data: { shopifyArticleGid },
  });
}

export async function markPublished(id, shop, shopifyArticleGid, htmlPreview) {
  const draft = await getDraftById(id, shop);
  if (!draft) return null;

  return prisma.articleDraft.update({
    where: { id: draft.id },
    data: {
      shopifyArticleGid,
      status: "published",
      htmlPreview,
    },
  });
}

export async function deleteDraft(id, shop) {
  return prisma.articleDraft.deleteMany({
    where: { id, shop },
  });
}
