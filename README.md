# bejulo — website front end

Static, dependency-free front end built from the Figma design (channel
`fi7cys1x` / `11tpohxh`, 1440 px artboard). No build step: open `index.html`
through any static server.

```bash
# Option 1: Run with Docker (recommended)
make up              # Start container in background (http://localhost:4173)
make restart-docker  # Rebuild and restart container
make down            # Stop container

# Option 2: Run locally with Python
make run             # Start Python server
make restart         # Restart Python server
make stop            # Stop Python server
```

Verified at 1440 px (the artboard width), 768 px and 375 px: no horizontal
overflow, no console errors, and all 35 asset references resolve.

## Pages

| File | Figma source | Header |
|---|---|---|
| `index.html` | Startseite | over hero |
| `services.html` | Unsere Leistungen | over hero |
| `international.html` | International → Content 1 | over hero |
| `international-experience.html` | International → Content 2.0–2.2 | over hero |
| `international-services.html` | International → Content 3.0–3.1 | over hero |
| `international-contact.html` | International → Content 4 | solid white |
| `projects.html` | Projekte | over hero |
| `about.html` | Über Uns | over hero |
| `careers.html` | Karriere | solid white |
| `contact.html` | Kontakt | solid white |

The seven International frames are three accordion *states* of two pages plus a
contact page, so they collapse to four files. Accordions load collapsed.

## How it fits together

`assets/css/style.css` is the only stylesheet — all design tokens live in
`:root`. `assets/js/layout.js` injects the header and footer into every page, so
the chrome cannot drift between pages. Each page declares its context on
`<body>`:

- `data-page` — which nav item is current
- `data-meta` — optional; which `meta.title.*` key to use when several pages
  share a nav highlight (the International sub-pages)
- `data-header` — `overlay` (transparent, white logo) or `solid` (white bar,
  dark logo)

## Bilingual (EN / DE)

`assets/js/content.js` holds one flat dictionary per language;
`assets/js/i18n.js` applies it and the EN/DE switcher sits in the nav pill.
Language resolves from `?lang=de` → saved choice → browser → `DEFAULT_LANG`
(top of `i18n.js`). Set that constant to `'de'` to make German the default.

Markup carries `data-i18n` (textContent), `data-i18n-html` (for copy containing
the orange `be` span, `<br>`, `<strong>`, lists) and
`data-i18n-attr="alt:key"` for attributes. English copy is *also* written inline
in the HTML so pages read correctly without JS and for crawlers — keep the two
in step when editing copy.

**A value containing markup or an HTML entity must only be read with
`data-i18n-html`.** Keys read as plain text need literal characters (`&`, not
`&amp;`).

> **The German copy is a draft and needs bejulo's sign-off.** Figma supplies
> German only for the nav labels, `Kontaktieren Sie uns!` and the two job
> titles; everything else was written for this build. The `be <adjective>.`
> lead-ins stay English in both languages — they are a brand device tied to the
> bejulo name, not body copy.

## Projects map

`assets/js/map.js` — Leaflet 1.9.4 (vendored, `assets/vendor/leaflet/`) with
CARTO *Positron* raster tiles rendered from OpenStreetMap data. Positron was
chosen over the standard osm.org style because the Figma map is flat pale grey
landmass on white, which it matches closely. OSM + CARTO are both attributed
in-map as their licences require.

Markers are the orange outline pin from the design, drawn as inline SVG.
Hovering a pin opens its popup; it stays open while the pointer is over the pin
*or* the popup. Keyboard focus opens it too. The wheel does not hijack page
scroll — `Ctrl`/`Cmd` + wheel zooms.

> **Project data is provisional.** Countries and years come from the
> International timeline; coordinates are country centroids, not real sites, and
> the descriptions were written for this build. One marker per country: 65+
> projects across 22 countries, which is what the page copy calls "a selection".
> Replace the `PROJECTS` array with the real list.

## Timeline

The 2014–2026 timeline is a flat image in Figma. `assets/js/timeline.js`
rebuilds it from data so years and country names stay selectable, translatable
and responsive. It scrolls inside its own container on narrow screens.

## Typography

Figma specifies **Myriad Web Pro**, a licensed Adobe face that cannot be
redistributed. The stack lists it first, so a licensed install is picked up
automatically, and bundles **Source Sans 3** (Adobe, open source, same humanist
skeleton) as the fallback. If bejulo holds a Myriad web licence, drop the woff2
files into `assets/fonts/` and add the `@font-face` block — nothing else changes.

## Deliberate deviations from Figma

The file is internally inconsistent in a few places; these were normalised so
every page reads identically, which is what was asked for.

1. **Vertical rhythm** — the hero-to-heading gap drifts between pages
   (37 / 73 / 78 / 92 / 104 px). Normalised to one scale in `.section`.
2. **Left margin** — 112 / 124 / 190 px across pages. Normalised to 112 px
   (`--container` 1216 px).
3. **Body font** — some paragraphs are DM Sans, others Myriad, for visually
   identical copy. Normalised to the primary family.
4. **Logo / nav vertical position** — Figma sits both ~5 px below centre;
   they are optically centred here.
5. **Pink circles** are the designer's German review notes, not content, and are
   not rendered. Their instructions were carried out (see below).

## Still needed from bejulo

- **Hero video** — the play button on the home page has no asset.
- **Project data** for the map (see above).
- **Job descriptions** — Figma gives titles only. The design notes ask for job
  ads to be easy to update; consider driving the list from JSON or a CMS.
- **International contact page content** — flagged "grundsätzlich klären" in
  Figma. It currently mirrors the main contact page with the `international@`
  address. A ready-made banner string is in `content.js` under
  `contact.pending`.
- **Legal pages** — Legal Notice, Privacy Policy, Terms & Conditions, Cookies
  all point at `#`.
- **Downloads** — in the nav on every page, but no page was designed.
- **Search** — the icon is in the design; no page or backend is defined, so the
  button is inert. Options: build a client-side index over the ten pages, wire
  it to a service, or drop it.
- **Routing check** — "Explore our services" on the International landing page
  currently goes to the international service-spectrum page rather than the main
  Our Services page. Confirm which was intended.

## Accessibility & performance notes

Skip link, `aria-current` on the active nav item, `aria-expanded` /
`aria-controls` on accordions and the mobile menu, `role="region"` on accordion
panels, focus-visible outlines, `prefers-reduced-motion` honoured, and a print
stylesheet that expands accordions. All images carry intrinsic `width`/`height`
to avoid layout shift; below-fold images are lazy-loaded and heroes use
`fetchpriority="high"`.
