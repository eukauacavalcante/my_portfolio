import { Separator } from "@/components/ui/separator"
import PageButton from "@/components/PageButton";

export default function NotFound() {
    return (
        <div className="text-gray-200 flex flex-col items-center justify-center p-6 md:p-12 text-center min-h-screen">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 tracking-tight">
                404
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-primary">
                Página não encontrada
            </h2>
            <p className="text-muted-foreground md:text-xl mb-10 max-w-lg">
                O recurso ou endereço que você tentou acessar não existe. Verifique o URL ou navegue para a página inicial.
            </p>

            <Separator className="max-w-6xl mx-auto my-12"/>

            <PageButton href="/#projects" target="_self" ariaLabel="Voltar para o portfólio" title="Voltar para o portfólio">Voltar para o portfólio</PageButton>
        </div>
    );
}
