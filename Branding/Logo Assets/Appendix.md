Reference kit of every logo piece pulled or built from the real Sage Mountain Sanctuary logo, so future variations can be recomposed from these instead of re-deriving them from `original-full-logo.webp` each time. All raster (PNG/WebP) — none are vector, since the source art is hand-drawn raster.

Colors used across pieces (sampled/computed from the site's actual tokens, see `Website/app/globals.css`):
- Sage green (ring + barn/silo linework): `#729E8C`
- Brown (light-mode horseshoe + wordmark): `#725846`
- Cream (light-mode fills/background): `#ECEFE3`
- Orange (dark-mode horseshoe, = `--primary` in dark mode): `#E57344`
- Cream-white (dark-mode wordmark, = `--foreground` in dark mode): `#F6F1E7`
- Dark brown (dark-mode circle/solid fill, = dark-mode `--background`/`--card`): `#170E09` / `#221812`

## Original

- **`original-full-logo.webp`** — the real, untouched logo as saved from the live site: circular badge, cream fill, sage ring, barn+silo line art, brown horseshoe, "Sage Mountain" hand-lettered in brown, "Health · Planet · Animals" tagline in green script. Source of truth — every other file here is derived from this one. Same file as `Website/public/images/logo.webp`.

## Pieces (raw components, transparent background, for recombining)

- **`piece-barn-outline-brown-horseshoe.png`** — just the barn+silo+horseshoe line art, cropped and masked out from the original (ring and text removed), fully transparent background, native resolution (405×256). Horseshoe is the original brown. This is the master outline piece everything else derives from.
- **`piece-barn-outline-orange-horseshoe.png`** — same crop, horseshoe pixels recolored to dark-mode orange (`#E57344`) for use on dark backgrounds.
- **`piece-ring-circle-cream-fill.png`** — the original's sage ring with the interior flood-filled solid cream, no barn/text — an empty circular badge/frame ready to have new content pasted into it. Full canvas size (720×684), same framing as the original.
- **`piece-ring-circle-dark-fill.png`** — same empty ring, interior flood-filled with dark brown (`#221812`) instead of cream, for dark-background use. Built with a proper flood-fill (not a fixed-radius fill) so it follows the ring's actual hand-drawn wobble with no gaps — see the note under "How these were made" if rebuilding this.
- **`piece-wordmark-brown.png`** — "Sage Mountain" hand-lettered text only (no tagline), cropped tight, transparent background, native resolution (501×93), original brown color.
- **`piece-wordmark-cream.png`** — same crop, recolored to the dark-mode foreground tone (`#F6F1E7`) for legibility on dark backgrounds (original brown only hits ~2.9:1 contrast on the dark header background, below WCAG AA — this variant hits ~16.9:1).

## Variants (finished, ready-to-use compositions)

- **`variant-nav-outline-light.png`** — `piece-barn-outline-brown-horseshoe.png` scaled up ~1.4x, no circle/background. **Currently live**: `Website/components/site-header.tsx` and `site-footer.tsx`, light mode.
- **`variant-nav-outline-dark.png`** — same, orange-horseshoe version. **Currently live**: same two files, dark mode.
- **`variant-circle-badge-cream.png`** — the original circular badge with the wordmark/tagline removed and the barn enlarged ~15% into the reclaimed space (that ring width is the hard ceiling for how big the barn can get in a circle composition — see "How these were made"). Cream fill, brown horseshoe. **Not currently live** — used in the header before the outline-only direction was chosen; kept as a reference in case that direction gets revisited.
- **`variant-circle-badge-dark.png`** — same composition on `piece-ring-circle-dark-fill.png` instead, orange horseshoe. **Not currently live** — an early exploration of the slider-thumb concept, superseded by the solid-fill (no-circle) direction below.
- **`variant-solid-barn-light.png`** — the barn *shape itself* solid-filled (flood-filled interior, not just outline strokes) with a muted tan (`#E4DDD0`, slightly darker than the page's cream background), orange horseshoe, no circle at all. Baked at a small resolution (303×192) with a thickened horseshoe stroke so it stays crisp/saturated when displayed small — see note below. **Currently live**: `Website/components/impact-calculator.tsx` (vegan impact calculator slider thumb), light mode.
- **`variant-solid-barn-dark.png`** — same solid-fill treatment, dark brown fill, orange horseshoe, larger baked resolution (648×409). **Currently live**: same slider thumb, dark mode.

## How these were made (in case a piece needs regenerating)

- **Isolating the barn from the ring** is the hard part: the ring stroke and the barn/silo linework are drawn in the *exact same* sage green, so a plain color-based mask can't tell them apart. The trick used: measure the ring's true inner radius at many angles from the badge center (it's hand-drawn, so it wobbles — ranges roughly 279–296px from center on the 720×684 original around center ≈(359,345)), then mask everything within a radius safely inside that minimum (268px worked) as "barn," and additionally zero out any pixel close to the background cream color (to strip webp-compression noise near the mask boundary — otherwise faint ghost arcs show up when the piece is later composited onto a *different* colored background).
- **Filling the ring circle solid** (`piece-ring-circle-*-fill.png`): a fixed-radius fill leaves a visible gap/ring-mismatch band since the ring's true edge varies by angle. Use `PIL.ImageDraw.floodfill` from a seed point clearly inside the ring but outside the barn/text silhouette instead — it follows the ring's actual irregular boundary with no gaps. A pure radius-based fill first (to a safe interior radius) plus a flood-fill for the outer annulus works too and is more robust against enclosed pockets (e.g. inside the original hand-lettering) that a single outside-in flood fill can't reach.
- **Filling the barn shape solid** (`variant-solid-barn-*.png`): start from the outline piece, build a binary mask of the stroke pixels, close small gaps with `scipy.ndimage.binary_closing`, then `scipy.ndimage.binary_fill_holes` to solidify the enclosed silhouette (handles the siding-plank subdivisions and silo divider line automatically as one shape).
- **Recoloring the horseshoe** (brown → orange): classify pixels by color-distance to brown vs. sage, recolor only the brown-classified ones. For anything meant to display *small* (like the slider thumb), also run `scipy.ndimage.binary_dilation` on that mask by a couple pixels before recoloring and bake the file at a resolution close to its real display size — thin 1-2px strokes lose saturation badly under repeated resampling (source → Next.js image optimizer → browser downscale) and read as muddy brown instead of crisp orange otherwise.
- **Circle badge barn enlargement ceiling**: with the ring still present, the barn+silo composition can only grow to about 1.15–1.18x before the silo or roofline starts clipping the ring — the composition is wide (silo sits close to the right edge already). Drop the ring entirely (outline-only or solid-fill variants) to go bigger.
