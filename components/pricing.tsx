"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { useTranslations } from "next-intl"

export function Pricing() {
  const t = useTranslations("pricing")

  const plans = [
    {
      nameKey: "starter.name",
      priceKey: "starter.price",
      periodKey: "starter.period",
      descriptionKey: "starter.description",
      ctaKey: "starter.cta",
      featuresKey: "starter.features",
    },
    {
      nameKey: "basic.name",
      priceKey: "basic.price",
      periodKey: "basic.period",
      descriptionKey: "basic.description",
      ctaKey: "basic.cta",
      featuresKey: "basic.features",
      highlighted: true,
    },
    {
      nameKey: "pro.name",
      priceKey: "pro.price",
      periodKey: "pro.period",
      descriptionKey: "pro.description",
      ctaKey: "pro.cta",
      featuresKey: "pro.features",
    },
    {
      nameKey: "enterprise.name",
      priceKey: "enterprise.price",
      periodKey: "enterprise.period",
      descriptionKey: "enterprise.description",
      ctaKey: "enterprise.cta",
      featuresKey: "enterprise.features",
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("description")}</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 lg:gap-6">
          {plans.map((plan) => {
            const features = t.raw(plan.featuresKey) as string[]
            return (
              <div
                key={plan.nameKey}
                className={`relative rounded-lg border transition-all ${
                  plan.highlighted
                    ? "border-accent bg-accent/5 ring-2 ring-accent"
                    : "border-border bg-card hover:border-accent"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {t("mostPopular")}
                  </div>
                )}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{t(plan.nameKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(plan.descriptionKey)}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-foreground">{t(plan.priceKey)}</div>
                    <div className="text-sm text-muted-foreground">{t(plan.periodKey)}</div>
                  </div>
                  <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                    {t(plan.ctaKey)}
                  </Button>
                  <div className="space-y-3 pt-4 border-t border-border">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
