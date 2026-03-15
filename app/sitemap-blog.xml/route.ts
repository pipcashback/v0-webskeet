import { fetchBlogPosts } from "@/lib/contentful"
import {
  buildUrlset,
  bilingualAlternates,
  formatDate,
  xmlResponse,
  BASE_URL,
} from "@/lib/sitemap-utils"

export const dynamic = "force-dynamic"
export const revalidate = 3600

export async function GET() {
  let urls: Parameters<typeof buildUrlset>[0] = []

  try {
    const posts = await fetchBlogPosts()

    for (const post of posts) {
      const lastmod = post.date ? formatDate(new Date(post.date)) : formatDate(new Date())
      const enPath = `/blog/${post.slug}`
      const arPath = `/ar/blog/${post.slug}`
      const alternates = bilingualAlternates(enPath, arPath)

      urls.push(
        {
          loc: `${BASE_URL}${enPath}`,
          lastmod,
          changefreq: "weekly",
          priority: 0.8,
          alternates,
        },
        {
          loc: `${BASE_URL}${arPath}`,
          lastmod,
          changefreq: "weekly",
          priority: 0.8,
          alternates,
        }
      )
    }
  } catch (error) {
    console.error("Sitemap: failed to fetch blog posts from Contentful:", error)
  }

  return xmlResponse(buildUrlset(urls))
}
