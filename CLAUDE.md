# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run install` - Install dependencies (uses pnpm as package manager)

## Localization Instructions

- Use `next-intl` for internationalization and localization
- Store translation files in `src/locales/` directory
- Create separate JSON files for each language (e.g., `en.json`, `fr.json`)
- Configure locales in `next.config.ts` and `middleware.ts`
- Use `useTranslations` hook from `next-intl` for translating strings in components
- Implement language switcher in navigation component
- Ensure all user-facing strings are wrapped in translation functions

## Localization System Details

This application uses a server-side, props-based localization system with Next.js 15 App Router:

- Dynamic routing: /[locale]/page structure (e.g., /en/about, /fr/product)
- Server-side translation loading: Translations loaded on the server and passed as props
- Global locale context: React Context for client-side locale state management
- 19 supported languages: en, pt, es, fr, de, it, ar, ko, zh-CN, zh-TW, ja, nl, pl, id, tr, th, vi, ms, tl

Key Components

1. Translation Files: src/i18n/locales/[locale]/pages/[page].json
  - Page-specific translation files
  - TypeScript interfaces for type safety
2. Server Functions: src/i18n/server.ts
  - getTranslation() - loads translation files server-side
  - Caching and fallback to default locale
3. Context Provider: src/contexts/locale-context.tsx
  - Global locale state management
  - useLocale() hook for client components
4. Middleware: middleware.ts
  - Locale detection and routing
  - Uses next-i18n-router

Adding New Pages

1. Create translation files:
src/i18n/locales/en/pages/[page-name].json
src/i18n/locales/fr/pages/[page-name].json
2. Add TypeScript interfaces:
// src/i18n/types.ts
export interface PageNameTranslation {
  metadata: MetadataTranslation;
  section: {
    title: string;
    description: string;
  };
}
3. Create server function:
// src/i18n/server.ts
export async function getPageNameTranslation(locale: string): Promise<PageNameTranslation> {
  return getTranslation(locale, 'pages/page-name');
}
4. Create page component:
// src/app/[locale]/page-name/page.tsx
export default async function PageName({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getPageNameTranslation(locale);
  return <PageComponent {...t.section} />;
}

Adding New Components

1. Make components accept translation props:
interface ComponentProps {
  title: string;
  description: string;
}

export function Component({ title, description }: ComponentProps) {
  return <div>{title}</div>;
}
2. Server components: Pass translations directly as props
3. Client components: Use useLocale() hook for locale-aware behavior

Key Rules

- NO client-side translation hooks (useTranslation(), t())
- Props-based architecture - translations passed as props
- Server-side rendering - translations loaded on server
- Locale-aware links - use LocalizedLink or createLocalizedPath()
- String interpolation - use concatenation in template literals: + variable +

Files to Update When Adding Locales

1. src/i18n/config.ts - Add new locale to supported list
2. middleware.ts - Update locale detection
3. src/components/language-selector.tsx - Add locale name mapping
4. Create translation files for all existing pages

## Architecture Overview

This is a Next.js 15 template using the App Router architecture with the following key characteristics:

### Tech Stack

- **Next.js 15** with App Router
- **Tailwind CSS 4** for styling
- **shadcn/ui** for UI components
- **TypeScript** for type safety
- **Framer Motion** for animations
- **MDX** for blog content with gray-matter frontmatter parsing

### Directory Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components organized by purpose:
  - `ui/` - shadcn/ui components
  - `layout/` - Header, footer, navigation components
  - `sections/` - Page-specific section components
  - `magicui/` - Custom UI components with animations
- `src/lib/` - Utility functions and shared logic
- `src/blog/` - MDX blog posts with frontmatter
- `src/hooks/` - Custom React hooks
- `src/constants/` - Application constants
- `public/` - Static assets organized by feature

### Key Patterns

#### Component Organization

- UI components follow shadcn/ui patterns with Radix UI primitives
- Section components are page-specific and handle their own data fetching
- Layout components provide consistent navigation and theming

#### Blog System

- Blog posts are MDX files in `src/blog/` with frontmatter metadata
- Server-side functions in `src/lib/blog.ts` handle blog post parsing and retrieval
- Dynamic routing at `/blog/[slug]` renders individual posts

#### Styling & Theme

- Uses Tailwind CSS with custom design tokens
- Theme provider supports light/dark mode switching
- Framer Motion animations for interactive elements

#### Data Management

- Server-side rendering with Next.js App Router
- File-based blog content with gray-matter parsing
- No external database or CMS - content is managed through MDX files

## Key Files to Understand

- `src/app/layout.tsx` - Root layout with theme providers and global structure
- `src/components/layout/navbar.tsx` - Complex navigation with desktop/mobile variants
- `src/lib/blog.ts` - Blog post parsing and retrieval logic
- `components.json` - shadcn/ui configuration
- `next.config.ts` - Next.js configuration with MDX support

## Claude Code Guidance

- ALWAYS USE BEAUDINN when working on this project

- AAA