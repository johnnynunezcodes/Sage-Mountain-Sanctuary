import { Suspense } from "react"
import type { Metadata } from "next"

import { DonateForm } from "./donate-form"

export const metadata: Metadata = {
  title: "Donate",
}

export default function DonatePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">Donate</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
        Give an animal — or the whole sanctuary — ongoing support
      </h1>
      <p className="mt-4 text-muted-foreground">
        Choose a general donation to support the sanctuary as a whole, or sponsor one specific
        animal with a recurring monthly or bi-weekly gift.
      </p>

      <div className="mt-8">
        <Suspense fallback={null}>
          <DonateForm />
        </Suspense>
      </div>
    </div>
  )
}
