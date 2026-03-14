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
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.webskeet.com',
          },
        ],
        destination: 'https://webskeet.com/:path*',
        permanent: true,
      },
      // Legacy redirect for old SEO title generator (non-locale path)
      {
        source: '/en/seo-title-generator',
        destination: '/tools/seo-title-generator',
        permanent: true,
      },
      // Legacy routes redirect to home
      {
        source: '/en/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/portfolio',
        destination: '/',
        permanent: true,
      },
      // Old Arabic blog posts were at /blog/:slug before bilingual migration.
      // Redirect to /ar/blog/:slug (301). Does NOT affect /blog index page.
      {
        source: '/blog/:slug',
        destination: '/ar/blog/:slug',
        permanent: true,
      },
      // SEO company page only exists in Arabic — redirect English to Arabic
      {
        source: '/seo-company',
        destination: '/ar/seo-company',
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
