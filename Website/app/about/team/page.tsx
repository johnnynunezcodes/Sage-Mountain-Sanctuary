import type { Metadata } from "next"

import { team } from "@/lib/data/team"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Meet the Team",
}

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">About</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Meet the Team</h1>

      <Alert className="mt-6">
        <AlertTitle>Photos coming soon</AlertTitle>
        <AlertDescription>
          Team photos aren&apos;t ready yet, so profiles below show initials for now — names,
          roles, and bios are the real thing.
        </AlertDescription>
      </Alert>

      <div className="mt-8 space-y-6">
        {team.map((member) => (
          <Card key={member.name + member.role}>
            <CardHeader className="flex-row items-center gap-4 space-y-0">
              <Avatar className="size-12">
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              {member.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
