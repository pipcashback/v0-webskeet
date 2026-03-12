"use client"

import { useEffect } from "react"

interface SchemaMarkupProps {
  type: "Organization" | "WebPage" | "Service" | "FAQPage" | "Article"
  data: Record<string, any>
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  useEffect(() => {
    // Create the base schema with required context and type
    const schema = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    }

    // Create or update the JSON-LD script tag
    let scriptTag = document.querySelector(`script[data-schema="${type}"]`)
    if (!scriptTag) {
      scriptTag = document.createElement("script")
      scriptTag.setAttribute("type", "application/ld+json")
      scriptTag.setAttribute("data-schema", type)
      document.head.appendChild(scriptTag)
    }
    scriptTag.textContent = JSON.stringify(schema)

    // Cleanup function to remove the script when component unmounts
    return () => {
      const tag = document.querySelector(`script[data-schema="${type}"]`)
      if (tag) {
        tag.remove()
      }
    }
  }, [type, data])

  // This component doesn't render anything visible
  return null
}
