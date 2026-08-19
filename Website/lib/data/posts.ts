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
    excerpt:
      "Winters here now bring snow drifts over 10 feet deep. We're building a 7,000 sq ft barn to shelter our 40+ rescued animals from harsh winters and hot summers — see the full plan, cost breakdown, and how to help.",
  },
  {
    slug: "welcome-to-sanctuary-happenings",
    title: "Welcome to Sanctuary Happenings",
    date: "August 2026",
    excerpt:
      "Placeholder post — this is where we'll share rescue stories, project updates, and news from the sanctuary. Replace with a real first post.",
    body:
      "Placeholder post — this is where we'll share rescue stories, project updates, and news from the sanctuary, the same way Sanctuary Happenings works on other rescue websites. Once we have real updates to post, this placeholder should be replaced or removed.",
  },
  {
    slug: "example-new-resident",
    title: "Example Post: Meet Our Newest Resident",
    date: "July 2026",
    excerpt:
      "Placeholder post — a short introduction and rescue story for a recently arrived animal. Replace with a real update once we have one.",
    body:
      "Placeholder post — this is a stand-in for the kind of post we'd publish when a new animal arrives: how they came to the sanctuary, what shape they were in, and how they're settling in. Replace with a real story and photos.",
  },
  {
    slug: "example-project-update",
    title: "Example Post: Sanctuary Project Update",
    date: "June 2026",
    excerpt:
      "Placeholder post — an example update on an ongoing sanctuary project, like a barn build or fencing project. Replace with real details.",
    body:
      "Placeholder post — this is a stand-in for project or improvement updates, such as construction progress, new pasture fencing, or facility upgrades. Replace with real details and photos once available.",
  },
]

export function getPostBySlug(slug: string): SanctuaryPost | undefined {
  return posts.find((post) => post.slug === slug)
}
