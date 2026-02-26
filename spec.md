# Specification

## Summary
**Goal:** Fully rebrand and rebuild the existing app as "QuickRepair" — a WhatsApp-based home services website for Mahipalpur, replacing all old branding, removing all OTP/modal/booking flows, and wiring every CTA to WhatsApp.

**Planned changes:**
- Rebrand all text, titles, meta tags, and translation keys from "QuickFix Guru" to "QuickRepair"; logo shows 🔧 with "Quick" in #FFD700 and "Repair" in #ff8c42; tagline is "10 Minute Service at Your Doorstep" throughout
- Replace Navbar with a header showing the QuickRepair logo on the left and a hamburger menu (☰) on the right; menu slides in with overlay and contains: Home, Services, About, Contact, Become Mechanic; remove language toggle, login, booking history, and refer & earn
- Rebuild Hero section with bold heading "🔧 QuickRepair Mahipalpur", subtitle, animated CSS gradient background (#0a2b3c ↔ #1a4b6e), floating/pulse animation on heading; remove stat badges and old CTA button
- Rebuild Services section with exactly 5 cards (Plumber ₹460, Electrician ₹160, Fan/Cooler Repair ₹190, AC Repair ₹470, Mechanic ₹390); each card has icon, name, price, lift+shadow hover effect, and clicks open WhatsApp with a pre-filled service message; remove OTP modal trigger and "Schedule for Later" button
- Add a pulsing green "📲 BOOK VIA WHATSAPP" button below the services grid linking to WhatsApp with a pre-filled Hindi message
- Wire "Become Mechanic" menu option to open WhatsApp with a pre-filled mechanic registration message; remove ProviderRegistrationForm modal entirely
- Rebuild About Us section with 4 feature cards: ✅ Verified Mechanics, ⏱️ 10 Min Guarantee, 💵 Cash on Delivery, 🚫 No Hidden Charges; English only, no language toggle
- Rebuild Contact Us section with phone (tel: link), email (mailto: link), 6 service areas, and working hours; icons with hover color-change effect
- Rebuild Footer with QuickRepair name, tagline, contact info, quick nav links, copyright line, hover animations; fully responsive
- Update global color scheme to dark navy #0a2b3c, yellow #FFD700, orange #ff8c42, white; add stagger entrance animations on service cards; enable smooth scrolling; ensure all buttons have hover/active feedback; fix any mobile overlap
- Remove all unused components and modal flows: BookingForm, SuccessModal, PaymentPage, InAppChat, LiveTracking, RatingReview, BookingHistory, ReferEarn, ScheduleBooking, ProviderProfile, ProviderRegistrationForm, EmergencySOS; clean up all related state and handlers in App.tsx
- Retain FloatingButtons (WhatsApp → wa.me/8447978940, Call → tel:8447978940)

**User-visible outcome:** Users see a clean QuickRepair-branded single-page website where every booking action (service cards, CTA button, "Become Mechanic") opens WhatsApp with a pre-filled message, with no modals, OTP flows, or legacy features present.
