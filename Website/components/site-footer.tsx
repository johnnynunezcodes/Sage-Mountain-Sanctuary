import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"

import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold">
              <Image
                src="/images/logo-outline.png"
                alt="Sage Mountain Sanctuary"
                width={567}
                height={358}
                className="h-9 w-auto dark:hidden"
              />
              <Image
                src="/images/logo-outline-dark.png"
                alt="Sage Mountain Sanctuary"
                width={567}
                height={358}
                className="hidden h-9 w-auto dark:block"
              />
              <span className="font-heading">Sage Mountain</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A 501(c)(3) nonprofit animal sanctuary near Park City, Utah.
              <br />
              P.O. Box 681596, Park City, UT 84068
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Explore</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><Link className="hover:text-foreground" href="/animals">Meet the Animals</Link></li>
              <li><Link className="hover:text-foreground" href="/visit/tour">Tour</Link></li>
              <li><Link className="hover:text-foreground" href="/visit/volunteer">Volunteer</Link></li>
              <li><Link className="hover:text-foreground" href="/events">Events Calendar</Link></li>
              <li><Link className="hover:text-foreground" href="/donate">Donate</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Contact</p>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Mail className="size-3.5" aria-hidden="true" />
              <a className="hover:text-foreground" href="mailto:info@sagemtn.org">
                info@sagemtn.org
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Social links, newsletter sign-up, etc. — add once decided.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sage Mountain Sanctuary. Site draft — content and design in progress.
        </p>
      </div>
    </footer>
  )
}
