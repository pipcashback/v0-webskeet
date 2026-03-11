"use client"

import { useEffect } from "react"

interface ArticleSchemaProps {
  article: {
    title: string
    description?: string
    slug: string
    image: string
    date: string
    modifiedDate?: string
    author?: {
      name: string
      url?: string
    }
    category?: string
    tags?: string[]
    content?: string
  }
}

export default function ArticleSchema({ article }: ArticleSchemaProps) {
  useEffect(() => {
    // Crear el esquema de Article según schema.org
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `https://www.webskeet.com/blog/${article.slug}#article`,
      headline: article.title,
      description: article.description || "",
      image: article.image,
      datePublished: article.date,
      dateModified: article.modifiedDate || article.date,
      author: {
        "@type": "Person",
        name: article.author?.name || "محمود علي",
        url: article.author?.url || "https://www.webskeet.com/blog/author/mahmoud-ali",
      },
      publisher: {
        "@type": "Organization",
        name: "خدمات تحسين محركات البحث",
        logo: {
          "@type": "ImageObject",
          url: "https://www.webskeet.com/images/webskeet-logo.png",
          width: 160,
          height: 60,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.webskeet.com/blog/${article.slug}`,
      },
      articleSection: article.category || "SEO",
      keywords: article.tags?.join(", ") || "تحسين محركات البحث, SEO",
      inLanguage: "ar-EG",
    }

    // Añadir el esquema a la página
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(articleSchema)
    script.id = "article-schema"
    document.head.appendChild(script)

    // Limpiar al desmontar el componente
    return () => {
      const existingScript = document.getElementById("article-schema")
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [article])

  // Este componente no renderiza nada visible
  return null
}
