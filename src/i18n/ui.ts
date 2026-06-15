// Central UI-string dictionary for site chrome (nav, footer, buttons, labels).
// Page *content* lives in MDX collections / home.ts; this is only the chrome.
//
// Localization discipline (see CLAUDE.md): every key MUST exist in all four
// locales. Chinese is the authoritative version; add zh, en, ja, ko together.

export const locales = ['zh', 'en', 'ja', 'ko'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

export const languageNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
  ko: '한국어',
};

// BCP-47 codes for <html lang> and hreflang.
export const htmlLang: Record<Locale, string> = {
  zh: 'zh-CN',
  en: 'en',
  ja: 'ja',
  ko: 'ko',
};

// Theme route slugs ('' = the Overview / home). Some themes currently point at
// an existing essay; dedicated section pages arrive in later per-section work.
export const routes = {
  home: '',
  heritage: 'heritage',
  culture: 'lantern-festival',
  industry: 'tech',
  everyday: 'kids',
  people: 'businesses',
  about: 'about',
} as const;

export type UI = {
  'site.name': string;
  'site.tagline': string;
  'nav.overview': string;
  'nav.heritage': string;
  'nav.culture': string;
  'nav.industry': string;
  'nav.everyday': string;
  'nav.people': string;
  'nav.about': string;
  'nav.menu': string;
  'lang.label': string;
  'theme.toggle': string;
  'skip.main': string;
  'footer.disclaimer': string;
  'footer.disclaimerShort': string;
  'footer.builtBy': string;
  'footer.sources': string;
  'meta.defaultDescription': string;
};

export const ui: Record<Locale, UI> = {
  zh: {
    'site.name': '自贡',
    'site.tagline': '读懂一座中国城市：它的过去、它的劳作、它的日常。',
    'nav.overview': '概览',
    'nav.heritage': '历史遗产',
    'nav.culture': '文化',
    'nav.industry': '产业',
    'nav.everyday': '日常生活',
    'nav.people': '店家与街巷',
    'nav.about': '关于',
    'nav.menu': '菜单',
    'lang.label': '语言',
    'theme.toggle': '切换深色模式',
    'skip.main': '跳转到正文',
    'footer.disclaimer':
      '本站是一个独立、非官方的项目，旨在理解与呈现自贡这座城市。本站与自贡市政府、任何政府机构或任何企业均无隶属、合作或背书关系。',
    'footer.disclaimerShort': '独立、非官方项目——与任何政府机构或企业均无关联。',
    'footer.builtBy': '出于对一座城市的好奇而作。',
    'footer.sources': '资料来源',
    'meta.defaultDescription':
      '一个独立、非官方的视角，细致观察中国自贡这座鲜活的城市——它的盐与恐龙的深远历史、彩灯文化、产业，以及日常生活。',
  },
  en: {
    'site.name': 'Zigong',
    'site.tagline': 'Understanding a Chinese city — its past, its work, its daily life.',
    'nav.overview': 'Overview',
    'nav.heritage': 'Heritage',
    'nav.culture': 'Culture',
    'nav.industry': 'Industry',
    'nav.everyday': 'Everyday life',
    'nav.people': 'People & places',
    'nav.about': 'About',
    'nav.menu': 'Menu',
    'lang.label': 'Language',
    'theme.toggle': 'Toggle dark mode',
    'skip.main': 'Skip to main content',
    'footer.disclaimer':
      'This is an independent, unofficial project that tries to understand and portray the city of Zigong. It is not affiliated with, endorsed by, or connected to the city of Zigong, any government body, or any company.',
    'footer.disclaimerShort': 'Independent, unofficial project — not affiliated with any government or company.',
    'footer.builtBy': 'Made out of curiosity about a city.',
    'footer.sources': 'Sources',
    'meta.defaultDescription':
      'An independent, unofficial look at Zigong, China — a closely observed portrait of a living city: its salt-and-dinosaur deep history, its lantern culture, its industry, and its everyday life.',
  },
  ja: {
    'site.name': '自貢',
    'site.tagline': 'ある中国の都市を理解する——その歴史、その営み、その日常。',
    'nav.overview': '概観',
    'nav.heritage': '遺産',
    'nav.culture': '文化',
    'nav.industry': '産業',
    'nav.everyday': '暮らし',
    'nav.people': '店と街の人',
    'nav.about': 'このサイトについて',
    'nav.menu': 'メニュー',
    'lang.label': '言語',
    'theme.toggle': 'ダークモード切り替え',
    'skip.main': '本文へスキップ',
    'footer.disclaimer':
      '本サイトは、自貢市を理解し描こうとする独立した非公式のプロジェクトです。自貢市、いかなる政府機関、いかなる企業とも提携・関連・推奨関係はありません。',
    'footer.disclaimerShort': '独立した非公式プロジェクト——政府・企業とは一切無関係です。',
    'footer.builtBy': 'ひとつの街への好奇心から。',
    'footer.sources': '出典',
    'meta.defaultDescription':
      '中国・自貢を見つめる独立した非公式の試み——塩と恐竜の深い歴史、ランタン文化、産業、そして日常を見つめる、生きた都市の肖像。',
  },
  ko: {
    'site.name': '쯔궁',
    'site.tagline': '한 중국 도시를 이해하기 — 그 역사, 그 노동, 그 일상.',
    'nav.overview': '개관',
    'nav.heritage': '유산',
    'nav.culture': '문화',
    'nav.industry': '산업',
    'nav.everyday': '일상',
    'nav.people': '가게와 거리',
    'nav.about': '소개',
    'nav.menu': '메뉴',
    'lang.label': '언어',
    'theme.toggle': '다크 모드 전환',
    'skip.main': '본문으로 건너뛰기',
    'footer.disclaimer':
      '이 사이트는 쯔궁시를 이해하고 그려 보려는 독립적이고 비공식적인 프로젝트입니다. 쯔궁시, 어떤 정부 기관, 어떤 기업과도 제휴·연관·후원 관계가 없습니다.',
    'footer.disclaimerShort': '독립적·비공식 프로젝트 — 어떤 정부나 기업과도 무관합니다.',
    'footer.builtBy': '한 도시에 대한 호기심에서.',
    'footer.sources': '출처',
    'meta.defaultDescription':
      '중국 쯔궁을 들여다보는 독립적·비공식 시도 — 소금과 공룡의 깊은 역사, 등불 문화, 산업, 그리고 일상을 담은, 살아 있는 도시의 초상.',
  },
};
