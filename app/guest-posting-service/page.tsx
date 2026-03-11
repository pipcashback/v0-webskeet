import type { Metadata } from "next"
import GuestPostingClient from "./guest-posting-client"
import SchemaMarkup from "@/components/seo/schema-markup"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export const metadata: Metadata = {
  title: "خدمة الجيست بوست | عزز موقعك أو اربح من المحتوى",
  description:
    "منصة عربية تربط أصحاب المواقع بكتاب المقالات. احصل على جيست بوست عالي الجودة لتحسين السيو أو اربح من نشر مقالات على موقعك. سجل مجانًا الآن!",
  keywords: "جيست بوست, guest post, نشر مقالات, تحسين السيو, باك لينك, روابط خلفية, كتابة محتوى, أصحاب مواقع عربية",
  openGraph: {
    title: "خدمة الجيست بوست | عزز موقعك أو اربح من المحتوى",
    description: "منصة عربية تربط أصحاب المواقع بكتاب المقالات لزيادة الزوار والأرباح",
    url: "https://webskeet.com/guest-posting-service",
    siteName: "ويب سكيت",
    locale: "ar_EG",
    type: "website",
  },
  alternates: {
    canonical: "https://webskeet.com/guest-posting-service",
  },
}

const breadcrumbItems = [
  { label: "الرئيسية", href: "/" },
  { label: "خدمة الجيست بوست", href: "/guest-posting-service" },
]

const serviceSchema = {
  name: "خدمة الجيست بوست",
  description: "منصة عربية تربط أصحاب المواقع بكتاب المقالات لزيادة الزوار والأرباح",
  provider: {
    "@type": "Organization",
    name: "ويب سكيت",
    url: "https://webskeet.com",
  },
  areaServed: "EG",
  availableLanguage: "ar",
  serviceType: "Guest Posting Service",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    price: "0",
    priceCurrency: "EGP",
  },
}

const faqSchema = {
  mainEntity: [
    {
      "@type": "Question",
      name: "ما هو الجيست بوست (Guest Post)؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الجيست بوست هو مقال يتم نشره على موقع إلكتروني آخر غير موقعك، ويحتوي على رابط يشير إلى موقعك. يساعد في تحسين السيو وزيادة الزوار وبناء السلطة في مجالك.",
      },
    },
    {
      "@type": "Question",
      name: "كيف يمكنني الربح من موقعي عبر الجيست بوست؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "يمكنك تسجيل موقعك في منصتنا والسماح لأصحاب المواقع الأخرى بنشر مقالات عالية الجودة على موقعك مقابل رسوم متفق عليها. هذا يوفر لك مصدر دخل إضافي ومحتوى قيم لموقعك.",
      },
    },
    {
      "@type": "Question",
      name: "هل الخدمة مجانية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، التسجيل في المنصة مجاني تمامًا. يمكنك تسجيل موقعك أو البحث عن فرص جيست بوست دون أي رسوم مقدمة. الرسوم تكون فقط عند إتمام صفقة بين الطرفين.",
      },
    },
    {
      "@type": "Question",
      name: "ما هي شروط قبول المواقع في المنصة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نقبل المواقع العربية التي تحتوي على محتوى أصلي وجودة عالية، وتلتزم بمعايير السيو الأساسية. يجب أن يكون الموقع نشطًا ويقدم قيمة حقيقية للزوار.",
      },
    },
  ],
}

export default function GuestPostingServicePage() {
  return (
    <>
      <SchemaMarkup type="Service" data={serviceSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <div className="container mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <GuestPostingClient />
    </>
  )
}
