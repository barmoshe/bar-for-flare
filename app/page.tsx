import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import FlareApp from "@/src/marketing/flare/FlareApp";

// Flare's display face (read live off helloflare.com, 2026-07-03) is
// "Century Old Style Std", an Adobe serif: weight-400 UPPERCASE headlines
// (h1 82px, lh ~1.05) in navy #111C38. Playfair Display is the Google
// stand-in; body is DM Sans, exactly as on their site.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fl-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fl-sans",
  display: "swap",
});

// Ad-hoc, personalized application page for Bar Moshe's "AI Engineer"
// application to Flare (legal tech, Tel Aviv). Built in Flare's own visual
// language, read live off helloflare.com: off-white surface, uppercase serif
// display headlines with italic serif eyebrows, DM Sans body, rectangular
// navy CTAs with arrows, pale-blue and pale-green section bands, a floating
// app mock with chat bubbles, numbered promise-style cards, navy close.
// Noindex, a shareable link for the Flare team.
const ogTitle = "Bar Moshe × Flare — AI Engineer";
const ogDescription =
  "Bar Moshe, AI builder and full-stack engineer in Israel. LLM pipelines with retries and evals, MCP servers on npm, agents and the orchestration behind them (Temporal Code Exchange featured), and the DevOps to run it all.";

export const metadata: Metadata = {
  title: ogTitle,
  description: ogDescription,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: "Bar Moshe",
    title: ogTitle,
    description: ogDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@barmoshe1",
    creator: "@barmoshe1",
    title: ogTitle,
    description: ogDescription,
  },
};

export default function FlarePage() {
  return (
    <div className={`${playfair.variable} ${dmSans.variable}`}>
      <FlareApp />
    </div>
  );
}
