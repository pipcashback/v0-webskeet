"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"
import type { Locale } from "@/i18n/config"

export default function WhatsAppButton({ locale = "ar" }: { locale?: Locale }) {
  const [isHovered, setIsHovered] = useState(false)
  const isArabic = locale === "ar"
  const phoneNumber = "971502524919"
  const message = encodeURIComponent(
    isArabic ? "مرحباً، أود الاستفسار عن خدماتكم" : "Hello, I'd like to inquire about your services"
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
  const tooltipText = isArabic ? "تواصل معنا عبر واتساب" : "Chat with us on WhatsApp"

  return (
    <div
      className={[
        "fixed z-50",
        // Mobile: centered at bottom
        "bottom-5 left-1/2 -translate-x-1/2",
        // Desktop: positioned at side with increased margin, not centered
        "md:bottom-8 md:translate-x-0",
        isArabic
          ? "md:left-12 md:right-auto"
          : "md:left-auto md:right-12",
      ].join(" ")}
    >
      {/* Tooltip - absolutely positioned so it doesn't affect button placement */}
      <div
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out whitespace-nowrap ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        } ${isArabic ? "right-full mr-3" : "left-full ml-3"}`}
      >
        <p className="text-sm font-medium text-gray-800">{tooltipText}</p>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 animate-pulse-slow"
        aria-label={tooltipText}
      >
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping-slow" />
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white animate-bounce" />
      </a>
    </div>
  )
}
