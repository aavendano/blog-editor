import { z } from "zod";

const shopifyBlogGidSchema = z
  .string()
  .regex(/^gid:\/\/shopify\/(?:OnlineStoreBlog|Blog)\/\d+$/);

export const createArticleDraftInputSchema = z
  .object({
    shop: z.string().min(1).optional(),
    shopifyBlogGid: shopifyBlogGidSchema,
    title: z.string().min(1),
    markdown: z.string(),
    handle: z.string().min(1).optional(),
  })
  .strict();

export type CreateArticleDraftInput = z.infer<
  typeof createArticleDraftInputSchema
>;

export const editArticleDraftInputSchema = z
  .object({
    articleDraftId: z.string().min(1),
    shop: z.string().min(1).optional(),
    title: z.string().min(1).optional(),
    markdown: z.string().optional(),
    handle: z.string().min(1).optional(),
  })
  .strict();

export type EditArticleDraftInput = z.infer<typeof editArticleDraftInputSchema>;

export const listShopBlogsInputSchema = z
  .object({
    shop: z.string().min(1).optional(),
  })
  .strict();

export type ListShopBlogsInput = z.infer<typeof listShopBlogsInputSchema>;
