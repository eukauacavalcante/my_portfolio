import PageButton from "@/components/ui/PageButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MenuSheet } from "@/components/ui/AppSidebar";
import { FaLinkedin } from "react-icons/fa";
import { getLocale, getTranslations } from "next-intl/server";
import LanguageSwitcher from "@/app/[locale]/components/LanguageSwitcher";

export default async function Header() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <header className="fixed w-full top-0 z-50 text-primary backdrop-blur-md bg-primary/0 border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-6 py-2 md:py-4 flex justify-between items-center">
        <a
          href={`/${locale}`}
          className="text-xl font-bold tracking-tighter hover:text-chart-1 transition-colors duration-300"
          aria-label={t("home")}
          title={t("home")}
        >
          KC<span className="text-chart-1">.</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <a
            href={`/${locale}#about`}
            className="hover:text-chart-1 transition-colors"
          >
            {t("about")}
          </a>
          <a
            href={`/${locale}#stack`}
            className="hover:text-chart-1 transition-colors"
          >
            {t("stack")}
          </a>
          <a
            href={`/${locale}#projects`}
            className="hover:text-chart-1 transition-colors"
          >
            {t("projects")}
          </a>
          <a
            href={`/${locale}#contact`}
            className="hover:text-chart-1 transition-colors"
          >
            {t("contact")}
          </a>
          <LanguageSwitcher />
          <ThemeToggle />
          <PageButton
            href="https://www.linkedin.com/in/eukauacavalcante/"
          >
            <FaLinkedin className="w-5 h-5" />
            {t("connect")}
          </PageButton>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <MenuSheet />
        </div>
      </div>
    </header>
  );
}
