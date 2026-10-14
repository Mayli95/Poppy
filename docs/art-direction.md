# Art Direction — Poppy

> **Updated 14 Oct 2026 for Direction v2** (see `docs/decisions.md`). Typography, the wordmark treatment, the repeating cap-stamp detail, and the spacing scale below are unchanged and still govern the build. The **Color** section is superseded by the table in `docs/decisions.md` → "Direction v2": each state now gets its own fully saturated field color (Wake Up `#FF5A1F`, Refuel `#1E3AF2`, Cool Down `#00D9C0`, Reset `#FF1F7A`) instead of the restrained single-hue-per-state system below, and the dark ink field once reserved for Reset is now a cross-section contrast background (Multipacks, Newsletter) rather than tied to one state. Imagery DNA still applies — state-colored seamless field backdrops — just with the new hex values.

## Positioning and voice

Poppy is the friend who tells you exactly what you need before you've finished explaining how you feel — loud about it, never precious about whether it's a kombucha or a smoothie. (Voice itself written in `docs/copy.md`; demonstration lines below.)

## Wordmark

Set "poppy" lowercase, one weight, in Bricolage Grotesque at 700 (not the variable's heaviest or lightest cut — 700 reads bold without tipping into a chunky display weight that would fight the product color behind it). Tracking: -0.02em (tight — the brief's existing mark is already lowercase and unfussy; tightening rather than spacing it out keeps it feeling like a cap-stamp, not a tech logo). Clear space equal to the cap-height of the "p" on all sides. Appears top-left on every page, always in ink `#161616` on light backgrounds and off-white `#FAF7F2` on the Reset page's dark field — it never takes on a state color itself, because the mark has to stay legible and constant while everything around it changes. It does not appear on product photography, on the fact-block, or anywhere inside a state's color field as a watermark — the wordmark's only job is wayfinding at the very top of the page.

## The repeating detail: the cap-stamp

Reason: the brief's one unprompted physical detail is "the day it was pressed is stamped on the cap, not a best-before guess." That's a real object this business already makes. The device: any short label, number, or tag in the interface — product index numbers on a state shelf, the intensity tag on a kombucha, the pressed-on date, the cart quantity — sits inside a circular notched ring (a plain circle with eight small notches cut into its edge, like a bottle cap's crimp, drawn in a single 1.5px stroke of the surrounding state's color or ink). It is never decorative-only: every time it appears, it is sitting on top of a real fact (a number, a date, a short word), never on empty space. It appears on: state shelf product numbers, the pressed-on-date badge, the intensity tag, the cart line-item quantity stepper, and the footer mark next to the trade-channel line. It does not appear on headlines, body copy, buttons, or the wordmark — it marks facts, not marketing.

## Typography

- **Display — Bricolage Grotesque** (variable, self-hosted via next/font/google). A grotesque with enough personality in its curve terminals to carry an enormous headline without reading as another neutral geometric sans. Used only for headlines, state names, and product names.
- **Body — Schibsted Grotesk** (self-hosted via next/font/google). A clean, humanist grotesque designed by a Norwegian newsroom type foundry — a small, real reason to use it for a Bergen brand, and deliberately quieter than the display face so it never competes with either the type or the color.

Scale (desktop / mobile where different):

| Token | Face | Size | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| display-xl | Bricolage 700 | 120px / 56px | 0.92 | -0.01em | state-room headline on homepage |
| display-l | Bricolage 700 | 72px / 40px | 0.95 | -0.01em | state shelf page headline |
| display-m | Bricolage 600 | 48px / 32px | 1.0 | 0 | product name on product page |
| display-s | Bricolage 600 | 32px / 24px | 1.05 | 0 | section headers (About, Gear, Delivery) |
| body-l | Schibsted 400 | 20px / 18px | 1.4 | 0 | intros, state descriptions |
| body-m | Schibsted 400 | 17px / 16px | 1.5 | 0 | product descriptions, page copy |
| body-s | Schibsted 500 | 14px / 14px | 1.5 | 0 | ingredients, microcopy |
| fact | Schibsted 500 | 15px / 14px | 1.4 | 0.01em | pressed-on date, delivery day, cutoff — set in ink regardless of state color, so it reads as fact rather than marketing |

No uppercase anywhere in the display or body scale. Where emphasis is needed it comes from size and the cap-stamp device, never from letterspaced caps.

## Color

| Role | Hex | Carries |
|---|---|---|
| Paper (neutral base) | `#FAF7F2` | ~55% of surface area across Wake Up / Refuel / Cool Down pages and all structural pages (About, Gear, cart) |
| Ink (neutral structure) | `#161616` | All body text, rules, the wordmark, the fact-block — and doubles as Reset's field color |
| Wake Up | `#FF4428` | Full-bleed field on the Wake Up homepage room and shelf page only; never appears outside that state's territory |
| Refuel | `#FFB400` | Full-bleed field on the Refuel homepage room and shelf page only |
| Cool Down | `#0FBFAE` | Full-bleed field on the Cool Down homepage room and shelf page only |
| Reset accent | `#E8FF5C` | Single accent inside the Reset state only (CTA button, cap-stamp stroke, intensity tag) — the one acid-bright note against Reset's dark ink field |

60/30/10 in practice: paper+ink carry roughly 60% of total surface area (all neutral/structural pages plus the 40% of each state page that is copy and whitespace), the active state color carries roughly 30% (the full-bleed product field), and a state's own secondary mark-making (the cap-stamp stroke, a single underline) is the remaining 10%. No color ever appears outside its own state's pages except ink and paper.

## Space

Base unit 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192 (space-1 through space-11).

- Homepage state rooms: 192px top/bottom padding on desktop, 64px on mobile — the point is that the product has room to be enormous, closer to 100coconuts' confidence than to a template's "section padding."
- Shelf and product pages: 96px section padding desktop / 48px mobile.
- Structural pages (About, Gear, Delivery, cart): 64px section padding — denser, because these are reference pages, not persuasion pages.
- Max width: 1280px for any text-led column; full-bleed (100vw) for state-room backgrounds and the dominant product image on shelf pages.
- Grid: homepage state rooms are not a grid at all — one asymmetric focal composition per room (product large and off-center, headline in the remaining negative space, never centered-both-axes). Shelf pages run a loose two-up stagger (large/small/large/small), not a uniform card grid. Product pages use a fixed two-column split (image field left, information right) above 768px, stacked below.

## Imagery DNA

Every Poppy photograph is one product or ingredient, shot dead-centre or at a slight diagonal lean, against a seamless field of solid color matching its home state — blood-orange `#FF4428` for Wake Up, golden amber `#FFB400` for Refuel, cold teal `#0FBFAE` for Cool Down, ink `#161616` for Reset — never white, never a lifestyle scene. Light comes from one large soft source placed directly above and slightly in front of the product, the way produce reads under an overcast Bergen sky: even and shadowless on the object itself, but it casts one soft, slightly elongated shadow pooling directly beneath the bottle so it still reads as resting on a real surface, not floating or cut out. The backdrop is a seamless paper or painted surface in the state color, with a faint, almost imperceptible grain so it never reads as a flat vector fill. Lens feel is a 90mm macro at f/8 from roughly a metre back — flat enough that labels and condensation stay sharp edge-to-edge, close enough that a 500ml bottle fills 65–75% of frame height. Color grade is high-saturation but true-to-life: the fruit, the cap, the liquid itself should look like it could stain a shirt; blacks stay warm and are never crushed to pure black, and any ice or condensation highlight stays clean rather than blown out. Nothing else ever enters frame: no hands, no props, no second product, no lifestyle setting, no added gradient mesh, no drop shadow beyond the single soft directional one described above.

## Motion raw material

Physical truths of the product, for Phase 8 to pick from:

- A kombucha cap twists a quarter-turn and releases with a short hiss.
- A cold bottle sweats the moment it leaves the fridge — condensation beading and sliding.
- Pressed juice settles and separates slightly in the bottle; it wants a shake before drinking.
- Six bottles go into a slotted insulated box upright, in a single practiced motion.
- The cap-stamp itself is a physical press at the end of the line — a short, decisive downward motion, not a slow fade.
- Pouring: color swirls into a glass and takes a second to even out.

## Voice, demonstrated

(Folded back from `docs/copy.md` — see that document for the full deck.)

- "Four moods. Four fridges, basically. Pick the one you're in."
- "We don't care if it's a kombucha or a smoothie — we care if it gets you where you're going."
- "Pressed Tuesday, stamped Tuesday, at your door Wednesday if you're in Bergen — not a guess."
