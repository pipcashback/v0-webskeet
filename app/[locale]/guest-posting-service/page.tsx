import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import GuestPostingClient from "./guest-posting-client"
import SchemaMarkup from "@/components/seo/schema-markup"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"

  const title = isArabic
    ? "خدمة الجيست بوست | احصل على باك لينك قوي وعزز ترتيب موقعك"
    : "Guest Posting Service | Get Quality Backlinks & Boost Your Rankings"
  const description = isArabic
    ? "اشترِ جيست بوست عربي عالي الجودة بأسعار تبدأ من $15. روابط خلفية دوفلو من مواقع حقيقية لتحسين ترتيبك في جوجل. سجل مجاناً وابدأ الآن!"
    : "Buy quality Arabic guest posts starting at $15. Dofollow backlinks from real websites to boost your Google rankings. Register free and start now!"
  const ogDescription = isArabic
    ? "منصة عربية تربط أصحاب المواقع بكتاب المقالات لزيادة الزوار والأرباح"
    : "An Arabic platform connecting website owners with content writers to increase traffic and revenue"
  const siteName = isArabic ? "ويب سكيت" : "Webskeet"

  return {
    title,
    description,
    keywords: isArabic
      ? "جيست بوست, guest post, نشر مقالات, تحسين السيو, باك لينك, روابط خلفية, كتابة محتوى, أصحاب مواقع عربية"
      : "guest post, article publishing, SEO improvement, backlinks, content writing, Arabic website owners",
    openGraph: {
      title,
      description: ogDescription,
      url: isArabic ? "https://webskeet.com/ar/guest-posting-service" : "https://webskeet.com/guest-posting-service",
      siteName,
      locale: isArabic ? "ar_EG" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: isArabic ? "https://webskeet.com/ar/guest-posting-service" : "https://webskeet.com/guest-posting-service",
      languages: {
        en: "https://webskeet.com/guest-posting-service",
        ar: "https://webskeet.com/ar/guest-posting-service",
        "x-default": "https://webskeet.com/guest-posting-service",
      },
    },
  }
}

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

export default async function GuestPostingServicePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const isArabic = locale === "ar"

  const lp = (path: string) => (locale === "ar" ? `/ar${path}` : path)

  const breadcrumbItems = [
    { label: isArabic ? "الرئيسية" : "Home", href: lp("/") },
    { label: isArabic ? "خدمة الجيست بوست" : "Guest Posting Service", href: lp("/guest-posting-service") },
  ]

  return (
    <>
      <SchemaMarkup type="Service" data={serviceSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <div className="container mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <GuestPostingClient locale={locale} />
    </>
  )
}
