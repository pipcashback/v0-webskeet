import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import PricingClient from "./pricing-client"
import SchemaMarkup from "@/components/seo/schema-markup"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"

  const title = isArabic
    ? "أسعار خدمات السيو | خطط شهرية مخصصة لنمو موقعك"
    : "SEO Service Pricing | Custom Monthly Plans for Your Website Growth"
  const description = isArabic
    ? "اكتشف أسعار خدمات تحسين محركات البحث في ويب سكيت. نقدم خطط سيو شهرية شاملة تغطي On-Page و Off-Page و Technical SEO وكتابة المحتوى لضمان نمو حقيقي في الزيارات والعملاء."
    : "Discover SEO service pricing at Webskeet. We offer comprehensive monthly SEO plans covering On-Page, Off-Page, Technical SEO, and content writing to ensure real growth in traffic and customers."
  const ogDescription = isArabic
    ? "خطط سيو شهرية شاملة تغطي جميع جوانب التحسين: On-Page, Off-Page, Technical SEO, وكتابة المحتوى"
    : "Comprehensive monthly SEO plans covering all optimization aspects: On-Page, Off-Page, Technical SEO, and content writing"
  const siteName = isArabic ? "ويب سكيت" : "Webskeet"

  return {
    title,
    description,
    keywords: isArabic
      ? "أسعار السيو, تكلفة خدمات SEO, خطط سيو شهرية, أسعار تحسين محركات البحث, تكلفة SEO في مصر, خدمات سيو احترافية"
      : "SEO pricing, SEO service cost, monthly SEO plans, search engine optimization pricing, SEO cost, professional SEO services",
    openGraph: {
      title,
      description: ogDescription,
      url: isArabic ? "https://webskeet.com/ar/seo-pricing" : "https://webskeet.com/seo-pricing",
      siteName,
      locale: isArabic ? "ar_EG" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: isArabic ? "https://webskeet.com/ar/seo-pricing" : "https://webskeet.com/seo-pricing",
      languages: {
        en: "https://webskeet.com/seo-pricing",
        ar: "https://webskeet.com/ar/seo-pricing",
        "x-default": "https://webskeet.com/seo-pricing",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

const serviceSchema = {
  name: "خدمات تحسين محركات البحث SEO",
  description:
    "خطط سيو شهرية شاملة تغطي On-Page SEO و Off-Page SEO و Technical SEO وكتابة المحتوى لضمان نمو حقيقي في الزيارات والعملاء",
  provider: {
    "@type": "Organization",
    name: "ويب سكيت",
    url: "https://webskeet.com",
  },
  areaServed: ["EG", "AE", "SA"],
  availableLanguage: "ar",
  serviceType: "SEO Services",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات تحسين محركات البحث",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "On-Page SEO",
          description: "تحسين العناوين، المحتوى، والربط الداخلي بين الصفحات",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Off-Page SEO",
          description: "بناء الروابط وزيادة موثوقية العلامة التجارية",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technical SEO",
          description: "سرعة الموقع، الزحف، الفهرسة، وقابلية الاسترجاع في الذكاء الاصطناعي",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content SEO",
          description: "إنشاء محتوى أصلي يجذب المستخدمين ويتوافق مع خوارزميات جوجل",
        },
      },
    ],
  },
}

const faqSchema = {
  mainEntity: [
    {
      "@type": "Question",
      name: "لماذا لا تعرضون سعرًا ثابتًا لخدمات السيو؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "كل موقع يختلف في أهدافه وهيكله ومستواه الحالي من التحسين. لذلك نقوم أولاً بإجراء استشارة وتحليل شامل للموقع لفهم وضعك بدقة، ثم نضع لك خطة سيو شهرية متكاملة تناسب احتياجاتك الفعلية.",
      },
    },
    {
      "@type": "Question",
      name: "كيف يتم تحديد تكلفة السيو لموقعي؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بعد الاستشارة المجانية وتحليل الموقع، ستحصل على تقرير SEO شامل وخطة استراتيجية مخصصة. تعتمد التكلفة الشهرية على حجم وتعقيد موقعك، مستوى المنافسة في مجالك، وكمية المحتوى والروابط المطلوبة لتحقيق النتائج.",
      },
    },
    {
      "@type": "Question",
      name: "ما الذي تتضمنه خطة السيو الشهرية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "جميع خطط السيو تشمل: بحث متقدم عن الكلمات المفتاحية، تحسين الصفحات والمحتوى، تدقيق فني شامل، بناء روابط استراتيجية، تقارير شهرية، ومتابعة مباشرة من خبير سيو مخصص لموقعك.",
      },
    },
    {
      "@type": "Question",
      name: "هل الاستشارة الأولية مجانية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، نقدم استشارة مجانية لفهم موقعك وتحدياتك وأهدافك المستقبلية. بعد الاستشارة، ستحصل على عرض واضح يوضح التكلفة الشهرية المناسبة لموقعك بناءً على احتياجاته الحقيقية.",
      },
    },
  ],
}

export default async function SEOPricingPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const isArabic = locale === "ar"

  const lp = (path: string) => (locale === "ar" ? `/ar${path}` : path)

  const breadcrumbItems = [
    { label: isArabic ? "الرئيسية" : "Home", href: lp("/") },
    { label: isArabic ? "أسعار" : "Pricing", href: lp("/seo-pricing") },
  ]

  return (
    <>
      <SchemaMarkup type="Service" data={serviceSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <div className="container mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <PricingClient locale={locale} />
    </>
  )
}
