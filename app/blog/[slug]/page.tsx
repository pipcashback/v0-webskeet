import type { Metadata } from "next"
import { fetchBlogPost } from "@/lib/contentful"
import Image from "next/image"
import Link from "next/link"
import ShareButtons from "@/components/ShareButtons"
import { renderRichText, createRichTextRenderOptions, extractPlainText } from "@/lib/richTextRenderer"
import Script from "next/script"
import { formatDate } from "@/lib/date-utils"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import BreadcrumbsSchema from "@/components/seo/breadcrumbs-schema"
import BlogPostSchema from "@/components/seo/blog-post-schema"
import ArticleSchema from "@/components/seo/article-schema"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await fetchBlogPost(params.slug)

  if (!post) {
    return {
      title: "مقال غير موجود",
      description: "عذراً، المقال الذي تبحث عنه غير متوفر",
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  return {
    title: post.seoHeading || post.title,
    description: post.seoDescription ? extractPlainText(post.seoDescription) : post.brief,
    alternates: {
      canonical: `https://webskeet.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.seoHeading || post.title,
      description: post.seoDescription || post.brief,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      url: `https://webskeet.com/blog/${params.slug}`,
      authors: ["https://webskeet.com/blog/author/mahmoud-ali"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoHeading || post.title,
      description: post.seoDescription || post.brief,
      images: [post.image],
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await fetchBlogPost(params.slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center mt-24">
        <h1 className="text-4xl font-bold text-webskeet-blue mb-4">عذراً، المقال غير موجود</h1>
        <p className="text-gray-600 mb-8">المقال الذي تبحث عنه غير متوفر أو تم حذفه</p>
        <a href="/blog" className="text-webskeet-blue hover:underline">
          العودة إلى المدونة
        </a>
      </div>
    )
  }

  // Define breadcrumb items - only showing Home and Blog
  const breadcrumbItems = [
    { label: "الرئيسية", href: "/" },
    { label: "المدونة", href: "/blog" },
  ]

  // Define breadcrumb schema items
  const breadcrumbSchemaItems = breadcrumbItems.map((item) => ({
    name: item.label,
    url: `https://webskeet.com${item.href}`,
  }))

  // Prepare data for Article schema
  const articleData = {
    title: post.title,
    description: post.brief,
    slug: params.slug,
    image: post.image,
    date: post.date,
    modifiedDate: post.date, // Use same date if no modification date
    author: {
      name: "محمود علي",
      url: "https://webskeet.com/blog/author/mahmoud-ali",
    },
    category: "SEO", // Default category
    tags: ["تحسين محركات البحث", "SEO"], // Default tags
  }

  return (
    <>
      <Script id="blog-post-canonical" strategy="afterInteractive">
        {`
          // Confirm canonical link for blog post page
          (function() {
            let canonicalLink = document.querySelector('link[rel="canonical"]');
            if (!canonicalLink) {
              canonicalLink = document.createElement('link');
              canonicalLink.rel = 'canonical';
              document.head.appendChild(canonicalLink);
            }
            canonicalLink.href = 'https://webskeet.com/blog/${params.slug}';
          })();
        `}
      </Script>
      {/* Add schema components */}
      <BreadcrumbsSchema items={breadcrumbSchemaItems} />
      {post.schema && <BlogPostSchema schema={post.schema} />}
      <ArticleSchema article={articleData} />
      <article className="container mx-auto px-4 mt-16 py-12 pb-0 max-w-4xl">
        {/* Breadcrumbs */}
        <div className="mb-6 bg-gray-50 py-3 px-4 rounded-lg shadow-sm">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <header className="mb-8">
          <h1 className="text-4xl max-sm:text-2xl text-webskeet-blue font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-between border-b-2 pb-3">
            <div className="flex items-center gap-4">
              <time className="text-gray-600">{formatDate(post.date)}</time>
              <span className="text-gray-400">•</span>
              <Link href="/blog/author/mahmoud-ali" className="flex items-center text-webskeet-blue hover:underline">
                <span className="ml-1">الكاتب:</span>
                <span>محمود علي</span>
              </Link>
            </div>
            <ShareButtons title={post.title} />
          </div>
        </header>
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={1200}
          height={800}
          className="h-[250px] md:h-[500px] w-full object-cover rounded-lg mb-8"
          priority
          quality={85}
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="prose prose-lg max-w-none">
          {renderRichText(post.description, createRichTextRenderOptions(post.includes))}
        </div>
        <footer className="mt-16">
          {/* CTA for the article about how an SEO expert helps increase visits and sales */}
          {params.slug === "كيف-يساعدك-خبير-السيو-في-زيادة-الزيارات-والمبيعات" && (
            <div className="bg-gradient-to-r from-webskeet-blue/10 to-webskeet-gold/10 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-2xl font-bold text-webskeet-blue mb-3">هل ترغب في مضاعفة زيارات موقعك؟</h3>
              <p className="text-gray-700 mb-4">
                احجز استشارة مجانية مع خبير سيو الآن واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك.
              </p>
              <a
                href="https://webskeet.com/#consultation"
                className="inline-block bg-webskeet-blue hover:bg-webskeet-blue/90 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow"
              >
                احجز استشارة مجانية
              </a>
            </div>
          )}

          <div className="flex flex-col items-center gap-4">
            <Link
              href="/subscribe"
              className="flex items-center gap-2 bg-webskeet-blue/10 hover:bg-webskeet-blue/20 text-webskeet-blue px-4 py-2 rounded-full transition-colors"
            >
              <Image
                src="/images/authors/mahmoud-ali-profile.png"
                alt="محمود علي"
                width={32}
                height={32}
                className="rounded-full"
                quality={85}
                loading="lazy"
              />
              <span>تابع محمود علي للمزيد من المقالات</span>
            </Link>
            <div className="flex items-center justify-center gap-4 w-full mt-4">
              <div className="h-[2px] bg-webskeet-blue flex-grow"></div>
              <span className="text-webskeet-blue font-semibold">•</span>
              <div className="h-[2px] bg-webskeet-blue flex-grow"></div>
            </div>
          </div>
        </footer>
      </article>
    </>
  )
}
