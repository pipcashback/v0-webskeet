export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/manage-subscriptions/", "/_next/", "/404", "/500"],
    },
    sitemap: "https://webskeet.com/sitemap.xml",
  }
}
