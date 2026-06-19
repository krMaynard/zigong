# CLAUDE.md — zigong.fyi

An independent, **unofficial** multilingual site about the city of Zigong (自贡),
China. Astro static site, deployed to GitHub Pages at **zigong.fyi**.

## What this site is (tone & intent)

A closely-observed portrait of Zigong as a **living city** — its deep history
(salt, dinosaurs), its lantern culture, its **industry and economy now**, and its
**everyday life** — written for a primarily **Chinese-national** audience (foreign
visitors secondary). Promoting tourism is **not** a goal.

- **Voice:** essayistic and literary, **reflective but impersonal** (no "I" — the
  perspective shows through judgement and framing). Substantial but tight; keep
  cited sources.
- **Depth:** the Chinese text assumes a culturally-Chinese reader and goes for
  insight over explaining basics; en/ja/ko add light context only where outsiders
  need it.

## Localization is load-bearing — update all four languages together

**Chinese is the authoritative version, served at the root.** Locales: Chinese
(root, `/`), English (`/en/`), Japanese (`/ja/`), Korean (`/ko/`). Whenever content
is added or changed in one language, the corresponding files in **all four**
languages MUST be updated in the same commit, with **Chinese written first** as the
lead version.

- Page content lives in MDX, one file per page per locale:
  `src/content/pages/<locale>/<slug>.mdx` for `locale ∈ {zh, en, ja, ko}`.
  Every page exists as **four parallel files** with identical front-matter keys
  (`title`, `description`, `emoji`, `order`, optional `tagline`, `sources`) — only
  the human-readable values are translated. Keep `emoji` and `order` identical
  across locales so sorting lines up. (`accent` is legacy/ignored — the design uses
  a single site-wide accent.)
- Site **chrome** strings (nav, footer, buttons, disclaimer) live in
  `src/i18n/ui.ts`. Every key must exist in all four locales — add `en`, `zh`,
  `ja`, `ko` together.
- Home (Overview) copy — the framing essay + theme cards — lives in
  `src/i18n/home.ts`, with an entry per locale.
- Translations should read **naturally in each language**, never mirror word-for-
  word. Chinese is the authoritative native text the others follow.

## Gloss Chinese terms with hanzi in the non-Chinese pages

In the **en / ja / ko** pages (never zh — it is the authoritative source of the
characters), the **first mention on each page** of any China-specific proper noun
— places, people, institutions/companies, named dishes, cultural works/phrases —
must carry a gloss:

- **English & Korean:** append the **simplified** Chinese characters in parentheses
  — `Xiqin Guildhall (西秦会馆)`, `시친 회관(西秦会馆)`. If an italic pinyin gloss is
  already present, combine it: `Salt-Gang cuisine (盐帮菜, *yánbāng cài*)`.
- **Japanese:** the names are already in kanji, so instead add the **onyomi reading**
  in full-width parentheses where the kanji are likely hard to read —
  `燊海井（しんかいせい）`, `王和甫（おう・わほ）` (use ・ between surname and given
  name). Skip common/easy kanji (塩, 四川, 春節…). For a name written with a
  non-Japanese character (e.g. a brand like 卡通尼), render it naturally in
  katakana and put the Chinese in parens — `カートゥーニー（卡通尼）`.
- **First mention only**, judged independently per file; leave later repeats
  unglossed. **Body text + visible `<figcaption>` only** — never front-matter
  (title/description/sources) or image `alt`.
- Avoid nested/adjacent parentheses: if a gloss meets an existing parenthetical,
  merge with `;`/`,` rather than stacking `()()` or `(…(…))`.

## Structure (themes)

The site is organized into **themes**, not tourist pillars: **Overview** (home),
**Heritage** (salt + dinosaurs), **Culture** (lanterns), **Industry** (the salt-to-
present economy), **Everyday life** (food, kids, lifestyle), **People & places**
(the businesses directory), and **About**. Nav/footer labels live in `ui.ts`
(`nav.*`); the `routes` map points each theme at its slug. Some themes currently
resolve to a single existing essay (Culture→`lantern-festival`, Industry→`tech`,
Everyday→`kids`) pending dedicated section pages + deeper rewrites. There is **no
"Visit" page** (tourism logistics were removed).

## Routing

- **Chinese is unprefixed at the root** (`defaultLocale: 'zh'`,
  `prefixDefaultLocale: false`); en/ja/ko are under `/en/`, `/ja/`, `/ko/`
  (`astro.config.mjs` → `i18n`). Old `/zh/*` URLs redirect to root (see `redirects`).
- Home pages: `src/pages/index.astro` (zh) + `src/pages/<locale>/index.astro` (thin
  wrappers around `HomePage.astro`).
- Content pages: `src/pages/[page].astro` (zh, root) + `src/pages/<locale>/[page].astro`,
  each calling `pillarPaths(locale)` from `src/lib/content.ts`.
- The language switcher maps the current path across locales via
  `switchLocalePath` (`src/i18n/utils.ts`) so visitors stay on the same page.
  hreflang alternates in `BaseLayout.astro` rely on the same helper.

## Facts & sources

- Content is an independent guide built from **public sources**. Cite sources in
  each page's `sources` front-matter array; they render at the foot of the page.
  Each entry is plain text **or** a `{ text, url }` pair — prefer the pair so the
  source renders as a working link to the original.
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
