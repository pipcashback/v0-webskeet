"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/audit-landing-page-review.png",
    alt: "مراجعة تدقيق صفحة الهبوط والموقع للتحويلات",
  },
  {
    id: 2,
    image: "/images/testimonials/arabic-seo-specialist-review.png",
    alt: "مراجعة متخصص SEO عربي لمدونة تقنية",
  },
  {
    id: 3,
    image: "/images/testimonials/wikipedia-expert.png",
    alt: "شهادة خبير ويكيبيديا",
  },
  {
    id: 4,
    image: "/images/testimonials/jutta-recommendation.png",
    alt: "توصية من Jutta",
  },
  {
    id: 5,
    image: "/images/testimonials/salim-recommendation.png",
    alt: "توصية من Salim",
  },
  {
    id: 6,
    image: "/images/testimonials/linkedin-influencers.png",
    alt: "شهادات المؤثرين على LinkedIn",
  },
  {
    id: 7,
    image: "/images/testimonials/ahmed-saad-review.png",
    alt: "مراجعة أحمد سعد",
  },
  {
    id: 8,
    image: "/images/testimonials/muhammad-rizwan-review.png",
    alt: "مراجعة محمد رضوان",
  },
  {
    id: 9,
    image: "/images/testimonials/mohamed-elmaghraby-review.png",
    alt: "مراجعة محمد المغربي",
  },
]

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const itemsPerSlide = 2
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentTestimonials = () => {
    const start = currentSlide * itemsPerSlide
    return testimonials.slice(start, start + itemsPerSlide)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">آراء عملائنا وشركائنا</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          نفخر بثقة عملائنا وشركائنا في خدماتنا، وهذه بعض آرائهم حول تجربتهم معنا
        </p>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="flex gap-6 transition-transform duration-500 ease-in-out">
              {getCurrentTestimonials().map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.alt}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="الشريحة السابقة"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="الشريحة التالية"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`انتقل إلى الشريحة ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
