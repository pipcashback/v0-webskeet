import Link from "next/link"
import { Linkedin, Youtube } from "lucide-react"
import type { Locale } from "@/i18n/config"

const footerContent = {
  en: {
    description: "We help you improve your website's visibility in search results and increase targeted visitors",
    quickLinks: "Quick Links",
    services: "Our Services",
    tools: "Our Tools",
    policies: "Our Policies",
    home: "Home",
    about: "About Us",
    blog: "Blog",
    faq: "FAQ",
    contact: "Contact Us",
    seoCompany: "SEO Services",
    seoPricing: "SEO Pricing",
    freeConsultation: "Free Consultation",
    seoTitleGenerator: "SEO Title Generator",
    wordCounter: "Word Counter",
    seoRoiCalculator: "SEO ROI Calculator",
    websiteAuthorityChecker: "Website Authority Checker",
    guestPostingService: "Guest Posting Service",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    copyright: "Webskeet. All rights reserved.",
  },
  ar: {
    description: "نساعدك في تحسين ظهور موقعك في نتائج البحث وزيادة عدد الزوار المستهدفين",
    quickLinks: "روابط سريعة",
    services: "خدماتنا",
    tools: "أدواتنا",
    policies: "سياساتنا",
    home: "الرئيسية",
    about: "من نحن",
    blog: "المدونة",
    faq: "الأسئلة الشائعة",
    contact: "اتصل بنا",
    seoCompany: "شركة سيو",
    seoPricing: "أسعار خدمات السيو",
    freeConsultation: "استشارة مجانية",
    seoTitleGenerator: "مولد عناوين SEO",
    wordCounter: "عداد الكلمات",
    seoRoiCalculator: "حاسبة عائد الاستثمار",
    websiteAuthorityChecker: "فاحص سلطة الموقع",
    guestPostingService: "خدمة الجيست بوست",
    privacyPolicy: "سياسة الخصوصية",
    termsOfUse: "شروط الاستخدام",
    copyright: "ويب سكيت. جميع الحقوق محفوظة.",
  },
}

function lp(path: string, locale: Locale): string {
  return locale === "ar" ? `/ar${path}` : path
}

export default function Footer({ locale }: { locale: Locale }) {
  const t = footerContent[locale]
  const isArabic = locale === "ar"

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-auto border-t-4 border-blue-600">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <p className="text-gray-400 text-sm leading-relaxed">{t.description}</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.youtube.com/@ma77moud_ali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/webskeet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={lp("/", locale)} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href={lp("/about", locale)} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href={lp("/blog", locale)} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link href={lp("/faq", locale)} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.faq}
                </Link>
              </li>
              <li>
                <Link href={lp("/contact", locale)} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">{t.services}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={isArabic ? "/ar/seo-company" : "/arabic-seo-agency"} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.seoCompany}
                </Link>
              </li>
              <li>
                <Link href={lp("/seo-pricing", locale)} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.seoPricing}
                </Link>
              </li>
              <li>
                <Link href={isArabic ? "/ar/seo-company#consultation" : "/arabic-seo-agency#consultation"} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.freeConsultation}
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Tools (renamed from "Our Services") */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">{t.tools}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={lp("/tools/seo-title-generator", locale)} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.seoTitleGenerator}
                </Link>
              </li>
              <li>
                <Link href={lp("/tools/word-counter", locale)} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.wordCounter}
                </Link>
              </li>
              <li>
                <Link href={lp("/tools/seo-roi", locale)} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.seoRoiCalculator}
                </Link>
              </li>
              <li>
                <Link href={lp("/tools/website-authority-checker", locale)} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.websiteAuthorityChecker}
                </Link>
              </li>
              <li>
                <Link href={lp("/guest-posting-service", locale)} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.guestPostingService}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">{t.policies}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={lp("/privacy", locale)} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href={lp("/terms", locale)} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {t.termsOfUse}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} {t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
