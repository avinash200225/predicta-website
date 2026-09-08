# Predicta Sports — Nanobetting

A polished, investor-ready marketing site and interactive product demo for **Predicta Nanobetting**:
short-duration predictions on live sporting moments — the next possession, the next scorer, the
next 90 seconds.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

Production build:

```bash
npm run build && npm start
```

## Structure

A single public page (`/`). There is no interactive demo route — every product visual is a real
screenshot or device render of the Predicta app, served from `public/screens/`.

| Section | What it does |
| ------- | ------------ |
| Hero | Positioning plus the app slip render (`app-slip-front.png`). |
| The opportunity | Why live moments, framed for investors and partners. |
| One game, hundreds of moments | A calm list of moment types, not a wall of cards. |
| Anatomy of a nanobet | The angled app render with the four parts of a slip called out. |
| Built for the speed of live sports | Four product pillars. |
| Beyond traditional props | Comparison against full-game markets. |
| The product | Three official app screens (players, team marks, live odds) in device frames. |
| A pick can become a position | The prediction-market conversion screen. |
| Mobile product | App navigation explained beside a third device render. |
| For operators | What the layer gives a sportsbook. |
| Why live boards stay thin | The three supply problems (picks, variety, types) and the zero-people-managing-the-board answer. |
| About · Request demo | Company framing and a local-only contact form. |

## Assets

- `public/predicta-mark.png` + `public/predicta-wordmark.png` — the official network mark and
  wordmark, derived from `Predicta Logo.png`; combined by `components/site/logo.tsx`.
- `public/screens/app-*.png` — device renders of the live app (front and two angles, plus the
  prediction-market screen).
- `public/screens/*_bet.png`, `*_odds.png` — official app screens used inside device frames.

Swap any of them by dropping a new file into `public/screens/` and updating `lib/screens.ts`.

## Tech

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion · lucide-react.
Static export-friendly: no API keys, no network calls, no backend.

```
app/                 the single page + global styles
components/site/     marketing sections (hero, anatomy, gallery, operators, contact, …)
components/ui/       primitives (button, countdown, odds, crests, section headings)
lib/                 sample market data, screen manifest, formatting helpers
public/screens/      official app screenshots and device renders
```

## Notes

Everything written on the page describes the bettor-facing experience only. Sample games, players
and odds are placeholders for illustration; the contact form is local state and sends nothing.
