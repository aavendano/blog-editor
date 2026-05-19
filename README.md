# Blog Editor — Shopify App

App embebida en el Shopify Admin para editar artículos de blog con [BlockNote](https://www.blocknotejs.org/docs). Los borradores se guardan como JSON en PostgreSQL; al publicar se exporta HTML a Shopify (`Article.body`).

## Stack

- React Router 7 + `@shopify/shopify-app-react-router`
- Polaris web components (shell de la app)
- BlockNote + Ariakit (UI del editor) + Bulma scoped (contenido del artículo en editor/preview)
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

# Terminal 2 — el :3458 es el puerto LOCAL del proxy, no el 4040 de la UI de ngrok
shopify app dev --tunnel-url https://TU-URL.ngrok-free.app:3458
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

## Notas

- El HTML publicado en la tienda **no incluye CSS Bulma** en v1; la preview en la app sí.
- Para estilos en el storefront, añade CSS al theme en una fase posterior.

## Resources

- [Shopify App React Router](https://shopify.dev/docs/api/shopify-app-react-router)
- [Polaris Web Components](https://shopify.dev/docs/api/app-home/polaris-web-components)
- [BlockNote docs](https://www.blocknotejs.org/docs)
