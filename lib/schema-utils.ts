/**
 * Utilidades para generar esquemas de datos estructurados (Schema.org)
 */

/**
 * Genera un esquema de Article para un artículo de blog
 * @param article Datos del artículo
 * @returns Objeto con el esquema de Article según Schema.org
 */
export function generateArticleSchema(article: {
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
}) {
  return {
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
}

/**
 * Genera un esquema de BlogPosting para un artículo de blog
 * (Variante de Article específica para blogs)
 * @param post Datos del artículo
 * @returns Objeto con el esquema de BlogPosting según Schema.org
 */
export function generateBlogPostingSchema(post: {
  title: string
  description?: string
  slug: string
  image: string
  date: string
  brief?: string
  author?: string
}) {
  return {
    "@type": "BlogPosting",
    "@id": `https://www.webskeet.com/blog/${post.slug}#article`,
    headline: post.title,
    description: post.brief || post.description || "",
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author || "محمود علي",
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
  }
}
