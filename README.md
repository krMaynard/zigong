# zigong.fyi

An independent, **unofficial** multilingual showcase of the city of **Zigong (自贡)**,
Sichuan, China — home of the world-famous Dinosaur Lantern Festival, a thousand
years of salt-mining history, and one of the planet's great dinosaur fossil sites.

> **Disclaimer:** This is an independent fan project. It is **not affiliated with,
> endorsed by, or connected to** the city of Zigong, any government body, the
> attractions described, or any company.

## Languages

Native content in four languages, English served at the root:

| Locale | URL |
|--------|-----|
| English | `/` |
| 中文 | `/zh/` |
| 日本語 | `/ja/` |
| 한국어 | `/ko/` |

## Tech

- **[Astro](https://astro.build)** static site (built-in i18n routing), no UI framework.
- **MDX content collections** — one entry per page per locale under
  `src/content/pages/<locale>/`.
- Hand-written CSS design system (`src/styles/global.css`) with a lantern-festival
  palette, CSS variables, and light/dark themes.
- Deployed to **GitHub Pages** at the custom domain **zigong.fyi**.

## Develop

```bash
npm install
npm run dev       # local dev server
npm run build     # static build → dist/
npm run preview   # preview the production build
npm run check     # astro type/diagnostics check
```

## Project layout

| Path | Purpose |
|------|---------|
| `src/pages/` | Routes: localized home pages + `[page].astro` content routes per locale |
| `src/content/pages/{en,zh,ja,ko}/*.mdx` | Page content, one file per page per locale |
| `src/content.config.ts` | Content collection schema |
| `src/layouts/BaseLayout.astro` | `<head>`, SEO/OG, hreflang, theme script, nav + footer |
| `src/components/` | Nav, LanguageSwitcher, ThemeToggle, Footer, Hero, PillarCard, PhotoStrip, ContentPage, HomePage |
| `src/i18n/ui.ts` | UI string dictionary (site chrome) |
| `src/i18n/home.ts` | Home-page copy per locale |
| `src/i18n/utils.ts` | `useTranslations`, locale URL helpers, language-switch path mapping |
| `public/` | `CNAME`, favicon, OG image, robots.txt |
| `.github/workflows/deploy.yml` | Build + deploy to GitHub Pages |

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml` (the official
`withastro/action`), which builds and publishes to GitHub Pages.

**One-time setup:** in the repo, set **Settings → Pages → Source = GitHub Actions**,
and point the `zigong.fyi` DNS at GitHub Pages. The `public/CNAME` file is already
in place.

## Adding or changing content

Content lives in **four parallel files** per page. See [`CLAUDE.md`](./CLAUDE.md) —
**every content change must be made in all four locales together.**

Photography currently uses labelled placeholders; drop real images in and reference
them from the relevant MDX/component.
