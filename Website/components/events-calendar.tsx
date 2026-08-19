"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import type { SanctuaryEvent } from "@/lib/data/events"
import { tourEvent } from "@/lib/data/events"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { isSameDay, monthGrid, parseIsoDate, startOfDay } from "@/lib/calendar-utils"
import { cn } from "@/lib/utils"

// Tours recur every Wednesday, Saturday, and Sunday — see
// Website/app/visit/tour/tour-booking.tsx, which uses this same rule.
const TOUR_WEEKDAYS = [0, 3, 6]

function isTourDate(date: Date) {
  return TOUR_WEEKDAYS.includes(date.getDay())
}

export function EventsCalendar({ events }: { events: SanctuaryEvent[] }) {
  // Freeze "today" once per mount instead of recomputing on every render.
  const [now] = React.useState(() => new Date())
  const today = React.useMemo(() => startOfDay(now), [now])

  const dated = React.useMemo(
    () => events.map((event) => ({ event, date: parseIsoDate(event.isoDate) })),
    [events]
  )

  // Default the visible month to whichever month holds the next upcoming
  // event, so the calendar doesn't open on an empty month.
  const initialMonthOffset = React.useMemo(() => {
    const next = dated
      .filter((d) => d.date >= today)
      .sort((a, b) => a.date.getTime() - b.date.getTime())[0]
    const base = next?.date ?? today
    return (base.getFullYear() - today.getFullYear()) * 12 + (base.getMonth() - today.getMonth())
  }, [dated, today])

  const [monthOffset, setMonthOffset] = React.useState(initialMonthOffset)
  const [selectedSlug, setSelectedSlug] = React.useState<string | null>(null)
  const cardRefs = React.useRef<Record<string, HTMLDivElement | null>>({})

  const viewDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1)
  const cells = monthGrid(viewDate.getFullYear(), viewDate.getMonth())

  function eventOn(date: Date) {
    return dated.find((d) => isSameDay(d.date, date))?.event
  }

  function handleSelect(slug: string) {
    setSelectedSlug(slug)
    cardRefs.current[slug]?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <div className="mt-8 flex flex-col gap-8">
      <div className="rounded-xl border border-border p-4 sm:p-6">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium">Events calendar</p>
          <div className="flex items-center gap-1">
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setMonthOffset((v) => v - 1)}
              aria-label="Previous month"
            >
              <ChevronLeft />
            </Button>
            <p className="w-32 text-center text-sm font-medium">
              {viewDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setMonthOffset((v) => v + 1)}
              aria-label="Next month"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i} className="py-1">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((date, i) => {
            if (!date) return <div key={i} />
            const event = eventOn(date)
            const isTour = !event && date >= today && isTourDate(date)
            const slug = event?.slug ?? (isTour ? tourEvent.slug : undefined)
            const isSelected = !!slug && selectedSlug === slug
            const hasDot = !!event || isTour
            return (
              <button
                key={i}
                type="button"
                disabled={!slug}
                onClick={() => slug && handleSelect(slug)}
                aria-pressed={!!isSelected}
                title={event?.title ?? (isTour ? tourEvent.title : undefined)}
                className={cn(
                  "flex aspect-square flex-col items-center justify-center gap-0.5 rounded-full text-sm transition-colors",
                  !hasDot && "text-muted-foreground/40",
                  hasDot && !isSelected && "bg-primary/10 font-medium text-primary hover:bg-primary/20",
                  isSelected && "bg-primary font-medium text-primary-foreground"
                )}
              >
                <span>{date.getDate()}</span>
                {hasDot && (
                  <span
                    className={cn(
                      "size-1 rounded-full",
                      isSelected ? "bg-primary-foreground" : "bg-primary"
                    )}
                  />
                )}
              </button>
            )
          })}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Dates with a dot have an event — tap one to jump to its details below. Highlighted
          Wednesdays, Saturdays, and Sundays are guided tour dates.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...events, tourEvent].map((event) => (
          <div
            key={event.slug}
            ref={(el) => {
              cardRefs.current[event.slug] = el
            }}
            className={cn(
              "rounded-xl transition-shadow",
              selectedSlug === event.slug && "ring-2 ring-primary ring-offset-2 ring-offset-background"
            )}
          >
            {event.slug === tourEvent.slug ? (
              <EventCard event={event} href="/visit/tour" ctaLabel="View Tour Times" />
            ) : (
              <EventCard event={event} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
