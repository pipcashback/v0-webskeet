import type { Metadata } from "next"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, TrendingUp, BarChart3, Globe, Shield, Hash, Wand2 } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"
  const t = dict.tools

  return {
    title: t.title,
    description: t.description,
    keywords: isArabic
      ? "\u0623\u062F\u0648\u0627\u062A \u0633\u064A\u0648 \u0645\u062C\u0627\u0646\u064A\u0629, \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0645\u0648\u0627\u0642\u0639, \u0645\u0648\u0644\u062F \u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646, \u0639\u062F\u0627\u062F \u0627\u0644\u0643\u0644\u0645\u0627\u062A, \u062D\u0627\u0633\u0628\u0629 ROI, \u0641\u0627\u062D\u0635 \u0633\u0644\u0637\u0629 \u0627\u0644\u0645\u0648\u0642\u0639"
      : "free seo tools, website analysis, title generator, word counter, ROI calculator, website authority checker",
    alternates: {
      canonical: isArabic ? "https://webskeet.com/ar/tools" : "https://webskeet.com/tools",
      languages: { en: "https://webskeet.com/tools", ar: "https://webskeet.com/ar/tools", "x-default": "https://webskeet.com/tools" },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: isArabic ? "https://webskeet.com/ar/tools" : "https://webskeet.com/tools",
      title: t.title,
      description: t.description,
      siteName: isArabic ? "\u0648\u064A\u0628 \u0633\u0643\u064A\u062A" : "Webskeet",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
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

export default async function ToolsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const t = dict.tools
  const isArabic = locale === "ar"
  const lp = (path: string) => (locale === "ar" ? `/ar${path}` : path)

  const tools = [
    {
      title: t.tool1Title,
      description: t.tool1Desc,
      icon: Wand2,
      href: lp("/tools/seo-title-generator"),
      color: "bg-blue-500",
      features: [t.tool1Feature1, t.tool1Feature2, t.tool1Feature3],
    },
    {
      title: t.tool2Title,
      description: t.tool2Desc,
      icon: Hash,
      href: lp("/tools/word-counter"),
      color: "bg-green-500",
      features: [t.tool2Feature1, t.tool2Feature2, t.tool2Feature3],
    },
    {
      title: t.tool3Title,
      description: t.tool3Desc,
      icon: Calculator,
      href: lp("/tools/seo-roi"),
      color: "bg-purple-500",
      features: [t.tool3Feature1, t.tool3Feature2, t.tool3Feature3],
    },
    {
      title: t.tool4Title,
      description: t.tool4Desc,
      icon: Shield,
      href: lp("/tools/website-authority-checker"),
      color: "bg-indigo-500",
      features: [t.tool4Feature1, t.tool4Feature2, t.tool4Feature3],
      isNew: true,
    },
  ]

  const comingSoonTools = [
    {
      title: t.coming1Title,
      description: t.coming1Desc,
      icon: BarChart3,
      color: "bg-orange-500",
    },
    {
      title: t.coming2Title,
      description: t.coming2Desc,
      icon: TrendingUp,
      color: "bg-red-500",
    },
    {
      title: t.coming3Title,
      description: t.coming3Desc,
      icon: Globe,
      color: "bg-teal-500",
    },
  ]

  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-webskeet-blue mb-4">{t.heading}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.description}</p>
      </div>

      {/* Available Tools */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">{t.availableTools}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <Link href={tool.href} key={index}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer relative">
                {tool.isNew && (
                  <div className="absolute top-4 left-4 bg-webskeet-gold text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    {t.new}
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
                        <div className={`w-1.5 h-1.5 bg-webskeet-blue rounded-full ${isArabic ? "ml-2" : "mr-2"}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-webskeet-blue font-medium">{t.useTool}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Coming Soon Tools */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">{t.comingSoon}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comingSoonTools.map((tool, index) => (
            <Card key={index} className="h-full opacity-75 relative overflow-hidden">
              <div className="absolute top-4 left-4 bg-webskeet-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                {t.comingSoon}
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
        <h3 className="text-2xl font-bold text-webskeet-blue mb-4">{t.ctaTitle}</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">{t.ctaDesc}</p>
        <Link
          href={lp("/contact")}
          className="inline-block bg-webskeet-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-webskeet-blue/90 transition-colors"
        >
          {t.ctaButton}
        </Link>
      </div>
    </div>
  )
}
