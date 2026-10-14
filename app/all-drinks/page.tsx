import { AllDrinksGrid } from "@/components/AllDrinksGrid";
import { products } from "@/lib/catalog";

export default function AllDrinksPage() {
  const drinks = products.filter((p) => p.category !== "bundle");
  return (
    <main className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-6xl font-bold sm:text-7xl">
        All Drinks
      </h1>
      <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">
        Every juice, kombucha, shake and shot we&apos;re currently pressing —
        filter by format if you already know what you&apos;re after.
        Otherwise, Shop by State is usually faster.
      </p>
      <div className="mt-12">
        <AllDrinksGrid products={drinks} />
      </div>
    </main>
  );
}
