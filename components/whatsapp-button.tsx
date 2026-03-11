"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = "971502524919"
  const message = encodeURIComponent("مرحباً، أود الاستفسار عن خدماتكم")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className="fixed left-6 bottom-6 z-50 flex items-center gap-3">
      <div
        className={`bg-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
        }`}
      >
        <p className="text-sm font-medium text-gray-800 whitespace-nowrap">تواصل معنا عبر واتساب</p>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 animate-pulse-slow"
        aria-label="تواصل عبر واتساب"
      >
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping-slow" />
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white animate-bounce" />
      </a>
    </div>
  )
}
