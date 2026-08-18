import Link from "next/link"
import type { Metadata } from "next"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Yoga",
}

export default function YogaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">Visit</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Yoga</h1>
      <p className="mt-4 text-muted-foreground">
        Practice yoga on the sanctuary grounds, often alongside the animals — a peaceful way to
        connect with nature and support the sanctuary at the same time.
      </p>

      <Alert className="mt-6">
        <AlertTitle>Placeholder details</AlertTitle>
        <AlertDescription>
          Schedule, pricing, and instructor info aren&apos;t finalized — see
          Programs/Yoga Classes.md for what&apos;s still needed.
        </AlertDescription>
      </Alert>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Class details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2 text-sm text-muted-foreground">
          <p><span className="font-medium text-foreground">Schedule:</span> TBD</p>
          <p><span className="font-medium text-foreground">Price:</span> TBD</p>
          <p><span className="font-medium text-foreground">Instructor:</span> TBD</p>
          <Button render={<Link href="/about/contact" />} nativeButton={false} className="mt-4 w-fit">
            Ask about yoga
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
