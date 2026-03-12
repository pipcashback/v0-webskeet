import type React from "react"
import type { Metadata } from "next"
import { Tajawal, Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import WhatsAppButton from "@/components/whatsapp-button"
import { Toaster } from "@/components/ui/toaster"
import type { Locale } from "@/i18n/config"
import { i18n } from "@/i18n/config"

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === "ar"

  return {
    metadataBase: new URL("https://webskeet.com"),
    title: {
      default: isArabic
        ? "ويب سكيت - خبير تحسين محركات البحث SEO والتسويق الرقمي"
        : "Webskeet - SEO Expert & Digital Marketing",
      template: isArabic ? "%s | ويب سكيت" : "%s | Webskeet",
    },
    description: isArabic
      ? "خبير تحسين محركات البحث SEO والتسويق الرقمي. نقدم استشارات SEO متخصصة وخدمات تحسين محركات البحث لتصدر نتائج البحث وزيادة عدد الزوار."
      : "SEO expert and digital marketing specialist. We provide specialized SEO consulting and search engine optimization services to rank higher and increase traffic.",
    keywords: isArabic
      ? ["تحسين محركات البحث", "SEO", "خبير SEO", "استشارات SEO", "التسويق الرقمي", "ويب سكيت"]
      : ["SEO", "search engine optimization", "SEO expert", "SEO consulting", "digital marketing", "Webskeet", "Arabic SEO"],
    authors: [{ name: isArabic ? "محمود علي" : "Mahmoud Ali", url: "https://webskeet.com" }],
    creator: isArabic ? "ويب سكيت" : "Webskeet",
    publisher: isArabic ? "ويب سكيت" : "Webskeet",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_AR" : "en_US",
      url: isArabic ? "https://webskeet.com/ar" : "https://webskeet.com",
      siteName: isArabic ? "ويب سكيت" : "Webskeet",
      title: isArabic
        ? "ويب سكيت - خبير تحسين محركات البحث SEO"
        : "Webskeet - SEO Expert & Digital Marketing",
      description: isArabic
        ? "خبير تحسين محركات البحث SEO والتسويق الرقمي"
        : "SEO expert and digital marketing specialist",
      images: [
        {
          url: "https://webskeet.com/images/seo-expert.png",
          width: 1200,
          height: 630,
          alt: isArabic ? "ويب سكيت - خبير SEO" : "Webskeet - SEO Expert",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic
        ? "ويب سكيت - خبير تحسين محركات البحث SEO"
        : "Webskeet - SEO Expert & Digital Marketing",
      description: isArabic
        ? "خبير تحسين محركات البحث SEO والتسويق الرقمي"
        : "SEO expert and digital marketing specialist",
      images: ["https://webskeet.com/images/seo-expert.png"],
    },
    alternates: {
      canonical: isArabic ? "https://webskeet.com/ar" : "https://webskeet.com",
      languages: {
        en: "https://webskeet.com",
        ar: "https://webskeet.com/ar",
        "x-default": "https://webskeet.com",
      },
    },
  }
}

function getHreflangPath(pathname: string, locale: string): string {
  // Strip [locale] segment from internal path
  const cleanPath = pathname.replace(/^\/(en|ar)/, "") || "/"
  if (locale === "en") {
    return cleanPath === "/" ? "https://webskeet.com" : `https://webskeet.com${cleanPath}`
  }
  return cleanPath === "/" ? "https://webskeet.com/ar" : `https://webskeet.com/ar${cleanPath}`
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}>) {
  const { locale } = await params
  const isArabic = locale === "ar"
  const dir = isArabic ? "rtl" : "ltr"
  const lang = isArabic ? "ar" : "en"
  const fontVariable = isArabic ? tajawal.variable : inter.variable
  const fontClass = isArabic ? tajawal.className : inter.className

  return (
    <html lang={lang} dir={dir} className={fontVariable}>
      <head>
        <Script id="promptwatch-tracking" strategy="afterInteractive">
          {`
            (function() {
              var script = document.createElement('script');
              script.setAttribute('data-project-id', '17bc6e2c-72bb-4a3a-87c9-ac3dcad3783e');
              script.src = 'https://ingest.promptwatch.com/js/client.min.js';
              document.head.appendChild(script);
            })();
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P2XZX459');
          `}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17651882704" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17651882704');
          `}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-GGWGYRBYLM" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GGWGYRBYLM');
          `}
        </Script>
        <Script id="hotjar-tracking" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6400112,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </head>
      <body className={fontClass}>
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        <WhatsAppButton locale={locale} />
        <Toaster />
      </body>
    </html>
  )
}
