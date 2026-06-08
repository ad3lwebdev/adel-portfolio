# Portfolio Architecture

## Overview
Single-page portfolio for Adel Auditor, AI Automation Specialist. Built with TanStack Start + React + Tailwind CSS v4.

## Key Directories
- src/routes/index.tsx — Main single-page content (all 9 sections)
- src/routes/__root.tsx — Navigation, footer, global layout
- src/styles.css — All custom CSS including animations, glassmorphism, dark/light mode
- content/ — Markdown content (not actively used for this portfolio)
- public/ — Static assets

## Architecture Decisions
- Single-page design: all sections in index.tsx with anchor navigation
- CSS-driven animations: IntersectionObserver + CSS class toggling for scroll reveals
- Dark/light mode: JavaScript class toggle on body (.light-mode overrides)
- Glassmorphism: CSS backdrop-filter with semi-transparent backgrounds
- Marquee animations: CSS-only infinite scroll for tech stack display
- Contact form: client-side only with success state (no backend)

## Coding Conventions
- Custom CSS classes defined in styles.css, Tailwind for layout
- Syne font for headings, DM Sans for body text
- Color palette: primary #3B82F6, secondary #06B6D4, accent #8B5CF6, bg #0F172A
- All sections have IDs for anchor navigation
- IntersectionObserver for skill bar animations and scroll reveals
