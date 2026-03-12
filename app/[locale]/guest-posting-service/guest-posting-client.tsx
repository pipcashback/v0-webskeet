"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Zap, CheckCircle2, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/i18n/config"

const translations = {
  en: {
    heroTitle: "Boost Your Site with High-Quality Guest Posts",
    heroTitleHighlight: "Or Earn from Publishing Articles on Your Site",
    heroSubtitle: "An Arabic platform connecting website owners with article writers to increase traffic and profits",
    registerButton: "Register Now for Free",
    contactButton: "Contact Us",
    benefitsTitle: "Why Choose Our Guest Post Service?",
    benefitsDesc: "We provide comprehensive solutions to improve your site or generate additional revenue",
    benefit1Title: "Improve Your Search Engine Rankings",
    benefit1Desc: "Get high-quality backlinks from trusted websites to boost your site's authority and improve its ranking in search results.",
    benefit2Title: "Attract New Interested Visitors",
    benefit2Desc: "Expand your reach and attract a new audience interested in your content by publishing on sites related to your niche.",
    benefit3Title: "Generate Additional Revenue from Your Site",
    benefit3Desc: "If you own a website, you can earn additional income by publishing high-quality guest post articles for other website owners.",
    benefit4Title: "Fast and Easy Process",
    benefit4Desc: "A simple platform that connects you directly with suitable website owners, with clear procedures and smooth communication for an excellent experience.",
    howItWorksTitle: "How Does the Service Work?",
    howItWorksDesc: "A simple and fast process in clear steps",
    step1Title: "Register Your Site or Needs",
    step1Desc: "Fill out the simple registration form with your site information or guest post needs",
    step2Title: "Choose the Right Opportunity",
    step2Desc: "Browse available sites or wait for offers from interested website owners",
    step3Title: "Publish Content or Earn Revenue",
    step3Desc: "Agree on details and start publishing content or earning revenue",
    ctaTitle: "Start Now to Improve Your Site or Earn Additional Revenue",
    ctaDesc: "Join hundreds of Arabic website owners who benefit from our platform",
    ctaButton: "Register Your Site Free Now",
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Answers to the most important questions about the guest post service",
    faq1Q: "What is a Guest Post?",
    faq1A: "A guest post is an article published on another website that contains a link back to your site. It helps improve SEO, increase visitors, and build authority in your niche.",
    faq2Q: "How can I earn from my site through guest posts?",
    faq2A: "You can register your site on our platform and allow other website owners to publish high-quality articles on your site for an agreed-upon fee. This provides you with additional income and valuable content for your site.",
    faq3Q: "Is the service free?",
    faq3A: "Yes, registration on the platform is completely free. You can register your site or search for guest post opportunities without any upfront fees. Fees only apply when a deal is completed between both parties.",
    faq4Q: "What are the requirements for accepting sites on the platform?",
    faq4A: "We accept Arabic websites that contain original, high-quality content and follow basic SEO standards. The site must be active and provide real value to visitors.",
    backHome: "Back to Home Page",
  },
  ar: {
    heroTitle: "عزز موقعك مع جيست بوست عالي الجودة",
    heroTitleHighlight: "أو اربح من نشر مقالات على موقعك",
    heroSubtitle: "منصة عربية تربط أصحاب المواقع بكتاب المقالات لزيادة الزوار والأرباح",
    registerButton: "سجل الآن مجانا\u064B",
    contactButton: "تواصل معنا",
    benefitsTitle: "لماذا تختار خدمة الجيست بوست؟",
    benefitsDesc: "نوفر لك حلولا\u064B شاملة لتحسين موقعك أو تحقيق أرباح إضافية",
    benefit1Title: "تحسين ترتيب موقعك في محركات البحث",
    benefit1Desc: "احصل على روابط خلفية (backlinks) عالية الجودة من مواقع موثوقة لتعزيز سلطة موقعك وتحسين ترتيبه في نتائج البحث.",
    benefit2Title: "جذب زوار جدد مهتمين",
    benefit2Desc: "وس\u0651ع نطاق وصولك واجذب جمهورا\u064B جديدا\u064B مهتما\u064B بمحتواك من خلال النشر على مواقع ذات صلة بمجالك.",
    benefit3Title: "حقق أرباح إضافية من موقعك",
    benefit3Desc: "إذا كنت تملك موقعا\u064B إلكترونيا\u064B، يمكنك تحقيق دخل إضافي من خلال نشر مقالات جيست بوست عالية الجودة لأصحاب المواقع الأخرى.",
    benefit4Title: "عملية سريعة وسهلة",
    benefit4Desc: "منصة بسيطة تربطك مباشرة بأصحاب المواقع المناسبة، مع إجراءات واضحة وتواصل سلس لضمان تجربة ممتازة.",
    howItWorksTitle: "كيف تعمل الخدمة؟",
    howItWorksDesc: "عملية بسيطة وسريعة في خطوات واضحة",
    step1Title: "سجل موقعك أو احتياجاتك",
    step1Desc: "املأ نموذج التسجيل البسيط بمعلومات موقعك أو احتياجاتك من الجيست بوست",
    step2Title: "اختر الفرصة المناسبة",
    step2Desc: "تصفح المواقع المتاحة أو انتظر العروض من أصحاب المواقع المهتمين",
    step3Title: "انشر المحتوى أو احصل على أرباح",
    step3Desc: "اتفق على التفاصيل وابدأ في نشر المحتوى أو تحقيق الأرباح",
    ctaTitle: "ابدأ الآن في تحسين موقعك أو تحقيق أرباح إضافية",
    ctaDesc: "انضم إلى مئات أصحاب المواقع العربية الذين يستفيدون من منصتنا",
    ctaButton: "سجل موقعك مجانا\u064B الآن",
    faqTitle: "الأسئلة الشائعة",
    faqDesc: "إجابات على أهم الأسئلة حول خدمة الجيست بوست",
    faq1Q: "ما هو الجيست بوست (Guest Post)؟",
    faq1A: "الجيست بوست هو مقال يتم نشره على موقع إلكتروني آخر غير موقعك، ويحتوي على رابط يشير إلى موقعك. يساعد في تحسين السيو وزيادة الزوار وبناء السلطة في مجالك.",
    faq2Q: "كيف يمكنني الربح من موقعي عبر الجيست بوست؟",
    faq2A: "يمكنك تسجيل موقعك في منصتنا والسماح لأصحاب المواقع الأخرى بنشر مقالات عالية الجودة على موقعك مقابل رسوم متفق عليها. هذا يوفر لك مصدر دخل إضافي ومحتوى قيم لموقعك.",
    faq3Q: "هل الخدمة مجانية؟",
    faq3A: "نعم، التسجيل في المنصة مجاني تماما\u064B. يمكنك تسجيل موقعك أو البحث عن فرص جيست بوست دون أي رسوم مقدمة. الرسوم تكون فقط عند إتمام صفقة بين الطرفين.",
    faq4Q: "ما هي شروط قبول المواقع في المنصة؟",
    faq4A: "نقبل المواقع العربية التي تحتوي على محتوى أصلي وجودة عالية، وتلتزم بمعايير السيو الأساسية. يجب أن يكون الموقع نشطا\u064B ويقدم قيمة حقيقية للزوار.",
    backHome: "العودة إلى الصفحة الرئيسية",
  },
}

export default function GuestPostingClient({ locale }: { locale: Locale }) {
  const t = translations[locale]
  const lp = (path: string) => locale === "ar" ? `/ar${path}` : path

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: t.benefit1Title,
      description: t.benefit1Desc,
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: t.benefit2Title,
      description: t.benefit2Desc,
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: t.benefit3Title,
      description: t.benefit3Desc,
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: t.benefit4Title,
      description: t.benefit4Desc,
    },
  ]

  const faqItems = [
    { question: t.faq1Q, answer: t.faq1A },
    { question: t.faq2Q, answer: t.faq2A },
    { question: t.faq3Q, answer: t.faq3A },
    { question: t.faq4Q, answer: t.faq4A },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t.heroTitle}
            <br />
            <span className="text-blue-600">{t.heroTitleHighlight}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            {t.heroSubtitle}
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
                {t.registerButton}
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              asChild
            >
              <Link href={lp("/contact")} className="flex items-center gap-2">
                {t.contactButton}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.benefitsTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.benefitsDesc}
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.howItWorksTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.howItWorksDesc}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center border-2 hover:border-blue-600 transition-all">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.step1Title}</h3>
              <p className="text-gray-600">{t.step1Desc}</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2 hover:border-blue-600 transition-all">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.step2Title}</h3>
              <p className="text-gray-600">{t.step2Desc}</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2 hover:border-blue-600 transition-all">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.step3Title}</h3>
              <p className="text-gray-600">{t.step3Desc}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl my-16">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-xl mb-8 opacity-90">{t.ctaDesc}</p>
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
              {t.ctaButton}
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.faqTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.faqDesc}</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <Card key={index} className="border-2 hover:border-blue-600 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-2">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  {item.question}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${locale === "ar" ? "mr-8" : "ml-8"}`}>{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Back to Home */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href={lp("/")} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t.backHome}
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
