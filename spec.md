# Specification

## Summary
**Goal:** Update the header Navigation component to clean up top-level links and consolidate authentication actions into a single "Sign Up" dropdown button.

**Planned changes:**
- Remove "Social Media" link from both desktop nav and mobile hamburger menu
- Remove the standalone "Login" link from both desktop nav and mobile hamburger menu
- Add a golden yellow (#f5c518) "Sign Up" CTA button on the right side of the desktop nav that opens a dropdown with two options: "Sign Up" (→ /customer-signup) and "Login" (→ /customer-login)
- Style the dropdown with a dark navy (#0a1628) background, white text, and golden yellow hover highlight
- On mobile, render "Sign Up" and "Login" as direct tappable links in the hamburger menu (no dropdown)
- If a customer session is active (sessionStorage key `ymw_customer_session`), hide the Sign Up dropdown and show a "My Account" link to /customer-dashboard instead
- Finalize desktop layout: logo on far left, nav links (Home, Services, About, Blog, Contact) centered, phone number and Sign Up button on far right

**User-visible outcome:** The header navigation is cleaner with only the core nav links centered, and authentication is accessible through a single prominent "Sign Up" dropdown button on the right side of the nav.
