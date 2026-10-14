import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { ImageBox } from "@/components/ImageBox";
import { states, getState, productsForState, shotsForState } from "@/lib/catalog";

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

// Composition: a loose two-up stagger (large/small/large/small) rather than
// a uniform grid — this is the shelf, not a catalog page, and drinks of
// different formats sit next to each other on purpose. Shots get their own
// quieter row at the bottom since they're a fast add-on, not the main draw.
// No card borders anywhere — the rounded product photos carry the shape.

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: slug } = await params;
  const state = getState(slug);
  if (!state) notFound();

  const drinks = productsForState(state.slug);
  const shots = shotsForState(state.slug);

  return (
    <div>
      <main>
        <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-24">
          <p className="mb-3 text-sm font-semibold text-[var(--muted)]">
            State {states.findIndex((s) => s.slug === state.slug) + 1}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-6xl font-bold leading-[0.95] sm:text-7xl md:text-8xl">
            {state.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--muted)]">{state.intro}</p>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
            {drinks.map((p, i) => (
              <ProductCard
                key={p.slug}
                product={p}
                currentState={state.slug}
                size={i % 3 === 0 ? "large" : "small"}
              />
            ))}
          </div>
        </section>

        {shots.length > 0 && (
          <section className="bg-[var(--surface)]">
            <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
              <p className="mb-8 text-sm font-semibold text-[var(--muted)]">
                Shots that work for {state.name.toLowerCase()}, too
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
                {shots.map((p) => (
                  <a key={p.slug} href={`/product/${p.slug}`} className="group block">
                    <ImageBox
                      id={p.imageId}
                      src={p.realImage}
                      aspect="aspect-square"
                      className="mb-3 transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                    <p className="font-bold">{p.name}</p>
                    <p className="text-sm text-[var(--muted)]">{p.ingredients}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
