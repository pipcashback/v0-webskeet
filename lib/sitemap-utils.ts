const BASE_URL = "https://webskeet.com"

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"

interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: ChangeFreq
  priority: number
  alternates?: { hreflang: string; href: string }[]
}

export function buildSitemapIndex(sitemaps: { loc: string; lastmod: string }[]): string {
  const entries = sitemaps
    .map(
      (s) => `  <sitemap>
    <loc>${s.loc}</loc>
    <lastmod>${s.lastmod}</lastmod>
  </sitemap>`
    )
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`
}

export function buildUrlset(urls: SitemapUrl[]): string {
  const entries = urls
    .map((u) => {
      const alternateLinks = u.alternates
        ? u.alternates
            .map(
              (a) =>
                `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`
            )
            .join("\n")
        : ""

      return `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
${alternateLinks}
  </url>`
    })
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>`
}

export function xmlResponse(xml: string): Response {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
    },
  })
}

export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0]
}

/**
 * Build hreflang alternates for a bilingual page pair.
 * For most pages, the English path is /{path} and Arabic is /ar/{path}.
 * Special mappings can override this (e.g., /arabic-seo-agency ↔ /ar/seo-company).
 */
export function bilingualAlternates(
  enPath: string,
  arPath: string
): { hreflang: string; href: string }[] {
  return [
    { hreflang: "en", href: `${BASE_URL}${enPath}` },
    { hreflang: "ar", href: `${BASE_URL}${arPath}` },
    { hreflang: "x-default", href: `${BASE_URL}${enPath}` },
  ]
}

/**
 * Create a bilingual URL pair (English + Arabic entries) for a given path.
 */
export function bilingualEntries(
  path: string,
  lastmod: string,
  changefreq: ChangeFreq,
  priority: number,
  arPathOverride?: string
): SitemapUrl[] {
  const enPath = path === "" ? "/" : path
  const arPath = arPathOverride || (path === "" ? "/ar" : `/ar${path}`)
  const alternates = bilingualAlternates(enPath, arPath)

  return [
    { loc: `${BASE_URL}${enPath}`, lastmod, changefreq, priority, alternates },
    { loc: `${BASE_URL}${arPath}`, lastmod, changefreq, priority, alternates },
  ]
}

export { BASE_URL }
