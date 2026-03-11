"use client"

import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

export default function ImageOptimization() {
  const { toast } = useToast()

  useEffect(() => {
    // تحسين تحميل الصور
    const optimizeImages = () => {
      // تحديد جميع الصور في الصفحة
      const images = document.querySelectorAll("img")

      // إضافة معالج للأخطاء لكل صورة
      images.forEach((img) => {
        if (!img.hasAttribute("data-error-handler-attached")) {
          img.setAttribute("data-error-handler-attached", "true")

          // إضافة خاصية loading="lazy" لتحميل الصور بشكل كسول
          if (!img.hasAttribute("loading")) {
            img.setAttribute("loading", "lazy")
          }

          // إضافة معالج للأخطاء
          img.addEventListener("error", () => {
            // محاولة إعادة تحميل الصورة مرة واحدة
            if (!img.hasAttribute("data-reload-attempted")) {
              img.setAttribute("data-reload-attempted", "true")

              // إضافة علامة استفهام عشوائية لتجنب التخزين المؤقت
              const currentSrc = img.src
              if (currentSrc.includes("?")) {
                img.src = `${currentSrc}&reload=${Date.now()}`
              } else {
                img.src = `${currentSrc}?reload=${Date.now()}`
              }
            } else if (!img.hasAttribute("data-second-reload-attempted")) {
              // محاولة ثانية مع تغيير البروتوكول
              img.setAttribute("data-second-reload-attempted", "true")

              let currentSrc = img.src
              // تجربة تغيير البروتوكول من https إلى http أو العكس
              if (currentSrc.startsWith("https://")) {
                currentSrc = currentSrc.replace("https://", "http://")
              } else if (currentSrc.startsWith("http://")) {
                currentSrc = currentSrc.replace("http://", "https://")
              }

              img.src = `${currentSrc}?reload=${Date.now()}`
            } else {
              // إذا فشلت المحاولات، استخدم صورة بديلة
              if (img.hasAttribute("data-fallback")) {
                img.src = img.getAttribute("data-fallback") || "/default-placeholder.png"
              } else {
                img.src = "/default-placeholder.png"
              }

              // إضافة فئة للتنسيق
              img.classList.add("fallback-image")

              // إضافة سمة alt إذا لم تكن موجودة
              if (!img.alt) {
                img.alt = "صورة غير متوفرة"
              }
            }
          })

          // تحسين تحميل الصور
          img.addEventListener("load", () => {
            // إزالة فئة التحميل
            img.classList.remove("image-loading")

            // إضافة فئة التحميل الناجح
            img.classList.add("image-loaded")

            // Ensure full opacity
            img.style.opacity = "1"
            img.style.filter = "none"
          })
        }
      })
    }

    // تشغيل التحسين عند تحميل الصفحة
    optimizeImages()

    // تشغيل التحسين عند إضافة عناصر جديدة للصفحة
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          optimizeImages()
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    // تنظيف عند إلغاء تحميل المكون
    return () => {
      observer.disconnect()
    }
  }, [toast])

  return null
}
