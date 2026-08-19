"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import type { SanctuaryEvent } from "@/lib/data/events"
import { EventCard } from "@/components/event-card"
import { EventDetailDialog } from "@/components/event-detail-dialog"
import { Button } from "@/components/ui/button"
import { isSameDay, monthGrid, parseIsoDate, startOfDay } from "@/lib/calendar-utils"
import { cn } from "@/lib/utils"

// Cap how many event chips a single day cell will render before falling
// back to a "+N more" hint, so an unusually busy day can't blow out the
// row height.
const MAX_VISIBLE_PER_DAY = 4

export function EventsCalendar({ events }: { events: SanctuaryEvent[] }) {
  // Standing weekly activities (Volunteer Day, Tours) aren't tied to a
  // single date, so they get their own always-visible summary instead of
  // showing up in a list of dated events.
  const recurringEvents = events.filter((event) => event.recurring)

  // Freeze "today" once per mount instead of recomputing on every render.
  const [now] = React.useState(() => new Date())
  const today = React.useMemo(() => startOfDay(now), [now])

  // Only one-off events (with an isoDate) plot on a single day — recurring
  // events are matched by day-of-week in `eventsOn` instead.
  const dated = React.useMemo(
    () =>
      events
        .filter((event) => event.isoDate)
        .map((event) => ({ event, date: parseIsoDate(event.isoDate!) })),
    [events]
  )

  // Default the visible month to whichever month holds the next upcoming
  // one-off event, so the calendar doesn't open on an empty month.
  const initialMonthOffset = React.useMemo(() => {
    const next = dated
      .filter((d) => d.date >= today)
      .sort((a, b) => a.date.getTime() - b.date.getTime())[0]
    const base = next?.date ?? today
    return (base.getFullYear() - today.getFullYear()) * 12 + (base.getMonth() - today.getMonth())
  }, [dated, today])

  const [monthOffset, setMonthOffset] = React.useState(initialMonthOffset)

  const viewDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1)
  const cells = monthGrid(viewDate.getFullYear(), viewDate.getMonth())

  // All events (one-off or recurring) that land on a given date.
  function eventsOn(date: Date) {
    return events.filter((event) => {
      if (event.isoDate) return isSameDay(parseIsoDate(event.isoDate), date)
      if (event.recurring) return event.recurring.daysOfWeek.includes(date.getDay())
      return false
    })
  }

  return (
    <div className="mt-8 flex flex-col gap-8">
      <div className="rounded-xl border border-border p-3 sm:p-6">
        <div className="mb-3 flex items-center justify-between px-1">
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
            <p className="w-28 text-center text-sm font-medium sm:w-32">
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

        <div className="grid grid-cols-7 gap-1 text-center text-[0.65rem] text-muted-foreground sm:text-xs">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i} className="py-1">
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {cells.map((date, i) => {
            if (!date) return <div key={i} />
            const dayEvents = eventsOn(date)
            const visible = dayEvents.slice(0, MAX_VISIBLE_PER_DAY)
            const overflow = dayEvents.length - visible.length
            const isToday = isSameDay(date, today)
            return (
              <div
                key={i}
                className={cn(
                  "flex min-h-16 flex-col gap-0.5 rounded-lg border p-1 sm:min-h-28 sm:p-1.5",
                  isToday ? "border-primary/40 bg-primary/5" : "border-border/60"
                )}
              >
                <span
                  className={cn(
                    "px-0.5 text-[0.7rem] font-medium sm:text-xs",
                    isToday ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {date.getDate()}
                </span>
                {visible.length > 0 && (
                  <div className="flex flex-col gap-0.5">
                    {visible.map((event) => (
                      <EventDetailDialog key={event.slug} event={event} />
                    ))}
                    {overflow > 0 && (
                      <p className="px-1.5 text-[0.65rem] text-muted-foreground">
                        +{overflow} more
                      </p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <p className="mt-3 px-1 text-xs text-muted-foreground">
          Tap an event on any date to see full details, then book or learn more.
        </p>
      </div>

      {recurringEvents.length > 0 && (
        <div>
          <p className="mb-4 text-sm font-medium">Weekly activities</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {recurringEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
