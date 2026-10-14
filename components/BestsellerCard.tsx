import Link from "next/link";
import { ImageBox } from "./ImageBox";
import { getState, type Product } from "@/lib/catalog";

const stateDot: Record<string, string> = {
  "wake-up": "var(--wake)",
  refuel: "var(--refuel)",
  "cool-down": "var(--cool)",
  reset: "var(--reset)",
};

export function BestsellerCard({ product }: { product: Product }) {
  const size = product.sizes[0];
  return (
    <div className="group">
      <Link href={`/product/${product.slug}`} className="block overflow-hidden rounded-[28px]">
        <ImageBox
          id={product.imageId}
          src={product.realImage}
          aspect="aspect-[4/5]"
          className="transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </Link>

      <div className="pt-4">
        <div className="mb-1.5 flex flex-wrap gap-2.5">
          {product.states.map((s) => {
            const info = getState(s);
            return (
              <span key={s} className="flex items-center gap-1.5 text-xs font-medium text-[var(--muted)]">
                <span className="h-2 w-2 rounded-full" style={{ background: stateDot[s] }} />
                {info?.name}
              </span>
            );
          })}
        </div>

        <Link href={`/product/${product.slug}`}>
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">{product.name}</h3>
        </Link>
        <p className="mt-1 line-clamp-2 max-w-xs text-[15px] text-[var(--muted)]">{product.description}</p>
        <p className="mt-2 text-xs uppercase tracking-wide text-[var(--muted)]">
          {product.category} · {size.label}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold">{size.priceKr}kr</span>
          <button
            type="button"
            className="rounded-full bg-[var(--surface)] px-4 py-2 text-xs font-semibold transition-colors duration-200 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            Quick add
          </button>
        </div>
      </div>
    </div>
  );
}
