import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"

import { Separator } from "@/components/ui/separator"

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sagemountainsanctuary/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.014 15.26 0 12 0Zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06Zm0 5.7a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.152a3.99 3.99 0 1 1 0-7.98 3.99 3.99 0 0 1 0 7.98Zm7.844-10.405a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@sagemountainsanctuary",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.6 5.82a4.4 4.4 0 0 1-3.15-4.61h-3.44v14.87a2.7 2.7 0 0 1-4.85 1.6 2.7 2.7 0 0 1 2.16-4.32c.27 0 .53.04.78.11V9.94a6.24 6.24 0 0 0-.78-.05 6.16 6.16 0 0 0-5.05 9.72 6.16 6.16 0 0 0 11.24-3.5V9.4a7.6 7.6 0 0 0 4.44 1.42V7.4a4.5 4.5 0 0 1-1.35-1.58Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sagemountainutah",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.631.771-1.631 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12Z" />
      </svg>
    ),
  },
]

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
              <Image
                src="/images/sage-mountain-wordmark.png"
                alt="Sage Mountain"
                width={501}
                height={93}
                className="h-6 w-auto dark:hidden"
              />
              <Image
                src="/images/sage-mountain-wordmark-dark.png"
                alt="Sage Mountain"
                width={501}
                height={93}
                className="hidden h-6 w-auto dark:block"
              />
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
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="block size-5">{social.icon}</span>
                </a>
              ))}
            </div>
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
