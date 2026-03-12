import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import FAQClient from "./faq-client"
import Script from "next/script"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"

  const title = isArabic
    ? "الأسئلة الشائعة حول خدمات تحسين محركات البحث السيو"
    : "Frequently Asked Questions About SEO Services"
  const description = isArabic
    ? "اكتشف إجابات سريعة لأكثر الأسئلة الشائعة حول خدمات تحسين محركات البحث (SEO) لمساعدتك على فهم كيفية تحسين ظهور موقعك في نتائج البحث."
    : "Discover quick answers to the most frequently asked questions about SEO services to help you understand how to improve your website's visibility in search results."
  const siteName = isArabic ? "ويب سكيت" : "Webskeet"

  return {
    title,
    description,
    alternates: {
      canonical: isArabic ? "https://webskeet.com/ar/faq" : "https://webskeet.com/faq",
      languages: {
        en: "https://webskeet.com/faq",
        ar: "https://webskeet.com/ar/faq",
        "x-default": "https://webskeet.com/faq",
      },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: isArabic ? "https://webskeet.com/ar/faq" : "https://webskeet.com/faq",
      title,
      description,
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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

export default async function FAQPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const isArabic = locale === "ar"
  const canonicalUrl = isArabic ? "https://webskeet.com/ar/faq" : "https://webskeet.com/faq"

  return (
    <>
      {/* Script to ensure correct canonical URL for this specific page */}
      <Script id="canonical-fix" strategy="beforeInteractive">
        {`
          // Ensure the canonical tag is correct for this specific page
          (function() {
            // Find existing canonical link
            let canonicalLink = document.querySelector('link[rel="canonical"]');

            // If it doesn't exist, create it
            if (!canonicalLink) {
              canonicalLink = document.createElement('link');
              canonicalLink.rel = 'canonical';
              document.head.appendChild(canonicalLink);
            }

            // Set the correct canonical URL for the FAQ page
            canonicalLink.href = '${canonicalUrl}';

            console.log('Canonical URL set to:', canonicalLink.href);
          })();
        `}
      </Script>
      <FAQClient locale={locale} />
    </>
  )
}
