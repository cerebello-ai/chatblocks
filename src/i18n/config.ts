import { Config } from 'next-i18n-router/dist/types';

const config: Config = {
  locales: ['en', 'pt', 'es', 'fr', 'de', 'it', 'ar', 'ko', 'zh-CN', 'zh-TW', 'ja', 'nl', 'pl', 'id', 'tr', 'th', 'vi', 'ms', 'tl'],
  defaultLocale: 'en',
  prefixDefault: true, // Include default locale in path
};

export default config;