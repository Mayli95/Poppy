import Link from "next/link";
import { ImageBox } from "@/components/ImageBox";
import { BestsellerCard } from "@/components/BestsellerCard";
import { HeroCarousel } from "@/components/HeroCarousel";
import {
  states,
  getProduct,
  getState,
  bestsellers,
  seasonalProducts,
  sixPackEligible,
} from "@/lib/catalog";
import { gear } from "@/lib/catalog";

const roomHero: Record<string, string> = {
  "wake-up": "rooftop-alarm",
  refuel: "heavy-lifter",
  "cool-down": "cold-snap",
  reset: "hard-reset",
};

const stateSectionStyle: Record<
  string,
  { bg: string; ink: string; btnBg: string; btnText: string }
> = {
  "wake-up": {
    bg: "bg-[var(--wake)]",
    ink: "text-[var(--wake-ink)]",
    btnBg: "bg-[var(--wake-ink)]",
    btnText: "text-[var(--wake)]",
  },
  refuel: {
    bg: "bg-[var(--refuel)]",
    ink: "text-[var(--refuel-ink)]",
    btnBg: "bg-[var(--refuel-ink)]",
    btnText: "text-[var(--refuel)]",
  },
  "cool-down": {
    bg: "bg-[var(--cool)]",
    ink: "text-[var(--cool-ink)]",
    btnBg: "bg-[var(--cool-ink)]",
    btnText: "text-[var(--cool)]",
  },
  reset: {
    bg: "bg-[var(--reset)]",
    ink: "text-[var(--reset-ink)]",
    btnBg: "bg-[var(--reset-ink)]",
    btnText: "text-[var(--reset)]",
  },
};

export default function Home() {
  const hits = bestsellers();
  const seasonal = seasonalProducts().slice(0, 3);
  const mixAndMatch = sixPackEligible();
  const wholeBoard = getProduct("the-whole-board");

  return (
    <div>
      {/* Hero — swipeable carousel, one flagship product per state */}
      <HeroCarousel />

      {/* What state are you in? intro */}
      <section id="states" className="bg-[var(--background)] px-5 pb-10 pt-20 text-center sm:px-8 md:pt-28">
        <h2 className="font-[family-name:var(--font-display)] text-6xl font-bold sm:text-7xl md:text-8xl">
          What state are you in?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-[var(--muted)]">
          Four ways to find your feel-good. Start with what you need.
        </p>
      </section>

      {/* Four full-width state sections, alternating composition */}
      {states.map((s, i) => {
        const hero = getProduct(roomHero[s.slug]);
        const style = stateSectionStyle[s.slug];
        const imageLeft = i % 2 === 1;
        return (
          <section key={s.slug} className={`${style.bg} ${style.ink}`}>
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-32">
              <div className={imageLeft ? "md:order-2" : "md:order-1"}>
                <p className="mb-3 text-sm font-semibold opacity-70">
                  State {i + 1}
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-7xl font-extrabold leading-[0.9] tracking-tight sm:text-8xl lg:text-9xl">
                  {s.headline}
                </h2>
                <p className="mt-6 max-w-sm text-lg">{s.subline}</p>
                <Link
                  href={`/${s.slug}`}
                  className={`mt-8 inline-block rounded-full ${style.btnBg} ${style.btnText} px-7 py-4 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5`}
                >
                  Find your {s.name}
                </Link>
              </div>
              <div className={imageLeft ? "md:order-1" : "md:order-2"}>
                <ImageBox id={hero?.imageId ?? `hero-${s.slug}`} src={hero?.realImage} aspect="aspect-[4/5]" />
              </div>
            </div>
          </section>
        );
      })}

      {/* Bestsellers */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
            The Poppy people come back for.
          </h2>
          <Link href="/all-drinks" className="text-sm font-semibold underline underline-offset-4">
            Shop all drinks →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3">
          {hits.map((p) => (
            <BestsellerCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Multipacks */}
      <section className="bg-[var(--dark)] text-[var(--dark-ink)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
            Good things come in sixes.
          </h2>
          <p className="mt-4 max-w-md text-lg text-[var(--dark-ink)]/80">
            Stock your fridge with the drinks you love. Pick a favorite or
            mix up your box.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
            <div>
              <ImageBox id="img-six-single-flavor" aspect="aspect-[5/4]" className="mb-7" />
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold">Your go-to six</h3>
              <p className="mt-3 max-w-sm text-[var(--dark-ink)]/75">
                Six bottles of one flavor — Rooftop Alarm, Heavy Lifter or
                Hard Reset.
              </p>
              <p className="mt-4 text-sm text-[var(--dark-ink)]/60">
                From {Math.min(...mixAndMatch.map((p) => p.sixPack!.priceKr))}kr per six-pack
              </p>
              <Link
                href="/multipacks"
                className="mt-6 inline-block rounded-full bg-[var(--pop)] px-7 py-3.5 text-sm font-bold text-[var(--dark)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Build Your Box
              </Link>
            </div>

            <div>
              <ImageBox id={wholeBoard?.imageId ?? "img-the-whole-board"} aspect="aspect-[5/4]" className="mb-7" />
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold">The mixed six</h3>
              <p className="mt-3 max-w-sm text-[var(--dark-ink)]/75">
                {wholeBoard?.description}
              </p>
              <p className="mt-4 text-sm text-[var(--dark-ink)]/60">
                {wholeBoard?.sizes[0].priceKr}kr — {wholeBoard?.sizes[0].label}
              </p>
              <Link
                href={`/product/${wholeBoard?.slug}`}
                className="mt-6 inline-block rounded-full bg-[var(--pop)] px-7 py-3.5 text-sm font-bold text-[var(--dark)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Build Your Box
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal rotation */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
          Here for a good time. Maybe not a long time.
        </h2>
        <p className="mt-4 max-w-md text-lg text-[var(--muted)]">
          Our lineup changes with the seasons. When the ingredients are good,
          we press.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {seasonal.map((p) => (
            <Link key={p.slug} href={`/product/${p.slug}`} className="group block">
              <ImageBox id={p.imageId} src={p.realImage} aspect="aspect-[4/5]" className="transition-opacity duration-200 group-hover:opacity-80" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">This season only</p>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">{p.name}</h3>
              <p className="text-sm text-[var(--muted)]">{p.ingredients}</p>
            </Link>
          ))}
        </div>

        <Link
          href="/all-drinks"
          className="mt-10 inline-block rounded-full border border-[var(--foreground)] px-7 py-3.5 text-sm font-bold transition-colors duration-200 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
        >
          Explore What&apos;s Pressing
        </Link>
      </section>

      {/* Freshness and delivery */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
            Pressed fresh. Delivered on a schedule.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                n: "01",
                t: "Order by 14:00",
                d: "Place your order before 14:00 the day before your intended delivery date, subject to the confirmed delivery schedule.",
              },
              {
                n: "02",
                t: "We press",
                d: "Your drinks are made fresh in Poppy's own production space in Solheimsviken, Bergen.",
              },
              {
                n: "03",
                t: "Delivered to your door",
                d: "Receive your order according to the available delivery schedule.",
              },
            ].map((step) => (
              <div key={step.n}>
                <p className="font-[family-name:var(--font-display)] text-5xl font-bold text-[var(--muted)]">
                  {step.n}
                </p>
                <h3 className="mt-3 text-xl font-bold">{step.t}</h3>
                <p className="mt-2 text-[var(--muted)]">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[28px] bg-[var(--background)] p-8">
            <p className="text-lg font-medium">
              Every bottle has a seven-day refrigerated life from its
              pressing date. The pressing date is stamped on the cap.
            </p>
            <Link href="/delivery" className="mt-3 inline-block text-sm font-semibold underline underline-offset-4">
              Delivery &amp; Freshness →
            </Link>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <ImageBox id="img-origin-cargo-bike" aspect="aspect-[4/5]" />
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
              From a cargo bike to Solheimsviken.
            </h2>
            <p className="mt-5 max-w-md text-lg text-[var(--muted)]">
              Poppy started with a cargo bike, a rented kitchen, and a small
              batch of fresh drinks at Torgallmenningen. Today, we press in
              Solheimsviken and keep experimenting with bold combinations
              and seasonal ingredients.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block rounded-full border border-[var(--foreground)] px-7 py-3.5 text-sm font-bold transition-colors duration-200 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              Meet Poppy
            </Link>
          </div>
        </div>
      </section>

      {/* Bottles & gear */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
            Good drinks. Good bottles.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {gear.map((g) => (
              <Link key={g.slug} href={`/gear/${g.slug}`} className="group block">
                <ImageBox
                  id={g.imageId}
                  aspect="aspect-square"
                  className="transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
                <p className="mt-3 text-sm font-semibold">{g.name}</p>
                <p className="text-xs text-[var(--muted)]">From {g.sizeOptions[0].priceKr}kr</p>
              </Link>
            ))}
          </div>
          <Link
            href="/gear"
            className="mt-10 inline-block rounded-full border border-[var(--foreground)] px-7 py-3.5 text-sm font-bold transition-colors duration-200 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            Shop Bottles &amp; Gear
          </Link>
        </div>
      </section>

      {/* Cafés and gyms — understated */}
      <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[var(--line)] pt-10 sm:flex-row sm:items-center">
          <p className="max-w-md text-[var(--muted)]">
            Serve Poppy at your place. We supply a small selection of cafés
            and gyms around Bergen.
          </p>
          <Link href="/wholesale" className="shrink-0 text-sm font-semibold underline underline-offset-4">
            Ask About Wholesale →
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[var(--wake)] text-[var(--wake-ink)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 text-center sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
            Good stuff, straight to your inbox.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg opacity-80">
            New blends, seasonal drops, and the occasional reason to open
            the fridge.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@example.com"
              aria-label="Email address"
              className="min-w-0 flex-1 border border-[var(--wake-ink)]/30 bg-transparent px-4 py-3.5 text-sm placeholder:text-[var(--wake-ink)]/50"
            />
            <button type="submit" className="bg-[var(--wake-ink)] px-6 py-3.5 text-sm font-bold text-[var(--wake)]">
              Sign up
            </button>
          </form>
          <p className="mx-auto mt-4 max-w-md text-xs opacity-70">
            By signing up you agree to receive marketing emails from Poppy
            Drinks AS. Unsubscribe anytime. See our Privacy Policy for how
            we handle your data under GDPR.
          </p>
        </div>
      </section>
    </div>
  );
}
