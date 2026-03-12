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
        // Mobile: corner positioning (not centered) with safe bottom margin
        "bottom-6",
        isArabic ? "left-4" : "right-4",
        // Desktop: more margin from edge for tooltip space
        isArabic
          ? "md:left-16 md:right-auto md:bottom-8"
          : "md:left-auto md:right-16 md:bottom-8",
      ].join(" ")}
    >
      {/* Tooltip - only on desktop, positioned inward from the button */}
      <div
        className={[
          "hidden md:block absolute top-1/2 -translate-y-1/2",
          "bg-white px-4 py-2 rounded-lg shadow-lg",
          "transition-all duration-300 ease-in-out whitespace-nowrap",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
          // Position tooltip toward center of screen (away from edge)
          isArabic ? "left-full ml-3" : "right-full mr-3",
        ].join(" ")}
      >
        <p className="text-sm font-medium text-gray-800">{tooltipText}</p>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 animate-pulse-slow"
        aria-label={tooltipText}
      >
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping-slow" />
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white relative z-10" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-red-500 border-2 border-white animate-bounce" />
      </a>
    </div>
  )
}
