export default function WholesalePage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8 md:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
        Serve Poppy at your place.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
        We supply a small selection of cafés and gyms around Bergen with
        weekly crates — cold-pressed juice, kombucha and shots delivered on
        the same schedule as everything else we press. It&apos;s a small part
        of what we do, which is exactly why we can still show up with
        something fresh every week.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
        If that sounds like your café or gym, tell us roughly how many
        bottles a week and which state your customers reach for most —
        we&apos;ll take it from there.
      </p>
      <a
        href="mailto:wholesale@poppydrinks.no"
        className="mt-8 inline-block rounded-full border border-[var(--foreground)] px-7 py-4 text-sm font-bold transition-colors duration-200 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
      >
        wholesale@poppydrinks.no
      </a>
    </main>
  );
}
