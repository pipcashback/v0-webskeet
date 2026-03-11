"use client"

import SchemaMarkup from "./schema-markup"

export default function OrganizationSchema() {
  const organizationData = {
    name: "خدمات تحسين محركات البحث",
    description:
      "خدمات سيو احترافية تهدف إلى رفع ترتيب موقعك في نتائج البحث، وزيادة عدد الزوار العضويين المهتمين بخدماتك أو منتجاتك",
    url: typeof window !== "undefined" ? window.location.origin : "https://www.webskeet.com",
    logo:
      typeof window !== "undefined"
        ? `${window.location.origin}/images/webskeet-logo.png`
        : "https://www.webskeet.com/images/webskeet-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+20123456789",
      contactType: "customer service",
      areaServed: ["EG", "AE"],
      availableLanguage: ["Arabic", "English"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Egypt",
      addressLocality: "Cairo",
    },
    sameAs: [
      "https://www.linkedin.com/in/mahmoud-ali-817a9b122/",
      "https://podcasts.apple.com/ae/podcast/%D8%B3%D9%8A%D8%B1%D8%B4-%D8%A8%D9%84%D8%B3/id1777099129",
      "https://open.spotify.com/show/2sZeC8SCrcF6saTUa8dNlY",
    ],
    service: [
      {
        "@type": "Service",
        name: "بناء الروابط الخلفية",
        description: "إنشاء روابط خلفية قوية من مواقع عربية موثوقة بتصنيف DA 30+",
        serviceType: "SEO",
      },
      {
        "@type": "Service",
        name: "تحليل المواقع",
        description: "تحليل شامل للموقع الإلكتروني وتحديد نقاط القوة والضعف",
        serviceType: "SEO",
      },
      {
        "@type": "Service",
        name: "استشارات SEO",
        description: "استشارات متخصصة لتحسين محركات البحث",
        serviceType: "SEO",
      },
    ],
  }

  return <SchemaMarkup type="Organization" data={organizationData} />
}
