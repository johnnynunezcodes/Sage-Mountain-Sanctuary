// Placeholder upcoming events. Replace with real dates/pricing/descriptions.
// Registration is UI-only for now — no payment processor is connected (see
// Policies/Sponsorship & Donation Policy.md in the parent project folder).

export interface SanctuaryEvent {
  slug: string
  title: string
  date: string // human-readable placeholder, e.g. "Saturday, September 12"
  isoDate: string // "YYYY-MM-DD", used to plot the event on the calendar
  time: string
  location: string
  description: string
  price: string
}

// Guided tours are a recurring event (every Wed/Sat/Sun, see
// Website/app/visit/tour), not a one-off dated event like the placeholders
// below — so it's kept out of the `events` array (which is plotted on the
// calendar one dot per `isoDate`) and exposed separately. The events
// calendar plots tour dates on its own using the recurrence rule directly;
// this entry only backs the card shown alongside the other events.
export const tourEvent: SanctuaryEvent = {
  slug: "tour-the-sanctuary",
  title: "Tour the Sanctuary",
  date: "Every Wednesday, Saturday & Sunday",
  isoDate: "",
  time: "5:00 – 6:00 PM",
  location: "Sage Mountain Sanctuary, Peoa, UT",
  description:
    "Meet the animals in person, hear their individual rescue stories, and learn more about Sage Mountain's mission. Real, recurring event — pick a date and see full details on the tour page.",
  price: "$30/adult, $15/child",
}

export const events: SanctuaryEvent[] = [
  {
    slug: "fall-open-house",
    title: "Fall Open House",
    date: "Saturday, September 12",
    isoDate: "2026-09-12",
    time: "10:00 AM – 2:00 PM",
    location: "Sage Mountain Sanctuary, Park City, UT",
    description:
      "Placeholder event — an open house for the community to meet the animals and learn about the sanctuary. Replace with real details.",
    price: "$10 suggested donation",
  },
  {
    slug: "sunrise-yoga-fundraiser",
    title: "Sunrise Yoga Fundraiser",
    date: "Sunday, October 4",
    isoDate: "2026-10-04",
    time: "8:00 AM – 9:30 AM",
    location: "The Barn, Sage Mountain Sanctuary",
    description:
      "Placeholder event — a special yoga session with proceeds supporting animal care. Replace with real details.",
    price: "$35 per person",
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
