import Link from "next/link"
import type { Metadata } from "next"
import { Flower2, MapPinned, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Visit",
}

const options = [
  {
    href: "/visit/tour",
    title: "Tour Sage Mountain",
    description: "Meet the animals in person and hear their individual rescue stories.",
    icon: MapPinned,
  },
  {
    href: "/visit/yoga",
    title: "Yoga",
    description: "Practice yoga on the sanctuary grounds, often alongside the animals.",
    icon: Flower2,
  },
  {
    href: "/visit/volunteer",
    title: "Volunteer",
    description: "Join us every Saturday to help care for the sanctuary and its animals.",
    icon: Users,
  },
]

export default function VisitPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">Visit</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
        Come spend time with the animals
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Whether you're here for a guided tour, a yoga class, or a Saturday shift, every visit
        supports the sanctuary.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {options.map((option) => (
          <Card key={option.href}>
            <CardHeader>
              <option.icon className="size-5 text-primary" aria-hidden="true" />
              <CardTitle>{option.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">{option.description}</p>
              <Button render={<Link href={option.href} />} nativeButton={false} variant="outline" className="w-fit">
                Learn more
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
