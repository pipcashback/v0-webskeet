import Link from "next/link"
import { Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-auto border-t-4 border-blue-600">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <p className="text-gray-400 text-sm leading-relaxed">
              نساعدك في تحسين ظهور موقعك في نتائج البحث وزيادة عدد الزوار المستهدفين
            </p>
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
            <h3 className="font-bold text-lg mb-4 text-blue-400">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  المدونة
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tools/seo-title-generator"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  مولد عناوين SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/word-counter"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  عداد الكلمات
                </Link>
              </li>
              <li>
                <Link href="/tools/seo-roi" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  حاسبة عائد الاستثمار
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/website-authority-checker"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  فاحص سلطة الموقع
                </Link>
              </li>
              <li>
                <Link
                  href="/guest-posting-service"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  خدمة الجيست بوست
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-400">سياساتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  شروط الاستخدام
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} ويب سكيت. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
