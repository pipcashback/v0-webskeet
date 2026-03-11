import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Search, Mail, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found - WebSkeet",
  description: "The page you are looking for could not be found. Explore our SEO services and tools.",
  robots: "noindex, nofollow",
  alternates: {
    canonical: "https://webskeet.com/404",
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-red-600">404</span>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Page Not Found</CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the
            wrong URL.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/">
              <Button variant="default" className="w-full h-12 text-base">
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </Button>
            </Link>

            <Link href="/blog">
              <Button variant="outline" className="w-full h-12 text-base bg-transparent">
                <FileText className="mr-2 h-5 w-5" />
                Read Our Blog
              </Button>
            </Link>

            <Link href="/tools">
              <Button variant="outline" className="w-full h-12 text-base bg-transparent">
                <Search className="mr-2 h-5 w-5" />
                SEO Tools
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" className="w-full h-12 text-base bg-transparent">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Popular Pages</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">
                About Us
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/faq" className="text-blue-600 hover:text-blue-800 underline">
                FAQ
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/tools/seo-title-generator" className="text-blue-600 hover:text-blue-800 underline">
                SEO Title Generator
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/tools/word-counter" className="text-blue-600 hover:text-blue-800 underline">
                Word Counter
              </Link>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p>
              If you believe this is an error, please{" "}
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
