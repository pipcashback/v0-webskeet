import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, TrendingUp, BarChart3, Globe, Shield, Hash, Wand2 } from "lucide-react"

export const metadata: Metadata = {
  title: "أدوات تحسين محركات البحث المجانية - ويب سكيت",
  description:
    "استخدم مجموعة شاملة من الأدوات المجانية لتحسين محركات البحث، تحليل المواقع، وتحسين المحتوى لموقعك الإلكتروني",
  keywords: "أدوات سيو مجانية, تحليل المواقع, مولد العناوين, عداد الكلمات, حاسبة ROI, فاحص سلطة الموقع",
  alternates: {
    canonical: "https://webskeet.com/tools",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://webskeet.com/tools",
    title: "أدوات تحسين محركات البحث المجانية - ويب سكيت",
    description:
      "استخدم مجموعة شاملة من الأدوات المجانية لتحسين محركات البحث، تحليل المواقع، وتحسين المحتوى لموقعك الإلكتروني",
    siteName: "ويب سكيت",
  },
  twitter: {
    card: "summary_large_image",
    title: "أدوات تحسين محركات البحث المجانية - ويب سكيت",
    description:
      "استخدم مجموعة شاملة من الأدوات المجانية لتحسين محركات البحث، تحليل المواقع، وتحسين المحتوى لموقعك الإلكتروني",
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

const tools = [
  {
    title: "مولد عناوين السيو",
    description: "أنشئ عناوين محسنة لمحركات البحث تجذب الزوار وتحسن ترتيب موقعك",
    icon: Wand2,
    href: "/tools/seo-title-generator",
    color: "bg-blue-500",
    features: ["عناوين محسنة للسيو", "اقتراحات متعددة", "تحليل الطول المثالي"],
  },
  {
    title: "عداد الكلمات",
    description: "احسب عدد الكلمات والأحرف في النصوص لتحسين المحتوى وضمان الطول المناسب",
    icon: Hash,
    href: "/tools/word-counter",
    color: "bg-green-500",
    features: ["عد الكلمات والأحرف", "تحليل الكثافة", "إحصائيات مفصلة"],
  },
  {
    title: "حاسبة عائد الاستثمار للسيو",
    description: "احسب العائد المتوقع من استثمارك في تحسين محركات البحث",
    icon: Calculator,
    href: "/tools/seo-roi",
    color: "bg-purple-500",
    features: ["حساب ROI دقيق", "توقعات الأرباح", "تحليل التكاليف"],
  },
  {
    title: "فاحص سلطة الموقع",
    description: "افحص سلطة أي موقع إلكتروني واحصل على تقييم شامل لقوة الدومين والروابط الخلفية",
    icon: Shield,
    href: "/tools/website-authority-checker",
    color: "bg-indigo-500",
    features: ["فحص Domain Authority", "تحليل الروابط الخلفية", "سجل الفحوصات"],
    isNew: true,
  },
]

const comingSoonTools = [
  {
    title: "محلل الكلمات المفتاحية",
    description: "اكتشف أفضل الكلمات المفتاحية لموقعك وحلل المنافسة",
    icon: BarChart3,
    color: "bg-orange-500",
  },
  {
    title: "فاحص سرعة الموقع",
    description: "اختبر سرعة موقعك واحصل على توصيات للتحسين",
    icon: TrendingUp,
    color: "bg-red-500",
  },
  {
    title: "محلل الروابط الخلفية",
    description: "تحليل شامل للروابط الخلفية وجودتها",
    icon: Globe,
    color: "bg-teal-500",
  },
]

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-webskeet-blue mb-4">أدوات تحسين محركات البحث</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          مجموعة شاملة من الأدوات المجانية لمساعدتك في تحسين موقعك وتحليل أدائه في محركات البحث
        </p>
      </div>

      {/* Available Tools */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">الأدوات المتاحة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <Link href={tool.href} key={index}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer relative">
                {tool.isNew && (
                  <div className="absolute top-4 left-4 bg-webskeet-gold text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    جديد
                  </div>
                )}
                <CardHeader>
                  <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mb-4`}>
                    <tool.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription className="text-gray-600">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-webskeet-blue rounded-full ml-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-webskeet-blue font-medium">استخدم الأداة ←</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Coming Soon Tools */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">أدوات قادمة قريباً</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comingSoonTools.map((tool, index) => (
            <Card key={index} className="h-full opacity-75 relative overflow-hidden">
              <div className="absolute top-4 left-4 bg-webskeet-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                قريباً
              </div>
              <CardHeader>
                <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mb-4`}>
                  <tool.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{tool.title}</CardTitle>
                <CardDescription className="text-gray-600">{tool.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center bg-gradient-to-r from-webskeet-blue/10 to-webskeet-gold/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-webskeet-blue mb-4">هل تحتاج إلى مساعدة إضافية؟</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          إذا كنت تحتاج إلى تحليل شامل لموقعك أو استشارة متخصصة في تحسين محركات البحث، فريقنا جاهز لمساعدتك
        </p>
        <Link
          href="/contact"
          className="inline-block bg-webskeet-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-webskeet-blue/90 transition-colors"
        >
          احجز استشارة مجانية
        </Link>
      </div>
    </div>
  )
}
