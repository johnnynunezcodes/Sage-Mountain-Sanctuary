import Image from "next/image"
import Link from "next/link"
import { CalendarDays } from "lucide-react"

import type { SanctuaryPost } from "@/lib/data/posts"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// A wider, more prominent card for a single pinned/featured post — used on
// the Sanctuary Happenings listing page above the regular grid of PostCards.
export function FeaturedPostCard({ post }: { post: SanctuaryPost }) {
  const href = post.href ?? `/about/happenings/${post.slug}`

  return (
    <Card className="overflow-hidden py-0">
      <Link href={href} className="grid sm:grid-cols-2">
        {post.image ? (
          <div className="relative aspect-3/2 sm:aspect-auto">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex aspect-3/2 items-center justify-center bg-muted text-center text-xs text-muted-foreground sm:aspect-auto">
            Photo coming soon
          </div>
        )}
        <CardContent className="flex flex-col justify-center gap-3 py-6">
          <Badge variant="secondary" className="w-fit">
            Featured
          </Badge>
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            {post.date}
          </p>
          <p className="text-muted-foreground">{post.excerpt}</p>
          <span className="text-sm font-medium text-primary underline underline-offset-2">
            Read more →
          </span>
        </CardContent>
      </Link>
    </Card>
  )
}
