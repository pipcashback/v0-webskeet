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
import type { Locale } from "@/i18n/config"

// Google Sheets Webhook URL - Replace with your actual webhook URL after deploying the Google Apps Script
const GOOGLE_SHEETS_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbw0E_HUlGEIg3wVWcFkz6TfuLelCWJ97EQ1qUg4TBkkjuSf7HLQUrEjdBpruGn1Vbp7Pg/exec"

const translations = {
  en: {
    badge: "Free Consultation",
    heading: "Talk to SEO Experts",
    subheading: "We offer a free SEO consultation to help you understand your site's needs and how to improve its search engine visibility",
    formTitle: "Book a Free Consultation",
    firstName: "First Name",
    firstNamePlaceholder: "Enter your first name",
    lastName: "Last Name",
    lastNamePlaceholder: "Enter your last name",
    email: "Email",
    phone: "Phone Number",
    phonePlaceholder: "123456789",
    websiteLabel: "Website URL",
    websitePlaceholder: "https://example.com",
    budgetLabel: "Monthly Marketing Budget",
    budgetPlaceholder: "Select budget range",
    submitting: "Submitting...",
    submitButton: "Book a Call",
    toastSuccessTitle: "Your request has been sent successfully!",
    toastSuccessDesc: "Thank you! We will contact you soon to schedule your free consultation.",
    toastErrorTitle: "An error occurred while submitting",
    toastErrorDesc: "Please try again or contact us directly.",
    benefitsTitle: "What does the free consultation include?",
    benefit1: "Initial analysis of the current site",
    benefit2: "Target keyword evaluation",
    benefit3: "Competitor analysis",
    benefit4: "Initial optimization recommendations",
    benefit5: "Suggested action plan",
    benefit6: "Technical site structure review",
    benefit7: "Site speed measurement",
    reviewerName: "Ahmed Ibrahim",
    reviewInfo: "1 review \u2022 0 photos",
    reviewTime: "4 days ago",
    reviewText: "I worked with this team after reviewing their services myself, and I was genuinely impressed. Their work is not just theory. Their on-page SEO is excellent - they optimize titles, site speed, and internal structure very well. Their off-page SEO is built on clean, relevant links, which made a noticeable difference in rankings. Their work is professional and suitable for anyone who understands SEO.",
    expertsSectionTitle: "Our Search Engine Optimization Experts",
    expertsSectionDesc: "A team of specialists in search engine optimization to help our clients achieve the best results",
    expertName: "Mahmoud Ali",
    expertBio: "Specializing in search engine optimization (SEO) with extensive practical experience in analyzing and optimizing websites for the best search engine results. We are distinguished by practical experience and up-to-date knowledge of the latest SEO techniques and practices.",
    expertTag1: "Competitor Analysis",
    expertTag2: "Content Optimization",
    expertTag3: "Link Building",
    expertTag4: "Data Analysis",
    conceptsBadge: "Key Concepts",
    conceptsHeading: "The Meaning of",
    conceptsHeadingHighlight: "SEO",
    conceptsHeadingSuffix: "Search Engine Optimization",
    conceptsSubheading: "Each letter in \"RVSIK\" represents a core concept in the world of SEO and search engine optimization",
    letter1: "R",
    letter1Title: "Rankings",
    letter1Desc: "The primary goal of SEO is to improve your website's ranking in organic search results.",
    letter2: "V",
    letter2Title: "Volume",
    letter2Desc: "Measuring how many times a keyword is searched helps in choosing the right keywords.",
    letter3: "S",
    letter3Title: "Speed",
    letter3Desc: "A direct ranking factor that affects user experience and bounce rate.",
    letter4: "I",
    letter4Title: "Intent",
    letter4Desc: "User intent is the focus of modern SEO strategies, determining the type of content needed (informational, commercial, etc.).",
    letter5: "K",
    letter5Title: "Keywords",
    letter5Desc: "Understanding the purpose behind keyword usage, whether for buying, learning, or comparing.",
  },
  ar: {
    badge: "استشارة مجانية",
    heading: "تحدث مع خبراء تحسين محركات البحث",
    subheading: "نقدم استشارة SEO مجانية لمساعدتك على فهم احتياجات موقعك وكيفية تحسين ظهوره في محركات البحث",
    formTitle: "احجز موعد\u064Bا للاستشارة المجانية",
    firstName: "الاسم الأول",
    firstNamePlaceholder: "أدخل اسمك الأول",
    lastName: "الاسم الأخير",
    lastNamePlaceholder: "أدخل اسمك الأخير",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    phonePlaceholder: "123456789",
    websiteLabel: "رابط الموقع",
    websitePlaceholder: "https://example.com",
    budgetLabel: "الميزانية الشهرية للتسويق",
    budgetPlaceholder: "اختر نطاق الميزانية",
    submitting: "جاري الإرسال...",
    submitButton: "حجز مكالمة",
    toastSuccessTitle: "تم إرسال طلبك بنجاح!",
    toastSuccessDesc: "شكرا\u064B لك! سنتواصل معك قريبا\u064B لتحديد موعد الاستشارة المجانية.",
    toastErrorTitle: "حدث خطأ أثناء الإرسال",
    toastErrorDesc: "يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.",
    benefitsTitle: "ماذا تتضمن الاستشارة المجانية؟",
    benefit1: "تحليل أولي للموقع الحالي",
    benefit2: "تقييم الكلمات المفتاحية المستهدفة",
    benefit3: "تحليل المنافسين الرئيسيين",
    benefit4: "توصيات أولية للتحسين",
    benefit5: "اقتراح خطة عمل مناسبة",
    benefit6: "مراجعة البنية التقنية للموقع",
    benefit7: "قياس سرعة الموقع",
    reviewerName: "Ahmed Ibrahim",
    reviewInfo: "1 review \u2022 0 photos",
    reviewTime: "4 days ago",
    reviewText: "اشتغلت مع الفريق ده بعد ما راجعت خدماتهم بنفسي، وفعلا\u064B عجبني. إن شغلهم مش مجرد كلام نظري. عندهم شغل السيو الداخلي ممتاز، بيظبطوا الـ العناوين ، سرعة الموقع والبنية الداخلية كويس جدا\u064B. كمان السيو الخارجي عندهم مبني على روابط نظيفة وذات صلة. وده فرق معايا في الترتيب بشكل ملحوظ. شغلهم احترافي ومناسب للي فاهم يعني إيه سيو.",
    expertsSectionTitle: "خبراؤنا في مجال تحسين محركات البحث",
    expertsSectionDesc: "فريق من الخبراء المتخصصين في مجال تحسين محركات البحث لمساعدة عملائنا على تحقيق أفضل النتائج",
    expertName: "محمود علي",
    expertBio: " متخصص في تحسين محركات البحث (SEO) ولدينا خبرة عملية واسعة في تحليل المواقع وتحسينها للحصول على أفضل النتائج في محركات البحث. نتميز بالخبرة العملية والمعرفة المتجددة بأحدث تقنيات وممارسات تحسين محركات البحث.",
    expertTag1: "تحليل المنافسين",
    expertTag2: "تحسين المحتوى",
    expertTag3: "بناء الباك لينك",
    expertTag4: "تحليل البيانات",
    conceptsBadge: "مفاهيم أساسية",
    conceptsHeading: "معنى",
    conceptsHeadingHighlight: "تحسين",
    conceptsHeadingSuffix: "محركات البحث",
    conceptsSubheading: "كل حرف من كلمة \"تحسين\" يمثل مفهوم\u064Ba\u064B أساسي\u064Ba\u064B في عالم السيو (SEO) وتحسين محركات البحث",
    letter1: "ت",
    letter1Title: "ترتيب الموقع",
    letter1Desc: "الهدف الأساسي من السيو هو تحسين ترتيب الموقع في نتائج البحث العضوية.",
    letter2: "ح",
    letter2Title: "حجم البحث",
    letter2Desc: "قياس عدد المرات التي يتم فيها البحث عن كلمة مفتاحية معينة، ما يساعد في اختيار الكلمات المناسبة.",
    letter3: "س",
    letter3Title: "سرعة التحميل",
    letter3Desc: "عامل تصنيف مباشر، يؤثر على تجربة المستخدم ومعدل الارتداد.",
    letter4: "ي",
    letter4Title: "يوزر إنتنت",
    letter4Desc: "نية المستخدم، وهي محور استراتيجيات السيو الحديثة، وتحدد نوع المحتوى المطلوب (معلوماتي، تجاري، إلخ).",
    letter5: "ن",
    letter5Title: "نية الكلمات",
    letter5Desc: "فهم القصد من وراء استخدام الكلمات المفتاحية، سواء كان الهدف شراء، تعلم، أو مقارنة.",
  },
}

const ConsultationSection = ({ locale }: { locale: Locale }) => {
  const t = translations[locale]
  const isRtl = locale === "ar"

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
        title: t.toastSuccessTitle,
        description: t.toastSuccessDesc,
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
        title: t.toastErrorTitle,
        description: t.toastErrorDesc,
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
    { code: "+20", country: "\u0645\u0635\u0631", flag: "\ud83c\uddea\ud83c\uddec" },
    { code: "+966", country: "\u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629", flag: "\ud83c\uddf8\ud83c\udde6" },
    { code: "+971", country: "\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a", flag: "\ud83c\udde6\ud83c\uddea" },
    { code: "+965", country: "\u0627\u0644\u0643\u0648\u064a\u062a", flag: "\ud83c\uddf0\ud83c\uddfc" },
    { code: "+973", country: "\u0627\u0644\u0628\u062d\u0631\u064a\u0646", flag: "\ud83c\udde7\ud83c\udded" },
    { code: "+974", country: "\u0642\u0637\u0631", flag: "\ud83c\uddf6\ud83c\udde6" },
    { code: "+968", country: "\u0639\u0645\u0627\u0646", flag: "\ud83c\uddf4\ud83c\uddf2" },
    { code: "+962", country: "\u0627\u0644\u0623\u0631\u062f\u0646", flag: "\ud83c\uddef\ud83c\uddf4" },
    { code: "+961", country: "\u0644\u0628\u0646\u0627\u0646", flag: "\ud83c\uddf1\ud83c\udde7" },
    { code: "+970", country: "\u0641\u0644\u0633\u0637\u064a\u0646", flag: "\ud83c\uddf5\ud83c\uddf8" },
    { code: "+963", country: "\u0633\u0648\u0631\u064a\u0627", flag: "\ud83c\uddf8\ud83c\uddfe" },
    { code: "+964", country: "\u0627\u0644\u0639\u0631\u0627\u0642", flag: "\ud83c\uddee\ud83c\uddf6" },
    { code: "+212", country: "\u0627\u0644\u0645\u063a\u0631\u0628", flag: "\ud83c\uddf2\ud83c\udde6" },
    { code: "+213", country: "\u0627\u0644\u062c\u0632\u0627\u0626\u0631", flag: "\ud83c\udde9\ud83c\uddff" },
    { code: "+216", country: "\u062a\u0648\u0646\u0633", flag: "\ud83c\uddf9\ud83c\uddf3" },
    { code: "+218", country: "\u0644\u064a\u0628\u064a\u0627", flag: "\ud83c\uddf1\ud83c\uddfe" },
    { code: "+249", country: "\u0627\u0644\u0633\u0648\u062f\u0627\u0646", flag: "\ud83c\uddf8\ud83c\udde9" },
  ]

  const budgetRanges = locale === "ar"
    ? ["\u0623\u0642\u0644 \u0645\u0646 $500", "$500 - $1,000", "$1,000 - $2,500", "$2,500 - $5,000", "\u0623\u0643\u062b\u0631 \u0645\u0646 $5,000"]
    : ["Less than $500", "$500 - $1,000", "$1,000 - $2,500", "$2,500 - $5,000", "More than $5,000"]

  const benefitItems = [
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: t.benefit1,
    },
    {
      icon: <Zap className="h-5 w-5" />,
      text: t.benefit2,
    },
    {
      icon: <PieChart className="h-5 w-5" />,
      text: t.benefit3,
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      text: t.benefit4,
    },
    {
      icon: <Activity className="h-5 w-5" />,
      text: t.benefit5,
    },
    {
      icon: <Database className="h-5 w-5" />,
      text: t.benefit6,
    },
    {
      icon: <Gauge className="h-5 w-5" />,
      text: t.benefit7,
    },
  ]

  return (
    <section
      id="consultation"
      className="section-padding bg-gradient-to-b from-gray-50 via-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>

      {/* Decorative shapes */}
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-webskeet-blue/5 animate-slow-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-webskeet-gold/10 animate-float-vertical"></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-webskeet-blue/10"></div>
      <div className="absolute bottom-40 left-1/4 w-32 h-32 rounded-full bg-webskeet-gold/5 animate-float"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <span className="bg-webskeet-blue/10 text-webskeet-blue px-6 py-2 rounded-full text-sm font-medium">
              {t.badge}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 heading-gradient">
            {t.heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Custom Consultation Form */}
          <div className="lg:col-span-3">
            <Card className="glass-card overflow-hidden border-0 shadow-2xl">
              <div className="bg-gradient-to-l from-webskeet-blue/20 to-transparent p-6">
                <h3 className={`text-2xl font-bold ${isRtl ? "text-right" : "text-left"}`}>{t.formTitle}</h3>
              </div>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Name and Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className={`${isRtl ? "text-right" : "text-left"} block`}>
                        {t.firstName}
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={isRtl ? "text-right" : "text-left"}
                        placeholder={t.firstNamePlaceholder}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className={`${isRtl ? "text-right" : "text-left"} block`}>
                        {t.lastName}
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className={isRtl ? "text-right" : "text-left"}
                        placeholder={t.lastNamePlaceholder}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className={`${isRtl ? "text-right" : "text-left"} block`}>
                      {t.email}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={isRtl ? "text-right" : "text-left"}
                      placeholder="example@domain.com"
                    />
                  </div>

                  {/* Phone Number with Country Code */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className={`${isRtl ? "text-right" : "text-left"} block`}>
                      {t.phone}
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                        className={`flex-1 ${isRtl ? "text-right" : "text-left"}`}
                        placeholder={t.phonePlaceholder}
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
                    <Label htmlFor="website" className={`${isRtl ? "text-right" : "text-left"} block`}>
                      {t.websiteLabel}
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      required
                      value={formData.websiteUrl}
                      onChange={(e) => handleInputChange("websiteUrl", e.target.value)}
                      className={isRtl ? "text-right" : "text-left"}
                      placeholder={t.websitePlaceholder}
                    />
                  </div>

                  {/* Monthly Budget */}
                  <div className="space-y-2">
                    <Label htmlFor="budget" className={`${isRtl ? "text-right" : "text-left"} block`}>
                      {t.budgetLabel}
                    </Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value: string) => handleInputChange("budget", value)}
                      required
                    >
                      <SelectTrigger id="budget">
                        <SelectValue placeholder={t.budgetPlaceholder} />
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
                        <span className="animate-spin">{"\u23F3"}</span>
                        {t.submitting}
                      </span>
                    ) : (
                      t.submitButton
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info and Image */}
          <div className="lg:col-span-2 space-y-6">
            {/* Benefits Card */}
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="bg-gradient-to-l from-webskeet-blue/20 to-transparent p-6">
                <h3 className={`text-xl font-bold ${isRtl ? "text-right" : "text-left"}`}>{t.benefitsTitle}</h3>
              </div>
              <CardContent className={`p-4 ${isRtl ? "pr-6" : "pl-6"}`}>
                <ul className={`space-y-3 ${isRtl ? "pr-0" : "pl-0"}`}>
                  {benefitItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-start bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-all"
                    >
                      <span className={`flex items-center justify-center w-6 h-6 bg-webskeet-blue/10 text-webskeet-blue rounded-full ${isRtl ? "mr-2" : "mr-2"}`}>
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
                    <div className={`${isRtl ? "mr-3 text-right" : "ml-3 text-left"}`}>
                      <div className="font-medium">{t.reviewerName}</div>
                      <div className="text-sm text-gray-500">{t.reviewInfo}</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <div className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md">NEW</div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className={`${isRtl ? "mr-1" : "ml-1"} text-sm text-gray-600`}>{t.reviewTime}</span>
                    </div>
                  </div>

                  <p className={`text-gray-700 text-sm ${isRtl ? "text-right" : "text-left"} leading-relaxed`}>
                    {t.reviewText}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Expert section below consultation */}
        <div className="mt-16">
          <Separator className="my-8 bg-webskeet-blue/10" />
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold heading-gradient">{t.expertsSectionTitle}</h3>
            <p className="text-gray-600 mt-2">
              {t.expertsSectionDesc}
            </p>
          </div>

          <div className="bg-gradient-to-br from-webskeet-blue/5 to-webskeet-gold/5 p-4 shadow-lg rounded-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2 space-y-4 order-2 md:order-1">
                <h4 className={`text-xl font-bold ${isRtl ? "text-right" : "text-left"}`}>{t.expertName}</h4>
                <p className={`text-gray-700 ${isRtl ? "text-right" : "text-left"}`}>
                  {t.expertBio}
                </p>
                <div className={`flex flex-wrap gap-2 ${isRtl ? "justify-end" : "justify-start"}`}>
                  <span className="bg-webskeet-blue/10 text-webskeet-blue px-4 py-1 rounded-full text-sm">
                    {t.expertTag1}
                  </span>
                  <span className="bg-webskeet-gold/10 text-webskeet-blue px-4 py-1 rounded-full text-sm">
                    {t.expertTag2}
                  </span>
                  <span className="bg-webskeet-blue/10 text-webskeet-blue px-4 py-1 rounded-full text-sm">
                    {t.expertTag3}
                  </span>
                  <span className="bg-webskeet-gold/10 text-webskeet-blue px-4 py-1 rounded-full text-sm">
                    {t.expertTag4}
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-white p-3 rounded-xl shadow-md w-full">
                  <Image
                    src="/images/seo-expert.png"
                    alt={locale === "ar" ? "\u0641\u0631\u064a\u0642 \u062e\u0628\u0631\u0627\u0621 \u062a\u062d\u0633\u064a\u0646 \u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b" : "SEO Experts Team"}
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

      {/* SEO meaning section */}
      <section className="mt-16 py-16 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-20 w-48 h-48 bg-webskeet-gold/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-webskeet-blue/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-2">
              <span className="bg-webskeet-blue/10 text-webskeet-blue px-4 py-1 rounded-full text-sm font-medium">
                {t.conceptsBadge}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.conceptsHeading} <span className="heading-gradient">{t.conceptsHeadingHighlight}</span> {t.conceptsHeadingSuffix}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.conceptsSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {/* Letter 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center group-hover:bg-webskeet-blue/20 transition-colors">
                  <span className="text-3xl font-bold text-webskeet-blue">{t.letter1}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{t.letter1Title}</h3>
              <p className="text-sm text-gray-600 text-center">
                {t.letter1Desc}
              </p>
              <div className="mt-4 flex justify-center">
                <Target className="h-6 w-6 text-webskeet-blue/70" />
              </div>
            </div>

            {/* Letter 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center group-hover:bg-webskeet-blue/20 transition-colors">
                  <span className="text-3xl font-bold text-webskeet-blue">{t.letter2}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{t.letter2Title}</h3>
              <p className="text-sm text-gray-600 text-center">
                {t.letter2Desc}
              </p>
              <div className="mt-4 flex justify-center">
                <BarChart className="h-6 w-6 text-webskeet-blue/70" />
              </div>
            </div>

            {/* Letter 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center group-hover:bg-webskeet-blue/20 transition-colors">
                  <span className="text-3xl font-bold text-webskeet-blue">{t.letter3}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{t.letter3Title}</h3>
              <p className="text-sm text-gray-600 text-center">
                {t.letter3Desc}
              </p>
              <div className="mt-4 flex justify-center">
                <Gauge className="h-6 w-6 text-webskeet-blue/70" />
              </div>
            </div>

            {/* Letter 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center group-hover:bg-webskeet-blue/20 transition-colors">
                  <span className="text-3xl font-bold text-webskeet-blue">{t.letter4}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{t.letter4Title}</h3>
              <p className="text-sm text-gray-600 text-center">
                {t.letter4Desc}
              </p>
              <div className="mt-4 flex justify-center">
                <Users className="h-6 w-6 text-webskeet-blue/70" />
              </div>
            </div>

            {/* Letter 5 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-webskeet-blue group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-webskeet-blue/10 rounded-full flex items-center justify-center group-hover:bg-webskeet-blue/20 transition-colors">
                  <span className="text-3xl font-bold text-webskeet-blue">{t.letter5}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{t.letter5Title}</h3>
              <p className="text-sm text-gray-600 text-center">
                {t.letter5Desc}
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
