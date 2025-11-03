# Shop-web-prototype
Mobile-first prototype for ecommerce — static HTML/CSS/JS.
# Newcastle Pro Sound — Website Rebuild (Prototype)

This repository contains a front-end prototype I built for **Newcastle Pro Sound** to show how their current site can be modernised, made mobile-first, and prepared for a WordPress / WooCommerce rebuild.

The goal of this prototype is **not** to be the final production site — it’s to demonstrate structure, layout, styling and content hierarchy so the client can approve the direction before I move it into WordPress (likely WPBakery + WooCommerce + security hardening).

---

## What this prototype shows

- ✅ **Modern hero** with car-audio styling (dark, glassy, cyan accent)
- ✅ **Service/categories section** for Car Audio, 4x4/Touring, Reverse/Camera, Marine, Security, Custom Installs
- ✅ **Install/services cards** using the real workshop/product photos the client provided
- ✅ **Product grid** to demonstrate how WooCommerce items will look on the homepage
- ✅ **“Brands we supply & install”** strip using actual partner/supplier logos (Kenwood, Pioneer, Kicker, Rockford Fosgate, Stinger, Marine)
- ✅ **Off-canvas mobile menu** (slides in from the left, closes on overlay)
- ✅ **Styled breadcrumbs** for product/detail pages
- ✅ **Separate product page** (`product.html`) with gallery, tabs (Description / Specs / Install), quantity control

---

## Tech stack (for this prototype)

- Plain **HTML5**
- **CSS3** (custom, mobile-first, no framework)
- **Vanilla JS** for:
  - mobile drawer (left → right)
  - image gallery thumbs on product page
  - tab switching
  - reveal on scroll (optional)

This is intentionally framework-free so it’s easy to drop into WordPress later.

---

## Why this was built

The existing site felt:

1. **Outdated visually** — light theme, not much hierarchy
2. **Not optimised for mobile** — too much vertical scrolling, weak menu
3. **Products and brands not surfaced** — no real “we sell these brands” moment
4. **Security/performance issues** were found in the scan — so a rebuild is easier than patching

This prototype is what I showed the client to prove: *“Yes, we can make this look modern and still keep all your products/services.”*

---

## Structure

```text
index.html        # homepage / main prototype
product.html      # sample product / WooCommerce single layout
styles.css        # global + dark/glass theme + responsive + brands
functions.js      # drawer, tabs, gallery, qty
images/           # client/product/brand images
