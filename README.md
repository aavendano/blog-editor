# Blog Editor — Shopify App

App embebida en el Shopify Admin para editar artículos de blog con [BlockNote](https://www.blocknotejs.org/docs). Los borradores se guardan como JSON en PostgreSQL; al publicar se exporta HTML a Shopify (`Article.body`).

## Stack

- React Router 7 + `@shopify/shopify-app-react-router`
- Polaris web components (shell de la app)
- BlockNote + Ariakit (UI del editor) + Bulma del theme (compilado en editor/preview)
- Prisma + PostgreSQL
- Admin GraphQL (`read_content`, `write_content`, `read_products`)

## Setup local

### 1. PostgreSQL

```shell
docker compose up -d
```

Copia `.env.example` a `.env` y ajusta `DATABASE_URL`:

```shell
DATABASE_URL=postgresql://blog_editor:blog_editor@localhost:5432/blog_editor
```

### 2. Migraciones

```shell
npm run setup
# o: npx prisma migrate deploy
```

### 3. Desarrollo

En un VPS (p. ej. Hetzner), si el túnel Cloudflare falla, usa localhost:

```shell
shopify app dev --use-localhost
```

Desde tu PC, reenvía puertos por SSH:

```shell
ssh -L 3458:localhost:3458 -L 3000:localhost:3000 usuario@tu-servidor
```

Luego abre la URL que indique el CLI (p. ej. `https://localhost:3458`).

Con ngrok (dos terminales en el servidor):

```shell
# Terminal 1
ngrok http 3458

ngrok http --url=monkey-tight-lab.ngrok-free.app 3458

# Terminal 2 — el :3458 es el puerto LOCAL del proxy, no el 4040 de la UI de ngrok
shopify app dev --tunnel-url https://TU-URL.ngrok-free.app:3458

shopify app dev --tunnel-url https://monkey-tight-lab.ngrok-free.app:3458

```

Si antes usaste `--use-localhost`, limpia la preview:

```shell
shopify app dev clean
```

**Error `accounts.shopify.com refused to connect`:** OAuth se estaba abriendo dentro del iframe del admin. La app redirige por `/auth/exit-iframe`. Si persiste, abre la app desde el enlace de preview del CLI en una pestaña nueva.

Tras cambiar scopes en `shopify.app.toml`, reinstala la app en la tienda de desarrollo.

**Nota:** Los webhooks no están en `shopify.app.toml` porque Shopify rechaza URIs `https://localhost:...` en dev preview. No afecta al editor de blog en v1.

## Flujo de uso

1. **Artículos** (`/app/articles`) — lista de borradores locales.
2. **Nuevo artículo** — elige blog y crea borrador.
3. **Enlazar existente** — vincula un artículo de Shopify por GID (editor vacío, sin importar HTML).
4. **Editor** — BlockNote con autosave; botones + Producto / + Colección; **Vista previa** con Bulma; **Publicar** envía HTML a Shopify.

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL |
| `SCOPES` | Debe incluir `read_content,write_content,read_products` |
| `ALLOWED_EMAILS` | Opcional: emails permitidos separados por coma |
| `GOOGLE_GENERATIVE_AI_API_KEY` | API key para BlockNote AI con Gemini (solo servidor) |
| `GEMINI_MODEL` | Opcional, default `gemini-2.0-flash` |

## BlockNote AI

La integración AI del editor usa `@blocknote/xl-ai` y un endpoint server-side en `/api/chat`.

- UI: comando `/ai`, menú AI contextual y botón AI en toolbar de selección.
- Backend: streaming con AI SDK + Gemini, con herramientas de BlockNote para editar bloques en vivo.
- Seguridad: la API key queda en servidor (`GOOGLE_GENERATIVE_AI_API_KEY`), no se expone al cliente.

## Estilos del theme (Bulma)

La vista previa y el editor cargan Bulma desde el paquete [`b-style`](https://github.com/aavendano/b-style) (`npm` dependency Git). El entry Sass es [`app/styles/theme-preview.scss`](app/styles/theme-preview.scss); los colores de marca en el admin se ajustan con [`app/styles/theme-preview-tokens.css`](app/styles/theme-preview-tokens.css). Ambos se incluyen solo en la ruta del editor vía `links()`.

**Sincronizar con el theme:** actualiza la dependencia `b-style` en `package.json` (rama, tag o commit) y ejecuta `npm install`, luego `npm run dev` o `npm run build`. Si cambian tokens de color en `theme.liquid`, revisa también `theme-preview-tokens.css`.

El HTML publicado en Shopify **no incluye** `<link>` ni estilos embebidos; el theme de la tienda ya carga el mismo Bulma en el storefront.

Si Bulma interfiere con Polaris en el admin embebido, se puede añadir prefijo PostCSS (`.article-editor-content`) en una fase posterior.

## Bloques personalizados (BlockNote)

Para añadir un nuevo bloque (p. ej. otro embed de Shopify), sigue la guía del repo:

- **[.agents/custom-blocks.md](.agents/custom-blocks.md)** — checklist, arquitectura, archivos a tocar y errores habituales.
- **[.agents/BlockNote.md](.agents/BlockNote.md)** — índice de la documentación oficial de BlockNote.

Patrón resumido: `*EmbedView` (markup) → `*EmbedBlock` (`render` + `toExternalHTML`) → `schema.js` → opcional `enrich-embeds.server.js` → insert desde picker / menú `/`.

## Resources

- [Shopify App React Router](https://shopify.dev/docs/api/shopify-app-react-router)
- [Polaris Web Components](https://shopify.dev/docs/api/app-home/polaris-web-components)
- [BlockNote docs](https://www.blocknotejs.org/docs)
