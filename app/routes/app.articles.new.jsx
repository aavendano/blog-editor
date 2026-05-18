import { Form, redirect, useLoaderData } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticateAdmin } from "../lib/shopify-auth.server";
import { assertAllowedEmail } from "../lib/auth.server";
import { listBlogs } from "../lib/shopify/blogs.server";
import { createDraft } from "../models/article-draft.server";
import { preserveSearchParamsFromRequest } from "../lib/preserve-search-params";

export const loader = async ({ request }) => {
  const { admin, session } = await authenticateAdmin(request);
  assertAllowedEmail(session);
  const blogs = await listBlogs(admin);
  return { blogs };
};

export const action = async ({ request }) => {
  const { session } = await authenticateAdmin(request);
  assertAllowedEmail(session);

  const formData = await request.formData();
  const blogGid = formData.get("blogGid");
  const title = formData.get("title") || "Sin título";

  if (!blogGid || typeof blogGid !== "string") {
    return { error: "Selecciona un blog" };
  }

  const draft = await createDraft({
    shop: session.shop,
    shopifyBlogGid: blogGid,
    title: String(title),
  });

  return redirect(
    preserveSearchParamsFromRequest(request, `/app/articles/${draft.id}`),
  );
};

export default function NewArticle() {
  const { blogs } = useLoaderData();

  return (
    <s-page heading="Nuevo artículo">
      <s-section>
        <Form method="post">
          <s-stack direction="block" gap="base">
            <label>
              Título
              <input type="text" name="title" defaultValue="Sin título" />
            </label>
            <label>
              Blog
              <select name="blogGid" required defaultValue="">
                <option value="" disabled>
                  Seleccionar blog…
                </option>
                {blogs.map((blog) => (
                  <option key={blog.id} value={blog.id}>
                    {blog.title}
                  </option>
                ))}
              </select>
            </label>
            <s-button type="submit" variant="primary">
              Crear borrador
            </s-button>
          </s-stack>
        </Form>
      </s-section>
    </s-page>
  );
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
