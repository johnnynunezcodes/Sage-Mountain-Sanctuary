import type { Metadata } from "next"
import { Mail, MapPin } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Contact",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">About</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Get in Touch</h1>

      <div className="mt-6 grid gap-2 text-sm text-muted-foreground">
        <p className="flex items-center gap-2">
          <Mail className="size-4" aria-hidden="true" />
          <a className="hover:text-foreground" href="mailto:info@sagemtn.org">
            info@sagemtn.org
          </a>
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="size-4" aria-hidden="true" />
          P.O. Box 681596, Park City, UT 84068
        </p>
      </div>

      <Alert className="mt-6">
        <AlertTitle>Preview only</AlertTitle>
        <AlertDescription>
          This form doesn&apos;t send anywhere yet — email us directly in the meantime.
        </AlertDescription>
      </Alert>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Send a message</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="contact-name">Name</Label>
            <Input id="contact-name" placeholder="Your name" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="contact-email">Email</Label>
            <Input id="contact-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea id="contact-message" placeholder="How can we help?" rows={5} />
          </div>
          <Button disabled title="This form isn't connected yet" className="w-fit">
            Send — Coming Soon
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
