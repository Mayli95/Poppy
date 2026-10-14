import Link from "next/link";
import { ImageBox } from "@/components/ImageBox";
import { sixPackEligible, getProduct, products } from "@/lib/catalog";

export default function MultipacksPage() {
  const sixPacks = sixPackEligible();
  const wholeBoard = getProduct("the-whole-board");
  const boosterBoxes = products.filter((p) => p.boxOfTen);

  return (
    <main>
      <section className="bg-[var(--dark)] text-[var(--dark-ink)]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-28">
          <h1 className="font-[family-name:var(--font-display)] text-6xl font-bold sm:text-7xl">
            Good things come in sixes.
          </h1>
          <p className="mt-5 max-w-md text-lg text-[var(--dark-ink)]/80">
            Stock your fridge with the drinks you love. Pick a favorite or
            mix up your box.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
          Your go-to six — one flavor, six bottles
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
          {sixPacks.map((p) => (
            <Link key={p.slug} href={`/product/${p.slug}`} className="group block">
              <ImageBox
                id={p.imageId}
                src={p.realImage}
                aspect="aspect-square"
                className="mb-4 transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">{p.name}</h3>
              <p className="text-[15px] text-[var(--muted)]">{p.ingredients}</p>
              <p className="mt-2 font-semibold">{p.sixPack?.priceKr}kr for six</p>
            </Link>
          ))}
        </div>

        <h2 className="mb-8 mt-20 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
          The mixed six
        </h2>
        {wholeBoard && (
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <ImageBox id={wholeBoard.imageId} aspect="aspect-[5/4]" />
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-4xl font-bold">{wholeBoard.name}</h3>
              <p className="mt-4 max-w-sm text-lg text-[var(--muted)]">{wholeBoard.description}</p>
              <p className="mt-5 text-2xl font-bold">{wholeBoard.sizes[0].priceKr}kr</p>
              <Link
                href={`/product/${wholeBoard.slug}`}
                className="mt-6 inline-block rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-bold text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Build Your Box
              </Link>
            </div>
          </div>
        )}

        <h2 className="mb-8 mt-20 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
          Boosters — box of 10
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {boosterBoxes.map((p) => (
            <Link key={p.slug} href={`/product/${p.slug}`} className="group block">
              <ImageBox
                id={p.imageId}
                src={p.realImage}
                aspect="aspect-square"
                className="mb-3 transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-[var(--muted)]">{p.boxOfTen?.priceKr}kr / box of 10</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
