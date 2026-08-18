import { permanentRedirect } from "next/navigation"

// Yoga moved from its own Visit page into the Events Calendar — see
// app/events/page.tsx for the seasonal-break note, and lib/data/events.ts
// for where a real yoga event card would live once classes resume.
export default function YogaPage() {
  permanentRedirect("/events")
}
