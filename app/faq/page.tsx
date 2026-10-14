const faqs = [
  {
    q: "How fresh is fresh?",
    a: "Every bottle is cold-pressed, never pasteurized, with the press date stamped right on the cap. It's good for seven days in your fridge from that date, unopened. Once it's open, drink it that day.",
  },
  {
    q: "When will my order actually arrive?",
    a: "Order before 14:00 and we pack it that evening. Bergen, Åsane and Fyllingsdalen get it the next day; the rest of Vestland takes two. Order after 14:00 and it just moves to the next dispatch — checkout tells you the real day before you pay.",
  },
  {
    q: "Why is the same drink listed under two states?",
    a: "A couple of our drinks genuinely do two jobs — Heavy Lifter's beetroot works for both muscle recovery and as a gentle reset, so it shelves in both. Same bottle, different reason to reach for it.",
  },
  {
    q: "What's the difference between the two six-packs?",
    a: "Your go-to six is six bottles of one flavor. The mixed six (The Whole Board) gives you one bottle from each state plus two more we pick that week — the fastest way to figure out which state you actually live in.",
  },
  {
    q: "Can I return an opened bottle I didn't like?",
    a: "No — once it's opened we can't resell or safely re-chill it, and it's unpasteurized so we can't verify what happened to it after it left our fridge. If something arrived broken, warm or wrong, tell us within 24 hours with a photo and we'll sort it, no argument.",
  },
];

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8 md:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
        FAQs
      </h1>
      <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {faqs.map((f) => (
          <div key={f.q} className="py-6">
            <h2 className="text-lg font-bold">{f.q}</h2>
            <p className="mt-2 text-[var(--muted)]">{f.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
