import { AppProvider } from "@shopify/shopify-app-react-router/react";
import { useState } from "react";
import { Form, useActionData, useLoaderData, useRouteError } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { loginWithIframeEscape } from "../../lib/auth-login.server";

export const loader = async ({ request }) => {
  const errors = await loginWithIframeEscape(request);
  return { errors };
};

export const action = async ({ request }) => {
  const errors = await loginWithIframeEscape(request);
  return { errors };
};

export default function Auth() {
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const [shop, setShop] = useState("");
  const { errors } = actionData || loaderData;

  return (
    <AppProvider embedded={false}>
      <s-page>
        <s-banner tone="info" heading="Acceso desde Shopify Admin">
          Abre la app desde el enlace Preview del CLI o desde Apps en tu tienda.
          Si llegaste aquí por error, escribe tu dominio de tienda abajo.
        </s-banner>
        <Form method="post">
          <s-section heading="Log in">
            <s-text-field
              name="shop"
              label="Shop domain"
              details="dataintegration-2.myshopify.com"
              value={shop}
              onChange={(e) => setShop(e.currentTarget.value)}
              autocomplete="on"
              error={errors.shop}
            ></s-text-field>
            <s-button type="submit">Log in</s-button>
          </s-section>
        </Form>
      </s-page>
    </AppProvider>
  );
}

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
