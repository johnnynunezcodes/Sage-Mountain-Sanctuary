"use client"

import * as React from "react"
import Image from "next/image"

import { animals, speciesList } from "@/lib/data/animals"
import { AnimalCard } from "@/components/animal-card"
import { cn } from "@/lib/utils"

export default function AnimalsPage() {
  const [filter, setFilter] = React.useState<string>("all")

  const sidebarItems = [
    { id: "all", label: "All", count: animals.length },
    ...speciesList.map((s) => ({
      id: s.id,
      label: s.label,
      count: animals.filter((a) => a.species === s.id).length,
    })),
  ]

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

      <div className="mt-8 grid gap-8 md:grid-cols-[200px_1fr] md:items-start">
        <nav className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-2 md:sticky md:top-20 md:mx-0 md:flex-col md:gap-0.5 md:overflow-visible md:px-0 md:pb-0">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
              className={cn(
                "shrink-0 rounded-lg px-3 py-2 text-left text-sm whitespace-nowrap transition-colors md:w-full md:whitespace-normal",
                filter === item.id
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              <span className="flex items-center justify-between gap-3">
                <span>{item.label}</span>
                <span className="text-xs opacity-70">{item.count}</span>
              </span>
            </button>
          ))}
        </nav>

        <div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </div>
  )
}
