"use client"

import { CheckCircle2, Zap, Shield, Brain, BarChart3, Lock } from "lucide-react"
import { useTranslations } from "next-intl"

export function Features() {
  const t = useTranslations("features")

  const features = [
    {
      icon: Brain,
      titleKey: "aiPowered.title",
      descriptionKey: "aiPowered.description",
    },
    {
      icon: Shield,
      titleKey: "proctoring.title",
      descriptionKey: "proctoring.description",
    },
    {
      icon: Lock,
      titleKey: "identity.title",
      descriptionKey: "identity.description",
    },
    {
      icon: Zap,
      titleKey: "results.title",
      descriptionKey: "results.description",
    },
    {
      icon: BarChart3,
      titleKey: "analytics.title",
      descriptionKey: "analytics.description",
    },
    {
      icon: CheckCircle2,
      titleKey: "security.title",
      descriptionKey: "security.description",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("description")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.titleKey}
                className="group bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t(feature.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(feature.descriptionKey)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
