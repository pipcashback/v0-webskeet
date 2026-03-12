"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Copy, Wand2, RefreshCw, Lightbulb, Target, TrendingUp } from "lucide-react"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import BreadcrumbsSchema from "@/components/seo/breadcrumbs-schema"

export default function SEOTitleGeneratorClient() {
  const [keyword, setKeyword] = useState("")
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  // Define breadcrumb items
  const breadcrumbItems = [
    { label: "الرئيسية", href: "/" },
    { label: "مولد عناوين السيو", href: "/seo-title-generator", isCurrent: true },
  ]

  // Define breadcrumb schema items
  const breadcrumbSchemaItems = breadcrumbItems.map((item) => ({
    name: item.label,
    url: `https://www.webskeet.com${item.href}`,
  }))

  // 15 قالب مختلف للعناوين
  const titleTemplates = [
    // 1. عناوين تعتمد على الكلمات المفتاحية الأساسية
    (keyword: string) => `دليل شامل حول ${keyword} للمبتدئين والمحترفين`,
    (keyword: string) => `كل ما تحتاج معرفته عن ${keyword} في 2025`,

    // 2. عناوين تعتمد على الأرقام (قوائم)
    (keyword: string) => `أفضل 10 طرق لتحسين ${keyword} وزيادة فعاليته`,
    (keyword: string) => `7 أسرار مهمة حول ${keyword} لا يعرفها الكثيرون`,
    (keyword: string) => `15 نصيحة ذهبية لإتقان ${keyword} من الخبراء`,

    // 3. عناوين تحتوي على سؤال
    (keyword: string) => `ما هو ${keyword}؟ وكيف يمكن الاستفادة منه بأفضل طريقة؟`,
    (keyword: string) => `هل تعرف الطريقة الصحيحة لاستخدام ${keyword}؟`,
    (keyword: string) => `كيف تختار أفضل ${keyword} يناسب احتياجاتك؟`,

    // 4. عناوين لحل مشكلة أو تقديم فائدة
    (keyword: string) => `كيف تتجنب الأخطاء الشائعة في ${keyword}`,
    (keyword: string) => `الطريقة المضمونة لتحقيق النجاح في ${keyword}`,

    // 5. عناوين تحتوي على كلمات جذب
    (keyword: string) => `السر وراء إتقان ${keyword} في وقت قياسي`,
    (keyword: string) => `اكتشف أقوى استراتيجيات ${keyword} المجربة والمضمونة`,

    // 6. عناوين تعتمد على التوقيت
    (keyword: string) => `أحدث اتجاهات ${keyword} لعام 2025 التي يجب معرفتها`,
    (keyword: string) => `مستقبل ${keyword}: توقعات وتطورات مهمة لعام 2025`,

    // 7. عناوين موجهة لفئة معينة
    (keyword: string) => `دليل ${keyword} المتخصص لأصحاب الأعمال والشركات`,
  ]

  const generateTitles = () => {
    if (!keyword.trim()) {
      toast({
        title: "تنبيه",
        description: "يرجى إدخال الكلمة المفتاحية أولاً",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    // محاكاة وقت التحميل
    setTimeout(() => {
      const titles = titleTemplates.map((template) => template(keyword.trim()))
      setGeneratedTitles(titles)
      setIsGenerating(false)

      toast({
        title: "تم بنجاح!",
        description: `تم إنشاء ${titles.length} عنوان جديد`,
      })
    }, 1000)
  }

  const copyToClipboard = async (title: string) => {
    try {
      await navigator.clipboard.writeText(title)
      toast({
        title: "تم النسخ!",
        description: "تم نسخ العنوان إلى الحافظة بنجاح",
      })
    } catch (err) {
      toast({
        title: "خطأ في النسخ",
        description: "حدث خطأ أثناء نسخ العنوان",
        variant: "destructive",
      })
    }
  }

  const clearAll = () => {
    setKeyword("")
    setGeneratedTitles([])
    toast({
      title: "تم المسح",
      description: "تم مسح جميع البيانات",
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
          <h1 className="text-4xl font-bold mb-4 text-webskeet-blue">مولد عناوين السيو</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            أداة مجانية لتوليد عناوين SEO احترافية باللغة العربية. 15 قالب مختلف لإنشاء عناوين جذابة ومتوافقة مع محركات
            البحث
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
              <Target className="h-6 w-6 text-webskeet-blue mx-auto mb-2" />
              <h3 className="font-semibold mb-1">15 قالب متنوع</h3>
              <p className="text-sm text-gray-600">قوالب مختلفة تناسب جميع أنواع المحتوى</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
              <Lightbulb className="h-6 w-6 text-webskeet-blue mx-auto mb-2" />
              <h3 className="font-semibold mb-1">متوافق مع السيو</h3>
              <p className="text-sm text-gray-600">عناوين محسنة لمحركات البحث</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
              <TrendingUp className="h-6 w-6 text-webskeet-blue mx-auto mb-2" />
              <h3 className="font-semibold mb-1">نسخ فوري</h3>
              <p className="text-sm text-gray-600">انسخ العناوين بنقرة واحدة</p>
            </div>
          </div>
        </div>

        {/* Generator Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-webskeet-blue/5 to-transparent">
              <CardTitle className="text-2xl text-right">إنشاء العناوين</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    الكلمة المفتاحية أو الموضوع
                  </label>
                  <Input
                    id="keyword"
                    type="text"
                    placeholder="مثال: تحسين محركات البحث، التسويق الرقمي، تصميم المواقع..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="h-12 text-right"
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
                        جاري الإنشاء...
                      </>
                    ) : (
                      <>
                        <Wand2 className="h-4 w-4 mr-2" />
                        إنشاء العناوين
                      </>
                    )}
                  </Button>

                  {generatedTitles.length > 0 && (
                    <Button onClick={clearAll} variant="outline" className="px-6 py-3 bg-transparent">
                      مسح الكل
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
                <CardTitle className="text-2xl text-right">العناوين المُولّدة ({generatedTitles.length})</CardTitle>
                <p className="text-gray-600 text-right">انقر على أي عنوان لنسخه إلى الحافظة</p>
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
                        <div className="flex-1 text-right">
                          <p className="text-gray-800 leading-relaxed">{title}</p>
                        </div>
                        <div className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity">
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
              <CardTitle className="text-xl text-right">نصائح لكتابة عناوين SEO فعالة</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-webskeet-blue text-right">✅ افعل</h4>
                  <ul className="space-y-2 text-right">
                    <li className="flex items-start">
                      <span className="text-green-500 ml-2">•</span>
                      <span>اجعل العنوان أقل من 60 حرفاً</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 ml-2">•</span>
                      <span>ضع الكلمة المفتاحية في بداية العنوان</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 ml-2">•</span>
                      <span>استخدم أرقام وكلمات جذابة</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 ml-2">•</span>
                      <span>اجعل العنوان يعكس المحتوى الحقيقي</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-red-600 text-right">❌ تجنب</h4>
                  <ul className="space-y-2 text-right">
                    <li className="flex items-start">
                      <span className="text-red-500 ml-2">•</span>
                      <span>حشو الكلمات المفتاحية بشكل مفرط</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 ml-2">•</span>
                      <span>استخدام عناوين مضللة أو خادعة</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 ml-2">•</span>
                      <span>العناوين الطويلة جداً أو القصيرة جداً</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 ml-2">•</span>
                      <span>استخدام رموز أو أحرف خاصة غير ضرورية</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-br from-webskeet-blue/5 to-webskeet-gold/5 border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">هل تحتاج مساعدة في تحسين محركات البحث؟</h3>
                <p className="text-gray-600 mb-6">
                  فريقنا من خبراء السيو جاهز لمساعدتك في تحسين ترتيب موقعك وزيادة الزيارات العضوية
                </p>
                <a href="/#consultation">
                  <Button className="bg-webskeet-blue hover:bg-webskeet-blue/90 text-white px-8 py-3">
                    احصل على استشارة مجانية
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
