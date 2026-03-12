import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, Users, BookOpen, TrendingUp } from "lucide-react"
import AuthorSchema from "@/components/seo/author-schema"

interface AuthorPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }]
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { locale } = await params
  const isArabic = locale === "ar"
  const lp = (path: string) => (locale === "ar" ? `/ar${path}` : path)

  const title = isArabic
    ? "محمود علي - خبير تحسين محركات البحث والتسويق الرقمي"
    : "Mahmoud Ali - SEO & Digital Marketing Expert"
  const description = isArabic
    ? "تعرف على محمود علي، خبير تحسين محركات البحث مع أكثر من 5 سنوات من الخبرة في مساعدة الشركات على تحسين ظهورها الرقمي وزيادة حركة المرور العضوية."
    : "Meet Mahmoud Ali, an SEO expert with over 5 years of experience helping businesses improve their digital presence and increase organic traffic."
  const siteName = isArabic ? "ويب سكيت" : "Webskeet"

  return {
    title,
    description,
    keywords: isArabic
      ? "محمود علي, خبير سيو, تحسين محركات البحث, التسويق الرقمي, استشاري سيو"
      : "Mahmoud Ali, SEO expert, search engine optimization, digital marketing, SEO consultant",
    alternates: {
      canonical: `https://webskeet.com${lp("/blog/author/mahmoud-ali")}`,
      languages: {
        en: "https://webskeet.com/blog/author/mahmoud-ali",
        ar: "https://webskeet.com/ar/blog/author/mahmoud-ali",
        "x-default": "https://webskeet.com/blog/author/mahmoud-ali",
      },
    },
    openGraph: {
      type: "profile",
      locale: isArabic ? "ar_EG" : "en_US",
      url: `https://webskeet.com${lp("/blog/author/mahmoud-ali")}`,
      title,
      description,
      images: [
        {
          url: "https://webskeet.com/images/authors/mahmoud-ali-profile.webp",
          width: 400,
          height: 400,
          alt: isArabic ? "محمود علي - خبير تحسين محركات البحث" : "Mahmoud Ali - SEO Expert",
        },
      ],
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://webskeet.com/images/authors/mahmoud-ali-profile.webp"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

const translations = {
  en: {
    name: "Mahmoud Ali",
    jobTitle: "SEO & Digital Marketing Expert",
    description:
      "SEO expert with over 5 years of experience helping businesses improve their digital presence and increase organic traffic. Specialized in advanced SEO strategies and competitive analysis.",
    location: "Egypt & United Arab Emirates",
    badgeSeo: "Certified SEO Expert",
    badgeMarketing: "Digital Marketing Consultant",
    badgeContent: "Specialized Content Writer",
    statsYears: "Years of Experience",
    statsClients: "Clients Helped",
    statsArticles: "Published Articles",
    statsSuccess: "Project Success Rate",
    expertiseTitle: "Areas of Expertise",
    expertise: [
      "Search Engine Optimization (SEO)",
      "Digital Marketing",
      "Website & Competitor Analysis",
      "Backlink Building",
      "Content Strategies",
      "User Experience Optimization",
      "Analytics & Reporting",
      "SEO Consulting",
    ],
    aboutTitle: "About Mahmoud Ali",
    aboutP1:
      "Mahmoud Ali is an SEO and digital marketing expert with over 5 years of experience in the field. He started his SEO journey in 2019 and has helped over 200 clients improve their website visibility and increase organic traffic.",
    aboutP2:
      "Mahmoud is known for his deep expertise in website and competitor analysis, creating customized SEO strategies for each client based on their business needs. He also has extensive experience in building high-quality backlinks and optimizing content to meet search engine standards.",
    aboutP3:
      "Mahmoud has earned several certifications in digital marketing and SEO, and continues to develop his skills to keep up with the latest developments in this rapidly changing field.",
    ctaTitle: "Need an SEO Consultation?",
    ctaDescription: "Book a free consultation with Mahmoud Ali and discover how to improve your website's search engine rankings.",
    ctaButton: "Book a Free Consultation",
  },
  ar: {
    name: "محمود علي",
    jobTitle: "خبير تحسين محركات البحث والتسويق الرقمي",
    description:
      "خبير تحسين محركات البحث مع أكثر من 5 سنوات من الخبرة في مساعدة الشركات على تحسين ظهورها الرقمي وزيادة حركة المرور العضوية. متخصص في استراتيجيات السيو المتقدمة والتحليل التنافسي.",
    location: "مصر والإمارات العربية المتحدة",
    badgeSeo: "خبير سيو معتمد",
    badgeMarketing: "استشاري تسويق رقمي",
    badgeContent: "كاتب محتوى متخصص",
    statsYears: "سنوات الخبرة",
    statsClients: "العملاء المساعدون",
    statsArticles: "المقالات المنشورة",
    statsSuccess: "معدل نجاح المشاريع",
    expertiseTitle: "مجالات الخبرة",
    expertise: [
      "تحسين محركات البحث (SEO)",
      "التسويق الرقمي",
      "تحليل المواقع والمنافسين",
      "بناء الروابط الخلفية",
      "استراتيجيات المحتوى",
      "تحسين تجربة المستخدم",
      "التحليل والتقارير",
      "استشارات السيو",
    ],
    aboutTitle: "نبذة عن محمود علي",
    aboutP1:
      "محمود علي هو خبير تحسين محركات البحث والتسويق الرقمي مع خبرة تزيد عن 5 سنوات في هذا المجال. بدأ رحلته في عالم السيو عام 2019 وتمكن من مساعدة أكثر من 200 عميل في تحسين ظهور مواقعهم الإلكترونية وزيادة حركة المرور العضوية.",
    aboutP2:
      "يتميز محمود بخبرته العميقة في تحليل المواقع والمنافسين، ووضع استراتيجيات سيو مخصصة لكل عميل حسب طبيعة نشاطه التجاري. كما يمتلك خبرة واسعة في بناء الروابط الخلفية عالية الجودة وتحسين المحتوى ليتوافق مع معايير محركات البحث.",
    aboutP3:
      "حصل محمود على عدة شهادات معتمدة في مجال التسويق الرقمي وتحسين محركات البحث، ويواصل تطوير مهاراته باستمرار لمواكبة أحدث التطورات في هذا المجال المتغير بسرعة.",
    ctaTitle: "هل تحتاج إلى استشارة في تحسين محركات البحث؟",
    ctaDescription: "احجز استشارة مجانية مع محمود علي واكتشف كيف يمكن تحسين ظهور موقعك في نتائج البحث",
    ctaButton: "احجز استشارة مجانية",
  },
}

export default async function MahmoudAliAuthorPage({ params }: AuthorPageProps) {
  const { locale } = await params
  const isArabic = locale === "ar"
  const t = translations[locale]
  const lp = (path: string) => (locale === "ar" ? `/ar${path}` : path)

  const authorData = {
    name: t.name,
    jobTitle: t.jobTitle,
    description: t.description,
    image: "https://webskeet.com/images/authors/mahmoud-ali-profile.webp",
    url: `https://webskeet.com${lp("/blog/author/mahmoud-ali")}`,
    sameAs: [
      "https://www.linkedin.com/in/mahmoud-ali-seo",
      "https://twitter.com/mahmoud_ali_seo",
      "https://webskeet.com",
    ],
    worksFor: {
      name: isArabic ? "ويب سكيت" : "Webskeet",
      url: "https://webskeet.com",
    },
    knowsAbout: isArabic
      ? [
          "تحسين محركات البحث",
          "التسويق الرقمي",
          "تحليل المواقع",
          "بناء الروابط الخلفية",
          "استراتيجيات المحتوى",
        ]
      : [
          "Search Engine Optimization",
          "Digital Marketing",
          "Website Analysis",
          "Backlink Building",
          "Content Strategies",
        ],
  }

  const stats = [
    { icon: Calendar, label: t.statsYears, value: "5+" },
    { icon: Users, label: t.statsClients, value: "200+" },
    { icon: BookOpen, label: t.statsArticles, value: "50+" },
    { icon: TrendingUp, label: t.statsSuccess, value: "95%" },
  ]

  return (
    <>
      <AuthorSchema author={authorData} />
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Author Header */}
          <div className="bg-gradient-to-r from-webskeet-blue/5 to-webskeet-gold/5 rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative">
                <Image
                  src="/images/authors/mahmoud-ali-profile.webp"
                  alt={isArabic ? "محمود علي - خبير تحسين محركات البحث" : "Mahmoud Ali - SEO Expert"}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-white shadow-lg"
                  priority
                />
                <div className="absolute -bottom-2 -right-2 bg-webskeet-blue text-white p-2 rounded-full">
                  <Award className="h-6 w-6" />
                </div>
              </div>

              <div className={`flex-1 text-center ${isArabic ? "md:text-right" : "md:text-left"}`}>
                <h1 className="text-4xl font-bold text-webskeet-blue mb-2">{t.name}</h1>
                <p className="text-xl text-gray-600 mb-4">{t.jobTitle}</p>
                <div className={`flex items-center justify-center ${isArabic ? "md:justify-start" : "md:justify-start"} gap-2 text-gray-500 mb-4`}>
                  <MapPin className="h-4 w-4" />
                  <span>{t.location}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.description}
                </p>

                <div className={`flex flex-wrap gap-2 justify-center ${isArabic ? "md:justify-start" : "md:justify-start"}`}>
                  <Badge variant="secondary" className="bg-webskeet-blue/10 text-webskeet-blue">
                    {t.badgeSeo}
                  </Badge>
                  <Badge variant="secondary" className="bg-webskeet-gold/10 text-webskeet-gold">
                    {t.badgeMarketing}
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    {t.badgeContent}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <stat.icon className="h-8 w-8 text-webskeet-blue mx-auto mb-3" />
                  <div className="text-2xl font-bold text-webskeet-blue mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Expertise Section */}
          <Card className="mb-12">
            <CardHeader>
              <h2 className="text-2xl font-bold text-webskeet-blue text-center">{t.expertiseTitle}</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.expertise.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-webskeet-blue rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* About Section */}
          <Card className="mb-12">
            <CardHeader>
              <h2 className="text-2xl font-bold text-webskeet-blue text-center">{t.aboutTitle}</h2>
            </CardHeader>
            <CardContent className={`prose prose-lg max-w-none ${isArabic ? "text-right" : "text-left"}`}>
              <p className="text-gray-700 leading-relaxed mb-4">{t.aboutP1}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t.aboutP2}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t.aboutP3}</p>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-gradient-to-r from-webskeet-blue to-webskeet-blue/80 text-white text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">{t.ctaTitle}</h3>
              <p className="text-lg mb-6 opacity-90">{t.ctaDescription}</p>
              <Link
                href={lp("/contact")}
                className="inline-block bg-white text-webskeet-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t.ctaButton}
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
