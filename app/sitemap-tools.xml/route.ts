import { buildUrlset, bilingualEntries, formatDate, xmlResponse } from "@/lib/sitemap-utils"

export const dynamic = "force-dynamic"
export const revalidate = 3600

export async function GET() {
  const now = formatDate(new Date())

  const urls = [
    // Tools hub
    ...bilingualEntries("/tools", now, "weekly", 0.8),

    // Individual tools
    ...bilingualEntries("/tools/seo-title-generator", now, "monthly", 0.7),
    ...bilingualEntries("/tools/word-counter", now, "monthly", 0.7),
    ...bilingualEntries("/tools/seo-roi", now, "monthly", 0.7),
    ...bilingualEntries("/tools/website-authority-checker", now, "monthly", 0.7),
  ]

  return xmlResponse(buildUrlset(urls))
}
