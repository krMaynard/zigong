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
  /** Show a Baidu Maps block (interactive map when an `ak` is configured,
   *  otherwise just a "View on Baidu Maps" link). Located by name + area. */
  baiduMap?: boolean;
  /** Marks an example/scaffold card rather than a verified listing. */
  placeholder?: boolean;
}

/** Display order + labels for the category groupings. */
export const categoryOrder: BizCategory[] = ['lanterns', 'food', 'snacks', 'tea', 'sports', 'crafts', 'stay'];

export const categoryLabels: Record<BizCategory, Loc> = {
  lanterns: { en: 'Lantern workshops & makers', zh: '彩灯工坊与制作', ja: 'ランタン工房・メーカー', ko: '등불 공방·제작' },
  food: { en: 'Restaurants & hotpot', zh: '餐馆与火锅', ja: 'レストラン・火鍋', ko: '식당·훠궈' },
  snacks: { en: 'Snacks & local specialties', zh: '小吃与特产', ja: '軽食・名物', ko: '간식·특산품' },
  tea: { en: 'Tea houses', zh: '茶馆', ja: '茶館', ko: '찻집' },
  sports: { en: 'Sports & recreation', zh: '运动与休闲', ja: 'スポーツ・レジャー', ko: '스포츠·레저' },
  crafts: { en: 'Crafts & souvenirs', zh: '工艺与伴手礼', ja: '工芸・おみやげ', ko: '공예·기념품' },
  stay: { en: 'Places to stay', zh: '住宿', ja: '宿泊', ko: '숙소' },
};

// Verified listings. Add new entries here (keep all four locales in sync).
export const businesses: Business[] = [
  {
    id: 'xingkong-baseball',
    category: 'sports',
    emoji: '⚾',
    phone: '185 0813 4888',
    baiduMap: true,
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
      en: 'An indoor baseball center with batting nets, cages, and tees — an active, family-friendly outing.',
      zh: '一家室内棒球运动馆，配有击球网、打击笼与打击架——是适合全家的活力去处。',
      ja: '打撃ネット・ケージ・ティーを備えた屋内野球施設。家族で楽しめるアクティブなお出かけ先です。',
      ko: '타격 네트와 케이지, 티를 갖춘 실내 야구 센터 — 온 가족이 활기차게 즐길 나들이 장소입니다.',
    },
  },
  {
    id: 'houshanpo-spring-rolls',
    category: 'snacks',
    emoji: '🥟',
    images: ['/images/businesses/houshanpo-spring-rolls.jpg'],
    area: {
      en: 'Colorful Market food hall, Huashang International City (华商·国际城 · 华彩市集)',
      zh: '华商·国际城 · 华彩市集',
      ja: '華商・国際城 華彩市集（Colorful Market）',
      ko: '화상·궈지청 화차이 시장(华彩市集)',
    },
    name: {
      en: 'Houshanpo Spring Rolls (后山坡春卷儿)',
      zh: '后山坡春卷儿',
      ja: '後山坡春巻き（后山坡春卷儿）',
      ko: '허우산포 춘권(后山坡春卷儿)',
    },
    blurb: {
      en: 'A snack stall in the Colorful Market food hall inside Huashang International City: hand-rolled Sichuan spring rolls (about 10 yuan a box), plus grilled and meat sausages on a stick — a quick, cheap bite while you’re at the mall.',
      zh: '华商·国际城“华彩市集”里的一处小吃摊：现包的川式春卷（约 10 元一盒），还有烤肠、肉肠——逛商场时一份便宜实惠的随手小吃。',
      ja: '華商・国際城の「華彩市集」にある軽食の屋台。手づくりの四川風春巻き（一箱およそ10元）に、焼きソーセージや肉ソーセージ——モール散策のついでに楽しめる安い一口です。',
      ko: '화상·궈지청 ‘화차이 시장(华彩市集)’ 안의 간식 노점: 직접 만든 쓰촨식 춘권(한 박스 약 10위안)과 구운 소시지·고기 소시지 — 쇼핑하다 들르기 좋은 싸고 간단한 한 입.',
    },
  },
  {
    id: 'guoguojiu-camping-hotpot',
    category: 'food',
    emoji: '🍲',
    baiduMap: true,
    area: {
      en: 'Nanhu, Ziliujing District (南湖)',
      zh: '自流井区南湖',
      ja: '自流井区・南湖（なんこ）',
      ko: '쯔류징구 난후(南湖)',
    },
    name: {
      en: 'Guoguojiu Camping Hotpot (锅锅九露营火锅)',
      zh: '锅锅九露营火锅',
      ja: '鍋鍋九キャンプ火鍋（锅锅九露营火锅）',
      ko: '궈궈지우 캠핑 훠궈(锅锅九露营火锅)',
    },
    blurb: {
      en: 'A camping-themed hotpot restaurant — tents, greenery, and an outdoorsy mood brought indoors — known for its probiotic twin-broth pot, with sides like crispy pork, shrimp-and-roe paste, and matsutake wontons. A Sichuan hotpot night with a “glamping” twist.',
      zh: '一家“露营风”的火锅店，把帐篷、绿植与户外氛围搬进店里，主打乳酸菌鸳鸯锅底，配龙须酥肉、鱼籽虾滑、松茸抄手等——在城里吃一顿“野”味十足的川式火锅。',
      ja: 'キャンプ風の火鍋店。テントや観葉植物でアウトドアの雰囲気を店内に持ち込み、乳酸菌の鴛鴦（二色）鍋を看板に、酥肉（揚げ豚）や海老のすり身、松茸ワンタンなどを合わせる——街なかで楽しむ「グランピング」流の四川火鍋。',
      ko: '캠핑 콘셉트의 훠궈집 — 텐트와 화초로 야외 분위기를 실내에 들였다. 유산균 원앙(이색) 육수를 간판으로, 바삭한 돼지고기 튀김·날치알 새우완자·송이 만두 등을 곁들인다. 도심에서 즐기는 ‘글램핑’ 풍 쓰촨 훠궈.',
    },
  },
  {
    id: 'chuannan-tennis-center',
    category: 'sports',
    emoji: '🎾',
    baiduMap: true,
    area: {
      en: 'Nanhu Sports & Culture Center (南湖体育文化中心)',
      zh: '南湖体育文化中心',
      ja: '南湖体育文化センター（南湖体育文化中心）',
      ko: '난후 체육문화센터(南湖体育文化中心)',
    },
    name: {
      en: 'Chuannan International Tennis Center (川南国际网球中心)',
      zh: '川南国际网球中心',
      ja: '川南国際テニスセンター（川南国际网球中心）',
      ko: '촨난 국제 테니스 센터(川南国际网球中心)',
    },
    blurb: {
      en: 'Part of Zigong’s Nanhu Sports & Culture Center, built to host the Sichuan Provincial Games. As the city has become a regular host of national- and international-level events, this is one of the places to watch — or play — tennis.',
      zh: '川南国际网球中心是自贡南湖体育文化中心的一部分，为承办四川省运会而建。近年自贡频频承办全国乃至国际级赛事，这里正是看球、打球的去处之一。',
      ja: '自貢の南湖体育文化センターの一部で、四川省運動会の開催のために建てられた。近年、自貢は全国・国際級の大会を相次いで誘致しており、ここはその観戦・プレーの拠点の一つだ。',
      ko: '쯔궁 난후 체육문화센터의 일부로, 쓰촨성 체전을 치르기 위해 지어졌다. 최근 쯔궁이 전국·국제급 대회를 잇따라 유치하면서, 이곳은 테니스를 관람하거나 직접 즐기기 좋은 장소 중 하나가 되었다.',
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
  baiduLink: string;
}

export const directory: Record<Locale, DirectoryCopy> = {
  en: {
    title: 'People & places',
    description:
      'An independent, growing directory of local businesses in Zigong, China — the shops, makers, and places that give the city its character.',
    tagline: 'The people and places behind the city — a directory in progress.',
    intro:
      'A city is its people and the things they make. This is a growing directory of Zigong’s local businesses, grouped by what they do. It’s just getting started — more listings are on the way.',
    areaLabel: 'Area',
    placeholderBadge: 'Example listing',
    comingSoon: 'Listing coming soon',
    disclaimerTitle: 'Independent & not sponsored',
    disclaimer:
      'Listings here are independent, editorial picks. They are not paid placements or advertisements, and inclusion does not imply any affiliation, endorsement, or partnership. This site remains unofficial and unaffiliated.',
    listTitle: 'Run a business in Zigong?',
    listBody:
      'This directory is being built. A way to suggest a business — free and non-sponsored — is coming soon.',
    baiduLink: 'View on Baidu Maps',
  },
  zh: {
    title: '店家与街巷',
    description:
      '一份独立、不断扩充的自贡本地商家名录——记录赋予这座城市独特个性的店铺、匠人与去处。',
    tagline: '城市背后的人与去处——一份正在完善的名录。',
    intro:
      '一座城市，是它的人和他们所创造的一切。这是一份不断扩充的自贡本地商家名录，按其经营类别分组。名录才刚刚起步——更多商家即将上线。',
    areaLabel: '所在区',
    placeholderBadge: '示例条目',
    comingSoon: '信息即将上线',
    disclaimerTitle: '独立运营，绝非赞助',
    disclaimer:
      '此处的条目为独立的编辑甄选，并非付费推广或广告；被收录并不意味着任何隶属、背书或合作关系。本站始终保持非官方、无关联的立场。',
    listTitle: '您在自贡经营生意？',
    listBody: '本名录仍在建设中。一个免费、非赞助的商家推荐入口即将开放。',
    baiduLink: '在百度地图查看',
  },
  ja: {
    title: '店と街の人',
    description:
      '自貢の地元のお店を集めた、独立した少しずつ育つディレクトリ——街に個性を与える店・作り手・場所を記録します。',
    tagline: '街を支える人と場所——制作中のディレクトリ。',
    intro:
      '街とは、そこに暮らす人々と、その人たちが生み出すものです。これは自貢の地元のお店を業種ごとにまとめた、少しずつ育つディレクトリです。まだ始まったばかり——掲載は順次増えていきます。',
    areaLabel: 'エリア',
    placeholderBadge: '掲載イメージ',
    comingSoon: '情報は近日公開',
    disclaimerTitle: '独立運営・非スポンサー',
    disclaimer:
      'ここでの掲載は独立した編集上の選定であり、有料掲載や広告ではありません。掲載されていても、提携・推奨・協力関係を意味するものではありません。本サイトは非公式・無関係の立場を保ちます。',
    listTitle: '自貢でお店を営んでいますか？',
    listBody: 'このディレクトリは制作中です。無料・非スポンサーでお店を推薦できる窓口を近日公開します。',
    baiduLink: 'Baidu マップで見る',
  },
  ko: {
    title: '가게와 거리',
    description:
      '쯔궁의 지역 상점을 모은, 독립적이고 점점 자라나는 디렉터리 — 도시에 개성을 더하는 가게·장인·장소를 기록합니다.',
    tagline: '도시를 떠받치는 사람과 장소 — 만들어 가는 디렉터리.',
    intro:
      '도시는 곧 그곳의 사람들과 그들이 만들어 내는 것입니다. 이것은 쯔궁의 지역 상점을 업종별로 묶은, 점점 자라나는 디렉터리입니다. 이제 막 시작했으며 — 더 많은 항목이 곧 추가됩니다.',
    areaLabel: '지역',
    placeholderBadge: '예시 항목',
    comingSoon: '정보 곧 공개',
    disclaimerTitle: '독립 운영·비후원',
    disclaimer:
      '여기의 항목은 독립적인 편집 선정이며 유료 게재나 광고가 아닙니다. 게재되었다고 해서 제휴·보증·협력 관계를 뜻하지 않습니다. 이 사이트는 비공식·무관 입장을 유지합니다.',
    listTitle: '쯔궁에서 가게를 운영하시나요?',
    listBody: '이 디렉터리는 만들어 가는 중입니다. 무료이며 비후원으로 가게를 추천할 수 있는 창구를 곧 엽니다.',
    baiduLink: '바이두 지도에서 보기',
  },
};
