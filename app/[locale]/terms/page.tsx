import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"
  const t = dict.terms

  return {
    title: t.title,
    description: t.intro,
    alternates: {
      canonical: isArabic ? "https://webskeet.com/ar/terms" : "https://webskeet.com/terms",
      languages: { en: "https://webskeet.com/terms", ar: "https://webskeet.com/ar/terms", "x-default": "https://webskeet.com/terms" },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: isArabic ? "https://webskeet.com/ar/terms" : "https://webskeet.com/terms",
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

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const t = dict.terms
  const isArabic = locale === "ar"

  return (
    <main className="flex-grow pt-32 pb-16 px-4 md:px-8 lg:px-16 container mx-auto">
      <div className={`max-w-3xl mx-auto ${isArabic ? "text-right" : "text-left"}`}>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-webskeet-blue">{t.heading}</h1>

        <div className="prose prose-lg max-w-none">
          <p className="mb-6">{t.intro}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.useTitle}</h2>
          <p className="mb-6">{t.useDesc}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.servicesTitle}</h2>
          <p className="mb-4">{t.servicesIntro}</p>
          <ul className={`${isArabic ? "list-disc mr-6" : "list-disc ml-6"} mb-6 space-y-2`}>
            {t.servicesItems.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.paymentsTitle}</h2>
          <p className="mb-6">{t.paymentsDesc}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.ipTitle}</h2>
          <p className="mb-6">{t.ipDesc}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.disclaimerTitle}</h2>
          <p className="mb-6">{t.disclaimerDesc}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.liabilityTitle}</h2>
          <p className="mb-6">{t.liabilityDesc}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.lawTitle}</h2>
          <p className="mb-6">{t.lawDesc}</p>

          <p className="mt-8">{t.updated}</p>
        </div>
      </div>
    </main>
  )
}
