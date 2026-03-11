import type { Metadata } from "next"
import SeoTitleGeneratorClient from "./seo-title-generator-client"

export const metadata: Metadata = {
  title: "مولد عناوين السيو المجاني - أنشئ عناوين محسنة لمحركات البحث",
  description:
    "استخدم مولد عناوين السيو المجاني لإنشاء عناوين جذابة ومحسنة لمحركات البحث. احصل على اقتراحات متعددة لتحسين ترتيب موقعك",
  keywords: "مولد عناوين سيو, عناوين محسنة, تحسين العناوين, أداة سيو مجانية",
  alternates: {
    canonical: "https://webskeet.com/tools/seo-title-generator",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://webskeet.com/tools/seo-title-generator",
    title: "مولد عناوين السيو المجاني - أنشئ عناوين محسنة لمحركات البحث",
    description:
      "استخدم مولد عناوين السيو المجاني لإنشاء عناوين جذابة ومحسنة لمحركات البحث. احصل على اقتراحات متعددة لتحسين ترتيب موقعك",
    siteName: "ويب سكيت",
  },
  twitter: {
    card: "summary_large_image",
    title: "مولد عناوين السيو المجاني - أنشئ عناوين محسنة لمحركات البحث",
    description:
      "استخدم مولد عناوين السيو المجاني لإنشاء عناوين جذابة ومحسنة لمحركات البحث. احصل على اقتراحات متعددة لتحسين ترتيب موقعك",
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

export default function SeoTitleGeneratorPage() {
  return <SeoTitleGeneratorClient />
}
