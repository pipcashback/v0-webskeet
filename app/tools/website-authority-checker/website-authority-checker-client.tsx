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

export default function WebsiteAuthorityCheckerClient() {
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
        return "ممتاز"
      case "good":
        return "جيد"
      case "average":
        return "متوسط"
      case "poor":
        return "ضعيف"
      default:
        return "غير محدد"
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
        title: "خطأ",
        description: "يرجى إدخال رابط الموقع",
        variant: "destructive",
      })
      return
    }

    const domain = validateUrl(url)
    if (!domain) {
      toast({
        title: "خطأ في الرابط",
        description: "يرجى إدخال رابط صحيح للموقع",
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
        title: "تم الفحص بنجاح",
        description: `تم فحص سلطة الموقع ${domain}`,
      })
    } catch (error) {
      toast({
        title: "خطأ في الفحص",
        description: "حدث خطأ أثناء فحص الموقع. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "تم النسخ",
      description: "تم نسخ النص إلى الحافظة",
    })
  }

  const clearHistory = () => {
    setHistory([])
    toast({
      title: "تم مسح السجل",
      description: "تم مسح جميع عمليات الفحص السابقة",
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
        <h1 className="text-4xl font-bold mb-4 text-webskeet-blue">فاحص سلطة الموقع</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          افحص سلطة أي موقع إلكتروني واحصل على تقييم شامل لقوة الدومين والروابط الخلفية مجاناً
        </p>
      </div>

      {/* Input Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            فحص سلطة الموقع
          </CardTitle>
          <CardDescription>أدخل رابط الموقع الذي تريد فحص سلطته</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                type="url"
                placeholder="مثال: example.com أو https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleCheck()}
                className="text-lg h-12"
              />
            </div>
            <Button onClick={handleCheck} disabled={isLoading} className="h-12 px-8">
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
                  جاري الفحص...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 ml-2" />
                  فحص
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
                عرض السجل ({history.length})
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={clearHistory}
                className="flex items-center gap-2 bg-transparent"
              >
                <Trash2 className="h-4 w-4" />
                مسح السجل
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
              سجل عمليات الفحص
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
                        DA: {item.domainAuthority} | {new Date(item.checkedAt).toLocaleDateString("ar-EG")}
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
                  نتائج فحص: {result.domain}
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
                تم الفحص: {new Date(result.checkedAt).toLocaleString("ar-EG")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Authority Scores */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-webskeet-blue mb-2">{result.domainAuthority}</div>
                  <div className="text-sm text-gray-600">سلطة الدومين</div>
                  <div className="text-xs text-gray-500">Domain Authority</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{result.pageAuthority}</div>
                  <div className="text-sm text-gray-600">سلطة الصفحة</div>
                  <div className="text-xs text-gray-500">Page Authority</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{result.trustFlow}</div>
                  <div className="text-sm text-gray-600">تدفق الثقة</div>
                  <div className="text-xs text-gray-500">Trust Flow</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{result.citationFlow}</div>
                  <div className="text-sm text-gray-600">تدفق الاستشهاد</div>
                  <div className="text-xs text-gray-500">Citation Flow</div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Detailed Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Link className="h-4 w-4" />
                    الروابط الخلفية
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">إجمالي الروابط الخلفية</span>
                      <span className="font-semibold">{result.backlinks.toLocaleString("ar-EG")}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">الدومينات المرجعية</span>
                      <span className="font-semibold">{result.referringDomains.toLocaleString("ar-EG")}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    الحركة العضوية
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">الكلمات المفتاحية العضوية</span>
                      <span className="font-semibold">{result.organicKeywords.toLocaleString("ar-EG")}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">الزيارات العضوية الشهرية</span>
                      <span className="font-semibold">{result.organicTraffic.toLocaleString("ar-EG")}</span>
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
                تحليل وتوصيات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {result.domainAuthority >= 70 && (
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-green-800">سلطة ممتازة</div>
                      <div className="text-green-700 text-sm">
                        هذا الموقع يتمتع بسلطة عالية جداً ويعتبر مرجعاً موثوقاً في مجاله
                      </div>
                    </div>
                  </div>
                )}

                {result.domainAuthority >= 50 && result.domainAuthority < 70 && (
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-blue-800">سلطة جيدة</div>
                      <div className="text-blue-700 text-sm">
                        الموقع يتمتع بسلطة جيدة ويمكن تحسينها من خلال بناء المزيد من الروابط الخلفية عالية الجودة
                      </div>
                    </div>
                  </div>
                )}

                {result.domainAuthority < 50 && (
                  <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-yellow-800">يحتاج تحسين</div>
                      <div className="text-yellow-700 text-sm">
                        الموقع يحتاج إلى تحسين سلطته من خلال إنشاء محتوى عالي الجودة وبناء روابط خلفية قوية
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">نصائح لتحسين السلطة:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• إنشاء محتوى عالي الجودة ومفيد</li>
                      <li>• بناء روابط خلفية من مواقع موثوقة</li>
                      <li>• تحسين تجربة المستخدم وسرعة الموقع</li>
                      <li>• النشر المنتظم والتحديث المستمر</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">مؤشرات مهمة:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• نسبة Trust Flow إلى Citation Flow</li>
                      <li>• تنوع مصادر الروابط الخلفية</li>
                      <li>• جودة المحتوى والكلمات المفتاحية</li>
                      <li>• معدل النمو في الزيارات العضوية</li>
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
          <CardTitle>ما هي سلطة الموقع؟</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none text-gray-600">
            <p className="mb-4">
              سلطة الموقع (Domain Authority) هي مقياس تم تطويره من قبل شركة Moz لتقييم قوة وموثوقية موقع ويب معين.
              يتراوح هذا المقياس من 0 إلى 100، حيث تشير الدرجات الأعلى إلى احتمالية أكبر لترتيب أفضل في نتائج البحث.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">العوامل المؤثرة:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• عدد وجودة الروابط الخلفية</li>
                  <li>• عمر الدومين وتاريخه</li>
                  <li>• جودة المحتوى وحداثته</li>
                  <li>• تجربة المستخدم وسرعة الموقع</li>
                  <li>• الإشارات الاجتماعية</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">تفسير النتائج:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 70-100: سلطة ممتازة</li>
                  <li>• 50-69: سلطة جيدة</li>
                  <li>• 30-49: سلطة متوسطة</li>
                  <li>• 0-29: سلطة ضعيفة</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
