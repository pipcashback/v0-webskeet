import type { Metadata } from "next"
import WordCounterClient from "./word-counter-client"

export const metadata: Metadata = {
  title: "عداد الكلمات المجاني - احسب عدد الكلمات والأحرف",
  description:
    "استخدم عداد الكلمات المجاني لحساب عدد الكلمات والأحرف في النصوص. أداة مثالية لكتاب المحتوى ومحسني السيو",
  keywords: "عداد الكلمات, حساب الكلمات, عداد الأحرف, تحليل النص, أداة كتابة",
  alternates: {
    canonical: "https://webskeet.com/tools/word-counter",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://webskeet.com/tools/word-counter",
    title: "عداد الكلمات المجاني - احسب عدد الكلمات والأحرف",
    description:
      "استخدم عداد الكلمات المجاني لحساب عدد الكلمات والأحرف في النصوص. أداة مثالية لكتاب المحتوى ومحسني السيو",
    siteName: "ويب سكيت",
  },
  twitter: {
    card: "summary_large_image",
    title: "عداد الكلمات المجاني - احسب عدد الكلمات والأحرف",
    description:
      "استخدم عداد الكلمات المجاني لحساب عدد الكلمات والأحرف في النصوص. أداة مثالية لكتاب المحتوى ومحسني السيو",
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

export default function WordCounterPage() {
  return <WordCounterClient />
}
