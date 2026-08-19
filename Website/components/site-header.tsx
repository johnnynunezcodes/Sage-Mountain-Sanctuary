"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const visitLinks = [
  { href: "/events", label: "Events Calendar", description: "Open houses, fundraisers, yoga, and community gatherings." },
  { href: "/visit/tour", label: "Tour", description: "Meet the animals in person on a guided tour." },
  { href: "/visit/volunteer", label: "Volunteer", description: "Join us every Saturday." },
]

const aboutLinks = [
  { href: "/about", label: "Sage Mountain", description: "Mission, history, and philosophy." },
  { href: "/about/team", label: "Meet the Team", description: "Who runs the sanctuary." },
  {
    href: "/about/happenings",
    label: "Sanctuary Happenings",
    description: "Rescue stories and updates from around the sanctuary.",
  },
  { href: "/about/contact", label: "Contact Us", description: "Get in touch." },
]

const simpleLinks = [{ href: "/animals", label: "Meet the Animals" }]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/images/logo-outline.png"
            alt="Sage Mountain Sanctuary"
            width={567}
            height={358}
            className="h-11 w-auto dark:hidden"
            priority
          />
          <Image
            src="/images/logo-outline-dark.png"
            alt="Sage Mountain Sanctuary"
            width={567}
            height={358}
            className="hidden h-11 w-auto dark:block"
            priority
          />
          <Image
            src="/images/sage-mountain-wordmark.png"
            alt="Sage Mountain"
            width={501}
            height={93}
            className="h-7 w-auto dark:hidden"
          />
          <Image
            src="/images/sage-mountain-wordmark-dark.png"
            alt="Sage Mountain"
            width={501}
            height={93}
            className="hidden h-7 w-auto dark:block"
          />
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/" />} active={pathname === "/"}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              {simpleLinks.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink render={<Link href={item.href} />} active={pathname === item.href}>
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger>Visit</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-1 p-2">
                    {visitLinks.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink
                          render={
                            <Link
                              href={item.href}
                              className="flex flex-col items-center gap-0.5 rounded-md p-2 text-center"
                            />
                          }
                        >
                          <span className="text-sm font-medium">{item.label}</span>
                          <span className="text-xs text-muted-foreground">{item.description}</span>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/learn" />} active={pathname === "/learn"}>
                  Learn
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-1 p-2">
                    {aboutLinks.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink
                          render={
                            <Link
                              href={item.href}
                              className="flex flex-col items-center gap-0.5 rounded-md p-2 text-center"
                            />
                          }
                        >
                          <span className="text-sm font-medium">{item.label}</span>
                          <span className="text-xs text-muted-foreground">{item.description}</span>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/login" />} active={pathname === "/login"}>
                  Login
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
          <Button render={<Link href="/donate" />} nativeButton={false} className="ml-2">
            Donate
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ModeToggle />
          <Button render={<Link href="/donate" />} nativeButton={false} size="sm">
            Donate
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="outline" size="icon" aria-label="Open menu" />}>
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                <MobileLink href="/" onNavigate={() => setOpen(false)}>
                  Home
                </MobileLink>
                <MobileLink href="/animals" onNavigate={() => setOpen(false)}>
                  Meet the Animals
                </MobileLink>
                <p className="mt-3 mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Visit
                </p>
                {visitLinks.map((item) => (
                  <MobileLink key={item.href} href={item.href} onNavigate={() => setOpen(false)}>
                    {item.label}
                  </MobileLink>
                ))}
                <MobileLink href="/learn" onNavigate={() => setOpen(false)}>
                  Learn
                </MobileLink>
                <p className="mt-3 mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  About
                </p>
                {aboutLinks.map((item) => (
                  <MobileLink key={item.href} href={item.href} onNavigate={() => setOpen(false)}>
                    {item.label}
                  </MobileLink>
                ))}
                <MobileLink href="/login" onNavigate={() => setOpen(false)}>
                  Login
                </MobileLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MobileLink({
  href,
  children,
  onNavigate,
}: {
  href: string
  children: React.ReactNode
  onNavigate: () => void
}) {
  return (
    <SheetClose
      render={
        <Link
          href={href}
          onClick={onNavigate}
          className={cn("rounded-md px-2 py-2 text-sm font-medium hover:bg-muted")}
        />
      }
    >
      {children}
    </SheetClose>
  )
}
