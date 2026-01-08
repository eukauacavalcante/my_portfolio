import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./components/footer";
import Header from "./components/header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Kauã Cavalcante | Desenvolvedor Full Stack",
    template: "%s | Kauã Cavalcante"
  },
  description: "Desenvolvedor Full Stack especializado em Django, Next.js e APIs RESTful. Criando soluções escaláveis, seguras e modernas.",
  keywords: ["desenvolvedor", "full stack", "django", "next.js", "react", "python", "portfolio"],
  authors: [{ name: "Kauã Cavalcante" }],
  creator: "Kauã Cavalcante",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://kauacavalcante.vercel.app",
    siteName: "Kauã Cavalcante",
    title: "Kauã Cavalcante | Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack especializado em Django, Next.js e APIs RESTful.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kauã Cavalcante - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kauã Cavalcante | Desenvolvedor Full Stack",
    description: "Desenvolvedor Full Stack especializado em Django, Next.js e APIs RESTful.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
      </head>
      <body className={`${inter.variable} ${inter.className} antialiased selection:bg-primary selection:text-primary-foreground overflow-x-hidden`} suppressHydrationWarning>
        <Providers>
          <Header />
            {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
