"use client"

import { useEffect } from "react"

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsSchemaProps {
  items: BreadcrumbItem[]
}

export default function BreadcrumbsSchema({ items }: BreadcrumbsSchemaProps) {
  useEffect(() => {
    // Create breadcrumb schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    }

    // Add schema to page
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(script)

    // Cleanup
    return () => {
      document.head.removeChild(script)
    }
  }, [items])

  // This component doesn't render anything visible
  return null
}
