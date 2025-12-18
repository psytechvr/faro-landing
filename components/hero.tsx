"use client"

import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import Image from "next/image"

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">{t("assess")}</span>
                <span className="text-accent ml-3">{t("guide")}</span>
                <span className="text-primary block">{t("illuminate")}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">{t("description")}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                {t("cta")}
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                {t("demo")}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">{t("noCard")}</p>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              <Image
                src="/images/fro.png"
                alt="Faro logo - lighthouse with digital elements"
                width={400}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
