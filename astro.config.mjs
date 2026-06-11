// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// zigong.fyi — independent, unofficial multilingual showcase of Zigong, China.
// English is served at the root; zh / ja / ko live under prefixed paths.
export default defineConfig({
  site: 'https://zigong.fyi',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja', 'ko'],
    routing: {
      // Keep English unprefixed at the root (zigong.fyi/), others at /zh/, /ja/, /ko/.
      prefixDefaultLocale: false,
      // Explicit in Astro 6 (default flipped to false) — no auto-redirect loops.
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', zh: 'zh-CN', ja: 'ja', ko: 'ko' },
      },
    }),
  ],
});
