import { assertMcpAuthorized } from "../mcp/auth.server";
import { handleMcpRequest } from "../mcp/handler.server";

async function handle({ request }: { request: Request }) {
  assertMcpAuthorized(request);
  return handleMcpRequest(request);
}

export async function loader({ request }: { request: Request }) {
  return handle({ request });
}

export async function action({ request }: { request: Request }) {
  return handle({ request });
}
