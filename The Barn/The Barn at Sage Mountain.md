# The Barn at Sage Mountain

**Status: real content, confirmed 2026-08-19 via WebFetch from the live site (sagemtn.org/thebarn). Rendered on the new site at `/about/happenings/the-barn`, pinned as a featured card at the top of `/about/happenings` (Sanctuary Happenings).**

## What it is

A 7,000 sq ft secured structure for the resident animals, with an attached apartment for two animal caregivers. As the sanctuary has grown, the barn will shelter the 40+ rescued farm animals from harsh winters and hot summer sun, make feeding/cleaning much easier for volunteers and staff, and provide a dedicated stall for vet care and quarantining new or sick animals.

Winters have gotten harder to manage: snow drifts over 10 feet tall and intense storms threaten the animals' health and safety, which is the driving reason for the project.

## Why it matters (from the live site's 6-item list)

1. **Animal Welfare** — an upgraded shelter prevents issues like hoof rot and keeps animals safe in winter; a designated vet care/quarantine stall helps with new arrivals and emergencies.
2. **Operational Efficiency** — streamlines feeding and medical care, and adds a bathroom and breakroom for volunteers.
3. **Expansion and Growth** — lets the sanctuary rescue and care for more animals, and doubles as a venue for Wine Down Yoga, dinners, fundraisers, and weddings.
4. **Educational Opportunities** — a venue for events that educate people about the sanctuary's mission.
5. **Community Impact** — brings people together and builds community spirit and awareness.
6. **Long Term Sustainability** — contributes to the nonprofit's long-term operational stability.

## Cost breakdown

| Item | Amount |
|---|---|
| Excavation & Framing | $952,413.60 |
| Systems & Drywall | $221,575 |
| Interior Design | $125,250 |
| Contractor & Administrative Fees | $224,768.28 |
| **Total** | **$1,524,006.88** |

The live site describes it in prose as a "$1,500,000 project." Donations are tax-deductible (Sage Mountain is a 501(c)(3)). Questions go to info@sagemtn.org.

**Note**: no "amount raised so far" figure was found anywhere on the live site as of 2026-08-19 — don't fabricate one if asked; only the total project cost and the itemized breakdown above are confirmed.

## Testimonials ("In their words")

Four real quotes from the live site, now paired with real volunteer photos at `Website/public/images/volunteers/` (matched by visual inspection against the live site's reference screenshots — see `../Images/Appendix.md` for the photo-to-quote mapping):

1. **Animal Caretaker** — on snow drifts blocking shelters, meaning volunteers have to dig animals out; stressful for the animals, a lot of work for volunteers.
2. **Regular Yoga Attendee** — on missing Wine Down Yoga in winter; The Barn would let it run year-round instead of just when it's nice outside.
3. **Sage Mountain Volunteer** — on The Barn giving the animals somewhere to escape the summer heat.
4. **Regular Feeding Volunteer** — on the yard fence repeatedly getting buried in snow and needing temporary fences stacked on top; The Barn would let everyone stay indoors during bad weather.

## Still needed / placeholders on the new site

- **Hero photo** of the barn site under snow — not yet sourced; the page currently shows a placeholder block.
- **Barn elevation drawings** — not yet sourced; the page currently shows a placeholder block.
- An "amount raised so far" figure, if the sanctuary wants to show fundraising progress (not published on the live site as of 2026-08-19).

## Where it lives on the new site

- Full page: `/about/happenings/the-barn` (`Website/app/about/happenings/the-barn/page.tsx`) — a bespoke page, not the generic `[slug]` Sanctuary Happenings template, because it needs custom sections (cost breakdown table, testimonials, elevation drawing) the generic template doesn't support.
- Listing: pinned as a wide "Featured" card at the top of `/about/happenings` (`Website/components/featured-post-card.tsx`), above the regular 3-across grid of placeholder posts.
- Data: `Website/lib/data/posts.ts` — the `the-barn` entry has `featured: true` and an `href` override pointing at the bespoke page, so the generic `[slug]` route (`Website/app/about/happenings/[slug]/page.tsx`) explicitly skips it and avoids a route conflict.
