import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarDays } from "lucide-react"

import { posts, getPostBySlug } from "@/lib/data/posts"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function generateStaticParams() {
  // Posts with an `href` override (like "the-barn") have their own bespoke
  // page elsewhere and must be excluded here, or Next.js would try to
  // statically generate this generic template at the same path too.
  return posts.filter((post) => !post.href).map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function SanctuaryHappeningPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  // Posts with an `href` override live at their own bespoke page — don't
  // render this generic template for them even if the slug matches.
  if (!post || post.href) notFound()

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/about/happenings"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Sanctuary Happenings
      </Link>

      <Alert className="mt-6">
        <AlertTitle>Placeholder post</AlertTitle>
        <AlertDescription>
          This is an example post showing how Sanctuary Happenings will look — replace it with
          real content once it&apos;s written.
        </AlertDescription>
      </Alert>

      {post.image ? (
        <div className="relative mt-6 aspect-3/2 overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      ) : null}

      <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">{post.title}</h1>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
        <CalendarDays className="size-3.5" aria-hidden="true" />
        {post.date}
      </p>

      {post.body && <p className="mt-6 text-muted-foreground">{post.body}</p>}
    </div>
  )
}
