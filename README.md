<div align="center">

# Portfólio Pessoal

![Status](https://img.shields.io/badge/Status-Concluído-darkgreen)
![Next.js](https://img.shields.io/badge/Next.js-16.1.1-white?logo=next.js)

Meu portfólio pessoal moderno e responsivo que apresenta minhas habilidades como desenvolvedor full stack, projetos e stack tecnológica de forma intuitiva e acessível.

> **Versão 2.0:** O portfólio foi reconstruído em Astro, framework que oferece melhor performance para sites estáticos através de arquitetura orientada a conteúdo. Acesse em [kauacavalcante.vercel.app](https://kauacavalcante.vercel.app).

</div>

## Visão Geral

Portfólio desenvolvido para apresentar minha trajetória como desenvolvedor web full stack. O projeto centraliza meus projetos, habilidades técnicas e as tecnologias que utilizo, proporcionando uma experiência de navegação fluida com suporte a múltiplos idiomas e otimização para mecanismos de busca.

## Stack Tecnológica

### Framework Principal
- **Next.js 16.1.1**: Framework React com renderização híbrida (SSR/SSG), otimizado para performance e SEO

### UI e Estilização
- **Shadcn UI**: Biblioteca de componentes acessíveis e customizáveis, construída sobre Radix UI
- **Tailwind CSS**: Framework utility-first para estilização rápida e consistente, integrado nativamente ao Next.js

### Bibliotecas e Ferramentas
- **next-intl**: Solução completa para internacionalização em aplicações Next.js
- **React**: Biblioteca para construção de interfaces de usuário

## Funcionalidades Técnicas

### Internacionalização (i18n)

O portfólio oferece suporte completo para **português** e **inglês**, ampliando seu alcance para públicos nacional e internacional. A implementação utiliza a biblioteca **next-intl**, que gerencia traduções e roteamento por idioma de forma nativa no Next.js.

#### Como Funciona

A internacionalização no Next.js App Router segue uma estrutura específica:

1. **Roteamento por Locale**
   - A pasta `[locale]` no diretório `app/` gerencia as transições entre idiomas
   - URLs são automaticamente prefixadas com o código do idioma: `/pt`, `/en`

2. **Configuração**
   ```typescript
   // i18n.ts
   export const locales = ['pt', 'en'] as const;
   export const defaultLocale = 'pt';
   ```

3. **Arquivos de Tradução**
   
   Os dicionários são armazenados em arquivos JSON separados por idioma:

   **messages/pt.json**
   ```json
   {
     "footer": {
       "ctaTitle": "Vamos trabalhar juntos?",
       "ctaDescription": "Estou sempre aberto a novos desafios e parcerias.",
       "connect": "Conecte-se comigo",
       "copyrightSuffix": "Desenvolvedor Full Stack.",
       "portfolio": "Portfólio pessoal"
     }
   }
   ```

   **messages/en.json**
   ```json
   {
     "footer": {
       "ctaTitle": "Shall we work together?",
       "ctaDescription": "I am always open to new challenges and partnerships.",
       "connect": "Connect with me",
       "copyrightSuffix": "Full Stack Developer.",
       "portfolio": "Personal portfolio"
     }
   }
   ```

4. **Uso nos Componentes**
   ```typescript
   import { useTranslations } from 'next-intl';

   export default function Footer() {
     const t = useTranslations('footer');
     
     return <h2>{t('ctaTitle')}</h2>;
   }
   ```

### Otimização SEO

O portfólio implementa estratégias avançadas de SEO (Search Engine Optimization) para maximizar sua visibilidade em mecanismos de busca como Google e Bing.

#### Por Que SEO é Importante?

SEO é o conjunto de técnicas que melhora o posicionamento de um site nos resultados de busca orgânica. Sites bem otimizados aparecem nas primeiras posições, aumentando significativamente a visibilidade profissional e o alcance do portfólio.

#### Implementações de SEO

##### 1. Sitemap (sitemap.xml)

O sitemap é um arquivo XML que mapeia toda a estrutura do site, facilitando o trabalho dos **crawlers** (bots automatizados que navegam pela internet visitando sites e coletando informações sobre eles).

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const baseUrl = 'https://kauacavalcante.vercel.app';

  return locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    // ... outras rotas
  ]);
}
```

**Elementos do Sitemap:**
- `url` — URL completa da página
- `lastModified` — Data da última modificação (sinal de conteúdo atualizado)
- `changeFrequency` — Frequência esperada de atualização (daily, weekly, monthly, yearly)
- `priority` — Importância relativa da página (0.0 a 1.0)

##### 2. Robots.txt (robots.ts)

O arquivo `robots.txt` define regras de rastreamento para web crawlers.

```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Aplica a todos os bots
      allow: '/',     // Rastreamento de todas as páginas
    },
    sitemap: 'https://kauacavalcante.vercel.app/sitemap.xml',
  };
}
```

**Nota:** O Next.js gera automaticamente o `robots.txt` a partir deste arquivo durante o build. [Saiba mais](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots).

##### 3. Metadados Estruturados

Meu portfólio implementa uma estratégia completa de metadados para maximizar sua presença online e compartilhamento em redes sociais.

**Metadados Básicos**

```typescript
{
  title: {
    default: "Kauã Cavalcante - Desenvolvedor Full Stack",
    template: "%s | Kauã Cavalcante" // Adiciona sufixo em todas as páginas
  },
  description: "Desenvolvedor Full Stack especializado em...",
  keywords: ["desenvolvedor", "full stack", "django", ...],
  authors: [{ name: "Kauã Cavalcante" }],
  creator: "Kauã Cavalcante"
}
```

Esses metadados aparecem nos resultados de busca e definem como o site é identificado pelos motores de busca.

**Open Graph (Redes Sociais)**

Open Graph é o protocolo criado pelo Facebook (agora Meta) para controlar como links são exibidos quando compartilhados em redes sociais:

```typescript
openGraph: {
  type: "website",
  locale: "pt_BR", // ou "en_US" dependendo do idioma
  url: "https://kauacavalcante.vercel.app",
  siteName: "Kauã Cavalcante",
  title: "Kauã Cavalcante | Desenvolvedor Full Stack",
  description: "Desenvolvedor Full Stack especializado...",
  images: [{
    url: "/images/og-image.png",
    width: 1200, // Dimensões recomendadas pelo Facebook
    height: 630,
    alt: "Preview do portfólio"
  }]
}
```

**Resultado:** Quando alguém compartilha o meu portfólio no LinkedIn, WhatsApp, Facebook ou Twitter, aparece um card visual com imagem, título e descrição customizados, em vez de apenas um link simples.

**Twitter Cards**

O Twitter possui seu próprio sistema de cards para otimizar previews:

```typescript
twitter: {
  card: "summary_large_image", // Card grande com imagem destacada
  title: "Kauã Cavalcante | Full Stack Developer",
  description: "Desenvolvedor Full Stack especializado...",
  images: ["/images/og-image.png"]
}
```

**Robots (Indexação)**

```typescript
robots: {
  index: true, // Permite que a página seja indexada
  follow: true // Permite que crawlers sigam os links da página
}
```

Essa configuração garante que o meu portfólio seja totalmente rastreável e indexável, maximizando sua visibilidade em buscas.

---

Agradeço pela leitura :)

---

<div align="center">

**Kauã Cavalcante | Desenvolvedor Full Stack**

Projeto licenciado pela [GNU GENERAL PUBLIC LICENSE](https://github.com/eukauacavalcante/my_portfolio/blob/main/LICENSE)

[LinkedIn](https://linkedin.com/in/eukauacavalcante) • [GitHub](https://github.com/eukauacavalcante)

</div>
