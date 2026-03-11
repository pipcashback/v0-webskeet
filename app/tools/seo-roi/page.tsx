import type { Metadata } from "next"
import SeoRoiClient from "./seo-roi-client"

export const metadata: Metadata = {
  title: "حاسبة عائد الاستثمار للسيو - احسب ROI لتحسين محركات البحث",
  description:
    "استخدم حاسبة عائد الاستثمار للسيو لحساب العائد المتوقع من استثمارك في تحسين محركات البحث وتحديد الميزانية المناسبة",
  keywords: "حاسبة ROI سيو, عائد الاستثمار, تحسين محركات البحث, حساب الأرباح, ميزانية السيو",
  alternates: {
    canonical: "https://webskeet.com/tools/seo-roi",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://webskeet.com/tools/seo-roi",
    title: "حاسبة عائد الاستثمار للسيو - احسب ROI لتحسين محركات البحث",
    description:
      "استخدم حاسبة عائد الاستثمار للسيو لحساب العائد المتوقع من استثمارك في تحسين محركات البحث وتحديد الميزانية المناسبة",
    siteName: "ويب سكيت",
  },
  twitter: {
    card: "summary_large_image",
    title: "حاسبة عائد الاستثمار للسيو - احسب ROI لتحسين محركات البحث",
    description:
      "استخدم حاسبة عائد الاستثمار للسيو لحساب العائد المتوقع من استثمارك في تحسين محركات البحث وتحديد الميزانية المناسبة",
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

export default function SeoRoiPage() {
  return <SeoRoiClient />
}
