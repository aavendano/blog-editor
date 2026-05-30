import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { editArticleDraftInputSchema } from "../schemas";
import { editArticleDraftFromMcp } from "../article-drafts.server";
import { formatToolError } from "../format-tool-error";

export function registerEditArticleDraftTool(server: McpServer): void {
  server.registerTool(
    "edit_article_draft",
    {
      description:
        "Update an existing article draft. Send only fields to change; content updates use markdown only. Omit shop when the app serves one store or DEV_SHOP_DOMAIN is set.",
      inputSchema: editArticleDraftInputSchema,
    },
    async (args) => {
      try {
        const draft = await editArticleDraftFromMcp(args);
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
