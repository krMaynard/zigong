// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// zigong.fyi — an independent, unofficial portrait of the living city of Zigong.
// Chinese is the authoritative version, served at the root; en / ja / ko are
// translations under prefixed paths.
export default defineConfig({
  site: 'https://zigong.fyi',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'ja', 'ko'],
    routing: {
      // Chinese stays unprefixed at the root (zigong.fyi/); others at /en/, /ja/, /ko/.
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  // Consolidate the previous /zh/* URLs onto the root, and retire the Visit page.
  redirects: {
    '/zh/': '/',
    '/zh/salt/': '/salt/',
    '/zh/dinosaurs/': '/dinosaurs/',
    '/zh/lantern-festival/': '/lantern-festival/',
    '/zh/tech/': '/tech/',
    '/zh/kids/': '/kids/',
    '/zh/about/': '/about/',
    '/zh/businesses/': '/businesses/',
    '/zh/visit/': '/',
    '/visit/': '/en/',
    '/ja/visit/': '/ja/',
    '/ko/visit/': '/ko/',
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: { zh: 'zh-CN', en: 'en', ja: 'ja', ko: 'ko' },
      },
    }),
  ],
});
