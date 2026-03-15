import { fetchBlogPosts } from "@/lib/contentful"
import {
  buildUrlset,
  formatDate,
  xmlResponse,
  BASE_URL,
} from "@/lib/sitemap-utils"

export const dynamic = "force-dynamic"
export const revalidate = 3600

// Slugs that have been redirected (year removed) — exclude from sitemap
const REDIRECTED_SLUGS = new Set([
  "seo-strategies-2025",
  "off-page-seo-techniques-2025",
])

export async function GET() {
  let urls: Parameters<typeof buildUrlset>[0] = []

  try {
    const posts = await fetchBlogPosts()

    for (const post of posts) {
      // Skip slugs that are redirected to new URLs
      if (REDIRECTED_SLUGS.has(post.slug)) continue

      const lastmod = post.date ? formatDate(new Date(post.date)) : formatDate(new Date())

      // /blog/:slug redirects to /ar/blog/:slug (see next.config.mjs)
      // Only include the Arabic canonical URL in sitemap
      urls.push({
        loc: `${BASE_URL}/ar/blog/${post.slug}`,
        lastmod,
        changefreq: "weekly",
        priority: 0.8,
      })
    }
  } catch (error) {
    console.error("Sitemap: failed to fetch blog posts from Contentful:", error)
  }

  return xmlResponse(buildUrlset(urls))
}
