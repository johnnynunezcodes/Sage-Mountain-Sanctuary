import type { Metadata } from "next"
import Image from "next/image"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Volunteer",
}

export default function VolunteerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">Visit</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Volunteer</h1>
      <p className="mt-4 text-muted-foreground">
        We welcome volunteers every Saturday to help care for the sanctuary and its animals.
      </p>

      <div className="relative mt-8 aspect-3/2 overflow-hidden rounded-xl">
        <Image
          src="/images/volunteer-day.jpg"
          alt="Volunteers gathered around a pig, petting it during a Saturday volunteer day"
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <Alert className="mt-6">
        <AlertTitle>Preview only</AlertTitle>
        <AlertDescription>
          This form doesn&apos;t submit anywhere yet — see Policies/Volunteer Policy.md for what&apos;s
          still being decided.
        </AlertDescription>
      </Alert>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Sign up to volunteer</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="volunteer-name">Name</Label>
            <Input id="volunteer-name" placeholder="Your name" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="volunteer-email">Email</Label>
            <Input id="volunteer-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="volunteer-notes">Which Saturday(s)?</Label>
            <Textarea id="volunteer-notes" placeholder="e.g. this coming Saturday" />
          </div>
          <Button disabled title="Sign-up isn't connected to anything yet" className="w-fit">
            Sign Up — Coming Soon
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
