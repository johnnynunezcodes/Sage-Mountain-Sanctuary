Individual animal profiles, organized by species. This is the source content for the website's filterable animal directory (`/animals`, filterable by species) and individual animal pages.

**Real roster as of 2026-08-18**, pulled from the live site's "Sponsor our Animal Residents" page (sagemtn.org) — 40 animals total. Photos for about half the roster were recovered from the same source and live in `Website/public/images/animals/<species>/`; animals without a confirmed photo don't have a `Photo` line in their profile yet.

- [Cows](Cows.md) — 7 animals: Francis, Reba, Star, Bradley, Smooch, Dale, Benji.
- [Pigs](Pigs.md) — 8 animals: Ralphy, Pickles, Harriet, Amora, Francine, River, Ponyboy, Morgan.
- [Sheep](Sheep.md) — 5 animals: Jesse, Martin, Sammie, Ava, Peter.
- [Goats](Goats.md) — 4 animals: Jasper, Pam, Bruce, Louis.
- [Turkeys](Turkeys.md) — 4 animals: Moby, Brett, Phoenix, Roxy.
- [Chickens](Chickens.md) — 12 animals: Jeff Goldblum, Penelope, Sally, Steve, Piper, Walter, Delhi, Abigail, Rosaline, Ariana Grande, Ezekiel, Wednesday.
- [Geese](Geese.md) — not currently a sponsorship category on the live site (see that file — resolves the species-list discrepancy noted in the root `CLAUDE.md`).

When you add a real animal profile, add or update its link and description here. When the roster grows, consider whether each species should hold multiple animals per file or move to one file per animal — not decided yet. `Website/lib/data/animals.ts` mirrors this content and is the actual source the site renders from — keep both in sync when either changes.
