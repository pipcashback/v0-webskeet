"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-md py-3"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/images/webskeet-logo.png" alt="ويب سكيت" width={160} height={60} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-0 space-x-reverse">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary px-4 py-2 font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-1 after:right-4 after:bg-primary after:transition-all hover:after:w-[calc(100%-32px)]"
            >
              الرئيسية
            </Link>

            <Link
              href="/seo-pricing"
              className="text-gray-700 hover:text-primary px-4 py-2 font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-1 after:right-4 after:bg-primary after:transition-all hover:after:w-[calc(100%-32px)]"
            >
              أسعار
            </Link>

            <Link
              href="/faq"
              className="text-gray-700 hover:text-primary px-4 py-2 font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-1 after:right-4 after:bg-primary after:transition-all hover:after:w-[calc(100%-32px)]"
            >
              الأسئلة الشائعة
            </Link>

            <Link
              href="/subscribe"
              className="text-gray-700 hover:text-primary px-4 py-2 font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-1 after:right-4 after:bg-primary after:transition-all hover:after:w-[calc(100%-32px)]"
            >
              النشرة البريدية
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary px-4 py-2 font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-1 after:right-4 after:bg-primary after:transition-all hover:after:w-[calc(100%-32px)]"
            >
              تواصل معنا
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-primary px-4 py-2 font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-1 after:right-4 after:bg-primary after:transition-all hover:after:w-[calc(100%-32px)]"
            >
              المدونة
            </Link>
          </div>

          <div className="flex items-center">
            <a href="/#consultation">
              <Button className="hidden lg:inline-flex btn-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 group overflow-hidden relative">
                <span className="relative z-10">استشارة مجانية</span>
                <span className="absolute inset-0 bg-gradient-to-r from-webskeet-blue/80 to-webskeet-blue opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </a>
            <button className="lg:hidden" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pt-2 pb-4 text-right animate-fade-in">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              href="/seo-pricing"
              className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              أسعار
            </Link>
            <Link
              href="/faq"
              className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              الأسئلة الشائعة
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              من نحن
            </Link>
            <Link
              href="/subscribe"
              className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              النشرة البريدية
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              تواصل معنا
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              المدونة
            </Link>
            <a href="/#consultation" onClick={() => setIsOpen(false)}>
              <Button className="my-2 mr-4 btn-primary w-full group overflow-hidden relative">
                <span className="relative z-10">استشارة مجانية</span>
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
