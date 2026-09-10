<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in the
> editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Base44 dev environment

This is a **frontend-only** TanStack Start + Vite + React app (SSR via Nitro).
There is no backend, database, or external-service dependency — no secrets are
required to boot.

- **Run:** `docker compose -f docker-compose.base44.yml up -d`
- **Preview:** host port 3000 → container port 8080 (the Vite dev server).
- **How it works:** `node:22-slim` with the repo bind-mounted at `/app`;
  `npm install` + `vite dev` run at container start. Edits hot-reload live.
- **Vite host allowlist:** the `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` env var
  is passed bare so Vite accepts the preview's external hostname.
- **Verify:** `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/`
  should return `200` and serve SSR HTML referencing `/src/styles.css`
  (unhashed source = live dev server, not a prebuilt bundle).
