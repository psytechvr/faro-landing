import createMiddleware from "next-intl/middleware"
import type { NextRequest } from "next/server"

const intlMiddleware = createMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
  localePrefix: "always",
})

export function proxy(request: NextRequest) {
  return intlMiddleware(request)
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
