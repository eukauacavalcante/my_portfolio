"use client"

import { User, Folder, Code, Mail } from "lucide-react"

import { useState } from "react"
import { Menu } from "lucide-react"
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

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="lg">
          <Menu className="h-5 w-5 text-primary" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-5 bg-primary/5 backdrop-blur-sm border-primary/10">
        <SheetHeader className="px-0">
          <SheetTitle className="text-xl text-white text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.url}
              onClick={handleLinkClick}
              className="text-white hover:text-white transition-colors text-lg py-2"
            >
              <item.icon className="inline-block mr-2" />
              <span>{item.title}</span>
            </a>
          ))}
          <Separator className="my-4"/>
          <Button size="lg" className="text-primary-foreground" >
            <i className="bi bi-linkedin"></i> 
            <a href="https://www.linkedin.com/in/eukauacavalcante/" target="_blank">Conecte-se</a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
