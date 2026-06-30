# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes — match its exact classes
3. If no — build it following ui-rules.md and ui-tokens.md, then add it here

After building any component — update this file with the component name, file path, and exact classes used.

---

## Components

- ### Navbar
  - **File:** [Navbar.tsx](file:///c:/Users/ASUS/Desktop/jobai/components/layout/Navbar.tsx)
  - **Description:** Global top navigation header containing the premium gradient paper plane logo icon, collapsible hamburger menu for mobile devices, and a pill-shaped CTA.
  - **Classes:** `sticky top-0 z-50 w-full border-b border-border bg-surface px-6 md:px-8 h-16 flex items-center justify-between`, `text-sm font-medium text-text-secondary hover:text-accent`, `inline-flex h-9 items-center justify-center rounded-full bg-accent px-5 text-xs font-semibold text-accent-foreground hover:bg-accent-dark` (desktop button), `absolute top-16 left-0 w-full bg-surface border-b border-border shadow-xl flex flex-col p-6 gap-4 md:hidden` (mobile menu drawer)

- ### Footer
  - **File:** [Footer.tsx](file:///c:/Users/ASUS/Desktop/jobai/components/layout/Footer.tsx)
  - **Description:** Global footer container containing copyright notice, compliance/system links, and developer attribute ("Ashirbad Mandhata").
  - **Classes:** `w-full border-t border-border bg-surface px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 mt-auto`, `hover:text-accent`, `text-xs text-text-secondary font-medium` (attribute text)

- ### Hero
  - **File:** [Hero.tsx](file:///c:/Users/ASUS/Desktop/jobai/components/homepage/Hero.tsx)
  - **Description:** Landing page introduction section with main value prop headline, dual CTAs, and styled browser frame containing dashboard screenshot.
  - **Classes:** `landing-hero-glow`, `landing-grid`, `landing-button-primary`, `landing-button-secondary`, `landing-browser-frame`, `landing-browser-shadow`

- ### Features
  - **File:** [Features.tsx](file:///c:/Users/ASUS/Desktop/jobai/components/homepage/Features.tsx)
  - **Description:** Value props under "Manage Your Job Search With Ease" featuring interactive tabs and job list image card.
  - **Classes:** `bg-surface-secondary border-b border-border`, `border-accent bg-surface shadow-sm` (active state), `border-border hover:bg-surface/50` (inactive state), `landing-card-shadow`

- ### HowItWorks
  - **File:** [HowItWorks.tsx](file:///c:/Users/ASUS/Desktop/jobai/components/homepage/HowItWorks.tsx)
  - **Description:** Value props under "Apply With More Confidence, Every Time" featuring interactive step details and agent logs mockup.
  - **Classes:** `bg-surface border-b border-border`, `border-accent bg-surface-secondary shadow-sm` (active state), `border-border hover:bg-surface-secondary/50` (inactive state), `landing-card-shadow`
