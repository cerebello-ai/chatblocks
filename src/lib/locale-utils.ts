import i18nConfig from '@/i18n/config';

/**
 * Creates a locale-aware URL by prefixing the path with the current locale
 * @param path - The path to prefix with locale (e.g., '/about', '/contact')
 * @param locale - The current locale (e.g., 'en', 'es', 'fr')
 * @returns The locale-prefixed path (e.g., '/en/about', '/es/contact')
 */
export function createLocalizedPath(path: string, locale: string): string {
  // Handle root path
  if (path === '/') {
    return `/${locale}`;
  }
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Always prefix with locale since we're using prefixDefault: true
  return `/${locale}/${cleanPath}`;
}

/**
 * Extracts the locale from a pathname
 * @param pathname - The pathname to extract locale from
 * @returns The locale if found, otherwise the default locale
 */
export function getLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const potentialLocale = segments[0];
  
  if (potentialLocale && i18nConfig.locales.includes(potentialLocale)) {
    return potentialLocale;
  }
  
  return i18nConfig.defaultLocale;
}

/**
 * Removes the locale prefix from a pathname
 * @param pathname - The pathname to remove locale from
 * @returns The pathname without locale prefix
 */
export function removeLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const potentialLocale = segments[0];
  
  if (potentialLocale && i18nConfig.locales.includes(potentialLocale)) {
    // Remove the locale segment
    const remainingSegments = segments.slice(1);
    return remainingSegments.length > 0 ? `/${remainingSegments.join('/')}` : '/';
  }
  
  return pathname;
}

/**
 * Checks if a URL is an internal link (should be localized)
 * @param href - The href to check
 * @returns True if the link is internal and should be localized
 */
export function isInternalLink(href: string): boolean {
  // External links (start with http/https, mailto, tel, etc.)
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
    return false;
  }
  
  // Internal links start with / or are relative paths
  return href.startsWith('/') || !href.includes('://');
}