const DEFAULT_SHOPIFY_API_VERSION = process.env.SHOPIFY_MCP_API_VERSION || "2025-10";

function normalizeShop(shop) {
  const value = String(shop || "")
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/\/+$/, "");

  if (!value) return "";
  if (value.includes(".")) return value.toLowerCase();
  return `${value.toLowerCase()}.myshopify.com`;
}

/**
 * Resolve credentials from tool arguments and environment variables.
 * @param {{ shop?: string, accessToken?: string, apiVersion?: string }} input
 */
export function resolveShopifyCredentials(input = {}) {
  const shop = normalizeShop(input.shop || process.env.SHOPIFY_MCP_SHOP || process.env.SHOPIFY_SHOP);
  const accessToken = String(
    input.accessToken ||
      process.env.SHOPIFY_MCP_ACCESS_TOKEN ||
      process.env.SHOPIFY_ACCESS_TOKEN ||
      "",
  ).trim();
  const apiVersion = String(input.apiVersion || DEFAULT_SHOPIFY_API_VERSION).trim();

  if (!shop) {
    throw new Error(
      "Missing shop domain. Provide `shop` in the tool call or set SHOPIFY_MCP_SHOP.",
    );
  }

  if (!accessToken) {
    throw new Error(
      "Missing access token. Provide `accessToken` in the tool call or set SHOPIFY_MCP_ACCESS_TOKEN.",
    );
  }

  if (!apiVersion) {
    throw new Error("Missing Shopify API version.");
  }

  return { shop, accessToken, apiVersion };
}

async function graphqlFetch({ shop, accessToken, apiVersion, query, variables }) {
  const endpoint = `https://${shop}/admin/api/${apiVersion}/graphql.json`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": accessToken,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Shopify GraphQL HTTP ${response.status}: ${body.slice(0, 500)}`);
  }

  return response;
}

/**
 * Creates a lightweight AdminApiContext-compatible object with .graphql()
 * so existing backend modules can be reused from MCP tools.
 * @param {{ shop: string, accessToken: string, apiVersion?: string }} credentials
 */
export function createAdminApiContext(credentials) {
  const resolved = resolveShopifyCredentials(credentials);
  return {
    async graphql(query, options = {}) {
      return graphqlFetch({
        ...resolved,
        query,
        variables: options.variables,
      });
    },
  };
}
