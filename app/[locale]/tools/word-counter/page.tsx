import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import WordCounterClient from "./word-counter-client"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"
  const t = dict.tools

  return {
    title: t.tool2Title,
    description: t.tool2Desc,
    keywords: isArabic
      ? "\u0639\u062F\u0627\u062F \u0627\u0644\u0643\u0644\u0645\u0627\u062A, \u062D\u0633\u0627\u0628 \u0627\u0644\u0643\u0644\u0645\u0627\u062A, \u0639\u062F\u0627\u062F \u0627\u0644\u0623\u062D\u0631\u0641, \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0646\u0635, \u0623\u062F\u0627\u0629 \u0643\u062A\u0627\u0628\u0629"
      : "word counter, character counter, text analysis, writing tool",
    alternates: {
      canonical: isArabic
        ? "https://webskeet.com/ar/tools/word-counter"
        : "https://webskeet.com/tools/word-counter",
      languages: {
        en: "https://webskeet.com/tools/word-counter",
        ar: "https://webskeet.com/ar/tools/word-counter",
        "x-default": "https://webskeet.com/tools/word-counter",
      },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: isArabic
        ? "https://webskeet.com/ar/tools/word-counter"
        : "https://webskeet.com/tools/word-counter",
      title: t.tool2Title,
      description: t.tool2Desc,
      siteName: isArabic ? "\u0648\u064A\u0628 \u0633\u0643\u064A\u062A" : "Webskeet",
    },
    twitter: {
      card: "summary_large_image",
      title: t.tool2Title,
      description: t.tool2Desc,
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

export default async function WordCounterPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return <WordCounterClient locale={locale} />
}
