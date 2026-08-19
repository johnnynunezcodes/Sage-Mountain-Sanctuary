# Guided Tours

**Status: real schedule/pricing confirmed 2026-08-18 from the live site (sagemtn.org/tour). Rendered on `/visit/tour`, now with a booking-preview widget as of 2026-08-19 (see below).**

Guided tours let visitors meet the animals, hear their individual rescue stories, and learn more about Sage Mountain's mission. Located in Peoa, UT (about 10 miles from Park City).

- **Schedule**: seasonal — as of this writing, Wednesday, Saturday, and Sunday evenings, 5–6 PM (one hour). Confirm each season, since this changes.
- **Price**: $30/adult, $15/child (12 and under).
- **Capacity**: capped at 20 total guests per tour (adults + kids combined) — set by the user 2026-08-19 as the site's booking cap; confirm this matches the sanctuary's actual per-tour capacity.
- **Booking**: must be made at least 48 hours before the tour date. No payment processor is wired up yet, but as of 2026-08-19 `/visit/tour` has a full booking-preview widget (`Website/app/visit/tour/tour-booking.tsx`): pick one of the next 3 upcoming tour dates or any tour date from a calendar, choose adult/kid ticket quantities (capped at 20 total), see a running total, and a disabled "Book — Coming Soon" button. It still points visitors to `/about/contact` to actually reserve a spot in the meantime.
- **Cancellation/weather policy**: no refunds once booked (nonprofit, donation-reliant) — but Sage Mountain will reschedule for free if weather forces a cancellation.

## Still needed from the user

- Confirm the 20-guest-per-tour cap is correct (currently a website-side assumption, not confirmed against the live site or sanctuary policy).
- Age restrictions, accessibility notes, what to wear/bring.
- Whether/how to wire up real online booking + payment (see root `CLAUDE.md` Open Questions — same open question as the sponsorship payment processor).
