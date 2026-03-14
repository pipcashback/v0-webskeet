"use client"

import type { Locale } from "@/i18n/config"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useCallback } from "react"

const translations = {
  en: {
    sectionTitle: "What Our Clients & Partners Say",
    sectionDescription:
      "We take pride in the trust our clients and partners place in our services. Here are some of their experiences with us",
    prevSlide: "Previous slide",
    nextSlide: "Next slide",
    goToSlide: "Go to slide",
    verified: "Verified Review",
    verifiedLinkedin: "Verified on LinkedIn",
  },
  ar: {
    sectionTitle: "آراء عملائنا وشركائنا",
    sectionDescription:
      "نفخر بثقة عملائنا وشركائنا في خدماتنا، وهذه بعض آرائهم حول تجربتهم معنا",
    prevSlide: "الشريحة السابقة",
    nextSlide: "الشريحة التالية",
    goToSlide: "انتقل إلى الشريحة",
    verified: "Verified Review",
    verifiedLinkedin: "Verified on LinkedIn",
  },
}

interface Testimonial {
  id: number
  title: { en: string; ar: string }
  rating: number
  text: { en: string; ar: string }
  author: { en: string; ar: string }
  authorTitle?: { en: string; ar: string }
  photo?: string
  tags: { en: string[]; ar: string[] }
  platform: "upwork" | "google" | "linkedin"
}

// Ordered by relevance to SEO services
const testimonials: Testimonial[] = [
  {
    id: 9,
    title: {
      en: "Comprehensive SEO Services",
      ar: "خدمات SEO شاملة",
    },
    rating: 5,
    text: {
      en: "Webskeet SEO Experts has done an excellent job with their services. Their team created customized SEO strategies for my website, and I started seeing results quickly. From content optimization to building quality backlinks, they worked on every aspect and significantly improved my website's ranking. If you're looking for genuine SEO work, I highly recommend Webskeet SEO Experts.",
      ar: "قام فريق Webskeet SEO بعمل ممتاز في خدماتهم. أنشأ الفريق استراتيجيات SEO مخصصة لموقعي، وبدأت أرى النتائج بسرعة. من تحسين المحتوى إلى بناء روابط خلفية عالية الجودة، عملوا على كل جانب وحسّنوا ترتيب موقعي بشكل ملحوظ. إذا كنت تبحث عن عمل SEO حقيقي، أنصح بشدة بفريق Webskeet SEO.",
    },
    author: {
      en: "Muhammad Rizwan",
      ar: "Muhammad Rizwan",
    },
    tags: {
      en: ["Customized Strategy", "Quick Results", "Highly Recommended"],
      ar: ["استراتيجية مخصصة", "نتائج سريعة", "يُنصح به بشدة"],
    },
    platform: "google",
  },
  {
    id: 2,
    title: {
      en: "SEO Audit & Strategy",
      ar: "تدقيق واستراتيجية SEO",
    },
    rating: 5,
    text: {
      en: "I worked with this team after reviewing their services myself, and I was genuinely impressed. Their work is not just theory. Their on-page SEO is excellent - they optimize titles, site speed, and internal structure very well. Their off-page SEO is built on clean, relevant links, which made a noticeable difference in rankings. Their work is professional and suitable for anyone who understands SEO.",
      ar: "تعاملت مع هذا الفريق بعد مراجعة خدماتهم بنفسي، وكنت معجبًا حقًا. عملهم ليس مجرد نظريات. تحسين الـ SEO الداخلي ممتاز - يحسنون العناوين وسرعة الموقع والهيكل الداخلي بشكل جيد جدًا. الـ SEO الخارجي مبني على روابط نظيفة وذات صلة، مما أحدث فرقًا ملحوظًا في الترتيب. عملهم احترافي ومناسب لأي شخص يفهم SEO.",
    },
    author: {
      en: "Ahmed Ibrahim",
      ar: "أحمد إبراهيم",
    },
    tags: {
      en: ["Professional", "Detailed Analysis", "Results-Driven"],
      ar: ["احترافي", "تحليل مفصّل", "موجّه نحو النتائج"],
    },
    platform: "google",
  },
  {
    id: 11,
    title: {
      en: "Quality SEO Results",
      ar: "نتائج SEO عالية الجودة",
    },
    rating: 5,
    text: {
      en: "Webskeet SEO was fantastic to work with! They delivered quality work on time and communicated clearly throughout the project. I'm delighted with the results and would gladly work with them again.",
      ar: "كان العمل مع Webskeet SEO رائعًا! قدموا عملًا عالي الجودة في الوقت المحدد وتواصلوا بوضوح طوال المشروع. أنا سعيد بالنتائج وسأعمل معهم مجددًا بكل سرور.",
    },
    author: {
      en: "Mohamed Elmaghraby",
      ar: "Mohamed Elmaghraby",
    },
    tags: {
      en: ["Quality Work", "Clear Communication", "On Time"],
      ar: ["جودة عالية", "تواصل واضح", "التزام بالمواعيد"],
    },
    platform: "google",
  },
  {
    id: 7,
    title: {
      en: "Strategic & Methodical Approach",
      ar: "نهج استراتيجي ومنهجي",
    },
    rating: 5,
    text: {
      en: "His approach is methodical and thoughtful, ensuring that each step he takes is well-considered and impactful. What sets Mahmoud apart is his willingness to listen and learn. He actively seeks advice and is quick to implement strategies.",
      ar: "نهجه منهجي ومدروس، يضمن أن كل خطوة يتخذها مدروسة وذات تأثير. ما يميّز محمود هو استعداده للاستماع والتعلّم. يسعى بنشاط للحصول على المشورة وسريع في تطبيق الاستراتيجيات.",
    },
    author: {
      en: "Eng. Salim Akil",
      ar: "Eng. Salim Akil",
    },
    authorTitle: {
      en: "Forbes Startups 2016 & 2017",
      ar: "Forbes Startups 2016 & 2017",
    },
    photo: "/images/testimonials/salim-akil.webp",
    tags: {
      en: ["Methodical", "Action-Oriented", "Strategic Thinker"],
      ar: ["منهجي", "موجّه نحو العمل", "مفكّر استراتيجي"],
    },
    platform: "linkedin",
  },
  {
    id: 1,
    title: {
      en: "SEO Consultation",
      ar: "استشارة SEO",
    },
    rating: 5,
    text: {
      en: "Mahmoud gave me much more time than we had initial arranged for, he gave me a clear path to succeed and provided me with extremely insightful and valuable information. Working with him currently on my project and he has been a very valuable to my projects success.",
      ar: "منحني محمود وقتًا أكثر بكثير مما اتفقنا عليه، وأعطاني مسارًا واضحًا للنجاح وقدم لي معلومات قيّمة للغاية. أعمل معه حاليًا على مشروعي وكان ذا قيمة كبيرة لنجاح مشاريعي.",
    },
    author: {
      en: "Verified Client",
      ar: "عميل موثق",
    },
    tags: {
      en: ["Reliable", "Committed to Quality", "Solution Oriented", "Clear Communicator"],
      ar: ["موثوق", "ملتزم بالجودة", "موجّه نحو الحلول", "تواصل واضح"],
    },
    platform: "upwork",
  },
  {
    id: 8,
    title: {
      en: "Tech Knowledge & Mentorship",
      ar: "خبرة تقنية وإرشاد",
    },
    rating: 5,
    text: {
      en: "I got to know him as a respectful and serious person focusing on sharing his tech knowledge to help others build their ventures. He believes in the potential of people and sees every investment we make in people coming back around.",
      ar: "تعرّفت عليه كشخص محترم وجاد يركّز على مشاركة خبرته التقنية لمساعدة الآخرين في بناء مشاريعهم. يؤمن بإمكانيات الأشخاص ويرى أن كل استثمار في الناس يعود بالنفع.",
    },
    author: {
      en: "Jutta Jerlich",
      ar: "Jutta Jerlich",
    },
    authorTitle: {
      en: "Educator | Entrepreneurial Mentor",
      ar: "Educator | Entrepreneurial Mentor",
    },
    photo: "/images/testimonials/jutta-jerlich.webp",
    tags: {
      en: ["Knowledgeable", "Supportive", "Tech Expert"],
      ar: ["واسع المعرفة", "داعم", "خبير تقني"],
    },
    platform: "linkedin",
  },
  {
    id: 10,
    title: {
      en: "Excellent Support",
      ar: "دعم ممتاز",
    },
    rating: 5,
    text: {
      en: "Wonderful, thank you so much for your support and care.",
      ar: "جميل، شكرًا جزيلًا على دعمكم واهتمامكم.",
    },
    author: {
      en: "Ahmed Saad",
      ar: "Ahmed Saad",
    },
    tags: {
      en: ["Supportive", "Great Service"],
      ar: ["دعم ممتاز", "خدمة رائعة"],
    },
    platform: "google",
  },
  {
    id: 3,
    title: {
      en: "Landing Page Audit",
      ar: "تدقيق صفحة الهبوط",
    },
    rating: 5,
    text: {
      en: "Mahmoud was great. Very skilled and worked effectively, with great communication! He took the time to explain what he meant, and even went above and beyond providing examples.",
      ar: "محمود كان رائعًا. ماهر جدًا وعمل بفعالية، مع تواصل ممتاز! أخذ الوقت لشرح ما يعنيه، وتجاوز التوقعات بتقديم أمثلة إضافية.",
    },
    author: {
      en: "Verified Client",
      ar: "عميل موثق",
    },
    tags: {
      en: ["Skilled", "Great Communication", "Above & Beyond"],
      ar: ["ماهر", "تواصل ممتاز", "يتجاوز التوقعات"],
    },
    platform: "upwork",
  },
  {
    id: 5,
    title: {
      en: "LinkedIn Influencers Research",
      ar: "بحث مؤثري LinkedIn",
    },
    rating: 5,
    text: {
      en: "Mahmoud had the background we needed, completely understood my request, worked and delivered results fast. He tried to find solutions to a problem we faced with this task and provided suggestions. This was a small project, I'll certainly work with Mahmoud in the future once there's a need that matches his skills.",
      ar: "محمود كان لديه الخلفية التي نحتاجها، فهم طلبي تمامًا، وعمل وقدم النتائج بسرعة. حاول إيجاد حلول لمشكلة واجهناها وقدم اقتراحات. كان مشروعًا صغيرًا، وسأعمل بالتأكيد مع محمود في المستقبل.",
    },
    author: {
      en: "Verified Client",
      ar: "عميل موثق",
    },
    tags: {
      en: ["Clear Communicator", "Solution Oriented", "Reliable", "Collaborative"],
      ar: ["تواصل واضح", "موجّه نحو الحلول", "موثوق", "متعاون"],
    },
    platform: "upwork",
  },
  {
    id: 4,
    title: {
      en: "Wikipedia Page Creation",
      ar: "إنشاء صفحة ويكيبيديا",
    },
    rating: 5,
    text: {
      en: "Very punctual, fast, super helpful and cooperative.",
      ar: "ملتزم بالمواعيد، سريع، مفيد للغاية ومتعاون.",
    },
    author: {
      en: "Verified Client",
      ar: "عميل موثق",
    },
    tags: {
      en: ["Reliable", "Solution Oriented", "Collaborative"],
      ar: ["موثوق", "موجّه نحو الحلول", "متعاون"],
    },
    platform: "upwork",
  },
  {
    id: 6,
    title: {
      en: "Arabic SEO Specialist",
      ar: "متخصص SEO عربي",
    },
    rating: 5,
    text: {
      en: "Very professional. Highly recommended.",
      ar: "احترافي جدًا. أنصح به بشدة.",
    },
    author: {
      en: "Verified Client",
      ar: "عميل موثق",
    },
    tags: {
      en: ["Professional"],
      ar: ["احترافي"],
    },
    platform: "upwork",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-[#F59E0B]" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm font-semibold text-gray-700 ms-1">{rating}.0</span>
    </div>
  )
}

function PlatformBadge({ platform, verifiedText, linkedinText }: { platform: "upwork" | "google" | "linkedin"; verifiedText: string; linkedinText: string }) {
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium">
      {platform === "upwork" ? (
        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-green-700 border border-green-200">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
          </svg>
          <span>{verifiedText}</span>
        </span>
      ) : platform === "google" ? (
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-blue-700 border border-blue-200">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <span>{verifiedText}</span>
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2.5 py-1 text-sky-700 border border-sky-200">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span>{linkedinText}</span>
        </span>
      )}
    </div>
  )
}

function TestimonialCard({ testimonial, locale, verifiedText, linkedinText }: { testimonial: Testimonial; locale: Locale; verifiedText: string; linkedinText: string }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col h-full">
      {/* Header: Stars + Platform Badge */}
      <div className="flex items-center justify-between mb-3">
        <StarRating rating={testimonial.rating} />
        <PlatformBadge platform={testimonial.platform} verifiedText={verifiedText} linkedinText={linkedinText} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-3">
        {testimonial.title[locale]}
      </h3>

      {/* Review Text */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
        &ldquo;{testimonial.text[locale]}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mb-3">
        {testimonial.photo && (
          <Image
            src={testimonial.photo}
            alt={testimonial.author.en}
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
        )}
        <div>
          <p className="text-sm font-semibold text-gray-800">
            {testimonial.photo ? "" : "— "}{testimonial.author[locale]}
          </p>
          {testimonial.authorTitle && (
            <p className="text-xs text-gray-500">
              {testimonial.authorTitle[locale]}
            </p>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {testimonial.tags[locale].map((tag) => (
          <span
            key={tag}
            className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function ReviewsJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WebSkeet",
    url: "https://webskeet.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: testimonials.length.toString(),
      bestRating: "5",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating.toString(),
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: t.author.en,
      },
      reviewBody: t.text.en,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

const TestimonialsSection = ({ locale }: { locale: Locale }) => {
  const t = translations[locale]
  const [currentSlide, setCurrentSlide] = useState(0)

  const itemsPerSlide = 3
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const getCurrentTestimonials = () => {
    const start = currentSlide * itemsPerSlide
    return testimonials.slice(start, start + itemsPerSlide)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <ReviewsJsonLd />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          {t.sectionTitle}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t.sectionDescription}
        </p>

        <div className="relative max-w-6xl mx-auto px-12">
          {/* Carousel Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {getCurrentTestimonials().map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                locale={locale}
                verifiedText={t.verified}
                linkedinText={t.verifiedLinkedin}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute start-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all z-10"
            aria-label={t.prevSlide}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute end-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all z-10"
            aria-label={t.nextSlide}
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-[#0E6BA8] w-8"
                    : "bg-gray-300 hover:bg-gray-400 w-3"
                }`}
                aria-label={`${t.goToSlide} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
