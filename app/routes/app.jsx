import { Outlet, useLoaderData, useRouteError } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { AppProvider } from "@shopify/shopify-app-react-router/react";
import { assertAllowedEmail } from "../lib/auth.server";
import { authenticateAdmin } from "../lib/shopify-auth.server";
import { useAppPath } from "../lib/use-app-path";

export const loader = async ({ request }) => {
  const { session } = await authenticateAdmin(request);
  assertAllowedEmail(session);

  // eslint-disable-next-line no-undef
  return { apiKey: process.env.SHOPIFY_API_KEY || "" };
};

function AppNav() {
  const articlesHref = useAppPath("/app/articles");
  return (
    <s-app-nav>
      <s-link href={articlesHref}>Artículos</s-link>
    </s-app-nav>
  );
}

export default function App() {
  const { apiKey } = useLoaderData();

  return (
    <AppProvider embedded apiKey={apiKey}>
      <AppNav />
      <Outlet />
    </AppProvider>
  );
}

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
