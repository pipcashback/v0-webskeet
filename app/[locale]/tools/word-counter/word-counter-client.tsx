"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Copy, RotateCcw, FileText, Clock, Hash, Type, AlignLeft } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { Locale } from "@/i18n/config"

interface TextStats {
  words: number
  characters: number
  charactersNoSpaces: number
  paragraphs: number
  sentences: number
  readingTime: number
}

const translations = {
  en: {
    title: "Free Word Counter",
    description:
      "Free tool to count words, characters, paragraphs, and sentences in Arabic and English text with estimated reading time",
    inputCardTitle: "Enter text here",
    placeholder: "Type or paste text here to count words and characters...",
    copyTextButton: "Copy Text",
    clearTextButton: "Clear Text",
    statsCardTitle: "Text Statistics",
    labelWords: "Words",
    labelCharsWithSpaces: "Characters (with spaces)",
    labelCharsNoSpaces: "Characters (without spaces)",
    labelParagraphs: "Paragraphs",
    labelSentences: "Sentences",
    labelReadingTime: "Estimated Reading Time",
    readingTimeUnit: "min",
    copyStatsButton: "Copy Statistics",
    tipsTitle: "Useful Tips",
    tip1: "Average reading speed used is 200 words per minute",
    tip2: "You can copy text or statistics with one click",
    tip3: "The tool supports Arabic and English text",
    tip4: "Statistics are calculated instantly while typing",
    ctaTitle: "Need help with content writing?",
    ctaDescription:
      "Our content and SEO experts are ready to help you write high-quality, search engine optimized content",
    ctaConsultation: "Get a Free Consultation",
    ctaBrowseTools: "Browse More Tools",
    toastAlertTitle: "Alert",
    toastNoText: "No text to copy",
    toastCopiedTitle: "Copied Successfully",
    toastCopiedText: "Text copied to clipboard",
    toastCopyError: "Copy Error",
    toastCopyErrorDesc: "Error copying text",
    toastCleared: "Cleared",
    toastClearedDesc: "Text cleared successfully",
    toastStatsCopied: "Copied Successfully",
    toastStatsCopiedDesc: "Statistics copied to clipboard",
  },
  ar: {
    title: "عداد الكلمات المجاني",
    description:
      "أداة مجانية لحساب عدد الكلمات والأحرف والفقرات والجمل في النصوص العربية والإنجليزية مع حساب وقت القراءة المقدر",
    inputCardTitle: "أدخل النص هنا",
    placeholder: "اكتب أو الصق النص هنا لحساب عدد الكلمات والأحرف...",
    copyTextButton: "نسخ النص",
    clearTextButton: "مسح النص",
    statsCardTitle: "إحصائيات النص",
    labelWords: "الكلمات",
    labelCharsWithSpaces: "الأحرف (مع المسافات)",
    labelCharsNoSpaces: "الأحرف (بدون مسافات)",
    labelParagraphs: "الفقرات",
    labelSentences: "الجمل",
    labelReadingTime: "وقت القراءة المقدر",
    readingTimeUnit: "دقيقة",
    copyStatsButton: "نسخ الإحصائيات",
    tipsTitle: "نصائح مفيدة",
    tip1: "متوسط سرعة القراءة المستخدمة هو 200 كلمة في الدقيقة",
    tip2: "يمكنك نسخ النص أو الإحصائيات بنقرة واحدة",
    tip3: "الأداة تدعم النصوص العربية والإنجليزية",
    tip4: "يتم حساب الإحصائيات فورياً أثناء الكتابة",
    ctaTitle: "هل تحتاج مساعدة في كتابة المحتوى؟",
    ctaDescription:
      "فريقنا من خبراء المحتوى والسيو جاهز لمساعدتك في كتابة محتوى عالي الجودة ومحسن لمحركات البحث",
    ctaConsultation: "احصل على استشارة مجانية",
    ctaBrowseTools: "تصفح المزيد من الأدوات",
    toastAlertTitle: "تنبيه",
    toastNoText: "لا يوجد نص للنسخ",
    toastCopiedTitle: "تم النسخ بنجاح",
    toastCopiedText: "تم نسخ النص إلى الحافظة",
    toastCopyError: "خطأ في النسخ",
    toastCopyErrorDesc: "حدث خطأ أثناء نسخ النص",
    toastCleared: "تم المسح",
    toastClearedDesc: "تم مسح النص بنجاح",
    toastStatsCopied: "تم النسخ بنجاح",
    toastStatsCopiedDesc: "تم نسخ الإحصائيات إلى الحافظة",
  },
}

export default function WordCounterClient({ locale }: { locale: Locale }) {
  const [text, setText] = useState("")
  const [stats, setStats] = useState<TextStats>({
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    paragraphs: 0,
    sentences: 0,
    readingTime: 0,
  })
  const { toast } = useToast()
  const t = translations[locale]
  const lp = (path: string) => (locale === "ar" ? `/ar${path}` : path)

  const calculateStats = (inputText: string): TextStats => {
    if (!inputText.trim()) {
      return {
        words: 0,
        characters: 0,
        charactersNoSpaces: 0,
        paragraphs: 0,
        sentences: 0,
        readingTime: 0,
      }
    }

    const words = inputText
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length

    const characters = inputText.length
    const charactersNoSpaces = inputText.replace(/\s/g, "").length

    const paragraphs = inputText.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length

    const sentences = inputText.split(/[.!?؟।]+/).filter((s) => s.trim().length > 0).length

    const readingTime = Math.ceil(words / 200)

    return {
      words,
      characters,
      charactersNoSpaces,
      paragraphs,
      sentences,
      readingTime,
    }
  }

  useEffect(() => {
    setStats(calculateStats(text))
  }, [text])

  const copyText = async () => {
    if (!text.trim()) {
      toast({
        title: t.toastAlertTitle,
        description: t.toastNoText,
        variant: "destructive",
      })
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: t.toastCopiedTitle,
        description: t.toastCopiedText,
      })
    } catch (error) {
      toast({
        title: t.toastCopyError,
        description: t.toastCopyErrorDesc,
        variant: "destructive",
      })
    }
  }

  const clearText = () => {
    setText("")
    toast({
      title: t.toastCleared,
      description: t.toastClearedDesc,
    })
  }

  const copyStats = async () => {
    const statsText =
      locale === "ar"
        ? `إحصائيات النص:\nالكلمات: ${stats.words}\nالأحرف (مع المسافات): ${stats.characters}\nالأحرف (بدون مسافات): ${stats.charactersNoSpaces}\nالفقرات: ${stats.paragraphs}\nالجمل: ${stats.sentences}\nوقت القراءة المقدر: ${stats.readingTime} دقيقة`
        : `Text Statistics:\nWords: ${stats.words}\nCharacters (with spaces): ${stats.characters}\nCharacters (without spaces): ${stats.charactersNoSpaces}\nParagraphs: ${stats.paragraphs}\nSentences: ${stats.sentences}\nEstimated reading time: ${stats.readingTime} min`

    try {
      await navigator.clipboard.writeText(statsText)
      toast({
        title: t.toastStatsCopied,
        description: t.toastStatsCopiedDesc,
      })
    } catch (error) {
      toast({
        title: t.toastCopyError,
        description: t.toastCopyErrorDesc,
        variant: "destructive",
      })
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Hash className="h-8 w-8 text-webskeet-blue" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-webskeet-blue">{t.title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">{t.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Text Input Section */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-webskeet-blue" />
                {t.inputCardTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={t.placeholder}
                className="min-h-[400px] text-base leading-relaxed resize-none"
                dir="auto"
              />

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                <Button
                  onClick={copyText}
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent"
                  disabled={!text.trim()}
                >
                  <Copy className="h-4 w-4" />
                  {t.copyTextButton}
                </Button>
                <Button
                  onClick={clearText}
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent"
                  disabled={!text.trim()}
                >
                  <RotateCcw className="h-4 w-4" />
                  {t.clearTextButton}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Section */}
        <div className="space-y-6">
          {/* Main Stats Card */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="h-5 w-5 text-webskeet-blue" />
                {t.statsCardTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Words */}
              <div className="flex items-center justify-between p-3 bg-webskeet-blue/5 rounded-lg">
                <div className="flex items-center gap-2">
                  <Hash className="h-4 w-4 text-webskeet-blue" />
                  <span className="font-medium">{t.labelWords}</span>
                </div>
                <Badge variant="secondary" className="text-lg font-bold">
                  {stats.words.toLocaleString()}
                </Badge>
              </div>

              {/* Characters with spaces */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Type className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">{t.labelCharsWithSpaces}</span>
                </div>
                <Badge variant="outline" className="text-lg font-bold">
                  {stats.characters.toLocaleString()}
                </Badge>
              </div>

              {/* Characters without spaces */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Type className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">{t.labelCharsNoSpaces}</span>
                </div>
                <Badge variant="outline" className="text-lg font-bold">
                  {stats.charactersNoSpaces.toLocaleString()}
                </Badge>
              </div>

              {/* Paragraphs */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <AlignLeft className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">{t.labelParagraphs}</span>
                </div>
                <Badge variant="outline" className="text-lg font-bold">
                  {stats.paragraphs.toLocaleString()}
                </Badge>
              </div>

              {/* Sentences */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">{t.labelSentences}</span>
                </div>
                <Badge variant="outline" className="text-lg font-bold">
                  {stats.sentences.toLocaleString()}
                </Badge>
              </div>

              {/* Reading Time */}
              <div className="flex items-center justify-between p-3 bg-webskeet-gold/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-webskeet-gold" />
                  <span className="font-medium">{t.labelReadingTime}</span>
                </div>
                <Badge className="bg-webskeet-gold text-white text-lg font-bold">
                  {stats.readingTime} {t.readingTimeUnit}
                </Badge>
              </div>

              {/* Copy Stats Button */}
              <Button
                onClick={copyStats}
                className="w-full bg-webskeet-blue hover:bg-webskeet-blue/90 text-white"
                disabled={!text.trim()}
              >
                <Copy className="h-4 w-4 mr-2" />
                {t.copyStatsButton}
              </Button>
            </CardContent>
          </Card>

          {/* Tips Card */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-lg">{t.tipsTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-webskeet-blue rounded-full mt-2 flex-shrink-0"></div>
                <p>{t.tip1}</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-webskeet-blue rounded-full mt-2 flex-shrink-0"></div>
                <p>{t.tip2}</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-webskeet-blue rounded-full mt-2 flex-shrink-0"></div>
                <p>{t.tip3}</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-webskeet-blue rounded-full mt-2 flex-shrink-0"></div>
                <p>{t.tip4}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <Card className="bg-gradient-to-br from-webskeet-blue/5 to-webskeet-gold/5 border-none shadow-lg max-w-4xl mx-auto">
          <CardContent className="pt-8 pb-8">
            <h2 className="text-2xl font-bold mb-4">{t.ctaTitle}</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={lp("/#consultation")}>
                <Button className="bg-webskeet-blue hover:bg-webskeet-blue/90 text-white px-8 py-3">
                  {t.ctaConsultation}
                </Button>
              </a>
              <a href={lp("/tools")}>
                <Button variant="outline" className="px-8 py-3 border-webskeet-blue text-webskeet-blue bg-transparent">
                  {t.ctaBrowseTools}
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
