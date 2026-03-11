import type { Metadata } from "next"
import FAQClient from "./faq-client"
import Script from "next/script"

export const metadata: Metadata = {
  title: "الأسئلة الشائعة حول خدمات تحسين محركات البحث السيو",
  description:
    "اكتشف إجابات سريعة لأكثر الأسئلة الشائعة حول خدمات تحسين محركات البحث (SEO) لمساعدتك على فهم كيفية تحسين ظهور موقعك في نتائج البحث.",
  alternates: {
    canonical: "https://webskeet.com/faq",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://webskeet.com/faq",
    title: "الأسئلة الشائعة حول خدمات تحسين محركات البحث السيو",
    description:
      "اكتشف إجابات سريعة لأكثر الأسئلة الشائعة حول خدمات تحسين محركات البحث (SEO) لمساعدتك على فهم كيفية تحسين ظهور موقعك في نتائج البحث.",
    siteName: "ويب سكيت",
  },
  twitter: {
    card: "summary_large_image",
    title: "الأسئلة الشائعة حول خدمات تحسين محركات البحث السيو",
    description:
      "اكتشف إجابات سريعة لأكثر الأسئلة الشائعة حول خدمات تحسين محركات البحث (SEO) لمساعدتك على فهم كيفية تحسين ظهور موقعك في نتائج البحث.",
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

export default function FAQPage() {
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
            canonicalLink.href = 'https://webskeet.com/faq';
            
            console.log('Canonical URL set to:', canonicalLink.href);
          })();
        `}
      </Script>
      <FAQClient />
    </>
  )
}
