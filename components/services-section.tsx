import type { Locale } from "@/i18n/config"
import { Link, LineChartIcon as ChartLine, Search, Award, TrendingUp, BarChart } from "lucide-react"

const translations = {
  en: {
    ourServices: "Our Services",
    ourDistinguishedServices: "Our Distinguished Services",
    servicesDescription:
      "We offer a range of professional services to enhance your digital presence and improve your website ranking in search engines",
    backlinkBuilding: "Backlink Building",
    backlinkBuildingDesc:
      "We create strong backlinks from trusted Arabic websites with DA 30+ to boost your site authority and improve its search engine ranking.",
    backlinkFeature1: "Links from reputable Arabic websites",
    backlinkFeature2: "Original and relevant content",
    backlinkFeature3: "Permanent, non-removable links",
    siteAnalysis: "Site Analysis",
    siteAnalysisDesc:
      "We provide a comprehensive analysis of your website, identifying strengths and weaknesses, and comparing it with competitors to develop an effective strategy.",
    siteAnalysisFeature1: "Keyword analysis",
    siteAnalysisFeature2: "Current link evaluation",
    siteAnalysisFeature3: "Competitor analysis",
    seoConsulting: "SEO Consulting",
    seoConsultingDesc:
      "We provide specialized search engine optimization consulting to help you achieve your goals and outperform competitors in search results.",
    seoConsultingFeature1: "Effective content strategy",
    seoConsultingFeature2: "Technical site optimization",
    seoConsultingFeature3: "External link strategy",
    rankingImprovement: "Ranking Improvement",
    rankingImprovementDesc: "Noticeable improvement in your website ranking on search engines",
    trafficIncrease: "Traffic Increase",
    trafficIncreaseDesc: "Increase the number of targeted visitors to your website",
    preciseTargeting: "Precise Targeting",
    preciseTargetingDesc: "Reach potential customers interested in your services and products",
  },
  ar: {
    ourServices: "خدماتنا",
    ourDistinguishedServices: "خدماتنا المميزة",
    servicesDescription:
      "نقدم لك مجموعة من الخدمات الاحترافية لتعزيز تواجدك الرقمي وتحسين ترتيب موقعك في محركات البحث",
    backlinkBuilding: "بناء الروابط الخلفية",
    backlinkBuildingDesc:
      "نقوم بإنشاء روابط خلفية قوية من مواقع عربية موثوقة بتصنيف DA 30+ لتعزيز سلطة موقعك وتحسين ترتيبه في محركات البحث.",
    backlinkFeature1: "روابط من مواقع عربية مرموقة",
    backlinkFeature2: "محتوى أصلي وذو صلة",
    backlinkFeature3: "روابط دائمة غير قابلة للإزالة",
    siteAnalysis: "تحليل المواقع",
    siteAnalysisDesc:
      "نقدم تحليلاً شاملاً لموقعك الإلكتروني وتحديد نقاط القوة والضعف ومقارنته بالمنافسين لوضع استراتيجية فعالة.",
    siteAnalysisFeature1: "تحليل الكلمات المفتاحية",
    siteAnalysisFeature2: "تقييم الروابط الحالية",
    siteAnalysisFeature3: "تحليل المنافسين",
    seoConsulting: "استشارات SEO",
    seoConsultingDesc:
      "نقدم استشارات متخصصة في تحسين محركات البحث لمساعدتك على تحقيق أهدافك وتجاوز المنافسين في النتائج البحثية.",
    seoConsultingFeature1: "استراتيجية محتوى فعالة",
    seoConsultingFeature2: "تحسين تقني للموقع",
    seoConsultingFeature3: "استراتيجية روابط خارجية",
    rankingImprovement: "تحسين الترتيب",
    rankingImprovementDesc: "ارتفاع ملحوظ في ترتيب موقعك على محركات البحث",
    trafficIncrease: "زيادة الزوار",
    trafficIncreaseDesc: "زيادة عدد الزوار المستهدفين إلى موقعك الإلكتروني",
    preciseTargeting: "استهداف دقيق",
    preciseTargetingDesc: "الوصول إلى العملاء المحتملين المهتمين بخدماتك ومنتجاتك",
  },
}

const ServicesSection = ({ locale }: { locale: Locale }) => {
  const t = translations[locale]
  const isRtl = locale === "ar"

  return (
    <>
      {/* قسم الخدمات الأصلي */}
      <section id="services" className="section-padding bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">{t.ourServices}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ourDistinguishedServices}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.servicesDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="modern-card p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="feature-icon bg-primary/10 p-4 rounded-xl mb-6">
                <Link className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.backlinkBuilding}</h3>
              <p className="text-gray-600 mb-6">
                {t.backlinkBuildingDesc}
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className={`w-2 h-2 bg-webskeet-gold rounded-full inline-block ${isRtl ? "ml-2" : "mr-2"}`}></span>
                  <span>{t.backlinkFeature1}</span>
                </li>
                <li className="flex items-center">
                  <span className={`w-2 h-2 bg-webskeet-gold rounded-full inline-block ${isRtl ? "ml-2" : "mr-2"}`}></span>
                  <span>{t.backlinkFeature2}</span>
                </li>
                <li className="flex items-center">
                  <span className={`w-2 h-2 bg-webskeet-gold rounded-full inline-block ${isRtl ? "ml-2" : "mr-2"}`}></span>
                  <span>{t.backlinkFeature3}</span>
                </li>
              </ul>
            </div>

            <div className="modern-card p-8 hover:-translate-y-2 transition-all duration-300 md:transform md:translate-y-6">
              <div className="feature-icon bg-primary/10 p-4 rounded-xl mb-6">
                <BarChart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.siteAnalysis}</h3>
              <p className="text-gray-600 mb-6">
                {t.siteAnalysisDesc}
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className={`w-2 h-2 bg-webskeet-gold rounded-full inline-block ${isRtl ? "ml-2" : "mr-2"}`}></span>
                  <span>{t.siteAnalysisFeature1}</span>
                </li>
                <li className="flex items-center">
                  <span className={`w-2 h-2 bg-webskeet-gold rounded-full inline-block ${isRtl ? "ml-2" : "mr-2"}`}></span>
                  <span>{t.siteAnalysisFeature2}</span>
                </li>
                <li className="flex items-center">
                  <span className={`w-2 h-2 bg-webskeet-gold rounded-full inline-block ${isRtl ? "ml-2" : "mr-2"}`}></span>
                  <span>{t.siteAnalysisFeature3}</span>
                </li>
              </ul>
            </div>

            <div className="modern-card p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="feature-icon bg-primary/10 p-4 rounded-xl mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.seoConsulting}</h3>
              <p className="text-gray-600 mb-6">
                {t.seoConsultingDesc}
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className={`w-2 h-2 bg-webskeet-gold rounded-full inline-block ${isRtl ? "ml-2" : "mr-2"}`}></span>
                  <span>{t.seoConsultingFeature1}</span>
                </li>
                <li className="flex items-center">
                  <span className={`w-2 h-2 bg-webskeet-gold rounded-full inline-block ${isRtl ? "ml-2" : "mr-2"}`}></span>
                  <span>{t.seoConsultingFeature2}</span>
                </li>
                <li className="flex items-center">
                  <span className={`w-2 h-2 bg-webskeet-gold rounded-full inline-block ${isRtl ? "ml-2" : "mr-2"}`}></span>
                  <span>{t.seoConsultingFeature3}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Added benefits banner */}
          <div className="mt-16 bg-gradient-to-r from-webskeet-blue/80 to-webskeet-blue text-white p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">{t.rankingImprovement}</h4>
                <p className="text-white/80">{t.rankingImprovementDesc}</p>
              </div>

              <div className="text-center">
                <ChartLine className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">{t.trafficIncrease}</h4>
                <p className="text-white/80">{t.trafficIncreaseDesc}</p>
              </div>

              <div className="text-center">
                <Search className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">{t.preciseTargeting}</h4>
                <p className="text-white/80">{t.preciseTargetingDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesSection
