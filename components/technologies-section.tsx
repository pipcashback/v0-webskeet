import type { Locale } from "@/i18n/config"
import Image from "next/image"

const translations = {
  en: {
    sectionTitle: "Our Practical SEO Tools",
  },
  ar: {
    sectionTitle: "أدواتنا العملية لتحسين السيو",
  },
}

const TechnologiesSection = ({ locale }: { locale: Locale }) => {
  const t = translations[locale]

  const tools = [
    { name: "Google Search Console", logo: "/images/tools/google-search-console.png" },
    { name: "Google Analytics", logo: "/images/tools/google-analytics.png" },
    { name: "Google Marketing Platform", logo: "/images/tools/google-marketing-platform.png" },
    { name: "SEMrush", logo: "/images/tools/semrush.png" },
    { name: "Ahrefs", logo: "/images/tools/ahrefs.png" },
    { name: "MOZ", logo: "/images/tools/moz.png" },
    { name: "Screaming Frog", logo: "/images/tools/screaming-frog.png" },
    { name: "Sitebulb", logo: "/images/tools/sitebulb.png" },
  ]

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.sectionTitle}</h2>
        </div>

        {/* Horizontal logos container */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex-shrink-0 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0"
            >
              <Image
                src={tool.logo || "/placeholder.svg"}
                alt={tool.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                style={{ opacity: 1 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection
