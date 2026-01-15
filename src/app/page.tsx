import { Card } from "@/components/ui/Card";
import IconCard from "@/components/ui/IconCard";
import IconStack from "@/components/ui/IconStack";
import { StackProject } from "@/components/ui/StackProject";
import { ChevronUp, ArrowRight, Pencil, Lock, Rocket, Camera } from "lucide-react";
import Image from "next/image";
import { projects } from "./projects/data";
import { FadeIn } from "@/components/ui/FadeIn";
import PageButton from "@/components/ui/PageButton";
import { stack_data } from "./stack/stack_data";


const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps e Workspace",
}

export default function Home() {
    return (
        <main className="text-primary">
            <section className="pt-20 pb-20 px-6 min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
                <FadeIn delay={0.1}>
                    <span className="inline-block py-1 px-3 rounded-full bg-chart-1/5 border border-chart-1/10 text-xs font-medium text-primary mb-6 backdrop-blur-sm">
                        Bem-vindo ao meu portfólio!
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4">
                        Kauã Cavalcante
                    </h1>
                        <p className="md:text-2xl text-muted-foreground max-w-2xl mb-10 font-light leading-relaxed">
                            Desenvolvedor <span className="text-primary font-medium">Full Stack</span> especializado em criar soluções <span className="text-primary font-medium">escaláveis, seguras e modernas</span> com foco em APIs robustas e experiência no desenvolvimento de sistemas end-to-end!
                        </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <PageButton href="#projects" target="_self" className="px-10 py-6" aria-label="Ver Projetos" title="Ver Projetos">
                            Ver Projetos
                        </PageButton>
                        <PageButton className="px-10 py-6 bg-primary-foreground text-primary border hover:border-chart-1 hover:bg-primary-foreground transition-colors duration-300" href="#contact" target="_self" aria-label="Fale Comigo" title="Fale Comigo">
                            Fale Comigo
                        </PageButton>
                    </div>
                </FadeIn>
                <div className="absolute inset-x-0 bottom-20 flex justify-center pointer-events-none">
                    <ChevronUp className="w-6 h-6 text-primary animate-bounce md:w-8 md:h-8" aria-hidden="true" />
                    <span className="sr-only">Ir para próximo conteúdo</span>
                </div>
            </section>

            <section id="about" className="py-20 md:py-65 px-6 border-y border-border">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <FadeIn delay={0.1}>
                        <div className="relative group">
                            <Image 
                            src="/images/kauacavalcante.jpeg"
                            alt="Kauã Cavalcante"
                            width={192} 
                            height={192}
                            className="relative w-48 md:w-full max-w-sm mx-auto rounded-full object-cover ring-2 ring-chart-1 shadow-2xl group-hover:shadow-chart-1/40 transition duration-500"
                            />
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre <span className="text-chart-1">mim</span></h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Sou apaixonado por tecnologia e desenvolvimento de sistemas, com foco em criar soluções seguras, escaláveis e modernas. Acadêmico de <span className="text-primary font-semibold">Análise e Desenvolvimento de Sistemas</span>, em constante evolução.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Tenho experiência sólida em sistemas Full Stack, APIs RESTful, bancos de dados relacionais e implementação de boas práticas de segurança. Curto trabalhar com Django e Next.js, criando aplicações eficientes e bem estruturadas.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <div className="px-4 py-2 bg-chart-1/25 border border-chart-1/60 rounded-lg text-accent-foreground text-sm">
                                    <Pencil className="inline-block w-4 h-4 mr-1" /> Sempre aprendendo
                                </div>
                                <div className="px-4 py-2 bg-chart-1/25 border border-chart-1/60 rounded-lg text-accent-foreground text-sm">
                                    <Rocket className="inline-block w-4 h-4 mr-1" /> Soluções inovadoras
                                </div>
                                <div className="px-4 py-2 bg-chart-1/25 border border-chart-1/60 rounded-lg text-accent-foreground text-sm">
                                    <Lock className="inline-block w-4 h-4 mr-1" /> Foco em segurança
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section id="stack" className="py-20 md:py-35 bg-secondary/50 border-y border-border">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold mb-2">Minha Stack</h2>
                        <p className="text-muted-foreground">Ferramentas que domino e utilizo diariamente.</p>
                    </div>
                    {Object.entries(stack_data).map(([key, items]) => (
                    <div key={key} className="mb-10">
                        <h2 className="text-2xl font-bold mb-2">{categoryLabels[key] ?? key}</h2>
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
                    <h2 className="text-3xl font-bold mb-16 text-center">Projetos</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                        {projects.map((project) => (
                            <FadeIn delay={0.2} key={project.id} className="h-full">
                                <Card className="h-full flex flex-col">
                                    <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/80 to-background relative">
                                            {project.image ? (
                                                <Image
                                                    src={project.image[0]}
                                                    alt={`Imagem do projeto ${project.title}`}
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
                                                    Destaque
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
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3 flex-grow">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6 min-h-[2rem]">
                                            {project.stack.map((tech) => (
                                                <StackProject key={tech}>{tech}</StackProject>
                                            ))}
                                        </div>
                                        <a
                                            href={`/projects/${project.id}`}
                                            className="group/btn relative w-full bg-chart-1 hover:bg-chart-1/90 text-white text-center text-sm font-semibold px-4 py-3 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-chart-1/30 hover:-translate-y-0.5"
                                            aria-label={`Ver detalhes de ${project.title}`}
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                Ver detalhes
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                                        </a>
                                    </div>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <a href="https://github.com/eukauacavalcante?tab=repositories" target="_blank" className="inline-flex items-center gap-2 text-foreground border-b border-foreground pb-1 hover:text-chart-1 hover:border-chart-1 transition-all group" aria-label="Explorar mais no Github" title="Explorar mais no Github" rel="noopener noreferrer">
                            Explorar mais no Github <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
