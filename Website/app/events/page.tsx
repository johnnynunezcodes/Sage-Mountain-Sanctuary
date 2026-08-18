import type { Metadata } from "next"

import { events } from "@/lib/data/events"
import { EventCard } from "@/components/event-card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Events",
}

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">Events</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Upcoming events</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Open houses, fundraisers, and community gatherings at the sanctuary. Register below to
        reserve a spot.
      </p>

      <Alert className="mt-6">
        <AlertTitle>Placeholder events</AlertTitle>
        <AlertDescription>
          Dates, pricing, and descriptions below are examples — replace with real events.
          Registration is a UI preview only; no payment processor is connected yet.
        </AlertDescription>
      </Alert>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </div>
  )
}
