# Architecture (starting point)

Update this file as decisions are made. Record big choices in `docs/decisions/` as short notes.

## Layers
- **Frontend and server in one app:** Next.js (App Router), TypeScript, Tailwind (RTL, Hebrew).
- **Database:** PostgreSQL. Access through one data layer so the rest of the code never builds SQL by hand.
- **Auth:** an established library for the therapist login. Clients identify by email or phone to see their own appointments.
- **Notifications:** a `Notifier` interface with a fake implementation first (logs only), then email, then WhatsApp.

## Data model (draft)
- `treatments`: id, name, description, duration_minutes, price
- `availability_rules`: weekday, start_time, end_time (weekly working hours)
- `availability_exceptions`: date, kind (vacation or extra hours), note
- `clients`: id, name, phone, email
- `appointments`: id, client_id, treatment_id, starts_at, ends_at, status (pending, approved, cancelled), client_notes, created_at
- `health_declarations`: id, appointment_id or client_id, answers (sensitive, restricted access)
- `payments`: id, appointment_id, amount, paid_at (null = unpaid)
- `settings`: buffer_minutes between treatments, studio name, etc.

## Key rule: available slots
A slot is bookable when it falls inside the weekly working hours, is not on a vacation day, and does not overlap
an existing `pending` or `approved` appointment including the buffer time after it. This function is pure
logic with no database calls inside, so it is easy to test thoroughly.

## Security notes
- Health data lives in separate tables, never in public API responses.
- Server-side validation on every endpoint. Rate-limit the public booking endpoint.
- Secrets in environment variables only.
