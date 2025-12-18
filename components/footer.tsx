"use client"

import { Separator } from "@/components/ui/separator"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <img src="/images/faro-logo.png" alt="Faro" className="h-6 w-auto" />
            <p className="text-sm text-muted-foreground">{t("description")}</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">{t("company")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  {t("about")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  {t("blog")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  {t("careers")}
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">{t("legal")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://privacypolicy.ai-patagonia.com" className="text-muted-foreground hover:text-accent transition-colors">
                  {t("privacy")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator />
        <div className="mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {t("copyright")}</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              {t("twitter")}
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              {t("linkedin")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
