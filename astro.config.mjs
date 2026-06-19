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
  // The themes are now long-scroll section pages (heritage / culture / industry
  // / everyday); each topic essay lives inside its section and is reached via an
  // anchor. Redirect the old standalone essay URLs (and the legacy /zh/* URLs)
  // to those anchors, in every locale, and retire the Visit page.
  redirects: {
    '/zh/': '/',
    // Legacy /zh/* essay URLs → final section anchors.
    '/zh/salt/': '/heritage/#salt',
    '/zh/dinosaurs/': '/heritage/#dinosaurs',
    '/zh/lantern-festival/': '/culture/#lantern-festival',
    '/zh/tech/': '/industry/#tech',
    '/zh/kids/': '/everyday/#kids',
    '/zh/about/': '/about/',
    '/zh/businesses/': '/businesses/',
    // Chinese (root) essay URLs → section anchors.
    '/salt/': '/heritage/#salt',
    '/dinosaurs/': '/heritage/#dinosaurs',
    '/lantern-festival/': '/culture/#lantern-festival',
    '/tech/': '/industry/#tech',
    '/kids/': '/everyday/#kids',
    // English essay URLs → section anchors.
    '/en/salt/': '/en/heritage/#salt',
    '/en/dinosaurs/': '/en/heritage/#dinosaurs',
    '/en/lantern-festival/': '/en/culture/#lantern-festival',
    '/en/tech/': '/en/industry/#tech',
    '/en/kids/': '/en/everyday/#kids',
    // Japanese essay URLs → section anchors.
    '/ja/salt/': '/ja/heritage/#salt',
    '/ja/dinosaurs/': '/ja/heritage/#dinosaurs',
    '/ja/lantern-festival/': '/ja/culture/#lantern-festival',
    '/ja/tech/': '/ja/industry/#tech',
    '/ja/kids/': '/ja/everyday/#kids',
    // Korean essay URLs → section anchors.
    '/ko/salt/': '/ko/heritage/#salt',
    '/ko/dinosaurs/': '/ko/heritage/#dinosaurs',
    '/ko/lantern-festival/': '/ko/culture/#lantern-festival',
    '/ko/tech/': '/ko/industry/#tech',
    '/ko/kids/': '/ko/everyday/#kids',
    // Retired Visit page.
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
