"use client"

import { Button } from "@/components/ui/button"
import { useTranslations, useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { Globe } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const t = useTranslations("header")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const handleLanguageChange = (newLocale: "en" | "es") => {
    if (!pathname) return

    const segments = pathname.split("/")
    segments[1] = newLocale // replace locale segment

    const newPath = segments.join("/") || `/${newLocale}`
    router.push(newPath)
    setIsLanguageOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/faro-logo.png" alt="Faro" className="h-8 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium hover:text-accent transition-colors">
            {t("features")}
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-accent transition-colors">
            {t("pricing")}
          </a>
          <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
            {t("docs")}
          </a>
          <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
            {t("enterprise")}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(prev => !prev)}
              className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors p-2"
              aria-label="Select language"
            >
              <Globe className="w-4 h-4" />
              <span>{locale.toUpperCase()}</span>
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-lg z-10">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-accent/10 transition-colors ${
                    locale === "en" ? "bg-accent/5 text-accent" : ""
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange("es")}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-accent/10 transition-colors ${
                    locale === "es" ? "bg-accent/5 text-accent" : ""
                  }`}
                >
                  Español
                </button>
              </div>
            )}
          </div>

          <a href="https://dashboard.faroassessments.com">
            <Button variant="ghost" size="sm">
              {t("signIn")}
            </Button>
          </a>
          <Button size="sm">{t("getStarted")}</Button>
        </div>
      </div>
    </header>
  )
}
