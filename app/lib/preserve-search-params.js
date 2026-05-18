/** Query params required for embedded Shopify admin document requests. */
export const EMBEDDED_SEARCH_PARAMS = ["shop", "host", "embedded"];

/**
 * @param {URLSearchParams | string} search
 * @param {string} pathname
 */
export function preserveSearchParams(search, pathname) {
  const source =
    typeof search === "string" ? new URLSearchParams(search) : search;
  const target = new URLSearchParams();

  for (const key of EMBEDDED_SEARCH_PARAMS) {
    const value = source.get(key);
    if (value) target.set(key, value);
  }

  const qs = target.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}

/**
 * @param {Request} request
 * @param {string} pathname
 */
export function preserveSearchParamsFromRequest(request, pathname) {
  return preserveSearchParams(new URL(request.url).searchParams, pathname);
}
