// Composition: a reference document, not a narrative. Two-column fact
// table for delivery zones, short declarative paragraphs for the
// reasoning, a visually separated Returns block last. Distinct from
// About's single-column essay and from every product-grid page.

const zones = [
  { zone: "Bergen city", time: "Next day" },
  { zone: "Åsane / Fyllingsdalen", time: "Next day" },
  { zone: "Rest of Vestland", time: "Two days" },
  { zone: "Further north", time: "We don't send it" },
];

export default function DeliveryPage() {
  return (
    <div>
      <main className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-24">
        <h1 className="font-[family-name:var(--font-display)] max-w-2xl text-5xl font-bold sm:text-6xl">
          The part everyone gets wrong is the day, not the drink.
        </h1>

        <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-sm font-medium text-[var(--muted)]">Delivery zones</h2>
            <table className="mt-4 w-full border-collapse text-left">
              <tbody>
                {zones.map((z) => (
                  <tr key={z.zone} className="border-b border-[var(--line)]">
                    <td className="py-3">{z.zone}</td>
                    <td className="py-3 text-right font-medium">{z.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-[var(--muted)]">
              <p>
                Order by 14:00 and we pack it that evening. We don&apos;t send
                anything further than the zones above — we&apos;re not going
                to pretend a box can sit in a sorting depot for three days
                and still be worth drinking. It can&apos;t, so we don&apos;t
                sell you the lie.
              </p>
              <p>
                Everything ships cold, in an insulated box, on the days
                we&apos;re actually pressing — order Friday afternoon and your
                box leaves Monday, not Saturday, because nobody&apos;s in the
                kitchen on a Saturday to pack it right. Checkout tells you
                your actual delivery day before you pay, not after.
              </p>
              <p>
                Every bottle has its press date stamped on the cap. Seven
                days from that date, in your fridge, unopened. Once it&apos;s
                open, drink it that day.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] bg-[var(--surface)] p-9">
            <h2 className="text-sm font-medium text-[var(--muted)]">Returns</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed">
              <p>
                We can&apos;t take a bottle back once it&apos;s left our
                fridge — it&apos;s unpasteurized, it&apos;s been through a
                delivery box, and we have no way of knowing what happened to
                it between our door and yours.
              </p>
              <p>
                If something arrived broken, warm, or just wrong, tell us
                within 24 hours with a photo and we&apos;ll replace it or
                refund it, no argument and no form to fill in. If you
                ordered the wrong flavor and it&apos;s still sealed and cold,
                that&apos;s on us to sort out too.
              </p>
              <p>
                What we won&apos;t do is take back something you&apos;ve
                opened, tasted, and decided you didn&apos;t like — that&apos;s
                not a returns policy, that&apos;s just us drinking your
                leftovers, and we press enough of our own.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
