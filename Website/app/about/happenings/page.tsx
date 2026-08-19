import type { Metadata } from "next"

import { posts } from "@/lib/data/posts"
import { PostCard } from "@/components/post-card"
import { FeaturedPostCard } from "@/components/featured-post-card"

export const metadata: Metadata = {
  title: "Sanctuary Happenings",
}

export default function SanctuaryHappeningsPage() {
  const featured = posts.find((post) => post.featured)
  const rest = posts.filter((post) => !post.featured)

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">About</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Sanctuary Happenings</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Rescue stories, project updates, and other news from around the sanctuary.
      </p>

      {featured && (
        <div className="mt-8">
          <FeaturedPostCard post={featured} />
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
