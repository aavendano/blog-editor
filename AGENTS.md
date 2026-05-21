# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a Shopify embedded admin app (blog editor) built with React Router 7, Vite, BlockNote, Prisma, and PostgreSQL. See `README.md` for full architecture details.

### Services

| Service | How to start | Port |
|---------|-------------|------|
| PostgreSQL 16 | `docker compose up -d` | 5432 |
| Vite dev server | `npx vite --port 3000` (or `npm run dev` with Shopify CLI) | 3000 |
| Production server | `npm run start` | 3000 (or `PORT=N`) |

### Required environment variables

Create `.env` at the repo root with at minimum:

```
DATABASE_URL=postgresql://blog_editor:blog_editor@localhost:5432/blog_editor
```

For the production server (`npm run start`) or `shopify app dev`, you also need `SHOPIFY_API_KEY`, `SHOPIFY_API_SECRET`, and `SHOPIFY_APP_URL`. When running the Vite dev server directly (`npx vite`), pass these as inline env vars or export them.

### Non-obvious caveats

- **Docker must be running** before `docker compose up -d`. In Cloud Agent VMs, Docker needs `sudo dockerd` with `fuse-overlayfs` storage driver and `iptables-legacy`.
- **`npm run dev`** invokes `shopify app dev` which requires a Shopify Partner account and dev store. For UI-only development or testing without Shopify, run the Vite dev server directly: `SHOPIFY_API_KEY=test SHOPIFY_API_SECRET=test SHOPIFY_APP_URL=http://localhost:3000 npx vite --port 3000`.
- **`npm run setup`** (= `prisma generate && prisma migrate deploy`) must run after `npm install` and whenever the Prisma schema changes, before starting the app.
- **Lint** (`npm run lint`): the codebase has pre-existing `react/prop-types` errors (70+). These are known and not blocking.
- **Typecheck**: `npm run typecheck` runs `react-router typegen && tsc --noEmit`.
- **Build**: `npm run build` runs the React Router build (Vite).
- **No automated test suite** exists in this repo (no test runner configured).
- The `extensions/` workspace directory is currently unused/empty.
