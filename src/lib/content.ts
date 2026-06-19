import { getCollection, type CollectionEntry } from 'astro:content';
import { asLocale } from '../i18n/utils';
import type { Locale } from '../i18n/ui';

export type PageEntry = CollectionEntry<'pages'>;

/** Split an entry id ("en/lantern-festival") into locale + slug. */
export function splitId(id: string): { locale: Locale; slug: string } {
  const [loc, ...rest] = id.split('/');
  return { locale: asLocale(loc), slug: rest.join('/') };
}

/**
 * Themes are long-scroll "section" pages: each one composes one or more topic
 * essays (kept as separate MDX files, ×4 locales) into a single page with a
 * sticky table of contents. The first member is the section's intro and flows
 * straight under the hero; later members render as anchored sub-sections whose
 * slug doubles as the in-page anchor (so old `/salt/` URLs redirect to
 * `/heritage/#salt`). Single-member sections still get a TOC built from the
 * essay's own sub-headings.
 */
export type SectionKey = 'heritage' | 'culture' | 'industry' | 'everyday';

export interface SectionDef {
  /** Route slug for the section page (also the `nav.*` / theme key). */
  key: SectionKey;
  /** Member page slugs, in reading order; the first is the intro. */
  members: string[];
}

export const sections: SectionDef[] = [
  { key: 'heritage', members: ['heritage', 'salt', 'dinosaurs'] },
  { key: 'culture', members: ['lantern-festival'] },
  { key: 'industry', members: ['tech'] },
  { key: 'everyday', members: ['kids'] },
];

const sectionKeys = new Set<string>(sections.map((s) => s.key));
const memberSlugs = new Set<string>(sections.flatMap((s) => s.members));

/** Props handed to the content route: either a composed section or a lone page. */
export type SectionPathProps =
  | { kind: 'section'; sectionKey: SectionKey; entries: PageEntry[] }
  | { kind: 'page'; entry: PageEntry };

/** All content entries for a given locale, sorted by `order`. */
export async function pagesForLocale(locale: Locale): Promise<PageEntry[]> {
  const all = await getCollection('pages');
  return all
    .filter((e) => splitId(e.id).locale === locale)
    .sort((a, b) => a.data.order - b.data.order);
}

/**
 * getStaticPaths helper for a locale's content route.
 *
 * Emits one path per section (composed from its member essays) plus one path
 * per standalone page that no section absorbs (e.g. About). Member essays no
 * longer get their own route — they live inside their section and are reached
 * via redirects to anchors (see `astro.config.mjs`).
 */
export async function sectionPaths(
  locale: Locale,
): Promise<{ params: { page: string }; props: SectionPathProps }[]> {
  const all = await pagesForLocale(locale);
  const bySlug = new Map(all.map((e) => [splitId(e.id).slug, e]));
  const paths: { params: { page: string }; props: SectionPathProps }[] = [];

  for (const section of sections) {
    const entries = section.members
      .map((slug) => bySlug.get(slug))
      .filter((e): e is PageEntry => Boolean(e));
    if (entries.length === 0) continue;
    paths.push({
      params: { page: section.key },
      props: { kind: 'section', sectionKey: section.key, entries },
    });
  }

  for (const entry of all) {
    const slug = splitId(entry.id).slug;
    if (memberSlugs.has(slug) || sectionKeys.has(slug)) continue;
    paths.push({ params: { page: slug }, props: { kind: 'page', entry } });
  }

  return paths;
}
