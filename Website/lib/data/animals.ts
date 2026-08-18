// Placeholder/example animal data, mirrored from the parent
// Sage-Mountain-Sanctuary/Animals/*.md reference files. Replace with real
// animals, bios, and photo paths before launch — keep this file and those
// markdown files in sync.
//
// `species` values double as the filter categories on /animals and the
// options in the sponsorship picker on /donate.

export type Species = "cow" | "pig" | "sheep" | "goat" | "turkey" | "chicken"

export interface Animal {
  slug: string
  name: string
  species: Species
  speciesLabel: string
  story: string
  personality: string
  sponsorable: boolean
}

export const speciesList: { id: Species; label: string }[] = [
  { id: "cow", label: "Cows" },
  { id: "pig", label: "Pigs" },
  { id: "sheep", label: "Sheep" },
  { id: "goat", label: "Goats" },
  { id: "turkey", label: "Turkeys" },
  { id: "chicken", label: "Chickens" },
]

export const animals: Animal[] = [
  {
    slug: "clementine",
    name: "Clementine",
    species: "cow",
    speciesLabel: "Cow",
    story:
      "Placeholder rescue story — replace with Clementine's (or the real animal's) actual background.",
    personality: "Gentle, curious, loves head scratches.",
    sponsorable: true,
  },
  {
    slug: "biscuit",
    name: "Biscuit",
    species: "pig",
    speciesLabel: "Pig",
    story:
      "Placeholder rescue story — replace with Biscuit's (or the real animal's) actual background.",
    personality: "Food-motivated, sociable, enjoys mud baths.",
    sponsorable: true,
  },
  {
    slug: "willow",
    name: "Willow",
    species: "sheep",
    speciesLabel: "Sheep",
    story:
      "Placeholder rescue story — replace with Willow's (or the real animal's) actual background.",
    personality: "Shy at first, warms up quickly, follows the herd.",
    sponsorable: true,
  },
  {
    slug: "ziggy",
    name: "Ziggy",
    species: "goat",
    speciesLabel: "Goat",
    story:
      "Placeholder rescue story — replace with Ziggy's (or the real animal's) actual background.",
    personality: "Mischievous, climbs everything, loves attention.",
    sponsorable: true,
  },
  {
    slug: "cranberry",
    name: "Cranberry",
    species: "turkey",
    speciesLabel: "Turkey",
    story:
      "Placeholder rescue story — replace with Cranberry's (or the real animal's) actual background.",
    personality: "Chatty, struts around the yard, bonds closely with caretakers.",
    sponsorable: true,
  },
  {
    slug: "nugget",
    name: "Nugget",
    species: "chicken",
    speciesLabel: "Chicken",
    story:
      "Placeholder rescue story — replace with Nugget's (or the real animal's) actual background.",
    personality: "Bold, first to greet visitors, loves dust baths.",
    sponsorable: true,
  },
]
