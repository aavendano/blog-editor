/* eslint-env node */
import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText } from "ai";
import {
  aiDocumentFormats,
  injectDocumentStateMessages,
  toolDefinitionsToToolSet,
} from "@blocknote/xl-ai/server";
import { assertAllowedEmail } from "../lib/auth.server";
import { authenticateAdmin } from "../lib/shopify-auth.server";

export const maxDuration = 30;
const SHOPIFY_EDITOR_SYSTEM_PROMPT = `${aiDocumentFormats.html.systemPrompt}

Contexto editorial:
- Escribe en espanol neutro.
- Prioriza claridad y estructura escaneable para articulos de ecommerce.
- No inventes datos concretos de productos, precios, stock, descuentos ni metricas.
- Si falta contexto, mejora estilo y estructura sin agregar afirmaciones factuales no verificables.`;

export async function action({ request }) {
  try {
    const { session } = await authenticateAdmin(request);
    assertAllowedEmail(session);

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return Response.json(
        { error: "Falta GOOGLE_GENERATIVE_AI_API_KEY" },
        { status: 500 },
      );
    }

    const { messages, toolDefinitions } = await request.json();
    const model = process.env.GEMINI_MODEL || "gemini-2.0-flash";

    const result = streamText({
      model: google(model),
      system: SHOPIFY_EDITOR_SYSTEM_PROMPT,
      messages: await convertToModelMessages(
        injectDocumentStateMessages(messages ?? []),
      ),
      tools: toolDefinitionsToToolSet(toolDefinitions ?? []),
      toolChoice: "required",
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    if (error instanceof Response) {
      throw error;
    }

    console.error("BlockNote AI endpoint error", error);
    return Response.json(
      { error: "No se pudo procesar la solicitud AI" },
      { status: 500 },
    );
  }
}
