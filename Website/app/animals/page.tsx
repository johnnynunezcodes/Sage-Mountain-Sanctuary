"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

import { animals, speciesList } from "@/lib/data/animals"
import { AnimalCard } from "@/components/animal-card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function AnimalsPage() {
  const [filterValues, setFilterValues] = React.useState<string[]>(["all"])
  const filter = filterValues[0] ?? "all"

  // Which species section is expanded when the "All" filter is active —
  // only one section is open at a time, accordion-style.
  const [openSection, setOpenSection] = React.useState<string>(speciesList[0]?.id ?? "")
  const sectionRefs = React.useRef<Record<string, HTMLDivElement | null>>({})

  // When a section opens, scroll it to the top of the viewport (just below
  // the sticky header) instead of leaving it wherever the accordion layout
  // shift happened to land it.
  React.useEffect(() => {
    if (!openSection) return
    sectionRefs.current[openSection]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }, [openSection])

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

      <div className="relative mt-6 aspect-21/9 overflow-hidden rounded-xl">
        <Image
          src="/images/animals/pig/piglets-birthday.jpg"
          alt="One of the pigs celebrating a birthday with a slice of cake, surrounded by curious chickens"
          fill
          sizes="(min-width: 1024px) 1152px, 100vw"
          className="object-cover"
          priority
        />
      </div>

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

      {filter === "all" ? (
        <div className="mt-8 flex flex-col gap-4">
          {speciesList.map((s) => {
            const group = animals.filter((animal) => animal.species === s.id)
            if (group.length === 0) return null
            const isOpen = openSection === s.id

            return (
              <div
                key={s.id}
                ref={(el) => {
                  sectionRefs.current[s.id] = el
                }}
                className="scroll-mt-20 rounded-xl border border-border"
              >
                <button
                  type="button"
                  onClick={() => setOpenSection(isOpen ? "" : s.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                >
                  <span className="text-lg font-semibold">
                    {s.label}
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      ({group.length})
                    </span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="grid gap-6 border-t border-border px-4 pt-6 pb-6 sm:grid-cols-2 lg:grid-cols-3">
                    {group.map((animal) => (
                      <AnimalCard key={animal.slug} animal={animal} />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((animal) => (
            <AnimalCard key={animal.slug} animal={animal} />
          ))}
        </div>
      )}

      {visible.length === 0 && (
        <p className="mt-8 text-center text-sm text-muted-foreground">
          No animals in this category yet.
        </p>
      )}
    </div>
  )
}
