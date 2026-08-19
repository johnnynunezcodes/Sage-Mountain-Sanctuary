"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { addDays, isSameDay, monthGrid, startOfDay } from "@/lib/calendar-utils"
import { cn } from "@/lib/utils"

const VOLUNTEER_DAY_WEEKDAY = 6 // Saturday

function isVolunteerDay(date: Date) {
  return date.getDay() === VOLUNTEER_DAY_WEEKDAY
}

function isSelectable(date: Date, now: Date) {
  return isVolunteerDay(date) && date >= startOfDay(now)
}

// Next `count` upcoming Saturdays, in chronological order (today counts if
// it's a Saturday).
function getUpcomingVolunteerDays(now: Date, count: number) {
  const dates: Date[] = []
  let cursor = startOfDay(now)
  for (let i = 0; dates.length < count && i < 365; i++) {
    if (isSelectable(cursor, now)) dates.push(cursor)
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
  hint,
  value,
  onChange,
  min = 0,
}: {
  label: string
  hint: string
  value: number
  onChange: (value: number) => void
  min?: number
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">{hint}</p>
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
          onClick={() => onChange(value + 1)}
          aria-label={`More ${label}`}
        >
          <Plus />
        </Button>
      </div>
    </div>
  )
}

export function VolunteerDayRsvp() {
  // Freeze "today" once per mount instead of recomputing on every render.
  const [now] = React.useState(() => new Date())
  const upcoming = React.useMemo(() => getUpcomingVolunteerDays(now, 3), [now])

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(upcoming[0] ?? null)
  const [monthOffset, setMonthOffset] = React.useState(0)
  const [adults, setAdults] = React.useState(1)
  const [kids, setKids] = React.useState(0)
  const [agreedToWaiver, setAgreedToWaiver] = React.useState(false)
  const [subscribeToNewsletter, setSubscribeToNewsletter] = React.useState(true)

  const viewDate = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1)
  const cells = monthGrid(viewDate.getFullYear(), viewDate.getMonth())

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>RSVP for Volunteer Day</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div>
          <p className="mb-3 text-sm font-medium">Next available Saturdays</p>
          <div className="grid gap-3 sm:grid-cols-3">
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
                    9–11 AM
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium">Or pick a Saturday from the calendar</p>
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
              const selectable = isSelectable(date, now)
              const isSelected = selectedDate && isSameDay(date, selectedDate)
              return (
                <button
                  key={i}
                  type="button"
                  disabled={!selectable}
                  onClick={() => setSelectedDate(date)}
                  aria-pressed={!!isSelected}
                  className={cn(
                    "aspect-square rounded-full text-sm transition-colors",
                    !selectable && "text-muted-foreground/40",
                    selectable && !isSelected && "bg-primary/10 font-medium text-primary hover:bg-primary/20",
                    isSelected && "bg-primary font-medium text-primary-foreground"
                  )}
                >
                  {date.getDate()}
                </button>
              )
            })}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Highlighted dates are Saturdays — Volunteer Day runs 9–11 AM.
          </p>
        </div>

        <div className="rounded-xl border border-border p-4">
          <p className="font-medium">
            {selectedDate ? `${formatDate(selectedDate)} · 9–11 AM` : "Choose a Saturday above"}
          </p>
          <div className="mt-4 flex flex-col gap-4">
            <Stepper label="Adults" hint="18 and older" value={adults} onChange={setAdults} min={0} />
            <Stepper
              label="Kids"
              hint="Must be accompanied by an adult"
              value={kids}
              onChange={setKids}
              min={0}
            />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            {adults + kids} {adults + kids === 1 ? "person" : "people"} total.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-1.5">
            <Label htmlFor="rsvp-first-name">First name</Label>
            <Input id="rsvp-first-name" placeholder="First name" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="rsvp-last-name">Last name</Label>
            <Input id="rsvp-last-name" placeholder="Last name" />
          </div>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="rsvp-email">Email</Label>
          <Input id="rsvp-email" type="email" placeholder="you@example.com" />
        </div>

        <Separator />

        <div className="flex flex-col gap-4">
          <div className="group/field-label flex items-start gap-3">
            <Checkbox
              id="rsvp-waiver"
              checked={agreedToWaiver}
              onCheckedChange={setAgreedToWaiver}
              className="mt-0.5"
            />
            <Label htmlFor="rsvp-waiver" className="font-normal text-muted-foreground">
              I agree to follow sanctuary staff instructions and animal-safety guidelines at all
              times, and to the sanctuary&apos;s liability waiver.{" "}
              <span className="text-xs italic">
                (Real waiver language pending legal review — see Policies/Volunteer Policy.md.)
              </span>
            </Label>
          </div>

          <div className="group/field-label flex items-start gap-3">
            <Checkbox
              id="rsvp-newsletter"
              checked={subscribeToNewsletter}
              onCheckedChange={setSubscribeToNewsletter}
              className="mt-0.5"
            />
            <Label htmlFor="rsvp-newsletter" className="font-normal text-muted-foreground">
              Keep me posted on sanctuary news, events, and volunteer opportunities.
            </Label>
          </div>
        </div>

        <Alert>
          <AlertTitle>Preview only</AlertTitle>
          <AlertDescription>
            This form doesn&apos;t submit anywhere yet — no account or payment is involved,
            volunteering is always free. We just want to plan for headcount and get waivers signed
            ahead of time once this is connected.
          </AlertDescription>
        </Alert>

        <Button
          size="lg"
          disabled={!selectedDate || !agreedToWaiver}
          title="RSVPs aren't connected yet"
          className="w-full sm:w-fit"
        >
          {selectedDate && adults + kids > 0
            ? `RSVP for ${adults + kids} ${adults + kids === 1 ? "person" : "people"} — Coming Soon`
            : "RSVP — Coming Soon"}
        </Button>
      </CardContent>
    </Card>
  )
}
