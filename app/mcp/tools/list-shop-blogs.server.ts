import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { listShopBlogsForMcp } from "../blogs.server";
import { formatToolError } from "../format-tool-error";
import { listShopBlogsInputSchema } from "../schemas";

export function registerListShopBlogsTool(server: McpServer): void {
  server.registerTool(
    "list_shop_blogs",
    {
      description:
        "List Shopify blogs for a shop using the app's installed Shopify session (same as the admin UI). Call before create_article_draft when shopifyBlogGid is unknown. Omit shop if the app serves a single store or DEV_SHOP_DOMAIN is set.",
      inputSchema: listShopBlogsInputSchema,
    },
    async (args) => {
      try {
        const result = await listShopBlogsForMcp(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      } catch (error) {
        return {
          isError: true,
          content: [{ type: "text", text: formatToolError(error) }],
        };
      }
    },
  );
}
