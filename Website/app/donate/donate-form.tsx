"use client"

import * as React from "react"
import { Plus, X } from "lucide-react"
import { useSearchParams } from "next/navigation"

import { animals } from "@/lib/data/animals"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const amounts = ["25", "50", "100", "other"] as const

export function DonateForm() {
  const searchParams = useSearchParams()
  const initialMode = searchParams.get("mode") === "sponsor" ? "sponsor" : "general"
  const initialAnimal = searchParams.get("animal") ?? animals[0]?.slug

  return (
    <Tabs defaultValue={initialMode} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="general">General Donation</TabsTrigger>
        <TabsTrigger value="sponsor">Sponsor an Animal</TabsTrigger>
      </TabsList>

      <TabsContent value="general" className="mt-6">
        <GeneralDonationCard />
      </TabsContent>
      <TabsContent value="sponsor" className="mt-6">
        <SponsorCard defaultAnimal={initialAnimal} />
      </TabsContent>
    </Tabs>
  )
}

function GeneralDonationCard() {
  const [amount, setAmount] = React.useState<string>("50")
  const [frequency, setFrequency] = React.useState<string>("one-time")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Make a general donation</CardTitle>
        <CardDescription>
          Supports day-to-day animal care, feed, medical costs, and sanctuary upkeep.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div>
          <Label className="mb-2 block">Frequency</Label>
          <RadioGroup value={frequency} onValueChange={setFrequency} className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="one-time" id="freq-one-time" />
              <Label htmlFor="freq-one-time" className="font-normal">One-time</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="monthly" id="freq-monthly" />
              <Label htmlFor="freq-monthly" className="font-normal">Monthly</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="biweekly" id="freq-biweekly" />
              <Label htmlFor="freq-biweekly" className="font-normal">Every 2 weeks</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="mb-2 block">Amount</Label>
          <RadioGroup value={amount} onValueChange={setAmount} className="flex flex-wrap gap-4">
            {amounts.map((value) => (
              <div key={value} className="flex items-center gap-2">
                <RadioGroupItem value={value} id={`amount-${value}`} />
                <Label htmlFor={`amount-${value}`} className="font-normal">
                  {value === "other" ? "Other" : `$${value}`}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Alert>
          <AlertTitle>Payments aren&apos;t connected yet</AlertTitle>
          <AlertDescription>
            This is a preview of the donation flow — no payment processor is wired up yet, so
            nothing will be charged.
          </AlertDescription>
        </Alert>

        <Button
          size="lg"
          disabled
          title="Payment processing isn't connected yet"
          className="w-full sm:w-fit"
        >
          Donate — Coming Soon
        </Button>
      </CardContent>
    </Card>
  )
}

type SponsorRow = {
  id: string
  animalSlug: string
  frequency: string
}

function makeSponsorRow(animalSlug: string): SponsorRow {
  return {
    id: `${animalSlug}-${Math.random().toString(36).slice(2, 8)}`,
    animalSlug,
    frequency: "monthly",
  }
}

function SponsorCard({ defaultAnimal }: { defaultAnimal?: string }) {
  const [rows, setRows] = React.useState<SponsorRow[]>(() => [
    makeSponsorRow(defaultAnimal ?? animals[0]?.slug ?? ""),
  ])

  const updateRow = (id: string, patch: Partial<SponsorRow>) => {
    setRows((prev) => prev.map((row) => (row.id === id ? { ...row, ...patch } : row)))
  }

  const removeRow = (id: string) => {
    setRows((prev) => (prev.length > 1 ? prev.filter((row) => row.id !== id) : prev))
  }

  const addRow = () => {
    const usedSlugs = new Set(rows.map((row) => row.animalSlug))
    const nextAnimal = animals.find((animal) => !usedSlugs.has(animal.slug)) ?? animals[0]
    setRows((prev) => [...prev, makeSponsorRow(nextAnimal?.slug ?? "")])
  }

  const selectedAnimals = rows
    .map((row) => animals.find((a) => a.slug === row.animalSlug))
    .filter((animal): animal is (typeof animals)[number] => Boolean(animal))

  const canAddMore = rows.length < animals.length

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sponsor an animal</CardTitle>
        <CardDescription>
          Give one or more animals ongoing, dedicated support — billed monthly or every two
          weeks.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {rows.map((row, index) => {
          const selected = animals.find((a) => a.slug === row.animalSlug)
          return (
            <React.Fragment key={row.id}>
              {index > 0 && <Separator />}
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <Label className="mb-2 block">Animal</Label>
                    <Select
                      value={row.animalSlug}
                      onValueChange={(value) =>
                        updateRow(row.id, { animalSlug: value ?? row.animalSlug })
                      }
                    >
                      <SelectTrigger className="w-full sm:w-64">
                        <SelectValue placeholder="Choose an animal">
                          {(value: string) => {
                            const match = animals.find((animal) => animal.slug === value)
                            return match ? `${match.name} · ${match.speciesLabel}` : value
                          }}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {animals.map((animal) => (
                          <SelectItem key={animal.slug} value={animal.slug}>
                            {animal.name} · {animal.speciesLabel}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {selected && (
                      <p className="mt-2 text-sm text-muted-foreground">{selected.story}</p>
                    )}
                  </div>
                  {rows.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="mt-6 shrink-0"
                      onClick={() => removeRow(row.id)}
                      title={`Remove ${selected?.name ?? "animal"}`}
                    >
                      <X className="size-4" />
                      <span className="sr-only">Remove {selected?.name ?? "animal"}</span>
                    </Button>
                  )}
                </div>

                <div>
                  <Label className="mb-2 block">Billing frequency</Label>
                  <RadioGroup
                    value={row.frequency}
                    onValueChange={(value) => updateRow(row.id, { frequency: value ?? row.frequency })}
                    className="flex flex-wrap gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="monthly" id={`sponsor-freq-monthly-${row.id}`} />
                      <Label htmlFor={`sponsor-freq-monthly-${row.id}`} className="font-normal">
                        Monthly
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="biweekly" id={`sponsor-freq-biweekly-${row.id}`} />
                      <Label htmlFor={`sponsor-freq-biweekly-${row.id}`} className="font-normal">
                        Every 2 weeks
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </React.Fragment>
          )
        })}

        <Button
          variant="outline"
          onClick={addRow}
          disabled={!canAddMore}
          className="w-full sm:w-fit"
        >
          <Plus className="size-4" />
          Add another animal
        </Button>

        <Alert>
          <AlertTitle>Payments aren&apos;t connected yet</AlertTitle>
          <AlertDescription>
            This is a preview of the sponsorship flow — no payment processor is wired up yet, so
            nothing will be charged. See the Sponsorship &amp; Donation Policy draft for what&apos;s
            still being decided.
          </AlertDescription>
        </Alert>

        <Button
          size="lg"
          disabled
          title="Payment processing isn't connected yet"
          className="w-full sm:w-fit"
        >
          {selectedAnimals.length > 0
            ? `Sponsor ${selectedAnimals.map((a) => a.name).join(", ")} — Coming Soon`
            : "Coming Soon"}
        </Button>
      </CardContent>
    </Card>
  )
}
