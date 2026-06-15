# zigong.fyi

An independent, **unofficial** portrait of the living city of **Zigong (自贡)**,
Sichuan, China — its deep history (salt, dinosaurs), its lantern culture, its
industry, and its everyday life. Essayistic in tone, written for a primarily
Chinese-national audience; promoting tourism is not a goal. See `CLAUDE.md` for
voice/intent.

> **Disclaimer:** This is an independent, unofficial project. It is **not affiliated
> with, endorsed by, or connected to** the city of Zigong, any government body, the
> places described, or any company.

## Languages

**Chinese is the authoritative version, served at the root**; the others are prefixed:

| Locale | URL |
|--------|-----|
| 中文 (authoritative) | `/` |
| English | `/en/` |
| 日本語 | `/ja/` |
| 한국어 | `/ko/` |

## Tech

- **[Astro](https://astro.build)** static site (built-in i18n routing, `defaultLocale: 'zh'`), no UI framework.
- **MDX content collections** — one entry per page per locale under
  `src/content/pages/<locale>/`. Organized into **themes** (Heritage, Culture,
  Industry, Everyday life, People & places) rather than tourist pillars.
- Hand-written CSS design system (`src/styles/global.css`) — an editorial
  "refined but warm" look: serif type, ink/paper palette, a single oxblood accent,
  CSS variables, and light/dark themes.
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
| `src/components/` | Nav, LanguageSwitcher, ThemeToggle, Footer, Hero, ContentPage, HomePage, BusinessDirectory, BusinessCard, BaiduMap |
| `src/data/businesses.ts` | Local-business directory data + per-locale copy (scaffold — replace placeholder entries) |
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

## Baidu Maps (optional)

Business listings with `baiduMap: true` (in `src/data/businesses.ts`) show a
"View on Baidu Maps" link by default. To upgrade that to an **interactive embedded
map**, provide a Baidu Maps JS API key at build time:

```bash
# .env (or a CI/Pages build secret), exposed to the client by the PUBLIC_ prefix
PUBLIC_BAIDU_MAPS_AK=your_baidu_ak
```

Get a key at <https://lbsyun.baidu.com/> (restrict it to the `zigong.fyi` domain).
The map locates each business by its Chinese name + area via Baidu `LocalSearch`,
so no manual coordinates are needed. Without the key, only the link renders — the
build never breaks. For the GitHub Pages deploy, add the key as a repository
**variable/secret** and pass it as `PUBLIC_BAIDU_MAPS_AK` in `deploy.yml`'s build
step. If you later add a Content-Security-Policy, allow Baidu's script/image hosts
(`api.map.baidu.com`, `*.bdimg.com`, `*.bdstatic.com`).

## Adding or changing content

Content lives in **four parallel files** per page. See [`CLAUDE.md`](./CLAUDE.md) —
**every content change must be made in all four locales together.**

Photography currently uses labelled placeholders; drop real images in and reference
them from the relevant MDX/component.
