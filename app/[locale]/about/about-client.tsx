"use client"

import { Building, Globe, Users, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Locale } from "@/i18n/config"

const translations = {
  en: {
    heroTitle: "Get to Know",
    heroTitleHighlight: "WebSkeet",
    heroDesc: "An agency specializing in search engine optimization, working to enhance your digital presence and increase organic traffic to your website",
    stat1Value: "100+",
    stat1Label: "Satisfied Clients",
    stat2Value: "7+",
    stat2Label: "Years of Experience",
    stat3Value: "1000+",
    stat3Label: "Links Built",
    visionTitle: "Our Vision",
    visionDesc: "Leading the SEO market in the Middle East",
    storyBadge: "Our Story",
    storyTitle: "From the Beginning to Now",
    storyP1: "WebSkeet was founded in 2018 by a small team of SEO specialists, driven by their passion for providing effective digital marketing solutions for Arab businesses.",
    storyP2: "The company has grown to become one of the leading SEO companies in the Arab market, with offices in Egypt and the UAE, and a comprehensive team with extensive experience in all aspects of digital marketing and search engine optimization.",
    strategyTitle: "Integrated Strategy",
    strategyDesc: "We rely on well-studied plans",
    resultsTitle: "Guaranteed Results",
    resultsDesc: "Commitment to quality",
    valuesBadge: "Our Values",
    valuesTitle: "What Sets Us Apart",
    valuesDesc: "We operate according to a solid value system that ensures delivering the best results for our clients",
    value1Title: "Transparency",
    value1Desc: "We believe in providing accurate and clear reports to clients about all actions and results",
    value2Title: "Innovation",
    value2Desc: "We constantly seek the latest methods and strategies to achieve the best results",
    value3Title: "Commitment",
    value3Desc: "We are committed to achieving goals within the specified timeframe while ensuring quality",
    value4Title: "Continuous Growth",
    value4Desc: "We aim for sustainable growth for our clients through long-term strategies",
    ctaTitle: "Are you ready to improve your website's search engine visibility?",
    ctaDesc: "Let us help you achieve real growth for your website and increase targeted visitors.",
    ctaButton: "Start Now with a Free Consultation",
    imageAlt: "WebSkeet Team",
  },
  ar: {
    heroTitle: "تعرف على",
    heroTitleHighlight: "ويب سكيت",
    heroDesc: "وكالة متخصصة في تحسين محركات البحث، نعمل على تعزيز حضورك الرقمي وزيادة الزيارات العضوية لموقعك",
    stat1Value: "100+",
    stat1Label: "عميل راض\u064D",
    stat2Value: "7+",
    stat2Label: "سنوات خبرة",
    stat3Value: "1000+",
    stat3Label: "رابط تم بناؤه",
    visionTitle: "رؤيتنا",
    visionDesc: "ريادة سوق تحسين محركات البحث في الشرق الأوسط",
    storyBadge: "قصتنا",
    storyTitle: "منذ البداية وحتى الآن",
    storyP1: "تأسست شركة ويب سكيت عام 2018 بفريق صغير من المتخصصين في مجال تحسين محركات البحث، انطلاقا\u064B من شغفهم بتقديم حلول تسويقية رقمية فعالة للشركات العربية.",
    storyP2: "نمت الشركة لتصبح واحدة من الشركات الرائدة في مجال تحسين محركات البحث بالسوق العربي، مع فروع في مصر والإمارات، وفريق عمل متكامل يتمتع بخبرة واسعة في جميع جوانب التسويق الرقمي وتحسين محركات البحث.",
    strategyTitle: "استراتيجية متكاملة",
    strategyDesc: "نعتمد على خطط مدروسة",
    resultsTitle: "نتائج مضمونة",
    resultsDesc: "التزام بالجودة",
    valuesBadge: "قيمنا",
    valuesTitle: "ما يميزنا",
    valuesDesc: "نعمل وفق منظومة قيم راسخة تضمن تقديم أفضل النتائج لعملائنا",
    value1Title: "الشفافية",
    value1Desc: "نؤمن بتقديم تقارير دقيقة وواضحة للعملاء عن كل الإجراءات والنتائج",
    value2Title: "الابتكار",
    value2Desc: "نبحث دائما\u064B عن أحدث الطرق والاستراتيجيات لتحقيق أفضل النتائج",
    value3Title: "الالتزام",
    value3Desc: "نلتزم بتحقيق الأهداف ضمن الإطار الزمني المحدد مع ضمان الجودة",
    value4Title: "النمو المستمر",
    value4Desc: "نهدف لتحقيق نمو مستدام لعملائنا من خلال استراتيجيات طويلة المدى",
    ctaTitle: "هل أنت مستعد لتحسين ظهور موقعك في محركات البحث؟",
    ctaDesc: "دعنا نساعدك في تحقيق نمو حقيقي لموقعك وزيادة عدد الزوار المستهدفين.",
    ctaButton: "ابدأ الآن مع استشارة مجانية",
    imageAlt: "فريق ويب سكيت",
  },
}

export default function AboutClient({ locale }: { locale: Locale }) {
  const t = translations[locale]
  const lp = (path: string) => locale === "ar" ? `/ar${path}` : path

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-webskeet-blue/5 py-20 px-4 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-webskeet-blue/10 rounded-full opacity-70"></div>
        <div className="absolute top-1/2 left-10 w-40 h-40 bg-webskeet-blue/10 rounded-full opacity-50"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.heroTitle} <span className="text-webskeet-blue">{t.heroTitleHighlight}</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t.heroDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-webskeet-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-webskeet-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.stat1Value}</h3>
              <p className="text-gray-600">{t.stat1Label}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-webskeet-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-webskeet-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.stat2Value}</h3>
              <p className="text-gray-600">{t.stat2Label}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-webskeet-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-webskeet-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.stat3Value}</h3>
              <p className="text-gray-600">{t.stat3Label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt={t.imageAlt}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-xl object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 800px"
                  loading="lazy"
                />
                <div className={`absolute -bottom-6 ${locale === "ar" ? "-right-6" : "-left-6"} bg-white p-5 rounded-lg shadow-lg border-t-4 border-webskeet-blue`}>
                  <p className="font-bold text-lg">{t.visionTitle}</p>
                  <p className="text-gray-600">{t.visionDesc}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block mb-4">
                <span className="bg-webskeet-blue/10 text-webskeet-blue px-4 py-1 rounded-full text-sm font-medium">
                  {t.storyBadge}
                </span>
              </div>

              <h2 className="text-3xl font-bold mb-6">{t.storyTitle}</h2>

              <p className="text-lg text-gray-700 mb-6">
                {t.storyP1}
              </p>

              <p className="text-lg text-gray-700 mb-8">
                {t.storyP2}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white p-4 border border-gray-200 rounded-lg flex items-center hover:border-webskeet-blue transition-colors">
                  <div className={`bg-webskeet-blue/10 p-3 rounded-full ${locale === "ar" ? "mr-4" : "mr-4"}`}>
                    <Shield className="h-6 w-6 text-webskeet-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t.strategyTitle}</h4>
                    <p className="text-sm text-gray-600">{t.strategyDesc}</p>
                  </div>
                </div>

                <div className="bg-white p-4 border border-gray-200 rounded-lg flex items-center hover:border-webskeet-blue transition-colors">
                  <div className={`bg-webskeet-blue/10 p-3 rounded-full ${locale === "ar" ? "mr-4" : "mr-4"}`}>
                    <Award className="h-6 w-6 text-webskeet-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t.resultsTitle}</h4>
                    <p className="text-sm text-gray-600">{t.resultsDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-webskeet-blue/10 text-webskeet-blue px-4 py-1 rounded-full text-sm font-medium">
                {t.valuesBadge}
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-6">{t.valuesTitle}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t.valuesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center border-t-4 border-webskeet-blue">
              <div className="bg-webskeet-blue/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-webskeet-blue font-bold text-xl">01</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.value1Title}</h3>
              <p className="text-sm text-gray-700">{t.value1Desc}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center border-t-4 border-webskeet-blue">
              <div className="bg-webskeet-blue/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-webskeet-blue font-bold text-xl">02</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.value2Title}</h3>
              <p className="text-sm text-gray-700">{t.value2Desc}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center border-t-4 border-webskeet-blue">
              <div className="bg-webskeet-blue/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-webskeet-blue font-bold text-xl">03</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.value3Title}</h3>
              <p className="text-sm text-gray-700">{t.value3Desc}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center border-t-4 border-webskeet-blue">
              <div className="bg-webskeet-blue/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-webskeet-blue font-bold text-xl">04</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.value4Title}</h3>
              <p className="text-sm text-gray-700">{t.value4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-webskeet-blue/80 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-xl mb-8 opacity-90">{t.ctaDesc}</p>

          <Link href={lp("/#consultation")}>
            <Button className="bg-white text-webskeet-blue hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all">
              {t.ctaButton}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
