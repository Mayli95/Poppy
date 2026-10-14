import Link from "next/link";
import { states } from "@/lib/catalog";
import { PoppyMark } from "./PoppyMark";

const columns = [
  {
    heading: "Shop",
    links: [
      ...states.map((s) => ({ label: s.name, href: `/${s.slug}` })),
      { label: "All Drinks", href: "/all-drinks" },
      { label: "Multipacks", href: "/multipacks" },
      { label: "Bottles & Gear", href: "/gear" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Delivery & Freshness", href: "/delivery" },
      { label: "Shipping and Returns", href: "/delivery" },
      { label: "FAQs", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Poppy",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Wholesale enquiries", href: "/wholesale" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--background)]">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <PoppyMark />
            <p className="mt-3 max-w-[22ch] text-sm text-[var(--muted)]">
              Cold-pressed in Solheimsviken, Bergen. Sold by what it does for you.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                {col.heading}
              </p>
              <ul className="space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>Poppy Drinks AS · Solheimsviken, 5058 Bergen, Norway · Org. nr. 931 234 567</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/delivery" className="hover:underline">Privacy</Link>
            <Link href="/delivery" className="hover:underline">Terms</Link>
            <span>Prices in NOK, incl. VAT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
