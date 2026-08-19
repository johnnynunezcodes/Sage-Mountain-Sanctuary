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
The `/visit/tour` hero photo (a team member feeding the sanctuary's pigs, sheep, and goats, mountains behind her) lives at `Website/public/images/Staff/Alyssa/volunteer-2.jpg`. Note the path is under a `Staff/Alyssa` folder despite being a tour-page photo, not a headshot — other photo reorganization (a `Staff/` and `Volunteers/` folder structure) was in progress elsewhere in the project when this was added; check those folders for other real photos before assuming something is still a placeholder.

When you add new images (or markdown files) to this project, add a link or folder note here so future work knows where to find them.
