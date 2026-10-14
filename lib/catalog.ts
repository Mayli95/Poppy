// Poppy catalog data — single source of truth for states, drinks, boosters,
// the bundle, and gear. Greybox pages read from this; later phases (style,
// imagery) style the same data, they don't change its shape.

export type StateSlug = "wake-up" | "refuel" | "cool-down" | "reset";

export interface StateInfo {
  slug: StateSlug;
  name: string;
  headline: string;
  subline: string;
  intro: string;
  colorToken: string; // referenced from Phase 7 onward; unused while greyboxing
}

export const states: StateInfo[] = [
  {
    slug: "wake-up",
    name: "Wake Up",
    headline: "WAKE UP",
    subline: "For when you need a lift and want something bright and energizing.",
    intro: "Citrus, ginger, a little cayenne where it counts. Built to get you upright, no lecture about mornings required.",
    colorToken: "wake-up",
  },
  {
    slug: "refuel",
    name: "Refuel",
    headline: "REFUEL",
    subline: "For when you need something satisfying to help you replenish after a busy day or a workout.",
    intro: "Protein, beetroot, oats — the drinks that know you're not done yet. You did the hard part; this is the easy part.",
    colorToken: "refuel",
  },
  {
    slug: "cool-down",
    name: "Cool Down",
    headline: "COOL DOWN",
    subline: "For when you want something refreshing, crisp, and revitalizing.",
    intro: "Cucumber, mint, melon. The closest thing we sell to doing nothing — nothing here is trying to impress you.",
    colorToken: "cool-down",
  },
  {
    slug: "reset",
    name: "Reset",
    headline: "RESET",
    subline: "For when you want something tangy, grounding, or different from your usual routine.",
    intro: "Charcoal, celery, bitter greens. The one state that isn't trying to be fun — it's the one that gets you back to having fun again.",
    colorToken: "reset",
  },
];

export const getState = (slug: string) => states.find((s) => s.slug === slug);

export type Category = "juice" | "kombucha" | "shake" | "shot" | "bundle";

export interface SizeOption {
  label: string;
  priceKr: number;
}

export interface Product {
  slug: string;
  name: string;
  states: StateSlug[];
  category: Category;
  ingredients: string;
  description: string;
  intensity?: string; // kombucha only — intensity cue before flavor name
  seasonal?: boolean;
  sizes: SizeOption[];
  sixPack?: SizeOption;
  boxOfTen?: SizeOption; // shots only
  imageId: string;
  pressedOn?: string; // demo date for the fact block
  bestseller?: boolean;
  /** Public path to a real supplied product photo, when one exists.
   *  Falls back to the ImageBox placeholder when absent. */
  realImage?: string;
}

export const products: Product[] = [
  // ---------- Wake Up ----------
  {
    slug: "bright-idea",
    name: "Bright Idea",
    states: ["wake-up"],
    category: "juice",
    ingredients: "Orange, ginger, turmeric",
    description: "Orange does the obvious job. Ginger and turmeric do the ones you don't expect from a breakfast juice.",
    sizes: [{ label: "250ml", priceKr: 49 }, { label: "500ml", priceKr: 75 }],
    imageId: "img-bright-idea",
    pressedOn: "Mon 12 Oct",
  },
  {
    slug: "rooftop-alarm",
    name: "Rooftop Alarm",
    states: ["wake-up"],
    category: "juice",
    ingredients: "Grapefruit, turmeric, black pepper",
    description: "Grapefruit does the waking up. Turmeric and black pepper do the staying up. Drink it before coffee, not instead of it.",
    sizes: [{ label: "250ml", priceKr: 49 }, { label: "500ml", priceKr: 75 }],
    sixPack: { label: "Six-pack (one flavor or mixed)", priceKr: 269 },
    imageId: "img-rooftop-alarm",
    pressedOn: "Mon 12 Oct",
    bestseller: true,
  },
  {
    slug: "loud-hour",
    name: "Loud Hour",
    states: ["wake-up"],
    category: "kombucha",
    ingredients: "Ginger, lemon, live kombucha culture",
    description: "Ginger up front, a sour kick on the way down. If you've never had kombucha before, this is the one that tells you the truth about it.",
    intensity: "Medium tang — a real kombucha, not a soft one.",
    sizes: [{ label: "250ml", priceKr: 49 }, { label: "500ml", priceKr: 75 }],
    imageId: "img-loud-hour",
    pressedOn: "Mon 12 Oct",
    bestseller: true,
  },
  {
    slug: "fjord-punch",
    name: "Fjord Punch",
    states: ["wake-up"],
    category: "juice",
    ingredients: "Sea buckthorn, apple",
    description: "Sea buckthorn tastes like a tangerine that's annoyed at you. Apple calms it down by about fifteen percent.",
    seasonal: true,
    sizes: [{ label: "250ml", priceKr: 52 }, { label: "500ml", priceKr: 79 }],
    imageId: "img-fjord-punch",
    pressedOn: "Tue 13 Oct",
  },
  {
    slug: "second-wind",
    name: "Second Wind",
    states: ["wake-up"],
    category: "kombucha",
    ingredients: "Rosehip, hibiscus, live kombucha culture",
    description: "For people who want the probiotics without the face they associate with vinegar.",
    intensity: "Light — barely any tang, closer to a sparkling tea than a kombucha.",
    seasonal: true,
    sizes: [{ label: "250ml", priceKr: 49 }, { label: "500ml", priceKr: 75 }],
    imageId: "img-second-wind",
    pressedOn: "Tue 13 Oct",
  },

  // ---------- Refuel ----------
  {
    slug: "clock-out",
    name: "Clock Out",
    states: ["refuel"],
    category: "shake",
    ingredients: "Coffee, 20g protein, oat milk",
    description: "Real coffee, 20 grams of protein, nothing that tastes like a protein shake pretending to be coffee.",
    sizes: [{ label: "250ml", priceKr: 59 }, { label: "500ml", priceKr: 89 }],
    imageId: "img-clock-out",
    realImage: "/products/clock-out.png",
    pressedOn: "Mon 12 Oct",
  },
  {
    slug: "heavy-lifter",
    name: "Heavy Lifter",
    states: ["refuel", "reset"],
    category: "juice",
    ingredients: "Beetroot, ginger, sour cherry",
    description: "Beetroot's nitrates are the whole reason athletes drink this stuff before anyone made it taste good. We made it taste good anyway.",
    sizes: [{ label: "250ml", priceKr: 55 }, { label: "500ml", priceKr: 85 }],
    sixPack: { label: "Six-pack (one flavor or mixed)", priceKr: 289 },
    imageId: "img-heavy-lifter",
    pressedOn: "Mon 12 Oct",
    bestseller: true,
  },
  {
    slug: "full-tank",
    name: "Full Tank",
    states: ["refuel"],
    category: "shake",
    ingredients: "Banana, peanut butter, oats, oat milk",
    description: "Actual peanut butter, not peanut ‘essence.’ Shake it — it's thick enough to need convincing.",
    sizes: [{ label: "250ml", priceKr: 59 }, { label: "500ml", priceKr: 89 }],
    imageId: "img-full-tank",
    pressedOn: "Mon 12 Oct",
    bestseller: true,
  },
  {
    slug: "harvest-load",
    name: "Harvest Load",
    states: ["refuel"],
    category: "shake",
    ingredients: "Pumpkin, almond, cinnamon, oat milk",
    description: "Tastes like the inside of a bakery. Has more protein than the inside of a bakery.",
    seasonal: true,
    sizes: [{ label: "250ml", priceKr: 59 }, { label: "500ml", priceKr: 89 }],
    imageId: "img-harvest-load",
    pressedOn: "Tue 13 Oct",
  },
  {
    slug: "slow-burn",
    name: "Slow Burn",
    states: ["refuel"],
    category: "shake",
    ingredients: "Fig, oats, cinnamon, oat milk",
    description: "Figs are basically nature's way of pre-sweetening something so we don't have to.",
    seasonal: true,
    sizes: [{ label: "250ml", priceKr: 59 }, { label: "500ml", priceKr: 89 }],
    imageId: "img-slow-burn",
    pressedOn: "Tue 13 Oct",
  },

  // ---------- Cool Down ----------
  {
    slug: "pink-noise",
    name: "Pink Noise",
    states: ["cool-down"],
    category: "kombucha",
    ingredients: "Raspberry, live kombucha culture",
    description: "Raspberry up front, a clean kombucha fizz underneath — loud color, quiet tang.",
    intensity: "Light — more raspberry soda than kombucha.",
    sizes: [{ label: "250ml", priceKr: 49 }, { label: "500ml", priceKr: 75 }],
    imageId: "img-pink-noise",
    pressedOn: "Mon 12 Oct",
  },
  {
    slug: "cold-snap",
    name: "Cold Snap",
    states: ["cool-down"],
    category: "juice",
    ingredients: "Cucumber, mint, lime",
    description: "Ninety-five percent cucumber, which is a weird thing to be proud of and we're proud of it anyway.",
    sizes: [{ label: "250ml", priceKr: 45 }, { label: "500ml", priceKr: 69 }],
    imageId: "img-cold-snap",
    pressedOn: "Mon 12 Oct",
    bestseller: true,
  },
  {
    slug: "low-tide",
    name: "Low Tide",
    states: ["cool-down"],
    category: "kombucha",
    ingredients: "Watermelon, basil, live kombucha culture",
    description: "Closest thing we make to a childhood garden hose, just carbonated on purpose.",
    intensity: "Light — reads more like a soda than a kombucha.",
    sizes: [{ label: "250ml", priceKr: 49 }, { label: "500ml", priceKr: 75 }],
    imageId: "img-low-tide",
    pressedOn: "Mon 12 Oct",
  },
  {
    slug: "shade-break",
    name: "Shade Break",
    states: ["cool-down"],
    category: "kombucha",
    ingredients: "Green apple, mint, live kombucha culture",
    description: "A real kombucha bite under the mint — don't let the color fool you.",
    intensity: "Medium tang, sharp finish.",
    seasonal: true,
    sizes: [{ label: "250ml", priceKr: 49 }, { label: "500ml", priceKr: 75 }],
    imageId: "img-shade-break",
    pressedOn: "Tue 13 Oct",
  },
  {
    slug: "still-water",
    name: "Still Water",
    states: ["cool-down"],
    category: "juice",
    ingredients: "Pear, cucumber, lime",
    description: "We called it Still Water because it isn't, and that joke is doing a lot of work on this label.",
    seasonal: true,
    sizes: [{ label: "250ml", priceKr: 45 }, { label: "500ml", priceKr: 69 }],
    imageId: "img-still-water",
    pressedOn: "Tue 13 Oct",
  },

  // ---------- Reset ----------
  {
    slug: "gold-standard",
    name: "Gold Standard",
    states: ["reset"],
    category: "shot",
    ingredients: "Sea buckthorn, ginger, lemon",
    description: "Sea buckthorn again, in sixty quiet milliliters — doing a completely different job than it does in Wake Up. This one's about getting your bearings back, not getting going.",
    seasonal: true,
    sizes: [{ label: "60ml", priceKr: 39 }],
    boxOfTen: { label: "Box of 10", priceKr: 349 },
    imageId: "img-gold-standard",
    realImage: "/products/gold-standard.png",
    pressedOn: "Tue 13 Oct",
  },
  {
    slug: "hard-reset",
    name: "Hard Reset",
    states: ["reset"],
    category: "juice",
    ingredients: "Charcoal, lemon, cayenne",
    description: "Activated charcoal, real cayenne, no apology. It looks like it's going to be terrible and then it isn't.",
    sizes: [{ label: "250ml", priceKr: 55 }, { label: "500ml", priceKr: 85 }],
    sixPack: { label: "Six-pack (one flavor or mixed)", priceKr: 289 },
    imageId: "img-hard-reset",
    pressedOn: "Mon 12 Oct",
    bestseller: true,
  },
  {
    slug: "green-light",
    name: "Green Light",
    states: ["reset"],
    category: "juice",
    ingredients: "Celery, pear, dill",
    description: "Dill is doing more work in this bottle than it's ever done in a juice before. We checked.",
    sizes: [{ label: "250ml", priceKr: 52 }, { label: "500ml", priceKr: 79 }],
    imageId: "img-green-light",
    pressedOn: "Mon 12 Oct",
  },
  {
    slug: "livers-honest-opinion",
    name: "Liver's Honest Opinion",
    states: ["reset"],
    category: "juice",
    ingredients: "Milk thistle, pear, ginger",
    description: "If your liver could leave a review of last Saturday, this is roughly what it would say.",
    seasonal: true,
    sizes: [{ label: "250ml", priceKr: 55 }, { label: "500ml", priceKr: 85 }],
    imageId: "img-livers-honest-opinion",
    pressedOn: "Tue 13 Oct",
  },
  {
    slug: "clean-break",
    name: "Clean Break",
    states: ["reset"],
    category: "juice",
    ingredients: "Dandelion root, apple",
    description: "Dandelion root tastes more like coffee than it has any right to. No caffeine in it, which is sort of the point.",
    seasonal: true,
    sizes: [{ label: "250ml", priceKr: 52 }, { label: "500ml", priceKr: 79 }],
    imageId: "img-clean-break",
    pressedOn: "Tue 13 Oct",
  },

  // ---------- Boosters (shots) ----------
  {
    slug: "slap",
    name: "Slap",
    states: ["wake-up"],
    category: "shot",
    ingredients: "Ginger, cayenne",
    description: "It stings for about four seconds. That's the alarm clock, working.",
    sizes: [{ label: "60ml", priceKr: 39 }],
    boxOfTen: { label: "Box of 10", priceKr: 349 },
    imageId: "img-slap",
    pressedOn: "Tue 13 Oct",
  },
  {
    slug: "the-apology",
    name: "The Apology",
    states: ["reset"],
    category: "shot",
    ingredients: "Turmeric, black pepper",
    description: "For the version of you that made plans with last night's version of you and regrets it.",
    sizes: [{ label: "60ml", priceKr: 39 }],
    boxOfTen: { label: "Box of 10", priceKr: 349 },
    imageId: "img-the-apology",
    pressedOn: "Tue 13 Oct",
  },
  {
    slug: "rinse",
    name: "Rinse",
    states: ["cool-down", "reset"],
    category: "shot",
    ingredients: "Chlorophyll, mint",
    description: "Tastes like a very clean swimming pool. We mean that as a compliment.",
    sizes: [{ label: "60ml", priceKr: 39 }],
    boxOfTen: { label: "Box of 10", priceKr: 349 },
    imageId: "img-rinse",
    pressedOn: "Tue 13 Oct",
  },
  {
    slug: "grass-stain",
    name: "Grass Stain",
    states: ["refuel"],
    category: "shot",
    ingredients: "Wheatgrass, lime",
    description: "Green, grassy, slightly aggressive — the shot equivalent of a pep talk you didn't ask for.",
    sizes: [{ label: "60ml", priceKr: 39 }],
    boxOfTen: { label: "Box of 10", priceKr: 349 },
    imageId: "img-grass-stain",
    pressedOn: "Tue 13 Oct",
  },

  // ---------- Bundle ----------
  {
    slug: "the-whole-board",
    name: "The Whole Board",
    states: ["wake-up", "refuel", "cool-down", "reset"],
    category: "bundle",
    ingredients: "One bottle from each state, plus two more we pick that week",
    description: "We can't promise which four you'll get beyond one-per-state — the fifth and sixth are whatever's loudest in the fridge that morning. If you want a say in it, order the states separately.",
    sizes: [{ label: "Six 250ml bottles", priceKr: 285 }],
    imageId: "img-the-whole-board",
    pressedOn: "Packed day of dispatch",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const bestsellers = () => products.filter((p) => p.bestseller);
export const seasonalProducts = () => products.filter((p) => p.seasonal);
export const sixPackEligible = () => products.filter((p) => p.sixPack);
export const productsForState = (slug: StateSlug) => products.filter((p) => p.states.includes(slug) && p.category !== "bundle" && p.category !== "shot");
export const shotsForState = (slug: StateSlug) => products.filter((p) => p.states.includes(slug) && p.category === "shot");

// ---------- Hero carousel ----------
// One flagship product per state, for the homepage hero swipe. Background
// colors here are true-to-product (what the drink actually looks like),
// not the softer brand pastels used elsewhere on the site — see
// docs/decisions.md.
export interface HeroSlide {
  state: StateSlug;
  productSlug: string;
  bgColor: string;
  /** Short, plain-spoken product blurb for the hero only — distinct from
   *  the product's own description/voice used on its product page. */
  blurb: string;
}

export const heroSlides: HeroSlide[] = [
  {
    state: "wake-up",
    productSlug: "bright-idea",
    bgColor: "var(--hero-wake)",
    blurb: "Our Wake Up Juice is a bright, citrusy blend of orange, ginger and turmeric, crafted to energize your morning and sharpen your focus.",
  },
  {
    state: "refuel",
    productSlug: "clock-out",
    bgColor: "var(--hero-refuel)",
    blurb: "Our Coffee Shake is a rich & velvety-smooth shake packed with 20g of protein for a deliciously satisfying refuel.",
  },
  {
    state: "cool-down",
    productSlug: "pink-noise",
    bgColor: "var(--hero-cool)",
    blurb: "Our Raspberry Kombucha is a light, fizzy sip bursting with berry flavor to cool you down and refresh your senses.",
  },
  {
    state: "reset",
    productSlug: "gold-standard",
    bgColor: "var(--hero-reset)",
    blurb: "Our Sea Buckthorn Shot is a bold, golden blend of ginger and lemon, made to reset your system and restore your balance.",
  },
];

// ---------- Gear ----------
export interface GearOption {
  label: string;
  priceKr: number;
}

export interface GearProduct {
  slug: string;
  name: string;
  description: string;
  sizeOptions: GearOption[];
  colorOptions?: string[];
  imageId: string;
}

export const gear: GearProduct[] = [
  {
    slug: "the-refill",
    name: "The Refill",
    description: "Same bottle we press into, minus our label. The sleeve is there so you stop dropping it on the kitchen floor — we learned that one the hard way.",
    sizeOptions: [
      { label: "350ml", priceKr: 189 },
      { label: "500ml", priceKr: 229 },
      { label: "750ml", priceKr: 269 },
    ],
    colorOptions: ["Wake Up red", "Refuel amber", "Cool Down teal", "Reset lemon"],
    imageId: "img-the-refill",
  },
  {
    slug: "the-jug",
    name: "The Jug",
    description: "Not precious about this one: it's a jug. It pours without the little dribble down the side, which is the only feature that matters.",
    sizeOptions: [{ label: "1L stainless", priceKr: 349 }],
    imageId: "img-the-jug",
  },
  {
    slug: "the-tamp",
    name: "The Tamp",
    description: "If you own a press and you're using a wooden spoon to push the pulp through, stop. This is fourteen minutes of your life back, every batch.",
    sizeOptions: [{ label: "Standard", priceKr: 149 }],
    imageId: "img-the-tamp",
  },
  {
    slug: "the-scrub",
    name: "The Scrub",
    description: "Gets to the bottom of a 750ml bottle without you needing forearms like ours.",
    sizeOptions: [{ label: "Long handle", priceKr: 79 }],
    imageId: "img-the-scrub",
  },
  {
    slug: "the-sack",
    name: "The Sack",
    description: "The one we actually used on the cargo bike. Holds six bottles without clinking them into dust.",
    sizeOptions: [
      { label: "Standard", priceKr: 99 },
      { label: "Large", priceKr: 129 },
    ],
    imageId: "img-the-sack",
  },
];

export const getGear = (slug: string) => gear.find((g) => g.slug === slug);
