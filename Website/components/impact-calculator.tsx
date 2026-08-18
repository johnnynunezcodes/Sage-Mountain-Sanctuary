"use client"

import * as React from "react"
import { Droplets, Factory, Fish, LandPlot, PawPrint } from "lucide-react"

// Time slider: linear in months up to a year, then yearly after that.
const MONTH_STEPS = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120,
]

// Daily savings from switching to a vegan diet. Each figure is pulled from a
// distinct, real source rather than one recycled "commonly cited" number —
// see the citations rendered below the stat cards for exact sourcing and
// what baseline each one is compared against. A "pounds of grain" figure
// used to appear here too; it's been removed because grain:meat conversion
// ratios published in the literature range from roughly 0.3 to 16 lbs of
// grain per lb of meat depending on methodology, so no single daily number
// is defensible (see the Vegetarian Resource Group's own writeup on why).
const DAILY_RATES = {
  water: 657, // gallons — U.S. average diet vs. vegan diet
  land: 29.5, // sq ft of cropland — meat-based vs. lacto-ovo-vegetarian diet
  co2: 9.5, // lbs — high-meat diet vs. vegan diet
  animals: 25 / 365, // land animals — per-vegetarian annual savings, spread daily
  fishLow: 346 / 365, // fish & shellfish, low end of annual estimate, spread daily
  fishHigh: 557 / 365, // fish & shellfish, high end of annual estimate, spread daily
}

function monthLabel(months: number) {
  if (months === 0) return "Just starting"
  if (months <= 12) return `${months} month${months === 1 ? "" : "s"}`
  const years = months / 12
  return `${years} year${years === 1 ? "" : "s"}`
}

function formatNumber(n: number) {
  return Math.round(n).toLocaleString()
}

export function ImpactCalculator() {
  const [monthIndex, setMonthIndex] = React.useState(1) // default: 1 month

  const months = MONTH_STEPS[monthIndex]
  const days = months * 30

  const stats = {
    water: DAILY_RATES.water * days,
    land: DAILY_RATES.land * days,
    co2: DAILY_RATES.co2 * days,
    animals: DAILY_RATES.animals * days,
    fishLow: DAILY_RATES.fishLow * days,
    fishHigh: DAILY_RATES.fishHigh * days,
  }

  return (
    <div className="flex flex-col gap-16">
      <section>
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          The vegan impact calculator
        </p>
        <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">See what adds up over time</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Drag the slider to see the estimated environmental impact of a vegan diet over
          time — starting in months, then years.
        </p>

        <div className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
          <div className="flex items-center justify-between gap-4">
            <label htmlFor="month-slider" className="text-sm font-medium">
              Time on a vegan diet
            </label>
            <span className="text-lg font-semibold text-primary">{monthLabel(months)}</span>
          </div>
          <input
            id="month-slider"
            type="range"
            min={0}
            max={MONTH_STEPS.length - 1}
            step={1}
            value={monthIndex}
            onChange={(e) => setMonthIndex(Number(e.target.value))}
            className="mt-4 w-full"
            style={{ accentColor: "var(--primary)" }}
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>0 months</span>
            <span>10 years</span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <StatCard icon={Droplets} value={formatNumber(stats.water)} label="gallons of water" />
            <StatCard icon={LandPlot} value={formatNumber(stats.land)} label="sq ft of land" />
            <StatCard icon={Factory} value={formatNumber(stats.co2)} label="pounds of CO2" />
            <StatCard icon={PawPrint} value={formatNumber(stats.animals)} label="land animals" />
            <StatCard
              icon={Fish}
              value={
                stats.fishLow === stats.fishHigh
                  ? formatNumber(stats.fishLow)
                  : `${formatNumber(stats.fishLow)} – ${formatNumber(stats.fishHigh)}`
              }
              label="fish & shellfish"
            />
          </div>

          <div className="mt-6 space-y-1.5 text-xs text-muted-foreground">
            <p>
              Each figure below comes from a different real source rather than one recycled
              &quot;commonly cited&quot; statistic — we&apos;d rather show you fewer numbers we can
              stand behind than more we can&apos;t.
            </p>
            <p>
              <strong className="font-medium text-foreground">Water</strong> (657 gal/day,
              average U.S. diet vs. vegan diet):{" "}
              <a
                className="underline underline-offset-2 hover:text-foreground"
                href="https://www.watercalculator.org/wp-content/uploads/2020/04/WFC-Methodology-August-2020.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                GRACE Communications Foundation Water Footprint Calculator
              </a>
              , which combines USDA consumption statistics with the peer-reviewed water-footprint
              values in{" "}
              <a
                className="underline underline-offset-2 hover:text-foreground"
                href="https://link.springer.com/article/10.1007/s10021-011-9517-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mekonnen &amp; Hoekstra, &quot;A Global Assessment of the Water Footprint of Farm
                Animal Products,&quot; Ecosystems 15 (2012)
              </a>
              .
            </p>
            <p>
              <strong className="font-medium text-foreground">Land</strong> (≈30 sq ft/day of
              cropland, meat-based vs. lacto-ovo-vegetarian diet):{" "}
              <a
                className="underline underline-offset-2 hover:text-foreground"
                href="https://pubmed.ncbi.nlm.nih.gov/12936963/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pimentel &amp; Pimentel, &quot;Sustainability of meat-based and plant-based diets
                and the environment,&quot; American Journal of Clinical Nutrition 78 (2003)
              </a>
              . That study compares to a vegetarian diet (which still uses land for dairy and
              eggs), not a fully vegan one, so this likely understates real savings — a 2018{" "}
              <em>Science</em> meta-analysis of 38,000 farms found a full shift to vegan diets
              would cut global agricultural land use by about 75%. See{" "}
              <a
                className="underline underline-offset-2 hover:text-foreground"
                href="https://ourworldindata.org/land-use-diets"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our World in Data, on Poore &amp; Nemecek (2018)
              </a>
              .
            </p>
            <p>
              <strong className="font-medium text-foreground">CO2</strong> (≈9.5 lbs/day,
              meat-heavy diet vs. vegan diet):{" "}
              <a
                className="underline underline-offset-2 hover:text-foreground"
                href="https://link.springer.com/article/10.1007/s10584-014-1169-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scarborough et al., Climatic Change 125 (2014)
              </a>
              , corroborated by a larger 2023 follow-up (55,504 people) in{" "}
              <a
                className="underline underline-offset-2 hover:text-foreground"
                href="https://www.nature.com/articles/s43016-023-00795-w"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nature Food
              </a>
              , which found vegans&apos; overall footprint is roughly a quarter of a high
              meat-eater&apos;s.
            </p>
            <p>
              <strong className="font-medium text-foreground">Land animals</strong> (≈25/year,
              mostly chickens):{" "}
              <a
                className="underline underline-offset-2 hover:text-foreground"
                href="https://countinganimals.com/how-many-animals-does-a-vegetarian-save/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Harish Sethu&apos;s analysis of USDA slaughter data
              </a>
              . This is independent analysis, not a peer-reviewed study, though it's built
              directly on the same government slaughter statistics the peer-reviewed estimates
              use, and it's U.S.-specific — which matters, since Americans eat far more chicken
              per capita than the global average.{" "}
              <a
                className="underline underline-offset-2 hover:text-foreground"
                href="https://animalcharityevaluators.org/research/reports/dietary-impacts/effects-of-diet-choices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Animal Charity Evaluators
              </a>
              , a research nonprofit, separately estimated about 12 land animals per plant-based
              year using 2018 global data — lower mainly because it averages in countries that eat
              far less meat than the U.S. does. We use the U.S. figure since it better reflects
              our visitors.
            </p>
            <p>
              <strong className="font-medium text-foreground">Fish &amp; shellfish</strong>{" "}
              (≈346–557/year): also from{" "}
              <a
                className="underline underline-offset-2 hover:text-foreground"
                href="https://countinganimals.com/how-many-animals-does-a-vegetarian-save/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sethu&apos;s analysis
              </a>
              , combining USDA and NOAA seafood data. It dwarfs the land-animal number mostly
              because of &quot;feed fish&quot; — small wild-caught fish ground up to feed farmed
              fish and shrimp — and bycatch, animals unintentionally caught and killed without
              being eaten at all. We show it as a range, not a single number, because those two
              categories are the least certain part of the whole estimate.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg bg-background p-4 text-center ring-1 ring-border">
      <Icon className="size-6 text-primary" aria-hidden="true" />
      <span className="text-xl font-semibold">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}
