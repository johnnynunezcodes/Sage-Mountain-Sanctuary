import Image from "next/image"
import Link from "next/link"
import { CalendarDays, HandHeart, PawPrint } from "lucide-react"

import { animals } from "@/lib/data/animals"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimalCard } from "@/components/animal-card"

export default function Home() {
  const featured = animals.slice(0, 3)

  return (
    <div>
      <div className="sm:hidden">
        <div className="px-4 pt-4">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src="/images/home-hero.jpg"
              alt="A visitor feeding one of the sanctuary's pigs in a mountain pasture"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 px-4 pt-6 pb-2">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Park City, Utah
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            A safe home for rescued farm animals
          </h1>
          <p className="text-base text-muted-foreground">
            Sage Mountain Sanctuary gives rescued pigs, cows, chickens, goats, sheep, and turkeys
            a lifelong home — and invites you to meet them through guided tours, yoga classes,
            and volunteer days.
          </p>
          <div className="mt-2 flex flex-col gap-2.5">
            <Button render={<Link href="/donate" />} nativeButton={false} className="h-12 text-base">
              Donate Now
            </Button>
            <Button
              render={<Link href="/animals" />}
              nativeButton={false}
              variant="outline"
              className="h-12 text-base"
            >
              Meet the Animals
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5 px-4 pt-6">
          <Link href="/donate?mode=sponsor">
            <Card className="flex-col items-center gap-2 px-2 py-3.5 text-center">
              <PawPrint className="size-5 text-primary" aria-hidden="true" />
              <span className="text-xs font-semibold">Sponsor</span>
            </Card>
          </Link>
          <Link href="/visit/tour">
            <Card className="flex-col items-center gap-2 px-2 py-3.5 text-center">
              <HandHeart className="size-5 text-primary" aria-hidden="true" />
              <span className="text-xs font-semibold">Tour</span>
            </Card>
          </Link>
          <Link href="/visit/volunteer">
            <Card className="flex-col items-center gap-2 px-2 py-3.5 text-center">
              <CalendarDays className="size-5 text-primary" aria-hidden="true" />
              <span className="text-xs font-semibold">Volunteer</span>
            </Card>
          </Link>
        </div>

        <div className="flex flex-col gap-1 px-4 pt-8">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Meet a few of the animals
          </p>
          <h2 className="text-xl font-semibold">Every animal has a story</h2>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pt-3 pb-2">
          {featured.map((animal) => (
            <div key={animal.slug} className="w-64 shrink-0 snap-start">
              <AnimalCard animal={animal} />
            </div>
          ))}
        </div>

        <div className="px-4 pb-2">
          <Button render={<Link href="/animals" />} nativeButton={false} variant="link" className="px-0">
            See all the animals →
          </Button>
        </div>

        <div className="mt-4 flex flex-col items-center gap-3.5 border-t border-border px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground">Ready to help a rescued animal?</p>
          <Button render={<Link href="/donate" />} nativeButton={false} className="h-12 w-full text-base">
            Donate Now
          </Button>
        </div>
      </div>

      <section className="relative hidden h-[600px] w-full sm:block lg:h-[680px]">
        <Image
          src="/images/home-hero.jpg"
          alt="A visitor feeding one of the sanctuary's pigs in a mountain pasture"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-lg">
              <p className="text-sm font-semibold tracking-wide text-white/90 uppercase">
                Park City, Utah
              </p>
              <h1 className="mt-2 text-5xl font-semibold tracking-tight text-white">
                A safe home for rescued farm animals
              </h1>
              <p className="mt-4 text-lg text-white/90">
                Sage Mountain Sanctuary gives rescued pigs, cows, chickens, goats, sheep, and
                turkeys a lifelong home — and invites you to meet them through guided tours, yoga
                classes, and volunteer days.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button render={<Link href="/donate" />} nativeButton={false} size="lg">
                  Donate Now
                </Button>
                <Button
                  render={<Link href="/animals" />}
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  Meet the Animals
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden border-y border-border bg-muted/30 py-16 sm:block">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Meet a few of the animals
          </p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Every animal has a story</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((animal) => (
              <AnimalCard key={animal.slug} animal={animal} />
            ))}
          </div>
          <Button render={<Link href="/animals" />} nativeButton={false} variant="link" className="mt-6 px-0">
            See all the animals →
          </Button>
        </div>
      </section>

      <section className="hidden px-4 py-16 sm:mx-auto sm:block sm:max-w-6xl sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <PawPrint className="size-5 text-primary" aria-hidden="true" />
              <CardTitle>Sponsor an Animal</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">
                Support a specific animal — or a few — with a monthly or bi-weekly sponsorship.
              </p>
              <Button render={<Link href="/donate?mode=sponsor" />} nativeButton={false} variant="outline" className="w-fit">
                Sponsor now
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <HandHeart className="size-5 text-primary" aria-hidden="true" />
              <CardTitle>Visit & Volunteer</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">
                Take a guided tour, join a yoga class, or volunteer with us on Saturdays.
              </p>
              <Button render={<Link href="/visit/tour" />} nativeButton={false} variant="outline" className="w-fit">
                Plan a visit
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CalendarDays className="size-5 text-primary" aria-hidden="true" />
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">
                Open houses, fundraisers, and community gatherings at the sanctuary.
              </p>
              <Button render={<Link href="/events" />} nativeButton={false} variant="outline" className="w-fit">
                See events
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
