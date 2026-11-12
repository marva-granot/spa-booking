# Spa booking system

Booking and business-management website for a massage/spa studio.
Customers request appointments; the therapist approves them and tracks income.

Full spec: `docs/spec.md`. Architecture: `docs/architecture.md`. Task list: `docs/ISSUES.md`.

## Stack
Next.js (App Router) + TypeScript + Tailwind CSS + PostgreSQL (Supabase or local).
Tests: Vitest for logic, Playwright for the booking flow (added when the flow exists).

## Language and design
- The UI is **Hebrew, right-to-left** (`dir="rtl"`, `lang="he"`). Use logical Tailwind classes (`ms-`, `me-`, `ps-`, `pe-`) instead of left/right.
- Code, comments, commit messages and docs are in **English**.
- Palette: green, brown, soft pink. Calm, warm, uncluttered. Target audience: women, many in menopause.

## Commands
(Fill these in after issue #1 sets up the project.)
- `npm run dev` start locally
- `npm test` run tests
- `npm run lint` lint and type-check
- `npm run db:migrate` apply database migrations

## Rules
- For any task touching 3+ files, propose a plan first and wait for approval.
- Every feature ships with tests. Booking and availability logic needs edge-case tests
  (overlapping slots, buffer breaks between treatments, vacation days, pending bookings holding a slot).
- Health data (health declarations, pregnancy, sensitivities, height) is **sensitive**:
  never log it, never return it from public endpoints, only the therapist and the client themselves may read it.
- Secrets only in `.env` (never commit; `.env.example` lists the names). Never use real client data in code, tests or screenshots.
- Store all times in UTC, display in Asia/Jerusalem.
- Validate all input on the server, not only in the browser.
- Use an established auth library for admin login. Do not write custom password handling.
- Small commits with conventional messages (`feat:`, `fix:`, `test:`, `docs:`). One issue per branch and PR.
- Appointment statuses: `pending`, `approved`, `cancelled`. A booking is not confirmed until the therapist approves it.
