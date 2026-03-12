import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import ContactClient from "./contact-client"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"

  const title = isArabic
    ? "تواصل معنا - خدمة العملاء"
    : "Contact Us - Customer Service"
  const description = isArabic
    ? "تواصل مع فريق ويب سكيت للاستفسارات والمساعدة في خدمات تحسين محركات البحث وبناء الروابط الخلفية"
    : "Contact the Webskeet team for inquiries and assistance with SEO services and backlink building"
  const siteName = isArabic ? "ويب سكيت" : "Webskeet"

  return {
    title,
    description,
    keywords: isArabic
      ? "تواصل معنا, اتصل بنا, ويب سكيت, خدمة العملاء, استفسارات SEO"
      : "contact us, get in touch, Webskeet, customer service, SEO inquiries",
    alternates: {
      canonical: isArabic ? "https://webskeet.com/ar/contact" : "https://webskeet.com/contact",
      languages: {
        en: "https://webskeet.com/contact",
        ar: "https://webskeet.com/ar/contact",
        "x-default": "https://webskeet.com/contact",
      },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: isArabic ? "https://webskeet.com/ar/contact" : "https://webskeet.com/contact",
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
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return <ContactClient locale={locale} />
}
