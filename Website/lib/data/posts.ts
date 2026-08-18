// Placeholder Sanctuary Happenings posts — a lightweight news/blog feed for
// rescue stories, project updates, and other sanctuary news. Replace with
// real posts as they're written; this file just establishes the shape and
// UI for the feed.

export interface SanctuaryPost {
  slug: string
  title: string
  date: string // human-readable, e.g. "August 12, 2026"
  image?: string
  excerpt: string
  body: string
}

export const posts: SanctuaryPost[] = [
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
