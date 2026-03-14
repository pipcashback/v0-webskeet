import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { fetchBlogPost } from "@/lib/contentful"
import { notFound } from "next/navigation"
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
  params: Promise<{ locale: Locale; slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"
  const lp = (path: string) => (locale === "ar" ? `/ar${path}` : path)

  // English blog posts don't exist — return 404 metadata
  if (!isArabic) {
    return {
      title: "Article Not Found",
      description: "This article is not available in English.",
      robots: { index: false, follow: false },
    }
  }

  const post = await fetchBlogPost(slug)

  if (!post) {
    return {
      title: isArabic ? "\u0645\u0642\u0627\u0644 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" : "Article Not Found",
      description: isArabic
        ? "\u0639\u0630\u0631\u0627\u064B\u060C \u0627\u0644\u0645\u0642\u0627\u0644 \u0627\u0644\u0630\u064A \u062A\u0628\u062D\u062B \u0639\u0646\u0647 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631"
        : "Sorry, the article you are looking for is not available",
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const blogUrl = isArabic
    ? `https://webskeet.com/ar/blog/${slug}`
    : `https://webskeet.com/blog/${slug}`

  return {
    title: post.seoHeading || post.title,
    description: post.seoDescription ? extractPlainText(post.seoDescription) : post.brief,
    alternates: {
      canonical: blogUrl,
      languages: {
        // Blog posts only exist in Arabic — no hreflang="en" to avoid pointing to 404
        ar: `https://webskeet.com/ar/blog/${slug}`,
        "x-default": `https://webskeet.com/ar/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.seoHeading || post.title,
      description: post.seoDescription || post.brief,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      url: blogUrl,
      authors: [`https://webskeet.com${lp("/blog/author/mahmoud-ali")}`],
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
  const { locale, slug } = await params
  const isArabic = locale === "ar"

  // English blog posts don't exist — return 404
  if (!isArabic) {
    notFound()
  }

  const dict = await getDictionary(locale)
  const lp = (path: string) => `/ar${path}`

  const post = await fetchBlogPost(slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center mt-24">
        <h1 className="text-4xl font-bold text-webskeet-blue mb-4">
          {isArabic ? "\u0639\u0630\u0631\u0627\u064B\u060C \u0627\u0644\u0645\u0642\u0627\u0644 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" : "Sorry, Article Not Found"}
        </h1>
        <p className="text-gray-600 mb-8">
          {isArabic
            ? "\u0627\u0644\u0645\u0642\u0627\u0644 \u0627\u0644\u0630\u064A \u062A\u0628\u062D\u062B \u0639\u0646\u0647 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631 \u0623\u0648 \u062A\u0645 \u062D\u0630\u0641\u0647"
            : "The article you are looking for is not available or has been deleted"}
        </p>
        <a href={lp("/blog")} className="text-webskeet-blue hover:underline">
          {isArabic ? "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u062F\u0648\u0646\u0629" : "Back to Blog"}
        </a>
      </div>
    )
  }

  // Define breadcrumb items - only showing Home and Blog
  const breadcrumbItems = [
    { label: isArabic ? "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" : "Home", href: lp("/") },
    { label: dict.blog.heading, href: lp("/blog") },
  ]

  // Define breadcrumb schema items
  const breadcrumbSchemaItems = breadcrumbItems.map((item) => ({
    name: item.label,
    url: `https://webskeet.com${item.href}`,
  }))

  const blogUrl = isArabic
    ? `https://webskeet.com/ar/blog/${slug}`
    : `https://webskeet.com/blog/${slug}`

  // Prepare data for Article schema
  const articleData = {
    title: post.title,
    description: post.brief,
    slug: slug,
    image: post.image,
    date: post.date,
    modifiedDate: post.date, // Use same date if no modification date
    author: {
      name: dict.blog.author,
      url: `https://webskeet.com${lp("/blog/author/mahmoud-ali")}`,
    },
    category: "SEO", // Default category
    tags: isArabic
      ? ["\u062A\u062D\u0633\u064A\u0646 \u0645\u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0628\u062D\u062B", "SEO"]
      : ["Search Engine Optimization", "SEO"], // Default tags
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
            canonicalLink.href = '${blogUrl}';
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
              <span className="text-gray-400">&bull;</span>
              <Link href={lp("/blog/author/mahmoud-ali")} className="flex items-center text-webskeet-blue hover:underline">
                <span className={isArabic ? "ml-1" : "mr-1"}>
                  {isArabic ? "\u0627\u0644\u0643\u0627\u062A\u0628:" : "Author:"}
                </span>
                <span>{dict.blog.author}</span>
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
          {renderRichText(post.description, createRichTextRenderOptions(post.includes, locale))}
        </div>
        <footer className="mt-16">
          {/* CTA for the article about how an SEO expert helps increase visits and sales */}
          {slug === "\u0643\u064A\u0641-\u064A\u0633\u0627\u0639\u062F\u0643-\u062E\u0628\u064A\u0631-\u0627\u0644\u0633\u064A\u0648-\u0641\u064A-\u0632\u064A\u0627\u062F\u0629-\u0627\u0644\u0632\u064A\u0627\u0631\u0627\u062A-\u0648\u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A" && (
            <div className="bg-gradient-to-r from-webskeet-blue/10 to-webskeet-gold/10 p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-2xl font-bold text-webskeet-blue mb-3">
                {isArabic
                  ? "\u0647\u0644 \u062A\u0631\u063A\u0628 \u0641\u064A \u0645\u0636\u0627\u0639\u0641\u0629 \u0632\u064A\u0627\u0631\u0627\u062A \u0645\u0648\u0642\u0639\u0643\u061F"
                  : "Want to double your website traffic?"}
              </h3>
              <p className="text-gray-700 mb-4">
                {isArabic
                  ? "\u0627\u062D\u062C\u0632 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0645\u062C\u0627\u0646\u064A\u0629 \u0645\u0639 \u062E\u0628\u064A\u0631 \u0633\u064A\u0648 \u0627\u0644\u0622\u0646 \u0648\u0627\u0643\u062A\u0634\u0641 \u0643\u064A\u0641 \u064A\u0645\u0643\u0646\u0646\u0627 \u0645\u0633\u0627\u0639\u062F\u062A\u0643 \u0641\u064A \u062A\u062D\u0642\u064A\u0642 \u0623\u0647\u062F\u0627\u0641\u0643."
                  : "Book a free consultation with an SEO expert now and discover how we can help you achieve your goals."}
              </p>
              <a
                href={lp("/#consultation")}
                className="inline-block bg-webskeet-blue hover:bg-webskeet-blue/90 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow"
              >
                {isArabic
                  ? "\u0627\u062D\u062C\u0632 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0645\u062C\u0627\u0646\u064A\u0629"
                  : "Book a Free Consultation"}
              </a>
            </div>
          )}

          <div className="flex flex-col items-center gap-4">
            <Link
              href={lp("/subscribe")}
              className="flex items-center gap-2 bg-webskeet-blue/10 hover:bg-webskeet-blue/20 text-webskeet-blue px-4 py-2 rounded-full transition-colors"
            >
              <Image
                src="/images/authors/mahmoud-ali-profile.png"
                alt={dict.blog.author}
                width={32}
                height={32}
                className="rounded-full"
                quality={85}
                loading="lazy"
              />
              <span>
                {isArabic
                  ? `\u062A\u0627\u0628\u0639 ${dict.blog.author} \u0644\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A`
                  : `Follow ${dict.blog.author} for more articles`}
              </span>
            </Link>
            <div className="flex items-center justify-center gap-4 w-full mt-4">
              <div className="h-[2px] bg-webskeet-blue flex-grow"></div>
              <span className="text-webskeet-blue font-semibold">&bull;</span>
              <div className="h-[2px] bg-webskeet-blue flex-grow"></div>
            </div>
          </div>
        </footer>
      </article>
    </>
  )
}
