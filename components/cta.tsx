"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export function CTA() {
  const t = useTranslations("cta")

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary/80 to-accent">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground">{t("title")}</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">{t("description")}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="group">
            {t("trial")}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            {t("demo")}
          </Button>
        </div>
      </div>
    </section>
  )
}
