# Spa Booking System

A booking and business-management website for a massage/spa studio. Clients request appointments online;
the therapist approves them, manages her availability and clients, and tracks income.

> Status: in development. See `docs/ISSUES.md` for the roadmap.

## Features (planned)
- Hebrew, right-to-left UI with a calm green / brown / soft-pink design
- Treatments list and a calendar that only offers the therapist's real availability
- Booking requests with a health declaration; a booking is confirmed only after the therapist approves it
- Client area to view and cancel upcoming appointments
- Therapist dashboard: appointments, availability, clients, monthly income

## Tech stack
Next.js, TypeScript, Tailwind CSS, PostgreSQL.

## Getting started
```bash
git clone https://github.com/marva-granot/spa-booking.git
cd spa-booking
cp .env.example .env   # then fill in the values
npm install
npm run dev
```
(Commands will work after Phase 1 of the roadmap.)

## Privacy and security
The app handles sensitive health information. The repository contains only fake sample data.
Secrets are kept in environment variables and never committed.

## How I used AI
I planned the product and architecture with Claude, then built it in small steps with Claude Code:
plan mode first, tests alongside every feature, and a review of every diff before merging.
Each feature is one GitHub issue and one pull request.
