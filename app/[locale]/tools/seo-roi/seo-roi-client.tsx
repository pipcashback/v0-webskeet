"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Copy, RefreshCcw, Calculator, TrendingUp, Users, DollarSign, Target, MousePointer } from "lucide-react"
import type { Locale } from "@/i18n/config"

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

const translations = {
  en: {
    title: "SEO ROI Calculator",
    description:
      "Calculate the expected returns from your SEO investment in a simple and understandable way, even without a technical background",
    inputSectionTitle: "Required Inputs",
    labelKeywords: "Number of keywords ranking on the first page",
    labelSearchVolume: "Average monthly search volume per keyword",
    labelCtr: "Expected Click-Through Rate (CTR) %",
    labelConversionRate: "Expected Conversion Rate %",
    labelOrderValue: "Average order or sale value ($)",
    labelSeoCost: "Monthly SEO cost ($)",
    placeholderKeywords: "Example: 10",
    placeholderSearchVolume: "Example: 1000",
    placeholderCtr: "Example: 3",
    placeholderConversionRate: "Example: 2",
    placeholderOrderValue: "Example: 100",
    placeholderSeoCost: "Example: 1000",
    helperKeywords: "Number of target keywords in Google",
    helperSearchVolume: "Monthly search count per keyword",
    helperCtr: "Percentage of people who will click on your site from search results",
    helperConversionRate: "Percentage of visitors who will become actual customers",
    helperOrderValue: "Average amount each customer spends",
    helperSeoCost: "Amount you spend monthly on SEO",
    resultsTitle: "Final Results",
    resultMonthlyVisits: "Expected Monthly Visits",
    resultPotentialCustomers: "Potential Customers",
    resultMonthlyRevenue: "Monthly SEO Revenue",
    resultRoi: "Return on Investment",
    interpretationTitle: "Results Interpretation:",
    interpretationVisits: (visits: string) =>
      `Based on the specified inputs, you can expect to receive ${visits} monthly visitors`,
    interpretationCustomers: (customers: number) =>
      `Of which approximately ${customers} will become actual customers`,
    interpretationRevenue: (revenue: string) =>
      `Generating estimated monthly revenue of $${revenue}`,
    interpretationRoi: (roi: number) => `Your SEO investment ROI will be ${roi}%`,
    roiPositive: "(profitable investment)",
    roiNegative: "(may need to review strategy)",
    buttonCopy: "Copy Results",
    buttonReset: "Reset",
    toastResetTitle: "Calculator reset",
    toastResetDescription: "All values have been returned to defaults",
    toastCopySuccessTitle: "Results copied successfully!",
    toastCopySuccessDescription: "You can now paste the results anywhere",
    toastCopyErrorTitle: "Copy error",
    toastCopyErrorDescription: "An error occurred while copying results, please try again",
    tipsSectionTitle: "\u{1F4A1} Tips to Improve SEO Returns",
    tipsVisitsTitle: "To increase visits:",
    tipsVisits: [
      "Target more keywords with high search volume",
      "Improve your site's ranking in search results",
      "Write engaging titles to increase click-through rate",
      "Create high-quality, useful content for visitors",
    ],
    tipsConversionsTitle: "To increase conversions:",
    tipsConversions: [
      "Improve user experience on your site",
      "Make the purchase process easy and fast",
      "Add customer testimonials and trust signals",
      "Use clear calls to action",
    ],
    copyResultsText: (inputs: SeoInputs, results: SeoResults) =>
      `\u{1F539} SEO ROI Calculator Results \u{1F539}\n\n\u{1F4CA} Inputs:\n\u2022 Number of keywords: ${inputs.keywords}\n\u2022 Average monthly search volume: ${inputs.searchVolume}\n\u2022 Expected CTR: ${inputs.ctr}%\n\u2022 Expected conversion rate: ${inputs.conversionRate}%\n\u2022 Average order value: $${inputs.averageOrderValue}\n\u2022 Monthly SEO cost: $${inputs.seoCost}\n\n\u{1F4C8} Final Results:\n\u2022 Expected monthly visits: ${results.monthlyVisits.toLocaleString()} visitors\n\u2022 Potential customers: ${results.potentialCustomers} customers\n\u2022 Monthly SEO revenue: $${results.monthlyRevenue.toLocaleString()}\n\u2022 Return on investment: ${results.roi}%\n\n\u{1F4A1} Report generated using Webskeet SEO Calculator\n\u{1F310} https://www.webskeet.com/tools/seo-roi`,
  },
  ar: {
    title: "حاسبة العائد من الاستثمار في السيو",
    description:
      "احسب الأرباح المتوقعة من استثمارك في تحسين محركات البحث بطريقة بسيطة ومفهومة، حتى لو لم تكن لديك خلفية تقنية",
    inputSectionTitle: "المدخلات المطلوبة",
    labelKeywords: "عدد الكلمات المفتاحية التي تظهر في الصفحة الأولى",
    labelSearchVolume: "متوسط حجم البحث الشهري لكل كلمة مفتاحية",
    labelCtr: "معدل النقر المتوقع (CTR) %",
    labelConversionRate: "معدل التحويل المتوقع (Conversion Rate) %",
    labelOrderValue: "متوسط قيمة الطلب أو البيع ($)",
    labelSeoCost: "تكلفة السيو الشهرية ($)",
    placeholderKeywords: "مثال: 10",
    placeholderSearchVolume: "مثال: 1000",
    placeholderCtr: "مثال: 3",
    placeholderConversionRate: "مثال: 2",
    placeholderOrderValue: "مثال: 100",
    placeholderSeoCost: "مثال: 1000",
    helperKeywords: "عدد الكلمات المفتاحية المستهدفة في جوجل",
    helperSearchVolume: "عدد مرات البحث الشهرية لكل كلمة مفتاحية",
    helperCtr: "نسبة الأشخاص الذين سينقرون على موقعك من نتائج البحث",
    helperConversionRate: "نسبة الزوار الذين سيصبحون عملاء فعليين",
    helperOrderValue: "متوسط المبلغ الذي ينفقه كل عميل",
    helperSeoCost: "المبلغ الذي تنفقه شهرياً على تحسين محركات البحث",
    resultsTitle: "النتائج النهائية",
    resultMonthlyVisits: "الزيارات الشهرية المتوقعة",
    resultPotentialCustomers: "العملاء المحتملون",
    resultMonthlyRevenue: "إيرادات السيو الشهرية",
    resultRoi: "العائد على الاستثمار",
    interpretationTitle: "تفسير النتائج:",
    interpretationVisits: (visits: string) =>
      `بناءً على المدخلات المحددة، من المتوقع أن تحصل على ${visits} زائر شهرياً`,
    interpretationCustomers: (customers: number) =>
      `سيتحول منهم حوالي ${customers} عميل إلى عملاء فعليين`,
    interpretationRevenue: (revenue: string) =>
      `مما سيحقق إيرادات شهرية تقدر بـ $${revenue}`,
    interpretationRoi: (roi: number) => `العائد على استثمارك في السيو سيكون ${roi}%`,
    roiPositive: "(استثمار مربح)",
    roiNegative: "(قد تحتاج لمراجعة الاستراتيجية)",
    buttonCopy: "نسخ النتائج",
    buttonReset: "إعادة تعيين",
    toastResetTitle: "تم إعادة تعيين الحاسبة",
    toastResetDescription: "تم إرجاع جميع القيم إلى الإعدادات الافتراضية",
    toastCopySuccessTitle: "تم نسخ النتائج بنجاح!",
    toastCopySuccessDescription: "يمكنك الآن لصق النتائج في أي مكان تريده",
    toastCopyErrorTitle: "خطأ في النسخ",
    toastCopyErrorDescription: "حدث خطأ أثناء نسخ النتائج، يرجى المحاولة مرة أخرى",
    tipsSectionTitle: "\u{1F4A1} نصائح لتحسين العائد من السيو",
    tipsVisitsTitle: "لزيادة الزيارات:",
    tipsVisits: [
      "استهدف كلمات مفتاحية أكثر وذات حجم بحث عالي",
      "حسّن من ترتيب موقعك في نتائج البحث",
      "اكتب عناوين جذابة لزيادة معدل النقر",
      "أنشئ محتوى عالي الجودة ومفيد للزوار",
    ],
    tipsConversionsTitle: "لزيادة التحويلات:",
    tipsConversions: [
      "حسّن من تجربة المستخدم على موقعك",
      "اجعل عملية الشراء سهلة وسريعة",
      "أضف شهادات العملاء وعلامات الثقة",
      "استخدم عبارات واضحة للحث على اتخاذ إجراء",
    ],
    copyResultsText: (inputs: SeoInputs, results: SeoResults) =>
      `\u{1F539} نتائج حاسبة العائد من الاستثمار في السيو \u{1F539}\n\n\u{1F4CA} المدخلات:\n\u2022 عدد الكلمات المفتاحية: ${inputs.keywords}\n\u2022 متوسط حجم البحث الشهري: ${inputs.searchVolume}\n\u2022 معدل النقر المتوقع: ${inputs.ctr}%\n\u2022 معدل التحويل المتوقع: ${inputs.conversionRate}%\n\u2022 متوسط قيمة الطلب: $${inputs.averageOrderValue}\n\u2022 تكلفة السيو الشهرية: $${inputs.seoCost}\n\n\u{1F4C8} النتائج النهائية:\n\u2022 الزيارات الشهرية المتوقعة: ${results.monthlyVisits.toLocaleString()} زائر\n\u2022 العملاء المحتملون: ${results.potentialCustomers} عميل\n\u2022 إيرادات السيو الشهرية: $${results.monthlyRevenue.toLocaleString()}\n\u2022 العائد على الاستثمار: ${results.roi}%\n\n\u{1F4A1} تم إنشاء هذا التقرير باستخدام حاسبة السيو من ويب سكيت\n\u{1F310} https://www.webskeet.com/tools/seo-roi`,
  },
}

const defaultInputs: SeoInputs = {
  keywords: 10,
  searchVolume: 1000,
  ctr: 3,
  conversionRate: 2,
  averageOrderValue: 100,
  seoCost: 1000,
}

export default function SeoRoiClient({ locale }: { locale: Locale }) {
  const t = translations[locale]
  const { toast } = useToast()
  const [inputs, setInputs] = useState<SeoInputs>(defaultInputs)
  const [results, setResults] = useState<SeoResults>({
    monthlyVisits: 0,
    potentialCustomers: 0,
    monthlyRevenue: 0,
    roi: 0,
  })

  useEffect(() => {
    calculateSeoRoi()
  }, [inputs])

  const calculateSeoRoi = () => {
    const { keywords, searchVolume, ctr, conversionRate, averageOrderValue, seoCost } = inputs

    const monthlyVisits = keywords * searchVolume * (ctr / 100)
    const potentialCustomers = monthlyVisits * (conversionRate / 100)
    const monthlyRevenue = potentialCustomers * averageOrderValue
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
      title: t.toastResetTitle,
      description: t.toastResetDescription,
    })
  }

  const copyResults = async () => {
    const resultsText = t.copyResultsText(inputs, results)

    try {
      await navigator.clipboard.writeText(resultsText)
      toast({
        title: t.toastCopySuccessTitle,
        description: t.toastCopySuccessDescription,
      })
    } catch (error) {
      toast({
        title: t.toastCopyErrorTitle,
        description: t.toastCopyErrorDescription,
        variant: "destructive",
      })
    }
  }

  const iconSpacing = locale === "ar" ? "ml-2" : "mr-2"

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator className="h-8 w-8 text-webskeet-blue" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-webskeet-blue">{t.title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.description}</p>
      </div>

      {/* Input Form */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-webskeet-blue" />
            {t.inputSectionTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Keywords */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4 text-webskeet-blue" />
                {t.labelKeywords}
              </label>
              <Input
                type="number"
                min="0"
                step="1"
                value={inputs.keywords}
                onChange={(e) => handleInputChange("keywords", e.target.value)}
                placeholder={t.placeholderKeywords}
              />
              <p className="text-xs text-gray-500">{t.helperKeywords}</p>
            </div>

            {/* Search Volume */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-webskeet-blue" />
                {t.labelSearchVolume}
              </label>
              <Input
                type="number"
                min="0"
                step="10"
                value={inputs.searchVolume}
                onChange={(e) => handleInputChange("searchVolume", e.target.value)}
                placeholder={t.placeholderSearchVolume}
              />
              <p className="text-xs text-gray-500">{t.helperSearchVolume}</p>
            </div>

            {/* CTR */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MousePointer className="h-4 w-4 text-webskeet-blue" />
                {t.labelCtr}
              </label>
              <Input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={inputs.ctr}
                onChange={(e) => handleInputChange("ctr", e.target.value)}
                placeholder={t.placeholderCtr}
              />
              <p className="text-xs text-gray-500">{t.helperCtr}</p>
            </div>

            {/* Conversion Rate */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4 text-webskeet-blue" />
                {t.labelConversionRate}
              </label>
              <Input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={inputs.conversionRate}
                onChange={(e) => handleInputChange("conversionRate", e.target.value)}
                placeholder={t.placeholderConversionRate}
              />
              <p className="text-xs text-gray-500">{t.helperConversionRate}</p>
            </div>

            {/* Average Order Value */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-webskeet-blue" />
                {t.labelOrderValue}
              </label>
              <Input
                type="number"
                min="0"
                step="1"
                value={inputs.averageOrderValue}
                onChange={(e) => handleInputChange("averageOrderValue", e.target.value)}
                placeholder={t.placeholderOrderValue}
              />
              <p className="text-xs text-gray-500">{t.helperOrderValue}</p>
            </div>

            {/* SEO Cost */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Calculator className="h-4 w-4 text-webskeet-blue" />
                {t.labelSeoCost}
              </label>
              <Input
                type="number"
                min="0"
                step="10"
                value={inputs.seoCost}
                onChange={(e) => handleInputChange("seoCost", e.target.value)}
                placeholder={t.placeholderSeoCost}
              />
              <p className="text-xs text-gray-500">{t.helperSeoCost}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Card className="shadow-lg border-webskeet-blue/20">
        <CardHeader className="bg-gradient-to-r from-webskeet-blue/5 to-webskeet-gold/5">
          <CardTitle className="flex items-center gap-2 text-webskeet-blue">
            <TrendingUp className="h-5 w-5" />
            {t.resultsTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Monthly Visits */}
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-1">{results.monthlyVisits.toLocaleString()}</div>
              <div className="text-sm text-gray-600">{t.resultMonthlyVisits}</div>
            </div>

            {/* Potential Customers */}
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-1">{results.potentialCustomers}</div>
              <div className="text-sm text-gray-600">{t.resultPotentialCustomers}</div>
            </div>

            {/* Monthly Revenue */}
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-yellow-600 mb-1">${results.monthlyRevenue.toLocaleString()}</div>
              <div className="text-sm text-gray-600">{t.resultMonthlyRevenue}</div>
            </div>

            {/* ROI */}
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-1">{results.roi}%</div>
              <div className="text-sm text-gray-600">{t.resultRoi}</div>
            </div>
          </div>

          {/* Results Interpretation */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-3 text-webskeet-blue">{t.interpretationTitle}</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                {"• "}
                {t.interpretationVisits(results.monthlyVisits.toLocaleString()).split(results.monthlyVisits.toLocaleString())[0]}
                <strong className="text-webskeet-blue">{results.monthlyVisits.toLocaleString()}{" "}
                {locale === "ar" ? "زائر شهرياً" : "monthly visitors"}</strong>
              </p>
              <p>
                {"• "}
                {t.interpretationCustomers(results.potentialCustomers).split(String(results.potentialCustomers))[0]}
                <strong className="text-green-600">{results.potentialCustomers}{" "}
                {locale === "ar" ? "عميل" : "customers"}</strong>
                {locale === "ar" ? " إلى عملاء فعليين" : " will become actual customers"}
              </p>
              <p>
                {"• "}
                {t.interpretationRevenue(results.monthlyRevenue.toLocaleString()).split(`$${results.monthlyRevenue.toLocaleString()}`)[0]}
                <strong className="text-yellow-600">${results.monthlyRevenue.toLocaleString()}</strong>
              </p>
              <p>
                {"• "}
                {t.interpretationRoi(results.roi).split(`${results.roi}%`)[0]}
                <strong className={results.roi >= 0 ? "text-green-600" : "text-red-600"}>{results.roi}%</strong>
                {" "}{results.roi >= 0 ? t.roiPositive : t.roiNegative}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button onClick={copyResults} className="bg-webskeet-blue hover:bg-webskeet-blue/90 text-white">
              <Copy className={`${iconSpacing} h-4 w-4`} />
              {t.buttonCopy}
            </Button>
            <Button
              onClick={resetCalculator}
              variant="outline"
              className="border-webskeet-blue text-webskeet-blue hover:bg-webskeet-blue/10 bg-transparent"
            >
              <RefreshCcw className={`${iconSpacing} h-4 w-4`} />
              {t.buttonReset}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tips Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-webskeet-blue">{t.tipsSectionTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-webskeet-blue">{t.tipsVisitsTitle}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {t.tipsVisits.map((tip, index) => (
                  <li key={index}>{"• "}{tip}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-webskeet-blue">{t.tipsConversionsTitle}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {t.tipsConversions.map((tip, index) => (
                  <li key={index}>{"• "}{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
