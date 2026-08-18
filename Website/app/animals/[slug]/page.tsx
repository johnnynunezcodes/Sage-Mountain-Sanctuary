import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Wheat,
  Bed,
  Apple,
  Droplets,
  Stethoscope,
  Fence,
  type LucideIcon,
} from "lucide-react"

import { animals, getAnimalBySlug } from "@/lib/data/animals"
import { getCareCosts, getTotalMonthlyCareCost, type CareCostCategory } from "@/lib/data/care-costs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

const careCostIcons: Record<CareCostCategory, LucideIcon> = {
  feed: Wheat,
  bedding: Bed,
  treats: Apple,
  water: Droplets,
  vet: Stethoscope,
  upkeep: Fence,
}

export function generateStaticParams() {
  return animals.map((animal) => ({ slug: animal.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const animal = getAnimalBySlug(slug)
  if (!animal) return {}
  return {
    title: `${animal.name} — ${animal.speciesLabel}`,
    description: animal.story,
  }
}

export default async function AnimalPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const animal = getAnimalBySlug(slug)
  if (!animal) notFound()

  const photos = animal.photoUrl ? [animal.photoUrl] : []
  const careCosts = getCareCosts(animal.species)
  const totalMonthlyCareCost = getTotalMonthlyCareCost(animal.species)

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link
        href="/animals"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Meet the Animals
      </Link>

      <div className="mt-6 grid gap-8 sm:grid-cols-2 sm:items-start">
        {photos.length > 0 ? (
          <div className="relative aspect-4/3 overflow-hidden rounded-xl">
            <Image
              src={photos[0]}
              alt={animal.name}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className="flex aspect-4/3 items-center justify-center rounded-xl bg-muted text-center text-sm text-muted-foreground">
            Photo of {animal.name} coming soon
          </div>
        )}

        <div>
          <Badge variant="secondary">{animal.speciesLabel}</Badge>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">{animal.name}</h1>

          <p className="mt-4 text-sm text-muted-foreground">{animal.story}</p>

          <Separator className="my-4" />

          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Personality: </span>
            {animal.personality}
          </p>

          {animal.sponsorable ? (
            <Button
              render={
                <Link href={`/donate?mode=sponsor&animal=${encodeURIComponent(animal.slug)}`} />
              }
              nativeButton={false}
              className="mt-6 w-full sm:w-auto"
            >
              Sponsor {animal.name}
              {animal.sponsorshipAmount ? ` — ${animal.sponsorshipAmount}` : ""}
            </Button>
          ) : (
            <p className="mt-6 text-sm text-muted-foreground italic">
              {animal.name} isn&apos;t open for sponsorship right now.
            </p>
          )}
        </div>
      </div>

      <Separator className="my-10" />

      <div>
        <h2 className="text-lg font-semibold">
          What sponsoring {animal.name} supports
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Estimated monthly cost of care, based on typical Park City, Utah-area pricing for feed,
          bedding, and veterinary care. Costs are shared across the herd or flock, so figures below
          are per-animal averages, not itemized invoices.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {careCosts.map((item) => {
            const Icon = careCostIcons[item.category]
            return (
              <Card key={item.label} size="sm">
                <CardContent className="flex gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-4.5" />
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-medium">{item.label}</span>
                      <span className="shrink-0 text-sm font-medium text-muted-foreground">
                        ~${item.amountPerMonth}/mo
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-lg bg-muted px-4 py-3">
          <span className="text-sm font-medium">Estimated total cost of care</span>
          <span className="text-sm font-semibold">~${totalMonthlyCareCost}/month</span>
        </div>
      </div>

      <Separator className="my-10" />

      <div>
        <h2 className="text-lg font-semibold">More photos</h2>
        {photos.length > 1 ? (
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {photos.slice(1).map((photo, index) => (
              <div key={photo} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={photo}
                  alt={`${animal.name}, photo ${index + 2}`}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">
            More photos of {animal.name} are coming soon.
          </p>
        )}
      </div>
    </div>
  )
}
