import prisma from "../db.server";
import { normalizeShopDomain } from "./shopify.server";

async function listInstalledShops(): Promise<string[]> {
  const sessions = await prisma.session.findMany({
    where: { isOnline: false },
    select: { shop: true },
  });
  const shops = sessions.map((session: { shop: string }) => session.shop);
  return Array.from(new Set(shops));
}

export async function resolveShopForMcp(shop?: string): Promise<string> {
  if (shop?.trim()) {
    return normalizeShopDomain(shop);
  }

  const devShop = process.env.DEV_SHOP_DOMAIN?.trim();
  if (devShop) {
    return normalizeShopDomain(devShop);
  }

  const installedShops = await listInstalledShops();
  if (installedShops.length === 1) {
    return installedShops[0]!;
  }

  if (installedShops.length === 0) {
    throw new Error(
      "No Shopify session found. Install the app on a store before using MCP.",
    );
  }

  throw new Error(
    `Multiple shops installed. Provide shop parameter. Installed: ${installedShops.join(", ")}`,
  );
}
