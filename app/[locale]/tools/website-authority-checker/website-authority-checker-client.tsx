"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Globe,
  TrendingUp,
  Shield,
  Link,
  Clock,
  BarChart3,
  CheckCircle,
  AlertCircle,
  History,
  Trash2,
  Copy,
  ExternalLink,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { Locale } from "@/i18n/config"

interface AuthorityResult {
  domain: string
  domainAuthority: number
  pageAuthority: number
  trustFlow: number
  citationFlow: number
  backlinks: number
  referringDomains: number
  organicKeywords: number
  organicTraffic: number
  status: "excellent" | "good" | "average" | "poor"
  checkedAt: string
}

interface HistoryItem extends AuthorityResult {
  id: string
}

const translations = {
  en: {
    title: "Website Authority Checker",
    description:
      "Check any website's authority and get a comprehensive assessment of domain strength and backlinks for free",
    inputTitle: "Check Website Authority",
    inputDescription: "Enter the website URL you want to check",
    placeholder: "Example: example.com or https://example.com",
    checkButton: "Check",
    checking: "Checking...",
    historyToggle: "View History",
    clearHistory: "Clear History",
    historyTitle: "Check History",
    resultsFor: "Results for:",
    checkedAt: "Checked:",
    statusExcellent: "Excellent",
    statusGood: "Good",
    statusAverage: "Average",
    statusPoor: "Poor",
    statusUnknown: "Unknown",
    domainAuthority: "Domain Authority",
    pageAuthority: "Page Authority",
    trustFlow: "Trust Flow",
    citationFlow: "Citation Flow",
    backlinks: "Backlinks",
    totalBacklinks: "Total Backlinks",
    referringDomains: "Referring Domains",
    organicTraffic: "Organic Traffic",
    organicKeywords: "Organic Keywords",
    monthlyOrganicVisits: "Monthly Organic Visits",
    analysisTitle: "Analysis and Recommendations",
    excellentAuthority: "Excellent Authority",
    excellentAuthorityDesc:
      "This website has very high authority and is considered a trusted reference in its field",
    goodAuthority: "Good Authority",
    goodAuthorityDesc:
      "The site has good authority that can be improved through building more high-quality backlinks",
    needsImprovement: "Needs Improvement",
    needsImprovementDesc:
      "The site needs to improve its authority through creating high-quality content and building strong backlinks",
    tipsTitle: "Tips to Improve Authority:",
    tip1: "Create high-quality, useful content",
    tip2: "Build backlinks from trusted sites",
    tip3: "Improve user experience and site speed",
    tip4: "Regular publishing and continuous updates",
    indicatorsTitle: "Important Indicators:",
    indicator1: "Trust Flow to Citation Flow ratio",
    indicator2: "Diversity of backlink sources",
    indicator3: "Content and keyword quality",
    indicator4: "Growth rate in organic visits",
    infoTitle: "What is Website Authority?",
    infoParagraph:
      "Domain Authority (DA) is a metric developed by Moz to evaluate the strength and trustworthiness of a specific website. This metric ranges from 0 to 100, where higher scores indicate a greater likelihood of better ranking in search results.",
    factorsTitle: "Influencing Factors:",
    factor1: "Number and quality of backlinks",
    factor2: "Domain age and history",
    factor3: "Content quality and freshness",
    factor4: "User experience and site speed",
    factor5: "Social signals",
    scoreTitle: "Score Interpretation:",
    score1: "70-100: Excellent authority",
    score2: "50-69: Good authority",
    score3: "30-49: Average authority",
    score4: "0-29: Poor authority",
    toastErrorTitle: "Error",
    toastEmptyUrl: "Please enter a website URL",
    toastInvalidUrl: "Invalid URL",
    toastInvalidUrlDesc: "Please enter a valid website URL",
    toastCheckSuccess: "Check successful",
    toastCheckSuccessDesc: "Website authority check completed for",
    toastCheckError: "Check error",
    toastCheckErrorDesc: "An error occurred while checking the site. Please try again.",
    toastCopied: "Copied",
    toastCopiedDesc: "Text copied to clipboard",
    toastHistoryCleared: "History cleared",
    toastHistoryClearedDesc: "All previous checks have been cleared",
  },
  ar: {
    title: "فاحص سلطة الموقع",
    description:
      "افحص سلطة أي موقع إلكتروني واحصل على تقييم شامل لقوة الدومين والروابط الخلفية مجاناً",
    inputTitle: "فحص سلطة الموقع",
    inputDescription: "أدخل رابط الموقع الذي تريد فحص سلطته",
    placeholder: "مثال: example.com أو https://example.com",
    checkButton: "فحص",
    checking: "جاري الفحص...",
    historyToggle: "عرض السجل",
    clearHistory: "مسح السجل",
    historyTitle: "سجل عمليات الفحص",
    resultsFor: "نتائج فحص:",
    checkedAt: "تم الفحص:",
    statusExcellent: "ممتاز",
    statusGood: "جيد",
    statusAverage: "متوسط",
    statusPoor: "ضعيف",
    statusUnknown: "غير محدد",
    domainAuthority: "سلطة الدومين",
    pageAuthority: "سلطة الصفحة",
    trustFlow: "تدفق الثقة",
    citationFlow: "تدفق الاستشهاد",
    backlinks: "الروابط الخلفية",
    totalBacklinks: "إجمالي الروابط الخلفية",
    referringDomains: "الدومينات المرجعية",
    organicTraffic: "الحركة العضوية",
    organicKeywords: "الكلمات المفتاحية العضوية",
    monthlyOrganicVisits: "الزيارات العضوية الشهرية",
    analysisTitle: "تحليل وتوصيات",
    excellentAuthority: "سلطة ممتازة",
    excellentAuthorityDesc:
      "هذا الموقع يتمتع بسلطة عالية جداً ويعتبر مرجعاً موثوقاً في مجاله",
    goodAuthority: "سلطة جيدة",
    goodAuthorityDesc:
      "الموقع يتمتع بسلطة جيدة ويمكن تحسينها من خلال بناء المزيد من الروابط الخلفية عالية الجودة",
    needsImprovement: "يحتاج تحسين",
    needsImprovementDesc:
      "الموقع يحتاج إلى تحسين سلطته من خلال إنشاء محتوى عالي الجودة وبناء روابط خلفية قوية",
    tipsTitle: "نصائح لتحسين السلطة:",
    tip1: "إنشاء محتوى عالي الجودة ومفيد",
    tip2: "بناء روابط خلفية من مواقع موثوقة",
    tip3: "تحسين تجربة المستخدم وسرعة الموقع",
    tip4: "النشر المنتظم والتحديث المستمر",
    indicatorsTitle: "مؤشرات مهمة:",
    indicator1: "نسبة Trust Flow إلى Citation Flow",
    indicator2: "تنوع مصادر الروابط الخلفية",
    indicator3: "جودة المحتوى والكلمات المفتاحية",
    indicator4: "معدل النمو في الزيارات العضوية",
    infoTitle: "ما هي سلطة الموقع؟",
    infoParagraph:
      "سلطة الموقع (Domain Authority) هي مقياس تم تطويره من قبل شركة Moz لتقييم قوة وموثوقية موقع ويب معين. يتراوح هذا المقياس من 0 إلى 100، حيث تشير الدرجات الأعلى إلى احتمالية أكبر لترتيب أفضل في نتائج البحث.",
    factorsTitle: "العوامل المؤثرة:",
    factor1: "عدد وجودة الروابط الخلفية",
    factor2: "عمر الدومين وتاريخه",
    factor3: "جودة المحتوى وحداثته",
    factor4: "تجربة المستخدم وسرعة الموقع",
    factor5: "الإشارات الاجتماعية",
    scoreTitle: "تفسير النتائج:",
    score1: "70-100: سلطة ممتازة",
    score2: "50-69: سلطة جيدة",
    score3: "30-49: سلطة متوسطة",
    score4: "0-29: سلطة ضعيفة",
    toastErrorTitle: "خطأ",
    toastEmptyUrl: "يرجى إدخال رابط الموقع",
    toastInvalidUrl: "خطأ في الرابط",
    toastInvalidUrlDesc: "يرجى إدخال رابط صحيح للموقع",
    toastCheckSuccess: "تم الفحص بنجاح",
    toastCheckSuccessDesc: "تم فحص سلطة الموقع",
    toastCheckError: "خطأ في الفحص",
    toastCheckErrorDesc: "حدث خطأ أثناء فحص الموقع. يرجى المحاولة مرة أخرى.",
    toastCopied: "تم النسخ",
    toastCopiedDesc: "تم نسخ النص إلى الحافظة",
    toastHistoryCleared: "تم مسح السجل",
    toastHistoryClearedDesc: "تم مسح جميع عمليات الفحص السابقة",
  },
} as const

export default function WebsiteAuthorityCheckerClient({ locale }: { locale: Locale }) {
  const t = translations[locale]
  const numberLocale = locale === "ar" ? "ar-EG" : "en-US"
  const dateLocale = locale === "ar" ? "ar-EG" : "en-US"
  const iconSpacingClass = locale === "ar" ? "ml-2" : "mr-2"

  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<AuthorityResult | null>(null)
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [showHistory, setShowHistory] = useState(false)
  const { toast } = useToast()

  // Load history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("authority-checker-history")
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory))
      } catch (error) {
        console.error("Error loading history:", error)
      }
    }
  }, [])

  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("authority-checker-history", JSON.stringify(history))
  }, [history])

  const validateUrl = (inputUrl: string): string | null => {
    try {
      // Add protocol if missing
      let processedUrl = inputUrl.trim()
      if (!processedUrl.startsWith("http://") && !processedUrl.startsWith("https://")) {
        processedUrl = "https://" + processedUrl
      }

      const urlObj = new URL(processedUrl)
      return urlObj.hostname
    } catch (error) {
      return null
    }
  }

  const getAuthorityStatus = (da: number): "excellent" | "good" | "average" | "poor" => {
    if (da >= 70) return "excellent"
    if (da >= 50) return "good"
    if (da >= 30) return "average"
    return "poor"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-100 text-green-800 border-green-200"
      case "good":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "average":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "poor":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "excellent":
        return t.statusExcellent
      case "good":
        return t.statusGood
      case "average":
        return t.statusAverage
      case "poor":
        return t.statusPoor
      default:
        return t.statusUnknown
    }
  }

  // Simulate API call - In real implementation, this would call a backend service
  const simulateAuthorityCheck = (domain: string): AuthorityResult => {
    // Generate realistic but random data for demonstration
    const baseDA = Math.floor(Math.random() * 100)
    const basePA = Math.max(baseDA - 20 + Math.floor(Math.random() * 40), 0)
    const trustFlow = Math.floor(Math.random() * 100)
    const citationFlow = Math.max(trustFlow - 10 + Math.floor(Math.random() * 20), 0)

    return {
      domain,
      domainAuthority: baseDA,
      pageAuthority: Math.min(basePA, 100),
      trustFlow,
      citationFlow,
      backlinks: Math.floor(Math.random() * 1000000) + 1000,
      referringDomains: Math.floor(Math.random() * 50000) + 100,
      organicKeywords: Math.floor(Math.random() * 100000) + 500,
      organicTraffic: Math.floor(Math.random() * 5000000) + 1000,
      status: getAuthorityStatus(baseDA),
      checkedAt: new Date().toISOString(),
    }
  }

  const handleCheck = async () => {
    if (!url.trim()) {
      toast({
        title: t.toastErrorTitle,
        description: t.toastEmptyUrl,
        variant: "destructive",
      })
      return
    }

    const domain = validateUrl(url)
    if (!domain) {
      toast({
        title: t.toastInvalidUrl,
        description: t.toastInvalidUrlDesc,
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const authorityResult = simulateAuthorityCheck(domain)
      setResult(authorityResult)

      // Add to history
      const historyItem: HistoryItem = {
        ...authorityResult,
        id: Date.now().toString(),
      }

      setHistory((prev) => {
        const filtered = prev.filter((item) => item.domain !== domain)
        return [historyItem, ...filtered].slice(0, 10) // Keep only last 10 checks
      })

      toast({
        title: t.toastCheckSuccess,
        description: `${t.toastCheckSuccessDesc} ${domain}`,
      })
    } catch (error) {
      toast({
        title: t.toastCheckError,
        description: t.toastCheckErrorDesc,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: t.toastCopied,
      description: t.toastCopiedDesc,
    })
  }

  const clearHistory = () => {
    setHistory([])
    toast({
      title: t.toastHistoryCleared,
      description: t.toastHistoryClearedDesc,
    })
  }

  const loadFromHistory = (historyItem: HistoryItem) => {
    setUrl(historyItem.domain)
    setResult(historyItem)
    setShowHistory(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="h-8 w-8 text-webskeet-blue" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-webskeet-blue">{t.title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.description}</p>
      </div>

      {/* Input Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            {t.inputTitle}
          </CardTitle>
          <CardDescription>{t.inputDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                type="url"
                placeholder={t.placeholder}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleCheck()}
                className="text-lg h-12"
              />
            </div>
            <Button onClick={handleCheck} disabled={isLoading} className="h-12 px-8">
              {isLoading ? (
                <>
                  <div className={`animate-spin rounded-full h-4 w-4 border-b-2 border-white ${iconSpacingClass}`}></div>
                  {t.checking}
                </>
              ) : (
                <>
                  <Search className={`h-4 w-4 ${iconSpacingClass}`} />
                  {t.checkButton}
                </>
              )}
            </Button>
          </div>

          {/* History Toggle */}
          {history.length > 0 && (
            <div className="mt-4 flex justify-between items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowHistory(!showHistory)}
                className="flex items-center gap-2"
              >
                <History className="h-4 w-4" />
                {t.historyToggle} ({history.length})
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={clearHistory}
                className="flex items-center gap-2 bg-transparent"
              >
                <Trash2 className="h-4 w-4" />
                {t.clearHistory}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* History Section */}
      {showHistory && history.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5" />
              {t.historyTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                  onClick={() => loadFromHistory(item)}
                >
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <div>
                      <div className="font-medium">{item.domain}</div>
                      <div className="text-sm text-gray-500">
                        DA: {item.domainAuthority} | {new Date(item.checkedAt).toLocaleDateString(dateLocale)}
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(item.status)}>{getStatusText(item.status)}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Main Results Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  {t.resultsFor} {result.domain}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(result.status)}>{getStatusText(result.status)}</Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(result.domain)}
                    className="flex items-center gap-1"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`https://${result.domain}`, "_blank")}
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <CardDescription className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {t.checkedAt} {new Date(result.checkedAt).toLocaleString(dateLocale)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Authority Scores */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-webskeet-blue mb-2">{result.domainAuthority}</div>
                  <div className="text-sm text-gray-600">{t.domainAuthority}</div>
                  <div className="text-xs text-gray-500">Domain Authority</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{result.pageAuthority}</div>
                  <div className="text-sm text-gray-600">{t.pageAuthority}</div>
                  <div className="text-xs text-gray-500">Page Authority</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{result.trustFlow}</div>
                  <div className="text-sm text-gray-600">{t.trustFlow}</div>
                  <div className="text-xs text-gray-500">Trust Flow</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{result.citationFlow}</div>
                  <div className="text-sm text-gray-600">{t.citationFlow}</div>
                  <div className="text-xs text-gray-500">Citation Flow</div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Detailed Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Link className="h-4 w-4" />
                    {t.backlinks}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t.totalBacklinks}</span>
                      <span className="font-semibold">{result.backlinks.toLocaleString(numberLocale)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t.referringDomains}</span>
                      <span className="font-semibold">{result.referringDomains.toLocaleString(numberLocale)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    {t.organicTraffic}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t.organicKeywords}</span>
                      <span className="font-semibold">{result.organicKeywords.toLocaleString(numberLocale)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t.monthlyOrganicVisits}</span>
                      <span className="font-semibold">{result.organicTraffic.toLocaleString(numberLocale)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analysis and Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                {t.analysisTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {result.domainAuthority >= 70 && (
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-green-800">{t.excellentAuthority}</div>
                      <div className="text-green-700 text-sm">{t.excellentAuthorityDesc}</div>
                    </div>
                  </div>
                )}

                {result.domainAuthority >= 50 && result.domainAuthority < 70 && (
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-blue-800">{t.goodAuthority}</div>
                      <div className="text-blue-700 text-sm">{t.goodAuthorityDesc}</div>
                    </div>
                  </div>
                )}

                {result.domainAuthority < 50 && (
                  <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-yellow-800">{t.needsImprovement}</div>
                      <div className="text-yellow-700 text-sm">{t.needsImprovementDesc}</div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">{t.tipsTitle}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>&#8226; {t.tip1}</li>
                      <li>&#8226; {t.tip2}</li>
                      <li>&#8226; {t.tip3}</li>
                      <li>&#8226; {t.tip4}</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">{t.indicatorsTitle}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>&#8226; {t.indicator1}</li>
                      <li>&#8226; {t.indicator2}</li>
                      <li>&#8226; {t.indicator3}</li>
                      <li>&#8226; {t.indicator4}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Information Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>{t.infoTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none text-gray-600">
            <p className="mb-4">{t.infoParagraph}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">{t.factorsTitle}</h4>
                <ul className="space-y-1 text-sm">
                  <li>&#8226; {t.factor1}</li>
                  <li>&#8226; {t.factor2}</li>
                  <li>&#8226; {t.factor3}</li>
                  <li>&#8226; {t.factor4}</li>
                  <li>&#8226; {t.factor5}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t.scoreTitle}</h4>
                <ul className="space-y-1 text-sm">
                  <li>&#8226; {t.score1}</li>
                  <li>&#8226; {t.score2}</li>
                  <li>&#8226; {t.score3}</li>
                  <li>&#8226; {t.score4}</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
