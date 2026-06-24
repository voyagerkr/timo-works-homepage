# TIMO WORKS Homepage

Official static homepage for `timo.work`.

The site introduces TIMO WORKS and its two products:

- TIMO: spare-time work matching mobile app
- TEMPO: attendance-management SaaS at `https://tempo.timo.work/`

## Local development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Deployment notes

- Static build output is written to `dist/`.
- `public/CNAME` contains `timo.work` for GitHub Pages custom-domain hosting.
- If deploying through Vercel or CloudFront instead, keep the root domain pointed at that host and serve the same `dist/` output.

## Source notes

This React/Vite implementation follows the visual handoff in `/Users/koji/Downloads/CODEX_HANDOFF.md`:

- dark cinematic Riot-style direction
- canvas constellation hero effect
- cursor spotlight
- scanline overlay
- shimmer/glitch headline treatment
- TIMO phone mock and TEMPO dashboard mock
- ko/en/ja/zh language switcher persisted in `localStorage.twLang`
- responsive mobile layout and `prefers-reduced-motion` support
