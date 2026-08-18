import Link from "next/link"
import { CalendarDays, HandHeart, PawPrint } from "lucide-react"

import { animals } from "@/lib/data/animals"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AnimalCard } from "@/components/animal-card"

export default function Home() {
  const featured = animals.slice(0, 3)

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Park City, Utah
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              A safe home for rescued farm animals
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Sage Mountain Sanctuary gives rescued pigs, cows, chickens, goats, sheep, and
              turkeys a lifelong home — and invites you to meet them through guided tours, yoga
              classes, and volunteer days.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button render={<Link href="/donate" />} nativeButton={false} size="lg">
                Donate Now
              </Button>
              <Button render={<Link href="/animals" />} nativeButton={false} size="lg" variant="outline">
                Meet the Animals
              </Button>
            </div>
          </div>
          <div className="flex aspect-4/3 items-center justify-center rounded-xl bg-muted text-sm text-muted-foreground">
            Hero photo coming soon
          </div>
        </div>

        <Alert className="mt-10">
          <AlertTitle>This site is an early draft</AlertTitle>
          <AlertDescription>
            Pages are being built out one at a time — copy, photos, and the donation/event
            payment flows are all placeholders for now.
          </AlertDescription>
        </Alert>
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
