import type { Metadata } from "next"
import Image from "next/image"
import { CalendarClock } from "lucide-react"

import { events } from "@/lib/data/events"
import { EventsCalendar } from "@/components/events-calendar"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Events",
}

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid items-center gap-8 sm:grid-cols-2">
        <div className="relative aspect-4/3 overflow-hidden rounded-xl">
          <Image
            src="/images/events/ponyboy-pig.jpg"
            alt="Ponyboy the pig looking up at the sky in a pasture at the sanctuary"
            fill
            sizes="(min-width: 640px) 400px, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Events</p>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Upcoming events</h1>
          <p className="mt-4 text-muted-foreground">
            Open houses, fundraisers, yoga classes, and other community gatherings at the
            sanctuary. Register below to reserve a spot.
          </p>
        </div>
      </div>

      <EventsCalendar events={events} />

      <div className="mt-16">
        <div className="relative aspect-21/9 overflow-hidden rounded-xl">
          <Image
            src="/images/yoga-participants.jpg"
            alt="A group of yoga participants gathered together at the sanctuary"
            fill
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover"
          />
        </div>

        <Alert className="mt-6">
          <CalendarClock aria-hidden="true" />
          <AlertTitle>Yoga is on seasonal break</AlertTitle>
          <AlertDescription>
            Sanctuary yoga runs spring through summer and has wrapped up for the year. It&apos;ll
            return in spring 2027 — check back here for the schedule once the next season is set.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
