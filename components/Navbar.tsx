"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { states } from "@/lib/catalog";
import { PoppyMark } from "./PoppyMark";

const primaryLinks = [
  { label: "All Drinks", href: "/all-drinks" },
  { label: "Multipacks", href: "/multipacks" },
  { label: "Bottles & Gear", href: "/gear" },
  { label: "About Us", href: "/about" },
];

const stateDot: Record<string, string> = {
  "wake-up": "var(--wake)",
  refuel: "var(--refuel)",
  "cool-down": "var(--cool)",
  reset: "var(--reset)",
};

const navItemClass = (active: boolean) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
    active ? "bg-white text-[var(--dark)]" : "text-white/80 hover:bg-white/15 hover:text-white"
  }`;

function IconButton({ label, children, href }: { label: string; children: React.ReactNode; href?: string }) {
  const className =
    "flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white hover:text-[var(--dark)]";
  if (href) {
    return (
      <Link href={href} aria-label={label} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" aria-label={label} className={className}>
      {children}
    </button>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [stateOpen, setStateOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Overlay mode: floats transparently on top of the homepage hero, logo
  // in white. Everywhere else it's a normal bar at the top of the page,
  // logo in ink. The pill nav itself — black, translucent, white text that
  // brightens on hover — stays the same everywhere.
  const overlay = pathname === "/";
  const isStateActive = states.some((s) => pathname === `/${s.slug}`);

  return (
    <header className={overlay ? "absolute inset-x-0 top-0 z-40" : "relative z-40"}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 sm:px-8">
        <Link href="/">
          <PoppyMark tone={overlay ? "light" : "ink"} />
        </Link>

        {/* Desktop center nav — black, translucent, white text */}
        <nav className="hidden items-center gap-1 rounded-full bg-black/30 px-2 py-2 backdrop-blur-md lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setStateOpen(true)}
            onMouseLeave={() => setStateOpen(false)}
          >
            <button
              type="button"
              onClick={() => setStateOpen((v) => !v)}
              className={`flex items-center gap-1 ${navItemClass(isStateActive)}`}
              aria-expanded={stateOpen}
            >
              Shop by State
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {stateOpen && (
              <div className="absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-2xl bg-[var(--background)] p-2 shadow-lg">
                {states.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface)]"
                  >
                    {s.name}
                    <span
                      className="h-3 w-3 rounded-full border border-[var(--foreground)]/15"
                      style={{ background: stateDot[s.slug] }}
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
          {primaryLinks.map((l) => (
            <Link key={l.href} href={l.href} className={navItemClass(pathname === l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-2">
          <IconButton label="Account">
            <svg width="18" height="18" viewBox="0 0 19 19" fill="none" aria-hidden="true">
              <circle cx="9.5" cy="6" r="3.25" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 17c1-3.5 4-5 6.5-5s5.5 1.5 6.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </IconButton>
          <IconButton label="Cart, 0 items" href="/cart">
            <svg width="18" height="18" viewBox="0 0 19 19" fill="none" aria-hidden="true">
              <path d="M4 6h11l-1 9.5a1 1 0 01-1 .9H6a1 1 0 01-1-.9L4 6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M7 6V5a2.5 2.5 0 015 0v1" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </IconButton>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white hover:text-[var(--dark)] lg:hidden"
          >
            <svg width="18" height="13" viewBox="0 0 20 14" fill="none" aria-hidden="true">
              <path d="M0 1H20M0 7H20M0 13H20" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mx-5 rounded-[28px] bg-[var(--background)] p-5 shadow-lg sm:mx-8 lg:hidden">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Shop by state</p>
          <div className="mb-4 grid grid-cols-2 gap-2">
            {states.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl bg-[var(--surface)] px-3 py-3 text-center text-sm font-semibold text-[var(--foreground)]"
              >
                {s.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-1 border-t border-[var(--line)] pt-3">
            {primaryLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm font-semibold text-[var(--foreground)]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
