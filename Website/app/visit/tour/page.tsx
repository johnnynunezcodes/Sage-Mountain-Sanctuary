import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TourBooking } from "./tour-booking"

export const metadata: Metadata = {
  title: "Tour Sage Mountain",
}

export default function TourPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">Visit</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Tour the Sanctuary</h1>
      <p className="mt-4 text-muted-foreground">
        Come meet the animals in person, hear their individual rescue stories, and learn more
        about our mission — right here in Peoa, Utah, about 10 miles from Park City.
      </p>

      <div className="relative mt-8 aspect-3/2 overflow-hidden rounded-xl">
        <Image
          src="/images/Staff/Alyssa/Alyssa-Peter-Headkiss.jpg"
          alt="A team member kneeling with her arms around one of the sanctuary's sheep, with mountains in the background"
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <TourBooking />

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>What to expect</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 text-sm text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">What&apos;s included:</span> Meeting the
            animals, hearing some of their stories, and learning more about Sage Mountain and our
            mission.
          </p>
          <p>
            <span className="font-medium text-foreground">Booking:</span> Reservations must be
            made at least 48 hours before your tour date.
          </p>

          <Separator className="my-1" />

          <p className="text-xs italic">
            We&apos;re a nonprofit and rely strictly on donations to operate, so we&apos;re not
            able to offer refunds once a tour is booked. If weather forces us to cancel, we&apos;ll
            gladly reschedule you for another date.
          </p>

          <Button render={<Link href="/about/contact" />} nativeButton={false} className="mt-2 w-fit">
            Ask about tours
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
