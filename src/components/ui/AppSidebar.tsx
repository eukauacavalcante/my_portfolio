"use client";

import { User, Folder, Code, Mail, Menu } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Separator } from "@/components/ui/Separator";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "@/app/[locale]/components/LanguageSwitcher";

export function MenuSheet() {
  const [open, setOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const locale = useLocale();
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");

  const handleLinkClick = () => {
    setOpen(false);
  };

  const menuItems = [
    { title: tNav("about"), url: `/${locale}#about`, icon: User },
    { title: tNav("stack"), url: `/${locale}#stack`, icon: Code },
    { title: tNav("projects"), url: `/${locale}#projects`, icon: Folder },
    { title: tNav("contact"), url: `/${locale}#contact`, icon: Mail },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="lg">
          <Menu className="h-7 w-7 text-primary" />
          <span className="sr-only">{tNav("openMenu")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="px-5 bg-primary-foreground border-primary/10 [&>button>svg]:w-6 [&>button>svg]:h-6"
      >
        <SheetHeader className="px-0">
          <SheetTitle className="text-xl text-primary text-left">
            {tNav("menu")}
          </SheetTitle>
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
          <Separator className="my-4" />
          <span className="font-semibold">{tNav("translate")}</span>
          <div className="mx-auto">
            <LanguageSwitcher />
          </div>
          <Separator className="my-4" />
          <Button size="lg" className="text-primary-foreground">
            <FaLinkedin className="w-5 h-5" />
            <a
              href="https://www.linkedin.com/in/eukauacavalcante/"
              target="_blank"
            >
              {tNav("connect")}
            </a>
          </Button>
          <Separator className="my-4" />
          <div className="pt-8 text-sm text-center text-gray-500">
            <p>
              &copy; {currentYear}, Kauã Cavalcante.{" "}
              {tFooter("copyrightSuffix")}
            </p>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
