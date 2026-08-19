"use client"

import * as React from "react"
import Link from "next/link"
import { CalendarDays, Clock, MapPin } from "lucide-react"

import type { SanctuaryEvent } from "@/lib/data/events"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function EventCard({ event }: { event: SanctuaryEvent }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription className="flex flex-col gap-1 pt-1">
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
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 text-sm text-muted-foreground">
        {event.description}
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-3">
        <span className="flex min-h-10 items-center text-sm font-medium">{event.price}</span>
        {event.href ? (
          <Button render={<Link href={event.href} />} nativeButton={false}>
            {event.ctaLabel ?? "Learn more"}
          </Button>
        ) : (
          <Dialog>
            <DialogTrigger render={<Button />}>Register</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Register for {event.title}</DialogTitle>
                <DialogDescription>
                  {event.date} · {event.time}
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor={`${event.slug}-name`}>Name</Label>
                  <Input id={`${event.slug}-name`} placeholder="Your name" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor={`${event.slug}-email`}>Email</Label>
                  <Input id={`${event.slug}-email`} type="email" placeholder="you@example.com" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor={`${event.slug}-qty`}>Number of spots</Label>
                  <Input id={`${event.slug}-qty`} type="number" min={1} defaultValue={1} />
                </div>
                <Alert>
                  <AlertTitle>Payments aren&apos;t connected yet</AlertTitle>
                  <AlertDescription>
                    This is a preview of the registration flow — no payment processor is wired up,
                    so submitting won&apos;t charge anything or save your info yet.
                  </AlertDescription>
                </Alert>
              </div>

              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
                <Button disabled title="Payment processing isn't connected yet">
                  Complete Registration — Coming Soon
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </CardFooter>
    </Card>
  )
}
