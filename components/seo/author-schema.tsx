"use client"

import { useEffect } from "react"

export default function AuthorSchema() {
  useEffect(() => {
    // Create author schema
    const authorSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://www.webskeet.com/blog/author/mahmoud-ali#person",
      name: "Mahmoud Ali",
      alternateName: "محمود علي",
      description:
        "خبير في تحسين محركات البحث (SEO) يقدّم حلولًا متكاملة لمساعدة المواقع العربية على التصدّر في نتائج البحث وتحقيق نمو مستدام.",
      image: "https://www.webskeet.com/images/authors/mahmoud-ali-profile.png",
      url: "https://www.webskeet.com/blog/author/mahmoud-ali",
      jobTitle: "خبير تحسين محركات البحث",
      worksFor: {
        "@type": "Organization",
        name: "ويب سكيت",
        url: "https://www.webskeet.com",
      },
      sameAs: [
        "https://www.linkedin.com/in/mahmoud-ali-817a9b122",
        "https://open.spotify.com/show/2sZeC8SCrcF6saTUa8dNlY",
        "https://podcasts.apple.com/ae/podcast/%D8%B3%D9%8A%D8%B1%D8%B4-%D8%A8%D9%84%D8%B3/id1777099129",
      ],
    }

    // Add schema to page
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(authorSchema)
    document.head.appendChild(script)

    // Cleanup
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  // This component doesn't render anything visible
  return null
}
