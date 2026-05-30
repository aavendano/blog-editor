import { timingSafeEqual } from "crypto";

function readBearerToken(request: Request): string | null {
  const header = request.headers.get("Authorization");
  if (!header?.startsWith("Bearer ")) {
    return null;
  }
  const token = header.slice("Bearer ".length).trim();
  return token.length > 0 ? token : null;
}

function tokensMatch(provided: string, expected: string): boolean {
  if (provided.length !== expected.length) {
    return false;
  }
  return timingSafeEqual(Buffer.from(provided), Buffer.from(expected));
}

export function assertMcpAuthorized(request: Request): void {
  const expected = process.env.BLOG_EDITOR_MCP_TOKEN?.trim();
  if (!expected) {
    throw new Response("Unauthorized", { status: 401 });
  }

  const provided = readBearerToken(request);
  if (!provided || !tokensMatch(provided, expected)) {
    throw new Response("Unauthorized", { status: 401 });
  }
}
