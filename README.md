# OcheScore

**Score like a pro. Tap like a boss.**

The fastest way to score darts without the clutter. Interactive dartboard scoring with checkout hints and game history.

## Features

- 🎯 **Interactive Dartboard** - Tap where you hit, instant feedback with smooth animations
- 💡 **Smart Checkout Hints** - Get suggestions when you're ≤170 to winning
- 📊 **Stats Tracking** - 3-dart average, high scores, checkout percentages
- 🎮 **Multiple Game Modes** - X01 (301/501/101) with normal/double out
- 📱 **Progressive Web App** - Works on all devices, installable to home screen
- 🎨 **Beautiful Design** - Deep purple + warm orange on dark, with smooth animations

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Typography:** Space Grotesk (display), Inter (body), JetBrains Mono (scores)
- **Payment:** Stripe (test mode, $4.99/mo Pro tier)
- **Auth:** NextAuth.js (planned - email + Google OAuth)
- **Database:** Prisma + Postgres (planned)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
ochescore/
├── app/
│   ├── page.tsx              # Landing page (9 sections)
│   ├── about/                # About page
│   ├── pricing/              # Pricing page
│   ├── signup/               # Signup page
│   ├── login/                # Login page
│   ├── app/                  # Game interface (dartboard + scoring)
│   └── deck/                 # Pitch deck
├── components/
│   ├── dartboard.tsx         # Interactive dartboard component
│   └── ui/                   # shadcn components
└── public/
    └── images/               # Generated assets
```

## Features by Plan

### Free (Forever)
- Instant play - no signup required
- All game modes (X01, Round-the-Clock)
- Interactive dartboard scoring
- Checkout hints
- Session stats
- Up to 4 players

### Pro ($4.99/mo)
- Everything in Free
- Unlimited game history
- Advanced stats & graphs
- Export games
- Priority support
- 14-day free trial

## Design System

### Colors
- Primary: `#7C3AED` (vibrant purple)
- Secondary: `#F97316` (warm orange)
- Background: `#0F0F0F` (deep almost-black)
- Surface: `#1A1A1A` (cards/panels)
- Success: `#10B981`
- Destructive: `#EF4444`
- Bullseye: Purple (#7C3AED)
- Outer Bull: Orange (#F97316)

### Typography
- Display: Space Grotesk (headings, hero)
- Body: Inter (UI, paragraphs)
- Mono: JetBrains Mono (scores, data)

### Animations
- Timing: `cubic-bezier(0.4, 0, 0.2, 1)` (smooth), `cubic-bezier(0.25, 0.1, 0.25, 1)` (snappy)
- Durations: 150ms (fast), 250ms (normal), 400ms (slow)

## Deployment

Deployed on Coolify at [ochescore.ashketing.com](https://ochescore.ashketing.com)

### Environment Variables

```bash
# Database (when implemented)
DATABASE_URL=postgresql://postgres:***@k80c0s08c84kgcs44kckcos0:5432/ochescore

# Auth (when implemented)
NEXTAUTH_SECRET=***
NEXTAUTH_URL=https://ochescore.ashketing.com
GOOGLE_CLIENT_ID=***
GOOGLE_CLIENT_SECRET=***

# Stripe (when implemented)
STRIPE_SECRET_KEY=sk_test_***
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_***
```

## License

Built with ❤️ for dart players everywhere.

© 2026 OcheScore. All rights reserved.
