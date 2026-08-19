// Sanctuary Happenings posts — a lightweight news/blog feed for rescue
// stories, project updates, and other sanctuary news. Most of these are
// placeholders (see the "Placeholder post" excerpts below) that establish
// the shape and UI for the feed. "the-barn" is real content pulled from the
// live site (sagemtn.org/thebarn) and is pinned to the top via `featured`.

export interface SanctuaryPost {
  slug: string
  title: string
  date: string // human-readable, e.g. "August 12, 2026"
  image?: string
  excerpt: string
  // Optional full body for posts that use the generic /about/happenings/[slug]
  // template. Omit when `href` points somewhere else with its own bespoke page.
  body?: string
  // Pins this post above the regular grid as a larger, wider card.
  featured?: boolean
  // Overrides the default `/about/happenings/${slug}` link — use this when a
  // post needs a bespoke page instead of the generic template.
  href?: string
}

export const posts: SanctuaryPost[] = [
  {
    slug: "the-barn",
    title: "The Barn at Sage Mountain",
    date: "Capital project · targeting Fall 2025 completion",
    featured: true,
    href: "/about/happenings/the-barn",
    image: "/images/barn/goat-inside-barn.jpg",
    excerpt:
      "Winters here now bring snow drifts over 10 feet deep. We're building a 7,000 sq ft barn to shelter our 40+ rescued animals from harsh winters and hot summers — see the full plan, cost breakdown, and how to help.",
  },
  {
    slug: "in-loving-memory-of-smooch",
    title: "In Loving Memory of Smooch",
    date: "July 6, 2026",
    href: "/about/happenings/in-loving-memory-of-smooch",
    image: "/images/smooch/smooch-listing-v2.jpg",
    excerpt:
      "With a heavy heart, we announce that our baby boy Smooch is no longer with us — remembering seven wonderful years of his love and gentleness at Sage Mountain.",
  },
  {
    slug: "in-loving-memory-of-wilma-jean",
    title: "In Loving Memory of Wilma Jean",
    date: "October 16, 2025",
    href: "/about/happenings/in-loving-memory-of-wilma-jean",
    image: "/images/wilma-jean/wilma-listing.jpg",
    excerpt:
      "Wilma Jean lived a happy 8 years with us at Sage Mountain alongside her soul mate Ponyboy — remembering our sassy queen, who took her last breath peacefully in August 2025.",
  },
  {
    slug: "example-project-update",
    title: "Example Post: Sanctuary Project Update",
    date: "June 2026",
    image: "/images/Events/Animal-Sponsor-Auction.jpg",
    excerpt:
      "Placeholder post — an example update on an ongoing sanctuary project, like a barn build or fencing project. Replace with real details.",
    body:
      "Placeholder post — this is a stand-in for project or improvement updates, such as construction progress, new pasture fencing, or facility upgrades. Replace with real details and photos once available.",
  },
]

export function getPostBySlug(slug: string): SanctuaryPost | undefined {
  return posts.find((post) => post.slug === slug)
}
