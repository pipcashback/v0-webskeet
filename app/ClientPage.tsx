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

export default function ClientPage() {
  useEffect(() => {
    // Adjust zoom level by setting base font size
    document.documentElement.style.fontSize = "14px"

    // Log page load for analytics purposes
    console.log("Home page loaded")
  }, [])

  return (
    <main className="flex-grow">
      <OrganizationSchema />
      <HomePageSchema />
      <SEOHeroSection />
      <ServicesSection />
      <GlobalReachSection />
      <TestimonialsSection />
      <TechnologiesSection />
      <ConsultationSection />
    </main>
  )
}
