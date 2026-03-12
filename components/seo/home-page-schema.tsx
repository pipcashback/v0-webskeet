"use client"

import { useEffect } from "react"

export default function HomePageSchema() {
  useEffect(() => {
    // إنشاء مخطط موحد باستخدام @graph لتجنب التكرار
    const combinedSchema = {
      "@context": "https://schema.org",
      "@graph": [
        // كائن المنظمة الرئيسي - موحد مع كل البيانات
        {
          "@type": "Organization",
          "@id": "https://www.webskeet.com/#organization",
          name: "ويب سكيت",
          url: "https://www.webskeet.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://www.webskeet.com/images/webskeet-logo.png",
            width: 160,
            height: 60,
          },
          description:
            "خدمات سيو احترافية تهدف إلى رفع ترتيب موقعك في نتائج البحث، وزيادة عدد الزوار العضويين المهتمين بخدماتك أو منتجاتك",
          foundingDate: "2018",
          email: "info@webskeet.com",
          founder: {
            "@type": "Person",
            name: "محمود علي",
            jobTitle: "خبير سيو",
            image: "https://www.webskeet.com/images/mahmoud-ali-profile.jpeg",
            sameAs: ["https://www.linkedin.com/in/mahmoud-ali-817a9b122/"],
          },
          // تنسيق أرقام الهواتف بالمعيار الدولي
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+201091199450",
              contactType: "customer service",
              areaServed: "EG",
              availableLanguage: ["Arabic", "English"],
            },
            {
              "@type": "ContactPoint",
              telephone: "+971502524919",
              contactType: "customer service",
              areaServed: "AE",
              availableLanguage: ["Arabic", "English"],
            },
          ],
          address: [
            {
              "@type": "PostalAddress",
              addressCountry: "EG",
              addressLocality: "Cairo",
              postalCode: "11511",
              streetAddress: "Nasr City, Cairo",
            },
            {
              "@type": "PostalAddress",
              addressCountry: "AE",
              addressLocality: "Dubai",
              postalCode: "00000",
              streetAddress: "Sheikh Zayed Road, Dubai",
            },
          ],
          sameAs: [
            "https://www.linkedin.com/in/mahmoud-ali-817a9b122/",
            "https://podcasts.apple.com/ae/podcast/سيرش-بلس/id1777099129",
            "https://open.spotify.com/show/2sZeC8SCrcF6saTUa8dNlY",
          ],
          // استخدام makesOffer بدلاً من service لعرض الخدمات
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "بناء الروابط الخلفية",
                description: "إنشاء روابط خلفية قوية من مواقع عربية موثوقة بتصنيف DA 30+",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "تحليل المواقع",
                description: "تحليل شامل للموقع الإلكتروني وتحديد نقاط القوة والضعف",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "استشارات SEO",
                description: "استشارات متخصصة لتحسين محركات البحث",
              },
            },
          ],
        },
        // مخطط التنقل الفتات
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.webskeet.com/#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "الرئيسية",
              item: "https://www.webskeet.com/",
            },
          ],
        },
        // مخطط الموقع
        {
          "@type": "WebSite",
          "@id": "https://www.webskeet.com/#website",
          url: "https://www.webskeet.com/",
          name: "خدمات تحسين محركات البحث",
          description: "خدمات تحسين محركات البحث (SEO) للشركات العربية",
          publisher: {
            "@id": "https://www.webskeet.com/#organization",
          },
        },
        // مخطط الصفحة
        {
          "@type": "WebPage",
          "@id": "https://www.webskeet.com/#webpage",
          url: "https://www.webskeet.com/",
          name: "تحسين محركات البحث باحتراف مع خبير سيو | احصل على تصنيف أفضل",
          description: "نساعدك في رفع ترتيب موقعك وزيادة الزوار العضويين المهتمين بخدماتك أو منتجاتك",
          isPartOf: {
            "@id": "https://www.webskeet.com/#website",
          },
          about: {
            "@id": "https://www.webskeet.com/#organization",
          },
          breadcrumb: {
            "@id": "https://www.webskeet.com/#breadcrumb",
          },
        },
      ],
    }

    // إضافة المخطط الموحد إلى الصفحة
    const schemaScript = document.createElement("script")
    schemaScript.type = "application/ld+json"
    schemaScript.text = JSON.stringify(combinedSchema)
    document.head.appendChild(schemaScript)

    // تنظيف عند إلغاء تحميل المكون
    return () => {
      document.head.removeChild(schemaScript)
    }
  }, [])

  // هذا المكون لا يعرض أي شيء مرئي
  return null
}
