import { notFound } from "next/navigation";
import Link from "next/link";
import { ImageBox } from "@/components/ImageBox";
import { DeliveryFact } from "@/components/DeliveryFact";
import { products, getProduct, getState } from "@/lib/catalog";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

// Composition: fixed two-column split (image field left, information right)
// above 768px, stacked below. This is the densest page on the site — image,
// picker, intensity/seasonal tags, cross-state link, the fact block, and
// ingredients all stack in the right column in that priority order. Soft
// rounded chips and pill buttons throughout — no hard-edged boxes.

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const otherStates = product.states
    .map((s) => getState(s))
    .filter(Boolean);

  return (
    <div>
      <main className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          <div>
            <ImageBox id={product.imageId} src={product.realImage} aspect="aspect-[4/5]" className="w-full" />
          </div>

          <div>
            <div className="mb-3 flex flex-wrap gap-2 text-sm">
              {otherStates.map((s) => (
                <Link
                  key={s!.slug}
                  href={`/${s!.slug}`}
                  className="rounded-full bg-[var(--surface)] px-3 py-1 font-medium text-[var(--muted)]"
                >
                  {s!.name}
                </Link>
              ))}
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">
              {product.name}
            </h1>
            <p className="mt-2 text-[var(--muted)]">{product.ingredients}</p>

            {product.intensity && (
              <p className="mt-4 inline-block rounded-full bg-[var(--surface)] px-3 py-1 text-sm">
                {product.intensity}
              </p>
            )}
            {product.seasonal && (
              <p className="mt-2 text-sm text-[var(--muted)]">This season only</p>
            )}

            <p className="mt-6 max-w-md text-lg">{product.description}</p>

            {otherStates.length > 1 && (
              <p className="mt-4 text-sm text-[var(--muted)]">
                Also shelves in{" "}
                {otherStates
                  .filter((s) => s)
                  .map((s) => s!.name)
                  .join(" and ")}{" "}
                — same bottle, different job.
              </p>
            )}

            {/* Size / pack picker */}
            <div className="mt-8 space-y-2.5">
              {product.sizes.map((size) => (
                <button
                  key={size.label}
                  className="flex w-full items-center justify-between rounded-2xl bg-[var(--surface)] px-5 py-4 text-left transition-colors hover:bg-[var(--line)]"
                >
                  <span>{size.label}</span>
                  <span className="font-medium">{size.priceKr}kr</span>
                </button>
              ))}
              {product.sixPack && (
                <button className="flex w-full items-center justify-between rounded-2xl bg-[var(--foreground)] px-5 py-4 text-left text-[var(--background)]">
                  <span>{product.sixPack.label}</span>
                  <span className="font-medium">{product.sixPack.priceKr}kr</span>
                </button>
              )}
              {product.boxOfTen && (
                <button className="flex w-full items-center justify-between rounded-2xl bg-[var(--foreground)] px-5 py-4 text-left text-[var(--background)]">
                  <span>{product.boxOfTen.label}</span>
                  <span className="font-medium">{product.boxOfTen.priceKr}kr</span>
                </button>
              )}
            </div>

            <button className="mt-4 w-full rounded-full bg-[var(--foreground)] px-6 py-4 text-sm font-medium text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5">
              Add to cart
            </button>

            <div className="mt-10">
              <DeliveryFact pressedOn={product.pressedOn} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
