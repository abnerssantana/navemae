"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Globe, Code, Rocket, Search, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Sites Interestelares",
    href: "#servicos",
    description: "Websites responsivos com experiências interativas de outro planeta.",
    icon: <Code className="h-4 w-4 mr-2" />,
  },
  {
    title: "Landing Pages",
    href: "#servicos",
    description: "Páginas de conversão que atraem visitantes como um raio trator.",
    icon: <Rocket className="h-4 w-4 mr-2" />,
  },
  {
    title: "SEO Avançado",
    href: "#servicos",
    description: "Estratégias para deixar seu site visível em toda a galáxia digital.",
    icon: <Search className="h-4 w-4 mr-2" />,
  },
  {
    title: "Performance Cósmica",
    href: "#servicos",
    description: "Velocidade de dobra espacial para melhorar a experiência do usuário.",
    icon: <Zap className="h-4 w-4 mr-2" />,
  },
]

const projects = [
  {
    title: "Portal Dimensional",
    href: "#projetos",
    description: "Redesign completo com interface que parece de outro mundo",
  },
  {
    title: "E-commerce Galáctico",
    href: "#projetos",
    description: "Plataforma de vendas com tecnologia que transcende o ordinário",
  },
  {
    title: "App Educacional Orbital",
    href: "#projetos",
    description: "Sistema de aprendizado que expande horizontes como o universo",
  },
]

export function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {services.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                  className="hover:bg-muted/50"
                >
                  <div className="flex items-center text-sm">
                    <span className="text-primary">{service.icon}</span>
                    {service.description}
                  </div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projetos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {projects.map((project) => (
                <ListItem
                  key={project.title}
                  title={project.title}
                  href={project.href}
                  className="hover:bg-muted/50"
                >
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#sobre" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sobre
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#contato" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contato
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link
        href={props.href || "#"}
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </div>
      </Link>
    </li>
  )
})
ListItem.displayName = "ListItem"
