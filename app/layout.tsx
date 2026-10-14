import type { Metadata } from "next";
import { Bricolage_Grotesque, Schibsted_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// The wordmark only — nav logo, hero lockup — not used for headlines
// elsewhere on the site. See docs/decisions.md.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Poppy — Bold cold-pressed drinks from Bergen",
  description:
    "Cold-pressed juice, kombucha, smoothies, protein shakes and wellness boosters, sorted by what you need. Pressed in Solheimsviken, Bergen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${schibsted.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased">
        <AnnouncementBar />
        {/* Relative positioning context so the nav can overlay the
            homepage hero while sitting in normal flow everywhere else. */}
        <div className="relative">
          <Navbar />
          {children}
        </div>
        <Footer />
        <AgentationProvider />
      </body>
    </html>
  );
}
