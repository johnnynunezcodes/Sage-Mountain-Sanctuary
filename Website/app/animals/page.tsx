"use client"

import * as React from "react"

import { animals, speciesList } from "@/lib/data/animals"
import { AnimalCard } from "@/components/animal-card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function AnimalsPage() {
  const [filterValues, setFilterValues] = React.useState<string[]>(["all"])
  const filter = filterValues[0] ?? "all"

  const visible =
    filter === "all" ? animals : animals.filter((animal) => animal.species === filter)

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">
        Meet the Animals
      </p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
        Every animal here has a name and a story
      </h1>

      <Alert className="mt-6">
        <AlertTitle>Real resident roster</AlertTitle>
        <AlertDescription>
          Bios and stories are the sanctuary&apos;s real animals, pulled from the live site. About
          half have a confirmed photo so far — the rest are still &quot;coming soon.&quot;
        </AlertDescription>
      </Alert>

      <ToggleGroup
        value={filterValues}
        onValueChange={(value) => setFilterValues(value.length ? value : ["all"])}
        variant="outline"
        className="mt-8 flex-wrap justify-start"
      >
        <ToggleGroupItem value="all">All</ToggleGroupItem>
        {speciesList.map((s) => (
          <ToggleGroupItem key={s.id} value={s.id}>
            {s.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((animal) => (
          <AnimalCard key={animal.slug} animal={animal} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-8 text-center text-sm text-muted-foreground">
          No animals in this category yet.
        </p>
      )}
    </div>
  )
}
