import { StackProject } from "@/components/StackProject";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../data";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator"
import PageButton from "@/components/PageButton";
import { CarouselPlugin } from "@/components/Carousel";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { FadeIn } from "@/components/FadeIn";

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
      <div className="max-w-6xl mx-auto">
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

        {!project.image && project.icon && (
          <div className="max-w-3xl mx-auto h-64 md:h-96 rounded-xl bg-gradient-to-br from-secondary/20 to-background flex items-center justify-center border border-border rounded-xl mb-8">
            <i className={`${project.icon} text-8xl`}></i>
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>

        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
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
                <i className="bi bi-github mr-2"></i>
                Ver no GitHub
            </PageButton>
          )}

          {project.documentation && project.documentation !== "#" && (
            <PageButton href={project.documentation} ariaLabel="Ver Documentação" title="Ver Documentação">
                <i className="bi bi-book mr-2"></i>
                Ver Documentação
            </PageButton>
          )}
        </div>

        {project.functionalities && project.functionalities.length > 0 && (
          <div className="mt-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Principais Funcionalidades</h2>
              <p className="text-muted-foreground">Ferramentas poderosas para monitoramento e análise.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
              {project.functionalities.map((func, index) => {
                const icon = func.icon
                const entries = Object.entries(func).filter(([key]) => key !== "icon")
                const [feature, desc] = entries[0] || ["", ""]
                return (
                  <FadeIn delay={0.1 * index} key={feature} className="h-full">
                    <div className="group h-full p-6 bg-primary/[0.07] border border-primary/5 rounded-xl hover:border-chart-1 hover:bg-primary/10 transition-all duration-300 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-chart-1/10 flex items-center justify-center group-hover:bg-chart-1/20 transition-colors">
                          <i className={`${icon} text-chart-1 text-lg`}></i>
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
              <h2 className="text-3xl font-bold mb-4">Stack Tecnológica</h2>
              <p className="text-muted-foreground">Tecnologias utilizadas no desenvolvimento.</p>
            </div>
            <div className="border border-border rounded-xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.full_stack.map((tech) => (
                  <div 
                    key={tech} 
                    className="group p-4 bg-primary/[0.07] border border-border rounded-lg hover:border-chart-1/50 hover:bg-chart-1/5 transition-all duration-300 flex flex-col items-center gap-2"
                  >
                    <span className="text-sm font-medium text-primary">{tech}</span>
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
