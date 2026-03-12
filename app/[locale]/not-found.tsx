"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Search, Mail, FileText } from "lucide-react"

export default function NotFound() {
  const pathname = usePathname()
  const isArabic = pathname?.startsWith("/ar")
  const lp = (path: string) => (isArabic ? `/ar${path}` : path)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-red-600">404</span>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
            {isArabic ? "الصفحة غير موجودة" : "Page Not Found"}
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            {isArabic
              ? "عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما تم نقلها أو حذفها أو أنك أدخلت رابطاً خاطئاً."
              : "Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL."}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href={lp("/")}>
              <Button variant="default" className="w-full h-12 text-base">
                <Home className="me-2 h-5 w-5" />
                {isArabic ? "الصفحة الرئيسية" : "Go to Homepage"}
              </Button>
            </Link>

            <Link href={lp("/blog")}>
              <Button variant="outline" className="w-full h-12 text-base bg-transparent">
                <FileText className="me-2 h-5 w-5" />
                {isArabic ? "اقرأ المدونة" : "Read Our Blog"}
              </Button>
            </Link>

            <Link href={lp("/tools")}>
              <Button variant="outline" className="w-full h-12 text-base bg-transparent">
                <Search className="me-2 h-5 w-5" />
                {isArabic ? "أدوات السيو" : "SEO Tools"}
              </Button>
            </Link>

            <Link href={lp("/contact")}>
              <Button variant="outline" className="w-full h-12 text-base bg-transparent">
                <Mail className="me-2 h-5 w-5" />
                {isArabic ? "تواصل معنا" : "Contact Us"}
              </Button>
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {isArabic ? "صفحات شائعة" : "Popular Pages"}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              <Link href={lp("/about")} className="text-blue-600 hover:text-blue-800 underline">
                {isArabic ? "من نحن" : "About Us"}
              </Link>
              <span className="text-gray-400">•</span>
              <Link href={lp("/faq")} className="text-blue-600 hover:text-blue-800 underline">
                {isArabic ? "الأسئلة الشائعة" : "FAQ"}
              </Link>
              <span className="text-gray-400">•</span>
              <Link href={lp("/tools/seo-title-generator")} className="text-blue-600 hover:text-blue-800 underline">
                {isArabic ? "مولد عناوين السيو" : "SEO Title Generator"}
              </Link>
              <span className="text-gray-400">•</span>
              <Link href={lp("/tools/word-counter")} className="text-blue-600 hover:text-blue-800 underline">
                {isArabic ? "عداد الكلمات" : "Word Counter"}
              </Link>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p>
              {isArabic ? "إذا كنت تعتقد أن هذا خطأ، يرجى " : "If you believe this is an error, please "}
              <Link href={lp("/contact")} className="text-blue-600 hover:text-blue-800 underline">
                {isArabic ? "تواصل معنا" : "contact us"}
              </Link>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
