"use client";

import { useMemo, useState } from "react";
import { BestsellerCard } from "./BestsellerCard";
import type { Product } from "@/lib/catalog";

const formats = ["All", "juice", "kombucha", "shake", "shot"] as const;
const availability = ["All", "Core", "Seasonal"] as const;

export function AllDrinksGrid({ products }: { products: Product[] }) {
  const [format, setFormat] = useState<(typeof formats)[number]>("All");
  const [avail, setAvail] = useState<(typeof availability)[number]>("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (format !== "All" && p.category !== format) return false;
      if (avail === "Core" && p.seasonal) return false;
      if (avail === "Seasonal" && !p.seasonal) return false;
      return true;
    });
  }, [products, format, avail]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-6">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Format</p>
          <div className="flex flex-wrap gap-2">
            {formats.map((f) => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors ${
                  format === f
                    ? "bg-[var(--foreground)] text-[var(--background)]"
                    : "bg-[var(--surface)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Availability</p>
          <div className="flex flex-wrap gap-2">
            {availability.map((a) => (
              <button
                key={a}
                onClick={() => setAvail(a)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  avail === a
                    ? "bg-[var(--foreground)] text-[var(--background)]"
                    : "bg-[var(--surface)]"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-[28px] bg-[var(--surface)] p-10 text-center text-[var(--muted)]">
          Nothing matches that combination right now — try a different format.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3">
          {filtered.map((p) => (
            <BestsellerCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
