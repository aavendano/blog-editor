import { randomUUID } from "crypto";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { isInitializeRequest } from "@modelcontextprotocol/sdk/types.js";
import { createMcpServer } from "./server.server";

type SessionEntry = {
  transport: WebStandardStreamableHTTPServerTransport;
};

const sessions = new Map<string, SessionEntry>();

function badRequestResponse(message: string): Response {
  return Response.json(
    {
      jsonrpc: "2.0",
      error: { code: -32000, message },
      id: null,
    },
    { status: 400 },
  );
}

async function createSession(): Promise<WebStandardStreamableHTTPServerTransport> {
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: () => randomUUID(),
    onsessioninitialized: (sessionId) => {
      sessions.set(sessionId, { transport });
    },
  });

  transport.onclose = () => {
    const sessionId = transport.sessionId;
    if (sessionId) {
      sessions.delete(sessionId);
    }
  };

  const server = createMcpServer();
  await server.connect(transport);
  return transport;
}

export async function handleMcpRequest(request: Request): Promise<Response> {
  const sessionId = request.headers.get("mcp-session-id");
  let parsedBody: unknown;

  if (request.method === "POST") {
    try {
      parsedBody = await request.json();
    } catch {
      parsedBody = undefined;
    }
  }

  let transport: WebStandardStreamableHTTPServerTransport | undefined;

  if (sessionId) {
    transport = sessions.get(sessionId)?.transport;
    if (!transport) {
      return badRequestResponse("Bad Request: Unknown session ID");
    }
  } else if (request.method === "POST" && isInitializeRequest(parsedBody)) {
    transport = await createSession();
  } else {
    return badRequestResponse("Bad Request: No valid session ID provided");
  }

  return transport.handleRequest(request, { parsedBody });
}
