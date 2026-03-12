import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import SeoRoiClient from "./seo-roi-client"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"
  const t = dict.tools

  return {
    title: t.tool3Title,
    description: t.tool3Desc,
    keywords: isArabic
      ? "\u062D\u0627\u0633\u0628\u0629 ROI \u0633\u064A\u0648, \u0639\u0627\u0626\u062F \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631, \u062A\u062D\u0633\u064A\u0646 \u0645\u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0628\u062D\u062B, \u062D\u0633\u0627\u0628 \u0627\u0644\u0623\u0631\u0628\u0627\u062D, \u0645\u064A\u0632\u0627\u0646\u064A\u0629 \u0627\u0644\u0633\u064A\u0648"
      : "seo roi calculator, return on investment, search engine optimization, profit calculation, seo budget",
    alternates: {
      canonical: isArabic
        ? "https://webskeet.com/ar/tools/seo-roi"
        : "https://webskeet.com/tools/seo-roi",
      languages: {
        en: "https://webskeet.com/tools/seo-roi",
        ar: "https://webskeet.com/ar/tools/seo-roi",
        "x-default": "https://webskeet.com/tools/seo-roi",
      },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: isArabic
        ? "https://webskeet.com/ar/tools/seo-roi"
        : "https://webskeet.com/tools/seo-roi",
      title: t.tool3Title,
      description: t.tool3Desc,
      siteName: isArabic ? "\u0648\u064A\u0628 \u0633\u0643\u064A\u062A" : "Webskeet",
    },
    twitter: {
      card: "summary_large_image",
      title: t.tool3Title,
      description: t.tool3Desc,
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

export default async function SeoRoiPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return <SeoRoiClient locale={locale} />
}
