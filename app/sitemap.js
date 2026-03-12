import { fetchBlogPosts } from "@/lib/contentful"

// Revalidate sitemap every hour to pick up new Contentful posts
export const revalidate = 3600

export default async function sitemap() {
  const baseUrl = "https://webskeet.com"

  // Static routes with proper priorities and change frequencies
  const staticRoutes = [
    { route: "", priority: 1, changeFreq: "daily" },
    { route: "/about", priority: 0.8, changeFreq: "monthly" },
    { route: "/contact", priority: 0.8, changeFreq: "monthly" },
    { route: "/faq", priority: 0.7, changeFreq: "monthly" },
    { route: "/blog", priority: 0.9, changeFreq: "daily" },
    { route: "/subscribe", priority: 0.6, changeFreq: "yearly" },
    { route: "/terms", priority: 0.3, changeFreq: "yearly" },
    { route: "/privacy", priority: 0.3, changeFreq: "yearly" },
    { route: "/tools", priority: 0.8, changeFreq: "weekly" },
    { route: "/tools/seo-title-generator", priority: 0.7, changeFreq: "monthly" },
    { route: "/tools/word-counter", priority: 0.7, changeFreq: "monthly" },
    { route: "/tools/seo-roi", priority: 0.7, changeFreq: "monthly" },
    { route: "/tools/website-authority-checker", priority: 0.7, changeFreq: "monthly" },
    { route: "/guest-posting-service", priority: 0.9, changeFreq: "weekly" },
    { route: "/seo-title-generator", priority: 0.6, changeFreq: "monthly" }, // Legacy support
    { route: "/blog/author/mahmoud-ali", priority: 0.7, changeFreq: "weekly" },
  ]

  const staticSitemapEntries = staticRoutes.map(({ route, priority, changeFreq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority: priority,
  }))

  // Fetch blog posts from Contentful dynamically
  let blogSitemapEntries = []

  try {
    const blogPosts = await fetchBlogPosts()

    blogSitemapEntries = blogPosts.map((post) => {
      // Parse the date from Contentful (format: YYYY-MM-DD)
      const postDate = post.date ? new Date(post.date) : new Date()

      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: postDate,
        changeFrequency: "weekly",
        priority: 0.8,
      }
    })

    console.log(`✅ Successfully added ${blogSitemapEntries.length} blog posts to sitemap`)
  } catch (error) {
    console.error("❌ Error fetching blog posts for sitemap:", error.message)
    // Return static entries even if Contentful fetch fails to prevent build failures
  }

  // Combine all entries
  const allEntries = [...staticSitemapEntries, ...blogSitemapEntries]

  console.log(
    `📄 Total sitemap entries: ${allEntries.length} (${staticSitemapEntries.length} static + ${blogSitemapEntries.length} blog posts)`,
  )

  return allEntries
}
