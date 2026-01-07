import { Card } from "@/components/Card";
import { IconCard } from "@/components/IconCard";
import { IconStack } from "@/components/IconStack";
import { StackProject } from "@/components/StackProject";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import { projects } from "./projects/data";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="text-primary">
        <section className="pt-40 pb-20 px-6 min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-chart-1/30 md:bg-chart-1/20 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-4/30 md:bg-chart-4/20 rounded-full blur-[120px] -z-10"></div>
            <FadeIn delay={0.1}>
                <span className="inline-block py-1 px-3 rounded-full bg-chart-1/5 border border-chart-1/10 text-xs font-medium text-chart-1 mb-6 backdrop-blur-sm">
                    Bem-vindo ao meu portfólio!
                </span>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4">
                    Kauã Cavalcante
                </h1>
                    <p className="md:text-2xl text-muted-foreground max-w-2xl mb-10 font-light leading-relaxed">
                        Desenvolvedor de software especializado em criar soluções <span className="text-primary font-medium">escaláveis, seguras e modernas</span> com foco em APIs robustas e experiência no desenvolvimento de sistemas Full Stack!
                    </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Button asChild className="px-10 py-6 text-primary-foreground">
                        <a href="#projects" aria-label="Ver Projetos" title="Ver Projetos">Ver Projetos</a>
                    </Button>
                    <Button asChild className="px-10 py-6" variant="outline">
                        <a href="#contact" aria-label="Fale Comigo" title="Fale Comigo">Fale Comigo</a>
                    </Button>
                </div>
            </FadeIn>
            <div className="flex justify-center items-center mt-20">
                <div className="flex flex-row gap-2 justify-center bg-chart-1/10 items-center border-2 border-chart-1/20 rounded-full px-4 py-2 shadow-lg shadow-chart-1/40 animate-bounce">
                    <span className="text-sm font-semibold">Deslize</span>
                    <ChevronUp className="text-chart-1 w-6 h-6" />
                </div>
            </div>
        </section>

        <section id="about" className="py-20 px-6">
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
                        Tenho experiência sólida em APIs RESTful, bancos de dados relacionais e implementação de boas práticas de segurança. Adoro trabalhar com Python e Django, criando aplicações eficientes e bem estruturadas.
                        </p>
                        <div className="flex flex-wrap gap-3">
                        <div className="px-4 py-2 bg-chart-1/10 border border-chart-1/60 rounded-lg text-accent-foreground text-sm">
                            <i className="bi bi-pencil"></i> Sempre aprendendo
                        </div>
                        <div className="px-4 py-2 bg-chart-1/10 border border-chart-1/60 rounded-lg text-accent-foreground text-sm">
                            <i className="bi bi-rocket-takeoff"></i> Soluções inovadoras
                        </div>
                        <div className="px-4 py-2 bg-chart-1/10 border border-chart-1/60 rounded-lg text-accent-foreground text-sm">
                            <i className="bi bi-lock"></i> Foco em segurança
                        </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>

        <section id="stack" className="py-20 bg-secondary/50 border-y border-border">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold mb-2">Minha Stack</h2>
                    <p className="text-muted-foreground">Ferramentas que domino e utilizo diariamente.</p>
                </div>
                <h2 className="text-2xl font-bold mb-2">Frontend</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <IconCard>
                        <IconStack icon="fa-brands fa-html5" className="group-hover:text-orange-500">HTML5</IconStack>
                    </IconCard>
                    <IconCard>
                        <IconStack icon="fa-brands fa-css3-alt" className="group-hover:text-blue-500">CSS3</IconStack>
                    </IconCard>
                    <IconCard>
                        <IconStack icon="fa-brands fa-square-js" className="group-hover:text-yellow-400">JavaScript</IconStack>
                    </IconCard>
                    <IconCard>
                        <IconStack icon="bi bi-filetype-tsx" className="group-hover:text-purple-500">TypeScript</IconStack>
                    </IconCard>
                    <IconCard>
                        <div className="bg-foreground p-2 rounded">
                            <Image src="images/next.svg" alt="Next.js Logo" width={90} height={90} />
                        </div>
                        <IconStack className="group-hover:text-foreground">Next.js</IconStack>
                    </IconCard>
                    <IconCard>
                        <IconStack icon="bi bi-palette" className="group-hover:text-cyan-400">Tailwind CSS</IconStack>
                    </IconCard>
                </div>
                <h2 className="text-2xl font-bold mb-2 mt-5">Backend</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <IconCard>
                        <IconStack icon="fa-brands fa-python" className="group-hover:text-yellow-500">Python</IconStack>
                    </IconCard>
                    <IconCard>
                        <IconStack icon="bi bi-filetype-py" className="group-hover:text-green-500">Django</IconStack>
                    </IconCard>
                    <IconCard>
                        <IconStack icon="bi bi-filetype-py" className="group-hover:text-green-500">DRF</IconStack>
                    </IconCard>
                    <IconCard>
                        <IconStack icon="bi bi-filetype-py" className="group-hover:text-yellow-500">FastAPI</IconStack>
                    </IconCard>
                    <IconCard>
                        <IconStack icon="bi bi-database" className="group-hover:text-blue-500">PostgreSQL</IconStack>
                    </IconCard>
                </div>
                <h2 className="text-2xl font-bold mb-2 mt-5">DevOps e Workspace</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <IconCard>
                        <IconStack icon="bi bi-git" className="group-hover:text-yellow-500">Git & Github</IconStack>
                    </IconCard>
                    <IconCard>
                        <IconStack icon="fa-brands fa-docker" className="group-hover:text-blue-500">Docker</IconStack>
                    </IconCard>
                    <IconCard>
                        <IconStack icon="bi bi-rocket-takeoff" className="group-hover:text-orange-500">Postman</IconStack>
                    </IconCard>
                    <IconCard>
                        <IconStack icon="bi bi-code-square" className="group-hover:text-blue-200">VS Code</IconStack>
                    </IconCard>
                    <IconCard>
                        <IconStack icon="fa-brands fa-linux" className="group-hover:text-foreground">Linux</IconStack>
                    </IconCard>
                </div>
            </div>
        </section>

        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-16 text-center">Projetos</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    {projects.map((project) => (
                        <FadeIn delay={0.2} key={project.id} className="h-full">
                            <Card key={project.id} className="h-full">
                                <div className="h-48 bg-gradient-to-br from-secondary to-background relative overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                        {project.image ? (
                                            <Image
                                                src={project.image[0]}
                                                alt={`Imagem do projeto ${project.title}`}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <i className={`${project.icon} text-4xl`}></i>
                                        )}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-chart-1 transition-colors">
                                            {project.title}
                                        </h3>
                                        <a
                                            href={`/projects/${project.id}`} 
                                            className="text-muted-foreground hover:text-foreground transition-colors" 
                                            aria-label="Ver detalhes"
                                        >
                                            <i className="bi bi-box-arrow-up-right text-lg"></i>
                                        </a>
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <StackProject key={tech}>{tech}</StackProject>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <a href="https://github.com/eukauacavalcante?tab=repositories" target="_blank" className="inline-flex items-center gap-2 text-foreground border-b border-foreground pb-1 hover:text-chart-1 hover:border-chart-1 transition-all group" aria-label="Explorar mais no Github" title="Explorar mais no Github">
                        Explorar mais no Github <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </a>
                </div>
            </div>
        </section>
    </main>
  );
}
