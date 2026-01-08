export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer id="contact" className="bg-primary/0 text-primary border-t border-border pt-10 pb-10">
            <div className="text-center mb-10">
                <div className="flex flex-row gap-4 justify-center">
                    <a href="/#about" className="hover:text-chart-1 transition text-sm">Sobre</a>
                    <a href="/#stack" className="hover:text-chart-1 transition text-sm">Tecnologias</a>
                    <a href="/#projects" className="hover:text-chart-1 transition text-sm">Projetos</a>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Vamos trabalhar juntos?</h2>
                        <p className="text-muted-foreground mb-8 max-w-md">
                            Estou sempre aberto a novos desafios e parcerias. Se você tem um projeto em mente ou apenas quer trocar uma ideia, entre em contato.
                        </p>
                        <a href="mailto:eukauasilvacavalcante@gmail.com" className="text-sm underline md:text-xl px-0 hover:text-chart-1 transition-colors duration-300">
                            eukauasilvacavalcante@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-col justify-end items-start md:items-end gap-4">
                        <span className="font-semibold">Conecte-se comigo</span>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/eukauacavalcante/" target="_blank" className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-chart-1 hover:text-primary-foreground hover:scale-110 transition-all duration-300">
                                <i className="bi bi-linkedin text-xl"></i>
                            </a>
                            <a href="https://github.com/eukauacavalcante/" target="_blank" className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-chart-1 hover:text-primary-foreground hover:scale-110 transition-all duration-300">
                                <i className="bi bi-github text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {currentYear}, Kauã Cavalcante. Desenvolvedor Full Stack.</p>
                    <span>Portfólio pessoal</span>
                </div>
            </div>
        </footer>
    )
}
