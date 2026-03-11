import type React from "react"
import type { Metadata } from "next"
import { Tajawal } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import WhatsAppButton from "@/components/whatsapp-button"
import { Toaster } from "@/components/ui/toaster"

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://webskeet.com"),
  title: {
    default: "ويب سكيت - خبير تحسين محركات البحث SEO والتسويق الرقمي",
    template: "%s | ويب سكيت",
  },
  description:
    "خبير تحسين محركات البحث SEO والتسويق الرقمي. نقدم استشارات SEO متخصصة وخدمات تحسين محركات البحث لتصدر نتائج البحث وزيادة عدد الزوار.",
  keywords: [
    "تحسين محركات البحث",
    "SEO",
    "خبير SEO",
    "استشارات SEO",
    "تحسين SEO",
    "التسويق الرقمي",
    "تصدر نتائج البحث",
    "زيادة الزوار",
    "ويب سكيت",
  ],
  authors: [{ name: "محمود علي", url: "https://webskeet.com" }],
  creator: "ويب سكيت",
  publisher: "ويب سكيت",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: "https://webskeet.com",
    siteName: "ويب سكيت",
    title: "ويب سكيت - خبير تحسين محركات البحث SEO",
    description: "خبير تحسين محركات البحث SEO والتسويق الرقمي",
    images: [
      {
        url: "https://webskeet.com/images/seo-expert.png",
        width: 1200,
        height: 630,
        alt: "ويب سكيت - خبير SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ويب سكيت - خبير تحسين محركات البحث SEO",
    description: "خبير تحسين محركات البحث SEO والتسويق الرقمي",
    images: ["https://webskeet.com/images/seo-expert.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://webskeet.com",
    languages: {
      ar: "https://webskeet.com",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
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
      <body className={tajawal.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  )
}
