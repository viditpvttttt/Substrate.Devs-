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

- **Stack:** TanStack Start (SSR via Nitro) + Vite 8 + React 19 + Tailwind v4 + shadcn/ui. Frontend-only — no database, no backend API, no external services, no secrets required.
- **Run:** `docker compose -f docker-compose.base44.yml up -d`. The `web` service uses a plain `node:22` image with the repo bind-mounted at `/app`, runs `npm install && npm run dev`, and maps host port 3000 → container 8080 (Vite's dev port).
- **Live reload:** Vite dev server with HMR. Edits to source files appear in the preview automatically; call `reload_preview` only after compose/env changes.
- **Host allowlist:** Vite accepts the preview's external hostname via the platform-provided `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` env var (passed bare in compose). The vite config already binds `host: "::"`.
- **Verify:** `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` should return 200; the served HTML references `/src/styles.css` (live source, not a prebuilt bundle).
- **Quirk:** Vite logs a deprecation notice about `vite-tsconfig-paths` (native `resolve.tsconfigPaths` is now supported) — cosmetic only, does not affect boot.
