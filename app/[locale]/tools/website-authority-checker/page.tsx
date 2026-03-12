import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import BreadcrumbsSchema from "@/components/seo/breadcrumbs-schema"
import WebsiteAuthorityCheckerClient from "./website-authority-checker-client"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"
  const t = dict.tools

  return {
    title: t.tool4Title,
    description: t.tool4Desc,
    keywords: isArabic
      ? "\u0641\u0627\u062D\u0635 \u0633\u0644\u0637\u0629 \u0627\u0644\u0645\u0648\u0642\u0639, Domain Authority, \u0641\u062D\u0635 \u0642\u0648\u0629 \u0627\u0644\u062F\u0648\u0645\u064A\u0646, \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0645\u0648\u0627\u0642\u0639, Moz DA, \u0641\u062D\u0635 \u0627\u0644\u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u062E\u0644\u0641\u064A\u0629, \u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0648\u0627\u0642\u0639, \u0623\u062F\u0648\u0627\u062A \u0633\u064A\u0648 \u0645\u062C\u0627\u0646\u064A\u0629"
      : "website authority checker, Domain Authority, domain strength check, website analysis, Moz DA, backlink check, website rating, free seo tools",
    alternates: {
      canonical: isArabic
        ? "https://webskeet.com/ar/tools/website-authority-checker"
        : "https://webskeet.com/tools/website-authority-checker",
      languages: {
        en: "https://webskeet.com/tools/website-authority-checker",
        ar: "https://webskeet.com/ar/tools/website-authority-checker",
        "x-default": "https://webskeet.com/tools/website-authority-checker",
      },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: isArabic
        ? "https://webskeet.com/ar/tools/website-authority-checker"
        : "https://webskeet.com/tools/website-authority-checker",
      title: t.tool4Title,
      description: t.tool4Desc,
      siteName: isArabic ? "\u0648\u064A\u0628 \u0633\u0643\u064A\u062A" : "Webskeet",
    },
    twitter: {
      card: "summary_large_image",
      title: t.tool4Title,
      description: t.tool4Desc,
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

export default async function WebsiteAuthorityCheckerPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"
  const lp = (path: string) => (locale === "ar" ? `/ar${path}` : path)

  // Define breadcrumb items
  const breadcrumbItems = [
    { label: isArabic ? "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" : "Home", href: lp("/") },
    { label: isArabic ? "\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0633\u064A\u0648 \u0627\u0644\u0645\u062C\u0627\u0646\u064A\u0629" : "Free SEO Tools", href: lp("/tools") },
    { label: dict.tools.tool4Title, href: lp("/tools/website-authority-checker"), isCurrent: true },
  ]

  // Define breadcrumb schema items
  const breadcrumbSchemaItems = breadcrumbItems.map((item) => ({
    name: item.label,
    url: `https://webskeet.com${item.href}`,
  }))

  return (
    <main className="flex-grow pt-28 pb-16">
      {/* Add schema components */}
      <BreadcrumbsSchema items={breadcrumbSchemaItems} />

      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-8 bg-gray-50 py-3 px-4 rounded-lg shadow-sm">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Tool Component */}
        <WebsiteAuthorityCheckerClient locale={locale} />
      </div>
    </main>
  )
}
