// Local-business directory — SCAFFOLD.
//
// This is intentionally a placeholder structure. Replace the example entries
// below with real businesses over time (and add more), keeping every entry
// translated in all four locales per CLAUDE.md. Listings here are independent,
// editorial, and NOT paid or sponsored — keep them that way to stay consistent
// with the site's unofficial / unaffiliated stance.

import type { Locale } from '../i18n/ui';

type Loc = Record<Locale, string>;

export type BizCategory = 'lanterns' | 'food' | 'snacks' | 'tea' | 'sports' | 'crafts' | 'stay';

export interface Business {
  id: string;
  category: BizCategory;
  emoji: string;
  name: Loc;
  area: Loc;
  blurb: Loc;
  /** Cover image first; any extras render as thumbnails. Paths under /public. */
  images?: string[];
  /** Public contact number, shown as a tel: link. */
  phone?: string;
  /** Optional outbound link (official site / map). Omit for placeholders. */
  url?: string;
  /** Marks an example/scaffold card rather than a verified listing. */
  placeholder?: boolean;
}

/** Display order + labels for the category groupings. */
export const categoryOrder: BizCategory[] = ['lanterns', 'food', 'snacks', 'tea', 'sports', 'crafts', 'stay'];

export const categoryLabels: Record<BizCategory, Loc> = {
  lanterns: { en: 'Lantern workshops & makers', zh: '彩灯工坊与制作', ja: 'ランタン工房・メーカー', ko: '등불 공방·제작' },
  food: { en: 'Salt-Gang restaurants', zh: '盐帮菜餐馆', ja: '塩帮菜レストラン', ko: '옌방차이 식당' },
  snacks: { en: 'Snacks & local specialties', zh: '小吃与特产', ja: '軽食・名物', ko: '간식·특산품' },
  tea: { en: 'Tea houses', zh: '茶馆', ja: '茶館', ko: '찻집' },
  sports: { en: 'Sports & recreation', zh: '运动与休闲', ja: 'スポーツ・レジャー', ko: '스포츠·레저' },
  crafts: { en: 'Crafts & souvenirs', zh: '工艺与伴手礼', ja: '工芸・おみやげ', ko: '공예·기념품' },
  stay: { en: 'Places to stay', zh: '住宿', ja: '宿泊', ko: '숙소' },
};

const AREA = {
  ziliujing: { en: 'Ziliujing District', zh: '自流井区', ja: '自流井区', ko: '쯔류징구' },
  gongjing: { en: 'Gongjing District', zh: '贡井区', ja: '貢井区', ko: '궁징구' },
  daan: { en: "Da'an District", zh: '大安区', ja: '大安区', ko: '다안구' },
  yantan: { en: 'Yantan District', zh: '沿滩区', ja: '沿灘区', ko: '옌탄구' },
} satisfies Record<string, Loc>;

// Real, verified listings first, then example placeholders to fill in.
export const businesses: Business[] = [
  {
    id: 'xingkong-baseball',
    category: 'sports',
    emoji: '⚾',
    phone: '185 0813 4888',
    images: [
      '/images/businesses/xingkong-baseball-storefront.jpg',
      '/images/businesses/xingkong-baseball-nets.jpg',
      '/images/businesses/xingkong-baseball-cages.jpg',
    ],
    area: { en: 'Zigong', zh: '自贡', ja: '自貢', ko: '쯔궁' },
    name: {
      en: 'Xingkong Baseball Sports Hall',
      zh: '星空棒球运动馆',
      ja: '星空ベースボール運動館',
      ko: '싱쿵 야구 스포츠관',
    },
    blurb: {
      en: 'An indoor baseball center with batting nets, cages, and tees — an active, family-friendly outing, and home base for the local "Shenlong" team.',
      zh: '一家室内棒球运动馆，配有击球网、打击笼与打击架——是适合全家的活力去处，也是本地“燊龙队”的主场。',
      ja: '打撃ネット・ケージ・ティーを備えた屋内野球施設。家族で楽しめるアクティブなお出かけ先で、地元「燊龍」チームの本拠地でもあります。',
      ko: '타격 네트와 케이지, 티를 갖춘 실내 야구 센터 — 온 가족이 활기차게 즐길 나들이 장소이자 지역 “선룽” 팀의 홈입니다.',
    },
  },
  {
    id: 'example-lantern-workshop',
    category: 'lanterns',
    emoji: '🏮',
    placeholder: true,
    area: AREA.daan,
    name: { en: 'Example Lantern Workshop', zh: '示例彩灯工坊', ja: '見本ランタン工房', ko: '예시 등불 공방' },
    blurb: {
      en: 'A lantern-making studio or exporter — the craft Zigong is famous for. Your listing could go here.',
      zh: '一家彩灯制作工作室或出口商——自贡引以为傲的技艺。这里可以放置您的信息。',
      ja: 'ランタン制作スタジオや輸出業者——自貢が誇る技です。ここにあなたの情報を掲載できます。',
      ko: '등불 제작 스튜디오 또는 수출업체 — 쯔궁이 자랑하는 솜씨입니다. 이 자리에 정보를 실을 수 있습니다.',
    },
  },
  {
    id: 'example-saltgang-restaurant',
    category: 'food',
    emoji: '🍲',
    placeholder: true,
    area: AREA.ziliujing,
    name: { en: 'Example Salt-Gang Restaurant', zh: '示例盐帮菜餐馆', ja: '見本・塩帮菜レストラン', ko: '예시 옌방차이 식당' },
    blurb: {
      en: 'A restaurant serving Zigong’s fiery Salt-Gang cuisine. Your listing could go here.',
      zh: '一家供应自贡麻辣盐帮菜的餐馆。这里可以放置您的信息。',
      ja: '自貢の辛い塩帮菜を出すレストラン。ここにあなたの情報を掲載できます。',
      ko: '쯔궁의 매운 옌방차이를 내는 식당. 이 자리에 정보를 실을 수 있습니다.',
    },
  },
  {
    id: 'example-snack-shop',
    category: 'snacks',
    emoji: '🌶️',
    placeholder: true,
    area: AREA.gongjing,
    name: { en: 'Example Snack Shop', zh: '示例小吃店', ja: '見本・軽食店', ko: '예시 분식점' },
    blurb: {
      en: 'A spot for local snacks like cold-dressed rabbit (冷吃兔) and other specialties. Your listing could go here.',
      zh: '一家售卖冷吃兔等本地小吃与特产的店铺。这里可以放置您的信息。',
      ja: '冷吃兎などの地元の軽食・名物を扱うお店。ここにあなたの情報を掲載できます。',
      ko: '렁츠투(冷吃兔) 등 지역 간식과 특산품을 파는 가게. 이 자리에 정보를 실을 수 있습니다.',
    },
  },
  {
    id: 'example-tea-house',
    category: 'tea',
    emoji: '🍵',
    placeholder: true,
    area: AREA.ziliujing,
    name: { en: 'Example Tea House', zh: '示例茶馆', ja: '見本・茶館', ko: '예시 찻집' },
    blurb: {
      en: 'A traditional Sichuan tea house to slow down in. Your listing could go here.',
      zh: '一家可以慢下来歇脚的四川老茶馆。这里可以放置您的信息。',
      ja: 'ゆっくり過ごせる四川の伝統的な茶館。ここにあなたの情報を掲載できます。',
      ko: '느긋하게 쉬어 갈 수 있는 쓰촨 전통 찻집. 이 자리에 정보를 실을 수 있습니다.',
    },
  },
  {
    id: 'example-craft-shop',
    category: 'crafts',
    emoji: '🎁',
    placeholder: true,
    area: AREA.daan,
    name: { en: 'Example Craft & Souvenir Shop', zh: '示例工艺伴手礼店', ja: '見本・工芸おみやげ店', ko: '예시 공예·기념품점' },
    blurb: {
      en: 'Local crafts, gifts, and souvenirs to take home. Your listing could go here.',
      zh: '可带回家的本地工艺品、礼品与伴手礼。这里可以放置您的信息。',
      ja: '持ち帰れる地元の工芸品・ギフト・おみやげ。ここにあなたの情報を掲載できます。',
      ko: '집으로 가져갈 지역 공예품·선물·기념품. 이 자리에 정보를 실을 수 있습니다.',
    },
  },
  {
    id: 'example-stay',
    category: 'stay',
    emoji: '🏨',
    placeholder: true,
    area: AREA.yantan,
    name: { en: 'Example Hotel or Guesthouse', zh: '示例酒店或民宿', ja: '見本・ホテル／ゲストハウス', ko: '예시 호텔·게스트하우스' },
    blurb: {
      en: 'A place to stay while you explore the city. Your listing could go here.',
      zh: '探索这座城市时的落脚之处。这里可以放置您的信息。',
      ja: '街を巡る間の滞在先。ここにあなたの情報を掲載できます。',
      ko: '도시를 둘러보는 동안 머물 곳. 이 자리에 정보를 실을 수 있습니다.',
    },
  },
];

export interface DirectoryCopy {
  title: string;
  description: string;
  tagline: string;
  intro: string;
  areaLabel: string;
  placeholderBadge: string;
  comingSoon: string;
  disclaimerTitle: string;
  disclaimer: string;
  listTitle: string;
  listBody: string;
}

export const directory: Record<Locale, DirectoryCopy> = {
  en: {
    title: 'Local Businesses',
    description:
      'A growing, independent directory of Zigong’s local businesses — lantern workshops, Salt-Gang restaurants, snack shops, tea houses, and more.',
    tagline: 'The workshops, kitchens, and makers behind the city — a directory in progress.',
    intro:
      'A city is its people and the things they make. This is a growing directory of Zigong’s local businesses, grouped by what they do. The cards below are placeholders showing how listings will look — real entries are on the way.',
    areaLabel: 'Area',
    placeholderBadge: 'Example listing',
    comingSoon: 'Listing coming soon',
    disclaimerTitle: 'Independent & not sponsored',
    disclaimer:
      'Listings here are independent, editorial picks. They are not paid placements or advertisements, and inclusion does not imply any affiliation, endorsement, or partnership. This site remains unofficial and unaffiliated.',
    listTitle: 'Run a business in Zigong?',
    listBody:
      'This directory is being built. A way to suggest a business — free and non-sponsored — is coming soon.',
  },
  zh: {
    title: '本地商家',
    description:
      '一份不断扩充的自贡本地商家独立名录——彩灯工坊、盐帮菜餐馆、小吃店、茶馆等等。',
    tagline: '城市背后的工坊、灶台与匠人——一份正在完善的名录。',
    intro:
      '一座城市，是它的人和他们所创造的一切。这是一份不断扩充的自贡本地商家名录，按其经营类别分组。下方的卡片为占位示例，展示日后真实信息的呈现方式——真实条目即将上线。',
    areaLabel: '所在区',
    placeholderBadge: '示例条目',
    comingSoon: '信息即将上线',
    disclaimerTitle: '独立运营，绝非赞助',
    disclaimer:
      '此处的条目为独立的编辑甄选，并非付费推广或广告；被收录并不意味着任何隶属、背书或合作关系。本站始终保持非官方、无关联的立场。',
    listTitle: '您在自贡经营生意？',
    listBody: '本名录仍在建设中。一个免费、非赞助的商家推荐入口即将开放。',
  },
  ja: {
    title: '地元のお店',
    description:
      '自貢の地元のお店を集めた、少しずつ育つ独立系ディレクトリ——ランタン工房、塩帮菜レストラン、軽食店、茶館など。',
    tagline: '街を支える工房・厨房・作り手——制作中のディレクトリ。',
    intro:
      '街とは、そこに暮らす人々と、その人たちが生み出すものです。これは自貢の地元のお店を業種ごとにまとめた、少しずつ育つディレクトリです。下のカードは掲載イメージを示す仮のものです——実際の情報は近日公開。',
    areaLabel: 'エリア',
    placeholderBadge: '掲載イメージ',
    comingSoon: '情報は近日公開',
    disclaimerTitle: '独立運営・非スポンサー',
    disclaimer:
      'ここでの掲載は独立した編集上の選定であり、有料掲載や広告ではありません。掲載されていても、提携・推奨・協力関係を意味するものではありません。本サイトは非公式・無関係の立場を保ちます。',
    listTitle: '自貢でお店を営んでいますか？',
    listBody: 'このディレクトリは制作中です。無料・非スポンサーでお店を推薦できる窓口を近日公開します。',
  },
  ko: {
    title: '지역 상점',
    description:
      '쯔궁의 지역 상점을 모은, 점점 자라나는 독립 디렉터리 — 등불 공방, 옌방차이 식당, 분식점, 찻집 등.',
    tagline: '도시를 떠받치는 공방·주방·장인 — 만들어 가는 디렉터리.',
    intro:
      '도시는 곧 그곳의 사람들과 그들이 만들어 내는 것입니다. 이것은 쯔궁의 지역 상점을 업종별로 묶은, 점점 자라나는 디렉터리입니다. 아래 카드는 게재 형태를 보여 주는 임시 예시이며 — 실제 항목은 곧 공개됩니다.',
    areaLabel: '지역',
    placeholderBadge: '예시 항목',
    comingSoon: '정보 곧 공개',
    disclaimerTitle: '독립 운영·비후원',
    disclaimer:
      '여기의 항목은 독립적인 편집 선정이며 유료 게재나 광고가 아닙니다. 게재되었다고 해서 제휴·보증·협력 관계를 뜻하지 않습니다. 이 사이트는 비공식·무관 입장을 유지합니다.',
    listTitle: '쯔궁에서 가게를 운영하시나요?',
    listBody: '이 디렉터리는 만들어 가는 중입니다. 무료이며 비후원으로 가게를 추천할 수 있는 창구를 곧 엽니다.',
  },
};
