// Slim, high-contrast strip above the nav. One message, looping — a
// continuous CSS marquee, no JS timer, stops under prefers-reduced-motion.

const MESSAGE = "Freshly pressed in Bergen — Order by 14:00 for next day delivery";

export function AnnouncementBar() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[var(--foreground)] py-2.5 text-[var(--background)]">
      <div className="marquee-track inline-block">
        <span className="px-6 text-xs font-medium tracking-wide sm:text-sm">{MESSAGE}</span>
        <span className="px-6 text-xs font-medium tracking-wide sm:text-sm" aria-hidden="true">
          {MESSAGE}
        </span>
      </div>
    </div>
  );
}
