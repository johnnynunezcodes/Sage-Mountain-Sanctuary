# Images

Reference for where visual assets live in this project. All real photos referenced below live under `Website/public/images/` — that's the actual source the site renders from via `next/image`; nothing is duplicated into this `Images/` directory itself.

## Logo
The real Sage Mountain Sanctuary circular logo lives at `Website/public/images/logo.webp`. Documented in `../Branding/Logos.md`, and rendered in the site header/footer.

## Animals
Real animal photos, recovered 2026-08-18 from a saved copy of the live site's "Sponsor our Animal Residents" page, live at `Website/public/images/animals/<species>/<slug>.<ext>` (e.g. `Website/public/images/animals/cow/francis.jpg`). About half the current roster (see `../Animals/Appendix.md`) has a confirmed, name-matched photo so far — the rest don't have one yet.

A handful of additional photos from that same source couldn't be confidently matched to a specific animal by filename alone (generic sanctuary shots, unlabeled piglets, an unrecognized "Larry the goat," etc.). Those live in `Website/public/images/animals/unsorted/` for manual review/curation later — check them against the live site or ask the sanctuary before attributing any of them to a specific profile.

## Team
No real headshots yet — `/about/team` falls back to initials avatars. Add photos here once available and link them from each profile in `../Team Members/`.

## Visit / Volunteer
A real photo of volunteers petting a pig during a Saturday volunteer day, recovered 2026-08-18 from a saved copy of the live site's Visit page, lives at `Website/public/images/volunteer-day.jpg`. Rendered as the hero image on `/visit/volunteer`.

## Visit / Tour
Updated 2026-08-19: the `/visit/tour` hero photo is now a team member kneeling with her arms around one of the sanctuary's sheep, mountains in the background, at `Website/public/images/Staff/Alyssa/Alyssa-Peter-Headkiss.jpg`. **Note the capital `Staff/`** — that's the real casing on disk (confirmed 2026-08-19 via a fresh directory listing). An earlier pass in this project had it backwards (referenced a lowercase `staff/` in code while assuming the folder was lowercase) — that was itself a latent case-sensitivity bug, harmless on Mac but would 404 on a case-sensitive Linux/Vercel deploy. Fixed 2026-08-19 by matching the code path to the real on-disk capitalization. If a future session touches this folder, verify the real casing with a directory listing rather than trusting this note or the code — don't repeat the mistake.

## The Barn / Testimonials
Added 2026-08-19: four real volunteer photos live at `Website/public/images/volunteers/` and are wired into the "In their words" testimonials section of `/about/happenings/the-barn` (see `../The Barn/Appendix.md`). Matched to their quotes by visual inspection against the live site's reference screenshots:
- `Volunteer-caretaker.jpg` — person in a black coat in whiteout snow — "Animal Caretaker" quote (snow drifts blocking shelters).
- `yoga-group.jpg` — five people in tree pose on a deck facing a green hill — "Regular Yoga Attendee" quote (winter yoga).
- `Volunteer-Kylie.jpg` — woman kneeling with two light-colored piglets in a dry/dirt setting — "Sage Mountain Volunteer" quote (summer heat).
- `Regular-Volunteer.jpg` — man in a frosty gray hood/sunglasses near a snowy fence — "Regular Feeding Volunteer" quote (fence buried in snow).

## The Barn / Site plan & elevations
Added 2026-08-19: real architectural drawings live at `Website/public/images/barn/the-barn-plans.jpg` (site plan showing the new barn's footprint, drive pads, and existing buildings) and `Website/public/images/barn/barn-side-perspectives.jpg` (SW/NW/NE elevation drawings — rendered in the "What is The Barn" section of `/about/happenings/the-barn`). The user's originals are still sitting at `Website/public/images/The Barn/the+barn+plans.jpg` and `Website/public/images/The Barn/barn-side-perspectives.jpg` (note the folder has a space, and the plans file has literal `+` characters in its name — both are copied, not moved, into the cleaner `barn/` path above to avoid deploy-time path issues; nothing currently references the originals).

Revised 2026-08-19 (later same day): after trying a rotated+cropped crop and then a fully vector-traced, colorized SVG redraw of the site plan, the user asked to scratch both of those derived copies and go back to the **original, unrotated `the-barn-plans.jpg`** as the hero image on `/about/happenings/the-barn`, displayed with `next/image`'s `fill` + `object-cover` so it expands to fill the image card. `barn/the-barn-plans.jpg` has been reset to the untouched original (2029×1568, straight from `The Barn/the+barn+plans.jpg`, no rotation/crop). The rotated/cropped experiment and `the-barn-plans.svg` (the OpenCV-traced, colorized version) are no longer referenced anywhere on the site — `the-barn-plans.svg` is still sitting in `barn/` as an orphaned file since this tool can't delete files on the user's device; safe to delete by hand if desired.

## In Loving Memory of Smooch
Added 2026-08-19: real content for a new Sanctuary Happenings post, replacing the "Welcome to Sanctuary Happenings" placeholder. Source is the live memorial page at `sagemtn.org/media/in-loving-memory-of-smooch` — a fresh fetch of that page was blocked by the site's `robots.txt`, so the photos live at `Website/public/images/smooch/` were cropped from full-resolution screenshots of the live page that the user supplied directly in chat, not downloaded from the site:
- `smooch-listing.jpg` — the post's listing-card photo (snowy close-up face), used in `lib/data/posts.ts`'s `image` field.
- `smooch-hero.jpg` — the article header photo (looking-up horns/face shot), used as the hero on `/about/happenings/in-loving-memory-of-smooch`.
- `smooch-gallery-01.jpg` through `smooch-gallery-12.jpg` — 12 of the live page's 16 gallery photos. The top row of that gallery was cut off in the user's screenshot (page was scrolled past it), so those 4 photos aren't included yet — if the user can send that portion, or once robots.txt allows a fetch, add `smooch-gallery-13.jpg` onward and update the `galleryImages` array in the page.

When you add new images (or markdown files) to this project, add a link or folder note here so future work knows where to find them.
