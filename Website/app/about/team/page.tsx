import type { Metadata } from "next"
import Image from "next/image"

import { team } from "@/lib/data/team"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Meet the Team",
}

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">About</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Meet the Team</h1>

      <div className="mt-12">
        {team.map((member, index) => (
          <div
            key={member.name + member.role}
            className={cn(
              "flex flex-col gap-8 border-b border-border pb-16 sm:gap-10",
              index % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row",
              index === team.length - 1 ? "border-b-0 pb-0" : "mb-16"
            )}
          >
            {member.photoUrl ? (
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl sm:aspect-19/36 sm:w-80 sm:shrink-0">
                <Image
                  src={member.photoUrl}
                  alt={member.name}
                  fill
                  sizes="(min-width: 640px) 320px, 100vw"
                  className="object-cover"
                  style={member.photoPosition ? { objectPosition: member.photoPosition } : undefined}
                />
              </div>
            ) : (
              <div className="flex aspect-4/5 items-center justify-center rounded-2xl bg-muted text-center text-sm text-muted-foreground sm:aspect-19/36 sm:w-80 sm:shrink-0">
                Photo of {member.name} coming soon
              </div>
            )}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold">{member.name}</h2>
              <p className="mt-2 text-xs font-semibold tracking-wide text-primary uppercase">
                {member.role}
              </p>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                {member.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
