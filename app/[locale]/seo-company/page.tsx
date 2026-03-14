import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { redirect } from "next/navigation"
import SeoCompanyClient from "./seo-company-client"
import SchemaMarkup from "@/components/seo/schema-markup"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params

  // Only Arabic version exists — return noindex for English
  if (locale !== "ar") {
    return {
      title: "SEO Company",
      description: "This page is available in Arabic.",
      robots: { index: false, follow: false },
    }
  }

  return {
    title: "شركة سيو احترافية | خدمات تحسين محركات البحث",
    description: "شركة سيو متخصصة في تحسين محركات البحث للمواقع العربية والإنجليزية. خبرة +8 سنوات في السيو التقني وسيو المتاجر الإلكترونية. احجز استشارة مجانية الآن.",
    keywords: "شركة سيو, شركة تحسين محركات البحث, خدمات سيو, خبير سيو, سيو تقني, سيو المتاجر الإلكترونية, افضل شركة سيو",
    openGraph: {
      title: "شركة سيو احترافية — ويب سكيت | خدمات تحسين محركات البحث",
      description: "شركة سيو متخصصة في تحسين محركات البحث للمواقع العربية والإنجليزية. خبرة +8 سنوات في السيو التقني وسيو المتاجر الإلكترونية.",
      url: "https://webskeet.com/ar/seo-company",
      siteName: "ويب سكيت",
      locale: "ar_EG",
      type: "website",
    },
    alternates: {
      canonical: "https://webskeet.com/ar/seo-company",
      languages: {
        ar: "https://webskeet.com/ar/seo-company",
        en: "https://webskeet.com/arabic-seo-agency",
        "x-default": "https://webskeet.com/arabic-seo-agency",
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

const professionalServiceSchema = {
  name: "ويب سكيت — شركة سيو",
  description: "شركة سيو متخصصة في تحسين محركات البحث للمواقع العربية والإنجليزية",
  url: "https://webskeet.com/ar/seo-company",
  logo: "https://webskeet.com/images/webskeet-logo.png",
  telephone: ["+201091199450", "+971502524919"],
  address: [
    {
      "@type": "PostalAddress",
      addressCountry: "EG",
      addressLocality: "القاهرة",
      telephone: "+201091199450",
    },
    {
      "@type": "PostalAddress",
      addressCountry: "AE",
      addressLocality: "دبي",
      telephone: "+971502524919",
    },
  ],
  areaServed: ["SA", "AE", "QA", "KW", "BH", "OM", "EG"],
  serviceType: ["تحسين محركات البحث", "سيو تقني", "سيو المتاجر الإلكترونية", "بناء الروابط"],
  priceRange: "$$",
  sameAs: [
    "https://www.linkedin.com/company/webskeet",
    "https://clutch.co/profile/webskeet",
  ],
}

const faqSchema = {
  mainEntity: [
    {
      "@type": "Question",
      name: "كم تكلفة خدمات السيو الشهرية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تختلف التكلفة حسب حجم الموقع والمنافسة في مجالك. نقدم خططاً شهرية تبدأ من 5,000 درهم وتصل إلى 25,000 درهم للشركات الكبرى.",
      },
    },
    {
      "@type": "Question",
      name: "كم من الوقت يحتاج السيو لتظهر النتائج؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "عادةً تبدأ النتائج الأولية بالظهور خلال 3-4 أشهر، والنتائج القوية خلال 6-12 شهر.",
      },
    },
    {
      "@type": "Question",
      name: "هل تقدمون ضمان الصفحة الأولى؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "لا. نقدم شفافية كاملة في التقارير الشهرية، واستراتيجية مبنية على بيانات حقيقية، والتزام بتحسين مستمر.",
      },
    },
    {
      "@type": "Question",
      name: "ما الفرق بين السيو والإعلانات المدفوعة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "الإعلانات المدفوعة تعطيك نتائج فورية لكنها تتوقف فور إيقاف الميزانية. السيو يحتاج وقتاً أطول لكن نتائجه دائمة.",
      },
    },
    {
      "@type": "Question",
      name: "هل تناسب خدماتكم الشركات الصغيرة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعمل أساساً مع الشركات المتوسطة والكبيرة. إذا كانت ميزانيتك محدودة، يمكنك البدء بفحص سيو شامل لمرة واحدة.",
      },
    },
    {
      "@type": "Question",
      name: "هل تعملون مع شركات خارج المنطقة العربية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم. نخدم شركات أوروبية وأمريكية تدخل الأسواق العربية وتحتاج خبرة سيو عربي أصيل.",
      },
    },
  ],
}

export default async function SeoCompanyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params

  // Only Arabic version exists — redirect English to Arabic
  if (locale !== "ar") {
    redirect("/ar/seo-company")
  }

  const lp = (path: string) => `/ar${path}`

  // Page only renders in Arabic (English redirects above)
  const breadcrumbItems = [
    { label: "الرئيسية", href: lp("/") },
    { label: "خدماتنا", href: lp("/seo-company") },
    { label: "شركة سيو", href: lp("/seo-company") },
  ]

  return (
    <>
      <SchemaMarkup type="Service" data={professionalServiceSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <div className="container mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <SeoCompanyClient locale={locale} />
    </>
  )
}
