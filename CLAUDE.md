# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Webskeet is an Arabic-language SEO consulting website built with Next.js 14 and deployed via v0.app/Vercel. The site is RTL (right-to-left) Arabic-first with Tajawal font.

## Commands

\`\`\`bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # ESLint check
npm run start    # Start production server
\`\`\`

## Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with shadcn/ui components
- **CMS**: Contentful (blog content)
- **Icons**: Lucide React
- **Email**: Mailchimp integration

### Directory Structure
- `app/` - Next.js App Router pages and API routes
- `components/` - React components
  - `ui/` - shadcn/ui base components
  - `seo/` - JSON-LD schema components for SEO
- `lib/` - Utilities and external service integrations
- `hooks/` - Custom React hooks
- `public/images/` - Static assets

### Key Patterns

**Page Structure**: Each route typically has:
- `page.tsx` - Server component with metadata
- `*-client.tsx` - Client component with interactivity

**Component Imports**: Use path aliases
\`\`\`typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
\`\`\`

**Contentful Integration**: Blog posts fetched via `lib/contentful.js` using environment variables:
- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`

**SEO Schema**: Components in `components/seo/` generate JSON-LD structured data for different page types.

### Styling

Custom brand colors defined in `tailwind.config.ts`:
- `webskeet-blue`: #0E6BA8
- `webskeet-gold`: #FBBF24

CSS variables for theming in `app/globals.css` with dark mode support via class strategy.

### Configuration Notes

- ESLint and TypeScript errors are ignored during builds (see `next.config.mjs`)
- Image optimization configured for Contentful, v0.app blob storage, and Unsplash domains
