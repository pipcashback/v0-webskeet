import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { redirect } from "next/navigation"
import ArabicSeoAgencyClient from "./arabic-seo-agency-client"
import SchemaMarkup from "@/components/seo/schema-markup"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params

  // Only English version exists at this URL — return noindex for Arabic
  if (locale === "ar") {
    return {
      title: "Arabic SEO Agency",
      description: "This page is available in English.",
      robots: { index: false, follow: false },
    }
  }

  return {
    title: "Arabic SEO Agency | Search Engine Optimization",
    description: "Arabic SEO agency specializing in search engine optimization for Arabic and English websites. 8+ years of technical SEO and e-commerce expertise. Book a free consultation.",
    keywords: "Arabic SEO agency, SEO for Arabic websites, Arabic search engine optimization, Middle East SEO company, bilingual SEO Arabic English, Arabic ecommerce SEO, Arabic keyword research",
    openGraph: {
      title: "Arabic SEO Agency — WebSkeet | Expert Arabic Search Optimization",
      description: "Arabic SEO agency specializing in search engine optimization for Arabic and English websites. 8+ years of technical SEO and e-commerce expertise.",
      url: "https://webskeet.com/arabic-seo-agency",
      siteName: "Webskeet",
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: "https://webskeet.com/arabic-seo-agency",
      languages: {
        en: "https://webskeet.com/arabic-seo-agency",
        ar: "https://webskeet.com/ar/seo-company",
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
  name: "WebSkeet — Arabic SEO Agency",
  description: "Arabic SEO agency specializing in search engine optimization for Arabic and English websites",
  url: "https://webskeet.com/arabic-seo-agency",
  logo: "https://webskeet.com/images/webskeet-logo.png",
  telephone: ["+201091199450", "+971502524919"],
  address: [
    {
      "@type": "PostalAddress",
      addressCountry: "EG",
      addressLocality: "Cairo",
      telephone: "+201091199450",
    },
    {
      "@type": "PostalAddress",
      addressCountry: "AE",
      addressLocality: "Dubai",
      telephone: "+971502524919",
    },
  ],
  areaServed: ["SA", "AE", "QA", "KW", "BH", "OM", "EG", "GB", "US", "DE", "FR"],
  serviceType: ["Arabic SEO", "Technical SEO", "E-commerce SEO", "Bilingual SEO", "Link Building"],
  priceRange: "$$",
  knowsLanguage: ["ar", "en"],
  sameAs: [
    "https://www.linkedin.com/company/webskeet",
    "https://clutch.co/profile/webskeet",
  ],
}

const faqSchema = {
  mainEntity: [
    {
      "@type": "Question",
      name: "Why can't I just translate my English SEO strategy into Arabic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arabic SEO requires fundamentally different keyword research, content structure, and technical implementation. Arabic morphology creates dozens of keyword variations from a single root word, search volumes are consistently underreported by 2-5x in standard tools, and RTL layout requirements affect Core Web Vitals.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Arabic SEO cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our monthly retainers range from $2,200 to $5,500 depending on scope, industry competitiveness, and whether bilingual optimization is needed. We start with a free consultation to understand your goals before providing a quote.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with companies outside the Middle East?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with European, American, and international companies expanding into Arabic-speaking markets. Our bilingual team bridges the gap between Western business expectations and Arabic search behavior.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results from Arabic SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Initial improvements typically appear within 3-4 months, with significant results in 6-12 months. Arabic search markets generally have lower competition than English, so results can come faster than you might expect.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle both Arabic and English SEO for the same website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely — bilingual SEO is our core specialty. We implement proper hreflang tags, subdirectory architecture, and separate keyword strategies for each language while maintaining unified domain authority.",
      },
    },
    {
      "@type": "Question",
      name: "Do you guarantee first-page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Any agency guaranteeing specific rankings is either using practices that violate Google's guidelines or targeting keywords with zero competition. We offer complete transparency in monthly reporting, data-driven strategy, and a commitment to continuous improvement.",
      },
    },
  ],
}

export default async function ArabicSeoAgencyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params

  // Only English version exists — redirect Arabic to its counterpart
  if (locale === "ar") {
    redirect("/ar/seo-company")
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/arabic-seo-agency" },
    { label: "Arabic SEO Agency", href: "/arabic-seo-agency" },
  ]

  return (
    <>
      <SchemaMarkup type="Service" data={professionalServiceSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <div className="container mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <ArabicSeoAgencyClient locale={locale} />
    </>
  )
}
