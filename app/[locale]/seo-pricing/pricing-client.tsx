"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, FileText, Link2, Settings, PenTool, TrendingUp, Users, BarChart3 } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/i18n/config"

const translations = {
  en: {
    heroTitle: "SEO Service Pricing That Guarantees Real Growth in Traffic and Clients",
    heroDesc: "At WebSkeet, we don't offer fixed prices for SEO services because every website differs in its goals, structure, and current level of optimization. We first conduct a consultation and comprehensive site analysis to understand your situation precisely, then create a comprehensive monthly SEO plan covering all aspects: page optimization, link building, technical optimization, and content writing. Our goal is to help you increase search engine visibility, attract qualified traffic, and achieve sustainable growth for your business.",
    whyNoFixedTitle: "Why Don't We Show a Fixed Price?",
    whyNoFixedDesc: "Every website requires a different level of effort and strategy. Therefore, the cost is determined after a thorough understanding of these aspects:",
    aspect1Title: "On-Page SEO",
    aspect1Desc: "Optimizing titles, content, and internal linking between pages.",
    aspect2Title: "Off-Page SEO",
    aspect2Desc: "Building links and increasing brand authority.",
    aspect3Title: "Technical SEO",
    aspect3Desc: "Site speed, crawling, indexing, and AI retrievability.",
    aspect4Title: "Content SEO",
    aspect4Desc: "Creating original content that attracts users and aligns with Google's algorithms.",
    afterReviewText: "After reviewing these aspects, we estimate the monthly cost based on the site's size, industry, and ambitions.",
    howDetermineTitle: "How Do We Determine SEO Cost for Your Site?",
    howDetermineDesc: "After the free consultation and site analysis, you will receive:",
    report1Title: "Comprehensive SEO Report",
    report1Desc: "Shows your current site performance, strengths, and weaknesses",
    report2Title: "Custom Strategic Plan",
    report2Desc: "Outlines the steps needed for growth and achieving goals",
    report3Title: "Monthly SEO Plan Proposal",
    report3Desc: "Comprehensive plan containing all four optimization elements",
    costDependsTitle: "The monthly cost depends on:",
    factor1Title: "Size and Complexity of Your Site",
    factor1Desc: "Number of pages, sections, and technical functions",
    factor2Title: "Competition Level in Your Industry",
    factor2Desc: "Competitor strength and keyword difficulty",
    factor3Title: "Content and Links Required",
    factor3Desc: "Volume of work needed to achieve desired results",
    whatsIncludedTitle: "What's Included in Every SEO Plan?",
    whatsIncludedDesc: "All SEO plans we offer include:",
    feature1: "Advanced keyword research and competitor analysis",
    feature2: "On-page and existing content optimization",
    feature3: "Comprehensive technical audit and solutions",
    feature4: "Strategic link building from trusted sources",
    feature5: "Monthly reports showing performance and results",
    feature6: "Direct follow-up from a dedicated SEO expert",
    investmentTitle: "Investing in SEO Starts with Understanding",
    investmentDesc: "We don't sell ready-made packages; instead, we design a custom plan that aligns with your actual goals. That's why every partnership starts with a consultation session to understand your site, challenges, and future goals. After the consultation, you'll receive a clear proposal showing the appropriate monthly cost for your site based on its real needs.",
    ctaTitle: "Ready to Determine the Right SEO Plan for Your Site?",
    ctaDesc: "Start now by discovering growth opportunities for your site through a free consultation with our SEO expert. Book your session now and start building a comprehensive SEO plan to multiply your traffic and profits.",
    ctaButton: "Book Your Consultation Now",
  },
  ar: {
    heroTitle: "أسعار خدمات السيو التي تضمن لك نموا\u064B حقيقيا\u064B في الزيارات والعملاء",
    heroDesc: "في ويب سكيــت، لا نقدم أسعارا\u064B ثابتة لخدمات السيو، لأن كل موقع يختلف في أهدافه وهيكله ومستواه الحالي من التحسين. نقوم أولا\u064B بإجراء استشارة وتحليل شامل للموقع لفهم وضعك بدقة، ثم نضع لك خطة سيو شهرية متكاملة تغطي جميع الجوانب: تحسين الصفحات، بناء الروابط، التحسين التقني، وكتابة المحتوى. هدفنا أن نساعدك على زيادة الظهور في محركات البحث، وجذب زيارات مؤهلة، وتحقيق نمو مستدام في عملك.",
    whyNoFixedTitle: "لماذا لا نعرض سعرا\u064B ثابتا\u064B؟",
    whyNoFixedDesc: "كل موقع يحتاج إلى مستوى مختلف من الجهد والاستراتيجية. لذلك يتم تحديد التكلفة بعد فهم دقيق لهذه الجوانب:",
    aspect1Title: "تحسين الصفحات الداخلية (On-Page SEO)",
    aspect1Desc: "تحسين العناوين، المحتوى، والربط الداخلي بين الصفحات.",
    aspect2Title: "تحسين السيو الخارجي (Off-Page SEO)",
    aspect2Desc: "بناء الروابط، وزيادة موثوقية العلامة التجارية.",
    aspect3Title: "السيو التقني (Technical SEO)",
    aspect3Desc: "سرعة الموقع، الزحف، الفهرسة، وقابلية الاسترجاع في الذكاء الاصطناعي.",
    aspect4Title: "كتابة المحتوى واستراتيجيته (Content SEO)",
    aspect4Desc: "إنشاء محتوى أصلي يجذب المستخدمين ويتوافق مع خوارزميات جوجل.",
    afterReviewText: "بعد مراجعة هذه الجوانب، نُقد\u0651ر التكلفة الشهرية بناء\u064B على حجم الموقع ومجاله وطموحاته.",
    howDetermineTitle: "كيف نحدد تكلفة السيو لموقعك؟",
    howDetermineDesc: "بعد الاستشارة المجانية وتحليل الموقع، ستحصل على:",
    report1Title: "تقرير SEO شامل",
    report1Desc: "يوضح أداء موقعك الحالي ونقاط القوة والضعف",
    report2Title: "خطة استراتيجية مخصصة",
    report2Desc: "توضح الخطوات المطلوبة للنمو وتحقيق الأهداف",
    report3Title: "عرض خطة سيو شهرية",
    report3Desc: "شاملة تحتوي على جميع عناصر التحسين الأربعة",
    costDependsTitle: "وتعتمد التكلفة الشهرية على:",
    factor1Title: "حجم وتعقيد موقعك",
    factor1Desc: "عدد الصفحات والأقسام والوظائف التقنية",
    factor2Title: "مستوى المنافسة في مجالك",
    factor2Desc: "قوة المنافسين وصعوبة الكلمات المفتاحية",
    factor3Title: "كمية المحتوى والروابط المطلوبة",
    factor3Desc: "حجم العمل اللازم لتحقيق النتائج المرجوة",
    whatsIncludedTitle: "ما الذي تتضمنه كل خطة سيو؟",
    whatsIncludedDesc: "جميع خطط السيو التي نقدمها تشمل:",
    feature1: "بحث متقدم عن الكلمات المفتاحية وتحليل المنافسين",
    feature2: "تحسين الصفحات والمحتوى الحالي",
    feature3: "تدقيق فني شامل وحلول تقنية",
    feature4: "بناء روابط استراتيجية من مصادر موثوقة",
    feature5: "تقارير شهرية توضح الأداء والنتائج",
    feature6: "متابعة مباشرة من خبير سيو مخصص لموقعك",
    investmentTitle: "الاستثمار في السيو يبدأ بالفهم",
    investmentDesc: "نحن لا نبيع باقات جاهزة، بل نصمم خطة مخصصة تتوافق مع أهدافك الفعلية. لذلك تبدأ كل شراكة بيننا من جلسة استشارة لفهم موقعك وتحدياتك وأهدافك المستقبلية. بعد الاستشارة، ستحصل على عرض واضح يوضح التكلفة الشهرية المناسبة لموقعك بناء\u064B على احتياجاته الحقيقية.",
    ctaTitle: "جاهز لتحديد خطة السيو المناسبة لموقعك؟",
    ctaDesc: "ابدأ الآن باكتشاف فرص النمو في موقعك من خلال استشارة مجانية مع خبير السيو لدينا. احجز جلستك الآن وابدأ في بناء خطة سيو شاملة تساعدك على مضاعفة زياراتك وأرباحك.",
    ctaButton: "احجز استشارتك الآن",
  },
}

export default function PricingClient({ locale }: { locale: Locale }) {
  const t = translations[locale]
  const lp = (path: string) => locale === "ar" ? `/ar${path}` : path

  const seoAspects = [
    {
      icon: FileText,
      title: t.aspect1Title,
      description: t.aspect1Desc,
      color: "bg-blue-500",
    },
    {
      icon: Link2,
      title: t.aspect2Title,
      description: t.aspect2Desc,
      color: "bg-green-500",
    },
    {
      icon: Settings,
      title: t.aspect3Title,
      description: t.aspect3Desc,
      color: "bg-purple-500",
    },
    {
      icon: PenTool,
      title: t.aspect4Title,
      description: t.aspect4Desc,
      color: "bg-orange-500",
    },
  ]

  const pricingFactors = [
    {
      icon: TrendingUp,
      title: t.factor1Title,
      description: t.factor1Desc,
    },
    {
      icon: Users,
      title: t.factor2Title,
      description: t.factor2Desc,
    },
    {
      icon: BarChart3,
      title: t.factor3Title,
      description: t.factor3Desc,
    },
  ]

  const includedFeatures = [
    t.feature1,
    t.feature2,
    t.feature3,
    t.feature4,
    t.feature5,
    t.feature6,
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-webskeet-blue mb-6 text-balance">
          {t.heroTitle}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          {t.heroDesc}
        </p>
      </section>

      {/* Why No Fixed Price Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">{t.whyNoFixedTitle}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t.whyNoFixedDesc}
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
          {t.afterReviewText}
        </p>
      </section>

      {/* How We Determine Cost Section */}
      <section className="bg-gradient-to-r from-webskeet-blue/5 to-webskeet-gold/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">{t.howDetermineTitle}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{t.howDetermineDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">{t.report1Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.report1Desc}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">{t.report2Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.report2Desc}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">{t.report3Title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.report3Desc}</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-webskeet-blue mb-6 text-center">{t.costDependsTitle}</h3>
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
          <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">{t.whatsIncludedTitle}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">{t.whatsIncludedDesc}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-6">{t.investmentTitle}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            {t.investmentDesc}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-webskeet-blue to-webskeet-blue/90 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.ctaDesc}
          </p>
          <Link href={lp("/#consultation")}>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              {t.ctaButton}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
