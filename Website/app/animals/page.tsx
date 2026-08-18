"use client"

import * as React from "react"

import { animals, speciesList } from "@/lib/data/animals"
import { AnimalCard } from "@/components/animal-card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function AnimalsPage() {
  const [filter, setFilter] = React.useState("all")

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
        <AlertTitle>Placeholder profiles</AlertTitle>
        <AlertDescription>
          One example animal per species below. Real bios and photos will replace these before
          launch.
        </AlertDescription>
      </Alert>

      <ToggleGroup
        type="single"
        value={filter}
        onValueChange={(value) => value && setFilter(value)}
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
