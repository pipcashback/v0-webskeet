"use client"

import type React from "react"

import { useState, useRef, useEffect, useMemo } from "react"
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
  ChevronDown,
  Search,
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

// Country code data with both Arabic and English names, grouped by region
interface CountryCodeEntry {
  code: string
  nameAr: string
  nameEn: string
  flag: string
  group: "arab" | "international"
}

const allCountryCodes: CountryCodeEntry[] = [
  // Arab countries
  { code: "+20", nameAr: "مصر", nameEn: "Egypt", flag: "🇪🇬", group: "arab" },
  { code: "+966", nameAr: "السعودية", nameEn: "Saudi Arabia", flag: "🇸🇦", group: "arab" },
  { code: "+971", nameAr: "الإمارات", nameEn: "UAE", flag: "🇦🇪", group: "arab" },
  { code: "+965", nameAr: "الكويت", nameEn: "Kuwait", flag: "🇰🇼", group: "arab" },
  { code: "+973", nameAr: "البحرين", nameEn: "Bahrain", flag: "🇧🇭", group: "arab" },
  { code: "+974", nameAr: "قطر", nameEn: "Qatar", flag: "🇶🇦", group: "arab" },
  { code: "+968", nameAr: "عمان", nameEn: "Oman", flag: "🇴🇲", group: "arab" },
  { code: "+962", nameAr: "الأردن", nameEn: "Jordan", flag: "🇯🇴", group: "arab" },
  { code: "+961", nameAr: "لبنان", nameEn: "Lebanon", flag: "🇱🇧", group: "arab" },
  { code: "+970", nameAr: "فلسطين", nameEn: "Palestine", flag: "🇵🇸", group: "arab" },
  { code: "+963", nameAr: "سوريا", nameEn: "Syria", flag: "🇸🇾", group: "arab" },
  { code: "+964", nameAr: "العراق", nameEn: "Iraq", flag: "🇮🇶", group: "arab" },
  { code: "+212", nameAr: "المغرب", nameEn: "Morocco", flag: "🇲🇦", group: "arab" },
  { code: "+213", nameAr: "الجزائر", nameEn: "Algeria", flag: "🇩🇿", group: "arab" },
  { code: "+216", nameAr: "تونس", nameEn: "Tunisia", flag: "🇹🇳", group: "arab" },
  { code: "+218", nameAr: "ليبيا", nameEn: "Libya", flag: "🇱🇾", group: "arab" },
  { code: "+249", nameAr: "السودان", nameEn: "Sudan", flag: "🇸🇩", group: "arab" },
  { code: "+967", nameAr: "اليمن", nameEn: "Yemen", flag: "🇾🇪", group: "arab" },
  // International countries
  { code: "+1", nameAr: "الولايات المتحدة", nameEn: "United States", flag: "🇺🇸", group: "international" },
  { code: "+44", nameAr: "المملكة المتحدة", nameEn: "United Kingdom", flag: "🇬🇧", group: "international" },
  { code: "+49", nameAr: "ألمانيا", nameEn: "Germany", flag: "🇩🇪", group: "international" },
  { code: "+33", nameAr: "فرنسا", nameEn: "France", flag: "🇫🇷", group: "international" },
  { code: "+39", nameAr: "إيطاليا", nameEn: "Italy", flag: "🇮🇹", group: "international" },
  { code: "+34", nameAr: "إسبانيا", nameEn: "Spain", flag: "🇪🇸", group: "international" },
  { code: "+31", nameAr: "هولندا", nameEn: "Netherlands", flag: "🇳🇱", group: "international" },
  { code: "+46", nameAr: "السويد", nameEn: "Sweden", flag: "🇸🇪", group: "international" },
  { code: "+47", nameAr: "النرويج", nameEn: "Norway", flag: "🇳🇴", group: "international" },
  { code: "+45", nameAr: "الدنمارك", nameEn: "Denmark", flag: "🇩🇰", group: "international" },
  { code: "+41", nameAr: "سويسرا", nameEn: "Switzerland", flag: "🇨🇭", group: "international" },
  { code: "+43", nameAr: "النمسا", nameEn: "Austria", flag: "🇦🇹", group: "international" },
  { code: "+32", nameAr: "بلجيكا", nameEn: "Belgium", flag: "🇧🇪", group: "international" },
  { code: "+90", nameAr: "تركيا", nameEn: "Turkey", flag: "🇹🇷", group: "international" },
  { code: "+91", nameAr: "الهند", nameEn: "India", flag: "🇮🇳", group: "international" },
  { code: "+86", nameAr: "الصين", nameEn: "China", flag: "🇨🇳", group: "international" },
  { code: "+81", nameAr: "اليابان", nameEn: "Japan", flag: "🇯🇵", group: "international" },
  { code: "+82", nameAr: "كوريا الجنوبية", nameEn: "South Korea", flag: "🇰🇷", group: "international" },
  { code: "+61", nameAr: "أستراليا", nameEn: "Australia", flag: "🇦🇺", group: "international" },
  { code: "+64", nameAr: "نيوزيلندا", nameEn: "New Zealand", flag: "🇳🇿", group: "international" },
  { code: "+55", nameAr: "البرازيل", nameEn: "Brazil", flag: "🇧🇷", group: "international" },
  { code: "+52", nameAr: "المكسيك", nameEn: "Mexico", flag: "🇲🇽", group: "international" },
  { code: "+7", nameAr: "روسيا", nameEn: "Russia", flag: "🇷🇺", group: "international" },
  { code: "+27", nameAr: "جنوب أفريقيا", nameEn: "South Africa", flag: "🇿🇦", group: "international" },
  { code: "+234", nameAr: "نيجيريا", nameEn: "Nigeria", flag: "🇳🇬", group: "international" },
  { code: "+254", nameAr: "كينيا", nameEn: "Kenya", flag: "🇰🇪", group: "international" },
  { code: "+60", nameAr: "ماليزيا", nameEn: "Malaysia", flag: "🇲🇾", group: "international" },
  { code: "+65", nameAr: "سنغافورة", nameEn: "Singapore", flag: "🇸🇬", group: "international" },
  { code: "+62", nameAr: "إندونيسيا", nameEn: "Indonesia", flag: "🇮🇩", group: "international" },
  { code: "+63", nameAr: "الفلبين", nameEn: "Philippines", flag: "🇵🇭", group: "international" },
  { code: "+66", nameAr: "تايلاند", nameEn: "Thailand", flag: "🇹🇭", group: "international" },
  { code: "+48", nameAr: "بولندا", nameEn: "Poland", flag: "🇵🇱", group: "international" },
  { code: "+351", nameAr: "البرتغال", nameEn: "Portugal", flag: "🇵🇹", group: "international" },
  { code: "+30", nameAr: "اليونان", nameEn: "Greece", flag: "🇬🇷", group: "international" },
  { code: "+353", nameAr: "أيرلندا", nameEn: "Ireland", flag: "🇮🇪", group: "international" },
  { code: "+358", nameAr: "فنلندا", nameEn: "Finland", flag: "🇫🇮", group: "international" },
  { code: "+92", nameAr: "باكستان", nameEn: "Pakistan", flag: "🇵🇰", group: "international" },
  { code: "+880", nameAr: "بنغلاديش", nameEn: "Bangladesh", flag: "🇧🇩", group: "international" },
]

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

  // Country code dropdown state
  const [codeDropdownOpen, setCodeDropdownOpen] = useState(false)
  const [codeSearch, setCodeSearch] = useState("")
  const codeDropdownRef = useRef<HTMLDivElement>(null)
  const codeSearchInputRef = useRef<HTMLInputElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (codeDropdownRef.current && !codeDropdownRef.current.contains(e.target as Node)) {
        setCodeDropdownOpen(false)
        setCodeSearch("")
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Focus search input when dropdown opens
  useEffect(() => {
    if (codeDropdownOpen && codeSearchInputRef.current) {
      codeSearchInputRef.current.focus()
    }
  }, [codeDropdownOpen])

  // Order countries based on locale: Arab first for AR, International first for EN
  const orderedCountries = useMemo(() => {
    const arab = allCountryCodes.filter((c) => c.group === "arab")
    const intl = allCountryCodes.filter((c) => c.group === "international")
    return isRtl ? [...arab, ...intl] : [...intl, ...arab]
  }, [isRtl])

  // Filter countries based on search
  const filteredCountries = useMemo(() => {
    if (!codeSearch.trim()) return orderedCountries
    const q = codeSearch.toLowerCase().trim()
    return orderedCountries.filter(
      (c) =>
        c.nameEn.toLowerCase().includes(q) ||
        c.nameAr.includes(q) ||
        c.code.includes(q)
    )
  }, [codeSearch, orderedCountries])

  // Get selected country info
  const selectedCountry = allCountryCodes.find((c) => c.code === formData.countryCode)

  // Language value for form submissions
  const languageValue = isRtl ? "العربية" : "English"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Step 1: Send data to Google Sheets (if configured) — includes Language field
      if (GOOGLE_SHEETS_WEBHOOK !== "YOUR_WEBHOOK_URL_HERE") {
        await fetch(GOOGLE_SHEETS_WEBHOOK, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            language: languageValue,
          }),
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

      // Add budget as a note in the merge fields
      mailchimpFormData.append("MMERGE7", formData.budget) // Custom field for budget
      // Add language/source language field
      mailchimpFormData.append("MMERGE8", languageValue) // Custom field for language

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

                  {/* Phone Number with Searchable Country Code */}
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
                      {/* Custom searchable country code dropdown */}
                      <div className="relative" ref={codeDropdownRef}>
                        <button
                          type="button"
                          onClick={() => setCodeDropdownOpen(!codeDropdownOpen)}
                          className="flex items-center gap-1.5 h-10 px-3 border border-input rounded-md bg-background hover:bg-accent hover:text-accent-foreground transition-colors min-w-[140px] md:min-w-[160px]"
                        >
                          <span className="text-base">{selectedCountry?.flag}</span>
                          <span className="text-sm font-medium">{formData.countryCode}</span>
                          <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${codeDropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        {codeDropdownOpen && (
                          <div
                            className={`absolute z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl w-[280px] md:w-[320px] ${
                              isRtl ? "left-0" : "right-0"
                            }`}
                          >
                            {/* Search input */}
                            <div className="p-2 border-b border-gray-100">
                              <div className="relative">
                                <Search className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 ${isRtl ? "right-2.5" : "left-2.5"}`} />
                                <input
                                  ref={codeSearchInputRef}
                                  type="text"
                                  value={codeSearch}
                                  onChange={(e) => setCodeSearch(e.target.value)}
                                  placeholder={isRtl ? "ابحث عن دولة..." : "Search country..."}
                                  className={`w-full h-9 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-webskeet-blue/30 focus:border-webskeet-blue ${
                                    isRtl ? "pr-8 pl-2 text-right" : "pl-8 pr-2 text-left"
                                  }`}
                                />
                              </div>
                            </div>

                            {/* Country list */}
                            <div className="max-h-[250px] md:max-h-[300px] overflow-y-auto overscroll-contain">
                              {filteredCountries.length === 0 ? (
                                <div className="p-4 text-center text-sm text-gray-500">
                                  {isRtl ? "لا توجد نتائج" : "No results found"}
                                </div>
                              ) : (
                                <>
                                  {/* Show group headers when not searching */}
                                  {!codeSearch.trim() && (
                                    <>
                                      <div className={`px-3 py-1.5 text-xs font-semibold text-gray-500 bg-gray-50 sticky top-0 ${isRtl ? "text-right" : "text-left"}`}>
                                        {isRtl ? "الدول العربية" : (locale === "ar" ? "الدول العربية" : "International")}
                                      </div>
                                      {orderedCountries
                                        .filter((c) => c.group === (isRtl ? "arab" : "international"))
                                        .map((country) => (
                                          <button
                                            key={`${country.group}-${country.code}`}
                                            type="button"
                                            onClick={() => {
                                              handleInputChange("countryCode", country.code)
                                              setCodeDropdownOpen(false)
                                              setCodeSearch("")
                                            }}
                                            className={`w-full flex items-center gap-2.5 px-3 py-2.5 md:py-2 text-sm hover:bg-webskeet-blue/5 transition-colors ${
                                              formData.countryCode === country.code ? "bg-webskeet-blue/10 font-medium" : ""
                                            } ${isRtl ? "text-right flex-row-reverse" : "text-left"}`}
                                          >
                                            <span className="text-lg shrink-0">{country.flag}</span>
                                            <span className="flex-1 truncate">{isRtl ? country.nameAr : country.nameEn}</span>
                                            <span className="text-gray-500 text-xs shrink-0" dir="ltr">{country.code}</span>
                                          </button>
                                        ))}
                                      <div className={`px-3 py-1.5 text-xs font-semibold text-gray-500 bg-gray-50 sticky top-0 ${isRtl ? "text-right" : "text-left"}`}>
                                        {isRtl ? "الدول الدولية" : (locale === "ar" ? "الدول الدولية" : "Arab Countries")}
                                      </div>
                                      {orderedCountries
                                        .filter((c) => c.group === (isRtl ? "international" : "arab"))
                                        .map((country) => (
                                          <button
                                            key={`${country.group}-${country.code}`}
                                            type="button"
                                            onClick={() => {
                                              handleInputChange("countryCode", country.code)
                                              setCodeDropdownOpen(false)
                                              setCodeSearch("")
                                            }}
                                            className={`w-full flex items-center gap-2.5 px-3 py-2.5 md:py-2 text-sm hover:bg-webskeet-blue/5 transition-colors ${
                                              formData.countryCode === country.code ? "bg-webskeet-blue/10 font-medium" : ""
                                            } ${isRtl ? "text-right flex-row-reverse" : "text-left"}`}
                                          >
                                            <span className="text-lg shrink-0">{country.flag}</span>
                                            <span className="flex-1 truncate">{isRtl ? country.nameAr : country.nameEn}</span>
                                            <span className="text-gray-500 text-xs shrink-0" dir="ltr">{country.code}</span>
                                          </button>
                                        ))}
                                    </>
                                  )}
                                  {/* Show flat filtered results when searching */}
                                  {codeSearch.trim() &&
                                    filteredCountries.map((country) => (
                                      <button
                                        key={`search-${country.code}`}
                                        type="button"
                                        onClick={() => {
                                          handleInputChange("countryCode", country.code)
                                          setCodeDropdownOpen(false)
                                          setCodeSearch("")
                                        }}
                                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 md:py-2 text-sm hover:bg-webskeet-blue/5 transition-colors ${
                                          formData.countryCode === country.code ? "bg-webskeet-blue/10 font-medium" : ""
                                        } ${isRtl ? "text-right flex-row-reverse" : "text-left"}`}
                                      >
                                        <span className="text-lg shrink-0">{country.flag}</span>
                                        <span className="flex-1 truncate">{isRtl ? country.nameAr : country.nameEn}</span>
                                        <span className="text-gray-500 text-xs shrink-0" dir="ltr">{country.code}</span>
                                      </button>
                                    ))}
                                </>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
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
