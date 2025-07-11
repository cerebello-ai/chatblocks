'use client';

import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

const getLocaleFromPath = () => {
  if (typeof window === 'undefined') return 'en';
  
  const pathname = window.location.pathname;
  const locales = ['en', 'pt', 'es', 'fr', 'de', 'it', 'ar', 'ko', 'zh-CN', 'zh-TW', 'ja', 'nl', 'pl', 'id', 'tr', 'th', 'vi', 'ms', 'tl'];
  
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return locale;
    }
  }
  
  return 'en'; // default locale
};

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string, namespace: string) => 
      import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    lng: getLocaleFromPath(),
    fallbackLng: 'en',
    debug: false,
    ns: ['hero', 'navigation', 'common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;