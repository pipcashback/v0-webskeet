import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import SubscribeClient from "./subscribe-client"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"

  const title = isArabic
    ? "اشترك في النشرة الإخبارية - ويب سكيت"
    : "Subscribe to Newsletter - Webskeet"
  const description = isArabic
    ? "اشترك في النشرة الإخبارية للحصول على آخر النصائح والاستراتيجيات في تحسين محركات البحث والتسويق الرقمي"
    : "Subscribe to our newsletter for the latest tips and strategies in SEO and digital marketing"
  const siteName = isArabic ? "ويب سكيت" : "Webskeet"

  return {
    title,
    description,
    keywords: isArabic
      ? "اشتراك, نشرة إخبارية, نصائح سيو, تحسين محركات البحث, ويب سكيت"
      : "subscribe, newsletter, SEO tips, search engine optimization, Webskeet",
    alternates: {
      canonical: isArabic ? "https://webskeet.com/ar/subscribe" : "https://webskeet.com/subscribe",
      languages: {
        en: "https://webskeet.com/subscribe",
        ar: "https://webskeet.com/ar/subscribe",
        "x-default": "https://webskeet.com/subscribe",
      },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: isArabic ? "https://webskeet.com/ar/subscribe" : "https://webskeet.com/subscribe",
      title,
      description,
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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

export default async function SubscribePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return <SubscribeClient locale={locale} />
}
