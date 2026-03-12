"use client"

import SchemaMarkup from "./schema-markup"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  items: FAQItem[]
}

export default function FAQSchema({ items }: FAQSchemaProps) {
  const faqSchemaData = {
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return <SchemaMarkup type="FAQPage" data={faqSchemaData} />
}
