import Link from "next/link";
import { ImageBox } from "@/components/ImageBox";
import { gear } from "@/lib/catalog";

// Composition: an even, borderless grid — deliberately the plainest page
// on the site. Gear isn't sorted by state and shouldn't pretend to be; it
// reads as a hardware catalog, not a mood shelf.

export default function GearPage() {
  return (
    <div>
      <main>
        <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-24">
          <h1 className="font-[family-name:var(--font-display)] text-6xl font-bold sm:text-7xl">Gear</h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--muted)]">
            We started selling these because people kept turning up at the
            market stall asking where we got our own bottles. Fair question.
          </p>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3">
            {gear.map((g) => (
              <Link key={g.slug} href={`/gear/${g.slug}`} className="group block">
                <ImageBox
                  id={g.imageId}
                  aspect="aspect-[4/5]"
                  className="mb-4 transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
                <p className="text-xl font-bold">{g.name}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  From {g.sizeOptions[0].priceKr}kr
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
