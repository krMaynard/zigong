// Home-page copy per locale: intro + pillar teaser blurbs + gallery captions.
// Kept separate from ui.ts (site chrome) for readability.
import type { Locale } from './ui';

export interface HomeContent {
  heroTagline: string;
  intro: string;
  pillars: { key: 'lantern' | 'salt' | 'dinosaurs' | 'kids' | 'tech' | 'businesses'; emoji: string; title: string; blurb: string }[];
  gallery: { emoji: string; caption: string }[];
}

export const home: Record<Locale, HomeContent> = {
  en: {
    heroTagline:
      'A city in Sichuan where giant glowing lanterns, a thousand years of salt wells, and real dinosaurs all share the same streets.',
    intro:
      "Zigong (自贡) is one of China's great surprises — a mid-sized Sichuan city with an outsized story. It lit the world's lanterns, drilled the planet's first deep wells for brine and natural gas, and sits atop one of the richest dinosaur fossil beds ever found. Here are five ways in.",
    pillars: [
      { key: 'lantern', emoji: '🏮', title: 'Lantern Festival', blurb: 'The dazzling Zigong International Dinosaur Lantern Festival — colossal illuminated sculptures that draw millions every spring.' },
      { key: 'salt', emoji: '🧂', title: 'Salt City', blurb: 'A thousand years of well-salt ingenuity, from the record-breaking Shenhai Well to the museums that tell the story.' },
      { key: 'dinosaurs', emoji: '🦕', title: 'Dinosaurs', blurb: 'A world-class fossil site and a museum built right over the dig — Zigong is a genuine Jurassic treasure trove.' },
      { key: 'kids', emoji: '👧', title: 'For Kids', blurb: 'Dinosaurs, lanterns, parks and hands-on fun — Zigong is a brilliant city to explore with children.' },
      { key: 'tech', emoji: '🔬', title: 'Tech & Innovation', blurb: 'From ancient deep-drilling engineering to modern industry — a city that has always tinkered with the future.' },
      { key: 'businesses', emoji: '🛍️', title: 'Local Businesses', blurb: 'A growing directory of the workshops, restaurants, and makers that give the city its flavour.' },
    ],
    gallery: [
      { emoji: '🏮', caption: 'Lanterns over the festival grounds' },
      { emoji: '🦕', caption: 'Inside the Zigong Dinosaur Museum' },
      { emoji: '🧂', caption: 'The historic Shenhai Well' },
      { emoji: '🌶️', caption: 'Fiery Zigong-style Sichuan cooking' },
    ],
  },
  zh: {
    heroTagline: '在四川的这座城市里，巨型彩灯、千年盐井与真正的恐龙，共享同一条街道。',
    intro:
      '自贡，是中国最令人惊喜的城市之一——一座中等规模的四川城市，却拥有非凡的故事。它点亮了世界的彩灯，钻出了地球上最早的深井以汲取卤水和天然气，更坐落在世界上最丰富的恐龙化石带之一。以下是走近自贡的五种方式。',
    pillars: [
      { key: 'lantern', emoji: '🏮', title: '彩灯节', blurb: '璀璨夺目的自贡国际恐龙灯会——巨型灯组流光溢彩，每年春天吸引数百万游客。' },
      { key: 'salt', emoji: '🧂', title: '千年盐都', blurb: '千年井盐智慧，从创下纪录的燊海井，到讲述这段历史的盐业博物馆。' },
      { key: 'dinosaurs', emoji: '🦕', title: '恐龙', blurb: '世界级的化石遗址，博物馆就建在发掘现场之上——自贡是名副其实的侏罗纪宝库。' },
      { key: 'kids', emoji: '👧', title: '亲子游', blurb: '恐龙、彩灯、公园与亲手体验——自贡是一座非常适合带孩子探索的城市。' },
      { key: 'tech', emoji: '🔬', title: '科技与创新', blurb: '从古代深井钻探工程，到现代工业——这座城市始终在为未来动手钻研。' },
      { key: 'businesses', emoji: '🛍️', title: '本地商家', blurb: '一份不断扩充的名录，收录赋予这座城市独特风味的工坊、餐馆与匠人。' },
    ],
    gallery: [
      { emoji: '🏮', caption: '灯会现场的璀璨彩灯' },
      { emoji: '🦕', caption: '自贡恐龙博物馆内景' },
      { emoji: '🧂', caption: '历史悠久的燊海井' },
      { emoji: '🌶️', caption: '麻辣鲜香的自贡盐帮菜' },
    ],
  },
  ja: {
    heroTagline: '四川のこの街では、巨大に輝くランタン、千年の塩井戸、そして本物の恐竜が、同じ通りを分かち合っています。',
    intro:
      '自貢（じこう）は、中国でもっとも意外性に満ちた街のひとつです。四川の中規模都市ながら、並外れた物語を持っています。世界のランタンを灯し、地球で最初の深井戸を掘って塩水と天然ガスを汲み上げ、そして世界有数の豊かな恐竜化石層の上に立っています。ここでは、自貢への5つの入り口を紹介します。',
    pillars: [
      { key: 'lantern', emoji: '🏮', title: 'ランタン祭り', blurb: 'きらびやかな自貢国際恐竜ランタン祭り。巨大な光の造形が、毎年春に何百万もの人々を惹きつけます。' },
      { key: 'salt', emoji: '🧂', title: '塩の都', blurb: '記録的な燊海井から、その歴史を伝える博物館まで——千年にわたる井戸塩の知恵。' },
      { key: 'dinosaurs', emoji: '🦕', title: '恐竜', blurb: '世界クラスの化石産地で、発掘現場の真上に建つ博物館。自貢はまさにジュラ紀の宝庫です。' },
      { key: 'kids', emoji: '👧', title: '子ども向け', blurb: '恐竜、ランタン、公園、体験型の楽しみ——自貢は子どもと巡るのにすばらしい街です。' },
      { key: 'tech', emoji: '🔬', title: '技術と革新', blurb: '古代の深掘削技術から現代産業まで——つねに未来を手で探ってきた街。' },
      { key: 'businesses', emoji: '🛍️', title: '地元のお店', blurb: '街の味わいを生み出す工房・飲食店・作り手を集めた、少しずつ育つディレクトリ。' },
    ],
    gallery: [
      { emoji: '🏮', caption: '祭り会場を彩るランタン' },
      { emoji: '🦕', caption: '自貢恐竜博物館の館内' },
      { emoji: '🧂', caption: '歴史ある燊海井' },
      { emoji: '🌶️', caption: '辛さ際立つ自貢の四川料理' },
    ],
  },
  ko: {
    heroTagline: '쓰촨의 이 도시에서는 거대하게 빛나는 등불, 천 년의 소금 우물, 그리고 진짜 공룡이 같은 거리를 함께 나눕니다.',
    intro:
      '쯔궁(自贡)은 중국에서 가장 의외의 매력을 지닌 도시 중 하나입니다. 쓰촨의 중간 규모 도시이지만, 그 이야기는 결코 작지 않습니다. 세계의 등불을 밝혔고, 지구에서 가장 먼저 깊은 우물을 뚫어 소금물과 천연가스를 끌어올렸으며, 세계에서 가장 풍부한 공룡 화석층 위에 자리하고 있습니다. 쯔궁으로 들어가는 다섯 가지 길을 소개합니다.',
    pillars: [
      { key: 'lantern', emoji: '🏮', title: '등불 축제', blurb: '눈부신 쯔궁 국제 공룡 등불 축제 — 거대한 빛의 조형물이 매년 봄 수백만 명을 불러 모읍니다.' },
      { key: 'salt', emoji: '🧂', title: '소금의 도시', blurb: '기록을 세운 선하이 우물부터 그 역사를 들려주는 박물관까지 — 천 년에 걸친 우물 소금의 지혜.' },
      { key: 'dinosaurs', emoji: '🦕', title: '공룡', blurb: '세계적인 화석 유적지와 발굴 현장 바로 위에 지은 박물관 — 쯔궁은 진정한 쥐라기의 보고입니다.' },
      { key: 'kids', emoji: '👧', title: '아이들과 함께', blurb: '공룡, 등불, 공원, 체험 거리 — 쯔궁은 아이와 함께 둘러보기에 멋진 도시입니다.' },
      { key: 'tech', emoji: '🔬', title: '기술과 혁신', blurb: '고대의 심정 굴착 기술부터 현대 산업까지 — 언제나 손수 미래를 탐구해 온 도시.' },
      { key: 'businesses', emoji: '🛍️', title: '지역 상점', blurb: '도시의 풍미를 빚어내는 공방·식당·장인을 담은, 점점 자라나는 디렉터리.' },
    ],
    gallery: [
      { emoji: '🏮', caption: '축제장을 수놓은 등불' },
      { emoji: '🦕', caption: '쯔궁 공룡 박물관 내부' },
      { emoji: '🧂', caption: '유서 깊은 선하이 우물' },
      { emoji: '🌶️', caption: '얼얼하고 매운 쯔궁식 쓰촨 요리' },
    ],
  },
};
