// Home (Overview) copy per locale: the framing essay + the theme index cards.
import type { Locale } from './ui';

export type ThemeKey = 'heritage' | 'culture' | 'industry' | 'everyday' | 'people';

export interface HomeContent {
  /** Short lead under the title (the hero). */
  lead: string;
  /** Caption for the lead cityscape photo. */
  leadCaption: string;
  /** The framing overview essay, as paragraphs. */
  overview: string[];
  /** Label above the theme index. */
  themesLabel: string;
  themes: { key: ThemeKey; title: string; blurb: string }[];
}

export const home: Record<Locale, HomeContent> = {
  zh: {
    lead: '盐、恐龙与彩灯之外，一座仍在劳作与生活的川南城市。',
    leadCaption: '自贡城区一瞥——市街向远处的丘陵与厂区延展。',
    overview: [
      '自贡常被一句话概括——“盐都”“恐龙之乡”“灯城”。这些标签都对，却都太轻。一座城市从不只是它的名片，而是盐井下沉的深度、车间里的节奏、清晨面馆升起的热气，以及生活在这一切之中的人。',
      '这里真正耐人寻味的，是许多不同的时间尺度叠在同一片土地上：一亿多年前的恐龙骨床，近两千年的井盐开采，十九世纪凿成的千米深井，二十世纪的重工业，以及今天仍在运转的工厂、市场与街巷。它们并未先后退场，而是层层相叠，至今共存。',
      '本站尝试以一个好奇而用心的旁观者的目光去理解这座城——它的过去如何塑造了今天，它的产业与日常又如何让它依旧鲜活。这不是一份旅游指南，而是一次细看。',
    ],
    themesLabel: '从这里走近',
    themes: [
      { key: 'heritage', title: '历史遗产', blurb: '从中侏罗世的恐龙骨床，到千年井盐与十九世纪的千米深井——这座城市深远的时间。' },
      { key: 'culture', title: '文化', blurb: '自贡彩灯，既是节庆，也是一门活着的手艺与城市身份。' },
      { key: 'industry', title: '产业', blurb: '从古代凿井工程到今日工业——一座始终动手营生的城市。' },
      { key: 'everyday', title: '日常生活', blurb: '麻辣鲜香的盐帮菜、孩子的去处、街市的节奏——城市鲜活的一面。' },
      { key: 'people', title: '店家与街巷', blurb: '构成这座城市的店家、手艺人与去处。' },
    ],
  },
  en: {
    lead: 'Beyond salt, dinosaurs, and lanterns: a southern-Sichuan (四川) city still at work and at home.',
    leadCaption: 'Zigong (自贡) from above — the city reaching toward the hills and the distant works.',
    overview: [
      'Zigong is usually summed up in a phrase — “salt capital,” “home of dinosaurs,” “city of lanterns.” Each label is true, and each is too light. A city is never its slogans; it is the depth of a brine well, the rhythm of a workshop floor, the steam rising from a noodle shop at dawn, and the people who live among all of it.',
      'What makes the place compelling is how many timescales rest on the same ground: a dinosaur bonebed from over a hundred million years ago, nearly two thousand years of well-salt, a kilometre-deep borehole drilled in the 1830s, a century of heavy industry, and the factories, markets, and streets still working today. None of these simply gave way to the next; they lie in layers, still coexisting.',
      'This site tries to understand the city through the eyes of a curious, attentive observer — how its past shaped its present, and how its industry and daily life keep it alive. It is not a travel guide. It is a closer look.',
    ],
    themesLabel: 'Ways in',
    themes: [
      { key: 'heritage', title: 'Heritage', blurb: 'From a Middle-Jurassic bonebed to a thousand years of well-salt and an 1830s kilometre-deep well — the city’s deep time.' },
      { key: 'culture', title: 'Culture', blurb: 'The Zigong lanterns: a festival, yes, but also a living craft and a civic identity.' },
      { key: 'industry', title: 'Industry', blurb: 'From ancient drilling engineering to modern industry — a city that has always made its living by hand.' },
      { key: 'everyday', title: 'Everyday life', blurb: 'Fiery Salt-Gang cooking (盐帮菜), places for children, the rhythm of the market — the city as it is lived.' },
      { key: 'people', title: 'People & places', blurb: 'The shops, makers, and places that make up the living city.' },
    ],
  },
  ja: {
    lead: '塩・恐竜・ランタンの先にある、今も働き、暮らす四川南部の都市。',
    leadCaption: '高所から望む自貢（じこう）——市街が遠くの丘陵と工場地帯へと続く。',
    overview: [
      '自貢はたいてい一言で語られる——「塩の都」「恐竜の郷」「ランタンの街」。どれも本当で、どれも軽すぎる。都市はスローガンではない。塩井戸の深さであり、工房の床に流れるリズムであり、明け方の麺屋から立ちのぼる湯気であり、そのすべての中で暮らす人々だ。',
      'この街を惹きつけるものは、同じ大地の上にいくつもの時間尺度が重なっていることだ。一億年以上前の恐竜化石層、二千年近い井戸塩、一八三〇年代に掘られた一キロメートルの井戸、一世紀にわたる重工業、そして今も動く工場・市場・街路。どれも次のものに席を譲って消えたのではなく、層をなして今も共存している。',
      '本サイトは、好奇心を持つ注意深い観察者の目を通してこの街を理解しようとする——過去がいかに現在を形づくり、産業と日常がいかに街を生かし続けているかを。旅行ガイドではない。もっと近くからの一瞥である。',
    ],
    themesLabel: 'ここから',
    themes: [
      { key: 'heritage', title: '遺産', blurb: '中期ジュラ紀の化石層から、千年の井戸塩、一八三〇年代の一キロ井戸まで——街の深い時間。' },
      { key: 'culture', title: '文化', blurb: '自貢のランタン。祭りであり、同時に生きた手仕事であり、街の自己像でもある。' },
      { key: 'industry', title: '産業', blurb: '古代の掘削技術から現代産業まで——つねに手で生計を立ててきた街。' },
      { key: 'everyday', title: '暮らし', blurb: '辛く香り高い塩帮菜（えんぱんさい）、子どもの居場所、市場のリズム——生きられている街。' },
      { key: 'people', title: '店と街の人', blurb: '生きた街を形づくる店・作り手・場所。' },
    ],
  },
  ko: {
    lead: '소금·공룡·등불 너머, 여전히 일하고 살아가는 쓰촨(四川) 남부의 도시.',
    leadCaption: '높은 곳에서 본 쯔궁(自贡) — 시가지가 멀리 구릉과 공장 지대로 이어진다.',
    overview: [
      '쯔궁은 흔히 한마디로 요약된다 — “소금의 도시”, “공룡의 고향”, “등불의 도시”. 모두 사실이지만, 모두 너무 가볍다. 도시는 구호가 아니다. 그것은 소금 우물의 깊이이고, 작업장 바닥에 흐르는 리듬이며, 새벽 국숫집에서 피어오르는 김이고, 그 모든 것 속에서 살아가는 사람들이다.',
      '이 도시가 흥미로운 까닭은 같은 땅 위에 여러 시간 척도가 겹쳐 있다는 데 있다. 1억 년도 더 된 공룡 화석층, 거의 이천 년에 이르는 우물 소금, 1830년대에 뚫은 1킬로미터 깊이의 우물, 한 세기의 중공업, 그리고 지금도 돌아가는 공장과 시장과 거리. 어느 것도 다음 것에 자리를 내주고 사라지지 않았다. 층층이 쌓인 채 지금도 공존한다.',
      '이 사이트는 호기심 많고 주의 깊은 관찰자의 눈으로 이 도시를 이해해 보려 한다 — 과거가 어떻게 현재를 빚었고, 산업과 일상이 어떻게 도시를 살아 있게 하는지를. 여행 안내서가 아니다. 조금 더 가까이에서 들여다보는 일이다.',
    ],
    themesLabel: '들어가기',
    themes: [
      { key: 'heritage', title: '유산', blurb: '중기 쥐라기 화석층에서 천 년의 우물 소금, 1830년대의 1킬로미터 우물까지 — 도시의 깊은 시간.' },
      { key: 'culture', title: '문화', blurb: '쯔궁의 등불. 축제이자, 동시에 살아 있는 솜씨이며, 도시의 정체성이다.' },
      { key: 'industry', title: '산업', blurb: '고대의 굴착 기술부터 현대 산업까지 — 늘 손으로 생계를 꾸려 온 도시.' },
      { key: 'everyday', title: '일상', blurb: '얼얼하고 향 깊은 옌방차이(盐帮菜), 아이들의 공간, 시장의 리듬 — 살아가는 도시.' },
      { key: 'people', title: '가게와 거리', blurb: '살아 있는 도시를 이루는 가게와 장인, 그리고 장소들.' },
    ],
  },
};
