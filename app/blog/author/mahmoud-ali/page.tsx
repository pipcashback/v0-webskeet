import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, Users, BookOpen, TrendingUp } from "lucide-react"
import AuthorSchema from "@/components/seo/author-schema"

export const metadata: Metadata = {
  title: "محمود علي - خبير تحسين محركات البحث والتسويق الرقمي",
  description:
    "تعرف على محمود علي، خبير تحسين محركات البحث مع أكثر من 5 سنوات من الخبرة في مساعدة الشركات على تحسين ظهورها الرقمي وزيادة حركة المرور العضوية.",
  keywords: "محمود علي, خبير سيو, تحسين محركات البحث, التسويق الرقمي, استشاري سيو",
  alternates: {
    canonical: "https://webskeet.com/blog/author/mahmoud-ali",
  },
  openGraph: {
    type: "profile",
    locale: "ar_EG",
    url: "https://webskeet.com/blog/author/mahmoud-ali",
    title: "محمود علي - خبير تحسين محركات البحث والتسويق الرقمي",
    description:
      "تعرف على محمود علي، خبير تحسين محركات البحث مع أكثر من 5 سنوات من الخبرة في مساعدة الشركات على تحسين ظهورها الرقمي وزيادة حركة المرور العضوية.",
    images: [
      {
        url: "https://webskeet.com/images/authors/mahmoud-ali-profile.webp",
        width: 400,
        height: 400,
        alt: "محمود علي - خبير تحسين محركات البحث",
      },
    ],
    siteName: "ويب سكيت",
  },
  twitter: {
    card: "summary_large_image",
    title: "محمود علي - خبير تحسين محركات البحث والتسويق الرقمي",
    description:
      "تعرف على محمود علي، خبير تحسين محركات البحث مع أكثر من 5 سنوات من الخبرة في مساعدة الشركات على تحسين ظهورها الرقمي وزيادة حركة المرور العضوية.",
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

export default function MahmoudAliAuthorPage() {
  const authorData = {
    name: "محمود علي",
    jobTitle: "خبير تحسين محركات البحث والتسويق الرقمي",
    description:
      "خبير تحسين محركات البحث مع أكثر من 5 سنوات من الخبرة في مساعدة الشركات على تحسين ظهورها الرقمي وزيادة حركة المرور العضوية. متخصص في استراتيجيات السيو المتقدمة والتحليل التنافسي.",
    image: "https://webskeet.com/images/authors/mahmoud-ali-profile.webp",
    url: "https://webskeet.com/blog/author/mahmoud-ali",
    sameAs: [
      "https://www.linkedin.com/in/mahmoud-ali-seo",
      "https://twitter.com/mahmoud_ali_seo",
      "https://webskeet.com",
    ],
    worksFor: {
      name: "ويب سكيت",
      url: "https://webskeet.com",
    },
    knowsAbout: [
      "تحسين محركات البحث",
      "التسويق الرقمي",
      "تحليل المواقع",
      "بناء الروابط الخلفية",
      "استراتيجيات المحتوى",
    ],
  }

  const stats = [
    { icon: Calendar, label: "سنوات الخبرة", value: "5+" },
    { icon: Users, label: "العملاء المساعدون", value: "200+" },
    { icon: BookOpen, label: "المقالات المنشورة", value: "50+" },
    { icon: TrendingUp, label: "معدل نجاح المشاريع", value: "95%" },
  ]

  const expertise = [
    "تحسين محركات البحث (SEO)",
    "التسويق الرقمي",
    "تحليل المواقع والمنافسين",
    "بناء الروابط الخلفية",
    "استراتيجيات المحتوى",
    "تحسين تجربة المستخدم",
    "التحليل والتقارير",
    "استشارات السيو",
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
                  alt="محمود علي - خبير تحسين محركات البحث"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-white shadow-lg"
                  priority
                />
                <div className="absolute -bottom-2 -right-2 bg-webskeet-blue text-white p-2 rounded-full">
                  <Award className="h-6 w-6" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-right">
                <h1 className="text-4xl font-bold text-webskeet-blue mb-2">محمود علي</h1>
                <p className="text-xl text-gray-600 mb-4">خبير تحسين محركات البحث والتسويق الرقمي</p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>مصر والإمارات العربية المتحدة</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  خبير تحسين محركات البحث مع أكثر من 5 سنوات من الخبرة في مساعدة الشركات على تحسين ظهورها الرقمي وزيادة
                  حركة المرور العضوية. متخصص في استراتيجيات السيو المتقدمة والتحليل التنافسي.
                </p>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="secondary" className="bg-webskeet-blue/10 text-webskeet-blue">
                    خبير سيو معتمد
                  </Badge>
                  <Badge variant="secondary" className="bg-webskeet-gold/10 text-webskeet-gold">
                    استشاري تسويق رقمي
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    كاتب محتوى متخصص
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
              <h2 className="text-2xl font-bold text-webskeet-blue text-center">مجالات الخبرة</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expertise.map((skill, index) => (
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
              <h2 className="text-2xl font-bold text-webskeet-blue text-center">نبذة عن محمود علي</h2>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-right">
              <p className="text-gray-700 leading-relaxed mb-4">
                محمود علي هو خبير تحسين محركات البحث والتسويق الرقمي مع خبرة تزيد عن 5 سنوات في هذا المجال. بدأ رحلته في
                عالم السيو عام 2019 وتمكن من مساعدة أكثر من 200 عميل في تحسين ظهور مواقعهم الإلكترونية وزيادة حركة
                المرور العضوية.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                يتميز محمود بخبرته العميقة في تحليل المواقع والمنافسين، ووضع استراتيجيات سيو مخصصة لكل عميل حسب طبيعة
                نشاطه التجاري. كما يمتلك خبرة واسعة في بناء الروابط الخلفية عالية الجودة وتحسين المحتوى ليتوافق مع
                معايير محركات البحث.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                حصل محمود على عدة شهادات معتمدة في مجال التسويق الرقمي وتحسين محركات البحث، ويواصل تطوير مهاراته
                باستمرار لمواكبة أحدث التطورات في هذا المجال المتغير بسرعة.
              </p>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-gradient-to-r from-webskeet-blue to-webskeet-blue/80 text-white text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">هل تحتاج إلى استشارة في تحسين محركات البحث؟</h3>
              <p className="text-lg mb-6 opacity-90">
                احجز استشارة مجانية مع محمود علي واكتشف كيف يمكن تحسين ظهور موقعك في نتائج البحث
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-webskeet-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                احجز استشارة مجانية
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
