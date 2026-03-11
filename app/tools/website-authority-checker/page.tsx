import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import BreadcrumbsSchema from "@/components/seo/breadcrumbs-schema"
import WebsiteAuthorityCheckerClient from "./website-authority-checker-client"

export const metadata: Metadata = {
  title: "فاحص سلطة الموقع - أداة مجانية لفحص Domain Authority | ويب سكيت",
  description:
    "افحص سلطة أي موقع إلكتروني مجاناً. احصل على تقييم شامل لقوة الدومين، الروابط الخلفية، وتقييم الثقة. أداة مجانية لتحليل سلطة المواقع وقوة الدومين.",
  keywords:
    "فاحص سلطة الموقع, Domain Authority, فحص قوة الدومين, تحليل المواقع, Moz DA, فحص الروابط الخلفية, تقييم المواقع, أدوات سيو مجانية",
  alternates: {
    canonical: "https://webskeet.com/tools/website-authority-checker",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://webskeet.com/tools/website-authority-checker",
    title: "فاحص سلطة الموقع - أداة مجانية لفحص Domain Authority | ويب سكيت",
    description: "افحص سلطة أي موقع إلكتروني مجاناً. احصل على تقييم شامل لقوة الدومين، الروابط الخلفية، وتقييم الثقة.",
    siteName: "ويب سكيت",
  },
  twitter: {
    card: "summary_large_image",
    title: "فاحص سلطة الموقع - أداة مجانية لفحص Domain Authority",
    description: "افحص سلطة أي موقع إلكتروني مجاناً. احصل على تقييم شامل لقوة الدومين والروابط الخلفية.",
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

export default function WebsiteAuthorityCheckerPage() {
  // Define breadcrumb items
  const breadcrumbItems = [
    { label: "الرئيسية", href: "/" },
    { label: "أدوات السيو المجانية", href: "/tools" },
    { label: "فاحص سلطة الموقع", href: "/tools/website-authority-checker", isCurrent: true },
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
        <WebsiteAuthorityCheckerClient />
      </div>
    </main>
  )
}
