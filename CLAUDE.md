# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Next.js dev server with Turbopack (http://localhost:3000/docs)
npm run build    # Runs `fumadocs-mdx` then `next build` — both steps required for content changes
npm start        # Serve the production build
npm run lint     # ESLint over .js/.jsx/.ts/.tsx
```

There is no test suite. `npm install` triggers `postinstall: fumadocs-mdx`, which generates the `.source/` directory consumed by `lib/source.tsx`.

## Architecture

This is a **Fumadocs** documentation site on **Next.js 16** (App Router, React 19). All pages are MDX under `content/docs/`; there are no per-page React routes.

- **Single catch-all route**: `app/[[...slug]]/page.tsx` is the only page component. It calls `source.getPage(slug)` and renders the MDX `body` inside `DocsPage`/`DocsBody` from `fumadocs-ui`. `generateStaticParams` produces every doc URL at build time.
- **Content pipeline**: `source.config.ts` (root) → `fumadocs-mdx` reads `content/docs/**/*.mdx` and emits to `.source/` → `lib/source.tsx` wraps that with `loader()` to produce the page tree, URL map, and icon resolver. Every directory in `content/docs/` has a `meta.json` controlling sidebar order/title/icon (icons are string keys mapped to `lucide-react` components in `lib/source.tsx` — adding a new icon means importing it there and adding a `case` to the switch).
- **URL rewriting**: The `introduction/` section is the site root. `lib/source.tsx`'s `url()` strips the `introduction` prefix, and `next.config.mjs` adds matching `rewrites` (so `/quick-start` resolves to `/introduction/quick-start.mdx` internally) plus `redirects` from old `/introduction/*` URLs. The whole site is served under `basePath: '/docs'`.
- **Search**: `app/api/search/route.ts` exposes a Fumadocs-built static index via `createFromSource(source)`. No external search service.
- **Layout**: `app/layout.tsx` wraps everything in `DocsLayout` once at the root (not per-page). Header nav links live in `lib/layout.shared.tsx`.

## Content authoring notes

- MDX is parsed as JSX, so bare `<` followed by an alphanumeric is read as a tag start. Patterns like `<N`, `<5min`, `<container_id>` will fail the build — escape as `&lt;` or wrap in backticks. (See commit `80c0217`.)
- Frontmatter accepts a numeric `order` field beyond the Fumadocs defaults (defined in `source.config.ts`). Sidebar ordering is normally controlled by `meta.json`'s `pages` array, not frontmatter.
- Section roots: `introduction/meta.json` has `"root": true`, making it a top-level sidebar group rather than a nested folder.

## Deployment

Built as a standalone Next.js Docker image (`output: 'standalone'` in `next.config.mjs`, multi-stage `Dockerfile`). The companion `../deploy/` repo composes this image and routes `stackpatrol.dev/docs` through nginx. `public/` must exist at build time — it's tracked via `.gitkeep` so the Docker `COPY` stage doesn't fail.
