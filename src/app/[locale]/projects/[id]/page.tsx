import { StackProject } from "@/components/ui/StackProject";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Separator } from "@/components/ui/Separator";
import PageButton from "@/components/ui/PageButton";
import { CarouselPlugin } from "@/components/ui/CustomCarousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import { FadeIn } from "@/components/ui/FadeIn";
import * as FaIcons from "react-icons/fa";
import { Camera } from "lucide-react";
import { getProjects } from "../data";
import { getTranslations } from "next-intl/server";

interface DetailPageProps {
  params: Promise<{ id: string; locale: string }>;
}

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { id, locale } = await params;
  const t = await getTranslations({ locale, namespace: "projectDetail" });
  const projects = await getProjects(locale);
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return {
      title: t("notFoundTitle"),
      description: t("notFoundDescription"),
    };
  }

  return {
    title: `${t("metadataTitlePrefix")}${project.title}`,
    description: project.description,
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { id, locale } = await params;
  const t = await getTranslations({ locale, namespace: "projectDetail" });
  const projects = await getProjects(locale);
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen text-primary pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/${locale}`}>{t("breadcrumbHome")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/${locale}#projects`}>
                  {t("breadcrumbProjects")}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>{project.title}</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>

        {project.image && project.image.length > 0 && (
          <div className="mb-8">
            <CarouselPlugin images={project.image} alt={project.title} />
          </div>
        )}

        {!project.image && (
          <div className="max-w-3xl mx-auto h-64 md:h-96 rounded-xl bg-linear-to-br from-secondary/80 to-background flex items-center justify-center border border-border mb-8">
            <Camera className="w-12 h-12 text-muted-foreground/40" />
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>

        <p className="text-muted-foreground md:text-lg mb-8 leading-relaxed">
          {project.fullDescription || project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <StackProject key={tech}>{tech}</StackProject>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          {project.github && project.github !== "#" && (
            <PageButton
              href={project.github}
              ariaLabel={t("githubButton")}
              title={t("githubButton")}
            >
              <FaIcons.FaGithub className="text-lg" />
              {t("githubButton")}
            </PageButton>
          )}

          {project.documentation && project.documentation !== "#" && (
            <PageButton
              href={project.documentation}
              ariaLabel={t("docsButton")}
              title={t("docsButton")}
            >
              <FaIcons.FaBook className="text-lg" />
              {t("docsButton")}
            </PageButton>
          )}
        </div>

        {project.linkedin && project.linkedin !== "#" && (
          <div className="relative bg-chart-1/10 text-primary rounded-2xl p-6 sm:p-8 mb-12 border border-chart-1/50 shadow-sm overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">
                    {t("linkedinTitle")}
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {t("linkedinDescription")}
                  </p>
                </div>
              </div>
              <PageButton
                href={project.linkedin}
                ariaLabel={t("linkedinButton")}
                title={t("linkedinButton")}
                className="bg-blue-600 hover:bg-blue-800 text-white hover:text-gray-200 font-semibold"
              >
                <FaIcons.FaLinkedin className="text-lg" />
                {t("linkedinButton")}
              </PageButton>
            </div>
          </div>
        )}

        {project.isDeveloping && (
          <div className="relative bg-card border border-chart-1/30 rounded-xl p-6 sm:p-8 shadow-lg shadow-chart-1/10 cursor-default">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-chart-1/10 flex items-center justify-center border border-chart-1/30">
                  <FaIcons.FaCode className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-3">
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                    {t("developingTitle")}
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {project.developingDescription}
                </p>
              </div>
            </div>
          </div>
        )}

        {project.functionalities && project.functionalities.length > 0 && (
          <div className="mt-12">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-chart-1 rounded-full" />
                {t("mainFeaturesTitle")}
              </h2>
              <p className="text-muted-foreground">
                {t("mainFeaturesSubtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 auto-rows-fr cursor-default">
              {project.functionalities.map((func, index) => {
                const IconComponent =
                  (FaIcons as any)[func.icon] || FaIcons.FaCode;
                return (
                  <FadeIn
                    delay={0.1 * index}
                    key={func.title}
                    className="h-full"
                  >
                    <div className="group h-full p-6 bg-linear-to-br from-secondary/80 via-background to-secondary/80 border border-primary/5 rounded-xl hover:border-chart-1 transition-all duration-300 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-chart-1/10 flex items-center justify-center group-hover:bg-chart-1/20 transition-colors">
                          <IconComponent className="text-chart-1 text-lg" />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold group-hover:text-chart-1">
                          {func.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed grow">
                        {func.description}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        )}

        {project.full_stack && project.full_stack.length > 0 && (
          <div className="mt-12">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-chart-1 rounded-full" />
                {t("techStackTitle")}
              </h2>
              <p className="text-muted-foreground ml-5">
                {t("techStackSubtitle")}
              </p>
            </div>
            <div className="relative border border-border/50 rounded-2xl p-6 sm:p-8 bg-linear-to-br from-secondary/80 via-background to-secondary/80 overflow-hidden cursor-default">
              <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {project.full_stack.map((tech) => (
                  <div
                    key={tech}
                    className="group relative bg-primary-foreground/80 backdrop-blur-sm border border-border/60 rounded-xl hover:border-chart-1/70 hover:shadow-lg hover:shadow-chart-1/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-3 min-h-22.5 overflow-hidden animate-fadeInUp"
                  >
                    <span className="relative text-sm font-semibold text-primary group-hover:text-chart-1 transition-colors duration-300 text-center leading-tight">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Separator className="max-w-6xl mx-auto my-12" />

      <div className="text-center">
        <PageButton href={`/${locale}#projects`} target="_self">
          {t("backButton")}
        </PageButton>
      </div>
    </main>
  );
}
