import { login } from "../shopify.server";
import { loginErrorMessage } from "../routes/auth.login/error.server";
import {
  isRedirectResponse,
  redirectThroughExitIframe,
} from "./shopify-auth.server";

function getRedirectLocation(error) {
  return error.headers.get("Location");
}

function shouldBreakOutOfIframe(destination) {
  if (!destination) return false;
  try {
    const url = new URL(destination, "https://example.com");
    return (
      url.hostname.endsWith("shopify.com") || url.hostname === "shopify.com"
    );
  } catch {
    return false;
  }
}

/**
 * Wraps shopify.login() so OAuth URLs break out of the admin iframe.
 */
export async function loginWithIframeEscape(request) {
  const url = new URL(request.url);

  let loginRequest = request;
  if (!url.searchParams.get("shop") && process.env.DEV_SHOP_DOMAIN) {
    const withShop = new URL(request.url);
    withShop.searchParams.set("shop", process.env.DEV_SHOP_DOMAIN);
    loginRequest = new Request(withShop, request);
  }

  try {
    return loginErrorMessage(await login(loginRequest));
  } catch (error) {
    if (isRedirectResponse(error)) {
      const location = getRedirectLocation(error);
      if (location && shouldBreakOutOfIframe(location)) {
        redirectThroughExitIframe(loginRequest, location);
      }
    }
    throw error;
  }
}
