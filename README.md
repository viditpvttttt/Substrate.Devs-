# Substrate

The website for Substrate — a research and product studio building **Kernel**
(a multimodal LLM), **VOID** (a minimalist browser), and **Folio** (a quiet
operating surface for your day) on one shared runtime.

Built with TanStack Start, React, Tailwind CSS v4, and shadcn/ui.

## Development

You'll need Node.js 20+ and npm.

```sh
git clone <this-repository-url>
cd kernel-void-hub
npm install
npm run dev
```

The dev server runs at `http://localhost:8080`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run format` — run Prettier

## Project structure

```
src/
  components/   Shared UI primitives (shadcn/ui) and site-specific
                components (SpectralMark, LatticeDiagram, BenchRadar, etc.)
  routes/       File-based routes (TanStack Router) — one file per page
  styles.css    Design tokens and global styles (Tailwind v4 + custom theme)
```
