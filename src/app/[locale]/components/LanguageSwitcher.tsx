'use client'

import { useRouter, usePathname } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"


export default function LanguageSwitcher() {
    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocale()
    const t = useTranslations("nav")

    const switchLocale = (newLocale: string) => {
        const segments = pathname.split("/")
        if (segments.length > 1) {
            segments[1] = newLocale
        }
        const newPathname = segments.join("/")
        router.push(newPathname)
    }

    return (
        <div className="inline-flex items-center gap-1 p-1 bg-primary-foreground rounded-full border border-primary/20 shadow-lg backdrop-blur-sm">
            <button
                onClick={() => switchLocale("pt")}
                className={`px-4 py-1 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
                    locale === "pt"
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-primary/70 hover:text-primary hover:bg-primary/10"
                }`}
                type="button"
                aria-label={t("translateToPortuguese")}
                title={t("translateToPortuguese")}
            >
                PT
            </button>
            <button
                onClick={() => switchLocale("en")}
                className={`px-4 py-1 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
                    locale === "en"
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-primary/70 hover:text-primary hover:bg-primary/10"
                }`}
                type="button"
                aria-label={t("translateToEnglish")}
                title={t("translateToEnglish")}
            >
                EN
            </button>
        </div>
    )
}
