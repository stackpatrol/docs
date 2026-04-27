# StackPatrol Docs

Documentation site for [StackPatrol](https://stackpatrol.dev) — a Rust CLI + Telegram bot for server monitoring.

Built with [Fumadocs](https://fumadocs.vercel.app/) on Next.js 16.

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000/docs`.

## Building

```bash
npm run build
npm start
```

## Content layout

All MDX content lives under `content/docs/`. Sections:

- `introduction/` — what StackPatrol is, why it exists, how it works, quick start
- `cli/` — command reference (`init`, `daemon`, `status`, `alert-test`, ...)
- `guide/monitoring/` — built-in probes (Docker, systemd, ports, resources)
- `guide/alerts/` — Telegram alert routing, recovery, coalescing, silences
- `guide/plans/` — Free / Pro / Team tier breakdown
- `reference/` — token format, event schema, architecture overview

Each folder has a `meta.json` controlling its sidebar order and icon. See [Fumadocs source API](https://fumadocs.vercel.app/docs/headless/source-api).

## Deployment

Built as a standalone Next.js Docker image. The deployment compose file in `../deploy/` builds this directory and routes `stackpatrol.dev/docs` to it via nginx.

## License

MIT.
