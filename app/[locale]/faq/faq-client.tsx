"use client"

import { useState } from "react"
import { Zap, Search, BookOpen, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SchemaMarkup from "@/components/seo/schema-markup"
import type { Locale } from "@/i18n/config"

const translations = {
  en: {
    heroTitle: "Frequently Asked Questions",
    heroSubtitle: "Everything you need to know about our SEO services",
    heroDesc: "We provide clear and reliable answers to the most common questions about our search engine optimization services, to help you understand what we offer and make informed decisions.",
    benefit1Title: "Our Service Details",
    benefit1Desc: "Learn about what we offer in SEO and how we help improve your site's ranking",
    benefit2Title: "Our Effective Strategies",
    benefit2Desc: "Discover the proven methods we use to achieve tangible results",
    benefit3Title: "Reliable Answers",
    benefit3Desc: "Get accurate answers to the most frequently asked questions from our clients",
    faqSectionTitle: "Questions About SEO Services",
    ctaTitle: "Have a question you didn't find an answer to?",
    ctaDesc: "Our team is ready to help and consult with you on SEO services",
    ctaButton: "Get a Free Consultation",
  },
  ar: {
    heroTitle: "الأسئلة الشائعة",
    heroSubtitle: "كل ما تحتاج معرفته عن خدماتنا في السيو",
    heroDesc: "نوفر لك إجابات واضحة وموثوقة عن أبرز الأسئلة المتعلقة بخدماتنا لتحسين محركات البحث، بهدف مساعدتك على فهم ما نقدمه واتخاذ قرارات مبنية على معرفة.",
    benefit1Title: "تفاصيل خدماتنا",
    benefit1Desc: "تعرف على ما نقدمه في مجال السيو وكيف نساعد في تحسين ترتيب موقعك",
    benefit2Title: "استراتيجياتنا الفعالة",
    benefit2Desc: "اكتشف الأساليب المعتمدة التي نعتمدها لتحقيق نتائج ملموسة",
    benefit3Title: "ردود موثوقة",
    benefit3Desc: "اط\u0651لع على إجابات دقيقة لأكثر التساؤلات شيوعا\u064B من عملائنا",
    faqSectionTitle: "أسئلة حول خدمات تحسين محركات البحث",
    ctaTitle: "لديك سؤال لم تجد إجابته؟",
    ctaDesc: "فريقنا جاهز للمساعدة واستشارتك في خدمات تحسين محركات البحث",
    ctaButton: "احصل على استشارة مجانية",
  },
}

const arabicFaqItems = [
  {
    question: "ما هو تحسين محركات البحث ولماذا هو مهم لشركتي؟",
    answer: "تحسين محركات البحث هو عملية تهيئة موقعك للظهور في نتائج البحث المتقدمة. هذا يساعد على جذب الزوار، زيادة الثقة، وتحقيق المزيد من المبيعات. تقدم ويب سكيت خدمات متكاملة لتحسين ترتيب موقعك وتوسيع حضوره الرقمي.",
  },
  {
    question: "ما الذي يميز خدمات ويب سكيت؟",
    answer: "نقدم حلولا\u064B مخصصة تشمل تهيئة داخلية للموقع، وبناء روابط خارجية من مواقع عربية موثوقة، مع دراسة دقيقة للمنافسين وإنشاء محتوى يتوافق مع متطلبات محركات البحث. كل ذلك مصمم خصيصا\u064B للسوق العربي.",
  },
  {
    question: "متى تظهر نتائج تحسين محركات البحث؟",
    answer: "عادة\u064B تبدأ النتائج بالظهور بين 3 إلى 6 أشهر حسب التنافس والكلمات المستخدمة. تعتمد ويب سكيت على استراتيجيات فعالة لتسريع ظهور النتائج.",
  },
  {
    question: "ما الفرق بين التهيئة الداخلية والخارجية للموقع؟",
    answer: "التهيئة الداخلية تتضمن تحسين عناصر الموقع مثل العناوين والمحتوى والسرعة. التهيئة الخارجية تشمل بناء روابط من مواقع موثوقة لرفع مصداقية موقعك. تقدم ويب سكيت كلا الجانبين.",
  },
  {
    question: "هل يمكن أن تؤدي الأخطاء في تحسين محركات البحث إلى نتائج سلبية؟",
    answer: "نعم، مثل استخدام الروابط الضارة أو تكرار الكلمات بشكل مفرط. نحن نلتزم بالأساليب السليمة لضمان نتائج آمنة ومستدامة.",
  },
  {
    question: "كيف يتم اختيار الكلمات المناسبة؟",
    answer: "نستخدم أدوات تحليل متقدمة لاختيار كلمات ذات طلب مرتفع ومنافسة معتدلة، ونختارها بما يتناسب مع نشاطك لجذب العملاء.",
  },
  {
    question: "هل يجب تعديل تصميم الموقع لتحسين ترتيبه؟",
    answer: "ليس دائما\u064B، لكن تحسين تجربة المستخدم مهم. نقوم بتحليل الموقع لتحديد ما إذا كان يحتاج لتعديلات.",
  },
  {
    question: "هل الروابط الخارجية ما زالت مهمة؟",
    answer: "نعم، الروابط من مواقع موثوقة تظل أساسية لتحسين الترتيب. نبني روابط ذات صلة لتعزيز مصداقية موقعك.",
  },
  {
    question: "كيف يتم قياس نجاح تحسين محركات البحث؟",
    answer: "من خلال متابعة زيادة عدد الزوار، تحسن ترتيب الكلمات المستهدفة، ونسبة التفاعل. نقدم تقارير دورية لقياس الأداء.",
  },
  {
    question: "هل يمكنني تحسين الموقع بنفسي؟",
    answer: "يمكنك البدء ببعض الخطوات، لكن التحسين الشامل يتطلب خبرة وأدوات متخصصة. نحن نوفر لك الوقت والجهد بخدمة احترافية.",
  },
  {
    question: "ما تكلفة خدمات تحسين محركات البحث؟",
    answer: "التكلفة تختلف حسب احتياجات موقعك. يعتبر تحسين محركات البحث استثمارا\u064B طويل الأجل يعود بالفائدة على المبيعات والظهور.",
  },
  {
    question: "هل تقدمون خدمة كتابة محتوى محسن لمحركات البحث؟",
    answer: "نعم، نكتب مقالات وصفحات تستهدف الكلمات المطلوبة بجودة عالية لجذب الزوار.",
  },
  {
    question: "كيف تتعاملون مع تحديثات محركات البحث؟",
    answer: "نتابع التحديثات بشكل مستمر ونحدث الخطط وفقا\u064B لها لضمان التوافق.",
  },
  {
    question: "هل خدماتكم مخصصة للسوق العربي؟",
    answer: "نعم، نحن متخصصون في السوق العربي مثل مصر، الإمارات، والسعودية، ونركز على المحتوى والكلمات المناسبة لهذه الأسواق. كما نقدم خدماتنا أيضا\u064B للسوق العالمي مع مراعاة خصوصيات كل سوق ومتطلباته.",
  },
  {
    question: "ماذا تشمل دراسة المنافسين؟",
    answer: "نحلل مواقع منافسيك من حيث الكلمات والروابط ونقاط القوة والضعف، ونقدم تقارير وتوصيات لتجاوزهم.",
  },
  {
    question: "هل تقدمون استشارات مخصصة؟",
    answer: "نعم، نوفر جلسات استشارية لتحليل موقعك ووضع خطة مناسبة، وتشمل كل باقاتنا هذه الخدمة.",
  },
  {
    question: "هل يمكنني الحصول على تقارير دورية؟",
    answer: "نعم، نقدم تقارير شهرية توضح الأداء وتوصيات للتحسين.",
  },
  {
    question: "هل تخدمون المتاجر الإلكترونية؟",
    answer: "نعم، نساعد في تحسين صفحات المنتجات، وجذب زوار يبحثون عن الشراء، لزيادة المبيعات.",
  },
  {
    question: "هل يمكن تجربة الخدمات قبل الالتزام؟",
    answer: "نعم، يمكنك تجربة باقة أساسية أو استشارة أولية للتعرف على مستوى الخدمة.",
  },
  {
    question: "كيف أبدأ؟",
    answer: "تواصل معنا من خلال الموقع لحجز استشارة مجانية. سنقوم بدراسة موقعك وتحديد الباقة الأنسب.",
  },
]

const englishFaqItems = [
  {
    question: "What is SEO and why is it important for my business?",
    answer: "SEO is the process of optimizing your website to appear in advanced search results. This helps attract visitors, build trust, and generate more sales. WebSkeet offers comprehensive services to improve your site's ranking and expand its digital presence.",
  },
  {
    question: "What makes WebSkeet's services different?",
    answer: "We offer customized solutions including on-page optimization, building backlinks from trusted Arabic websites, detailed competitor analysis, and creating content that meets search engine requirements. Everything is specifically designed for the Arabic market.",
  },
  {
    question: "When do SEO results start showing?",
    answer: "Results typically begin to appear between 3 to 6 months depending on competition and the keywords used. WebSkeet relies on effective strategies to accelerate results.",
  },
  {
    question: "What is the difference between on-page and off-page SEO?",
    answer: "On-page SEO involves optimizing website elements such as titles, content, and speed. Off-page SEO includes building links from trusted sites to increase your site's credibility. WebSkeet provides both aspects.",
  },
  {
    question: "Can SEO mistakes lead to negative results?",
    answer: "Yes, such as using harmful links or excessive keyword repetition. We follow proper methods to ensure safe and sustainable results.",
  },
  {
    question: "How are the right keywords selected?",
    answer: "We use advanced analysis tools to select keywords with high demand and moderate competition, choosing them to match your business and attract customers.",
  },
  {
    question: "Do I need to modify my website design to improve rankings?",
    answer: "Not always, but improving user experience is important. We analyze the site to determine if modifications are needed.",
  },
  {
    question: "Are backlinks still important?",
    answer: "Yes, links from trusted sites remain essential for improving rankings. We build relevant links to enhance your site's credibility.",
  },
  {
    question: "How is SEO success measured?",
    answer: "By tracking visitor growth, keyword ranking improvements, and engagement rates. We provide periodic reports to measure performance.",
  },
  {
    question: "Can I optimize my website myself?",
    answer: "You can start with some steps, but comprehensive optimization requires expertise and specialized tools. We save you time and effort with professional service.",
  },
  {
    question: "How much do SEO services cost?",
    answer: "The cost varies depending on your site's needs. SEO is considered a long-term investment that benefits sales and visibility.",
  },
  {
    question: "Do you offer SEO-optimized content writing services?",
    answer: "Yes, we write articles and pages targeting required keywords with high quality to attract visitors.",
  },
  {
    question: "How do you handle search engine updates?",
    answer: "We continuously monitor updates and adjust plans accordingly to ensure compliance.",
  },
  {
    question: "Are your services tailored for the Arabic market?",
    answer: "Yes, we specialize in the Arabic market including Egypt, UAE, and Saudi Arabia, focusing on content and keywords suitable for these markets. We also serve the global market while considering each market's specific requirements.",
  },
  {
    question: "What does competitor analysis include?",
    answer: "We analyze your competitors' websites in terms of keywords, links, strengths, and weaknesses, and provide reports and recommendations to outperform them.",
  },
  {
    question: "Do you offer customized consultations?",
    answer: "Yes, we provide consultation sessions to analyze your site and develop a suitable plan. All our packages include this service.",
  },
  {
    question: "Can I get periodic reports?",
    answer: "Yes, we provide monthly reports showing performance and improvement recommendations.",
  },
  {
    question: "Do you serve e-commerce stores?",
    answer: "Yes, we help optimize product pages and attract purchase-intent visitors to increase sales.",
  },
  {
    question: "Can I try the services before committing?",
    answer: "Yes, you can try a basic package or an initial consultation to experience the service level.",
  },
  {
    question: "How do I get started?",
    answer: "Contact us through the website to book a free consultation. We will study your site and determine the most suitable package.",
  },
]

const FAQClient = ({ locale }: { locale: Locale }) => {
  const t = translations[locale]
  const isRtl = locale === "ar"
  const [activeTab, setActiveTab] = useState("seo")

  const faqItems = locale === "ar" ? arabicFaqItems : englishFaqItems
  const lp = (path: string) => locale === "ar" ? `/ar${path}` : path

  // Prepare FAQ data for schema markup
  const faqSchemaData = {
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <main className="flex-grow">
      {/* Add FAQ Schema Markup for SEO */}
      <SchemaMarkup type="FAQPage" data={faqSchemaData} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-8 bg-gradient-to-br from-webskeet-blue/10 to-transparent overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-webskeet-blue">{t.heroTitle}</h1>
            <p className="text-xl font-semibold text-gray-700 mb-3">{t.heroSubtitle}</p>
            <p className="text-lg text-gray-600 mb-8">
              {t.heroDesc}
            </p>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-webskeet-blue/10 rounded-full">
                    <Search className="h-6 w-6 text-webskeet-blue" />
                  </div>
                </div>
                <div className="text-xl font-bold text-webskeet-blue mb-2">{t.benefit1Title}</div>
                <div className="text-gray-600">{t.benefit1Desc}</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-webskeet-blue/10 rounded-full">
                    <BookOpen className="h-6 w-6 text-webskeet-blue" />
                  </div>
                </div>
                <div className="text-xl font-bold text-webskeet-blue mb-2">{t.benefit2Title}</div>
                <div className="text-gray-600">{t.benefit2Desc}</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-webskeet-blue/10 rounded-full">
                    <HelpCircle className="h-6 w-6 text-webskeet-blue" />
                  </div>
                </div>
                <div className="text-xl font-bold text-webskeet-blue mb-2">{t.benefit3Title}</div>
                <div className="text-gray-600">{t.benefit3Desc}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-webskeet-blue/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-webskeet-gold/5 rounded-full filter blur-3xl"></div>
      </section>

      {/* FAQ Section */}
      <section className="pt-6 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* FAQ Content */}
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-100 mb-8">
              <div className="flex items-center gap-3 mb-6 bg-webskeet-blue/10 p-3 rounded-lg">
                <div className="p-3 bg-webskeet-blue rounded-full">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">{t.faqSectionTitle}</h2>
              </div>

              {/* FAQ Items with H2 headings */}
              <div className="space-y-6">
                {faqItems.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h2 className="text-xl font-medium mb-3">{faq.question}</h2>
                    <p className={`text-gray-700 whitespace-pre-line leading-relaxed ${isRtl ? "text-right pr-2" : "text-left pl-2"} border-right-2 border-webskeet-blue/20 py-1`}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-br from-webskeet-blue/5 to-webskeet-gold/5 border-none shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">{t.ctaTitle}</h3>
                  <p className="text-gray-600 mb-6">{t.ctaDesc}</p>
                  <a
                    href={lp("/#consultation")}
                    className="btn-primary inline-block px-6 py-3 rounded-lg bg-webskeet-blue text-white hover:scale-105 transition transform"
                  >
                    {t.ctaButton}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FAQClient
