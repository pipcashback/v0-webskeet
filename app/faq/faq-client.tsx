"use client"

import { useState } from "react"
import { Zap, Search, BookOpen, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import SchemaMarkup from "@/components/seo/schema-markup"

const FAQClient = () => {
  const [activeTab, setActiveTab] = useState("seo")

  const faqItems = [
    {
      question: "ما هو تحسين محركات البحث ولماذا هو مهم لشركتي؟",
      answer:
        "تحسين محركات البحث هو عملية تهيئة موقعك للظهور في نتائج البحث المتقدمة. هذا يساعد على جذب الزوار، زيادة الثقة، وتحقيق المزيد من المبيعات. تقدم ويب سكيت خدمات متكاملة لتحسين ترتيب موقعك وتوسيع حضوره الرقمي.",
    },
    {
      question: "ما الذي يميز خدمات ويب سكيت؟",
      answer:
        "نقدم حلولًا مخصصة تشمل تهيئة داخلية للموقع، وبناء روابط خارجية من مواقع عربية موثوقة، مع دراسة دقيقة للمنافسين وإنشاء محتوى يتوافق مع متطلبات محركات البحث. كل ذلك مصمم خصيصًا للسوق العربي.",
    },
    {
      question: "متى تظهر نتائج تحسين محركات البحث؟",
      answer:
        "عادةً تبدأ النتائج بالظهور بين 3 إلى 6 أشهر حسب التنافس والكلمات المستخدمة. تعتمد ويب سكيت على استراتيجيات فعالة لتسريع ظهور النتائج.",
    },
    {
      question: "ما الفرق بين التهيئة الداخلية والخارجية للموقع؟",
      answer:
        "التهيئة الداخلية تتضمن تحسين عناصر الموقع مثل العناوين والمحتوى والسرعة. التهيئة الخارجية تشمل بناء روابط من مواقع موثوقة لرفع مصداقية موقعك. تقدم ويب سكيت كلا الجانبين.",
    },
    {
      question: "هل يمكن أن تؤدي الأخطاء في تحسين محركات البحث إلى نتائج سلبية؟",
      answer:
        "نعم، مثل استخدام الروابط الضارة أو تكرار الكلمات بشكل مفرط. نحن نلتزم بالأساليب السليمة لضمان نتائج آمنة ومستدامة.",
    },
    {
      question: "كيف يتم اختيار الكلمات المناسبة؟",
      answer:
        "نستخدم أدوات تحليل متقدمة لاختيار كلمات ذات طلب مرتفع ومنافسة معتدلة، ونختارها بما يتناسب مع نشاطك لجذب العملاء.",
    },
    {
      question: "هل يجب تعديل تصميم الموقع لتحسين ترتيبه؟",
      answer: "ليس دائمًا، لكن تحسين تجربة المستخدم مهم. نقوم بتحليل الموقع لتحديد ما إذا كان يحتاج لتعديلات.",
    },
    {
      question: "هل الروابط الخارجية ما زالت مهمة؟",
      answer: "نعم، الروابط من مواقع موثوقة تظل أساسية لتحسين الترتيب. نبني روابط ذات صلة لتعزيز مصداقية موقعك.",
    },
    {
      question: "كيف يتم قياس نجاح تحسين محركات البحث؟",
      answer:
        "من خلال متابعة زيادة عدد الزوار، تحسن ترتيب الكلمات المستهدفة، ونسبة التفاعل. نقدم تقارير دورية لقياس الأداء.",
    },
    {
      question: "هل يمكنني تحسين الموقع بنفسي؟",
      answer:
        "يمكنك البدء ببعض الخطوات، لكن التحسين الشامل يتطلب خبرة وأدوات متخصصة. نحن نوفر لك الوقت والجهد بخدمة احترافية.",
    },
    {
      question: "ما تكلفة خدمات تحسين محركات البحث؟",
      answer:
        "التكلفة تختلف حسب احتياجات موقعك. يعتبر تحسين محركات البحث استثمارًا طويل الأجل يعود بالفائدة على المبيعات والظهور.",
    },
    {
      question: "هل تقدمون خدمة كتابة محتوى محسن لمحركات البحث؟",
      answer: "نعم، نكتب مقالات وصفحات تستهدف الكلمات المطلوبة بجودة عالية لجذب الزوار.",
    },
    {
      question: "كيف تتعاملون مع تحديثات محركات البحث؟",
      answer: "نتابع التحديثات بشكل مستمر ونحدث الخطط وفقًا لها لضمان التوافق.",
    },
    {
      question: "هل خدماتكم مخصصة للسوق العربي؟",
      answer:
        "نعم، نحن متخصصون في السوق العربي مثل مصر، الإمارات، والسعودية، ونركز على المحتوى والكلمات المناسبة لهذه الأسواق. كما نقدم خدماتنا أيضًا للسوق العالمي مع مراعاة خصوصيات كل سوق ومتطلباته.",
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

  // SEO benefits instead of stats
  const seoBenefits = [
    { icon: "Search", title: "فهم أساسيات SEO", description: "تعرف على المفاهيم الأساسية لتحسين محركات البحث" },
    { icon: "BookOpen", title: "تعلم أفضل الممارسات", description: "اكتشف أحدث الاستراتيجيات والتقنيات المعتمدة" },
    { icon: "HelpCircle", title: "إجابات واضحة", description: "الحصول على إجابات دقيقة لأكثر الأسئلة شيوعًا" },
  ]

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
            <h1 className="text-4xl font-bold mb-4 text-webskeet-blue">الأسئلة الشائعة</h1>
            <p className="text-xl font-semibold text-gray-700 mb-3">كل ما تحتاج معرفته عن خدماتنا في السيو</p>
            <p className="text-lg text-gray-600 mb-8">
              نوفر لك إجابات واضحة وموثوقة عن أبرز الأسئلة المتعلقة بخدماتنا لتحسين محركات البحث، بهدف مساعدتك على فهم
              ما نقدمه واتخاذ قرارات مبنية على معرفة.
            </p>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-webskeet-blue/10 rounded-full">
                    <Search className="h-6 w-6 text-webskeet-blue" />
                  </div>
                </div>
                <div className="text-xl font-bold text-webskeet-blue mb-2">تفاصيل خدماتنا</div>
                <div className="text-gray-600">تعرف على ما نقدمه في مجال السيو وكيف نساعد في تحسين ترتيب موقعك</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-webskeet-blue/10 rounded-full">
                    <BookOpen className="h-6 w-6 text-webskeet-blue" />
                  </div>
                </div>
                <div className="text-xl font-bold text-webskeet-blue mb-2">استراتيجياتنا الفعالة</div>
                <div className="text-gray-600">اكتشف الأساليب المعتمدة التي نعتمدها لتحقيق نتائج ملموسة</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-webskeet-blue/10 rounded-full">
                    <HelpCircle className="h-6 w-6 text-webskeet-blue" />
                  </div>
                </div>
                <div className="text-xl font-bold text-webskeet-blue mb-2">ردود موثوقة</div>
                <div className="text-gray-600">اطّلع على إجابات دقيقة لأكثر التساؤلات شيوعًا من عملائنا</div>
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
                <h2 className="text-xl font-bold text-gray-800">أسئلة حول خدمات تحسين محركات البحث</h2>
              </div>

              {/* FAQ Items with H2 headings */}
              <div className="space-y-6">
                {faqItems.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h2 className="text-xl font-medium mb-3">{faq.question}</h2>
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed text-right pr-2 border-right-2 border-webskeet-blue/20 py-1">
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
                  <h3 className="text-xl font-bold mb-4">لديك سؤال لم تجد إجابته؟</h3>
                  <p className="text-gray-600 mb-6">فريقنا جاهز للمساعدة واستشارتك في خدمات تحسين محركات البحث</p>
                  <a
                    href="/#consultation"
                    className="btn-primary inline-block px-6 py-3 rounded-lg bg-webskeet-blue text-white hover:scale-105 transition transform"
                  >
                    احصل على استشارة مجانية
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
