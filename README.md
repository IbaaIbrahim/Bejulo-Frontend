# bejulo — website front end

Static, dependency-free front end built from the Figma design (channel
`fi7cys1x` / `11tpohxh`, 1440 px artboard). No build step: open `index.html`
through any static server.

```bash
# Serve locally for development
python3 -m http.server 4173

# Option 1: Run with Docker (recommended)
make up              # Start container in background (http://localhost:4173)
make restart-docker  # Rebuild and restart container
make down            # Stop container

# Option 2: Run locally with Python
make run             # Start Python server
make restart         # Restart Python server
make stop            # Stop Python server
```

`serve.py` is `http.server` plus `Cache-Control: no-store`, so CSS/JS edits show
up on a plain reload. Development only — serve with real caching headers (ideally
hashed filenames) in production.

Verified in both languages at 1440, 1280, 1220, 1219, 768 and 375 px: no
horizontal overflow at any width, no console errors, and every asset reference
resolves.

## Pages

| File | Figma source | Header |
| --------------------------------- | --------------------------------- | ----------- |
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
| `project.html` | — (placeholder, design pending) | solid white |

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

> **Both languages are now the client's own text**, transcribed verbatim from
> the Figma files supplied on 2026-08-24 — EN channel `8vek3r8v`, DE channel
> `pyuzy0bt`. The raw extractions are kept in `docs/client-text/` for
> comparison. Do not reword either language. Where the client's review note
> asked for wording that differs from the Figma text, the note wins and the line
> is marked `client review 2026-08-24` in `content.js`.
>
> The `be <adjective>.` lead-ins stay in English in both languages: the client
> uses them identically in the DE file, so they are a brand device, not copy.

## Projects map

`assets/js/map.js` — Leaflet 1.9.4 (vendored, `assets/vendor/leaflet/`) with
CARTO *Positron* raster tiles rendered from OpenStreetMap data. Positron was
chosen over the standard osm.org style because the Figma map is flat pale grey
landmass on white, which it matches closely. OSM + CARTO are both attributed
in-map as their licences require.

Per client review §3b the page shows **two** maps: a world map in the
background and a zoomed Europe map inset in the foreground, matching the PDF.

**No basemap tiles.** The design is flat grey landmasses on white with no
labels and no graticule. Raster basemaps give the opposite — labelled, grid
lined, and light land on grey water — so the countries are drawn as vector
polygons from `assets/data/world.geojson` (Natural Earth, public domain,
838 KB simplified to 163 KB). The page therefore makes no third-party requests
at all, which is a bonus for GDPR.

**Both maps are static.** No panning, no zooming, no keyboard control — they
read as artwork, and only the pins are interactive. Panning on the world map
and zooming on the Europe inset were both trialled in between and switched off
again at the client's request (2026-08-26). The inset's framing always contains
all five European pins.

**Layout.** The inset overhangs the top edge of the world map — 70px on
desktop, 90px below 900px — with a matching top margin on the panel, so it
reads as a separate plane and covers less of the world behind it. That overhang
is what lets it grow to 92% width on small screens while its lower edge still
stays clear of the Iran pin (~46px of headroom at the tightest width, tablet).
`.map-panel` must keep `overflow: visible` or the overhang is clipped.

Seven pins: five on the Europe inset (Ireland, United Kingdom, Netherlands,
Germany, Italy) plus Iran and South Africa on the world map. Markers are the
orange outline pin from the design, drawn as inline SVG. Hovering a pin opens
its popup, which stays open while the pointer is over the pin *or* the popup so
the **Read more…** link inside stays clickable. Keyboard focus opens it too.

The popup is *not* a Leaflet popup: the inset clips its own overflow, so one
opened inside it would be cut in half. A single shared card lives in
`.map-panel` and `map.js` positions it over whichever pin is active, flipping
below the pin when there is no room above and following the pin as a map moves.

> **Project data is provisional.** Coordinates are country/region centroids
> rather than real sites, and the descriptions were written for this build.
> Replace the `PROJECTS` array in `map.js` with the real list. Iran carries no
> year yet — it is new in this review and not on the International timeline.
>
> **Detail pages are a separate change request.** `project.html` is a
> placeholder that echoes the project name from `?id=` so the routing can be
> reviewed; the client has confirmed the design is still pending.

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
6. **Nav items** — Downloads and the search icon were removed at the client's
   request (review §4), so the menu is Services · International · Projects ·
   About us · Careers · Contact in both languages, matching the DE Figma layer.
   With the language switcher the pill is still wider than the six-item pill in
   Figma, so the header gutter and link padding tighten below 1440 px and the nav
   collapses to a menu below 1140 px.

## Still needed from bejulo

- **Hero video** — the play button on the home page has no asset.
- **Project data** for the map (see above).
- **Job descriptions** — Figma gives titles only. The design notes ask for job
  ads to be easy to update; consider driving the list from JSON or a CMS.
- **International contact page content** — flagged "grundsätzlich klären" in
  Figma. It currently mirrors the main contact page with the `international@`
  address. A ready-made banner string is in `content.js` under
  `contact.pending`.
- **Legal pages** — Impressum / Legal Notice, Datenschutzerklärung / Privacy
  Policy, AGB / Terms & Conditions, Cookies all point at `#`.
- **Services CTA German wording** — the screenshot supplied with review §2b
  reads "Ob Sie Flächen besitzen, Projektrechte verkaufen möchten oder einen
  verlässlichen Umsetzungspartner suchen. / bejulo ist für Sie da.", which is
  *not* what the DE Figma file says ("Ganz gleich ob Sie Flächeneigentümer sind,
  … bejulo ist Ihr Ansprechpartner."). The screenshot was treated as the newer
  instruction and is what ships. Please confirm, and update the Figma so the two
  stay in step.
- **Two DE button labels** — the DE Figma file has no button for "Explore our
  projects" or "Contact us" on the International landing page (it shows only
  *Erfahrung* and *Leistungsspektrum*). `btn.projects` and `btn.contactus` carry
  placeholder German pending the client's wording.
- **Project detail pages** — design pending (see the map section above).
- **Iran project details** — year and description needed.
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

## Hero images — how the cropping works

Heroes are full-bleed, so the photo always has to `object-fit: cover` its box,
and whatever does not fit is cropped. Two things control that:

**Height scales with the viewport.** `.hero` uses
`clamp(380px, 50.28vw, 880px)` (and the `--home` / `--services` variants use
their own vw figures). A *fixed* height is the trap: the wider the screen, the
taller the covered image has to be and the more is cropped away — at 1920 the
old fixed 724px was discarding 556px of the team photo and cutting off their
heads. The vw values are the Figma heights ÷ 1440, so at the artboard width
they still resolve to exactly 724 / 686 / 636px. The cap stops the hero eating
a whole ultrawide screen.

**The crop has a focal point.** `.hero__media` uses
`object-position: center var(--hero-focus, 50%)`. The 50% default centres the
crop, which is fine for a landscape but wrong for a group shot — it keeps
torsos and loses faces. `.hero--about` sets `--hero-focus: 30%` to bias
upwards. Add a modifier and set the variable for any other hero whose subject
is off-centre.

Because the navbar is transparent and overlays the hero, treat the top ~122px
as a no-critical-content zone when choosing a focal point: biasing too far up
puts faces behind the menu.

If a future photo cannot be made to work at both phone and ultrawide with one
crop, the next step is art direction — a `<picture>` element with a separately
cropped file per breakpoint.

**Intrinsic `width`/`height` attributes on every `<img>` must match the real
file**, or the browser reserves the wrong space and the page shifts on load.
They were re-synced on 2026-08-26 after the photos were replaced with
full-resolution originals.

## Client review — 2026-08-24

Every point from the review, and what was done.

| # | Request | Status |
|---|---|---|
| 1 general | Use the client's EN/DE text verbatim; DE was incorrect | **Done** — both languages re-transcribed from the supplied Figma files (`docs/client-text/`). The previous German was AI-drafted and has been discarded. |
| 1a | DE H1 → "PV und BESS – zuverlässig, nachhaltig, wirtschaftlich" | **Done.** Note this overrides the DE Figma, which reads "Photovoltaik und BESS – …"; the review note was taken as authoritative. |
| 1b | DE button "International" → "Unsere internationale Kompetenz entdecken" | **Done** (home page). The Projects page button is still labelled "International" per the DE Figma — say the word if that one should change too. |
| 2a | Services "PV and BESS project development" layout wrong | **Done** — the "be in touch" paragraph now spans the full card width below the photo, as in Figma, instead of being stacked in the text column. |
| 2b | Re-layout the CTA per screenshot; split copy into two sentences | **Done.** Chevron now sits beside the copy (66px mark, 32px gap) with the button below, left-aligned to the chevron. Copy is two lines, second bold. The screenshot also supplied **new German wording**, which supersedes the DE Figma text for this section — see the note below. |
| 3a | 60px between the button and "Satisfied customers" | **Done** — measured at exactly 60px, and held at every breakpoint. |
| 3b | World map behind, Europe map in front | **Done.** |
| 3b | 5 Europe pins + Iran + South Africa, remove the rest | **Done** — 7 pins total (was 22). |
| 3b | Disable zoom completely | **Superseded.** Implemented as asked, then reversed on request: the world map now pans (no zoom) and the Europe inset pans *and* zooms. Worth re-confirming with the client, since it contradicts the written note. |
| 3b | "Read more…" link in each popup → detail page | **Done** — links to `project.html?id=…`. That page is a placeholder; detail design is the pending change request. |
| 4 | Remove Downloads from the menu | **Done.** |
| 4 | Remove the search icon | **Done.** |

Verified in both languages at 1440, 1140, 1139, 768 and 375 px: no horizontal
overflow, no console errors, and all 36 asset references resolve.

## Client review — 2026-08-26

| # | Request | Status |
|---|---|---|
| 1 | About: hero image partly covering the heading | **Fixed.** `assets/css/aboutus.css` was overriding `.hero` to `height:auto; max-height:100vh` and `.hero__media` to `position:relative`. The in-flow image kept its natural height while the hero was clamped to the viewport, so on a short viewport it spilled over the heading. That file is removed and the hero is back to the Figma 724px with `object-fit: cover`. Copy kept at `docs/superseded/aboutus.css.removed` and in git history. |
| 2 | Projects: disable panning on both maps and zoom on the Europe map | **Done** — both maps are fully static again. Kept as Leaflet vector maps, *not* swapped for static images. |
| 3 | Homepage: button that smoothly scrolls to the CTA section | **Done** — orange disc with a chevron, lower-right of the hero and straddling its edge, as in the mockup. It is a plain `#home-intro` anchor so it works without JS; the easing comes from `scroll-behavior: smooth`, which is dropped under `prefers-reduced-motion`. |

**Also fixed while in there:** below 1140px the mobile block forced
`position: relative` on *every* header. That outranks `.site-header--overlay`,
so on hero pages the bar dropped out of the image and the **white logo landed on
the white page background — invisible**. Overlay headers now stay overlaying at
every width.

### 2026-08-26 — hero cropping on large screens

The team photo lost its heads on wide monitors. Two causes, both fixed:

1. The hero height was pinned at 724px while the image had to cover an
   ever-wider box, so the crop grew with the viewport. Heights are now fluid
   (see *Hero images* above) and still hit the Figma values at 1440.
2. `object-fit: cover` crops from the centre by default. The About hero now
   biases the crop upwards via `--hero-focus`.

Also re-synced every `<img>`'s `width`/`height` to the real file dimensions —
the photos had been replaced with full-resolution originals, leaving 19 images
across 8 pages declaring the wrong intrinsic size.
