import { LanguageSelector } from '@/components/language-selector';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { StyleGlideProvider } from '@/components/styleglide-provider';
import { ThemeProvider } from '@/components/theme-provider';
import TranslationProvider from '@/components/translation-provider';
import { LocaleProvider } from '@/contexts/locale-context';
import i18nConfig from '@/i18n/config';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} flex min-h-screen flex-col antialiased`}>
        <LocaleProvider initialLocale={locale}>
          <TranslationProvider locale={locale}>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              disableTransitionOnChange
            >
              <StyleGlideProvider />
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <LanguageSelector />
            </ThemeProvider>
          </TranslationProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
