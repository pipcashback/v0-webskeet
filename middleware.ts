import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip locale handling for API routes, static files, etc.
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // /ar/* paths are Arabic - pass through (already has locale prefix)
  if (pathname.startsWith("/ar/") || pathname === "/ar") {
    return NextResponse.next()
  }

  // /en/* paths - pass through (already has locale prefix)
  if (pathname.startsWith("/en/") || pathname === "/en") {
    return NextResponse.next()
  }

  // Everything else is English (default locale)
  // Rewrite to /en/... internally so [locale] route segment works
  const url = request.nextUrl.clone()
  url.pathname = `/en${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
