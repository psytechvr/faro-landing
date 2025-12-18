"use client"

import { useTranslations } from "next-intl"

export function Stats() {
  const t = useTranslations("stats")

  const stats = [
    { value: "50K+", labelKey: "activeUsers" },
    { value: "2M+", labelKey: "assessmentsTaken" },
    { value: "99.9%", labelKey: "uptime" },
    { value: "150+", labelKey: "clients" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.labelKey} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
