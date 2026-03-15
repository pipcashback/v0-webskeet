import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import ClientPage from "./ClientPage"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"

  const title = isArabic
    ? "ويب سكيت | خدمات تحسين محركات البحث وزيادة الزيارات العضوية"
    : "WebSkeet | SEO Services to Grow Your Organic Traffic"
  const description = isArabic
    ? "ويب سكيت — حلول تحسين محركات البحث للمواقع العربية والإنجليزية. خبرة +8 سنوات في السيو التقني وسيو المتاجر الإلكترونية. احجز استشارة مجانية."
    : "WebSkeet — bilingual SEO solutions for Arabic and English websites. 8+ years in technical SEO and e-commerce optimization. Book a free consultation."
  const siteName = isArabic ? "ويب سكيت" : "Webskeet"

  return {
    title,
    description,
    keywords: isArabic
      ? "SEO, تحسين محركات البحث, روابط خلفية, تحليل المواقع, استشارات SEO"
      : "SEO, search engine optimization, backlinks, website analysis, SEO consulting",
    authors: [{ name: isArabic ? "محمود علي" : "Mahmoud Ali" }],
    creator: siteName,
    publisher: siteName,
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: isArabic ? "https://webskeet.com/ar" : "https://webskeet.com/",
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
    alternates: {
      canonical: isArabic ? "https://webskeet.com/ar" : "https://webskeet.com",
      languages: {
        en: "https://webskeet.com",
        ar: "https://webskeet.com/ar",
        "x-default": "https://webskeet.com",
      },
    },
  }
}

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return <ClientPage locale={locale} />
}
