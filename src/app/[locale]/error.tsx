"use client"

import { AlertCircle, RefreshCw, Home } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"


export default function Error({ reset }: { reset: () => void }) {
  const t = useTranslations("error")
  const locale = useLocale()

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-chart-1/20 rounded-full blur-2xl" />
            <div className="relative w-24 h-24 bg-linear-to-br from-chart-1/10 to-destructive/10 rounded-full flex items-center justify-center border-2 border-destructive/20">
              <AlertCircle className="w-12 h-12 text-destructive" />
            </div>
          </div>
        </div>
        <h1 className="text-2xl md:text-5xl font-bold text-foreground mb-4">{t("title")}</h1>
        <p className="text-muted-foreground text-lg mb-2">{t("description")}</p>
        <p className="text-muted-foreground/70 text-sm mb-8">{t("description2")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="group inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-chart-1/30 hover:-translate-y-0.5 cursor-pointer"
            type="button"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            {t("tryAgain")}
          </button>
          <a
            href={`/${locale}`}
            className="inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 bg-primary-foreground hover:bg-secondary text-primary border border-border hover:border-chart-1 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            <Home className="w-5 h-5" />
            {t("backHome")}
          </a>
        </div>
        <p className="mt-12 text-sm text-muted-foreground/60">
          {t("contactPrompt")}{" "}
          <a
            href={`/${locale}#contact`}
            className="text-chart-1 hover:text-chart-1/80 underline underline-offset-2 transition-colors"
          >
            {t("contact")}
          </a>
          .
        </p>
      </div>
    </div>
  )
}
