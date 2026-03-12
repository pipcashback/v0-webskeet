import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"
  const t = dict.privacy

  return {
    title: t.title,
    description: t.intro,
    alternates: {
      canonical: isArabic ? "https://webskeet.com/ar/privacy" : "https://webskeet.com/privacy",
      languages: { en: "https://webskeet.com/privacy", ar: "https://webskeet.com/ar/privacy", "x-default": "https://webskeet.com/privacy" },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: isArabic ? "https://webskeet.com/ar/privacy" : "https://webskeet.com/privacy",
      title: t.title,
      description: t.intro,
      siteName: isArabic ? "\u0648\u064A\u0628 \u0633\u0643\u064A\u062A" : "Webskeet",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.intro,
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

export default async function PrivacyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const t = dict.privacy
  const isArabic = locale === "ar"

  return (
    <main className="flex-grow pt-32 pb-16 px-4 md:px-8 lg:px-16 container mx-auto">
      <div className={`max-w-3xl mx-auto ${isArabic ? "text-right" : "text-left"}`}>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-webskeet-blue">{t.heading}</h1>

        <div className="prose prose-lg max-w-none">
          <p className="mb-6">{t.intro}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.infoCollectTitle}</h2>
          <p className="mb-4">{t.infoCollectIntro}</p>
          <ul className={`${isArabic ? "list-disc mr-6" : "list-disc ml-6"} mb-6 space-y-2`}>
            {t.infoItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.howUseTitle}</h2>
          <p className="mb-4">{t.howUseIntro}</p>
          <ul className={`${isArabic ? "list-disc mr-6" : "list-disc ml-6"} mb-6 space-y-2`}>
            {t.howUseItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.securityTitle}</h2>
          <p className="mb-6">{t.securityDesc}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.cookiesTitle}</h2>
          <p className="mb-6">{t.cookiesDesc}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.controlTitle}</h2>
          <p className="mb-6">{t.controlIntro}</p>
          <ul className={`${isArabic ? "list-disc mr-6" : "list-disc ml-6"} mb-6 space-y-2`}>
            {t.controlItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="mb-6">{t.noSell}</p>

          <p className="mt-8">{t.updated}</p>
        </div>
      </div>
    </main>
  )
}
