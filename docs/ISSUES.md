# Backlog

Copy each item into a GitHub Issue. Create one Milestone per phase. Each item should fit one Claude Code session.
Work order: plan mode -> approve -> implement with tests -> review the diff -> PR that closes the issue.

## Phase 1: Setup
1. Initialize Next.js + TypeScript + Tailwind; fill in the commands in CLAUDE.md. Done when `npm run dev` and `npm test` work.
2. Set up RTL Hebrew layout, fonts, and the green/brown/soft-pink theme tokens.
3. Connect PostgreSQL, add a migration tool, and a first migration for `treatments`.
4. CI: run lint, type-check and tests on every push and pull request.

## Phase 2: Public pages
5. Home page: studio name, about the therapist, short treatments overview, button to treatments.
6. Treatments page: list with name, length and price, loaded from the database. Seed with sample data.

## Phase 3: Availability and booking
7. Availability model and a pure function `getAvailableSlots(...)` with thorough unit tests
   (overlaps, buffer between treatments, vacation days, pending appointments blocking a slot).
8. Calendar page showing only available slots for the chosen treatment.
9. Booking form: personal details, preferences, health declaration, privacy-policy checkbox; server-side validation.
10. Save a booking as `pending`; show the "request received" screen; prevent double booking under concurrent requests.

## Phase 4: Therapist admin
11. Therapist login (established auth library) and protected admin routes.
12. Appointments calendar: list and view all appointments with client details.
13. Approve or reject a pending appointment (status change plus notification through the `Notifier`).
14. Cancel an appointment and notify the client.
15. Availability management: weekly hours, vacation days, buffer time.
16. Client management: history, personal details, notes.

## Phase 5: Client area
17. Client sign-in by email or phone link and a "my appointments" page.
18. Cancel a future appointment and update personal details.

## Phase 6: Finance
19. Payments: record paid or unpaid for each treatment, with date.
20. Finance page: table of clients and treatments, monthly income, paid versus unpaid totals.

## Phase 7: Polish and release
21. Privacy policy and terms pages; consent stored with each booking.
22. Security review: access control on health data, rate limiting, no secrets in the repo.
23. End-to-end test of the whole booking flow (Playwright).
24. README with screenshots or GIFs, live demo with fake data, "How I used AI" section.

## Later
- Notifications by email, then WhatsApp reminders 24 hours before.
- Google Calendar sync for the therapist and the client.
- Reviews and photos on the home page; tips corner; online payment.
