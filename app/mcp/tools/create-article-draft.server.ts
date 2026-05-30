import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createArticleDraftInputSchema } from "../schemas";
import { createArticleDraftFromMcp } from "../article-drafts.server";
import { formatToolError } from "../format-tool-error";

export function registerCreateArticleDraftTool(server: McpServer): void {
  server.registerTool(
    "create_article_draft",
    {
      description:
        "Create a new blog article draft in the app's database. Content must be Markdown only. If shopifyBlogGid is unknown, call list_shop_blogs first. Omit shop when the app serves one store or DEV_SHOP_DOMAIN is set.",
      inputSchema: createArticleDraftInputSchema,
    },
    async (args) => {
      try {
        const draft = await createArticleDraftFromMcp(args);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(draft, null, 2),
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
