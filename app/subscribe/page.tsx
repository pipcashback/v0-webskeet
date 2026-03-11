import type { Metadata } from "next"
import SubscribeClient from "./subscribe-client"

export const metadata: Metadata = {
  title: "اشترك في النشرة الإخبارية - ويب سكيت",
  description: "اشترك في النشرة الإخبارية للحصول على آخر النصائح والاستراتيجيات في تحسين محركات البحث والتسويق الرقمي",
  keywords: "اشتراك, نشرة إخبارية, نصائح سيو, تحسين محركات البحث, ويب سكيت",
  alternates: {
    canonical: "https://webskeet.com/subscribe",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://webskeet.com/subscribe",
    title: "اشترك في النشرة الإخبارية - ويب سكيت",
    description:
      "اشترك في النشرة الإخبارية للحصول على آخر النصائح والاستراتيجيات في تحسين محركات البحث والتسويق الرقمي",
    siteName: "ويب سكيت",
  },
  twitter: {
    card: "summary_large_image",
    title: "اشترك في النشرة الإخبارية - ويب سكيت",
    description:
      "اشترك في النشرة الإخبارية للحصول على آخر النصائح والاستراتيجيات في تحسين محركات البحث والتسويق الرقمي",
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

export default function SubscribePage() {
  return <SubscribeClient />
}
