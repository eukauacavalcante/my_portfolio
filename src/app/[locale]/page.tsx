import { Card } from "@/components/ui/Card"
import IconCard from "@/components/ui/IconCard"
import IconStack from "@/components/ui/IconStack"
import { StackProject } from "@/components/ui/StackProject"
import { ChevronDown, ArrowRight, Pencil, Lock, Rocket, Camera } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "@/components/ui/FadeIn"
import PageButton from "@/components/ui/PageButton"
import { stack_data } from "./stack/stack_data"
import { getLocale, getTranslations } from "next-intl/server"
import { getProjects } from "./projects/data"


export default async function Home() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: "home" })
  const tStack = await getTranslations({ locale, namespace: "stack" })
  const projects = await getProjects(locale)

  return (
    <main className="text-primary">
      <section className="pt-20 pb-20 px-6 min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
        <FadeIn delay={0.1}>
          <span className="inline-block py-1 px-3 rounded-full bg-chart-1/10 border border-chart-1/20 text-xs font-medium text-primary mb-6 backdrop-blur-sm">
            {t("welcomeBadge")}
          </span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4">
            {t("name")}
          </h1>
          <p className="md:text-2xl text-muted-foreground max-w-2xl mb-10 font-light leading-relaxed">
            {t("description")}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <PageButton
              href={`/${locale}#projects`}
              target="_self"
              className="px-10 py-6"
            >
              {t("projectsButton")}
            </PageButton>
            <PageButton
              className="px-10 py-6 bg-primary-foreground text-primary border hover:border-chart-1 hover:bg-primary-foreground transition-colors duration-300"
              href={`/${locale}#contact`}
              target="_self"
            >
              {t("contactButton")}
            </PageButton>
          </div>
        </FadeIn>
        <div className="absolute inset-x-0 bottom-20 flex justify-center pointer-events-none">
          <ChevronDown className="w-6 h-6 text-primary animate-bounce md:w-8 md:h-8" aria-hidden="true" />
          <span className="sr-only">{t("scrollHint")}</span>
        </div>
      </section>

      <section id="about" className="py-20 md:py-65 px-6 border-y border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1}>
            <div className="relative group">
              <Image
                src="/images/kauacavalcante.jpeg"
                alt={t("name")}
                width={192}
                height={192}
                className="relative w-48 md:w-full max-w-sm mx-auto rounded-full object-cover ring-2 ring-chart-1 shadow-2xl group-hover:shadow-chart-1/40 transition duration-500"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t("aboutTitle")} <span className="text-chart-1">{t("aboutTitleHighlight")}</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t("aboutParagraph1")}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t("aboutParagraph2")}
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-chart-1/25 border border-chart-1/60 rounded-lg text-accent-foreground text-sm">
                  <Pencil className="inline-block w-4 h-4 mr-1" /> {t("badges.learning")}
                </div>
                <div className="px-4 py-2 bg-chart-1/25 border border-chart-1/60 rounded-lg text-accent-foreground text-sm">
                  <Rocket className="inline-block w-4 h-4 mr-1" /> {t("badges.innovation")}
                </div>
                <div className="px-4 py-2 bg-chart-1/25 border border-chart-1/60 rounded-lg text-accent-foreground text-sm">
                  <Lock className="inline-block w-4 h-4 mr-1" /> {t("badges.security")}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="stack" className="py-20 md:py-35 bg-secondary/50 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">{t("stackTitle")}</h2>
            <p className="text-muted-foreground">{t("stackSubtitle")}</p>
          </div>
          {Object.entries(stack_data).map(([key, items]) => (
            <div key={key} className="mb-10">
              <h2 className="text-2xl font-bold mb-2">{tStack(`categories.${key}`)}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {items.map((item) => (
                  <IconCard key={item.name}>
                    <IconStack icon={item.icon} className="group-hover:text-foreground">
                      {item.name}
                    </IconStack>
                  </IconCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">{t("projectsTitle")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {projects.map((project) => (
              <FadeIn delay={0.2} key={project.id} className="h-full">
                <Card className="h-full flex flex-col">
                  <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-secondary/80 to-background relative">
                      {project.image ? (
                        <Image
                          src={project.image[0]}
                          alt={t("projectImageAlt", { title: project.title })}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <Camera className="w-12 h-12 text-muted-foreground/40 group-hover:text-chart-1/60 group-hover:scale-110 transition-all duration-500" />
                      )}
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 right-3 z-20">
                        <span className="px-2.5 py-1 bg-chart-1/90 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-lg">
                          {t("featured")}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 p-6 sm:p-7 md:p-8">
                    <div className="mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-chart-1 transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3 grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6 min-h-8">
                      {project.stack.map((tech) => (
                        <StackProject key={tech}>{tech}</StackProject>
                      ))}
                    </div>
                    <a
                      href={`/${locale}/projects/${project.id}`}
                      className="group/btn relative w-full bg-chart-1 hover:bg-chart-1/90 text-white text-center text-sm font-semibold px-4 py-3 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-chart-1/30 hover:-translate-y-0.5"
                      aria-label={t("detailsButton")}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {t("detailsButton")}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    </a>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a
              href="https://github.com/eukauacavalcante?tab=repositories"
              target="_blank"
              className="inline-flex items-center gap-2 text-foreground border-b border-foreground pb-1 hover:text-chart-1 hover:border-chart-1 transition-all group"
              aria-label={t("exploreMoreGithub")}
              title={t("exploreMoreGithub")}
              rel="noopener noreferrer"
            >
              {t("exploreMoreGithub")} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
