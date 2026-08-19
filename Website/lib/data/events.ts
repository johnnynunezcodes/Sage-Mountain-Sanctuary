// Upcoming events shown on the events calendar. "weekly-volunteer-day" and
// "sanctuary-tours" are real, standing weekly activities (mirroring the
// schedules on /visit/volunteer and /visit/tour) and repeat every week via
// `recurring` instead of a single `isoDate`. The rest are placeholder
// one-off events — replace with real dates/pricing/descriptions. Registration
// is UI-only for now — no payment processor is connected (see
// Policies/Sponsorship & Donation Policy.md in the parent project folder).

export interface SanctuaryEvent {
  slug: string
  title: string
  date: string // human-readable, e.g. "Saturday, September 12" or "Every Saturday"
  // "YYYY-MM-DD" for a one-off event, used to plot it on the calendar.
  // Omit for recurring events — use `recurring` instead.
  isoDate?: string
  // Repeats weekly on these days (0 = Sunday … 6 = Saturday). When set, the
  // event is plotted on every matching date in the calendar, not just once.
  recurring?: { daysOfWeek: number[] }
  time: string
  location: string
  description: string
  price: string
  // When set, the event's call-to-action links to a real page (e.g. the
  // actual tour booking flow) instead of the generic preview "Register"
  // dialog. Use `ctaLabel` to customize the button text.
  href?: string
  ctaLabel?: string
}

export const events: SanctuaryEvent[] = [
  {
    slug: "weekly-volunteer-day",
    title: "Weekly Volunteer Day",
    date: "Every Saturday",
    recurring: { daysOfWeek: [6] },
    time: "9:00 AM – 11:00 AM",
    location: "Sage Mountain Sanctuary, Peoa, UT",
    description:
      "Drop in and help with chores like cleaning coops, scrubbing water bowls, and mucking — no sign-up needed, just show up. We save the last 20 minutes or so to visit with the animals. Open to all ages; kids must be accompanied by an adult.",
    price: "Free — no sign-up needed",
    href: "/visit/volunteer",
    ctaLabel: "Volunteer day details",
  },
  {
    slug: "sanctuary-tours",
    title: "Sanctuary Tours",
    date: "Wednesdays, Saturdays & Sundays",
    recurring: { daysOfWeek: [0, 3, 6] },
    time: "5:00 PM – 6:00 PM",
    location: "Sage Mountain Sanctuary, Peoa, UT",
    description:
      "Meet the animals in person, hear their individual rescue stories, and learn about our mission. Reservations must be made at least 48 hours in advance.",
    price: "$30 adults · $15 kids (12 & under)",
    href: "/visit/tour",
    ctaLabel: "Book a tour",
  },
  {
    slug: "volunteer-appreciation-day",
    title: "Volunteer Appreciation Day",
    date: "Saturday, November 8",
    isoDate: "2026-11-08",
    time: "12:00 PM – 3:00 PM",
    location: "Sage Mountain Sanctuary, Park City, UT",
    description:
      "Placeholder event — a thank-you gathering for regular volunteers. Replace with real details.",
    price: "Free for volunteers",
  },
]
