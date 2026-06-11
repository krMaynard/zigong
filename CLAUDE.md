# CLAUDE.md — zigong.fyi

An independent, **unofficial** multilingual site about the city of Zigong (自贡),
China. Astro static site, deployed to GitHub Pages at **zigong.fyi**.

## Localization is load-bearing — update all four languages together

The site has native content in **English (root), Chinese (`/zh/`), Japanese
(`/ja/`), and Korean (`/ko/`)**. Whenever content is added or changed in one
language, the corresponding files in **all four** languages MUST be updated in the
same commit.

- Page content lives in MDX, one file per page per locale:
  `src/content/pages/<locale>/<slug>.mdx` for `locale ∈ {en, zh, ja, ko}`.
  Every page exists as **four parallel files** with identical front-matter keys
  (`title`, `description`, `accent`, `emoji`, `order`, optional `tagline`,
  `sources`) — only the human-readable values are translated. Keep `accent`,
  `emoji`, and `order` identical across locales so the nav/sorting line up.
- Site **chrome** strings (nav, footer, buttons, disclaimer) live in
  `src/i18n/ui.ts`. Every key must exist in all four locales — add `en`, `zh`,
  `ja`, `ko` together.
- Home-page copy (hero tagline, pillar blurbs, gallery captions) lives in
  `src/i18n/home.ts`, again with an entry per locale.
- Translations should read **naturally in each language**, not mirror the English
  word-for-word. Chinese especially must read as authentic native content.

## Routing

- English is unprefixed at the root (`prefixDefaultLocale: false`); other locales
  are under `/zh/`, `/ja/`, `/ko/` (`astro.config.mjs` → `i18n`).
- Home pages: `src/pages/index.astro` + `src/pages/<locale>/index.astro` (thin
  wrappers around `HomePage.astro`).
- Content pages: `src/pages/[page].astro` (en) + `src/pages/<locale>/[page].astro`,
  each calling `pillarPaths(locale)` from `src/lib/content.ts`.
- The language switcher maps the current path across locales via
  `switchLocalePath` (`src/i18n/utils.ts`) so visitors stay on the same page.
  hreflang alternates in `BaseLayout.astro` rely on the same helper.

## Facts & sources

- Content is an independent guide built from **public sources**. Cite sources in
  each page's `sources` front-matter array; they render at the foot of the page.
- Before changing factual claims (festival dates, well depths, museum details),
  verify against a current source — don't assert from memory.

## Disclaimer

Keep the unofficial/unaffiliated disclaimer intact in the footer
(`src/components/Footer.astro` via `ui.ts` `footer.disclaimer`) and on the About
page. This project is not affiliated with the city, any government, or any company.

## Before pushing

Run `npm run build` and `npm run check` — keep both clean. The build emits all
pages × 4 locales; a missing translation shows up as a missing route.

## Pull requests

After opening or updating a PR, self-review the diff and post a short comment
noting what was checked (build/check results, anything to flag). Address review
feedback (including automated reviewers) — apply the fix or explain why not; don't
leave review comments unacknowledged.
