import { useLocation } from "react-router";
import { preserveSearchParams } from "./preserve-search-params";

/** @param {string} pathname */
export function useAppPath(pathname) {
  const { search } = useLocation();
  return preserveSearchParams(search, pathname);
}
