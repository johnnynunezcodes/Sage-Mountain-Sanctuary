import Image from "next/image"
import Link from "next/link"

import type { Animal } from "@/lib/data/animals"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <Card data-species={animal.species} className="flex h-full flex-col overflow-hidden py-0">
      {animal.photoUrl ? (
        <div className="relative aspect-4/3">
          <Image
            src={animal.photoUrl}
            alt={animal.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex aspect-4/3 items-center justify-center bg-muted text-center text-xs text-muted-foreground">
          Photo of {animal.name} coming soon
        </div>
      )}
      <CardHeader className="pt-4">
        <CardTitle>{animal.name}</CardTitle>
        <CardAction>
          <Badge variant="secondary">{animal.speciesLabel}</Badge>
        </CardAction>
        <CardDescription>{animal.story}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">Personality: </span>
        {animal.personality}
      </CardContent>
      <CardFooter className="mt-auto pb-4">
        <Button
          render={<Link href={`/donate?mode=sponsor&animal=${encodeURIComponent(animal.slug)}`} />}
          nativeButton={false}
          variant="outline"
          className="w-full"
        >
          Sponsor {animal.name}
        </Button>
      </CardFooter>
    </Card>
  )
}
