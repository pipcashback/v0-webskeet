"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Search,
  Settings,
  FileText,
  ShoppingCart,
  Link2,
  Brain,
  ClipboardCheck,
  Lightbulb,
  Rocket,
  BarChart3,
  Clock,
  Users,
  Globe,
  Code,
  Building2,
  CheckCircle2,
  MapPin,
  Stethoscope,
  Cpu,
  Plane,
  Briefcase,
  ShoppingBag,
  ChevronRight,
  Smartphone,
} from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/i18n/config"
import ConsultationSection from "@/components/consultation-section"

export default function ArabicSeoAgencyClient({ locale }: { locale: Locale }) {
  // --- Services data ---
  const services = [
    {
      icon: Settings,
      title: "Technical SEO for Arabic Websites",
      color: "bg-blue-500",
      bullets: [
        "Crawling and indexing issues preventing Google from seeing your Arabic pages",
        "Core Web Vitals optimization — especially critical for the mobile-dominant MENA market",
        "Proper hreflang implementation for bilingual and multilingual sites",
        "RTL/LTR technical setup and CSS logical properties",
        "Schema markup (Organization, Service, FAQ, Product) in Arabic",
        "XML sitemaps with correct hreflang annotations",
      ],
      description: "The foundation everything else is built on. We audit your site with Screaming Frog and Sitebulb and fix:",
      footer: "We work directly with your development team to implement fixes — not just hand over a PDF report.",
    },
    {
      icon: FileText,
      title: "Arabic Keyword Research & Content Strategy",
      color: "bg-green-500",
      bullets: [
        "Advanced bilingual keyword research with search intent mapping",
        "Professional Arabic content written in Modern Standard Arabic — understood across all Arabic-speaking countries",
        "On-page optimization: titles, descriptions, headers, internal linking",
        "Topic cluster architecture to build topical authority",
        "Content gap analysis against Arabic and English competitors",
      ],
      description: "We build content strategies targeting keywords your Arabic-speaking customers actually use:",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce SEO for Arabic Markets",
      color: "bg-purple-500",
      bullets: [
        "Shopify — Technical optimization, product pages, and collections for Arabic markets",
        "Salla (سلة) — The most popular platform in Saudi Arabia; we understand its technical limitations",
        "Zid (زد) — Specialized SEO for Saudi-focused stores",
        "WooCommerce — Performance and structure optimization for Arabic WordPress stores",
      ],
      description: "Direct experience with the most-used e-commerce platforms in the region:",
    },
    {
      icon: Link2,
      title: "Arabic Link Building",
      color: "bg-orange-500",
      bullets: [
        "Guest posting on Arabic sites with Domain Rating 50+",
        "Registration in GCC business directories and international agency directories (Clutch, GoodFirms, DesignRush)",
        "Digital PR strategies for coverage in Gulf publications (Gulf News, Arab News, The National)",
        "Linkable asset creation (reports, infographics, free tools)",
      ],
      description: "We build real backlinks from high-authority Arabic and English websites:",
      footer: "Arabic guest posting is significantly cheaper and less competitive than English — a structural advantage for building authority quickly.",
    },
    {
      icon: Brain,
      title: "AI Search Visibility (LLM SEO)",
      color: "bg-pink-500",
      bullets: [
        "Content optimization for Large Language Models",
        "E-E-A-T signals (Experience, Expertise, Authority, Trust)",
        "Structured data to help AI understand your Arabic content",
      ],
      description: "With ChatGPT, Gemini, and Perplexity usage growing rapidly in the Gulf, we optimize your brand's visibility in AI-powered search results:",
    },
  ]

  // --- Process steps ---
  const processSteps = [
    {
      icon: ClipboardCheck,
      title: "Comprehensive Audit",
      description: "We start with a full technical audit, competitor analysis, and keyword opportunity mapping. You receive a detailed report within one week.",
    },
    {
      icon: Lightbulb,
      title: "Strategy & Monthly Plan",
      description: "We build a custom SEO plan covering: technical priorities, content roadmap, and link building plan — with clear timelines and KPIs.",
    },
    {
      icon: Rocket,
      title: "Hands-On Execution",
      description: "We don't stop at recommendations. We work with your dev team to implement changes. We write the content. We build the links. We monitor indexing.",
    },
    {
      icon: BarChart3,
      title: "Measurement & Optimization",
      description: "Monthly reports showing: rankings, traffic, conversions, and next steps. We adjust strategy based on data, not assumptions.",
    },
  ]

  // --- Why WebSkeet differentiators ---
  const differentiators = [
    {
      icon: Clock,
      title: "8+ Years of Experience",
      description: "Not theoretical advice — we've executed hundreds of projects for clients across Egypt, the Gulf, and Europe.",
    },
    {
      icon: Users,
      title: "Native Arabic Speakers",
      description: "We understand how Arabic users search, what different keyword variations mean in search intent, and how dialect differences affect targeting. You can't get this from an agency that translates English content.",
    },
    {
      icon: Globe,
      title: "Our Website Is Proof of Concept",
      description: "webskeet.com itself is a bilingual site built with SEO best practices — correct hreflang, subdirectory architecture, excellent load speed. We practice what we sell.",
    },
    {
      icon: Code,
      title: "We Work With Your Dev Team",
      description: "Many SEO agencies send a PDF report and call it done. We sit with your developers, review code, and ensure implementations actually happen.",
    },
    {
      icon: Building2,
      title: "Registered in Egypt & UAE",
      description: "Legal presence in both markets means deep local understanding and easy contracting for Gulf clients.",
    },
  ]

  // --- Industries ---
  const industries = [
    { icon: ShoppingBag, title: "E-commerce", description: "Shopify, Salla, Zid, WooCommerce stores" },
    { icon: Building2, title: "Real Estate", description: "Property developers and brokers across the GCC" },
    { icon: Stethoscope, title: "Healthcare", description: "Hospitals, clinics, and online pharmacies" },
    { icon: Cpu, title: "Technology & SaaS", description: "Software companies and cloud services" },
    { icon: Plane, title: "Tourism & Hospitality", description: "Hotels, travel companies, and agencies" },
    { icon: Briefcase, title: "Professional Services", description: "Law firms, accounting firms, consultancies" },
  ]

  // --- Geographic coverage ---
  const geoLocations = [
    {
      country: "Saudi Arabia",
      cities: "Riyadh, Jeddah, Dammam, Mecca, Medina",
      link: "/seo-saudi-arabia",
      linkLabel: "SEO Services in Saudi Arabia",
    },
    {
      country: "UAE",
      cities: "Dubai, Abu Dhabi, Sharjah",
      link: "/seo-uae",
      linkLabel: "SEO Services in UAE",
    },
    {
      country: "Qatar",
      cities: "Doha",
      link: "/seo-qatar",
      linkLabel: "SEO Services in Qatar",
    },
    {
      country: "Kuwait, Bahrain, Oman",
      cities: "",
    },
    {
      country: "Egypt",
      cities: "Cairo, Alexandria",
    },
  ]

  // --- FAQ ---
  const faqs = [
    {
      question: "Why can't I just translate my English SEO strategy into Arabic?",
      answer: "Arabic SEO requires fundamentally different keyword research, content structure, and technical implementation. Arabic morphology creates dozens of keyword variations from a single root word, search volumes are consistently underreported by 2-5x in standard tools, and RTL layout requirements affect Core Web Vitals. Translation alone misses all of this.",
    },
    {
      question: "How much does Arabic SEO cost?",
      answer: "Our monthly retainers range from $2,200 to $5,500 depending on scope, industry competitiveness, and whether bilingual optimization is needed. We also offer one-time SEO audits starting at $815 as an entry point. We always start with a free consultation to understand your goals.",
      link: { href: "/seo-pricing", label: "View our pricing" },
    },
    {
      question: "Do you work with companies outside the Middle East?",
      answer: "Yes. We work with European, American, and international companies expanding into Arabic-speaking markets. Our bilingual team bridges the gap between Western business expectations and Arabic search behavior.",
      link: { href: "/ar/seo-company", label: "النسخة العربية" },
    },
    {
      question: "How long does it take to see results from Arabic SEO?",
      answer: "Initial improvements typically appear within 3-4 months, with significant results in 6-12 months. Arabic search markets generally have lower competition than English, so results can come faster than you might expect.",
    },
    {
      question: "Can you handle both Arabic and English SEO for the same website?",
      answer: "Absolutely — bilingual SEO is our core specialty. We implement proper hreflang tags, subdirectory architecture, and separate keyword strategies for each language while maintaining unified domain authority.",
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer: "No. Any agency guaranteeing specific rankings is either using practices that violate Google's guidelines or targeting keywords with zero competition. We offer something better: complete transparency in monthly reporting, data-driven strategy, and a commitment to continuous improvement.",
    },
  ]

  // --- "Why Arabic SEO" highlight cards ---
  const whyArabicSeoCards = [
    {
      icon: Search,
      title: "Arabic Keywords Are Different",
      description: "A single Arabic root word generates dozens of searchable variations. Tools like Semrush and Ahrefs underreport Arabic search volumes by 2-5x — the real opportunity is far larger than the data suggests.",
    },
    {
      icon: Code,
      title: "Bilingual Architecture Requires Precision",
      description: "Implementing hreflang correctly, managing RTL/LTR layouts, choosing the right subdirectory structure — these technical details directly impact your rankings. 67% of hreflang implementations contain errors.",
    },
    {
      icon: Globe,
      title: "Less Than 1% Arabic Content Online",
      description: "Despite 440+ million Arabic speakers, Arabic content makes up less than 1% of the internet. This means dramatically lower competition and faster ranking opportunities.",
    },
    {
      icon: Smartphone,
      title: "90-95% Mobile Traffic in MENA",
      description: "Your Arabic pages need to be built mobile-first, with proper RTL rendering, appropriate Arabic font sizing (20% larger than English equivalents), and excellent Core Web Vitals scores.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-webskeet-blue via-webskeet-blue/95 to-webskeet-blue/85 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-webskeet-gold rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              Arabic SEO Agency — Expert Search Optimization for Arabic Markets
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed max-w-3xl mx-auto">
              Expanding into Arabic-speaking markets? Your English SEO strategy won't work in Arabic. Different keyword behavior, different search patterns, different technical requirements.
            </p>
            <p className="text-base md:text-lg text-white/80 mb-4 leading-relaxed max-w-3xl mx-auto">
              WebSkeet is an Arabic SEO agency built by native Arabic speakers with 8+ years of hands-on technical SEO experience. We help international companies and GCC businesses achieve real visibility in Arabic search results — and turn that visibility into revenue.
            </p>
            <p className="text-sm md:text-base text-white/70 mb-8 leading-relaxed max-w-3xl mx-auto">
              We don't just translate keywords. We build Arabic search strategies from the ground up, grounded in how Arabic speakers actually search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-white text-blue-900 hover:bg-gray-100 transition-colors w-full sm:w-auto"
              >
                Book a Free Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors w-full sm:w-auto"
              >
                Our Services
              </a>
            </div>
            <p className="text-sm text-white/60 mt-4">
              We'll analyze your Arabic search opportunity in 30 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* ====== WHY ARABIC SEO SECTION ====== */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
            Why Arabic SEO Requires a Specialist Agency
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Most SEO agencies treat Arabic as an afterthought — translate the English keywords, swap the content, done. Here's why that approach fails:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {whyArabicSeoCards.map((card, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-t-4 border-t-webskeet-blue">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-webskeet-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <card.icon className="h-8 w-8 text-webskeet-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-webskeet-blue/5 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto">
          <p className="text-lg font-semibold text-webskeet-blue">
            At WebSkeet, Arabic SEO isn't a side service — it's our core specialty.
          </p>
        </div>
      </section>

      {/* ====== Mid-page CTA ====== */}
      <section className="container mx-auto px-4 pb-8">
        <div className="bg-gradient-to-r from-webskeet-gold/20 to-webskeet-blue/10 rounded-2xl p-8 text-center">
          <p className="text-xl font-bold text-webskeet-blue mb-4">Want to discover your Arabic SEO opportunities?</p>
          <Link href="#consultation">
            <Button size="lg" className="bg-webskeet-blue hover:bg-webskeet-blue/90 text-white text-lg px-8 py-6">
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* ====== SERVICES SECTION ====== */}
      <section id="services" className="bg-gradient-to-r from-webskeet-blue/5 to-webskeet-gold/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
              Our Arabic SEO Services
            </h2>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Icon strip */}
                    <div className={`${service.color} p-6 md:p-8 flex items-center justify-center md:w-20`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    {/* Content */}
                    <div className="p-6 md:p-8 flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-4">
                        {service.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      {service.footer && (
                        <p className="text-gray-700 font-medium mt-4 bg-gray-50 p-3 rounded-lg">{service.footer}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PROCESS SECTION ====== */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
            How We Work — Our 4-Step Process
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-16 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-webskeet-blue to-webskeet-gold rounded-full" />
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-webskeet-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg relative z-10">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 bg-webskeet-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-webskeet-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical cards */}
        <div className="md:hidden space-y-6">
          {processSteps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-webskeet-blue rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {index + 1}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-0.5 h-full bg-webskeet-blue/20 mt-2" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== WHY WEBSKEET SECTION ====== */}
      <section className="bg-gradient-to-r from-webskeet-blue/5 to-webskeet-gold/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
              Why Choose WebSkeet as Your Arabic SEO Agency?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-webskeet-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <diff.icon className="h-6 w-6 text-webskeet-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{diff.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{diff.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====== INDUSTRIES SECTION ====== */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide specialized Arabic SEO services for:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-webskeet-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-webskeet-blue/10 transition-colors">
                  <industry.icon className="h-6 w-6 text-webskeet-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{industry.title}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ====== GEOGRAPHIC COVERAGE SECTION ====== */}
      <section className="bg-gradient-to-r from-webskeet-blue/5 to-webskeet-gold/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
              Markets We Cover
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We work with businesses across the Arabic-speaking world:
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {geoLocations.map((loc, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-webskeet-blue flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900">{loc.country}</h3>
                        {loc.cities && <p className="text-gray-600 text-sm">{loc.cities}</p>}
                        {loc.link && (
                          <Link
                            href={loc.link}
                            className="inline-flex items-center gap-1 text-webskeet-blue hover:underline text-sm font-medium mt-1"
                          >
                            {loc.linkLabel}
                            <ChevronRight className="h-3 w-3" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">
              We also serve international companies entering Arabic markets from Europe, the US, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-webskeet-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed text-base">
                  {faq.answer}
                  {faq.link && (
                    <>
                      {" "}
                      <Link
                        href={faq.link.href}
                        className="inline-flex items-center gap-1 text-webskeet-blue hover:underline font-medium"
                      >
                        {faq.link.label}
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ====== FINAL CTA + CONSULTATION FORM ====== */}
      <section className="bg-gradient-to-r from-webskeet-blue/5 to-webskeet-gold/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-webskeet-blue mb-4">
              Ready to Grow Your Arabic Search Visibility?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Book a free consultation with a WebSkeet SEO expert. We'll analyze your site, identify opportunities in the Arabic market, and outline a clear action plan — all in 30 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <div id="consultation">
        <ConsultationSection locale={locale} />
      </div>
    </div>
  )
}
