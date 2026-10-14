import Link from "next/link";
import { ImageBox } from "@/components/ImageBox";

// Composition: the one page that isn't product-forward — two-thirds line
// items, one-third summary card. Static mock of a populated cart for
// design purposes (real cart state, checkout and payment are out of scope
// for this build — see docs/decisions.md). Empty-state, six-pack-nudge and
// error microcopy for this flow are specified in docs/copy.md.

const lineItems = [
  { name: "Rooftop Alarm", detail: "500ml", qty: 2, priceKr: 75, imageId: "img-rooftop-alarm" },
  { name: "Heavy Lifter", detail: "Six-pack", qty: 1, priceKr: 289, imageId: "img-heavy-lifter" },
];

export default function CartPage() {
  const subtotal = lineItems.reduce((sum, i) => sum + i.priceKr * i.qty, 0);

  return (
    <div>
      <main className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold">Cart</h1>

        <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-[2fr_1fr]">
          <div className="divide-y divide-[var(--line)]">
            {lineItems.map((item) => (
              <div key={item.name + item.detail} className="flex gap-5 py-6 first:pt-0">
                <ImageBox id={item.imageId} aspect="aspect-square" className="h-28 w-28 shrink-0" />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-lg font-bold">{item.name}</p>
                    <p className="text-sm text-[var(--muted)]">{item.detail}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--muted)]">Qty {item.qty}</span>
                    <span className="font-medium">{item.priceKr * item.qty}kr</span>
                  </div>
                </div>
              </div>
            ))}

            <p className="pt-6 text-sm text-[var(--muted)]">
              You&apos;re two bottles off six-pack pricing on Rooftop Alarm — same box, less per bottle.
            </p>
          </div>

          <div className="h-fit rounded-[28px] bg-[var(--surface)] p-7">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--muted)]">Subtotal</span>
              <span className="font-medium">{subtotal}kr</span>
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">
              You&apos;re in — this one leaves tomorrow evening if ordered before 14:00, so it still arrives properly cold.
            </p>
            <Link
              href="/cart"
              className="mt-6 block w-full rounded-full bg-[var(--foreground)] px-6 py-4 text-center text-sm font-medium text-[var(--background)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Checkout
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
