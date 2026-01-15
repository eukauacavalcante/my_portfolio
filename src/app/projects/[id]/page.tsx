import { StackProject } from "@/components/ui/StackProject";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../data";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator"
import PageButton from "@/components/ui/PageButton";
import { CarouselPlugin } from "@/components/ui/CustomCarousel";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { FadeIn } from "@/components/ui/FadeIn";
import * as FaIcons from "react-icons/fa";
import { Camera } from "lucide-react";

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {
      title: "Projeto não encontrado",
      description: "Este projeto não existe.",
    }
  }

  return {
    title: `Portfólio - ${project.title}`,
    description: project.description,
  }
}

interface DetailPageProps {
  params: Promise<{ id: string }>
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen text-primary pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Início</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/#projects">Projetos</Link>
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
          <div className="max-w-3xl mx-auto h-64 md:h-96 rounded-xl bg-gradient-to-br from-secondary/80 to-background flex items-center justify-center border border-border rounded-xl mb-8">
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
            <PageButton href={project.github} ariaLabel="Ver no GitHub" title="Ver no GitHub">
                <FaIcons.FaGithub className="text-lg" />
                Ver no GitHub
            </PageButton>
          )}

          {project.documentation && project.documentation !== "#" && (
            <PageButton href={project.documentation} ariaLabel="Ver Documentação" title="Ver Documentação">
                <FaIcons.FaBook className="text-lg" />
                Ver Documentação
            </PageButton>
          )}
        </div>

        {project.linkedin && project.linkedin !== "#" && (
          <div className="relative bg-chart-1/10 text-primary rounded-2xl p-6 sm:p-8 mb-12 border border-chart-1/50 shadow-sm overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">
                    Este projeto está no meu LinkedIn!
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Confira mais detalhes e apoie este trabalho na minha rede profissional
                  </p>
                </div>
              </div>
              <PageButton href={project.linkedin} ariaLabel="Apoiar no LinkedIn" title="Apoiar no LinkedIn" className="bg-blue-600 hover:bg-blue-800 text-white hover:text-gray-200 font-semibold">
                <FaIcons.FaLinkedin className="text-lg" />
                Apoiar no LinkedIn
              </PageButton>
            </div>
          </div>
        )}

        {project.functionalities && project.functionalities.length > 0 && (
          <div className="mt-12">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-chart-1 rounded-full" />
                Principais Funcionalidades
              </h2>
              <p className="text-muted-foreground">Ferramentas poderosas para monitoramento e análise.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
              {project.functionalities.map((func, index) => {
                const iconName = func.icon
                const IconComponent = (FaIcons as any)[iconName] || FaIcons.FaCode
                const entries = Object.entries(func).filter(([key]) => key !== "icon")
                const [feature, desc] = entries[0] || ["", ""]
                return (
                  <FadeIn delay={0.1 * index} key={feature} className="h-full">
                    <div className="group h-full p-6 bg-gradient-to-br from-secondary/80 via-background to-secondary/80 border border-primary/5 rounded-xl hover:border-chart-1 transition-all duration-300 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-chart-1/10 flex items-center justify-center group-hover:bg-chart-1/20 transition-colors">
                          <IconComponent className="text-chart-1 text-lg" />
                        </div>
                        <h3 className="text-sm md:text-lg font-bold group-hover:text-chart-1">{feature}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{desc}</p>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        )}

        {project.full_stack && project.full_stack.length > 0 && (
          <div className="mt-12">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-chart-1 rounded-full" />
                Stack Tecnológica
              </h2>
              <p className="text-muted-foreground ml-5">
                Tecnologias utilizadas no desenvolvimento deste projeto.
              </p>
            </div>
            <div className="relative border border-border/50 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-secondary/80 via-background to-secondary/80 overflow-hidden"> 
              <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {project.full_stack.map((tech, index) => (
                  <div 
                    key={tech} 
                    className="group relative bg-primary-foreground/80 backdrop-blur-sm border border-border/60 rounded-xl hover:border-chart-1/70 hover:shadow-lg hover:shadow-chart-1/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-3 min-h-[90px] overflow-hidden animate-fadeInUp"
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

      <Separator className="max-w-6xl mx-auto my-12"/>

      <div className="text-center">
          <PageButton href="/#projects" target="_self">Voltar</PageButton>
      </div>
    </main>
  )
}
