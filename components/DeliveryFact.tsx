// The fact block: pressed-on date + delivery day + cutoff. Deliberately
// plain — ink on paper, no state color, no decoration beyond the
// cap-stamp marks added in Phase 7 — so it reads as fact, not marketing.

export function DeliveryFact({ pressedOn }: { pressedOn?: string }) {
  return (
    <div className="rounded-[24px] bg-[var(--surface)] p-6 text-sm">
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
        <dt className="text-[var(--muted)]">Pressed</dt>
        <dd className="font-medium">{pressedOn ?? "Stamped on the cap"}</dd>

        <dt className="text-[var(--muted)]">Fridge life</dt>
        <dd className="font-medium">7 days unopened, from the press date</dd>

        <dt className="text-[var(--muted)]">Order by</dt>
        <dd className="font-medium">14:00 for next dispatch</dd>

        <dt className="text-[var(--muted)]">Arrives</dt>
        <dd className="font-medium">
          Next day — Bergen, Åsane, Fyllingsdalen. Two days — rest of Vestland.
        </dd>
      </dl>
    </div>
  );
}
