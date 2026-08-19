import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CalendarDays } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "In Loving Memory of Smooch",
  description:
    "With a heavy heart, we announce that our baby boy Smooch is no longer with us — remembering seven wonderful years of his love and gentleness at Sage Mountain.",
}

const galleryImages = [
  "/images/smooch/smooch-gallery-01.jpg",
  "/images/smooch/smooch-gallery-02.jpg",
  "/images/smooch/smooch-gallery-03.jpg",
  "/images/smooch/smooch-gallery-04.jpg",
  "/images/smooch/smooch-gallery-05.jpg",
  "/images/smooch/smooch-gallery-06.jpg",
  "/images/smooch/smooch-gallery-07.jpg",
  "/images/smooch/smooch-gallery-08.jpg",
  "/images/smooch/smooch-gallery-09.jpg",
  "/images/smooch/smooch-gallery-10.jpg",
  "/images/smooch/smooch-gallery-11.jpg",
  "/images/smooch/smooch-gallery-12.jpg",
]

export default function InLovingMemoryOfSmoochPage() {
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
        <AlertTitle>Real tribute, pulled from the live site</AlertTitle>
        <AlertDescription>
          This memorial and its photos are real content from sagemtn.org, honoring one of Sage
          Mountain&apos;s longtime residents.
        </AlertDescription>
      </Alert>

      <div className="relative mt-6 aspect-4/5 overflow-hidden rounded-xl bg-muted">
        <Image
          src="/images/smooch/smooch-hero.jpg"
          alt="Smooch the steer looking toward the camera"
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">In Loving Memory of Smooch</h1>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
        <CalendarDays className="size-3.5" aria-hidden="true" />
        July 6, 2026
      </p>

      <div className="mt-6 space-y-4 text-muted-foreground">
        <p>With a heavy heart, we announce that our baby boy Smooch is no longer with us.</p>
        <p>
          Smooch had quite the life with us here at Sage Mountain. He was originally from a
          neighboring farm, where he met his person, Kerri. She met him through the fence one
          day, he gave her a big ole smooch, and it was that kiss that saved his life.
        </p>
        <p>
          She would visit him often, giving him treats and loves from the other side of the
          fence. His owners at the time let her know that his last day was coming soon, that
          he&apos;d be headed to slaughter. Luckily, she convinced them to release Smooch to her!
          Smooch then lived with Kerri for a while before transferring to Sage.
        </p>
        <p>
          We were fortunate enough to have a wonderful 7 years with him and to experience his
          love and gentleness. He was very empathetic, always taking care of the other cattle
          with his smooches as well as the humans who all grew to love and adore him.
        </p>
        <p>
          We tried everything and anything possible we could to heal him, but whatever his body
          was fighting became too debilitating and was too terminal for anyone to fix. He tried
          his best, and he knew that we did too. We helped him cross over to the other side
          compassionately and humanely. He was pain free in his final moments, in the loving
          embrace of his caretakers, Emery, Aaron, Alec, Kade, and Alyssa. We will forever
          cherish every memory and moment that we had with him, and all of the love that he gave
          us over the years.
        </p>
        <p>
          While loosing him hurts immensely, we feel honored to have provided him with one of the
          best lives a cow could have. Thank you so much for following along his journey, and for
          caring about him. The love our community has for him warms our hearts so much. 💗
        </p>
        <p>
          Please share any memories you may have with our boy, Smooch, with us via email at{" "}
          <a href="mailto:info@sagemtn.org" className="text-primary underline underline-offset-2">
            info@sagemtn.org
          </a>
          .
        </p>
        <p>
          Thank you so much for supporting our beloved Smooch. Rest in peace Smooch, we love you
          and miss you forever. 🤍🐮🪽
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Photo Gallery</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          A few of our favorite memories with Smooch over the years.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {galleryImages.map((src, i) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={src}
                alt={`Smooch the steer, photo ${i + 1}`}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 flex justify-center">
        <Button render={<Link href="/donate" />} nativeButton={false} variant="outline" size="lg">
          Make a donation in Smooch&apos;s honor
        </Button>
      </div>
    </div>
  )
}
