import { listBlogs } from "../lib/shopify/blogs.server";
import { listShopBlogsInputSchema } from "./schemas";
import { normalizeShopifyBlogGid } from "./normalize-blog-gid.server";
import { resolveShopForMcp } from "./resolve-shop.server";
import { getAdminContextForShop } from "./shopify.server";

export type ShopBlogListPayload = {
  shop: string;
  blogs: Array<{
    shopifyBlogGid: string;
    title: string;
    handle: string;
  }>;
};

export async function listShopBlogsForMcp(raw: unknown): Promise<ShopBlogListPayload> {
  const input = listShopBlogsInputSchema.parse(raw);
  const shop = await resolveShopForMcp(input.shop);
  const { admin } = await getAdminContextForShop(shop);
  const blogs = await listBlogs(admin);

  return {
    shop,
    blogs: blogs.map(
      (blog: { id: string; title: string; handle: string }) => ({
        shopifyBlogGid: normalizeShopifyBlogGid(blog.id),
        title: blog.title,
        handle: blog.handle,
      }),
    ),
  };
}
