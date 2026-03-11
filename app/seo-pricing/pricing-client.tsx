"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, FileText, Link2, Settings, PenTool, TrendingUp, Users, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function PricingClient() {
  const seoAspects = [
    {
      icon: FileText,
      title: "تحسين الصفحات الداخلية (On-Page SEO)",
      description: "تحسين العناوين، المحتوى، والربط الداخلي بين الصفحات.",
      color: "bg-blue-500",
    },
    {
      icon: Link2,
      title: "تحسين السيو الخارجي (Off-Page SEO)",
      description: "بناء الروابط، وزيادة موثوقية العلامة التجارية.",
      color: "bg-green-500",
    },
    {
      icon: Settings,
      title: "السيو التقني (Technical SEO)",
      description: "سرعة الموقع، الزحف، الفهرسة، وقابلية الاسترجاع في الذكاء الاصطناعي.",
      color: "bg-purple-500",
    },
    {
      icon: PenTool,
      title: "كتابة المحتوى واستراتيجيته (Content SEO)",
      description: "إنشاء محتوى أصلي يجذب المستخدمين ويتوافق مع خوارزميات جوجل.",
      color: "bg-orange-500",
    },
  ]

  const pricingFactors = [
    {
      icon: TrendingUp,
      title: "حجم وتعقيد موقعك",
      description: "عدد الصفحات والأقسام والوظائف التقنية",
    },
    {
      icon: Users,
      title: "مستوى المنافسة في مجالك",
      description: "قوة المنافسين وصعوبة الكلمات المفتاحية",
    },
    {
      icon: BarChart3,
      title: "كمية المحتوى والروابط المطلوبة",
      description: "حجم العمل اللازم لتحقيق النتائج المرجوة",
    },
  ]

  const includedFeatures = [
    "بحث متقدم عن الكلمات المفتاحية وتحليل المنافسين",
    "تحسين الصفحات والمحتوى الحالي",
    "تدقيق فني شامل وحلول تقنية",
    "بناء روابط استراتيجية من مصادر موثوقة",
    "تقارير شهرية توضح الأداء والنتائج",
    "متابعة مباشرة من خبير سيو مخصص لموقعك",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-webskeet-blue mb-6 text-balance">
          أسعار خدمات السيو التي تضمن لك نموًا حقيقيًا في الزيارات والعملاء
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          في ويب سكيــت، لا نقدم أسعارًا ثابتة لخدمات السيو، لأن كل موقع يختلف في أهدافه وهيكله ومستواه الحالي من
          التحسين. نقوم أولًا بإجراء استشارة وتحليل شامل للموقع لفهم وضعك بدقة، ثم نضع لك خطة سيو شهرية متكاملة تغطي جميع
          الجوانب: تحسين الصفحات، بناء الروابط، التحسين التقني، وكتابة المحتوى. هدفنا أن نساعدك على زيادة الظهور في
          محركات البحث، وجذب زيارات مؤهلة، وتحقيق نمو مستدام في عملك.
        </p>
      </section>

      {/* Why No Fixed Price Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">لماذا لا نعرض سعرًا ثابتًا؟</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            كل موقع يحتاج إلى مستوى مختلف من الجهد والاستراتيجية. لذلك يتم تحديد التكلفة بعد فهم دقيق لهذه الجوانب:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {seoAspects.map((aspect, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className={`w-12 h-12 ${aspect.color} rounded-lg flex items-center justify-center mb-4`}>
                  <aspect.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{aspect.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{aspect.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-gray-700 text-lg">
          بعد مراجعة هذه الجوانب، نُقدّر التكلفة الشهرية بناءً على حجم الموقع ومجاله وطموحاته.
        </p>
      </section>

      {/* How We Determine Cost Section */}
      <section className="bg-gradient-to-r from-webskeet-blue/5 to-webskeet-gold/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">كيف نحدد تكلفة السيو لموقعك؟</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">بعد الاستشارة المجانية وتحليل الموقع، ستحصل على:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">تقرير SEO شامل</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">يوضح أداء موقعك الحالي ونقاط القوة والضعف</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">خطة استراتيجية مخصصة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">توضح الخطوات المطلوبة للنمو وتحقيق الأهداف</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">عرض خطة سيو شهرية</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">شاملة تحتوي على جميع عناصر التحسين الأربعة</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-webskeet-blue mb-6 text-center">وتعتمد التكلفة الشهرية على:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-webskeet-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <factor.icon className="h-6 w-6 text-webskeet-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{factor.title}</h4>
                    <p className="text-gray-600 text-sm">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">ما الذي تتضمنه كل خطة سيو؟</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">جميع خطط السيو التي نقدمها تشمل:</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Investment Section */}
      <section className="bg-gradient-to-r from-webskeet-blue/5 to-webskeet-gold/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-6">الاستثمار في السيو يبدأ بالفهم</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            نحن لا نبيع باقات جاهزة، بل نصمم خطة مخصصة تتوافق مع أهدافك الفعلية. لذلك تبدأ كل شراكة بيننا من جلسة
            استشارة لفهم موقعك وتحدياتك وأهدافك المستقبلية. بعد الاستشارة، ستحصل على عرض واضح يوضح التكلفة الشهرية
            المناسبة لموقعك بناءً على احتياجاته الحقيقية.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-webskeet-blue to-webskeet-blue/90 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهز لتحديد خطة السيو المناسبة لموقعك؟</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            ابدأ الآن باكتشاف فرص النمو في موقعك من خلال استشارة مجانية مع خبير السيو لدينا. احجز جلستك الآن وابدأ في
            بناء خطة سيو شاملة تساعدك على مضاعفة زياراتك وأرباحك.
          </p>
          <Link href="/#consultation">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              احجز استشارتك الآن
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
