# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- `npm install` - Install dependencies (uses pnpm as package manager)

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