type RouteMap = Record<string, string>

// ============================================
// SECTION 1: Pages with DIFFERENT slugs
// Arabic slug → English slug
// Add one line here each time you create a page pair with different slugs
// ============================================
const arToEn: RouteMap = {
  "seo-company": "arabic-seo-agency",
  // Future examples:
  // 'ecommerce-seo': 'arabic-ecommerce-seo',
  // 'seo-saudi-arabia': 'seo-services-saudi-arabia',
}

// Auto-generate reverse map (don't edit manually)
const enToAr: RouteMap = Object.fromEntries(
  Object.entries(arToEn).map(([ar, en]) => [en, ar])
)

// ============================================
// SECTION 2: Pages that exist in ONE language only
// These pages should hide the language switcher or disable switching
// ============================================
const arabicOnlyPaths: string[] = [
  // Individual Arabic-only pages go here
  // '/ar/some-specific-page',
]

const englishOnlyPaths: string[] = [
  // Individual English-only pages go here
]

// Patterns for matching groups of single-language pages
const arabicOnlyPatterns: RegExp[] = [
  /^\/ar\/blog\/.+/, // All Arabic blog posts (no English versions yet)
]

const englishOnlyPatterns: RegExp[] = [
  // None currently
]

// ============================================
// EXPORTED FUNCTIONS
// ============================================

/**
 * Check if a page exists only in one language (no counterpart).
 * Used by the language switcher to hide/disable the switch button.
 */
export function isSingleLanguagePage(path: string): boolean {
  const cleanPath = path.replace(/\/$/, "") || "/"

  // Check explicit lists
  if (arabicOnlyPaths.includes(cleanPath) || englishOnlyPaths.includes(cleanPath)) {
    return true
  }

  // Check patterns
  if (arabicOnlyPatterns.some((p) => p.test(cleanPath))) return true
  if (englishOnlyPatterns.some((p) => p.test(cleanPath))) return true

  return false
}

/**
 * Get the equivalent path in the target locale.
 * Returns null if no counterpart exists (single-language page).
 */
export function getLocalizedPath(currentPath: string, targetLocale: "en" | "ar"): string | null {
  const path = currentPath.replace(/\/$/, "") || "/"

  // If single-language page, return null (no counterpart)
  if (isSingleLanguagePage(path)) {
    return null
  }

  const isArabic = path.startsWith("/ar/") || path === "/ar"

  // Already in target locale
  if ((isArabic && targetLocale === "ar") || (!isArabic && targetLocale === "en")) {
    return path
  }

  if (isArabic && targetLocale === "en") {
    // Arabic → English
    const arSlug = path.replace(/^\/ar\/?/, "")

    // Check different-slug mapping first
    if (arToEn[arSlug]) {
      return `/${arToEn[arSlug]}`
    }

    // Same slug — remove /ar/
    return arSlug ? `/${arSlug}` : "/"
  }

  if (!isArabic && targetLocale === "ar") {
    // English → Arabic
    const enSlug = path.replace(/^\//, "")

    // Check different-slug mapping first
    if (enToAr[enSlug]) {
      return `/ar/${enToAr[enSlug]}`
    }

    // Same slug — add /ar/
    return enSlug ? `/ar/${enSlug}` : "/ar"
  }

  return path
}
