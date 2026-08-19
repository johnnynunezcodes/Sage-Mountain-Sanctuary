import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CalendarDays } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "In Loving Memory of Wilma Jean",
  description:
    "Wilma Jean lived a happy 8 years with us at Sage Mountain alongside her soul mate Ponyboy — remembering our sassy queen, who took her last breath peacefully in August 2025.",
}

const galleryImages = [
  "/images/wilma-jean/wilma-gallery-01.jpg",
  "/images/wilma-jean/wilma-gallery-02.jpg",
  "/images/wilma-jean/wilma-gallery-03.jpg",
  "/images/wilma-jean/wilma-gallery-04.jpg",
  "/images/wilma-jean/wilma-gallery-05.jpg",
  "/images/wilma-jean/wilma-gallery-06.jpg",
  "/images/wilma-jean/wilma-gallery-07.jpg",
  "/images/wilma-jean/wilma-gallery-08.jpg",
]

export default function InLovingMemoryOfWilmaJeanPage() {
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

      <div className="relative mt-6 aspect-3/2 overflow-hidden rounded-xl bg-muted">
        <Image
          src="/images/wilma-jean/wilma-hero.jpg"
          alt="Wilma Jean the pig with Co-Founder Lauren Lockey"
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Wilma Jean and Co-Founder Lauren Lockey.
      </p>

      <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">In Loving Memory of Wilma Jean</h1>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
        <CalendarDays className="size-3.5" aria-hidden="true" />
        October 16, 2025
      </p>

      <div className="mt-6 space-y-4 text-muted-foreground">
        <p>
          Wilma Jean&apos;s story began at a homestead with a family whose plan for her was to be
          slaughtered for their consumption once she was of optimal weight. But in the midst of
          raising her, the family was overwhelmed with work and unable to give her the proper
          care she needed in her early years. As a result, they reached out to a close relative
          who was able to take her in, and after some time, this individual grew to love Wilma
          Jean and couldn&apos;t stand the thought of her being sent to slaughter. And so the
          relative of the family who was initially raising her had a change of heart and decided
          the best thing for Wilma Jean was to send her to a sanctuary where she would live out
          the rest of her life!
        </p>
        <p>
          Wilma Jean arrived to Sage Mountain with her soul mate, Ponyboy, early 2017. She lived
          a happy 8 years with us, and we&apos;re so grateful for all the time we had her. She
          loved everything in life, from being the boss of the other pigs, to watching the sunset
          every night with Pony, Wilma really knew what it meant to enjoy life and live in the
          moment.
        </p>
        <p>
          In early June this year (2025), she began struggling to stand, and within days, lost
          control of her back legs completely. She made her way back to the first original
          shelter, a place she hadn&apos;t slept in for years, and soon became fully immobile,
          barely able to scoot around the shelter with her front end. That&apos;s where she spent
          her final days, surrounded by love.
        </p>
        <p>
          We did everything we could to keep her comfortable, but she let us know when she was
          ready. Her eyes, her spirit — she told us it was time. The other animals knew too. They
          all surrounded her constantly, as did the people who were close to her, to show up for
          her in her last few moments.
        </p>
        <p>
          Wilma Jean took her last breath peacefully and pain free in August of 2025. She will
          forever be missed and we will forever honor her and her memory.
        </p>
        <p>
          Please share any memories you may have with our sweet girl with us via email at{" "}
          <a href="mailto:info@sagemtn.org" className="text-primary underline underline-offset-2">
            info@sagemtn.org
          </a>
          .
        </p>
        <p>
          Thank you so much for supporting our sassy Queen Wilma Jean. May she forever rest in
          peace and love.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Photo Gallery</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          A few of our favorite memories with Wilma Jean over the years.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {galleryImages.map((src, i) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={src}
                alt={`Wilma Jean the pig, photo ${i + 1}`}
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
          Make a donation in Wilma Jean&apos;s honor
        </Button>
      </div>
    </div>
  )
}
