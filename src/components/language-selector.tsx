'use client';

import { Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocale } from '@/contexts/locale-context';
import { cn } from '@/lib/utils';

const locales = ['en', 'pt', 'es', 'fr', 'de', 'it', 'ar', 'ko', 'zh-CN', 'zh-TW', 'ja', 'nl', 'pl', 'id', 'tr', 'th', 'vi', 'ms', 'tl'];

const localeNames: Record<string, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  ar: 'العربية',
  ko: '한국어',
  'zh-CN': '中文 (简体)',
  'zh-TW': '中文 (繁體)',
  ja: '日本語',
  nl: 'Nederlands',
  pl: 'Polski',
  id: 'Bahasa Indonesia',
  tr: 'Türkçe',
  th: 'ภาษาไทย',
  vi: 'Tiếng Việt',
  ms: 'Bahasa Melayu',
  tl: 'Tagalog',
};

export function LanguageSelector({ className }: { readonly className?: string }) {
  const router = useRouter();
  const { locale: currentLocale, createLocalizedPath } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale: string) => {
    // Get current path without locale
    const currentPath = window.location.pathname;
    const segments = currentPath.split('/').filter(Boolean);
    const currentLocaleInPath = segments[0];
    
    let newPath: string;
    if (['en', 'pt', 'es', 'fr', 'de', 'it', 'ar', 'ko', 'zh-CN', 'zh-TW', 'ja', 'nl', 'pl', 'id', 'tr', 'th', 'vi', 'ms', 'tl'].includes(currentLocaleInPath)) {
      // Remove current locale and add new locale
      const pathWithoutLocale = segments.slice(1).join('/');
      newPath = `/${newLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`;
    } else {
      // No locale in current path, add new locale
      newPath = `/${newLocale}${currentPath}`;
    }
    
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className={cn('fixed bottom-6 left-6 z-50', className)}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-10 w-auto gap-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">
              {localeNames[currentLocale]}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="start" 
          side="top"
          className="w-48 max-h-80 overflow-y-auto"
        >
          {locales.map((loc) => (
            <DropdownMenuItem
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className={cn(
                'cursor-pointer',
                currentLocale === loc && 'bg-accent text-accent-foreground'
              )}
            >
              <span className="text-sm">{localeNames[loc]}</span>
              {currentLocale === loc && (
                <span className="ml-auto text-xs opacity-60">✓</span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}