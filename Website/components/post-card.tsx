import Image from "next/image"
import Link from "next/link"
import { CalendarDays } from "lucide-react"

import type { SanctuaryPost } from "@/lib/data/posts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function PostCard({ post }: { post: SanctuaryPost }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden py-0">
      <Link href={`/about/happenings/${post.slug}`} className="contents">
        {post.image ? (
          <div className="relative aspect-3/2">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex aspect-3/2 items-center justify-center bg-muted text-center text-xs text-muted-foreground">
            Photo coming soon
          </div>
        )}
        <CardHeader className="pt-4">
          <CardTitle>{post.title}</CardTitle>
          <CardDescription className="flex items-center gap-1.5 pt-1">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            {post.date}
          </CardDescription>
        </CardHeader>
      </Link>
      <CardContent className="text-sm text-muted-foreground">{post.excerpt}</CardContent>
      <CardFooter className="mt-auto pb-4">
        <Link
          href={`/about/happenings/${post.slug}`}
          className="text-sm font-medium text-primary underline underline-offset-2 hover:no-underline"
        >
          Read more →
        </Link>
      </CardFooter>
    </Card>
  )
}
