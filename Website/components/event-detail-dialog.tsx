"use client"

import * as React from "react"
import Link from "next/link"
import { CalendarDays, Clock, MapPin } from "lucide-react"

import type { SanctuaryEvent } from "@/lib/data/events"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

// One event, tap-to-expand into full details and a path to book or learn
// more — without leaving the calendar. (`EventCard`, used in the "All
// upcoming events" grid below the calendar, covers the same event in a
// larger always-visible layout.)
//
// Two trigger looks share this one dialog: `chip` is a compact pill meant to
// live inside a calendar day cell; `row` is a full-width list row (used by
// the mobile day list and the desktop upcoming list on /events), optionally
// prefixed with a day-number/weekday badge via `dateBadge` when the row sits
// in a list that spans multiple dates.
export function EventDetailDialog({
  event,
  variant = "chip",
  dateBadge,
  className,
}: {
  event: SanctuaryEvent
  variant?: "chip" | "row"
  dateBadge?: { day: number; weekday: string }
  className?: string
}) {
  return (
    <Dialog>
      <DialogTrigger
        type="button"
        title={event.title}
        className={cn(
          variant === "chip" &&
            "block w-full truncate rounded-md bg-primary/10 px-1.5 py-0.5 text-left text-[0.7rem] leading-tight font-medium text-primary transition-colors hover:bg-primary/20",
          variant === "row" &&
            "flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left transition-colors hover:bg-muted",
          className
        )}
      >
        {variant === "chip" ? (
          event.title
        ) : (
          <>
            <span className="flex min-w-0 items-center gap-3">
              {dateBadge && (
                <span className="flex w-10 shrink-0 flex-col items-center text-center">
                  <span className="font-heading text-lg leading-none font-semibold">
                    {dateBadge.day}
                  </span>
                  <span className="mt-0.5 text-[0.65rem] tracking-wide text-muted-foreground uppercase">
                    {dateBadge.weekday}
                  </span>
                </span>
              )}
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-foreground">
                  {event.title}
                </span>
                <span className="block text-xs text-muted-foreground">{event.time}</span>
              </span>
            </span>
            <span className="shrink-0 text-xs font-medium text-primary">{event.price}</span>
          </>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            {event.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            {event.time}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden="true" />
            {event.location}
          </span>
        </div>

        <p className="text-sm text-muted-foreground">{event.description}</p>

        <p className="text-sm font-medium">{event.price}</p>

        {!event.href && (
          <div className="grid gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor={`${event.slug}-dialog-name`}>Name</Label>
              <Input id={`${event.slug}-dialog-name`} placeholder="Your name" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor={`${event.slug}-dialog-email`}>Email</Label>
              <Input id={`${event.slug}-dialog-email`} type="email" placeholder="you@example.com" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor={`${event.slug}-dialog-qty`}>Number of spots</Label>
              <Input id={`${event.slug}-dialog-qty`} type="number" min={1} defaultValue={1} />
            </div>
            <Alert>
              <AlertTitle>Payments aren&apos;t connected yet</AlertTitle>
              <AlertDescription>
                This is a preview of the registration flow — no payment processor is wired up, so
                submitting won&apos;t charge anything or save your info yet.
              </AlertDescription>
            </Alert>
          </div>
        )}

        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Close</DialogClose>
          {event.href ? (
            <Button render={<Link href={event.href} />} nativeButton={false}>
              {event.ctaLabel ?? "Learn more"}
            </Button>
          ) : (
            <Button disabled title="Payment processing isn't connected yet">
              Complete Registration — Coming Soon
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
