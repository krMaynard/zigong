// Central UI-string dictionary for site chrome (nav, footer, buttons, labels).
// Page *content* lives in MDX collections; this is only the surrounding UI.
//
// Localization discipline (see CLAUDE.md): every key MUST exist in all four
// locales. When you add a string, add it to en, zh, ja, and ko together.

export const locales = ['en', 'zh', 'ja', 'ko'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// Human-readable language names, shown in the language switcher.
export const languageNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
};

// BCP-47 codes for <html lang> and hreflang.
export const htmlLang: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-CN',
  ja: 'ja',
  ko: 'ko',
};

// Page route slugs (shared across locales — the locale prefix is added by routing).
export const routes = {
  home: '',
  lantern: 'lantern-festival',
  salt: 'salt',
  dinosaurs: 'dinosaurs',
  kids: 'kids',
  tech: 'tech',
  businesses: 'businesses',
  visit: 'visit',
  about: 'about',
} as const;

export type UI = {
  'site.name': string;
  'site.tagline': string;
  'nav.home': string;
  'nav.lantern': string;
  'nav.salt': string;
  'nav.dinosaurs': string;
  'nav.kids': string;
  'nav.tech': string;
  'nav.businesses': string;
  'nav.visit': string;
  'nav.about': string;
  'nav.menu': string;
  'lang.label': string;
  'theme.toggle': string;
  'skip.main': string;
  'action.readMore': string;
  'action.explore': string;
  'home.pillarsLabel': string;
  'home.galleryLabel': string;
  'home.galleryNote': string;
  'footer.disclaimer': string;
  'footer.disclaimerShort': string;
  'footer.builtBy': string;
  'footer.sources': string;
  'meta.defaultDescription': string;
};

export const ui: Record<Locale, UI> = {
  en: {
    'site.name': 'Zigong',
    'site.tagline': 'Lanterns, salt & dinosaurs — the vibrant heart of Sichuan',
    'nav.home': 'Home',
    'nav.lantern': 'Lantern Festival',
    'nav.salt': 'Salt City',
    'nav.dinosaurs': 'Dinosaurs',
    'nav.kids': 'For Kids',
    'nav.tech': 'Tech & Innovation',
    'nav.businesses': 'Local Businesses',
    'nav.visit': 'Visit',
    'nav.about': 'About',
    'nav.menu': 'Menu',
    'lang.label': 'Language',
    'theme.toggle': 'Toggle dark mode',
    'skip.main': 'Skip to main content',
    'action.readMore': 'Read more',
    'action.explore': 'Explore',
    'home.pillarsLabel': 'Discover Zigong',
    'home.galleryLabel': 'The city in pictures',
    'home.galleryNote': 'Photography placeholders — real photos coming soon.',
    'footer.disclaimer':
      'This is an independent, unofficial fan project celebrating the city of Zigong. It is not affiliated with, endorsed by, or connected to the city of Zigong, any government body, or any company.',
    'footer.disclaimerShort': 'Independent, unofficial fan project — not affiliated with any government or company.',
    'footer.builtBy': 'A labour of love for a remarkable city.',
    'footer.sources': 'Sources & credits',
    'meta.defaultDescription':
      'An independent, unofficial guide to Zigong, China — home of the world-famous Dinosaur Lantern Festival, a thousand years of salt-mining history, and real dinosaur fossils.',
  },
  zh: {
    'site.name': '自贡',
    'site.tagline': '彩灯、盐都与恐龙——四川的活力之心',
    'nav.home': '首页',
    'nav.lantern': '彩灯节',
    'nav.salt': '千年盐都',
    'nav.dinosaurs': '恐龙',
    'nav.kids': '亲子游',
    'nav.tech': '科技与创新',
    'nav.businesses': '本地商家',
    'nav.visit': '出行指南',
    'nav.about': '关于',
    'nav.menu': '菜单',
    'lang.label': '语言',
    'theme.toggle': '切换深色模式',
    'skip.main': '跳转到正文',
    'action.readMore': '阅读更多',
    'action.explore': '探索',
    'home.pillarsLabel': '发现自贡',
    'home.galleryLabel': '光影里的城市',
    'home.galleryNote': '此处为占位图片，真实照片即将上线。',
    'footer.disclaimer':
      '本站是一个独立、非官方的爱好者项目，旨在展现自贡这座城市的魅力。本站与自贡市政府、任何政府机构或任何企业均无隶属、合作或背书关系。',
    'footer.disclaimerShort': '独立、非官方的爱好者项目——与任何政府机构或企业均无关联。',
    'footer.builtBy': '献给一座了不起的城市。',
    'footer.sources': '资料来源与致谢',
    'meta.defaultDescription':
      '一份独立、非官方的自贡城市指南——这里有举世闻名的自贡国际恐龙灯会、千年井盐开采史，以及真正的恐龙化石。',
  },
  ja: {
    'site.name': '自貢',
    'site.tagline': 'ランタン・塩・恐竜——四川のいきいきとした中心地',
    'nav.home': 'ホーム',
    'nav.lantern': 'ランタン祭り',
    'nav.salt': '塩の都',
    'nav.dinosaurs': '恐竜',
    'nav.kids': '子ども向け',
    'nav.tech': '技術と革新',
    'nav.businesses': '地元のお店',
    'nav.visit': '旅のヒント',
    'nav.about': 'このサイトについて',
    'nav.menu': 'メニュー',
    'lang.label': '言語',
    'theme.toggle': 'ダークモード切り替え',
    'skip.main': '本文へスキップ',
    'action.readMore': '続きを読む',
    'action.explore': '見てみる',
    'home.pillarsLabel': '自貢を知る',
    'home.galleryLabel': '写真で見る街',
    'home.galleryNote': 'これらは仮の画像です。実際の写真は近日公開予定。',
    'footer.disclaimer':
      '本サイトは、自貢市の魅力を紹介する独立した非公式のファンプロジェクトです。自貢市、いかなる政府機関、いかなる企業とも提携・関連・推奨関係はありません。',
    'footer.disclaimerShort': '独立した非公式のファンプロジェクト——政府・企業とは一切無関係です。',
    'footer.builtBy': 'すばらしい街への愛を込めて。',
    'footer.sources': '出典とクレジット',
    'meta.defaultDescription':
      '中国・自貢市の独立した非公式ガイド。世界的に有名な恐竜ランタン祭り、千年にわたる製塩の歴史、本物の恐竜化石の街。',
  },
  ko: {
    'site.name': '쯔궁',
    'site.tagline': '등불·소금·공룡 — 쓰촨의 활기찬 심장',
    'nav.home': '홈',
    'nav.lantern': '등불 축제',
    'nav.salt': '소금의 도시',
    'nav.dinosaurs': '공룡',
    'nav.kids': '아이들과 함께',
    'nav.tech': '기술과 혁신',
    'nav.businesses': '지역 상점',
    'nav.visit': '여행 안내',
    'nav.about': '소개',
    'nav.menu': '메뉴',
    'lang.label': '언어',
    'theme.toggle': '다크 모드 전환',
    'skip.main': '본문으로 건너뛰기',
    'action.readMore': '더 보기',
    'action.explore': '둘러보기',
    'home.pillarsLabel': '쯔궁 둘러보기',
    'home.galleryLabel': '사진으로 보는 도시',
    'home.galleryNote': '임시 이미지입니다. 실제 사진은 곧 공개됩니다.',
    'footer.disclaimer':
      '이 사이트는 쯔궁시의 매력을 소개하는 독립적이고 비공식적인 팬 프로젝트입니다. 쯔궁시, 어떤 정부 기관, 어떤 기업과도 제휴·연관·후원 관계가 없습니다.',
    'footer.disclaimerShort': '독립적·비공식 팬 프로젝트 — 어떤 정부나 기업과도 무관합니다.',
    'footer.builtBy': '멋진 도시를 향한 애정으로 만들었습니다.',
    'footer.sources': '출처 및 크레딧',
    'meta.defaultDescription':
      '중국 쯔궁시에 대한 독립적·비공식 안내서 — 세계적으로 유명한 공룡 등불 축제, 천 년의 소금 채굴 역사, 진짜 공룡 화석의 도시.',
  },
};
