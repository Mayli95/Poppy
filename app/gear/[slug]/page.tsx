import { notFound } from "next/navigation";
import { ImageBox } from "@/components/ImageBox";
import { gear, getGear } from "@/lib/catalog";

export function generateStaticParams() {
  return gear.map((g) => ({ slug: g.slug }));
}

export default async function GearProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getGear(slug);
  if (!item) notFound();

  return (
    <div>
      <main className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          <ImageBox id={item.imageId} aspect="aspect-[4/5]" className="w-full" />

          <div>
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{item.name}</h1>
            <p className="mt-6 max-w-md text-lg text-[var(--muted)]">{item.description}</p>

            <div className="mt-8 space-y-2.5">
              {item.sizeOptions.map((opt) => (
                <button
                  key={opt.label}
                  className="flex w-full items-center justify-between rounded-2xl bg-[var(--surface)] px-5 py-4 text-left transition-colors hover:bg-[var(--line)]"
                >
                  <span>{opt.label}</span>
                  <span className="font-medium">{opt.priceKr}kr</span>
                </button>
              ))}
            </div>

            {item.colorOptions && (
              <div className="mt-6">
                <p className="mb-2 text-sm text-[var(--muted)]">Sleeve color</p>
                <div className="flex flex-wrap gap-2">
                  {item.colorOptions.map((c) => (
                    <button key={c} className="rounded-full bg-[var(--surface)] px-4 py-2 text-sm transition-colors hover:bg-[var(--line)]">
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button className="mt-8 w-full rounded-full bg-[var(--foreground)] px-6 py-4 text-sm font-medium text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5">
              Add to cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
