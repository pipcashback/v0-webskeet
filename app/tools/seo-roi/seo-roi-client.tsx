"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Copy, RefreshCcw, Calculator, TrendingUp, Users, DollarSign, Target, MousePointer } from "lucide-react"

interface SeoInputs {
  keywords: number
  searchVolume: number
  ctr: number
  conversionRate: number
  averageOrderValue: number
  seoCost: number
}

interface SeoResults {
  monthlyVisits: number
  potentialCustomers: number
  monthlyRevenue: number
  roi: number
}

const defaultInputs: SeoInputs = {
  keywords: 10,
  searchVolume: 1000,
  ctr: 3,
  conversionRate: 2,
  averageOrderValue: 100,
  seoCost: 1000,
}

export default function SeoRoiClient() {
  const { toast } = useToast()
  const [inputs, setInputs] = useState<SeoInputs>(defaultInputs)
  const [results, setResults] = useState<SeoResults>({
    monthlyVisits: 0,
    potentialCustomers: 0,
    monthlyRevenue: 0,
    roi: 0,
  })

  // حساب النتائج تلقائياً عند تغيير المدخلات
  useEffect(() => {
    calculateSeoRoi()
  }, [inputs])

  const calculateSeoRoi = () => {
    const { keywords, searchVolume, ctr, conversionRate, averageOrderValue, seoCost } = inputs

    // حساب الزيارات الشهرية المتوقعة
    const monthlyVisits = keywords * searchVolume * (ctr / 100)

    // حساب عدد التحويلات (العملاء المحتملين)
    const potentialCustomers = monthlyVisits * (conversionRate / 100)

    // حساب إيرادات السيو الشهرية
    const monthlyRevenue = potentialCustomers * averageOrderValue

    // حساب العائد على الاستثمار (ROI)
    const roi = seoCost > 0 ? ((monthlyRevenue - seoCost) / seoCost) * 100 : 0

    setResults({
      monthlyVisits: Math.round(monthlyVisits),
      potentialCustomers: Math.round(potentialCustomers * 100) / 100,
      monthlyRevenue: Math.round(monthlyRevenue),
      roi: Math.round(roi * 100) / 100,
    })
  }

  const handleInputChange = (field: keyof SeoInputs, value: string) => {
    const numValue = Number.parseFloat(value) || 0
    setInputs((prev) => ({
      ...prev,
      [field]: numValue >= 0 ? numValue : 0,
    }))
  }

  const resetCalculator = () => {
    setInputs(defaultInputs)
    toast({
      title: "تم إعادة تعيين الحاسبة",
      description: "تم إرجاع جميع القيم إلى الإعدادات الافتراضية",
    })
  }

  const copyResults = async () => {
    const resultsText = `
🔹 نتائج حاسبة العائد من الاستثمار في السيو 🔹

📊 المدخلات:
• عدد الكلمات المفتاحية: ${inputs.keywords}
• متوسط حجم البحث الشهري: ${inputs.searchVolume}
• معدل النقر المتوقع: ${inputs.ctr}%
• معدل التحويل المتوقع: ${inputs.conversionRate}%
• متوسط قيمة الطلب: $${inputs.averageOrderValue}
• تكلفة السيو الشهرية: $${inputs.seoCost}

📈 النتائج النهائية:
• الزيارات الشهرية المتوقعة: ${results.monthlyVisits.toLocaleString()} زائر
• العملاء المحتملون: ${results.potentialCustomers} عميل
• إيرادات السيو الشهرية: $${results.monthlyRevenue.toLocaleString()}
• العائد على الاستثمار: ${results.roi}%

💡 تم إنشاء هذا التقرير باستخدام حاسبة السيو من ويب سكيت
🌐 https://www.webskeet.com/tools/seo-roi
    `

    try {
      await navigator.clipboard.writeText(resultsText)
      toast({
        title: "تم نسخ النتائج بنجاح!",
        description: "يمكنك الآن لصق النتائج في أي مكان تريده",
      })
    } catch (error) {
      toast({
        title: "خطأ في النسخ",
        description: "حدث خطأ أثناء نسخ النتائج، يرجى المحاولة مرة أخرى",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator className="h-8 w-8 text-webskeet-blue" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-webskeet-blue">حاسبة العائد من الاستثمار في السيو</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          احسب الأرباح المتوقعة من استثمارك في تحسين محركات البحث بطريقة بسيطة ومفهومة، حتى لو لم تكن لديك خلفية تقنية
        </p>
      </div>

      {/* Input Form */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-webskeet-blue" />
            المدخلات المطلوبة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* عدد الكلمات المفتاحية */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4 text-webskeet-blue" />
                عدد الكلمات المفتاحية التي تظهر في الصفحة الأولى
              </label>
              <Input
                type="number"
                min="0"
                step="1"
                value={inputs.keywords}
                onChange={(e) => handleInputChange("keywords", e.target.value)}
                placeholder="مثال: 10"
                className="text-right"
              />
              <p className="text-xs text-gray-500">عدد الكلمات المفتاحية المستهدفة في جوجل</p>
            </div>

            {/* متوسط حجم البحث */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-webskeet-blue" />
                متوسط حجم البحث الشهري لكل كلمة مفتاحية
              </label>
              <Input
                type="number"
                min="0"
                step="10"
                value={inputs.searchVolume}
                onChange={(e) => handleInputChange("searchVolume", e.target.value)}
                placeholder="مثال: 1000"
                className="text-right"
              />
              <p className="text-xs text-gray-500">عدد مرات البحث الشهرية لكل كلمة مفتاحية</p>
            </div>

            {/* معدل النقر */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MousePointer className="h-4 w-4 text-webskeet-blue" />
                معدل النقر المتوقع (CTR) %
              </label>
              <Input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={inputs.ctr}
                onChange={(e) => handleInputChange("ctr", e.target.value)}
                placeholder="مثال: 3"
                className="text-right"
              />
              <p className="text-xs text-gray-500">نسبة الأشخاص الذين سينقرون على موقعك من نتائج البحث</p>
            </div>

            {/* معدل التحويل */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4 text-webskeet-blue" />
                معدل التحويل المتوقع (Conversion Rate) %
              </label>
              <Input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={inputs.conversionRate}
                onChange={(e) => handleInputChange("conversionRate", e.target.value)}
                placeholder="مثال: 2"
                className="text-right"
              />
              <p className="text-xs text-gray-500">نسبة الزوار الذين سيصبحون عملاء فعليين</p>
            </div>

            {/* متوسط قيمة الطلب */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-webskeet-blue" />
                متوسط قيمة الطلب أو البيع ($)
              </label>
              <Input
                type="number"
                min="0"
                step="1"
                value={inputs.averageOrderValue}
                onChange={(e) => handleInputChange("averageOrderValue", e.target.value)}
                placeholder="مثال: 100"
                className="text-right"
              />
              <p className="text-xs text-gray-500">متوسط المبلغ الذي ينفقه كل عميل</p>
            </div>

            {/* تكلفة السيو */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Calculator className="h-4 w-4 text-webskeet-blue" />
                تكلفة السيو الشهرية ($)
              </label>
              <Input
                type="number"
                min="0"
                step="10"
                value={inputs.seoCost}
                onChange={(e) => handleInputChange("seoCost", e.target.value)}
                placeholder="مثال: 1000"
                className="text-right"
              />
              <p className="text-xs text-gray-500">المبلغ الذي تنفقه شهرياً على تحسين محركات البحث</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Card className="shadow-lg border-webskeet-blue/20">
        <CardHeader className="bg-gradient-to-r from-webskeet-blue/5 to-webskeet-gold/5">
          <CardTitle className="flex items-center gap-2 text-webskeet-blue">
            <TrendingUp className="h-5 w-5" />
            النتائج النهائية
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* الزيارات الشهرية المتوقعة */}
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-1">{results.monthlyVisits.toLocaleString()}</div>
              <div className="text-sm text-gray-600">الزيارات الشهرية المتوقعة</div>
            </div>

            {/* العملاء المحتملون */}
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-1">{results.potentialCustomers}</div>
              <div className="text-sm text-gray-600">العملاء المحتملون</div>
            </div>

            {/* إيرادات السيو الشهرية */}
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-yellow-600 mb-1">${results.monthlyRevenue.toLocaleString()}</div>
              <div className="text-sm text-gray-600">إيرادات السيو الشهرية</div>
            </div>

            {/* العائد على الاستثمار */}
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-1">{results.roi}%</div>
              <div className="text-sm text-gray-600">العائد على الاستثمار</div>
            </div>
          </div>

          {/* تفسير النتائج */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-3 text-webskeet-blue">تفسير النتائج:</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                • بناءً على المدخلات المحددة، من المتوقع أن تحصل على{" "}
                <strong className="text-webskeet-blue">{results.monthlyVisits.toLocaleString()} زائر شهرياً</strong>
              </p>
              <p>
                • سيتحول منهم حوالي <strong className="text-green-600">{results.potentialCustomers} عميل</strong> إلى
                عملاء فعليين
              </p>
              <p>
                • مما سيحقق إيرادات شهرية تقدر بـ{" "}
                <strong className="text-yellow-600">${results.monthlyRevenue.toLocaleString()}</strong>
              </p>
              <p>
                • العائد على استثمارك في السيو سيكون{" "}
                <strong className={results.roi >= 0 ? "text-green-600" : "text-red-600"}>{results.roi}%</strong>
                {results.roi >= 0 ? " (استثمار مربح)" : " (قد تحتاج لمراجعة الاستراتيجية)"}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button onClick={copyResults} className="bg-webskeet-blue hover:bg-webskeet-blue/90 text-white">
              <Copy className="ml-2 h-4 w-4" />
              نسخ النتائج
            </Button>
            <Button
              onClick={resetCalculator}
              variant="outline"
              className="border-webskeet-blue text-webskeet-blue hover:bg-webskeet-blue/10 bg-transparent"
            >
              <RefreshCcw className="ml-2 h-4 w-4" />
              إعادة تعيين
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tips Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-webskeet-blue">💡 نصائح لتحسين العائد من السيو</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-webskeet-blue">لزيادة الزيارات:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• استهدف كلمات مفتاحية أكثر وذات حجم بحث عالي</li>
                <li>• حسّن من ترتيب موقعك في نتائج البحث</li>
                <li>• اكتب عناوين جذابة لزيادة معدل النقر</li>
                <li>• أنشئ محتوى عالي الجودة ومفيد للزوار</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-webskeet-blue">لزيادة التحويلات:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• حسّن من تجربة المستخدم على موقعك</li>
                <li>• اجعل عملية الشراء سهلة وسريعة</li>
                <li>• أضف شهادات العملاء وعلامات الثقة</li>
                <li>• استخدم عبارات واضحة للحث على اتخاذ إجراء</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
