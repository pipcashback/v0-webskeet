"use client"

import { Building, Globe, Users, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutClient() {
  return (
    <main className="flex-grow">
      {/* قسم الترويسة */}
      <section className="bg-webskeet-blue/5 py-20 px-4 relative overflow-hidden">
        {/* زخارف الخلفية */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-webskeet-blue/10 rounded-full opacity-70"></div>
        <div className="absolute top-1/2 left-10 w-40 h-40 bg-webskeet-blue/10 rounded-full opacity-50"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              تعرف على <span className="text-webskeet-blue">ويب سكيت</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              وكالة متخصصة في تحسين محركات البحث، نعمل على تعزيز حضورك الرقمي وزيادة الزيارات العضوية لموقعك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-webskeet-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-webskeet-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">100+</h3>
              <p className="text-gray-600">عميل راضٍ</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-webskeet-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-webskeet-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">7+</h3>
              <p className="text-gray-600">سنوات خبرة</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-webskeet-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-webskeet-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">رابط تم بناؤه</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم قصتنا */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="فريق ويب سكيت"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-xl object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 800px"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-lg border-t-4 border-webskeet-blue">
                  <p className="font-bold text-lg">رؤيتنا</p>
                  <p className="text-gray-600">ريادة سوق تحسين محركات البحث في الشرق الأوسط</p>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block mb-4">
                <span className="bg-webskeet-blue/10 text-webskeet-blue px-4 py-1 rounded-full text-sm font-medium">
                  قصتنا
                </span>
              </div>

              <h2 className="text-3xl font-bold mb-6">منذ البداية وحتى الآن</h2>

              <p className="text-lg text-gray-700 mb-6">
                تأسست شركة ويب سكيت عام 2018 بفريق صغير من المتخصصين في مجال تحسين محركات البحث، انطلاقًا من شغفهم بتقديم
                حلول تسويقية رقمية فعالة للشركات العربية.
              </p>

              <p className="text-lg text-gray-700 mb-8">
                نمت الشركة لتصبح واحدة من الشركات الرائدة في مجال تحسين محركات البحث بالسوق العربي، مع فروع في مصر
                والإمارات، وفريق عمل متكامل يتمتع بخبرة واسعة في جميع جوانب التسويق الرقمي وتحسين محركات البحث.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white p-4 border border-gray-200 rounded-lg flex items-center hover:border-webskeet-blue transition-colors">
                  <div className="bg-webskeet-blue/10 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-webskeet-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold">استراتيجية متكاملة</h4>
                    <p className="text-sm text-gray-600">نعتمد على خطط مدروسة</p>
                  </div>
                </div>

                <div className="bg-white p-4 border border-gray-200 rounded-lg flex items-center hover:border-webskeet-blue transition-colors">
                  <div className="bg-webskeet-blue/10 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-webskeet-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold">نتائج مضمونة</h4>
                    <p className="text-sm text-gray-600">التزام بالجودة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم القيم */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-webskeet-blue/10 text-webskeet-blue px-4 py-1 rounded-full text-sm font-medium">
                قيمنا
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-6">ما يميزنا</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              نعمل وفق منظومة قيم راسخة تضمن تقديم أفضل النتائج لعملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center border-t-4 border-webskeet-blue">
              <div className="bg-webskeet-blue/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-webskeet-blue font-bold text-xl">01</span>
              </div>
              <h3 className="font-bold text-lg mb-2">الشفافية</h3>
              <p className="text-sm text-gray-700">نؤمن بتقديم تقارير دقيقة وواضحة للعملاء عن كل الإجراءات والنتائج</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center border-t-4 border-webskeet-blue">
              <div className="bg-webskeet-blue/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-webskeet-blue font-bold text-xl">02</span>
              </div>
              <h3 className="font-bold text-lg mb-2">الابتكار</h3>
              <p className="text-sm text-gray-700">نبحث دائمًا عن أحدث الطرق والاستراتيجيات لتحقيق أفضل النتائج</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center border-t-4 border-webskeet-blue">
              <div className="bg-webskeet-blue/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-webskeet-blue font-bold text-xl">03</span>
              </div>
              <h3 className="font-bold text-lg mb-2">الالتزام</h3>
              <p className="text-sm text-gray-700">نلتزم بتحقيق الأهداف ضمن الإطار الزمني المحدد مع ضمان الجودة</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center border-t-4 border-webskeet-blue">
              <div className="bg-webskeet-blue/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-webskeet-blue font-bold text-xl">04</span>
              </div>
              <h3 className="font-bold text-lg mb-2">النمو المستمر</h3>
              <p className="text-sm text-gray-700">نهدف لتحقيق نمو مستدام لعملائنا من خلال استراتيجيات طويلة المدى</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم دعوة للعمل */}
      <section className="py-16 px-4 bg-webskeet-blue/80 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">هل أنت مستعد لتحسين ظهور موقعك في محركات البحث؟</h2>
          <p className="text-xl mb-8 opacity-90">دعنا نساعدك في تحقيق نمو حقيقي لموقعك وزيادة عدد الزوار المستهدفين.</p>

          <Link href="/#consultation">
            <Button className="bg-white text-webskeet-blue hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all">
              ابدأ الآن مع استشارة مجانية
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
