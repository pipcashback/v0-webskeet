import { fetchBlogPosts } from "@/lib/contentful"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import BlogSchema from "@/components/seo/blog-schema"
import { formatDate } from "@/lib/date-utils"
import { User } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"
  const t = dict.blog

  return {
    title: t.heading,
    description: t.description,
    keywords: isArabic
      ? "مدونة سيو, مقالات تحسين محركات البحث, نصائح سيو, تسويق رقمي, ويب سكيت"
      : "seo blog, search engine optimization articles, seo tips, digital marketing, webskeet",
    alternates: {
      canonical: isArabic ? "https://webskeet.com/ar/blog" : "https://webskeet.com/blog",
      languages: {
        en: "https://webskeet.com/blog",
        ar: "https://webskeet.com/ar/blog",
        "x-default": "https://webskeet.com/blog",
      },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: isArabic ? "https://webskeet.com/ar/blog" : "https://webskeet.com/blog",
      title: t.heading,
      description: t.description,
      siteName: isArabic ? "ويب سكيت" : "Webskeet",
    },
    twitter: {
      card: "summary_large_image",
      title: t.heading,
      description: t.description,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

export default async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const t = dict.blog
  const isArabic = locale === "ar"
  const lp = (path: string) => (locale === "ar" ? `/ar${path}` : path)

  // Only fetch blog posts for Arabic locale
  let blogPosts: any[] = []
  if (isArabic) {
    try {
      blogPosts = await fetchBlogPosts()
    } catch (error) {
      console.error("Error fetching blog posts:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      {blogPosts.length > 0 && <BlogSchema posts={blogPosts} />}

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-webskeet-blue mb-4">{t.heading}</h1>
        <p className="text-xl text-muted-foreground">{t.description}</p>
      </div>

      {/* English blog - coming soon message */}
      {!isArabic && (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <p className="text-muted-foreground text-lg mb-6">
              Stay tuned! Our English blog is coming soon. In the meantime, explore our SEO services.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-webskeet-blue hover:bg-webskeet-blue/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Explore Our Services →
            </Link>
          </div>
        </div>
      )}

      {/* Arabic blog - empty state */}
      {isArabic && blogPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">لا توجد مقالات حالياً</p>
        </div>
      )}

      {/* Arabic blog - articles grid */}
      {isArabic && blogPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post: any) => (
            <Link href={lp(`/blog/${post.slug}`)} key={post.id}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-72 w-full">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-2 text-sm text-muted-foreground mb-3">
                    <span>{formatDate(post.date)}</span>
                    <Link
                      href={lp("/blog/author/mahmoud-ali")}
                      className="flex items-center text-gray-600 hover:text-webskeet-blue"
                    >
                      <User className="h-4 w-4 me-1" />
                      <span>{t.author}</span>
                    </Link>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-muted-foreground line-clamp-3">{post.brief}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
