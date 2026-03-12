"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function AuthorNotFound() {
  const pathname = usePathname()
  const isArabic = pathname?.startsWith("/ar")
  const lp = (path: string) => (isArabic ? `/ar${path}` : path)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="w-20 h-20 bg-webskeet-blue/10 rounded-full flex items-center justify-center mb-6">
        <div className="w-10 h-10 bg-webskeet-blue rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">W</span>
        </div>
      </div>
      <h1 className="text-6xl font-bold text-webskeet-blue mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">
        {isArabic ? "صفحة الكاتب غير موجودة" : "Author Page Not Found"}
      </h2>
      <p className="text-gray-600 max-w-md mb-8">
        {isArabic
          ? "عذراً، صفحة الكاتب التي تبحث عنها غير موجودة أو تم نقلها أو حذفها."
          : "Sorry, the author page you are looking for does not exist or has been moved or deleted."}
      </p>
      <Link href={lp("/blog")}>
        <Button className="bg-webskeet-blue text-white hover:bg-webskeet-blue/90">
          {isArabic ? "العودة للمدونة" : "Back to Blog"}
        </Button>
      </Link>
    </div>
  )
}
