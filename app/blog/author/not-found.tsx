import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AuthorNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="w-20 h-20 bg-webskeet-blue/10 rounded-full flex items-center justify-center mb-6">
        <div className="w-10 h-10 bg-webskeet-blue rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">W</span>
        </div>
      </div>
      <h1 className="text-6xl font-bold text-webskeet-blue mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">صفحة الكاتب غير موجودة</h2>
      <p className="text-gray-600 max-w-md mb-8">عذراً، صفحة الكاتب التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.</p>
      <Link href="/blog">
        <Button className="bg-webskeet-blue text-white hover:bg-webskeet-blue/90">العودة للمدونة</Button>
      </Link>
    </div>
  )
}
