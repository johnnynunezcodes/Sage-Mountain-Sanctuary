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
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">About</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Meet the Team</h1>

      <Alert className="mt-6">
        <AlertTitle>Placeholder roster</AlertTitle>
        <AlertDescription>
          Replace with the real team&apos;s names, roles, photos, and bios.
        </AlertDescription>
      </Alert>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
            <CardContent className="text-sm text-muted-foreground">{member.bio}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
