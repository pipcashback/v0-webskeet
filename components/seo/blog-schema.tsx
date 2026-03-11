"use client"

import { useEffect } from "react"

interface BlogSchemaProps {
  posts: Array<{
    id: string
    title: string
    description?: string
    slug: string
    image: string
    date: string
    brief?: string
    author?: string
  }>
}

export default function BlogSchema({ posts }: BlogSchemaProps) {
  useEffect(() => {
    // Crear esquema BlogPosting para cada artículo
    const blogPostings = posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `https://www.webskeet.com/blog/${post.slug}#article`,
      headline: post.title,
      description: post.brief || "",
      image: post.image,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Person",
        name: "محمود علي",
        url: "https://www.webskeet.com/blog/author/mahmoud-ali",
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
        "@id": `https://www.webskeet.com/blog/${post.slug}`,
      },
      articleSection: "SEO",
      keywords: "تحسين محركات البحث, SEO",
      inLanguage: "ar-EG",
    }))

    // Crear esquema Blog para la página principal de la blog
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": "https://www.webskeet.com/blog#blog",
      name: "مدونة تحسين محركات البحث",
      description: "آخر المقالات والأخبار حول تحسين محركات البحث والتسويق الرقمي",
      url: "https://www.webskeet.com/blog",
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
      blogPost: blogPostings,
    }

    // Añadir el esquema a la página
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(blogSchema)
    document.head.appendChild(script)

    // Limpiar al desmontar el componente
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [posts])

  // Este componente no renderiza nada visible
  return null
}
