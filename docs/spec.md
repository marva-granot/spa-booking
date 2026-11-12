# Spec: spa booking and management website

English working copy of the original Hebrew plan. Keep this file as the source of truth for Claude Code.

## General
- **Audience:** women in menopause and women in general; possibly pregnant women later.
- **Palette:** green, brown, soft pink.
- **Sensitive data:** health declarations, height, pregnancy and sensitivities are sensitive information.
  The database must be secured to appropriate standards.

## Customer-facing screens

### Home page
- Name of the studio, text about the therapist, her experience and the place.
- Short overview of the treatments: name, length, brief explanation.
- Button leading to the treatments page.

### Treatments page
- List of all treatments with name, length and price.
- Clicking a treatment leads to the calendar page.

### Calendar page
- Shows **only** the dates, days and hours the therapist defined in advance.
- A booking is **not confirmed** after being submitted on the site, only after the therapist approves it.
- Choosing a date and time leads to the booking form.

### Booking form
- Personal details: name, phone, email, special notes (sensitivities, pregnancy).
- Preferences (for example: tight in a certain area, prefers gentle pressure), height, etc.
- Health declaration.
- Bottom checkbox approving the privacy policy and terms of use (basic legal protection).
- After submitting, the therapist must approve; then the appointment is added to her calendar and the client's.
- Confirmation message on screen (Hebrew): "Thank you! The request was received successfully.
  You will be notified as soon as the appointment is confirmed."
- The client gets a WhatsApp reminder 24 hours before the treatment.

### Client area
- View future appointments and cancel them.
- See whether a booking was approved.
- Update personal details.

## Therapist (admin) screens

### Appointment calendar
- One central calendar with all appointments, treatment types and client details.
- Appointments can be cancelled; the client is notified when that happens.

### Availability management
- Studio working hours, vacation days, and buffer time between treatments (cleaning, freshening up).

### Client management
- Treatment history per client, personal details, important medical/personal notes.

### Financial summary
- Tables of all clients and their treatments: price, whether it was paid, when it was paid, treatment date.
- Cumulative income per month and how much of it was actually paid.

## Booking flow
Enter site -> home page -> click book -> treatments page -> pick treatment -> pick date and time on calendar
-> fill booking form -> receive "request received" confirmation -> therapist approves -> client notified.

## Later additions
- Photos and client reviews on the home page.
- Tips corner or a short story on the home page, a new topic each time.
- Online payment.
