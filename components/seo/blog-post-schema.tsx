"use client"

import { useEffect } from "react"

interface BlogPostSchemaProps {
  schema: any
}

export default function BlogPostSchema({ schema }: BlogPostSchemaProps) {
  useEffect(() => {
    if (!schema) return

    // Create script element
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = typeof schema === "string" ? schema : JSON.stringify(schema)
    script.id = "blog-post-schema"

    // Add to head
    document.head.appendChild(script)

    // Cleanup on unmount
    return () => {
      const existingScript = document.getElementById("blog-post-schema")
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [schema])

  // This component doesn't render anything visible
  return null
}
