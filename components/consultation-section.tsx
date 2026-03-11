"use client"

import type React from "react"

import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Lightbulb,
  Star,
  CheckCircle,
  Zap,
  PieChart,
  Activity,
  Database,
  Gauge,
  Target,
  BarChart,
  Users,
} from "lucide-react"
import Image from "next/image"
import { toast } from "@/hooks/use-toast"
// Don't import the image directly, use the path in the Image component instead

// Google Sheets Webhook URL - Replace with your actual webhook URL after deploying the Google Apps Script
const GOOGLE_SHEETS_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbw0E_HUlGEIg3wVWcFkz6TfuLelCWJ97EQ1qUg4TBkkjuSf7HLQUrEjdBpruGn1Vbp7Pg/exec"

const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+20",
    phoneNumber: "",
    websiteUrl: "",
    budget: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Step 1: Send data to Google Sheets (if configured)
      if (GOOGLE_SHEETS_WEBHOOK !== "YOUR_WEBHOOK_URL_HERE") {
        await fetch(GOOGLE_SHEETS_WEBHOOK, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
      }

      // Step 2: Send data to Mailchimp
      const mailchimpFormData = new FormData()
      mailchimpFormData.append("EMAIL", formData.email)
      mailchimpFormData.append("FNAME", formData.firstName)
      mailchimpFormData.append("LNAME", formData.lastName)
      mailchimpFormData.append("PHONE", `${formData.countryCode}${formData.phoneNumber}`)
      mailchimpFormData.append("COMPANY", formData.websiteUrl)
      mailchimpFormData.append("tags", "254") // Tag for consultation requests

      // Add budget as a note in the merge fields (you can create a custom field in Mailchimp for this)
      mailchimpFormData.append("MMERGE7", formData.budget) // Custom field for budget

      await fetch("https://dawenly.us9.list-manage.com/subscribe/post?u=06494959efc4f17721cdd07b3&id=d035fbca50", {
        method: "POST",
        mode: "no-cors",
        body: mailchimpFormData,
      })

      // Show success message
      toast({
        title: "تم إرسال طلبك بنجاح!",
        description: "شكراً لك! سنتواصل معك قريباً لتحديد موعد الاستشارة المجانية.",
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+20",
        phoneNumber: "",
        websiteUrl: "",
        budget: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "حدث خطأ أثناء الإرسال",
        description: "يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const countryCodes = [
    { code: "+20", country: "مصر", flag: "🇪🇬" },
    { code: "+966", country: "السعودية", flag: "🇸🇦" },
    { code: "+971", country: "الإمارات", flag: "🇦🇪" },
    { code: "+965", country: "الكويت", flag: "🇰🇼" },
    { code: "+973", country: "البحرين", flag: "🇧🇭" },
    { code: "+974", country: "قطر", flag: "🇶🇦" },
    { code: "+968", country: "عمان", flag: "🇴🇲" },
    { code: "+962", country: "الأردن", flag: "🇯🇴" },
    { code: "+961", country: "لبنان", flag: "🇱🇧" },
    { code: "+970", country: "فلسطين", flag: "🇵🇸" },
    { code: "+963", country: "سوريا", flag: "🇸🇾" },
    { code: "+964", country: "العراق", flag: "🇮🇶" },
    { code: "+212", country: "المغرب", flag: "🇲🇦" },
    { code: "+213", country: "الجزائر", flag: "🇩🇿" },
    { code: "+216", country: "تونس", flag: "🇹🇳" },
    { code: "+218", country: "ليبيا", flag: "🇱🇾" },
    { code: "+249", country: "السودان", flag: "🇸🇩" },
  ]

  const budgetRanges = ["أقل من $500", "$500 - $1,000", "$1,000 - $2,500", "$2,500 - $5,000", "أكثر من $5,000"]

  const benefitItems = [
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "تحليل أولي للموقع الحالي",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      text: "تقييم الكلمات المفتاحية المستهدفة",
    },
    {
      icon: <PieChart className="h-5 w-5" />,
      text: "تحليل المنافسين الرئيسيين",
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      text: "توصيات أولية للتحسين",
    },
    {
      icon: <Activity className="h-5 w-5" />,
      text: "اقتراح خطة عمل مناسبة",
    },
    {
      icon: <Database className="h-5 w-5" />,
      text: "مراجعة البنية التقنية للموقع",
    },
    {
      icon: <Gauge className="h-5 w-5" />,
      text: "قياس سرعة الموقع",
    },
  ]

  return (
    <section
      id="consultation"
      className="section-padding bg-gradient-to-b from-gray-50 via-gray-50 to-white relative overflow-hidden"
    >
      {/* زخارف خلفية */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>

      {/* أشكال زخرفية */}
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-webskeet-blue/5 animate-slow-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-webskeet-gold/10 animate-float-vertical"></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-webskeet-blue/10"></div>
      <div className="absolute bottom-40 left-1/4 w-32 h-32 rounded-full bg-webskeet-gold/5 animate-float"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <span className="bg-webskeet-blue/10 text-webskeet-blue px-6 py-2 rounded-full text-sm font-medium">
              استشارة مجانية
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 heading-gradient">
            تحدث مع خبراء تحسين محركات البحث
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم استشارة SEO مجانية لمساعدتك على فهم احتياجات موقعك وكيفية تحسين ظهوره في محركات البحث
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Custom Consultation Form */}
          <div className="lg:col-span-3">
            <Card className="glass-card overflow-hidden border-0 shadow-2xl">
              <div className="bg-gradient-to-l from-webskeet-blue/20 to-transparent p-6">
                <h3 className="text-2xl font-bold text-right">احجز موعدًا للاستشارة المجانية</h3>
              </div>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Name and Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-right block">
                        الاسم الأول
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="text-right"
                        placeholder="أدخل اسمك الأول"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-right block">
                        الاسم الأخير
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="text-right"
                        placeholder="أدخل اسمك الأخير"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-right block">
                      البريد الإلكتروني
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="text-right"
                      placeholder="example@domain.com"
                    />
                  </div>

                  {/* Phone Number with Country Code */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-right block">
                      رقم الهاتف
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                        className="flex-1 text-right"
                        placeholder="123456789"
                      />
                      <Select
                        value={formData.countryCode}
                        onValueChange={(value: string) => handleInputChange("countryCode", value)}
                      >
                        <SelectTrigger className="w-[140px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              <span className="flex items-center gap-2">
                                <span>{country.flag}</span>
                                <span>{country.code}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Website URL */}
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-right block">
                      رابط الموقع
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      required
                      value={formData.websiteUrl}
                      onChange={(e) => handleInputChange("websiteUrl", e.target.value)}
                      className="text-right"
                      placeholder="https://example.com"
                    />
                  </div>

                  {/* Monthly Budget */}
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-right block">
                      الميزانية الشهرية للتسويق
                    </Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value: string) => handleInputChange("budget", value)}
                      required
                    >
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="اختر نطاق الميزانية" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-webskeet-blue hover:bg-webskeet-blue/90 text-white font-bold py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin">⏳</span>
                        جاري الإرسال...
                      </span>
                    ) : (
                      "حجز مكالمة"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* معلومات وصورة */}
          <div className="lg:col-span-2 space-y-6">
            {/* بطاقة الفوائد والمميزات */}
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="bg-gradient-to-l from-webskeet-blue/20 to-transparent p-6">
                <h3 className="text-xl font-bold text-right">ماذا تتضمن الاستشارة المجانية؟</h3>
              </div>
              <CardContent className="p-4 pr-6">
                <ul className="space-y-3 pr-0">
                  {benefitItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-start bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-all"
                    >
                      <span className="flex items-center justify-center w-6 h-6 bg-webskeet-blue/10 text-webskeet-blue rounded-full mr-2">
                        {item.icon}
                      </span>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Google Review Card */}
                <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200 shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-teal-600 rounded-full text-white flex items-center justify-center font-bold text-xl">
                      A
                    </div>
                    <div className="mr-3 text-right">
                      <div className="font-medium">Ahmed Ibrahim</div>
                      <div className="text-sm text-gray-500">1 review • 0 photos</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <div className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md">NEW</div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="mr-1 text-sm text-gray-600">4 days ago</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm text-right leading-relaxed">
                    اشتغلت مع الفريق ده بعد ما راجعت خدماتهم بنفسي، وفعلاً عجبني. إن شغلهم مش مجرد كلام نظري. عندهم شغل
                    السيو الداخلي ممتاز، بيظبطوا الـ العناوين ، سرعة الموقع والبنية الداخلية كويس جداً. كمان السيو
                    الخارجي عندهم مبني على روابط نظيفة وذات صلة. وده فرق معايا في الترتيب بشكل ملحوظ. شغلهم احترافي
                    ومناسب للي فاهم يعني إيه سيو.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* إضافة الصورة تحت الاستشارة */}
        <div className="mt-16">
          <Separator className="my-8 bg-webskeet-blue/10" />
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold heading-gradient">خبراؤنا في مجال تحسين محركات البحث</h3>
            <p className="text-gray-600 mt-2">
              فريق من الخبراء المتخصصين في مجال تحسين محركات البحث لمساعدة عملائنا على تحقيق أفضل النتائج
            </p>
          </div>

          <div className="bg-gradient-to-br from-webskeet-blue/5 to-webskeet-gold/5 p-4 shadow-lg rounded-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2 space-y-4 order-2 md:order-1">
                <h4 className="text-xl font-bold text-right">محمود علي</h4>
                <p className="text-gray-700 text-right">
                  {" "}
                  متخصص في تحسين محركات البحث (SEO) ولدينا خبرة عملية واسعة في تحليل المواقع وتحسينها للحصول على أفضل
                  النتائج في محركات البحث. نتميز بالخبرة العملية والمعرفة المتجددة بأحدث تقنيات وممارسات تحسين محركات
                  البحث.
                </p>
                <div className="flex flex-wrap gap-2 justify-end">
                  <span className="bg-webskeet-blue/10 text-webskeet-blue px-4 py-1 rounded-full text-sm">
                    تحليل المنافسين
                  </span>
                  <span className="bg-webskeet-gold/10 text-webskeet-blue px-4 py-1 rounded-full text-sm">
                    تحسين المحتوى
                  </span>
                  <span className="bg-webskeet-blue/10 text-webskeet-blue px-4 py-1 rounded-full text-sm">
                    بناء الباك لينك
                  </span>
                  <span className="bg-webskeet-gold/10 text-webskeet-blue px-4 py-1 rounded-full text-sm">
                    تحليل البيانات
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-white p-3 rounded-xl shadow-md w-full">
                  <Image
                    src="/images/seo-expert.png"
                    alt="فريق خبراء تحسين محركات البحث"
                    width={192}
                    height={192}
                    className="rounded-full object-cover mx-auto w-48 h-48"
                    quality={85}
                    sizes="(max-width: 768px) 192px, 192px"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* إضافة قسم معنى تحسين محركات البحث */}
      <section className="mt-16 py-16 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
        {/* زخارف الخلفية */}
        <div className="absolute top-20 left-20 w-48 h-48 bg-webskeet-gold/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-webskeet-blue/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-2">
              <span className="bg-webskeet-blue/10 text-webskeet-blue px-4 py-1 rounded-full text-sm font-medium">
                مفاهيم أساسية
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              معنى <span className="heading-gradient">تحسين</span> محركات البحث
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              كل حرف من كلمة "تحسين" يمثل مفهومًا أساسيًا في عالم السيو (SEO) وتحسين محركات البحث
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {/* ت - ترتيب الموقع */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center group-hover:bg-webskeet-blue/20 transition-colors">
                  <span className="text-3xl font-bold text-webskeet-blue">ت</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">ترتيب الموقع</h3>
              <p className="text-sm text-gray-600 text-center">
                الهدف الأساسي من السيو هو تحسين ترتيب الموقع في نتائج البحث العضوية.
              </p>
              <div className="mt-4 flex justify-center">
                <Target className="h-6 w-6 text-webskeet-blue/70" />
              </div>
            </div>

            {/* ح - حجم البحث */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center group-hover:bg-webskeet-blue/20 transition-colors">
                  <span className="text-3xl font-bold text-webskeet-blue">ح</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">حجم البحث</h3>
              <p className="text-sm text-gray-600 text-center">
                قياس عدد المرات التي يتم فيها البحث عن كلمة مفتاحية معينة، ما يساعد في اختيار الكلمات المناسبة.
              </p>
              <div className="mt-4 flex justify-center">
                <BarChart className="h-6 w-6 text-webskeet-blue/70" />
              </div>
            </div>

            {/* س - سرعة التحميل */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center group-hover:bg-webskeet-blue/20 transition-colors">
                  <span className="text-3xl font-bold text-webskeet-blue">س</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">سرعة التحميل</h3>
              <p className="text-sm text-gray-600 text-center">
                عامل تصنيف مباشر، يؤثر على تجربة المستخدم ومعدل الارتداد.
              </p>
              <div className="mt-4 flex justify-center">
                <Gauge className="h-6 w-6 text-webskeet-blue/70" />
              </div>
            </div>

            {/* ي - يوزر إنتنت */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center group-hover:bg-webskeet-blue/20 transition-colors">
                  <span className="text-3xl font-bold text-webskeet-blue">ي</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">يوزر إنتنت</h3>
              <p className="text-sm text-gray-600 text-center">
                نية المستخدم، وهي محور استراتيجيات السيو الحديثة، وتحدد نوع المحتوى المطلوب (معلوماتي، تجاري، إلخ).
              </p>
              <div className="mt-4 flex justify-center">
                <Users className="h-6 w-6 text-webskeet-blue/70" />
              </div>
            </div>

            {/* ن - نية الكلمات المفتاحية */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center group-hover:bg-webskeet-blue/20 transition-colors">
                  <span className="text-3xl font-bold text-webskeet-blue">ن</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">نية الكلمات</h3>
              <p className="text-sm text-gray-600 text-center">
                فهم القصد من وراء استخدام الكلمات المفتاحية، سواء كان الهدف شراء، تعلم، أو مقارنة.
              </p>
              <div className="mt-4 flex justify-center">
                <Lightbulb className="h-6 w-6 text-webskeet-blue/70" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ConsultationSection
