import { fetchBlogPosts } from "@/lib/contentful"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { Metadata } from "next"
import BlogSchema from "@/components/seo/blog-schema"
import { formatDate } from "@/lib/date-utils"
import { User } from "lucide-react"

export const metadata: Metadata = {
  title: "مقالات حصرية تساعدك على تحسين ظهور موقعك",
  description: "اطلع على آخر المقالات والأخبار حول تحسين محركات البحث والتسويق الرقمي من خبراء ويب سكيت",
  keywords: "مدونة سيو, مقالات تحسين محركات البحث, نصائح سيو, تسويق رقمي, ويب سكيت",
  alternates: {
    canonical: "https://webskeet.com/blog",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://webskeet.com/blog",
    title: "مقالات حصرية تساعدك على تحسين ظهور موقعك",
    description: "اطلع على آخر المقالات والأخبار حول تحسين محركات البحث والتسويق الرقمي من خبراء ويب سكيت",
    siteName: "ويب سكيت",
  },
  twitter: {
    card: "summary_large_image",
    title: "مقالات حصرية تساعدك على تحسين ظهور موقعك",
    description: "اطلع على آخر المقالات والأخبار حول تحسين محركات البحث والتسويق الرقمي من خبراء ويب سكيت",
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

export default async function BlogPage() {
  const blogPosts = await fetchBlogPosts()

  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      {/* إضافة مكون BlogSchema لتحسين SEO */}
      <BlogSchema posts={blogPosts} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-webskeet-blue mb-4">المدونة</h1>
        <p className="text-xl text-muted-foreground">آخر المقالات والأخبار حول تحسين محركات البحث والتسويق الرقمي</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post: any) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
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
                    href="/blog/author/mahmoud-ali"
                    className="flex items-center text-gray-600 hover:text-webskeet-blue"
                  >
                    <User className="h-4 w-4 ml-1" />
                    <span>محمود علي</span>
                  </Link>
                </div>
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-muted-foreground line-clamp-3">{post.brief}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
