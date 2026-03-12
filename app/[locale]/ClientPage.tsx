"use client"

import SEOHeroSection from "@/components/seo-hero-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import TechnologiesSection from "@/components/technologies-section"
import ConsultationSection from "@/components/consultation-section"
import OrganizationSchema from "@/components/seo/organization-schema"
import HomePageSchema from "@/components/seo/home-page-schema"
import GlobalReachSection from "@/components/global-reach-section"
import { useEffect } from "react"
import type { Locale } from "@/i18n/config"

export default function ClientPage({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.style.fontSize = "14px"
    console.log("Home page loaded")
  }, [])

  return (
    <main className="flex-grow">
      <OrganizationSchema />
      <HomePageSchema />
      <SEOHeroSection locale={locale} />
      <ServicesSection locale={locale} />
      <GlobalReachSection />
      <TestimonialsSection locale={locale} />
      <TechnologiesSection locale={locale} />
      <ConsultationSection locale={locale} />
    </main>
  )
}
