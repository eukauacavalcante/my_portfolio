import PageButton from "@/components/ui/PageButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MenuSheet } from "@/components/ui/app-sidebar";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
    return (
        <header className="fixed w-full top-0 z-50 text-primary backdrop-blur-md bg-primary/0 border-b border-primary/10">
            <div className="max-w-6xl mx-auto px-6 py-2 md:py-4 flex justify-between items-center">
                <a href="/" className="text-xl font-bold tracking-tighter hover:text-chart-1 transition-colors duration-300" aria-label="Início" title="Início">
                    KC<span className="text-chart-1">.</span>
                </a>
                <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
                    <a href="/#about" className="hover:text-chart-1 transition-colors" aria-label="Sobre" title="Sobre">Sobre</a>
                    <a href="/#stack" className="hover:text-chart-1 transition-colors" aria-label="Stack" title="Stack">Stack</a>
                    <a href="/#projects" className="hover:text-chart-1 transition-colors" aria-label="Projetos" title="Projetos">Projetos</a>
                    <a href="#contact" className="hover:text-chart-1 transition-colors" aria-label="Contato" title="Contato">Contato</a>
                    <ThemeToggle />
                    <PageButton href="https://www.linkedin.com/in/eukauacavalcante/" ariaLabel="Conecte-se no LinkedIn" title="Conecte-se no LinkedIn">
                        <FaLinkedin className="w-5 h-5" />
                        Conecte-se
                    </PageButton>
                </nav>
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <MenuSheet />
                </div>
            </div>
        </header>
    )
}
