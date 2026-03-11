import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "تحسين محركات البحث باحتراف مع خبير سيو | احصل على تصنيف أفضل",
  description:
    "نساعدك في رفع ترتيب موقعك وزيادة الزوار العضويين المهتمين بخدماتك أو منتجاتك احصل على استشارة مجانية الآن لتحديد أفضل استراتيجيات سيو لموقعك ...",
  keywords: "SEO, تحسين محركات البحث, روابط خلفية, تحليل المواقع, استشارات SEO",
  authors: [{ name: "محمود علي" }],
  creator: "ويب سكيت",
  publisher: "ويب سكيت",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://webskeet.com/",
    title: "تحسين محركات البحث باحتراف مع خبير سيو | احصل على تصنيف أفضل",
    description:
      "نساعدك في رفع ترتيب موقعك وزيادة الزوار العضويين المهتمين بخدماتك أو منتجاتك احصل على استشارة مجانية الآن لتحديد أفضل استراتيجيات سيو لموقعك ...",
    siteName: "ويب سكيت",
  },
  twitter: {
    card: "summary_large_image",
    title: "تحسين محركات البحث باحتراف مع خبير سيو | احصل على تصنيف أفضل",
    description:
      "نساعدك في رفع ترتيب موقعك وزيادة الزوار العضويين المهتمين بخدماتك أو منتجاتك احصل على استشارة مجانية الآن لتحديد أفضل استراتيجيات سيو لموقعك ...",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://webskeet.com",
  },
}

export default function Home() {
  return <ClientPage />
}
