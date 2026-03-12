import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import SeoTitleGeneratorClient from "./seo-title-generator-client"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"
  const t = dict.tools

  return {
    title: t.tool1Title,
    description: t.tool1Desc,
    keywords: isArabic
      ? "\u0645\u0648\u0644\u062F \u0639\u0646\u0627\u0648\u064A\u0646 \u0633\u064A\u0648, \u0639\u0646\u0627\u0648\u064A\u0646 \u0645\u062D\u0633\u0646\u0629, \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646, \u0623\u062F\u0627\u0629 \u0633\u064A\u0648 \u0645\u062C\u0627\u0646\u064A\u0629"
      : "seo title generator, optimized titles, title optimization, free seo tool",
    alternates: {
      canonical: isArabic
        ? "https://webskeet.com/ar/tools/seo-title-generator"
        : "https://webskeet.com/tools/seo-title-generator",
      languages: {
        en: "https://webskeet.com/tools/seo-title-generator",
        ar: "https://webskeet.com/ar/tools/seo-title-generator",
        "x-default": "https://webskeet.com/tools/seo-title-generator",
      },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: isArabic
        ? "https://webskeet.com/ar/tools/seo-title-generator"
        : "https://webskeet.com/tools/seo-title-generator",
      title: t.tool1Title,
      description: t.tool1Desc,
      siteName: isArabic ? "\u0648\u064A\u0628 \u0633\u0643\u064A\u062A" : "Webskeet",
    },
    twitter: {
      card: "summary_large_image",
      title: t.tool1Title,
      description: t.tool1Desc,
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

export default async function SeoTitleGeneratorPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return <SeoTitleGeneratorClient locale={locale} />
}
