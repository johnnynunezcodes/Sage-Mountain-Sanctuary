import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Mail,
  HeartPulse,
  Gauge,
  TrendingUp,
  GraduationCap,
  Users,
  Leaf,
  type LucideIcon,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "The Barn at Sage Mountain",
  description:
    "We're building a 7,000 sq ft barn to shelter Sage Mountain's 40+ rescued animals from harsh winters and hot summers.",
}

const costBreakdown = [
  { label: "Excavation & Framing", amount: "$952,413.60" },
  { label: "Systems & Drywall", amount: "$221,575" },
  { label: "Interior Design", amount: "$125,250" },
  { label: "Contractor & Administrative Fees", amount: "$224,768.28" },
]

const costTotal = "$1,524,006.88"

const whyItems: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Animal Welfare",
    body: "An upgraded shelter is essential for winter well-being, preventing issues like hoof rot and keeping animals safe. It's also crucial that we have a designated vet care and quarantine stall that can be used as needed for new residents when they arrive or if emergencies arise.",
    icon: HeartPulse,
  },
  {
    title: "Operational Efficiency",
    body: "A barn will streamline tasks such as feeding and medical care, and also offer essential amenities like a bathroom and breakroom for volunteers.",
    icon: Gauge,
  },
  {
    title: "Expansion and Growth",
    body: "Building a barn would allow us to rescue and care for more animals while also serving as a versatile venue for events throughout the year, including Wine Down Yoga, dinners, fundraisers, and even weddings!",
    icon: TrendingUp,
  },
  {
    title: "Educational Opportunities",
    body: "A well-maintained barn can serve as a venue for various events, providing opportunities to educate people about our mission.",
    icon: GraduationCap,
  },
  {
    title: "Community Impact",
    body: "The Barn will serve as a venue for events and programs that would help bring people together, enhancing community spirit and awareness.",
    icon: Users,
  },
  {
    title: "Long Term Sustainability",
    body: "A well-built barn contributes to the long-term success and stability of the nonprofit's operations.",
    icon: Leaf,
  },
]

const testimonials = [
  {
    quote:
      "In previous years there's been snow drifts high enough to block the animals in their shelters. So the volunteers have to dig them out. It's a lot of work for volunteers and it's very stressful for the animals. The Barn would eliminate that struggle completely since everyone can stay inside during the harsh winter storms.",
    attribution: "Animal Caretaker",
    image: "/images/Volunteers/Volunteer-caretaker.jpg",
  },
  {
    quote:
      "I often miss doing yoga at Sage Mountain during the winter season. Having a space like The Barn will allow for them to host their Wine Down Yoga classes all year instead of just when it's nice outside.",
    attribution: "Visitor",
    image: "/images/Volunteers/yoga-group.jpg",
  },
  {
    quote:
      "The Barn will be perfect for the rescued animal residents to stay out of the heat when it gets really hot in the summer.",
    attribution: "Volunteer",
    image: "/images/Volunteers/Volunteer-Kylie.jpg",
  },
  {
    quote:
      "There's been times in the winter where the fence to the main yard gets buried in snow. So we put a temporary fence on top of that fence. And then that fence gets buried in snow too. The Barn would prevent that from being problematic since everyone can stay indoors when it's bad outside.",
    attribution: "Volunteer",
    image: "/images/Volunteers/Regular-Volunteer.jpg",
  },
]

export default function TheBarnPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/about/happenings"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Sanctuary Happenings
      </Link>

      <div className="relative mt-6 aspect-21/9 overflow-hidden rounded-xl bg-muted">
        <Image
          src="/images/barn/the-barn-plans.jpg"
          alt="Site plan for the new barn, showing the building footprint, drive pads, and Frosty Lane"
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">The Barn at Sage Mountain</h1>
      <p className="mt-4 text-muted-foreground">
        Winters at Sage Mountain have become increasingly challenging to manage over the last
        couple of years. With 10+ feet tall snow drifts and intense snowstorms posing heightened
        risks to our rescued animals&apos; health and safety, it&apos;s crucial that we provide
        upgraded shelter for future storms. That&apos;s why, with thoughtful planning, we&apos;re
        excited to announce our project to build The Barn at Sage Mountain, aimed at alleviating
        these yearly struggles.
      </p>

      <section className="mt-12">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">What is</p>
        <h2 className="mt-1 text-2xl font-semibold">
          The Barn at Sage Mountain, Park City Utah?
        </h2>
        <p className="mt-4 text-muted-foreground">
          The barn at Sage Mountain will be a 7000 sq ft secured structure for our resident
          animals with an attached apartment designated for two animal caregivers. As we have
          grown, this new barn will allow us to provide our 40+ rescued farm animals with a home
          that will shelter them from harsh winters as well as the hot summer sun. The barn will
          also make feeding and cleaning up after the animals much easier for volunteers and
          staff, as well as provide a much needed designated stall for vet care and quarantining
          animals as needed.
        </p>

        <div className="relative mt-6 aspect-video overflow-hidden rounded-xl bg-white">
          <Image
            src="/images/barn/barn-side-perspectives.jpg"
            alt="Architectural elevation drawings of the barn's southwest, northwest, and northeast sides"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-contain"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">
          Why will The Barn make winters better at Sage Mountain?
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {whyItems.map((item) => (
            <div key={item.title} className="flex gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="size-4.5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-border p-6">
        <h2 className="text-2xl font-semibold">Cost Breakdown of The Barn</h2>
        <dl className="mt-4 divide-y divide-border">
          {costBreakdown.map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-4 py-2.5">
              <dt className="text-muted-foreground">{item.label}</dt>
              <dd className="font-medium">{item.amount}</dd>
            </div>
          ))}
          <div className="flex items-center justify-between gap-4 py-2.5 text-lg font-semibold">
            <dt>Total</dt>
            <dd>{costTotal}</dd>
          </div>
        </dl>

        <p className="mt-6 text-sm text-muted-foreground">
          Building our new barn is a $1,500,000 project. It is a financial commitment we strongly
          believe in, however we cannot do it alone. We need your support and want to extend a
          sincere and heartfelt thank you to everyone who already has supported us behind the
          scenes and those of you that will choose to support us going forward. We have many
          unique opportunities to give your financial support at all levels that we will share
          with you soon, like naming a room in the barn! In the meantime, please don&apos;t
          hesitate to reach out to us with any questions via email at{" "}
          <a href="mailto:info@sagemtn.org" className="text-primary underline underline-offset-2">
            info@sagemtn.org
          </a>
          . If you&apos;re interested in donating, you can do so below. We are a 501(c)(3)
          non-profit so all donations are tax deductible. Thank you so much!
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">In their words</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.attribution} className="flex gap-4">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={t.image}
                  alt={t.attribution}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <blockquote className="text-sm text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-2 text-sm font-medium">— {t.attribution}</figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-border p-6 text-center">
        <h2 className="text-2xl font-semibold">Make a donation</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          The Barn at Sage Mountain wouldn&apos;t be possible without the support of generous
          people like you. Thank you in advance for any support you&apos;re able to contribute.
        </p>

        <Alert className="mt-6 text-left">
          <AlertTitle>Payments aren&apos;t connected yet</AlertTitle>
          <AlertDescription>
            This page links to the site&apos;s donation preview — no payment processor is wired up
            yet, so nothing will be charged.
          </AlertDescription>
        </Alert>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button render={<Link href="/donate" />} nativeButton={false} size="lg">
            Make a Donation
          </Button>
          <Button
            render={<a href="mailto:info@sagemtn.org" />}
            nativeButton={false}
            variant="outline"
            size="lg"
          >
            <Mail aria-hidden="true" />
            Email Us Instead
          </Button>
        </div>
      </section>
    </div>
  )
}
