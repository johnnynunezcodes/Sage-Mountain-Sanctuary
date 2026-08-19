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
      <section className="relative h-[520px] w-full sm:h-[600px] lg:h-[680px]">
        <Image
          src="/images/home-hero.jpg"
          alt="A visitor feeding one of the sanctuary's pigs in a mountain pasture"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent sm:bg-gradient-to-r sm:from-black/90 sm:via-black/55 sm:to-transparent" />
        <div className="absolute inset-0 flex items-end sm:items-center">
          <div className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 sm:pb-0">
            <div className="max-w-lg">
              <p className="text-sm font-semibold tracking-wide text-white/90 uppercase">
                Park City, Utah
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
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

      <section className="border-y border-border bg-muted/30 py-16">
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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
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
