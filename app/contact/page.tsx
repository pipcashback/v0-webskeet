import type { Metadata } from "next"
import ContactClient from "./contact-client"

export const metadata: Metadata = {
  title: "تواصل معنا - خدمة العملاء",
  description: "تواصل مع فريق ويب سكيت للاستفسارات والمساعدة في خدمات تحسين محركات البحث وبناء الروابط الخلفية",
  keywords: "تواصل معنا, اتصل بنا, ويب سكيت, خدمة العملاء, استفسارات SEO",
  alternates: {
    canonical: "https://webskeet.com/contact",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://webskeet.com/contact",
    title: "تواصل معنا - خدمة العملاء",
    description: "تواصل مع فريق ويب سكيت للاستفسارات والمساعدة في خدمات تحسين محركات البحث وبناء الروابط الخلفية",
    siteName: "ويب سكيت",
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل معنا - خدمة العملاء",
    description: "تواصل مع فريق ويب سكيت للاستفسارات والمساعدة في خدمات تحسين محركات البحث وبناء الروابط الخلفية",
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

export default function ContactPage() {
  return <ContactClient />
}
