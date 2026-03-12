import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import AboutClient from "./about-client"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"

  const title = isArabic
    ? "من نحن - خبراء تحسين محركات البحث"
    : "About Us - SEO Experts"
  const description = isArabic
    ? "تعرف على شركة ويب سكيت المتخصصة في خدمات تحسين محركات البحث (SEO) في مصر والإمارات. خبرة أكثر من 5 سنوات في تحسين مواقع الويب وزيادة الزيارات العضوية."
    : "Learn about Webskeet, a company specializing in SEO services in Egypt and the UAE. Over 5 years of experience in website optimization and increasing organic traffic."
  const siteName = isArabic ? "ويب سكيت" : "Webskeet"

  return {
    title,
    description,
    alternates: {
      canonical: isArabic ? "https://webskeet.com/ar/about" : "https://webskeet.com/about",
      languages: {
        en: "https://webskeet.com/about",
        ar: "https://webskeet.com/ar/about",
        "x-default": "https://webskeet.com/about",
      },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: isArabic ? "https://webskeet.com/ar/about" : "https://webskeet.com/about",
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

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return <AboutClient locale={locale} />
}
