import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerCreateArticleDraftTool } from "./tools/create-article-draft.server";
import { registerEditArticleDraftTool } from "./tools/edit-article-draft.server";
import { registerListShopBlogsTool } from "./tools/list-shop-blogs.server";

export function createMcpServer(): McpServer {
  const server = new McpServer({
    name: "blog-editor",
    version: "1.0.0",
  });

  registerListShopBlogsTool(server);
  registerCreateArticleDraftTool(server);
  registerEditArticleDraftTool(server);

  return server;
}
