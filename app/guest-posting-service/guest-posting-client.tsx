"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Zap, CheckCircle2, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function GuestPostingClient() {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "تحسين ترتيب موقعك في محركات البحث",
      description:
        "احصل على روابط خلفية (backlinks) عالية الجودة من مواقع موثوقة لتعزيز سلطة موقعك وتحسين ترتيبه في نتائج البحث.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "جذب زوار جدد مهتمين",
      description: "وسّع نطاق وصولك واجذب جمهورًا جديدًا مهتمًا بمحتواك من خلال النشر على مواقع ذات صلة بمجالك.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: "حقق أرباح إضافية من موقعك",
      description:
        "إذا كنت تملك موقعًا إلكترونيًا، يمكنك تحقيق دخل إضافي من خلال نشر مقالات جيست بوست عالية الجودة لأصحاب المواقع الأخرى.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "عملية سريعة وسهلة",
      description: "منصة بسيطة تربطك مباشرة بأصحاب المواقع المناسبة، مع إجراءات واضحة وتواصل سلس لضمان تجربة ممتازة.",
    },
  ]

  const faqItems = [
    {
      question: "ما هو الجيست بوست (Guest Post)؟",
      answer:
        "الجيست بوست هو مقال يتم نشره على موقع إلكتروني آخر غير موقعك، ويحتوي على رابط يشير إلى موقعك. يساعد في تحسين السيو وزيادة الزوار وبناء السلطة في مجالك.",
    },
    {
      question: "كيف يمكنني الربح من موقعي عبر الجيست بوست؟",
      answer:
        "يمكنك تسجيل موقعك في منصتنا والسماح لأصحاب المواقع الأخرى بنشر مقالات عالية الجودة على موقعك مقابل رسوم متفق عليها. هذا يوفر لك مصدر دخل إضافي ومحتوى قيم لموقعك.",
    },
    {
      question: "هل الخدمة مجانية؟",
      answer:
        "نعم، التسجيل في المنصة مجاني تمامًا. يمكنك تسجيل موقعك أو البحث عن فرص جيست بوست دون أي رسوم مقدمة. الرسوم تكون فقط عند إتمام صفقة بين الطرفين.",
    },
    {
      question: "ما هي شروط قبول المواقع في المنصة؟",
      answer:
        "نقبل المواقع العربية التي تحتوي على محتوى أصلي وجودة عالية، وتلتزم بمعايير السيو الأساسية. يجب أن يكون الموقع نشطًا ويقدم قيمة حقيقية للزوار.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            عزز موقعك مع جيست بوست عالي الجودة
            <br />
            <span className="text-blue-600">أو اربح من نشر مقالات على موقعك</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            منصة عربية تربط أصحاب المواقع بكتاب المقالات لزيادة الزوار والأرباح
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe1fL7uieK6uBxWfpAZvAQhKc7dRzBXqXUSgojGg2x0-PpAlQ/viewform"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-2"
              >
                سجل الآن مجانًا
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                تواصل معنا
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">لماذا تختار خدمة الجيست بوست؟</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نوفر لك حلولاً شاملة لتحسين موقعك أو تحقيق أرباح إضافية
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:border-blue-600 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">كيف تعمل الخدمة؟</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">عملية بسيطة وسريعة في خطوات واضحة</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center border-2 hover:border-blue-600 transition-all">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">سجل موقعك أو احتياجاتك</h3>
              <p className="text-gray-600">املأ نموذج التسجيل البسيط بمعلومات موقعك أو احتياجاتك من الجيست بوست</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2 hover:border-blue-600 transition-all">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">اختر الفرصة المناسبة</h3>
              <p className="text-gray-600">تصفح المواقع المتاحة أو انتظر العروض من أصحاب المواقع المهتمين</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2 hover:border-blue-600 transition-all">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">انشر المحتوى أو احصل على أرباح</h3>
              <p className="text-gray-600">اتفق على التفاصيل وابدأ في نشر المحتوى أو تحقيق الأرباح</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl my-16">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ابدأ الآن في تحسين موقعك أو تحقيق أرباح إضافية</h2>
          <p className="text-xl mb-8 opacity-90">انضم إلى مئات أصحاب المواقع العربية الذين يستفيدون من منصتنا</p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe1fL7uieK6uBxWfpAZvAQhKc7dRzBXqXUSgojGg2x0-PpAlQ/viewform"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center gap-2"
            >
              سجل موقعك مجانًا الآن
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">الأسئلة الشائعة</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">إجابات على أهم الأسئلة حول خدمة الجيست بوست</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <Card key={index} className="border-2 hover:border-blue-600 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-2">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed mr-8">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Back to Home */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              العودة إلى الصفحة الرئيسية
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
