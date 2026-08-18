import type { Metadata } from "next"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Login",
}

export default function LoginPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">Account</p>
      <h1 className="mt-2 text-3xl font-semibold">Login</h1>

      <Alert className="mt-6">
        <AlertTitle>Not connected yet</AlertTitle>
        <AlertDescription>
          Account sign-in isn&apos;t wired up yet — there&apos;s no real authentication behind
          this form. It&apos;s here as a placeholder for a future sponsor/donor dashboard.
        </AlertDescription>
      </Alert>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>For sponsors, donors, and volunteers.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="login-email">Email</Label>
            <Input id="login-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="login-password">Password</Label>
            <Input id="login-password" type="password" placeholder="••••••••" />
          </div>
          <Button disabled title="Authentication isn't connected yet" className="w-full">
            Sign In — Coming Soon
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
