import { getRelativeLocaleUrl } from 'astro:i18n';
import { ui, defaultLocale, locales, type Locale, type UI } from './ui';

/** Narrow an arbitrary string (e.g. from Astro.currentLocale) to a known Locale. */
export function asLocale(value: string | undefined): Locale {
  return (locales as readonly string[]).includes(value ?? '')
    ? (value as Locale)
    : defaultLocale;
}

/** Returns a translator bound to a locale: t('nav.home'). Falls back to English. */
export function useTranslations(locale: Locale) {
  return function t(key: keyof UI): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}

/**
 * Build a localized URL for a route slug ('' = home).
 * Honors prefixDefaultLocale:false (English stays at root).
 */
export function localizedUrl(locale: Locale, slug: string): string {
  return getRelativeLocaleUrl(locale, slug);
}

/**
 * Given the current path and locale, compute the equivalent path in another
 * locale — used by the language switcher to keep the visitor on the same page.
 */
export function switchLocalePath(
  currentPath: string,
  currentLocale: Locale,
  targetLocale: Locale,
): string {
  // Strip the current locale prefix to recover the bare route slug.
  let slug = currentPath;
  if (currentLocale !== defaultLocale) {
    slug = slug.replace(new RegExp(`^/${currentLocale}(/|$)`), '/');
  }
  slug = slug.replace(/^\/+|\/+$/g, ''); // trim leading/trailing slashes
  return getRelativeLocaleUrl(targetLocale, slug);
}
