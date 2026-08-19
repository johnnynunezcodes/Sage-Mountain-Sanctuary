"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { addDays, isSameDay, monthGrid, startOfDay } from "@/lib/calendar-utils"
import { cn } from "@/lib/utils"

const ADULT_PRICE = 30
const CHILD_PRICE = 15
const TOUR_WEEKDAYS = [0, 3, 6] // Sunday, Wednesday, Saturday
const MIN_LEAD_DAYS = 2 // "must be scheduled at least 48 hours before"
const MAX_SPOTS = 20 // capacity per tour

function isTourDay(date: Date) {
  return TOUR_WEEKDAYS.includes(date.getDay())
}

function isBookable(date: Date, now: Date) {
  return isTourDay(date) && date >= startOfDay(addDays(now, MIN_LEAD_DAYS))
}

// Next `count` bookable tour dates, in chronological order.
function getUpcomingTourDates(now: Date, count: number) {
  const dates: Date[] = []
  let cursor = startOfDay(now)
  // Cap the search so a bug can't spin forever.
  for (let i = 0; dates.length < count && i < 365; i++) {
    if (isBookable(cursor, now)) dates.push(cursor)
    cursor = addDays(cursor, 1)
  }
  return dates
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

function Stepper({
  label,
  price,
  value,
  onChange,
  min = 0,
  max = Infinity,
}: {
  label: string
  price: number
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">${price} each</p>
      </div>
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`Fewer ${label}`}
        >
          <Minus />
        </Button>
        <span className="w-4 text-center tabular-nums">{value}</span>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          aria-label={`More ${label}`}
        >
          <Plus />
        </Button>
      </div>
    </div>
  )
}

export function TourBooking() {
  // Freeze "today" once per mount instead of recomputing on every render.
  const [now] = React.useState(() => new Date())
  const upcoming = React.useMemo(() => getUpcomingTourDates(now, 3), [now])

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(upcoming[0] ?? null)
  const [monthOffset, setMonthOffset] = React.useState(0)
  const [adults, setAdults] = React.useState(1)
  const [kids, setKids] = React.useState(0)

  const viewDate = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1)
  const cells = monthGrid(viewDate.getFullYear(), viewDate.getMonth())
  const total = adults * ADULT_PRICE + kids * CHILD_PRICE

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Book a tour</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8 lg:grid lg:grid-cols-[336px_1fr] lg:items-start lg:gap-6">
        <div className="flex flex-col gap-8">
          <div>
            <p className="mb-3 text-sm font-medium">Next available dates</p>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {upcoming.map((date) => {
                const isSelected = selectedDate && isSameDay(date, selectedDate)
                return (
                  <button
                    key={date.toISOString()}
                    type="button"
                    onClick={() => setSelectedDate(date)}
                    aria-pressed={!!isSelected}
                    className={cn(
                      "rounded-xl border p-4 text-left transition-colors",
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-muted/50"
                    )}
                  >
                    <p className="font-medium">
                      {date.toLocaleDateString("en-US", { weekday: "long" })}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {date.toLocaleDateString("en-US", { month: "short", day: "numeric" })} ·
                      5–6 PM
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Capped to 336px so the day cells stay a fixed size instead of stretching
              (via aspect-square in a 7-col grid) as the card gets wider on desktop. */}
          <div className="max-w-[336px]">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium">Or pick a date from the calendar</p>
              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setMonthOffset((v) => v - 1)}
                  disabled={monthOffset <= 0}
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
                const bookable = isBookable(date, now)
                const isSelected = selectedDate && isSameDay(date, selectedDate)
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={!bookable}
                    onClick={() => setSelectedDate(date)}
                    aria-pressed={!!isSelected}
                    className={cn(
                      "aspect-square rounded-full text-sm transition-colors",
                      !bookable && "text-muted-foreground/40",
                      bookable && !isSelected && "bg-primary/10 font-medium text-primary hover:bg-primary/20",
                      isSelected && "bg-primary font-medium text-primary-foreground"
                    )}
                  >
                    {date.getDate()}
                  </button>
                )
              })}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Highlighted dates are Wednesdays, Saturdays, and Sundays — tours run 5–6 PM.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="rounded-xl border border-border p-4">
            <p className="font-medium">
              {selectedDate ? `${formatDate(selectedDate)} · 5–6 PM` : "Choose a date above"}
            </p>
            <div className="mt-4 flex flex-col gap-4">
              <Stepper
                label="Adults"
                price={ADULT_PRICE}
                value={adults}
                onChange={setAdults}
                min={0}
                max={MAX_SPOTS - kids}
              />
              <Stepper
                label="Kids (12 & under)"
                price={CHILD_PRICE}
                value={kids}
                onChange={setKids}
                min={0}
                max={MAX_SPOTS - adults}
              />
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4 font-medium">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {adults + kids}/{MAX_SPOTS} spots — each tour is capped at {MAX_SPOTS}.
            </p>
          </div>

          <Alert>
            <AlertTitle>Booking isn&apos;t connected yet</AlertTitle>
            <AlertDescription>
              This is a preview of the booking flow with our real schedule and pricing — no
              payment processor is wired up yet, so nothing will be charged. Reach out below to
              reserve your spot in the meantime.
            </AlertDescription>
          </Alert>

          <Button
            size="lg"
            disabled
            title="Online booking isn't connected yet"
            className="w-full sm:w-fit lg:w-full"
          >
            {selectedDate && adults + kids > 0
              ? `Book ${adults + kids} ${adults + kids === 1 ? "spot" : "spots"} — Coming Soon`
              : "Book Now — Coming Soon"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
