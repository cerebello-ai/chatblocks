import i18nConfig from './config';
import type { HomePageTranslation, AboutPageTranslation, ProductPageTranslation, PageTranslation } from './types';

// Translation cache
const translationCache = new Map<string, PageTranslation>();

// Generic translation loader
async function loadTranslation<T = PageTranslation>(locale: string, page: string): Promise<T> {
  const cacheKey = `${locale}-${page}`;
  
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey) as T;
  }

  try {
    const translation = await import(`./locales/${locale}/pages/${page}.json`);
    const data = translation.default as T;
    translationCache.set(cacheKey, data as PageTranslation);
    return data;
  } catch (error) {
    console.warn(`Translation not found for ${locale}/${page}, falling back to default locale`);
    
    // Fallback to default locale
    if (locale !== i18nConfig.defaultLocale) {
      return loadTranslation<T>(i18nConfig.defaultLocale, page);
    }
    
    throw new Error(`Translation not found for ${locale}/${page}`);
  }
}

// Page-specific translation loaders
export async function getHomePageTranslation(locale: string): Promise<HomePageTranslation> {
  return loadTranslation<HomePageTranslation>(locale, 'home');
}

export async function getAboutPageTranslation(locale: string): Promise<AboutPageTranslation> {
  return loadTranslation<AboutPageTranslation>(locale, 'about');
}

export async function getProductPageTranslation(locale: string): Promise<ProductPageTranslation> {
  return loadTranslation<ProductPageTranslation>(locale, 'product');
}

// Common translation loader
export async function getCommonTranslation(locale: string) {
  try {
    const translation = await import(`./locales/${locale}/common.json`);
    return translation.default;
  } catch (error) {
    console.warn(`Common translation not found for ${locale}, falling back to default locale`);
    
    if (locale !== i18nConfig.defaultLocale) {
      return getCommonTranslation(i18nConfig.defaultLocale);
    }
    
    throw new Error(`Common translation not found for ${locale}`);
  }
}

// Legacy function for backward compatibility
export async function getTranslation(locale: string, namespace = 'common') {
  if (namespace === 'common') {
    const commonTranslation = await getCommonTranslation(locale);
    return {
      t: (key: string) => commonTranslation[key] || key,
      data: commonTranslation,
    };
  }
  
  // For page-specific translations
  const pageTranslation = await loadTranslation(locale, namespace);
  return {
    t: (key: string) => {
      const keys = key.split('.');
      let value: any = pageTranslation;
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    },
    data: pageTranslation,
  };
}

// Utility function to get supported locales
export function getSupportedLocales(): string[] {
  return i18nConfig.locales;
}

// Utility function to validate locale
export function isValidLocale(locale: string): boolean {
  return i18nConfig.locales.includes(locale);
}

// Utility function to get default locale
export function getDefaultLocale(): string {
  return i18nConfig.defaultLocale;
}