'use client'

import { AlertCircle, RefreshCw, Home } from 'lucide-react'

export default function Error({reset}: {reset: () => void}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-chart-1/20 rounded-full blur-2xl" />
            <div className="relative w-24 h-24 bg-gradient-to-br from-chart-1/10 to-destructive/10 rounded-full flex items-center justify-center border-2 border-destructive/20">
              <AlertCircle className="w-12 h-12 text-destructive" />
            </div>
          </div>
        </div>
        <h1 className="text-2xl md:text-5xl font-bold text-foreground mb-4">
          Ops! Algo deu errado
        </h1>
        <p className="text-muted-foreground text-lg mb-2">
          Encontramos um problema inesperado ao carregar esta página.
        </p>
        <p className="text-muted-foreground/70 text-sm mb-8">
          Não se preocupe, você pode tentar novamente ou voltar para a página inicial.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="group inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-chart-1/30 hover:-translate-y-0.5"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 bg-primary-foreground hover:bg-secondary text-primary border border-border hover:border-chart-1 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            <Home className="w-5 h-5" />
            Voltar ao início
          </a>
        </div>
        <p className="mt-12 text-sm text-muted-foreground/60">
          Se o problema persistir, entre em{' '}
          <a 
            href="/#contact" 
            className="text-chart-1 hover:text-chart-1/80 underline underline-offset-2 transition-colors"
          >
            contato
          </a>
          .
        </p>
      </div>
    </div>
  )
}
