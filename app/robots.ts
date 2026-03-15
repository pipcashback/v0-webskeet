import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/manage-subscriptions/", "/_next/", "/404", "/500"],
    },
    sitemap: "https://webskeet.com/sitemap.xml",
  }
}
