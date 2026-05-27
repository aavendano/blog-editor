#!/usr/bin/env node
import * as z from "zod/v4";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import {
  createArticle,
  getArticle,
  resolveArticleAuthor,
  searchArticles,
  updateArticle,
} from "../app/lib/shopify/articles.server.js";
import { listBlogs, getBlogArticles } from "../app/lib/shopify/blogs.server.js";
import { exportArticleHtml } from "../app/lib/blocknote/export-html.server.js";
import { createAdminApiContext, resolveShopifyCredentials } from "./shopify-admin-client.js";

const server = new McpServer({
  name: "shopify-blog-editor",
  version: "1.0.0",
});

const authInputSchema = {
  shop: z
    .string()
    .optional()
    .describe("Shop domain, e.g. your-store.myshopify.com (optional if SHOPIFY_MCP_SHOP is set)."),
  accessToken: z
    .string()
    .optional()
    .describe("Shopify Admin access token (optional if SHOPIFY_MCP_ACCESS_TOKEN is set)."),
  apiVersion: z
    .string()
    .optional()
    .describe("Shopify Admin API version, e.g. 2025-10 (defaults to SHOPIFY_MCP_API_VERSION or 2025-10)."),
};

function toToolResult(payload) {
  return {
    content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
    structuredContent: payload,
  };
}

function parseBlocknoteDocInput(rawValue) {
  if (rawValue === undefined) return null;

  const parsed =
    typeof rawValue === "string" ? JSON.parse(rawValue) : /** @type {unknown} */ (rawValue);

  if (Array.isArray(parsed)) return parsed;
  if (
    parsed &&
    typeof parsed === "object" &&
    "blocks" in parsed &&
    Array.isArray(parsed.blocks)
  ) {
    return parsed.blocks;
  }

  throw new Error(
    "Invalid `blocknoteDoc`. Provide a JSON array of blocks or an object with `{ blocks: [...] }`.",
  );
}

async function resolveBodyHtml(admin, bodyHtml, blocknoteDoc) {
  if (typeof bodyHtml === "string" && bodyHtml.trim()) {
    return bodyHtml;
  }

  const parsedDoc = parseBlocknoteDocInput(blocknoteDoc);
  if (parsedDoc) {
    return exportArticleHtml(parsedDoc, admin);
  }

  return null;
}

function createAdminFromInput(input) {
  const credentials = resolveShopifyCredentials(input);
  const admin = createAdminApiContext(credentials);
  return { admin, credentials };
}

server.registerTool(
  "list_blogs",
  {
    description: "List available Shopify blogs for the target store.",
    inputSchema: {
      ...authInputSchema,
      first: z.number().int().positive().max(250).default(25),
    },
  },
  async (input) => {
    const { admin, credentials } = createAdminFromInput(input);
    const blogs = await listBlogs(admin, input.first);
    return toToolResult({
      shop: credentials.shop,
      count: blogs.length,
      blogs,
    });
  },
);

server.registerTool(
  "list_blog_articles",
  {
    description: "List articles from a specific Shopify blog.",
    inputSchema: {
      ...authInputSchema,
      blogId: z.string().min(1).describe("Shopify blog GID, e.g. gid://shopify/Blog/123."),
      first: z.number().int().positive().max(250).default(50),
    },
  },
  async (input) => {
    const { admin, credentials } = createAdminFromInput(input);
    const blog = await getBlogArticles(admin, input.blogId, input.first);
    return toToolResult({
      shop: credentials.shop,
      blog,
    });
  },
);

server.registerTool(
  "search_blog_articles",
  {
    description: "Search Shopify blog articles by query.",
    inputSchema: {
      ...authInputSchema,
      query: z.string().default(""),
      first: z.number().int().positive().max(250).default(10),
    },
  },
  async (input) => {
    const { admin, credentials } = createAdminFromInput(input);
    const articles = await searchArticles(admin, input.query, input.first);
    return toToolResult({
      shop: credentials.shop,
      query: input.query,
      count: articles.length,
      articles,
    });
  },
);

server.registerTool(
  "create_blog_article",
  {
    description:
      "Create and publish a Shopify blog article. Supports raw HTML or BlockNote JSON document input.",
    inputSchema: {
      ...authInputSchema,
      blogId: z.string().min(1).describe("Target blog GID."),
      title: z.string().min(1).describe("Article title."),
      bodyHtml: z.string().optional().describe("Raw article HTML."),
      blocknoteDoc: z
        .union([z.string(), z.array(z.unknown()), z.object({ blocks: z.array(z.unknown()) })])
        .optional()
        .describe("BlockNote JSON document. If provided, HTML is generated through backend exporters."),
      handle: z.string().optional().describe("Optional Shopify handle/slug."),
      authorName: z.string().optional().describe("Optional author display name."),
    },
  },
  async (input) => {
    const { admin, credentials } = createAdminFromInput(input);
    const bodyHtml = await resolveBodyHtml(admin, input.bodyHtml, input.blocknoteDoc);

    if (!bodyHtml) {
      throw new Error("Provide either `bodyHtml` or `blocknoteDoc` to create an article.");
    }

    const author = input.authorName
      ? { name: input.authorName }
      : resolveArticleAuthor({ shop: credentials.shop });

    const article = await createArticle(admin, {
      blogId: input.blogId,
      title: input.title,
      bodyHtml,
      handle: input.handle,
      author,
    });

    return toToolResult({
      shop: credentials.shop,
      article,
      published: true,
    });
  },
);

server.registerTool(
  "update_blog_article",
  {
    description:
      "Update and publish an existing Shopify blog article. Reuses current content if title/body are omitted.",
    inputSchema: {
      ...authInputSchema,
      articleId: z.string().min(1).describe("Article GID to update."),
      title: z.string().optional().describe("New title."),
      bodyHtml: z.string().optional().describe("Raw HTML to replace article body."),
      blocknoteDoc: z
        .union([z.string(), z.array(z.unknown()), z.object({ blocks: z.array(z.unknown()) })])
        .optional()
        .describe("BlockNote JSON document. If provided, HTML is generated through backend exporters."),
      blogId: z.string().optional().describe("Optional target blog GID."),
      handle: z.string().optional().describe("Optional target handle."),
    },
  },
  async (input) => {
    const { admin, credentials } = createAdminFromInput(input);
    const current = await getArticle(admin, input.articleId);

    if (!current) {
      throw new Error(`Article not found: ${input.articleId}`);
    }

    const bodyHtml =
      (await resolveBodyHtml(admin, input.bodyHtml, input.blocknoteDoc)) || current.body || "";
    const title = input.title || current.title || "Untitled article";

    const article = await updateArticle(admin, {
      id: input.articleId,
      title,
      bodyHtml,
      blogId: input.blogId,
      handle: input.handle,
    });

    return toToolResult({
      shop: credentials.shop,
      article,
      published: true,
    });
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("shopify-blog-editor MCP server running on stdio");
}

main().catch((error) => {
  console.error("MCP server startup failed:", error);
  process.exit(1);
});
