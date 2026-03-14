"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Search,
  Settings,
  FileText,
  ShoppingCart,
  Link2,
  Brain,
  ClipboardCheck,
  Lightbulb,
  Rocket,
  BarChart3,
  Clock,
  Users,
  Globe,
  Code,
  Building2,
  CheckCircle2,
  MapPin,
  Stethoscope,
  Cpu,
  Plane,
  Briefcase,
  ShoppingBag,
  ArrowLeft,
  ChevronLeft,
} from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/i18n/config"
import ConsultationSection from "@/components/consultation-section"

export default function SeoCompanyClient({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar"
  const lp = (path: string) => (locale === "ar" ? `/ar${path}` : path)

  // --- Services data ---
  const services = [
    {
      icon: Settings,
      title: "السيو التقني (Technical SEO)",
      color: "bg-blue-500",
      bullets: [
        "مشاكل الزحف والفهرسة التي تمنع جوجل من رؤية صفحاتك",
        "سرعة الموقع وCore Web Vitals — خاصة على الموبايل حيث 90-95% من ترافيك المنطقة",
        "بنية الروابط الداخلية وتوزيع السلطة بين الصفحات",
        "تطبيق Schema Markup الصحيح (Organization, Service, FAQ, Product)",
        "إعدادات hreflang للمواقع ثنائية اللغة",
        "ملفات robots.txt وsitemap.xml المحسّنة",
      ],
      description: "الأساس الذي يُبنى عليه كل شيء. نفحص موقعك بأدوات مثل Screaming Frog وSitebulb ونصلح:",
      footer: "لا نكتفي بتقديم تقرير — نعمل مع فريق التطوير عندك لتنفيذ الإصلاحات فعلياً.",
    },
    {
      icon: FileText,
      title: "سيو المحتوى وبحث الكلمات المفتاحية",
      color: "bg-green-500",
      bullets: [
        "بحث كلمات مفتاحية متقدم بالعربية والإنجليزية مع فهم نية البحث",
        "كتابة محتوى عربي احترافي بالفصحى المعاصرة — مفهوم في كل الدول العربية",
        "تحسين المحتوى الموجود (On-Page SEO): العناوين، الوصف، الترويسات، الروابط الداخلية",
        "بناء مراكز محتوى (Topic Clusters) تثبت سلطتك الموضوعية أمام جوجل",
        "تحسين صفحات المنتجات والفئات للمتاجر الإلكترونية",
      ],
      description: "نبني استراتيجية محتوى تستهدف الكلمات التي يبحث عنها عملاؤك فعلاً:",
    },
    {
      icon: ShoppingCart,
      title: "سيو المتاجر الإلكترونية",
      color: "bg-purple-500",
      bullets: [
        "Shopify — تحسين البنية التقنية، صفحات المنتجات، والمجموعات",
        "سلة — المنصة الأكثر انتشاراً في السعودية، نفهم قيودها التقنية وكيفية تحسينها",
        "زد — سيو متخصص للمتاجر السعودية على منصة زد",
        "WooCommerce — تحسين الأداء والبنية للمتاجر المبنية على WordPress",
      ],
      description: "خبرة مباشرة مع منصات التجارة الإلكترونية الأكثر استخداماً في المنطقة:",
      link: { href: "/ar/ecommerce-seo", label: "اعرف المزيد عن خدمات سيو المتاجر الإلكترونية" },
    },
    {
      icon: Link2,
      title: "بناء الروابط (Link Building)",
      color: "bg-orange-500",
      bullets: [
        "جيست بوست على مواقع عربية بـ Domain Rating +50",
        "تسجيل في أدلة الأعمال الخليجية والدولية (Clutch, GoodFirms, DesignRush)",
        "استراتيجيات Digital PR للحصول على تغطية في المنشورات الخليجية",
        "بناء أصول قابلة للربط (تقارير، إنفوجرافيكس، أدوات مجانية)",
      ],
      description: "نبني روابط خلفية حقيقية من مواقع عربية وإنجليزية ذات سلطة عالية:",
    },
    {
      icon: Brain,
      title: "تحسين الظهور في محركات البحث بالذكاء الاصطناعي (AI SEO)",
      color: "bg-pink-500",
      bullets: [
        "تحسين المحتوى لمحركات LLM (Large Language Models)",
        "بناء E-E-A-T (الخبرة، التخصص، السلطة، الثقة)",
        "تنظيم البيانات المهيكلة لتسهيل فهم الذكاء الاصطناعي لمحتواك",
      ],
      description: "مع تزايد استخدام ChatGPT وGemini وPerplexity في المنطقة، نعمل على جعل علامتك التجارية تظهر في نتائج البحث بالذكاء الاصطناعي:",
    },
  ]

  // --- Process steps ---
  const processSteps = [
    {
      icon: ClipboardCheck,
      title: "الفحص والتحليل الشامل",
      description: "نبدأ بفحص موقعك تقنياً وتحليل منافسيك وتحديد فرص الكلمات المفتاحية. تحصل على تقرير مفصّل بالمشاكل والفرص خلال أسبوع.",
    },
    {
      icon: Lightbulb,
      title: "الاستراتيجية والخطة الشهرية",
      description: "نبني خطة سيو مخصصة لموقعك تشمل: الأولويات التقنية، خطة المحتوى، وخطة بناء الروابط — مع جدول زمني واضح.",
    },
    {
      icon: Rocket,
      title: "التنفيذ المباشر",
      description: "لا نكتفي بالتوصيات. نعمل مع فريقك التقني لتنفيذ التحسينات. نكتب المحتوى. نبني الروابط. نتابع الفهرسة.",
    },
    {
      icon: BarChart3,
      title: "القياس والتحسين المستمر",
      description: "تقرير شهري شفاف يوضح: الترتيب، الترافيك، التحويلات، والخطوات القادمة. نعدّل الاستراتيجية بناءً على البيانات.",
    },
  ]

  // --- Why Webskeet differentiators ---
  const differentiators = [
    {
      icon: Clock,
      title: "+8 سنوات خبرة",
      description: "خبرة +8 سنوات في السيو التقني والمحتوى. ليس فقط توصيات نظرية — نفّذنا مئات المشاريع لعملاء في مصر والخليج وأوروبا.",
    },
    {
      icon: Users,
      title: "متحدثون أصليون للعربية",
      description: "نفهم كيف يبحث المستخدم العربي، وما الفرق بين \"شركة سيو\" و\"شركة تحسين محركات البحث\" في نية البحث. هذا الفهم لا يمكن أن تحصل عليه من وكالة تترجم محتوى إنجليزي.",
    },
    {
      icon: Globe,
      title: "نطبّق ما نبيع",
      description: "webskeet.com نفسه موقع ثنائي اللغة مبني بأفضل ممارسات السيو — hreflang صحيح، بنية مجلدات فرعية، وسرعة تحميل ممتازة. نطبّق على أنفسنا ما نبيعه لعملائنا.",
    },
    {
      icon: Code,
      title: "نعمل مع المطورين مباشرة",
      description: "كثير من شركات السيو ترسل تقرير PDF وتنتهي مهمتها. نحن نجلس مع المطورين عندك، نراجع الكود، ونتأكد أن التحسينات تتنفذ فعلاً.",
    },
    {
      icon: Building2,
      title: "مسجّلون في مصر والإمارات",
      description: "وجود قانوني في السوقين يعني فهم محلي عميق وسهولة التعاقد لعملاء الخليج.",
    },
  ]

  // --- Industries ---
  const industries = [
    { icon: ShoppingBag, title: "التجارة الإلكترونية", description: "متاجر Shopify، سلة، زد، WooCommerce" },
    { icon: Building2, title: "العقارات", description: "شركات التطوير العقاري والوسطاء في الخليج" },
    { icon: Stethoscope, title: "الرعاية الصحية", description: "المستشفيات والعيادات والصيدليات الإلكترونية" },
    { icon: Cpu, title: "التقنية وSaaS", description: "شركات البرمجيات والخدمات السحابية" },
    { icon: Plane, title: "السياحة والضيافة", description: "الفنادق وشركات السياحة ووكالات السفر" },
    { icon: Briefcase, title: "الخدمات المهنية", description: "المحامين والمحاسبين والمستشارين" },
  ]

  // --- Geographic coverage ---
  const geoLocations = [
    {
      country: "السعودية",
      cities: "الرياض، جدة، الدمام، مكة، المدينة",
      link: "/ar/seo-saudi-arabia",
      linkLabel: "خدمات سيو في السعودية",
    },
    {
      country: "الإمارات",
      cities: "دبي، أبوظبي، الشارقة",
      link: "/ar/seo-uae",
      linkLabel: "خدمات سيو في الإمارات",
    },
    {
      country: "قطر",
      cities: "الدوحة",
      link: "/ar/seo-qatar",
      linkLabel: "خدمات سيو في قطر",
    },
    {
      country: "الكويت، البحرين، عُمان",
      cities: "",
    },
    {
      country: "مصر",
      cities: "القاهرة، الإسكندرية",
    },
  ]

  // --- FAQ ---
  const faqs = [
    {
      question: "كم تكلفة خدمات السيو الشهرية؟",
      answer: "تختلف التكلفة حسب حجم الموقع والمنافسة في مجالك. نقدم خططاً شهرية تبدأ من 5,000 درهم وتصل إلى 25,000 درهم للشركات الكبرى. نبدأ دائماً باستشارة مجانية لفهم احتياجاتك قبل تقديم عرض سعر.",
      link: { href: "/ar/seo-pricing", label: "اطلع على صفحة الأسعار" },
    },
    {
      question: "كم من الوقت يحتاج السيو لتظهر النتائج؟",
      answer: "عادةً تبدأ النتائج الأولية بالظهور خلال 3-4 أشهر، والنتائج القوية خلال 6-12 شهر. السيو استثمار طويل المدى — لكن عوائده تتراكم مع الوقت بعكس الإعلانات المدفوعة التي تتوقف فور إيقاف الميزانية.",
    },
    {
      question: "هل تقدمون ضمان الصفحة الأولى؟",
      answer: "لا. أي شركة سيو تضمن الصفحة الأولى إما تستخدم أساليب مخالفة لسياسات جوجل أو تستهدف كلمات بدون منافسة. نحن نقدم شيئاً أفضل: شفافية كاملة في التقارير الشهرية، واستراتيجية مبنية على بيانات حقيقية، والتزام بتحسين مستمر.",
    },
    {
      question: "ما الفرق بين السيو والإعلانات المدفوعة (PPC)؟",
      answer: "الإعلانات المدفوعة تعطيك نتائج فورية لكنها تتوقف فور إيقاف الميزانية. السيو يحتاج وقتاً أطول لكن نتائجه دائمة — الترافيك العضوي يستمر في النمو حتى بعد انتهاء العقد. الاستراتيجية المثلى تجمع بين الاثنين.",
    },
    {
      question: "هل تناسب خدماتكم الشركات الصغيرة؟",
      answer: "نعمل أساساً مع الشركات المتوسطة والكبيرة التي تبحث عن نتائج حقيقية ومستعدة للاستثمار في السيو. إذا كانت ميزانيتك محدودة، يمكنك البدء بفحص سيو شامل لمرة واحدة يعطيك خارطة طريق واضحة.",
    },
    {
      question: "هل تعملون مع شركات خارج المنطقة العربية؟",
      answer: "نعم. نخدم شركات أوروبية وأمريكية تدخل الأسواق العربية وتحتاج خبرة سيو عربي أصيل.",
      link: { href: "/arabic-seo-agency", label: "Arabic SEO Agency" },
    },
  ]

  // --- "Why Arabic SEO" highlight cards ---
  const whyArabicSeoCards = [
    {
      icon: Search,
      title: "الكلمات العربية مختلفة",
      description: "كلمة واحدة بالعربي ممكن يكون لها عشرات الصيغ. أدوات مثل Semrush وAhrefs تقلل حجم البحث العربي الفعلي بـ 2 إلى 5 أضعاف.",
    },
    {
      icon: Code,
      title: "البنية التقنية ثنائية اللغة",
      description: "تطبيق hreflang بشكل صحيح، التعامل مع RTL، واختيار بنية المجلدات الفرعية المناسبة — كل هذه تفاصيل تؤثر مباشرة على ترتيبك.",
    },
    {
      icon: Globe,
      title: "أقل من 1% محتوى عربي",
      description: "رغم وجود أكثر من 440 مليون ناطق بالعربية — هذا يعني منافسة أقل بكثير وفرص أكبر للتصدّر.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-webskeet-blue via-webskeet-blue/95 to-webskeet-blue/85 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-webskeet-gold rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              شركة سيو — خدمات تحسين محركات البحث الاحترافية
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed max-w-3xl mx-auto">
              هل موقعك يظهر في الصفحة الثانية أو الثالثة من جوجل؟ هل منافسوك يحصلون على العملاء الذين يبحثون عن خدماتك؟
            </p>
            <p className="text-base md:text-lg text-white/80 mb-4 leading-relaxed max-w-3xl mx-auto">
              ويب سكيت شركة سيو متخصصة في تحسين محركات البحث للمواقع العربية والإنجليزية. نساعد الشركات في الخليج والشرق الأوسط على تحقيق ظهور حقيقي في نتائج البحث، وتحويل هذا الظهور إلى عملاء وإيرادات.
            </p>
            <p className="text-sm md:text-base text-white/70 mb-8 leading-relaxed max-w-3xl mx-auto">
              لا نبيع وعوداً — نعمل مباشرة مع فريقك التقني لتنفيذ استراتيجيات سيو مبنية على البيانات، ونقيس النتائج كل شهر بأرقام واضحة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#consultation">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform w-full sm:w-auto">
                  احجز استشارة مجانية
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 hover:text-white w-full sm:w-auto">
                  تعرف على خدماتنا
                </Button>
              </Link>
            </div>
            <p className="text-sm text-white/60 mt-4">
              نحلل موقعك ونوريك فرص النمو خلال 30 دقيقة.
            </p>
          </div>
        </div>
      </section>

      {/* ====== WHY ARABIC SEO SECTION ====== */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
            لماذا تحتاج شركة سيو متخصصة في المحتوى العربي؟
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            أغلب شركات السيو في المنطقة تعمل بالإنجليزية أساساً وتضيف العربية كخدمة ثانوية. المشكلة؟ السيو العربي مختلف جذرياً عن الإنجليزي:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {whyArabicSeoCards.map((card, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-t-4 border-t-webskeet-blue">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-webskeet-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <card.icon className="h-8 w-8 text-webskeet-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-webskeet-blue/5 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto">
          <p className="text-lg font-semibold text-webskeet-blue">
            في ويب سكيت، السيو العربي ليس خدمة إضافية — هو تخصصنا الأساسي.
          </p>
        </div>
      </section>

      {/* ====== Mid-page CTA ====== */}
      <section className="container mx-auto px-4 pb-8">
        <div className="bg-gradient-to-l from-webskeet-gold/20 to-webskeet-blue/10 rounded-2xl p-8 text-center">
          <p className="text-xl font-bold text-webskeet-blue mb-4">هل تريد معرفة فرص السيو لموقعك؟</p>
          <Link href="#consultation">
            <Button size="lg" className="bg-webskeet-blue hover:bg-webskeet-blue/90 text-white text-lg px-8 py-6">
              احجز استشارة مجانية الآن
            </Button>
          </Link>
        </div>
      </section>

      {/* ====== SERVICES SECTION ====== */}
      <section id="services" className="bg-gradient-to-r from-webskeet-blue/5 to-webskeet-gold/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
              خدمات تحسين محركات البحث التي نقدمها
            </h2>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Icon strip */}
                    <div className={`${service.color} p-6 md:p-8 flex items-center justify-center md:w-20`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    {/* Content */}
                    <div className="p-6 md:p-8 flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-4">
                        {service.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      {service.footer && (
                        <p className="text-gray-700 font-medium mt-4 bg-gray-50 p-3 rounded-lg">{service.footer}</p>
                      )}
                      {service.link && (
                        <Link
                          href={service.link.href}
                          className="inline-flex items-center gap-2 text-webskeet-blue hover:underline font-medium mt-4"
                        >
                          {service.link.label}
                          <ChevronLeft className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PROCESS SECTION ====== */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
            كيف نعمل — منهجيتنا في 4 خطوات
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-16 right-[12.5%] left-[12.5%] h-1 bg-gradient-to-l from-webskeet-blue to-webskeet-gold rounded-full" />
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-webskeet-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg relative z-10">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 bg-webskeet-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-webskeet-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical cards */}
        <div className="md:hidden space-y-6">
          {processSteps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-webskeet-blue rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {index + 1}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-0.5 h-full bg-webskeet-blue/20 mt-2" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== WHY WEBSKEET SECTION ====== */}
      <section className="bg-gradient-to-r from-webskeet-blue/5 to-webskeet-gold/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
              لماذا ويب سكيت وليس وكالة أخرى؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-webskeet-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <diff.icon className="h-6 w-6 text-webskeet-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{diff.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{diff.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====== INDUSTRIES SECTION ====== */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
            القطاعات التي نخدمها
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            نقدم خدمات تحسين محركات البحث المتخصصة لهذه القطاعات:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-webskeet-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-webskeet-blue/10 transition-colors">
                  <industry.icon className="h-6 w-6 text-webskeet-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{industry.title}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ====== GEOGRAPHIC COVERAGE SECTION ====== */}
      <section className="bg-gradient-to-r from-webskeet-blue/5 to-webskeet-gold/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
              نخدم عملاء في كل أنحاء المنطقة
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {geoLocations.map((loc, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-webskeet-blue flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900">{loc.country}</h3>
                        {loc.cities && <p className="text-gray-600 text-sm">{loc.cities}</p>}
                        {loc.link && (
                          <Link
                            href={loc.link}
                            className="inline-flex items-center gap-1 text-webskeet-blue hover:underline text-sm font-medium mt-1"
                          >
                            {loc.linkLabel}
                            <ChevronLeft className="h-3 w-3" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">
              نعمل عن بُعد مع أي شركة في العالم تحتاج خبرة سيو عربي.
            </p>
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
            الأسئلة الشائعة عن خدمات السيو
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-right text-lg font-semibold hover:text-webskeet-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed text-base">
                  {faq.answer}
                  {faq.link && (
                    <>
                      {" "}
                      <Link
                        href={faq.link.href}
                        className="inline-flex items-center gap-1 text-webskeet-blue hover:underline font-medium"
                      >
                        {faq.link.label}
                        <ChevronLeft className="h-3 w-3" />
                      </Link>
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ====== FINAL CTA + CONSULTATION FORM ====== */}
      <section className="bg-gradient-to-r from-webskeet-blue/5 to-webskeet-gold/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
              ابدأ بتحسين ظهور موقعك اليوم
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              احجز استشارة مجانية مع خبير سيو في ويب سكيت. نحلل موقعك، نحدد المشاكل والفرص، ونضع لك خطة عمل واضحة — كل هذا في 30 دقيقة.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <div id="consultation">
        <ConsultationSection locale={locale} />
      </div>
    </div>
  )
}
