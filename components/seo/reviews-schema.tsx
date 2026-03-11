"use client"

import { useEffect } from "react"

interface Review {
  id: number
  name?: string
  title?: string
  position?: string
  rating?: number
  date: string
  content: string
  isGoogleReview?: boolean
}

interface ReviewsSchemaProps {
  reviews: Review[]
}

export default function ReviewsSchema({ reviews }: ReviewsSchemaProps) {
  useEffect(() => {
    // تحويل بيانات المراجعات إلى تنسيق Schema.org
    const reviewsData = reviews
      .filter((review) => review.name || review.title) // فقط المراجعات التي لها اسم أو عنوان
      .map((review) => {
        const reviewName = review.name || "مستخدم"

        return {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: reviewName,
          },
          datePublished: review.date,
          reviewBody: review.content,
          reviewRating: {
            "@type": "Rating",
            ratingValue: review.rating || 5,
            bestRating: "5",
            worstRating: "1",
          },
          itemReviewed: {
            "@type": "Organization",
            name: "ويب سكيت",
            sameAs: "https://www.webskeet.com/",
          },
        }
      })

    // إنشاء بيانات منظمة للمراجعات
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.webskeet.com/#reviews",
      name: "ويب سكيت",
      url: "https://www.webskeet.com/",
      review: reviewsData,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
        ratingCount: reviewsData.length.toString(),
        reviewCount: reviewsData.length.toString(),
      },
    }

    // إنشاء عنصر script وإضافته إلى الصفحة
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    // تنظيف عند إلغاء تحميل المكون
    return () => {
      document.head.removeChild(script)
    }
  }, [reviews])

  // هذا المكون لا يعرض أي شيء مرئي
  return null
}
