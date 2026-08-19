import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">About</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
        Compassion, one rescue at a time
      </h1>

      <div className="relative mt-6 aspect-21/9 overflow-hidden rounded-xl">
        <Image
          src="/images/geese.jpg"
          alt="A line of geese walking across the sanctuary at dusk, mountains in the background"
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover object-[center_78%]"
          priority
        />
      </div>

      <div className="mt-8 space-y-6 text-muted-foreground">
        <p>
          Sage Mountain Sanctuary gives rescued farm animals — pigs, cows, chickens, goats,
          sheep, and turkeys — a safe, permanent home. We&apos;re located about 10 miles from
          Park City, Utah, and operate as a 501(c)(3) nonprofit.
        </p>
        <p>
          Beyond providing sanctuary, we run guided tours and yoga classes so visitors can meet
          the animals in person, and we welcome volunteers every Saturday.
        </p>
        <p>
          We believe getting to know these animals as individuals — not statistics — is one of
          the most powerful ways to inspire compassionate, plant-based living. Every visit is an
          invitation, not a lecture.
        </p>
        <p>The sanctuary is currently at capacity and not accepting new animals.</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button render={<Link href="/about/team" />} nativeButton={false} variant="outline">
          Meet the Team
        </Button>
        <Button render={<Link href="/about/happenings" />} nativeButton={false} variant="outline">
          Sanctuary Happenings
        </Button>
        <Button render={<Link href="/about/contact" />} nativeButton={false} variant="outline">
          Contact Us
        </Button>
      </div>
    </div>
  )
}
