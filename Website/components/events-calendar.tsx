"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import type { SanctuaryEvent } from "@/lib/data/events"
import { EventCard } from "@/components/event-card"
import { EventDetailDialog } from "@/components/event-detail-dialog"
import { Button } from "@/components/ui/button"
import { addDays, isSameDay, monthGrid, parseIsoDate, startOfDay } from "@/lib/calendar-utils"
import { cn } from "@/lib/utils"

// How many (date, event) rows the desktop "Upcoming" list shows, and how
// many days ahead the mobile date strip scrolls.
const UPCOMING_COUNT = 6
const WEEK_STRIP_DAYS = 14

interface Occurrence {
  date: Date
  event: SanctuaryEvent
}

export function EventsCalendar({ events }: { events: SanctuaryEvent[] }) {
  // Standing weekly activities (Volunteer Day, Tours) aren't tied to a
  // single date, so they get their own always-visible quick-reference
  // instead of repeating what the "Upcoming" list above already shows.
  const recurringEvents = events.filter((event) => event.recurring)

  // Freeze "today" once per mount instead of recomputing on every render.
  const [now] = React.useState(() => new Date())
  const today = React.useMemo(() => startOfDay(now), [now])

  // All events (one-off or recurring) that land on a given date.
  const eventsOn = React.useCallback(
    (date: Date) =>
      events.filter((event) => {
        if (event.isoDate) return isSameDay(parseIsoDate(event.isoDate), date)
        if (event.recurring) return event.recurring.daysOfWeek.includes(date.getDay())
        return false
      }),
    [events]
  )

  // Walk forward day by day collecting (date, event) rows until there are
  // enough for the "Upcoming" list — cheap since events are sparse, capped
  // so a data bug can't spin forever.
  const upcoming = React.useMemo(() => {
    const rows: Occurrence[] = []
    let cursor = today
    for (let i = 0; rows.length < UPCOMING_COUNT && i < 180; i++) {
      for (const event of eventsOn(cursor)) rows.push({ date: cursor, event })
      cursor = addDays(cursor, 1)
    }
    return rows
  }, [eventsOn, today])

  // Only one-off events (with an isoDate) plot on a single day — recurring
  // events are matched by day-of-week in `eventsOn` instead.
  const dated = React.useMemo(
    () =>
      events
        .filter((event) => event.isoDate)
        .map((event) => ({ event, date: parseIsoDate(event.isoDate!) })),
    [events]
  )

  // Default the visible month to the current month whenever it has anything
  // on it — and thanks to the recurring weekly activities, it basically
  // always does. Only jump ahead to a future month if the current month is
  // genuinely empty (no recurring events and no one-off event this month),
  // so the calendar doesn't open on a blank page.
  const initialMonthOffset = React.useMemo(() => {
    const hasEventsThisMonth =
      recurringEvents.length > 0 ||
      dated.some(
        (d) =>
          d.date.getFullYear() === today.getFullYear() && d.date.getMonth() === today.getMonth()
      )
    if (hasEventsThisMonth) return 0

    const next = dated
      .filter((d) => d.date >= today)
      .sort((a, b) => a.date.getTime() - b.date.getTime())[0]
    const base = next?.date ?? today
    return (base.getFullYear() - today.getFullYear()) * 12 + (base.getMonth() - today.getMonth())
  }, [dated, today, recurringEvents])

  const [monthOffset, setMonthOffset] = React.useState(initialMonthOffset)
  const [selectedDate, setSelectedDate] = React.useState<Date>(today)

  const viewDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1)
  const cells = monthGrid(viewDate.getFullYear(), viewDate.getMonth())

  const weekStripDays = React.useMemo(
    () => Array.from({ length: WEEK_STRIP_DAYS }, (_, i) => addDays(today, i)),
    [today]
  )

  const upcomingRefs = React.useRef<Record<string, HTMLDivElement | null>>({})

  function selectDate(date: Date) {
    setSelectedDate(date)
    const key = date.toDateString()
    upcomingRefs.current[key]?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }

  const selectedDayEvents = eventsOn(selectedDate)

  return (
    <div className="mt-8 flex flex-col gap-8">
      {/* Mobile: a scrollable date strip, with the selected day's events below. */}
      <div className="rounded-xl border border-border p-4 sm:p-6 md:hidden">
        <p className="mb-3 text-sm font-medium">Upcoming dates</p>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {weekStripDays.map((date) => {
            const isSelected = isSameDay(date, selectedDate)
            const hasEvent = eventsOn(date).length > 0
            return (
              <button
                key={date.toISOString()}
                type="button"
                onClick={() => selectDate(date)}
                aria-pressed={isSelected}
                className={cn(
                  "flex w-14 shrink-0 flex-col items-center gap-1 rounded-2xl py-2.5 transition-colors",
                  isSelected
                    ? "bg-primary text-primary-foreground"
                    : "border border-border/60 text-foreground hover:bg-muted"
                )}
              >
                <span className="text-[0.65rem] font-medium tracking-wide uppercase opacity-75">
                  {date.toLocaleDateString("en-US", { weekday: "short" })}
                </span>
                <span className="font-heading text-lg font-semibold">{date.getDate()}</span>
                <span
                  className={cn(
                    "size-1 rounded-full",
                    hasEvent ? (isSelected ? "bg-primary-foreground" : "bg-primary") : "bg-transparent"
                  )}
                />
              </button>
            )
          })}
        </div>

        <p className="mt-4 mb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {selectedDate.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </p>
        {selectedDayEvents.length > 0 ? (
          <div className="flex flex-col gap-2">
            {selectedDayEvents.map((event) => (
              <EventDetailDialog key={event.slug} event={event} variant="row" />
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Nothing scheduled this day.</p>
        )}
      </div>

      {/* Desktop: a compact month picker beside a running "Upcoming" list. */}
      <div className="hidden gap-8 md:grid md:grid-cols-[280px_1fr]">
        <div className="rounded-xl border border-border p-4">
          <div className="mb-3 flex items-center justify-between">
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setMonthOffset((v) => v - 1)}
              aria-label="Previous month"
            >
              <ChevronLeft />
            </Button>
            <p className="text-sm font-medium">
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

          <div className="grid grid-cols-7 gap-0.5 text-center text-[0.65rem] text-muted-foreground">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <div key={i} className="py-1">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-0.5">
            {cells.map((date, i) => {
              if (!date) return <div key={i} />
              const hasEvent = eventsOn(date).length > 0
              const isSelected = isSameDay(date, selectedDate)
              const isToday = isSameDay(date, today)
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => selectDate(date)}
                  aria-pressed={isSelected}
                  className={cn(
                    "flex aspect-square flex-col items-center justify-center gap-0.5 rounded-lg text-xs transition-colors",
                    isSelected
                      ? "bg-primary font-medium text-primary-foreground"
                      : hasEvent
                        ? "bg-primary/10 font-medium text-primary hover:bg-primary/20"
                        : "text-muted-foreground hover:bg-muted",
                    !isSelected && isToday && "ring-1 ring-primary/40"
                  )}
                >
                  {date.getDate()}
                </button>
              )
            })}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Dates with a tint have an event — select one to jump to it.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">Upcoming</p>
          <div className="flex flex-col gap-2">
            {upcoming.map(({ date, event }) => (
              <div
                key={`${date.toDateString()}-${event.slug}`}
                ref={(el) => {
                  upcomingRefs.current[date.toDateString()] = el
                }}
                className={cn(
                  "rounded-xl transition-shadow",
                  isSameDay(date, selectedDate) &&
                    "ring-2 ring-primary ring-offset-2 ring-offset-background"
                )}
              >
                <EventDetailDialog
                  event={event}
                  variant="row"
                  dateBadge={{
                    day: date.getDate(),
                    weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
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
