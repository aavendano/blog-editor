# AGENTS.md

## Cursor Cloud specific instructions

### Services overview

| Service | How to start | Notes |
|---------|-------------|-------|
| PostgreSQL 16 | `docker compose up -d` | Required. Connection: `postgresql://blog_editor:blog_editor@localhost:5432/blog_editor` |
| Vite dev server (React Router) | See below | Serves the Shopify embedded app on port 3000 |

### Starting the dev server

The normal command is `npm run dev` which wraps `shopify app dev`. This requires valid Shopify Partner credentials (`SHOPIFY_API_KEY`, `SHOPIFY_API_SECRET`) and a registered app + dev store.

To run the Vite/React Router dev server without the Shopify CLI (useful for testing UI changes without OAuth):

```shell
SHOPIFY_APP_URL=http://localhost:3000 \
SHOPIFY_API_KEY=test_key_placeholder \
SHOPIFY_API_SECRET=test_secret_placeholder \
SCOPES=read_content,write_content,read_products \
npx react-router dev --port 3000
```

This serves the landing page and static routes. Shopify-authenticated routes (`/app/*`) will fail without a real session, but the server itself starts correctly.

### Key commands (see `package.json` scripts)

- **Lint**: `npm run lint` (ESLint — note: 70+ pre-existing `react/prop-types` warnings)
- **Typecheck**: `npm run typecheck` (runs `react-router typegen && tsc --noEmit`)
- **Build**: `npm run build` (production build via `react-router build`)
- **Prisma migrations**: `npm run setup` (generates client + applies migrations)

### Gotchas

- Docker must be running before `docker compose up -d` and before `npm run setup` (Prisma needs the DB).
- The `.env` file must contain `DATABASE_URL=postgresql://blog_editor:blog_editor@localhost:5432/blog_editor` for Prisma to connect.
- The Shopify CLI tunnel (`shopify app dev`) will not work without network access to Shopify and valid OAuth credentials. Use the direct Vite approach above for local-only development/testing.
- Node.js version must satisfy `>=20.19 <22 || >=22.12` (current environment has v22.22.2 which is valid).
