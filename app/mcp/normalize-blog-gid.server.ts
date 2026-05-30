/** Admin API may return gid://shopify/Blog/{id}; drafts expect OnlineStoreBlog. */
export function normalizeShopifyBlogGid(gid: string): string {
  const match = gid.match(/^gid:\/\/shopify\/(?:Blog|OnlineStoreBlog)\/(\d+)$/);
  if (match) {
    return `gid://shopify/OnlineStoreBlog/${match[1]}`;
  }
  return gid;
}
