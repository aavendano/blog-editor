import { unauthenticated } from "../shopify.server";

export function normalizeShopDomain(shop: string): string {
  let normalized = shop.trim().toLowerCase();
  normalized = normalized.replace(/^https?:\/\//, "");
  normalized = normalized.split("/")[0] ?? normalized;

  if (!normalized.includes(".")) {
    normalized = `${normalized}.myshopify.com`;
  }

  return normalized;
}

export async function getAdminContextForShop(shop: string) {
  const normalizedShop = normalizeShopDomain(shop);

  try {
    return await unauthenticated.admin(normalizedShop);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (
      message.includes("Could not find a session") ||
      message.includes("SessionNotFound")
    ) {
      throw new Error(
        `App not installed for shop ${normalizedShop}. Install the app on this store before using MCP.`,
      );
    }
    throw error;
  }
}
