import { redirect, redirectDocument } from "react-router";
import { authenticate } from "../shopify.server";

const REDIRECT_STATUS_CODES = new Set([301, 302, 303, 307, 308]);

/** @param {unknown} value */
export function isRedirectResponse(value) {
  return (
    value instanceof Response &&
    REDIRECT_STATUS_CODES.has(value.status) &&
    value.headers.has("Location")
  );
}

/**
 * Break out of the Shopify admin iframe via App Bridge (handled by auth.$.jsx).
 * @param {Request} request
 * @param {string} destination Absolute URL
 */
export function redirectThroughExitIframe(request, destination) {
  const requestUrl = new URL(request.url);
  const exitUrl = new URL("/auth/exit-iframe", requestUrl.origin);
  exitUrl.searchParams.set("exitIframe", destination);

  for (const key of ["shop", "host"]) {
    const value = requestUrl.searchParams.get(key);
    if (value) exitUrl.searchParams.set(key, value);
  }

  throw redirectDocument(`${exitUrl.pathname}${exitUrl.search}`);
}

/**
 * @param {Request} request
 * @param {string} loginLocation
 */
function preserveParamsOnLoginRedirect(request, loginLocation) {
  const requestUrl = new URL(request.url);
  const loginUrl = new URL(loginLocation, request.url);

  for (const key of ["shop", "host", "embedded"]) {
    const value = requestUrl.searchParams.get(key);
    if (value && !loginUrl.searchParams.has(key)) {
      loginUrl.searchParams.set(key, value);
    }
  }

  return `${loginUrl.pathname}${loginUrl.search}`;
}

/**
 * @param {Request} request
 */
export async function authenticateAdmin(request) {
  try {
    return await authenticate.admin(request);
  } catch (error) {
    if (isRedirectResponse(error)) {
      const location = error.headers.get("Location") || "";
      if (location.includes("/auth/login")) {
        throw redirect(preserveParamsOnLoginRedirect(request, location));
      }
    }
    throw error;
  }
}
