import type { Metadata } from "next"
import AboutClient from "./about-client"

export const metadata: Metadata = {
  title: "من نحن - خبراء تحسين محركات البحث",
  description:
    "تعرف على شركة ويب سكيت المتخصصة في خدمات تحسين محركات البحث (SEO) في مصر والإمارات. خبرة أكثر من 5 سنوات في تحسين مواقع الويب وزيادة الزيارات العضوية.",
  alternates: {
    canonical: "https://webskeet.com/about",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://webskeet.com/about",
    title: "من نحن - خبراء تحسين محركات البحث",
    description:
      "تعرف على شركة ويب سكيت المتخصصة في خدمات تحسين محركات البحث (SEO) في مصر والإمارات. خبرة أكثر من 5 سنوات في تحسين مواقع الويب وزيادة الزيارات العضوية.",
    siteName: "ويب سكيت",
  },
  twitter: {
    card: "summary_large_image",
    title: "من نحن - خبراء تحسين محركات البحث",
    description:
      "تعرف على شركة ويب سكيت المتخصصة في خدمات تحسين محركات البحث (SEO) في مصر والإمارات. خبرة أكثر من 5 سنوات في تحسين مواقع الويب وزيادة الزيارات العضوية.",
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

export default function AboutPage() {
  return <AboutClient />
}
