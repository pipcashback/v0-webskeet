/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.ctfassets.net', 'blob.v0.app', 'images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
  },
  async redirects() {
    return [
      // === WWW to non-WWW ===
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.webskeet.com' }],
        destination: 'https://webskeet.com/:path*',
        permanent: true,
      },

      // === Legacy redirects (keep) ===
      {
        source: '/seo-title-generator',
        destination: '/tools/seo-title-generator',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ar/portfolio',
        destination: '/',
        permanent: true,
      },

      // === Arabic content 301 redirects (OLD -> NEW /ar/ URLs) ===
      // Pages
      {
        source: '/about',
        destination: '/ar/about',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/ar/contact',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/ar/faq',
        permanent: true,
      },
      {
        source: '/seo-pricing',
        destination: '/ar/seo-pricing',
        permanent: true,
      },
      {
        source: '/guest-posting-service',
        destination: '/ar/guest-posting-service',
        permanent: true,
      },
      {
        source: '/subscribe',
        destination: '/ar/subscribe',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/ar/privacy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/ar/terms',
        permanent: true,
      },

      // === Blog redirects (all Arabic blog posts -> /ar/blog/) ===
      {
        source: '/blog/what-is-seo',
        destination: '/ar/blog/what-is-seo',
        permanent: true,
      },
      {
        source: '/blog/best-seo-tools',
        destination: '/ar/blog/best-seo-tools',
        permanent: true,
      },
      {
        source: '/blog/what-are-backlinks',
        destination: '/ar/blog/what-are-backlinks',
        permanent: true,
      },
      {
        source: '/blog/Google-keyword-planner',
        destination: '/ar/blog/Google-keyword-planner',
        permanent: true,
      },
      {
        source: '/blog/page-speed',
        destination: '/ar/blog/page-speed',
        permanent: true,
      },
      {
        source: '/blog/seo-strategies-2025',
        destination: '/ar/blog/seo-strategies-2025',
        permanent: true,
      },
      {
        source: '/blog/off-page-seo-techniques-2025',
        destination: '/ar/blog/off-page-seo-techniques-2025',
        permanent: true,
      },
      {
        source: '/blog/seo-checker',
        destination: '/ar/blog/seo-checker',
        permanent: true,
      },
      {
        source: '/blog/seo-rules',
        destination: '/ar/blog/seo-rules',
        permanent: true,
      },
      {
        source: '/blog/seo-plan-strategy-guide',
        destination: '/ar/blog/seo-plan-strategy-guide',
        permanent: true,
      },
      {
        source: '/blog/guest-posting-tips',
        destination: '/ar/blog/guest-posting-tips',
        permanent: true,
      },
      {
        source: '/blog/seo-glossary',
        destination: '/ar/blog/seo-glossary',
        permanent: true,
      },
      {
        source: '/blog/keyword-strategy',
        destination: '/ar/blog/keyword-strategy',
        permanent: true,
      },
      {
        source: '/blog/seo-specialist',
        destination: '/ar/blog/seo-specialist',
        permanent: true,
      },
      {
        source: '/blog/types-of-keywords',
        destination: '/ar/blog/types-of-keywords',
        permanent: true,
      },
      {
        source: '/blog/what-is-llms-txt',
        destination: '/ar/blog/what-is-llms-txt',
        permanent: true,
      },
      {
        source: '/blog/advanced-seo-content-writing-techniques',
        destination: '/ar/blog/advanced-seo-content-writing-techniques',
        permanent: true,
      },
      {
        source: '/blog/best-seo-services-company',
        destination: '/ar/blog/best-seo-services-company',
        permanent: true,
      },
      {
        source: '/blog/google-algorithm-updates',
        destination: '/ar/blog/google-algorithm-updates',
        permanent: true,
      },
      {
        source: '/blog/small-business-seo',
        destination: '/ar/blog/small-business-seo',
        permanent: true,
      },
      {
        source: '/blog/ecommerce-product-page-seo',
        destination: '/ar/blog/ecommerce-product-page-seo',
        permanent: true,
      },
      {
        source: '/blog/technical-seo-guide',
        destination: '/ar/blog/technical-seo-guide',
        permanent: true,
      },
      {
        source: '/blog/google-trends-for-keyword-research',
        destination: '/ar/blog/google-trends-for-keyword-research',
        permanent: true,
      },
      {
        source: '/blog/high-volume-low-competition-keywords',
        destination: '/ar/blog/high-volume-low-competition-keywords',
        permanent: true,
      },
      {
        source: '/blog/seo-report',
        destination: '/ar/blog/seo-report',
        permanent: true,
      },
      {
        source: '/blog/optimize-website-for-search-engines',
        destination: '/ar/blog/optimize-website-for-search-engines',
        permanent: true,
      },
      {
        source: '/blog/answer-engine-optimization',
        destination: '/ar/blog/answer-engine-optimization',
        permanent: true,
      },
      {
        source: '/blog/types-of-seo',
        destination: '/ar/blog/types-of-seo',
        permanent: true,
      },
      {
        source: '/blog/seo-ranking',
        destination: '/ar/blog/seo-ranking',
        permanent: true,
      },
      {
        source: '/blog/bounce-rate',
        destination: '/ar/blog/bounce-rate',
        permanent: true,
      },
      {
        source: '/blog/fix-broken-links',
        destination: '/ar/blog/fix-broken-links',
        permanent: true,
      },
      {
        source: '/blog/seo-visibility-brand-growth',
        destination: '/ar/blog/seo-visibility-brand-growth',
        permanent: true,
      },
      {
        source: '/blog/competitor-analysis-seo-ranking',
        destination: '/ar/blog/competitor-analysis-seo-ranking',
        permanent: true,
      },
      {
        source: '/blog/how-to-increase-organic-traffic',
        destination: '/ar/blog/how-to-increase-organic-traffic',
        permanent: true,
      },
      {
        source: '/blog/on-page-seo-article-optimization',
        destination: '/ar/blog/on-page-seo-article-optimization',
        permanent: true,
      },
      {
        source: '/blog/local-seo',
        destination: '/ar/blog/local-seo',
        permanent: true,
      },
      {
        source: '/blog/off-page-seo',
        destination: '/ar/blog/off-page-seo',
        permanent: true,
      },
      {
        source: '/blog/author/mahmoud-ali',
        destination: '/ar/blog/author/mahmoud-ali',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
