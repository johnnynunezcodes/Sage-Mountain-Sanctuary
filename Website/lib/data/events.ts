// Placeholder upcoming events. Replace with real dates/pricing/descriptions.
// Registration is UI-only for now — no payment processor is connected (see
// Policies/Sponsorship & Donation Policy.md in the parent project folder).

export interface SanctuaryEvent {
  slug: string
  title: string
  date: string // human-readable placeholder, e.g. "Saturday, September 12"
  time: string
  location: string
  description: string
  price: string
}

export const events: SanctuaryEvent[] = [
  {
    slug: "fall-open-house",
    title: "Fall Open House",
    date: "Saturday, September 12",
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
    time: "12:00 PM – 3:00 PM",
    location: "Sage Mountain Sanctuary, Park City, UT",
    description:
      "Placeholder event — a thank-you gathering for regular volunteers. Replace with real details.",
    price: "Free for volunteers",
  },
]
