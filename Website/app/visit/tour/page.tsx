import Link from "next/link"
import type { Metadata } from "next"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Tour Sage Mountain",
}

export default function TourPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">Visit</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Tour Sage Mountain</h1>
      <p className="mt-4 text-muted-foreground">
        Meet the animals in person and hear their individual rescue stories on a guided tour of
        the sanctuary.
      </p>

      <Alert className="mt-6">
        <AlertTitle>Placeholder details</AlertTitle>
        <AlertDescription>
          Scheduling, pricing, and booking aren&apos;t finalized — see Programs/Guided Tours.md
          for what&apos;s still needed.
        </AlertDescription>
      </Alert>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>What to expect</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2 text-sm text-muted-foreground">
          <p><span className="font-medium text-foreground">Schedule:</span> TBD</p>
          <p><span className="font-medium text-foreground">Price:</span> TBD</p>
          <p><span className="font-medium text-foreground">Group size:</span> TBD</p>
          <Button render={<Link href="/about/contact" />} nativeButton={false} className="mt-4 w-fit">
            Ask about tours
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
