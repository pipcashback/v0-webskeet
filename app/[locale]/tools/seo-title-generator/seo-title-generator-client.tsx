"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Copy, Wand2, RefreshCw, Lightbulb, Target, TrendingUp } from "lucide-react"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import BreadcrumbsSchema from "@/components/seo/breadcrumbs-schema"
import type { Locale } from "@/i18n/config"

const translations = {
  en: {
    pageTitle: "SEO Title Generator",
    pageDescription:
      "Free tool to generate professional SEO titles. 15 different templates to create engaging, search engine optimized titles",
    feature1Title: "15 Diverse Templates",
    feature1Desc: "Templates for all content types",
    feature2Title: "SEO Optimized",
    feature2Desc: "Titles optimized for search engines",
    feature3Title: "Instant Copy",
    feature3Desc: "Copy titles with one click",
    generatorTitle: "Generate Titles",
    inputLabel: "Keyword or Topic",
    inputPlaceholder: "Example: search engine optimization, digital marketing, web design...",
    generating: "Generating...",
    generateButton: "Generate Titles",
    clearButton: "Clear All",
    generatedTitlesLabel: (count: number) => `Generated Titles (${count})`,
    generatedTitlesHint: "Click any title to copy to clipboard",
    toastAlert: "Alert",
    toastAlertDesc: "Please enter a keyword first",
    toastSuccess: "Success!",
    toastSuccessDesc: (count: number) => `Generated ${count} new titles`,
    toastCopied: "Copied!",
    toastCopiedDesc: "Title copied to clipboard",
    toastCopyError: "Copy Error",
    toastCopyErrorDesc: "Error copying title",
    toastCleared: "Cleared",
    toastClearedDesc: "All data cleared",
    tipsTitle: "Tips for Writing Effective SEO Titles",
    doTitle: "✅ Do",
    doTips: [
      "Keep title under 60 characters",
      "Place keyword at the beginning of the title",
      "Use numbers and engaging words",
      "Make the title reflect the actual content",
    ],
    dontTitle: "❌ Don't",
    dontTips: [
      "Excessive keyword stuffing",
      "Use misleading or deceptive titles",
      "Titles that are too long or too short",
      "Use unnecessary special characters or symbols",
    ],
    ctaTitle: "Need help with search engine optimization?",
    ctaDescription:
      "Our SEO experts are ready to help you improve your site ranking and increase organic visits",
    ctaButton: "Get a Free Consultation",
    breadcrumbHome: "Home",
    breadcrumbTools: "Free SEO Tools",
    breadcrumbCurrent: "SEO Title Generator",
  },
  ar: {
    pageTitle: "مولد عناوين السيو",
    pageDescription:
      "أداة مجانية لتوليد عناوين SEO احترافية باللغة العربية. 15 قالب مختلف لإنشاء عناوين جذابة ومتوافقة مع محركات البحث",
    feature1Title: "15 قالب متنوع",
    feature1Desc: "قوالب مختلفة تناسب جميع أنواع المحتوى",
    feature2Title: "متوافق مع السيو",
    feature2Desc: "عناوين محسنة لمحركات البحث",
    feature3Title: "نسخ فوري",
    feature3Desc: "انسخ العناوين بنقرة واحدة",
    generatorTitle: "إنشاء العناوين",
    inputLabel: "الكلمة المفتاحية أو الموضوع",
    inputPlaceholder: "مثال: تحسين محركات البحث، التسويق الرقمي، تصميم المواقع...",
    generating: "جاري الإنشاء...",
    generateButton: "إنشاء العناوين",
    clearButton: "مسح الكل",
    generatedTitlesLabel: (count: number) => `العناوين المُولّدة (${count})`,
    generatedTitlesHint: "انقر على أي عنوان لنسخه إلى الحافظة",
    toastAlert: "تنبيه",
    toastAlertDesc: "يرجى إدخال الكلمة المفتاحية أولاً",
    toastSuccess: "تم بنجاح!",
    toastSuccessDesc: (count: number) => `تم إنشاء ${count} عنوان جديد`,
    toastCopied: "تم النسخ!",
    toastCopiedDesc: "تم نسخ العنوان إلى الحافظة بنجاح",
    toastCopyError: "خطأ في النسخ",
    toastCopyErrorDesc: "حدث خطأ أثناء نسخ العنوان",
    toastCleared: "تم المسح",
    toastClearedDesc: "تم مسح جميع البيانات",
    tipsTitle: "نصائح لكتابة عناوين SEO فعالة",
    doTitle: "✅ افعل",
    doTips: [
      "اجعل العنوان أقل من 60 حرفاً",
      "ضع الكلمة المفتاحية في بداية العنوان",
      "استخدم أرقام وكلمات جذابة",
      "اجعل العنوان يعكس المحتوى الحقيقي",
    ],
    dontTitle: "❌ تجنب",
    dontTips: [
      "حشو الكلمات المفتاحية بشكل مفرط",
      "استخدام عناوين مضللة أو خادعة",
      "العناوين الطويلة جداً أو القصيرة جداً",
      "استخدام رموز أو أحرف خاصة غير ضرورية",
    ],
    ctaTitle: "هل تحتاج مساعدة في تحسين محركات البحث؟",
    ctaDescription:
      "فريقنا من خبراء السيو جاهز لمساعدتك في تحسين ترتيب موقعك وزيادة الزيارات العضوية",
    ctaButton: "احصل على استشارة مجانية",
    breadcrumbHome: "الرئيسية",
    breadcrumbTools: "أدوات السيو المجانية",
    breadcrumbCurrent: "مولد عناوين السيو",
  },
}

const titleTemplatesByLocale = {
  en: [
    (keyword: string) => `Complete Guide to ${keyword} for Beginners and Experts`,
    (keyword: string) => `Everything You Need to Know About ${keyword} in 2025`,
    (keyword: string) => `Top 10 Ways to Improve ${keyword} and Boost Effectiveness`,
    (keyword: string) => `7 Important Secrets About ${keyword} That Most People Don't Know`,
    (keyword: string) => `15 Golden Tips to Master ${keyword} From the Experts`,
    (keyword: string) => `What is ${keyword}? And How to Make the Most of It`,
    (keyword: string) => `Do You Know the Right Way to Use ${keyword}?`,
    (keyword: string) => `How to Choose the Best ${keyword} for Your Needs`,
    (keyword: string) => `How to Avoid Common Mistakes in ${keyword}`,
    (keyword: string) => `The Proven Way to Achieve Success in ${keyword}`,
    (keyword: string) => `The Secret Behind Mastering ${keyword} in Record Time`,
    (keyword: string) => `Discover the Most Powerful Proven ${keyword} Strategies`,
    (keyword: string) => `Latest ${keyword} Trends for 2025 You Need to Know`,
    (keyword: string) => `The Future of ${keyword}: Important Predictions for 2025`,
    (keyword: string) => `The Specialized ${keyword} Guide for Business Owners`,
  ],
  ar: [
    (keyword: string) => `دليل شامل حول ${keyword} للمبتدئين والمحترفين`,
    (keyword: string) => `كل ما تحتاج معرفته عن ${keyword} في 2025`,
    (keyword: string) => `أفضل 10 طرق لتحسين ${keyword} وزيادة فعاليته`,
    (keyword: string) => `7 أسرار مهمة حول ${keyword} لا يعرفها الكثيرون`,
    (keyword: string) => `15 نصيحة ذهبية لإتقان ${keyword} من الخبراء`,
    (keyword: string) => `ما هو ${keyword}؟ وكيف يمكن الاستفادة منه بأفضل طريقة؟`,
    (keyword: string) => `هل تعرف الطريقة الصحيحة لاستخدام ${keyword}؟`,
    (keyword: string) => `كيف تختار أفضل ${keyword} يناسب احتياجاتك؟`,
    (keyword: string) => `كيف تتجنب الأخطاء الشائعة في ${keyword}`,
    (keyword: string) => `الطريقة المضمونة لتحقيق النجاح في ${keyword}`,
    (keyword: string) => `السر وراء إتقان ${keyword} في وقت قياسي`,
    (keyword: string) => `اكتشف أقوى استراتيجيات ${keyword} المجربة والمضمونة`,
    (keyword: string) => `أحدث اتجاهات ${keyword} لعام 2025 التي يجب معرفتها`,
    (keyword: string) => `مستقبل ${keyword}: توقعات وتطورات مهمة لعام 2025`,
    (keyword: string) => `دليل ${keyword} المتخصص لأصحاب الأعمال والشركات`,
  ],
}

export default function SEOTitleGeneratorClient({ locale }: { locale: Locale }) {
  const [keyword, setKeyword] = useState("")
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  const t = translations[locale]
  const titleTemplates = titleTemplatesByLocale[locale]
  const lp = (path: string) => (locale === "ar" ? `/ar${path}` : path)

  // Define breadcrumb items
  const breadcrumbItems = [
    { label: t.breadcrumbHome, href: lp("/") },
    { label: t.breadcrumbTools, href: lp("/tools") },
    { label: t.breadcrumbCurrent, href: lp("/tools/seo-title-generator"), isCurrent: true },
  ]

  // Define breadcrumb schema items
  const breadcrumbSchemaItems = breadcrumbItems.map((item) => ({
    name: item.label,
    url: `https://www.webskeet.com${item.href}`,
  }))

  const generateTitles = () => {
    if (!keyword.trim()) {
      toast({
        title: t.toastAlert,
        description: t.toastAlertDesc,
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    setTimeout(() => {
      const titles = titleTemplates.map((template) => template(keyword.trim()))
      setGeneratedTitles(titles)
      setIsGenerating(false)

      toast({
        title: t.toastSuccess,
        description: t.toastSuccessDesc(titles.length),
      })
    }, 1000)
  }

  const copyToClipboard = async (title: string) => {
    try {
      await navigator.clipboard.writeText(title)
      toast({
        title: t.toastCopied,
        description: t.toastCopiedDesc,
      })
    } catch (err) {
      toast({
        title: t.toastCopyError,
        description: t.toastCopyErrorDesc,
        variant: "destructive",
      })
    }
  }

  const clearAll = () => {
    setKeyword("")
    setGeneratedTitles([])
    toast({
      title: t.toastCleared,
      description: t.toastClearedDesc,
    })
  }

  return (
    <main className="flex-grow pt-28 pb-16">
      {/* Add schema components */}
      <BreadcrumbsSchema items={breadcrumbSchemaItems} />

      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-8 bg-gray-50 py-3 px-4 rounded-lg shadow-sm">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wand2 className="h-8 w-8 text-webskeet-blue" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-webskeet-blue">{t.pageTitle}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {t.pageDescription}
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
              <Target className="h-6 w-6 text-webskeet-blue mx-auto mb-2" />
              <h3 className="font-semibold mb-1">{t.feature1Title}</h3>
              <p className="text-sm text-gray-600">{t.feature1Desc}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
              <Lightbulb className="h-6 w-6 text-webskeet-blue mx-auto mb-2" />
              <h3 className="font-semibold mb-1">{t.feature2Title}</h3>
              <p className="text-sm text-gray-600">{t.feature2Desc}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
              <TrendingUp className="h-6 w-6 text-webskeet-blue mx-auto mb-2" />
              <h3 className="font-semibold mb-1">{t.feature3Title}</h3>
              <p className="text-sm text-gray-600">{t.feature3Desc}</p>
            </div>
          </div>
        </div>

        {/* Generator Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-webskeet-blue/5 to-transparent">
              <CardTitle className="text-2xl">{t.generatorTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.inputLabel}
                  </label>
                  <Input
                    id="keyword"
                    type="text"
                    placeholder={t.inputPlaceholder}
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="h-12"
                    onKeyPress={(e) => e.key === "Enter" && generateTitles()}
                  />
                </div>

                <div className="flex gap-3 justify-center">
                  <Button
                    onClick={generateTitles}
                    disabled={isGenerating}
                    className="bg-webskeet-blue hover:bg-webskeet-blue/90 text-white px-8 py-3"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        {t.generating}
                      </>
                    ) : (
                      <>
                        <Wand2 className="h-4 w-4 mr-2" />
                        {t.generateButton}
                      </>
                    )}
                  </Button>

                  {generatedTitles.length > 0 && (
                    <Button onClick={clearAll} variant="outline" className="px-6 py-3 bg-transparent">
                      {t.clearButton}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Generated Titles */}
          {generatedTitles.length > 0 && (
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-webskeet-gold/5 to-transparent">
                <CardTitle className="text-2xl">{t.generatedTitlesLabel(generatedTitles.length)}</CardTitle>
                <p className="text-gray-600">{t.generatedTitlesHint}</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {generatedTitles.map((title, index) => (
                    <div
                      key={index}
                      onClick={() => copyToClipboard(title)}
                      className="group p-4 bg-gray-50 hover:bg-webskeet-blue/5 rounded-lg border border-gray-200 hover:border-webskeet-blue/30 cursor-pointer transition-all duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-gray-800 leading-relaxed">{title}</p>
                        </div>
                        <div className="ms-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Copy className="h-4 w-4 text-webskeet-blue" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tips Section */}
          <Card className="mt-8 shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-webskeet-blue/5 to-transparent">
              <CardTitle className="text-xl">{t.tipsTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-webskeet-blue">{t.doTitle}</h4>
                  <ul className="space-y-2">
                    {t.doTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 me-2">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-red-600">{t.dontTitle}</h4>
                  <ul className="space-y-2">
                    {t.dontTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 me-2">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-br from-webskeet-blue/5 to-webskeet-gold/5 border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">{t.ctaTitle}</h3>
                <p className="text-gray-600 mb-6">
                  {t.ctaDescription}
                </p>
                <a href={lp("/#consultation")}>
                  <Button className="bg-webskeet-blue hover:bg-webskeet-blue/90 text-white px-8 py-3">
                    {t.ctaButton}
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
