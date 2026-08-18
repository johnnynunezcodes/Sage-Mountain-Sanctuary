import { ImpactCalculator } from "@/components/impact-calculator"

export const metadata = {
  title: "Learn",
  description:
    "See the real, cited impact of a vegan diet over time — and how it compares to other everyday footprints.",
}

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">Learn</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
        More ways your choices help animals
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Every resident at Sage Mountain is here because of choices someone made on their behalf.
        Diet is one of the biggest levers any of us can pull for animals, land, and water — here&apos;s
        what that looks like over time, based on real, cited research rather than round numbers.
      </p>

      <div className="mt-12">
        <ImpactCalculator />
      </div>
    </div>
  )
}
