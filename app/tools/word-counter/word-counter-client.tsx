"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Copy, RotateCcw, FileText, Clock, Hash, Type, AlignLeft } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface TextStats {
  words: number
  characters: number
  charactersNoSpaces: number
  paragraphs: number
  sentences: number
  readingTime: number
}

export default function WordCounterClient() {
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

  // حساب الإحصائيات
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

    // حساب الكلمات
    const words = inputText
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length

    // حساب الأحرف
    const characters = inputText.length
    const charactersNoSpaces = inputText.replace(/\s/g, "").length

    // حساب الفقرات
    const paragraphs = inputText.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length

    // حساب الجمل (بناءً على علامات الترقيم)
    const sentences = inputText.split(/[.!?؟।]+/).filter((s) => s.trim().length > 0).length

    // حساب وقت القراءة (متوسط 200 كلمة في الدقيقة)
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

  // تحديث الإحصائيات عند تغيير النص
  useEffect(() => {
    setStats(calculateStats(text))
  }, [text])

  // نسخ النص
  const copyText = async () => {
    if (!text.trim()) {
      toast({
        title: "تنبيه",
        description: "لا يوجد نص للنسخ",
        variant: "destructive",
      })
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: "تم النسخ بنجاح",
        description: "تم نسخ النص إلى الحافظة",
      })
    } catch (error) {
      toast({
        title: "خطأ في النسخ",
        description: "حدث خطأ أثناء نسخ النص",
        variant: "destructive",
      })
    }
  }

  // مسح النص
  const clearText = () => {
    setText("")
    toast({
      title: "تم المسح",
      description: "تم مسح النص بنجاح",
    })
  }

  // نسخ الإحصائيات
  const copyStats = async () => {
    const statsText = `إحصائيات النص:
الكلمات: ${stats.words}
الأحرف (مع المسافات): ${stats.characters}
الأحرف (بدون مسافات): ${stats.charactersNoSpaces}
الفقرات: ${stats.paragraphs}
الجمل: ${stats.sentences}
وقت القراءة المقدر: ${stats.readingTime} دقيقة`

    try {
      await navigator.clipboard.writeText(statsText)
      toast({
        title: "تم النسخ بنجاح",
        description: "تم نسخ الإحصائيات إلى الحافظة",
      })
    } catch (error) {
      toast({
        title: "خطأ في النسخ",
        description: "حدث خطأ أثناء نسخ الإحصائيات",
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
        <h1 className="text-4xl font-bold mb-4 text-webskeet-blue">عداد الكلمات المجاني</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          أداة مجانية لحساب عدد الكلمات والأحرف والفقرات والجمل في النصوص العربية والإنجليزية مع حساب وقت القراءة المقدر
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Text Input Section */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-webskeet-blue" />
                أدخل النص هنا
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="اكتب أو الصق النص هنا لحساب عدد الكلمات والأحرف..."
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
                  نسخ النص
                </Button>
                <Button
                  onClick={clearText}
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent"
                  disabled={!text.trim()}
                >
                  <RotateCcw className="h-4 w-4" />
                  مسح النص
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
                إحصائيات النص
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Words */}
              <div className="flex items-center justify-between p-3 bg-webskeet-blue/5 rounded-lg">
                <div className="flex items-center gap-2">
                  <Hash className="h-4 w-4 text-webskeet-blue" />
                  <span className="font-medium">الكلمات</span>
                </div>
                <Badge variant="secondary" className="text-lg font-bold">
                  {stats.words.toLocaleString()}
                </Badge>
              </div>

              {/* Characters with spaces */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Type className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">الأحرف (مع المسافات)</span>
                </div>
                <Badge variant="outline" className="text-lg font-bold">
                  {stats.characters.toLocaleString()}
                </Badge>
              </div>

              {/* Characters without spaces */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Type className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">الأحرف (بدون مسافات)</span>
                </div>
                <Badge variant="outline" className="text-lg font-bold">
                  {stats.charactersNoSpaces.toLocaleString()}
                </Badge>
              </div>

              {/* Paragraphs */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <AlignLeft className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">الفقرات</span>
                </div>
                <Badge variant="outline" className="text-lg font-bold">
                  {stats.paragraphs.toLocaleString()}
                </Badge>
              </div>

              {/* Sentences */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">الجمل</span>
                </div>
                <Badge variant="outline" className="text-lg font-bold">
                  {stats.sentences.toLocaleString()}
                </Badge>
              </div>

              {/* Reading Time */}
              <div className="flex items-center justify-between p-3 bg-webskeet-gold/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-webskeet-gold" />
                  <span className="font-medium">وقت القراءة المقدر</span>
                </div>
                <Badge className="bg-webskeet-gold text-white text-lg font-bold">{stats.readingTime} دقيقة</Badge>
              </div>

              {/* Copy Stats Button */}
              <Button
                onClick={copyStats}
                className="w-full bg-webskeet-blue hover:bg-webskeet-blue/90 text-white"
                disabled={!text.trim()}
              >
                <Copy className="h-4 w-4 mr-2" />
                نسخ الإحصائيات
              </Button>
            </CardContent>
          </Card>

          {/* Tips Card */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-lg">نصائح مفيدة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-webskeet-blue rounded-full mt-2 flex-shrink-0"></div>
                <p>متوسط سرعة القراءة المستخدمة هو 200 كلمة في الدقيقة</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-webskeet-blue rounded-full mt-2 flex-shrink-0"></div>
                <p>يمكنك نسخ النص أو الإحصائيات بنقرة واحدة</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-webskeet-blue rounded-full mt-2 flex-shrink-0"></div>
                <p>الأداة تدعم النصوص العربية والإنجليزية</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-webskeet-blue rounded-full mt-2 flex-shrink-0"></div>
                <p>يتم حساب الإحصائيات فورياً أثناء الكتابة</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <Card className="bg-gradient-to-br from-webskeet-blue/5 to-webskeet-gold/5 border-none shadow-lg max-w-4xl mx-auto">
          <CardContent className="pt-8 pb-8">
            <h2 className="text-2xl font-bold mb-4">هل تحتاج مساعدة في كتابة المحتوى؟</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              فريقنا من خبراء المحتوى والسيو جاهز لمساعدتك في كتابة محتوى عالي الجودة ومحسن لمحركات البحث
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#consultation">
                <Button className="bg-webskeet-blue hover:bg-webskeet-blue/90 text-white px-8 py-3">
                  احصل على استشارة مجانية
                </Button>
              </a>
              <a href="/tools">
                <Button variant="outline" className="px-8 py-3 border-webskeet-blue text-webskeet-blue bg-transparent">
                  تصفح المزيد من الأدوات
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
