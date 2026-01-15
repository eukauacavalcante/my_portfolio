"use client"

import { User, Folder, Code, Mail, Menu } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

const menuItems = [
  { title: "Sobre mim", url: "/#about", icon: User },
  { title: "Stack", url: "/#stack", icon: Code },
  { title: "Projetos", url: "/#projects", icon: Folder },
  { title: "Contato", url: "/#contact", icon: Mail },
]

export function MenuSheet() {
  const [open, setOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="lg">
          <Menu className="h-7 w-7 text-primary" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="px-5 bg-primary-foreground border-primary/10 [&>button>svg]:w-6 [&>button>svg]:h-6">
        <SheetHeader className="px-0">
          <SheetTitle className="text-xl text-primary text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.url}
              onClick={handleLinkClick}
              className="text-primary hover:text-primary/70 transition-colors text-lg py-2"
            >
              <item.icon className="inline-block mr-2" />
              <span>{item.title}</span>
            </a>
          ))}
          <Separator className="my-4"/>
          <Button size="lg" className="text-primary-foreground" >
            <FaLinkedin className="w-5 h-5" />
            <a href="https://www.linkedin.com/in/eukauacavalcante/" target="_blank">Conecte-se</a>
          </Button>
          <Separator className="my-4"/>
          <div className="pt-8 text-sm text-center text-gray-500">
              <p>&copy; {currentYear}, Kauã Cavalcante. Desenvolvedor Full Stack.</p>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
