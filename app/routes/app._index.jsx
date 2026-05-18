import { redirect } from "react-router";
import { authenticateAdmin } from "../lib/shopify-auth.server";
import { assertAllowedEmail } from "../lib/auth.server";
import { preserveSearchParamsFromRequest } from "../lib/preserve-search-params";

export const loader = async ({ request }) => {
  const { session } = await authenticateAdmin(request);
  assertAllowedEmail(session);
  return redirect(preserveSearchParamsFromRequest(request, "/app/articles"));
};
