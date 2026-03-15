import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import ClientPage from "./ClientPage"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"

  const title = isArabic
    ? "خبير سيو | ضاعف زيارات موقعك مع أفضل خدمات تحسين محركات البحث"
    : "SEO Expert | Double Your Traffic with Professional SEO Services"
  const description = isArabic
    ? "احصل على استشارة SEO مجانية من خبير سيو متخصص. نساعدك في تصدر نتائج البحث وزيادة الزوار العضويين بنتائج مثبتة. ابدأ الآن!"
    : "Get a free SEO consultation from a specialized expert. We help you rank higher and grow organic traffic with proven results. Start now!"
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
