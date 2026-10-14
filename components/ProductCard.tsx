import Link from "next/link";
import { ImageBox } from "./ImageBox";
import { getState, type Product, type StateSlug } from "@/lib/catalog";

export function ProductCard({
  product,
  currentState,
  size = "large",
}: {
  product: Product;
  currentState?: StateSlug;
  size?: "large" | "small";
}) {
  const otherState = product.states.find((s) => s !== currentState);
  const isDualListed = currentState && product.states.length > 1 && otherState;
  const lowPrice = product.sizes[0]?.priceKr;
  const highPrice = product.sizes[product.sizes.length - 1]?.priceKr;

  return (
    <Link
      href={`/product/${product.slug}`}
      className={`group block ${size === "large" ? "sm:col-span-2" : ""}`}
    >
      <ImageBox
        id={product.imageId}
        src={product.realImage}
        aspect={size === "large" ? "aspect-[16/10]" : "aspect-[4/5]"}
        className="mb-5 transition-transform duration-300 ease-out group-hover:scale-[1.02]"
      />
      <div className="flex items-start justify-between gap-3">
        <h3 className={size === "large" ? "text-3xl font-bold" : "text-xl font-bold"}>
          {product.name}
        </h3>
        <span className="whitespace-nowrap text-sm text-[var(--muted)]">
          {lowPrice}–{highPrice}kr
        </span>
      </div>
      <p className="mt-1.5 text-[15px] text-[var(--muted)]">{product.ingredients}</p>
      {product.intensity && (
        <p className="mt-3 inline-block rounded-full bg-[var(--surface)] px-3 py-1 text-xs">
          {product.intensity}
        </p>
      )}
      {product.seasonal && (
        <p className="mt-2 text-xs text-[var(--muted)]">This season only</p>
      )}
      {isDualListed && (
        <p className="mt-2 text-xs text-[var(--muted)]">
          Also shelves in {getState(otherState)?.name}
        </p>
      )}
    </Link>
  );
}
