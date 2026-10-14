// The wordmark — set in the serif display face used for the hero lockup,
// so the same "Poppy" logotype appears everywhere (nav, hero, footer)
// rather than having two different logo treatments on the site.

export function PoppyMark({
  size = "text-2xl",
  tone = "ink",
}: {
  size?: string;
  tone?: "ink" | "light";
}) {
  return (
    <span
      className={`inline-block font-[family-name:var(--font-serif)] ${size} font-bold tracking-tight transition-transform duration-300 ease-out hover:-rotate-2 ${
        tone === "light" ? "text-[var(--dark-ink)]" : "text-[var(--foreground)]"
      }`}
    >
      Poppy
    </span>
  );
}
