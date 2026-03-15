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

## Custom Instructions

- Always use context7 MCP to fetch the latest documentation when working with Next.js, React, or any library

## Blog Content Guidelines for Contentful

### Language & Tone
- Write in professional Modern Standard Arabic (الفصحى المعاصرة)
- Authoritative expert tone — we are specialists, not beginners
- Match the existing blog writing style on webskeet.com/ar/blog
- No slang, no informal language
- Use "نحن" (we) when referring to WebSkeet, not "أنا"

### URL Slugs
- ALWAYS in English: /ar/blog/what-is-seo NOT /ar/blog/ما-هو-السيو
- NEVER include years in slugs: /ar/blog/seo-strategies NOT /ar/blog/seo-strategies-2026
- Use hyphens, lowercase only

### Content Structure (every article must have)
- H1: One main heading with primary keyword
- H2s: 5-8 subheadings breaking the topic into sections
- H3s: Under H2s where needed for sub-topics
- Tables: Use comparison tables, pricing tables, feature tables where relevant
- Bullet points: For lists and key takeaways
- Bold: Key terms and important phrases
- Internal links: Minimum 3 links to other blog posts + 1 link to /ar/seo-company
- CTA: End with a call-to-action linking to consultation form
- Word count: Minimum 2,000 words

### SEO Requirements
- Primary keyword in H1, first paragraph, and seoHeading
- Secondary keywords in H2s and body naturally
- seoHeading: Different from H1 — more compelling, under 60 characters
- seoDescription: Action-oriented, includes keyword, under 155 characters
- No keyword stuffing — natural usage only

### Brand Name
- Arabic content: "ويب سكيت" (not WebSkeet)
- English content: "WebSkeet" (not ويب سكيت)

### Formatting
- Short paragraphs (3-4 sentences max)
- Use tables for comparisons and data
- Add FAQ section with 3-5 questions at the end (FAQ Schema compatible)
- Break long sections with visual elements (tables, lists, quotes)

### Internal Linking Rules
- Link to /ar/seo-company with anchor "شركة سيو متخصصة" or similar
- Link to relevant existing blog posts naturally within content
- Link to service pages when mentioning specific services
- Every new article should receive links FROM at least 2 existing articles
