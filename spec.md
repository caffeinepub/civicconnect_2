# Specification

## Summary
**Goal:** Fix the Services page card grid layout so all 15 service category cards are consistently aligned, spaced, and padded across all screen sizes.

**Planned changes:**
- Apply `items-start` (align-items: start) to the grid container so all cards align to the top of their grid cells
- Remove any fixed height or min-height from individual service cards so they size dynamically based on content
- Replace the existing card grid container with a responsive Tailwind grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- Remove any irregular per-card margin or padding overrides causing uneven gaps between cards
- Apply uniform internal padding (e.g., `p-6`) identically to all service cards
- Enforce consistent vertical spacing between internal card elements (icon → title → description → sub-service list) using uniform Tailwind spacing utilities
- Preserve all existing colors, icons, typography, border radius, shadow styles, and card content unchanged

**User-visible outcome:** The Services page displays all 15 service cards in a clean, top-aligned responsive grid with consistent gaps and padding, looking professional across desktop, tablet, and mobile screen sizes.
