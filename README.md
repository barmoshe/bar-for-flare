# bar-for-flare

An ad-hoc, personalized job-application page Bar Moshe built for the **AI
Engineer** role at **Flare** (legal tech, Tel Aviv), in Flare's real visual
language, read live off helloflare.com: off-white surface, uppercase serif
display headlines (Century Old Style on their site; Playfair Display stands in)
in navy #111C38, italic serif eyebrows and card numerals, DM Sans body,
rectangular navy CTAs with arrows, a pale-blue band with a floating app mock
(chat bubbles, sage-green accents), a pale-green band with numbered
promise-style cards, and a navy close.

The centerpiece reframes Flare's floating phone mock as the agent flow Bar
builds: client intake message → AI intake agent → generated draft with an
attorney-approval gate → client status update, with "Evals green" / "Retries
on" floating cards.

Copy is terse CV register: what shipped, where it runs, one line each. Live
links (MDP + MCP server, temporal-plugin, Temporal Code Exchange pipeline,
MIDI GPT API, entailer, MIDI Agent, Biome Synth); employer work is named,
not linked.

Not affiliated with Flare. `robots: noindex` — a private, shareable link.
Standalone sibling repo matching the `bar-for-*` application-site pattern.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Plain CSS (scoped under `.fl-root`) + GSAP (ScrollTrigger, reveals only)
- `next/og` share card (`app/opengraph-image.tsx`)
- Motion is CSS + GSAP fade-ups, gated on `prefers-reduced-motion`; legible with no JS

## Run

```bash
npm install
npm run dev     # http://localhost:3103
npm run build   # production build
npm run lint    # eslint (jsx-a11y gate)
```
