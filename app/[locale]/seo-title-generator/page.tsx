import type { Metadata } from "next"
import SEOTitleGeneratorClient from "./seo-title-generator-client"

export const metadata: Metadata = {
  title: "مولد عناوين السيو - أداة مجانية لإنشاء عناوين متوافقة مع محركات البحث",
  description:
    "أداة مجانية لتوليد عناوين SEO احترافية باللغة العربية. 15 قالب مختلف لإنشاء عناوين جذابة ومتوافقة مع محركات البحث لتحسين ترتيب موقعك.",
  keywords: "مولد عناوين سيو, عناوين SEO عربية, أداة عناوين مجانية, تحسين العناوين, عناوين محركات البحث",
  alternates: {
    canonical: "https://www.webskeet.com/seo-title-generator",
  },
  openGraph: {
    title: "مولد عناوين السيو - أداة مجانية لإنشاء عناوين متوافقة مع محركات البحث",
    description:
      "أداة مجانية لتوليد عناوين SEO احترافية باللغة العربية. 15 قالب مختلف لإنشاء عناوين جذابة ومتوافقة مع محركات البحث.",
    url: "https://www.webskeet.com/seo-title-generator",
    type: "website",
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

export default function SEOTitleGeneratorPage() {
  return <SEOTitleGeneratorClient />
}
