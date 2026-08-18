// Estimated monthly cost-of-care breakdowns shown on individual animal
// sponsor pages, so donors can see roughly what their sponsorship supports.
//
// These are ESTIMATES, not itemized invoices — based on typical Park City /
// northern Utah pricing for feed, hay, bedding, and large-animal veterinary
// care (e.g. Utah alfalfa hay running ~$200-260/ton and grass hay ~$180-220/
// ton per USDA NASS Utah hay reports), and typical daily intake for each
// species. Costs are shared across the herd/flock in reality; figures here
// are per-animal averages. Update if real sanctuary expense data becomes
// available.

import type { Species } from "./animals"

export type CareCostCategory = "feed" | "bedding" | "treats" | "water" | "vet" | "upkeep"

export interface CareCostItem {
  label: string
  category: CareCostCategory
  amountPerMonth: number
  description: string
}

export const careCostsBySpecies: Record<Species, CareCostItem[]> = {
  cow: [
    {
      label: "Alfalfa hay",
      category: "feed",
      amountPerMonth: 90,
      description:
        "About 800 lb a month — a cow eats roughly 2–2.5% of its body weight a day, and hay is the bulk of that diet.",
    },
    {
      label: "Straw bedding",
      category: "bedding",
      amountPerMonth: 25,
      description: "Fresh straw for their barn stall, replaced regularly for a clean, dry place to rest.",
    },
    {
      label: "Treats & supplements",
      category: "treats",
      amountPerMonth: 15,
      description: "Apples, carrots, and mineral supplements for enrichment and nutrition.",
    },
    {
      label: "Water",
      category: "water",
      amountPerMonth: 10,
      description: "A cow drinks 15–20 gallons a day, more in summer heat.",
    },
    {
      label: "Veterinary & hoof care",
      category: "vet",
      amountPerMonth: 40,
      description: "Routine exams, vaccinations, dental checks, and hoof trimming, plus a reserve for the unexpected.",
    },
    {
      label: "Pasture & shelter upkeep",
      category: "upkeep",
      amountPerMonth: 20,
      description: "Fencing repairs, barn maintenance, and pasture care, shared across the herd.",
    },
  ],

  pig: [
    {
      label: "Feed & grain",
      category: "feed",
      amountPerMonth: 55,
      description: "About 150 lb a month of hog feed — pigs are big eaters and need a balanced grain ration daily.",
    },
    {
      label: "Straw bedding",
      category: "bedding",
      amountPerMonth: 20,
      description: "Deep straw bedding for their favorite pastime — nesting and burrowing in for a nap.",
    },
    {
      label: "Produce & treats",
      category: "treats",
      amountPerMonth: 20,
      description: "Fruit and vegetable scraps pigs happily root through, plus the occasional special treat.",
    },
    {
      label: "Water",
      category: "water",
      amountPerMonth: 8,
      description: "Pigs drink several gallons a day and love a wallow to cool off in summer.",
    },
    {
      label: "Veterinary & hoof care",
      category: "vet",
      amountPerMonth: 35,
      description: "Routine exams, vaccinations, hoof and tusk trims, plus a reserve for the unexpected.",
    },
    {
      label: "Shelter & yard upkeep",
      category: "upkeep",
      amountPerMonth: 20,
      description: "Sturdy shelter and yard maintenance — pigs are strong and hard on fencing and bedding areas.",
    },
  ],

  sheep: [
    {
      label: "Grass hay",
      category: "feed",
      amountPerMonth: 15,
      description: "Grass hay, not rich alfalfa — sheep need a lower-calcium diet to stay healthy.",
    },
    {
      label: "Straw bedding",
      category: "bedding",
      amountPerMonth: 15,
      description: "Clean straw bedding in their shelter, especially through Park City's snowy winters.",
    },
    {
      label: "Minerals & treats",
      category: "treats",
      amountPerMonth: 10,
      description: "Sheep-safe mineral supplements (no copper, which is toxic to sheep) and the occasional treat.",
    },
    {
      label: "Water",
      category: "water",
      amountPerMonth: 5,
      description: "A steady supply of clean water, year-round.",
    },
    {
      label: "Veterinary, hoof & shearing care",
      category: "vet",
      amountPerMonth: 25,
      description: "Routine exams, vaccinations, regular hoof trims, and shearing so they stay comfortable in summer.",
    },
    {
      label: "Pasture & shelter upkeep",
      category: "upkeep",
      amountPerMonth: 15,
      description: "Fencing and shelter maintenance, shared across the flock.",
    },
  ],

  goat: [
    {
      label: "Hay & browse",
      category: "feed",
      amountPerMonth: 18,
      description: "Grass hay plus branches and brush to browse on — goats prefer to browse over grazing flat pasture.",
    },
    {
      label: "Straw bedding",
      category: "bedding",
      amountPerMonth: 15,
      description: "Dry straw bedding in their shelter, especially through Park City's snowy winters.",
    },
    {
      label: "Treats & minerals",
      category: "treats",
      amountPerMonth: 10,
      description: "Goat-safe mineral supplements and the occasional treat — goats are famously curious eaters.",
    },
    {
      label: "Water",
      category: "water",
      amountPerMonth: 5,
      description: "A steady supply of clean water, year-round.",
    },
    {
      label: "Veterinary & hoof care",
      category: "vet",
      amountPerMonth: 25,
      description: "Routine exams, vaccinations, and hoof trims every 6–8 weeks, plus a reserve for the unexpected.",
    },
    {
      label: "Pasture & fencing upkeep",
      category: "upkeep",
      amountPerMonth: 20,
      description: "Goats are notorious escape artists, so their fencing needs extra care and regular reinforcement.",
    },
  ],

  turkey: [
    {
      label: "Feed",
      category: "feed",
      amountPerMonth: 13,
      description: "A daily ration of poultry feed, plus fresh greens.",
    },
    {
      label: "Straw & shavings bedding",
      category: "bedding",
      amountPerMonth: 10,
      description: "Soft bedding in their coop, kept clean and dry.",
    },
    {
      label: "Treats & greens",
      category: "treats",
      amountPerMonth: 5,
      description: "Fresh greens and the occasional favorite treat.",
    },
    {
      label: "Water",
      category: "water",
      amountPerMonth: 3,
      description: "Clean water available at all times.",
    },
    {
      label: "Veterinary care",
      category: "vet",
      amountPerMonth: 20,
      description:
        "Routine exams and extra joint and mobility support — many of our turkeys were bred to grow far larger than their frames were built for.",
    },
    {
      label: "Coop & yard upkeep",
      category: "upkeep",
      amountPerMonth: 10,
      description: "Coop maintenance and a safe yard, shared across the flock.",
    },
  ],

  chicken: [
    {
      label: "Feed",
      category: "feed",
      amountPerMonth: 3,
      description: "A daily ration of layer feed, plus fresh greens.",
    },
    {
      label: "Straw & shavings bedding",
      category: "bedding",
      amountPerMonth: 5,
      description: "Soft bedding in the coop and nesting boxes, kept clean and dry.",
    },
    {
      label: "Treats & scratch",
      category: "treats",
      amountPerMonth: 3,
      description: "Scratch grains, mealworms, and garden scraps for a happy, busy coop.",
    },
    {
      label: "Water",
      category: "water",
      amountPerMonth: 1,
      description: "Clean water available at all times.",
    },
    {
      label: "Veterinary care",
      category: "vet",
      amountPerMonth: 8,
      description: "Routine health checks and care for age- or injury-related needs, plus a reserve for the unexpected.",
    },
    {
      label: "Coop upkeep",
      category: "upkeep",
      amountPerMonth: 5,
      description: "Coop maintenance and predator-proofing, shared across the flock.",
    },
  ],
}

export function getCareCosts(species: Species): CareCostItem[] {
  return careCostsBySpecies[species]
}

export function getTotalMonthlyCareCost(species: Species): number {
  return careCostsBySpecies[species].reduce((sum, item) => sum + item.amountPerMonth, 0)
}
