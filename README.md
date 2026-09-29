# AFon Training

Website for AFon Training (working name). Separate from Recept Training.

Same stack as Statement Now: Next.js, Tailwind, Vercel, and Supabase when bookings need a database.

- `app/page.tsx`: homepage (design awaiting approval)
- `app/gate/`, `proxy.ts`: preview password gate
- `docs/SCOPING.md`: scope, current phase and page copy
- `docs/THEME_DESIGN.md`: Heather & Marigold theme brief

## Running locally

```
pnpm install
pnpm dev
```

The password gate is off in `pnpm dev` unless `SITE_PASSWORD` is set.

## Vercel settings

- Environment variable `SITE_PASSWORD`: the preview password. The site returns 503 in production if it is missing.
- Domain: `controlnow.co.uk` for now (DNS at Squarespace).
