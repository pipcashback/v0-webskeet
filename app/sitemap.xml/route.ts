import { buildSitemapIndex, formatDate, xmlResponse, BASE_URL } from "@/lib/sitemap-utils"

export const dynamic = "force-dynamic"
export const revalidate = 3600

export async function GET() {
  const now = formatDate(new Date())

  const xml = buildSitemapIndex([
    { loc: `${BASE_URL}/sitemap-pages.xml`, lastmod: now },
    { loc: `${BASE_URL}/sitemap-blog.xml`, lastmod: now },
    { loc: `${BASE_URL}/sitemap-tools.xml`, lastmod: now },
  ])

  return xmlResponse(xml)
}
