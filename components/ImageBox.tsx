import Image from "next/image";

// Greybox placeholder for a generated image, OR a real supplied product
// photo when `src` is given (see docs/decisions.md — two products now ship
// with real photography; the rest stay placeholders, labeled with the id
// from docs/image-plan.md, until Phase 6 generates the remaining shots.

export function ImageBox({
  id,
  src,
  aspect = "aspect-square",
  className = "",
  bare = false,
}: {
  id: string;
  /** Public path to a real photo. When present, renders the photo instead
   *  of the placeholder frame. */
  src?: string;
  aspect?: string;
  className?: string;
  /** Full-bleed usage (e.g. a hero background) — no rounding. */
  bare?: boolean;
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden ${bare ? "bg-transparent" : "rounded-[28px] bg-[var(--surface)]"} ${aspect} ${className}`}
      >
        <Image src={src} alt={id} fill sizes="(max-width: 768px) 90vw, 60vw" className="object-contain" priority={false} />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-[var(--surface)] text-center ${
        bare ? "" : "rounded-[28px]"
      } ${aspect} ${className}`}
    >
      <span className="px-3 font-mono text-xs text-[var(--muted)]">{id}</span>
    </div>
  );
}
