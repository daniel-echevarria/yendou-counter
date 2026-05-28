# Yendou Counter

A polished counter application built as a take-home assignment for Yendou.

## Setup

```bash
pnpm install
pnpm dev
```

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Sonner

## Design decisions

- **Sonner over Chakra UI toasts** — I'm not familiar with Chakra's toast API, so I chose Sonner for its minimal API that I could pick up quickly and customize to match the design spec.
- **Framer Motion for animations** — spring physics on the button (compress on tap, scale on hover), number slide transitions on count change, sparkle particle burst on increment, and toast entrance animation.

## What I'd do next

Given more time, these are the improvements I'd prioritize:

- **Accessibility** — `aria-live` region on the counter so screen readers announce changes, `aria-label` on the button, `prefers-reduced-motion` media query to disable animations for users who need it
- **Tests** — unit tests for the context/hook, integration test for the increment + toast flow
