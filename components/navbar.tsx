"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, Check } from "lucide-react"
import Image from "next/image"
import type { Locale } from "@/i18n/config"
import { getLocalizedPath, isSingleLanguagePage } from "@/lib/route-map"

const navLinks = {
  en: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    faq: "FAQ",
    newsletter: "Newsletter",
    contact: "Contact",
    blog: "Blog",
    cta: "Free Consultation",
    langSwitch: "العربية",
  },
  ar: {
    home: "الرئيسية",
    services: "خدماتنا",
    pricing: "أسعار",
    faq: "الأسئلة الشائعة",
    newsletter: "النشرة البريدية",
    contact: "تواصل معنا",
    blog: "المدونة",
    cta: "استشارة مجانية",
    langSwitch: "EN",
  },
}

function getLocalePath(path: string, locale: Locale): string {
  return locale === "ar" ? `/ar${path}` : path
}

// getLanguageSwitchPath is now handled by getLocalizedPath from lib/route-map.ts
// which supports different slugs between locales and single-language pages

const Navbar = ({ locale }: { locale: Locale }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const t = navLinks[locale]
  const isArabic = locale === "ar"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  // Route-map-aware language switching
  const targetLocale = isArabic ? "en" : "ar"
  const switchPath = getLocalizedPath(pathname, targetLocale) || pathname
  const hasSwitchTarget = !isSingleLanguagePage(pathname)
  const enPath = isArabic ? switchPath : pathname
  const arPath = isArabic ? pathname : switchPath
  const currentLangLabel = isArabic ? "AR" : "EN"

  const linkClass =
    "text-gray-700 hover:text-primary px-4 py-2 font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-1 after:bg-primary after:transition-all hover:after:w-[calc(100%-32px)] ltr:after:left-4 rtl:after:right-4"

  const mobileLinkClass =
    "block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-md py-3"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - start side (left in LTR, right in RTL) */}
          <div className="flex-shrink-0">
            <Link href={getLocalePath("/", locale)} className="flex items-center">
              <Image src="/images/webskeet-logo.png" alt="Webskeet" width={160} height={60} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu + Language Switcher as last menu item */}
          <div className="hidden lg:flex items-center">
            <Link href={getLocalePath("/", locale)} className={linkClass}>
              {t.home}
            </Link>
            <Link href={getLocalePath("/seo-company", locale)} className={linkClass}>
              {t.services}
            </Link>
            <Link href={getLocalePath("/seo-pricing", locale)} className={linkClass}>
              {t.pricing}
            </Link>
            <Link href={getLocalePath("/faq", locale)} className={linkClass}>
              {t.faq}
            </Link>
            <Link href={getLocalePath("/subscribe", locale)} className={linkClass}>
              {t.newsletter}
            </Link>
            <Link href={getLocalePath("/contact", locale)} className={linkClass}>
              {t.contact}
            </Link>
            <Link href={getLocalePath("/blog", locale)} className={linkClass}>
              {t.blog}
            </Link>
            {/* Language Switcher Dropdown — hidden on single-language pages */}
            {hasSwitchTarget && (
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 text-gray-700 hover:text-primary px-4 py-2 font-medium transition-colors"
                  title={isArabic ? "Switch to English" : "التبديل إلى العربية"}
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{currentLangLabel}</span>
                </button>
                {langOpen && (
                  <div className="absolute top-full mt-1 ltr:right-0 rtl:left-0 bg-white rounded-lg shadow-lg border border-gray-100 py-1 min-w-[140px] z-50">
                    <Link
                      href={enPath}
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setLangOpen(false)}
                    >
                      <span>English</span>
                      {!isArabic && <Check className="h-4 w-4 text-primary" />}
                    </Link>
                    <Link
                      href={arPath}
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setLangOpen(false)}
                    >
                      <span>العربية</span>
                      {isArabic && <Check className="h-4 w-4 text-primary" />}
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* CTA Button + Mobile Toggle - end side (right in LTR, left in RTL) */}
          <div className="flex items-center gap-3">
            <a href={getLocalePath("/#consultation", locale)}>
              <Button className="hidden lg:inline-flex btn-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 group overflow-hidden relative">
                <span className="relative z-10">{t.cta}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-webskeet-blue/80 to-webskeet-blue opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </a>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pt-2 pb-4 animate-fade-in">
            <Link href={getLocalePath("/", locale)} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
              {t.home}
            </Link>
            <Link href={getLocalePath("/seo-company", locale)} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
              {t.services}
            </Link>
            <Link href={getLocalePath("/seo-pricing", locale)} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
              {t.pricing}
            </Link>
            <Link href={getLocalePath("/faq", locale)} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
              {t.faq}
            </Link>
            <Link href={getLocalePath("/subscribe", locale)} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
              {t.newsletter}
            </Link>
            <Link href={getLocalePath("/contact", locale)} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
              {t.contact}
            </Link>
            <Link href={getLocalePath("/blog", locale)} className={mobileLinkClass} onClick={() => setIsOpen(false)}>
              {t.blog}
            </Link>
            {/* Language Switcher in mobile — hidden on single-language pages */}
            {hasSwitchTarget && (
              <div className="px-4 py-2">
                <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-1">
                  <Globe className="h-4 w-4" />
                  <span>{currentLangLabel}</span>
                </div>
                <div className="flex gap-2 ms-5">
                  <Link
                    href={enPath}
                    className={`flex items-center gap-1 px-3 py-1 text-sm rounded-md transition-colors ${!isArabic ? "bg-primary/10 text-primary font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    English
                    {!isArabic && <Check className="h-3 w-3" />}
                  </Link>
                  <Link
                    href={arPath}
                    className={`flex items-center gap-1 px-3 py-1 text-sm rounded-md transition-colors ${isArabic ? "bg-primary/10 text-primary font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    العربية
                    {isArabic && <Check className="h-3 w-3" />}
                  </Link>
                </div>
              </div>
            )}
            <a href={getLocalePath("/#consultation", locale)} onClick={() => setIsOpen(false)}>
              <Button className="mx-4 my-2 btn-primary w-[calc(100%-2rem)] group overflow-hidden relative">
                <span className="relative z-10">{t.cta}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-webskeet-blue/80 to-webskeet-blue opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
