import type { Metadata } from "next"
import Image from "next/image"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
        There are two ways to lend a hand at Sage Mountain: drop in for our weekly Volunteer Day,
        or sign up for a regular shift that fits your schedule.
      </p>

      <Tabs defaultValue="day" className="mt-8">
        <TabsList>
          <TabsTrigger value="day">Volunteer Day</TabsTrigger>
          <TabsTrigger value="shifts">Regular Shifts</TabsTrigger>
        </TabsList>

        <TabsContent value="day" className="mt-6">
          <div className="relative aspect-3/2 overflow-hidden rounded-xl">
            <Image
              src="/images/volunteer-day.jpg"
              alt="Volunteers gathered around a pig, petting it during a Saturday volunteer day"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <h2 className="mt-6 text-xl font-semibold">Every Saturday, 9–11 AM</h2>
          <p className="mt-3 text-muted-foreground">
            No sign-up needed — just show up. We start with a quick safety orientation, then spend
            most of the morning on chores like cleaning coops, scrubbing water bowls, and mucking,
            depending on what the day calls for. We save the last 20 minutes or so to visit with
            the animals.
          </p>
          <p className="mt-3 text-muted-foreground">
            Volunteer Day is open to all ages, so it&apos;s a great option for families — just make
            sure kids are accompanied by an adult.
          </p>

          <Alert className="mt-6">
            <AlertTitle>Bringing a group of 10 or more?</AlertTitle>
            <AlertDescription>
              Email us at{" "}
              <a className="underline underline-offset-2" href="mailto:info@sagemtn.org">
                info@sagemtn.org
              </a>{" "}
              to coordinate a business or group volunteer day.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="shifts" className="mt-6">
          <div className="relative aspect-3/2 overflow-hidden rounded-xl">
            <Image
              src="/images/volunteer-2.jpg"
              alt="A volunteer feeding the sanctuary's pigs and goats from a bucket, with the mountains behind her"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          <h2 className="mt-6 text-xl font-semibold">Regular Volunteer Shifts</h2>
          <p className="mt-3 text-muted-foreground">
            If a weekly Saturday morning doesn&apos;t work for you, we take on a small number of
            regular volunteers for cleaning shifts — mucking and raking the main yard, emptying and
            refilling water troughs, and cleaning coops, depending on the day. Shifts can generally
            happen any time, though midday tends to work best, and we ask for at least once a week
            or once every other week. Let us know your availability below and we&apos;ll match you
            to open shifts.
          </p>
          <p className="mt-3 text-sm text-muted-foreground italic">
            Exact duties and expectations for regular volunteers are still being finalized.
          </p>

          <Alert className="mt-6">
            <AlertTitle>Preview only</AlertTitle>
            <AlertDescription>
              This form doesn&apos;t submit anywhere yet — see Policies/Volunteer Policy.md for
              what&apos;s still being decided.
            </AlertDescription>
          </Alert>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Regular Cleaning Volunteer Signup Form</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="volunteer-first-name">First name</Label>
                  <Input id="volunteer-first-name" placeholder="First name" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="volunteer-last-name">Last name</Label>
                  <Input id="volunteer-last-name" placeholder="Last name" />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="volunteer-email">Email</Label>
                <Input id="volunteer-email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="volunteer-phone">Phone</Label>
                <Input id="volunteer-phone" type="tel" placeholder="(555) 555-5555" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="volunteer-availability">When are you available to volunteer?</Label>
                <Textarea
                  id="volunteer-availability"
                  placeholder="Let us know which day of the week, and what time you'd be available for a regular cleaning shift."
                />
              </div>
              <div className="grid gap-1.5">
                <Label>Have you been to Sage Mountain before?</Label>
                <RadioGroup className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="been-before-yes" />
                    <Label htmlFor="been-before-yes" className="font-normal">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="been-before-no" />
                    <Label htmlFor="been-before-no" className="font-normal">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-1.5">
                <Label>Do you prefer email or text to coordinate?</Label>
                <RadioGroup className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="email" id="contact-pref-email" />
                    <Label htmlFor="contact-pref-email" className="font-normal">
                      Email
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="text" id="contact-pref-text" />
                    <Label htmlFor="contact-pref-text" className="font-normal">
                      Text
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="volunteer-questions">Do you have any questions?</Label>
                <Input id="volunteer-questions" placeholder="Optional" />
              </div>
              <Button disabled title="Sign-up isn't connected to anything yet" className="w-fit">
                Send — Coming Soon
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
