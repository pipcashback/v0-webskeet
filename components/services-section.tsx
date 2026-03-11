import { Link, LineChartIcon as ChartLine, Search, Award, TrendingUp, BarChart } from "lucide-react"

const ServicesSection = () => {
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
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">خدماتنا</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا المميزة</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نقدم لك مجموعة من الخدمات الاحترافية لتعزيز تواجدك الرقمي وتحسين ترتيب موقعك في محركات البحث
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="modern-card p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="feature-icon bg-primary/10 p-4 rounded-xl mb-6">
                <Link className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">بناء الروابط الخلفية</h3>
              <p className="text-gray-600 mb-6">
                نقوم بإنشاء روابط خلفية قوية من مواقع عربية موثوقة بتصنيف DA 30+ لتعزيز سلطة موقعك وتحسين ترتيبه في
                محركات البحث.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-webskeet-gold rounded-full inline-block ml-2"></span>
                  <span>روابط من مواقع عربية مرموقة</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-webskeet-gold rounded-full inline-block ml-2"></span>
                  <span>محتوى أصلي وذو صلة</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-webskeet-gold rounded-full inline-block ml-2"></span>
                  <span>روابط دائمة غير قابلة للإزالة</span>
                </li>
              </ul>
            </div>

            <div className="modern-card p-8 hover:-translate-y-2 transition-all duration-300 md:transform md:translate-y-6">
              <div className="feature-icon bg-primary/10 p-4 rounded-xl mb-6">
                <BarChart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">تحليل المواقع</h3>
              <p className="text-gray-600 mb-6">
                نقدم تحليلاً شاملاً لموقعك الإلكتروني وتحديد نقاط القوة والضعف ومقارنته بالمنافسين لوضع استراتيجية فعالة.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-webskeet-gold rounded-full inline-block ml-2"></span>
                  <span>تحليل الكلمات المفتاحية</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-webskeet-gold rounded-full inline-block ml-2"></span>
                  <span>تقييم الروابط الحالية</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-webskeet-gold rounded-full inline-block ml-2"></span>
                  <span>تحليل المنافسين</span>
                </li>
              </ul>
            </div>

            <div className="modern-card p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="feature-icon bg-primary/10 p-4 rounded-xl mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">استشارات SEO</h3>
              <p className="text-gray-600 mb-6">
                نقدم استشارات متخصصة في تحسين محركات البحث لمساعدتك على تحقيق أهدافك وتجاوز المنافسين في النتائج
                البحثية.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-webskeet-gold rounded-full inline-block ml-2"></span>
                  <span>استراتيجية محتوى فعالة</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-webskeet-gold rounded-full inline-block ml-2"></span>
                  <span>تحسين تقني للموقع</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-webskeet-gold rounded-full inline-block ml-2"></span>
                  <span>استراتيجية روابط خارجية</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Added benefits banner */}
          <div className="mt-16 bg-gradient-to-r from-webskeet-blue/80 to-webskeet-blue text-white p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">تحسين الترتيب</h4>
                <p className="text-white/80">ارتفاع ملحوظ في ترتيب موقعك على محركات البحث</p>
              </div>

              <div className="text-center">
                <ChartLine className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">زيادة الزوار</h4>
                <p className="text-white/80">زيادة عدد الزوار المستهدفين إلى موقعك الإلكتروني</p>
              </div>

              <div className="text-center">
                <Search className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">استهداف دقيق</h4>
                <p className="text-white/80">الوصول إلى العملاء المحتملين المهتمين بخدماتك ومنتجاتك</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesSection
