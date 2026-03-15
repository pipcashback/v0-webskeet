import {
  buildUrlset,
  bilingualEntries,
  bilingualAlternates,
  formatDate,
  xmlResponse,
  BASE_URL,
} from "@/lib/sitemap-utils"

export const dynamic = "force-dynamic"
export const revalidate = 3600

export async function GET() {
  const now = formatDate(new Date())

  // Hreflang cross-reference: /arabic-seo-agency (en) ↔ /ar/seo-company (ar)
  // /seo-company (en) redirects to /ar/seo-company — excluded
  // /ar/arabic-seo-agency redirects to /ar/seo-company — excluded
  const seoCompanyAlternates = bilingualAlternates("/arabic-seo-agency", "/ar/seo-company")

  const urls = [
    // Homepage
    ...bilingualEntries("", now, "daily", 1.0),

    // Service pages
    // /arabic-seo-agency serves English content; /ar/seo-company serves Arabic content
    {
      loc: `${BASE_URL}/arabic-seo-agency`,
      lastmod: now,
      changefreq: "weekly" as const,
      priority: 0.9,
      alternates: seoCompanyAlternates,
    },
    {
      loc: `${BASE_URL}/ar/seo-company`,
      lastmod: now,
      changefreq: "weekly" as const,
      priority: 0.9,
      alternates: seoCompanyAlternates,
    },
    ...bilingualEntries("/seo-pricing", now, "weekly", 0.9),
    ...bilingualEntries("/guest-posting-service", now, "weekly", 0.9),

    // Core pages
    ...bilingualEntries("/about", now, "monthly", 0.8),
    ...bilingualEntries("/contact", now, "monthly", 0.8),
    ...bilingualEntries("/faq", now, "monthly", 0.7),
    ...bilingualEntries("/blog", now, "daily", 0.9),

    // Author pages
    ...bilingualEntries("/blog/author/mahmoud-ali", now, "weekly", 0.7),

    // Utility pages
    ...bilingualEntries("/subscribe", now, "yearly", 0.6),
    ...bilingualEntries("/terms", now, "yearly", 0.3),
    ...bilingualEntries("/privacy", now, "yearly", 0.3),
  ]

  return xmlResponse(buildUrlset(urls))
}
