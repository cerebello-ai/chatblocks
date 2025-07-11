'use client';

import { usePathname, useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

import i18nConfig from '@/i18n/config';
import { createLocalizedPath, getLocaleFromPathname, isInternalLink } from '@/lib/locale-utils';

interface LocaleContextType {
  locale: string;
  setLocale: (locale: string) => void;
  createLocalizedPath: (path: string) => string;
  isValidLocale: (locale: string) => boolean;
  availableLocales: string[];
  defaultLocale: string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: React.ReactNode;
  initialLocale: string;
}

export function LocaleProvider({ children, initialLocale }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState(initialLocale);
  const pathname = usePathname();
  const router = useRouter();

  // Update locale when pathname changes (for navigation)
  useEffect(() => {
    const currentLocale = getLocaleFromPathname(pathname);
    if (currentLocale !== locale) {
      setLocaleState(currentLocale);
    }
  }, [pathname, locale]);

  // Function to change locale and navigate
  const setLocale = (newLocale: string) => {
    if (!i18nConfig.locales.includes(newLocale)) {
      console.warn(`Invalid locale: ${newLocale}`);
      return;
    }

    // Get current path without locale
    const segments = pathname.split('/').filter(Boolean);
    const currentLocale = segments[0];
    
    let newPath: string;
    if (i18nConfig.locales.includes(currentLocale)) {
      // Remove current locale and add new locale
      const pathWithoutLocale = segments.slice(1).join('/');
      newPath = `/${newLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`;
    } else {
      // No locale in current path, add new locale
      newPath = `/${newLocale}${pathname}`;
    }

    setLocaleState(newLocale);
    router.push(newPath);
  };

  // Create localized path using current locale
  const createLocalizedPathWithCurrentLocale = (path: string) => {
    return createLocalizedPath(path, locale);
  };

  // Check if locale is valid
  const isValidLocale = (localeToCheck: string) => {
    return i18nConfig.locales.includes(localeToCheck);
  };

  const value: LocaleContextType = {
    locale,
    setLocale,
    createLocalizedPath: createLocalizedPathWithCurrentLocale,
    isValidLocale,
    availableLocales: i18nConfig.locales,
    defaultLocale: i18nConfig.defaultLocale,
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextType {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}

// Additional hooks for convenience
export function useLocalizedPath(path: string): string {
  const { createLocalizedPath } = useLocale();
  return createLocalizedPath(path);
}

export function useIsInternalLink(href: string): boolean {
  return isInternalLink(href);
}