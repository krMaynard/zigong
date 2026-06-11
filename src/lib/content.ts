import { getCollection, type CollectionEntry } from 'astro:content';
import { asLocale } from '../i18n/utils';
import type { Locale } from '../i18n/ui';

export type PageEntry = CollectionEntry<'pages'>;

/** Split an entry id ("en/lantern-festival") into locale + slug. */
export function splitId(id: string): { locale: Locale; slug: string } {
  const [loc, ...rest] = id.split('/');
  return { locale: asLocale(loc), slug: rest.join('/') };
}

/** All content entries for a given locale, sorted by `order`. */
export async function pagesForLocale(locale: Locale): Promise<PageEntry[]> {
  const all = await getCollection('pages');
  return all
    .filter((e) => splitId(e.id).locale === locale)
    .sort((a, b) => a.data.order - b.data.order);
}

/**
 * getStaticPaths helper for a locale's content route.
 * Returns one path per page, keyed by the bare slug (no locale prefix).
 */
export async function pillarPaths(locale: Locale) {
  const entries = await pagesForLocale(locale);
  return entries.map((entry) => ({
    params: { page: splitId(entry.id).slug },
    props: { entry },
  }));
}
