"use client"

import type React from "react"
import type { Locale } from "@/i18n/config"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Search, BarChart3, ArrowRight, Award, TrendingUp, Globe, LineChart, MousePointer, Link2 } from "lucide-react"

const translations = {
  en: {
    seoLabel: "SEO ",
    heroSubtitle: "Services That Drive Your Business Forward",
    description:
      "Comprehensive SEO solutions tailored to your business needs. Free consultation to define the right search engine optimization strategy and increase your online visibility.",
    freeConsultation: "Free Consultation",
    ourServices: "Our Services",
    completeAnalysis: "Complete Analysis",
    completeAnalysisDesc: "Comprehensive site and competitor analysis",
    customStrategy: "Custom Strategy",
    customStrategyDesc: "SEO plan tailored to your needs",
    tangibleResults: "Tangible Results",
    tangibleResultsDesc: "Monthly reports and continuous improvement",
    keywords: "Keywords",
    backlinks: "Backlinks",
    technicalSeo: "Technical SEO",
    organicTrafficGrowth: "Organic Traffic Growth",
    performanceAnalysis: "Performance Analysis",
    advancedSeoReports: "Advanced SEO Reports",
  },
  ar: {
    seoLabel: "خدمات ",
    heroSubtitle: "تقود شركتك نحو الظهور",
    description:
      "حلول SEO شاملة مخصصة لاحتياجات عملك. استشارة مجانية لتحديد استراتيجية تحسين محركات البحث المناسبة وزيادة ظهورك عبر الإنترنت.",
    freeConsultation: "استشارة مجانية",
    ourServices: "خدماتنا",
    completeAnalysis: "تحليل متكامل",
    completeAnalysisDesc: "تحليل شامل للموقع والمنافسين",
    customStrategy: "استراتيجية مخصصة",
    customStrategyDesc: "خطة SEO مخصصة لاحتياجاتك",
    tangibleResults: "نتائج ملموسة",
    tangibleResultsDesc: "تقارير شهرية وتحسين مستمر",
    keywords: "كلمات مفتاحية",
    backlinks: "روابط خلفية",
    technicalSeo: "تحسين فني",
    organicTrafficGrowth: "زيادة الزوار العضويين",
    performanceAnalysis: "تحليل الأداء",
    advancedSeoReports: "تقارير SEO متقدمة",
  },
}

const SEOHeroSection = ({ locale }: { locale: Locale }) => {
  const t = translations[locale]
  const isRtl = locale === "ar"

  const [isVisible, setIsVisible] = useState(false)
  const [animateChart, setAnimateChart] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // تأخير تحريك الرسم البياني
    const timer = setTimeout(() => {
      setAnimateChart(true)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // دالة التمرير المحسنة مع تأثيرات انتقالية سلسة
  const scrollToConsultation = (e: React.MouseEvent) => {
    e.preventDefault()

    // تحديد القسم المستهدف
    const consultationSection = document.getElementById("consultation")
    if (!consultationSection) return

    // تحديد العنوان داخل القسم
    const heading = consultationSection.querySelector("h2")
    const targetElement = heading || consultationSection

    // حساب موضع التمرير مع مراعاة الهيدر الثابت (تقريبًا 80px)
    const headerOffset = 80
    const elementPosition = targetElement.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    // إنشاء تأثير وميض للعنوان
    if (heading) {
      // إضافة فئة للتأثير
      heading.classList.add("scroll-highlight")

      // إزالة الفئة بعد انتهاء التأثير
      setTimeout(() => {
        heading.classList.remove("scroll-highlight")
      }, 2000)
    }

    // التمرير بتأثير سلس ومخصص
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })

    // تحريك القسم بتأثير بسيط
    consultationSection.classList.add("section-focus")
    setTimeout(() => {
      consultationSection.classList.remove("section-focus")
    }, 1000)
  }

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 pt-20 pb-16 overflow-hidden">
      {/* Abstract background shapes - scaled down */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-webskeet-gold/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-webskeet-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-40 right-40 w-36 h-36 bg-webskeet-gold/5 rounded-full filter blur-xl animate-pulse-soft"></div>

      {/* Decorative grid pattern - reduced */}
      <div className="absolute top-10 right-10 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div key={`grid-top-${i}`} className="h-1.5 w-1.5 rounded-full bg-webskeet-blue"></div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          <div
            className={`${isRtl ? "text-right" : "text-left"} transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : isRtl ? "translate-x-10 opacity-0" : "-translate-x-10 opacity-0"}`}
          >
            {/* Heading with visual effects - slightly reduced size */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
              {locale === "ar" ? (
                <>
                  <span className="heading-gradient relative inline-block">
                    {t.seoLabel}
                    <span style={{ direction: "ltr", display: "inline-block", fontSize: "0.85em" }}>SEO</span>
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-webskeet-blue/40 to-transparent rounded-full"></span>
                  </span>{" "}
                  <span className="text-webskeet-blue relative">
                    {t.heroSubtitle}
                    <span className="absolute -bottom-1 -right-1.5 w-3/4 h-0.5 bg-webskeet-gold/40 rounded-full"></span>
                  </span>
                </>
              ) : (
                <>
                  <span className="heading-gradient relative inline-block">
                    {t.seoLabel}
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-webskeet-blue/40 to-transparent rounded-full"></span>
                  </span>
                  <span className="text-webskeet-blue relative">
                    {t.heroSubtitle}
                    <span className="absolute -bottom-1 -left-1.5 w-3/4 h-0.5 bg-webskeet-gold/40 rounded-full"></span>
                  </span>
                </>
              )}
            </h1>

            {/* Enhanced paragraph - slightly smaller text */}
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              {t.description}
            </p>

            {/* CTA buttons - slightly more compact */}
            <div className="flex flex-col sm:flex-row gap-3 justify-start">
              <a href={locale === "ar" ? "/ar/#consultation" : "/#consultation"} onClick={scrollToConsultation}>
                <Button className="btn-primary btn-3d shadow-lg shadow-primary/20 hover:shadow-primary/40 group overflow-hidden relative">
                  <span className="relative z-10 flex items-center">
                    {t.freeConsultation}
                    <ArrowRight className={`${isRtl ? "mr-2" : "ml-2"} h-4 w-4 group-hover:transform group-hover:translate-x-1 transition-transform`} />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-webskeet-blue/80 to-webskeet-blue opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </a>
              <a href="#services">
                <Button
                  variant="outline"
                  className="group border-2 hover:border-primary transition-colors relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {t.ourServices}
                    <TrendingUp className={`${isRtl ? "mr-2" : "ml-2"} h-4 w-4 group-hover:text-primary transition-colors inline-block`} />
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-webskeet-blue group-hover:w-full transition-all duration-300"></span>
                </Button>
              </a>
            </div>

            {/* Features - more compact */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1 hover:border-accent border border-transparent">
                <div className="feature-icon mb-2 mx-auto group-hover:bg-webskeet-gold/20 transition-colors">
                  <Search className="h-4 w-4" />
                </div>
                <h3 className="text-base font-semibold">{t.completeAnalysis}</h3>
                <p className="text-xs text-gray-600">{t.completeAnalysisDesc}</p>
                <div className="h-1 w-0 bg-webskeet-gold mx-auto mt-1 group-hover:w-10 transition-all duration-300"></div>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1 hover:border-accent border border-transparent">
                <div className="feature-icon mb-2 mx-auto group-hover:bg-webskeet-gold/20 transition-colors">
                  <BarChart3 className="h-4 w-4" />
                </div>
                <h3 className="text-base font-semibold">{t.customStrategy}</h3>
                <p className="text-xs text-gray-600">{t.customStrategyDesc}</p>
                <div className="h-1 w-0 bg-webskeet-gold mx-auto mt-1 group-hover:w-10 transition-all duration-300"></div>
              </div>
              <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1 hover:border-accent border border-transparent">
                <div className="feature-icon mb-2 mx-auto group-hover:bg-webskeet-gold/20 transition-colors">
                  <Award className="h-4 w-4" />
                </div>
                <h3 className="text-base font-semibold">{t.tangibleResults}</h3>
                <p className="text-xs text-gray-600">{t.tangibleResultsDesc}</p>
                <div className="h-1 w-0 bg-webskeet-gold mx-auto mt-1 group-hover:w-10 transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* Visual section - keep but scale down */}
          <div
            className={`hidden lg:block relative transform transition-all duration-1000 scale-90 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {/* Interactive SEO visualization section */}
            <div className="interactive-seo-visualization relative h-[450px] perspective-1000">
              {/* تأثير الإضاءة الخلفية */}
              <div className="absolute inset-0 bg-gradient-to-br from-webskeet-blue/5 via-webskeet-gold/10 to-webskeet-blue/5 rounded-full filter blur-3xl animate-pulse-soft"></div>

              {/* تمثيل مرئي لمحركات البحث ومواقع الويب */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60">
                {/* تمثيل كوكب جوجل (محرك البحث) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-white rounded-full shadow-xl border-4 border-webskeet-blue/20 overflow-hidden flex items-center justify-center z-10">
                  <div className="search-engine-globe relative w-full h-full">
                    {/* تدرج لوني للكرة */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-50"></div>

                    {/* خطوط الطول والعرض */}
                    <div className="absolute inset-0 flex flex-col justify-between py-3 opacity-20">
                      {[...Array(8)].map((_, i) => (
                        <div key={`lat-${i}`} className="w-full h-px bg-webskeet-blue"></div>
                      ))}
                    </div>
                    <div className="absolute inset-0 flex flex-row justify-between px-3 opacity-20">
                      {[...Array(8)].map((_, i) => (
                        <div key={`long-${i}`} className="h-full w-px bg-webskeet-blue"></div>
                      ))}
                    </div>

                    {/* رمز البحث */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <Search className="h-8 w-8 text-webskeet-blue opacity-70" />
                        <div className="absolute inset-0 bg-white opacity-30 animate-pulse-soft"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* مواقع ويب تدور حول محرك البحث */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`orbit-${i}`}
                    className="absolute top-1/2 left-1/2 rounded-full border border-gray-200"
                    style={{
                      width: `${(i + 2) * 100}px`,
                      height: `${(i + 2) * 100}px`,
                      marginLeft: `-${((i + 2) * 100) / 2}px`,
                      marginTop: `-${((i + 2) * 100) / 2}px`,
                      borderStyle: "dashed",
                      animationDuration: `${15 + i * 5}s`,
                      opacity: 0.4,
                    }}
                  >
                    {/* موقع ويب يدور حول محرك البحث */}
                    <div
                      className="absolute w-10 h-10 bg-white rounded-full shadow-lg border-2 border-accent flex items-center justify-center website-node"
                      style={{
                        top: "0",
                        left: "50%",
                        transform: "translateX(-50%) translateY(-50%)",
                        animation: `orbitRotation ${15 + i * 5}s linear infinite ${i * 2}s`,
                      }}
                    >
                      <Globe className={`h-5 w-5 text-accent`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* إعادة توزيع الكلمات المفتاحية والمكونات المتحركة */}
              {animateChart && (
                <>
                  {/* بطاقات متحركة حول الرسم البياني */}
                  <div className="absolute top-[25%] right-[15%] bg-white p-2 rounded-lg shadow-lg border border-webskeet-blue/10 transform animate-float-vertical">
                    <div className={`flex items-center gap-2 ${isRtl ? "text-right" : "text-left"}`}>
                      <span className="text-xs font-medium">{t.keywords}</span>
                      <Search className="h-3 w-3 text-webskeet-blue" />
                    </div>
                  </div>

                  <div
                    className="absolute top-[40%] left-[10%] bg-white p-2 rounded-lg shadow-lg border border-webskeet-blue/10 transform animate-slow-float"
                    style={{
                      animationDelay: "1.2s",
                    }}
                  >
                    <div className={`flex items-center gap-2 ${isRtl ? "text-right" : "text-left"}`}>
                      <span className="text-xs font-medium">{t.backlinks}</span>
                      <Link2 className="h-3 w-3 text-webskeet-blue" />
                    </div>
                  </div>

                  <div
                    className="absolute bottom-[20%] left-[25%] bg-white p-2 rounded-lg shadow-lg border border-webskeet-blue/10 transform animate-very-slow-float"
                    style={{
                      animationDelay: "0.7s",
                    }}
                  >
                    <div className={`flex items-center gap-2 ${isRtl ? "text-right" : "text-left"}`}>
                      <span className="text-xs font-medium">{t.technicalSeo}</span>
                      <BarChart3 className="h-3 w-3 text-webskeet-blue" />
                    </div>
                  </div>

                  <div
                    className="absolute bottom-[35%] right-[5%] bg-white p-2 rounded-lg shadow-lg border border-webskeet-blue/10 transform animate-float-vertical"
                    style={{
                      animationDelay: "1.5s",
                    }}
                  >
                    <div className={`flex items-center gap-2 ${isRtl ? "text-right" : "text-left"}`}>
                      <span className="text-xs font-medium">{t.organicTrafficGrowth}</span>
                      <TrendingUp className="h-3 w-3 text-accent" />
                    </div>
                  </div>

                  {/* مؤشرات الترتيب تتحرك للأعلى - تم تغيير مواضعها */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={`rank-${i}`}
                      className="absolute ranking-indicator"
                      style={{
                        bottom: `${20 + i * 15}%`,
                        left: `${10 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="text-xs font-bold text-accent">#{Math.floor(Math.random() * 5) + 1}</div>
                        <ArrowRight className="h-3 w-3 text-accent transform rotate-90" />
                      </div>
                    </div>
                  ))}
                </>
              )}

              {/* لوحة معلومات تحليلية */}
              <div className={`absolute top-5 right-5 bg-white/90 p-2 rounded-lg shadow-lg border border-gray-100 backdrop-blur-sm ${isRtl ? "text-right" : "text-left"}`}>
                <div className={`text-xs font-medium text-webskeet-blue mb-1 flex items-center ${isRtl ? "justify-end" : "justify-start"}`}>
                  <span>{t.performanceAnalysis}</span>
                  <LineChart className={`h-3 w-3 ${isRtl ? "ml-1" : "mr-1"}`} />
                </div>
                <div className={`flex gap-1.5 ${isRtl ? "justify-end" : "justify-start"}`}>
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={`bar-${i}`}
                      className="w-2 bg-gradient-to-t from-webskeet-blue/60 to-webskeet-blue/90 rounded"
                      style={{
                        height: `${12 + Math.random() * 16}px`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* شارة نتائج السيو */}
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-webskeet-blue to-webskeet-blue/80 p-2 rounded-lg text-white text-xs font-bold shadow-lg transform rotate-3 animate-slow-float">
                {t.advancedSeoReports}
              </div>

              {/* مؤشر للتفاعل */}
              <div className="absolute bottom-10 left-10 animate-bounce-slow">
                <MousePointer className="h-4 w-4 text-webskeet-blue/50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS styles */}
      <style jsx>{`
        @keyframes orbitRotation {
          from { transform: translateX(-50%) translateY(-50%) rotate(0deg) translateX(calc(100% + 30px)) rotate(0deg); }
          to { transform: translateX(-50%) translateY(-50%) rotate(360deg) translateX(calc(100% + 30px)) rotate(-360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes moveUpDown {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(-20px); opacity: 1; }
        }

        @keyframes particleMove {
          0% { opacity: 0; transform: scale(0.8) translateX(20px); }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; transform: scale(1) translateX(-20px); }
        }

        .animate-very-slow-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-slow-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulse 4s infinite ease-in-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .feature-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-center: center;
          border-radius: 50%;
          background-color: #f0f9ff;
          transition: all 0.3s ease;
        }

        .keyword-particle {
          animation: particleMove 8s infinite linear;
          opacity: 0;
        }

        .ranking-indicator {
          animation: moveUpDown 4s infinite ease-out;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}

export default SEOHeroSection
