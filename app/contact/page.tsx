export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8 md:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
        Get in touch.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
        Wrong order, broken bottle, a question about what&apos;s pressing
        this week — email is the fastest way to reach us.
      </p>
      <div className="mt-8 space-y-4 text-lg">
        <p>
          <a href="mailto:hei@poppydrinks.no" className="font-semibold underline underline-offset-4">
            hei@poppydrinks.no
          </a>
        </p>
        <p className="text-[var(--muted)]">Solheimsviken, 5058 Bergen</p>
      </div>
    </main>
  );
}
