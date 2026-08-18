# Sage Mountain Sanctuary

Website: https://www.sagemtn.org/ (current live site — the new site in `Website/` is a draft/rebuild, not yet live)

## About

Sage Mountain Sanctuary is a 501(c)(3) nonprofit animal sanctuary located about 10 miles from Park City, Utah. It provides refuge for rescued farm animals (pigs, cows, chickens, goats, sheep, and geese — see the note in `Animals/Appendix.md` about a naming discrepancy with "turkeys" that still needs to be resolved with the user) and promotes compassionate, plant-based living through education and community engagement.

- **Mission**: give rescued farm animals a safe home while inspiring visitors toward plant-based, compassionate living.
- **Services**: guided sanctuary tours, yoga classes, weekly volunteer opportunities (Saturdays).
- **Audience**: people interested in animal welfare, plant-based lifestyles, and spiritual/nature wellness.
- **Status**: currently at capacity — not accepting new animals.
- **Contact**: info@sagemtn.org, P.O. Box 681596, Park City, UT 84068.

## External Files

To keep this file small, detailed reference material lives in separate directories within this project folder instead of being pasted in here. Every directory must be linked below with a one-line description, so it's always found in future conversations. Individual markdown files are NOT linked here — each directory has its own `Appendix.md` (or `README.md` for Website) that indexes the files inside it with descriptions. That's the file to open for the specifics.

- [Programs](Programs/Appendix.md) — sanctuary mission/story in depth, guided tours, yoga classes, and volunteer days.
- [Animals](Animals/Appendix.md) — individual animal profiles (name, species, story), organized by species for the website's filterable directory.
- [Branding](Branding/Appendix.md) — voice/tone guidelines and other brand copy. Always check before writing any customer-facing copy.
- [Policies](Policies/Appendix.md) — draft sponsorship/donation terms and volunteer policies. No payment processor is connected yet — see Website notes.
- [Images](Images/Appendix.md) — index of where logos and animal/sanctuary photos live in this project.
- [Team Members](Team%20Members/Appendix.md) — real bios for the sanctuary's team (David Swartz, Lauren Lockey, Alyssa Poulsen, Alec Brush), pulled from the live site's "Meet the Team" pages. This is the source content the website's `/about/team` page should eventually render from instead of its current placeholder data.
- [Website](Website/README.md) — the marketing website codebase. **Next.js 16 + shadcn/ui (base-ui/react, Tailwind v4, TypeScript)**. Built out with real pages/nav as of this session — see "Website Pages & Nav" below. This replaces an earlier Astro scaffold Claude built in an even earlier session, which has been fully removed. This is a separate codebase with its own `AGENTS.md` — notably it flags that **Next.js 16 has breaking changes from older versions**, so check `Website/node_modules/next/dist/docs/` before writing any Next.js code in a future session, don't rely on training-data assumptions about Next.js conventions. Same caution applies to shadcn here: this project's shadcn is v4 built on `@base-ui/react`, not the classic Radix-based shadcn — don't hand-write `components/ui/*` internals from memory, use `npx shadcn@latest add <component>` (per the Website Coding Rules below) and let the CLI generate them correctly for this setup.

When you add a new directory to this project, add a link for it here (with a one-line description). When you add or update a markdown file inside an existing directory, don't touch this list — instead update that directory's own `Appendix.md` (link and description, or a corrected description if the file's content/purpose changed).

## Website Coding Rules

- **Always reach for a shadcn/ui component first.** Whenever the user asks for a new feature, a UI change, something added to a page, or any UI tweak in `Website/`, use an existing or addable shadcn/ui component (`npx shadcn@latest add <component>`) rather than hand-rolling a custom one. Don't build custom one-off components when a shadcn component can do the job — this is a deliberate choice to keep the design language consistent as the site gets built out. Only fall back to a custom component if genuinely nothing in shadcn's catalog fits.
- **This project does NOT use `asChild`.** Classic Radix-based shadcn uses a boolean `asChild` prop for polymorphism (`<Button asChild><Link .../></Button>`). This project's shadcn is built on `@base-ui/react` instead, which uses a different mechanism: a `render` prop that takes a single `ReactElement` (`<Button render={<Link href="/" />}>Label</Button>`, with the label/content as the component's own children, not the render element's children). Passing `asChild` here doesn't error at the type level in every case but silently fails at runtime — the wrapper component still renders its own DOM element (e.g. `<a>` or `<button>`) instead of merging into the child, producing invalid nested-tag hydration errors (`<a> cannot be a descendant of <a>`, `<button> cannot contain a nested <button>`, etc.) that show up as Next.js dev-overlay console errors even though the page visually looks fine. Confirmed by reading `node_modules/@base-ui/react/use-render/useRender.d.ts` and `internals/types.d.ts` (`BaseUIComponentProps` has `render`, not `asChild`) in this session. If a future session sees exactly these hydration warnings, check for stray `asChild` usage first.

## Website Pages & Nav

Nav: Home · Meet the Animals (`/animals`, filterable by species) · Visit (dropdown: `/visit/tour`, `/visit/yoga`, `/visit/volunteer`) · Events (`/events`) · About (dropdown: `/about/team`, `/about/contact`) · Donate (`/donate`, primary CTA) · Login (`/login`).

Deliberately dropped from the real sagemtn.org nav: the "Support" menu (Merchandise, More Ways to Help) — not in scope; folded into Donate instead.

- **Donate (`/donate`)** is the main CTA: a tabbed page — General Donation (one-time/monthly/bi-weekly, preset amounts) vs. Sponsor an Animal (pick an animal, monthly or bi-weekly). Animal cards on `/animals` and the homepage link into the Sponsor tab pre-selected via `?mode=sponsor&animal=<slug>`.
- **Events (`/events`)** lists placeholder events; each opens a registration dialog (name/email/qty) that ends in "Coming soon" — no payment processor connected yet, matching Donate.
- **Login (`/login`)** is a placeholder sign-in form, no real authentication — parked until there's an actual reason for accounts (e.g. a sponsor/donor dashboard).
- All animal, event, and team data is placeholder, living in `Website/lib/data/*.ts` (mirrors `Animals/*.md`, but is the actual source the site renders from — keep both in sync when either changes).
- **Status**: all needed shadcn components (`card`, `badge`, `tabs`, `select`, `radio-group`, `input`, `label`, `textarea`, `dialog`, `separator`, `avatar`, `alert`, `navigation-menu`, `sheet`, `toggle-group`, `toggle`) have been generated via `npx shadcn@latest add ...` and confirmed present in `components/ui/`. The initial build also had every `asChild` usage silently break hydration (see the `asChild`/`render` note above) — all instances were found and fixed by switching to the `render` prop. That fix then surfaced a follow-on warning: Base UI's `Button` defaults to `nativeButton={true}` (it expects to render a real `<button>`) and warns whenever `Button`'s own `render` prop points at a non-button element like `next/link`'s `Link`. Fixed by adding `nativeButton={false}` to every `<Button render={<Link .../>}>` instance (13 total, across `app/page.tsx`, `app/about/page.tsx`, `app/visit/page.tsx`, `app/visit/tour/page.tsx`, `app/visit/yoga/page.tsx`, `components/site-header.tsx`, `components/animal-card.tsx`) — confirmed via `NativeButtonProps` in `node_modules/@base-ui/react/internals/types.d.ts`. Note this only applies to `Button` itself; `NavigationMenuLink render={<Link .../>}` and `SheetTrigger render={<Button .../>}` don't need it (not governed by `NativeButtonProps`, or the render target stays a real `<button>`). Not yet re-confirmed clean in the browser after this fix — if the dev-overlay issue count is back to 0 (or only shows the unrelated `next-themes` script-tag warning below), it worked. **If a future session sees this exact warning again, check for a new `Button render={<Link .../>}` (or similar non-button render target) missing `nativeButton={false}`.**
- **Known harmless warning**: the dev overlay may show a "Console Error: Encountered a script tag while rendering React component... components/theme-provider.tsx" warning. This comes from `next-themes`' own FOUC-prevention technique (an inline script that sets the theme class before paint) and predates this session's changes — it's a widely-known, functionally harmless quirk of `next-themes`, not a bug to fix here.

## Open Questions / Not Yet Decided

- **Animal species list**: existing notes say pigs, cows, chickens, goats, sheep, geese; the animal-directory filter request said cows, pigs, sheep, goats, turkeys, chickens. Needs to be reconciled with the user before real animal data goes in.
- **Sponsorship payment processor**: not connected yet. The `/sponsor` page is UI-only (draft) — pick a processor (Stripe, Donorbox, Givebutter, or an existing account) before wiring up real recurring billing.
- **Volunteer sign-up flow**: not finalized — the `/volunteer` page currently has a placeholder form.
- **Admin tooling** (for tracking sponsors/donors/volunteers): not scoped yet.
- **Hosting/domain**: not confirmed for the new Next.js setup. The earlier Astro version targeted Vercel (matching the `Sky-House-Cleaning` project's pattern) — Vercel is a natural fit for Next.js too, but this hasn't been stated explicitly since the switch. Whether `sagemtn.org`'s DNS should point here, and what the current registrar/host is, also hasn't been confirmed.
- **Website content**: the Next.js + shadcn/ui scaffold is boilerplate only — no pages, sponsorship flow, animal directory, etc. have been rebuilt yet on the new stack. The page/feature scope discussed earlier (home, mission, filterable animal directory, sponsor page, visit, volunteer, contact) still applies whenever that work resumes — see git history / prior conversation for the full page-by-page plan.
- **Team data now available, not yet wired in**: real bios for all 4 team members live in `Team Members/Appendix.md`, but `Website/lib/data/team.ts` and the `/about/team` page still render placeholder data. Swap in the real bios (and update the page copy/photos) next time the About/Team page is touched.
