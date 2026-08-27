/* ==========================================================================
   bejulo — Projects map (Leaflet)

   Reproduces the Figma/PDF artwork: a flat grey world map in the background
   with a zoomed Europe map inset in the foreground.

   Client review 2026-08-24 §3b:
     · world map behind, Europe map in front
     · 5 pins on the Europe inset, plus Iran and South Africa on the world map
     · zoom disabled completely
     · every popup carries a "Read more…" link to a project detail page

   BASEMAP — no raster tiles.
   The design is a flat grey landmass on white with no labels, no graticule and
   no zooming. Raster basemaps (CARTO Positron and friends) give the opposite:
   labelled, grid-lined, and light land on grey water. So the countries are
   drawn as vector polygons from assets/data/world.geojson (Natural Earth,
   public domain) styled to the design. As a bonus the page makes no
   third-party requests, which keeps it clean for GDPR.

   POPUPS are rendered into .map-panel rather than as Leaflet popups: the inset
   clips its own overflow, so a Leaflet popup opened inside it would be cut off.
   One shared card, positioned over whichever map the pin belongs to.

   ---------------------------------------------------------------------------
   PROJECT DATA STILL NEEDS bejulo's CONFIRMATION.
   Coordinates are country/region centroids rather than real sites, and the
   descriptions were written for this build. Detail pages are a separate change
   request; project.html is a placeholder.
   ---------------------------------------------------------------------------
   ========================================================================== */
(function () {
  'use strict';

  /* scope: 'europe' renders on the inset, 'world' on the background map */
  var PROJECTS = [
    { id: 'ireland', scope: 'europe', lat: 53.05, lng: -7.75,
      country: { en: 'Ireland', de: 'Irland' },
      years:   { en: '2016, 2017, 2022, 2023, 2024, 2025, 2026',
                 de: '2016, 2017, 2022, 2023, 2024, 2025, 2026' },
      note:    { en: 'Our most active market, with projects delivered every year since 2016.',
                 de: 'Unser aktivster Markt – seit 2016 realisieren wir hier jedes Jahr Projekte.' } },

    { id: 'united-kingdom', scope: 'europe', lat: 52.65, lng: -1.55,
      country: { en: 'United Kingdom', de: 'Vereinigtes Königreich' },
      years:   { en: '2014, 2015, 2016', de: '2014, 2015, 2016' },
      note:    { en: 'Early international expansion, including some of our first utility-scale PV plants.',
                 de: 'Früher Schritt ins Ausland – mit einigen unserer ersten PV-Großanlagen.' } },

    { id: 'netherlands', scope: 'europe', lat: 52.20, lng: 5.45,
      country: { en: 'Kingdom of the Netherlands', de: 'Königreich der Niederlande' },
      years:   { en: '2017–2023', de: '2017–2023' },
      note:    { en: 'A long-running portfolio of PV projects delivered across seven consecutive years.',
                 de: 'Ein über sieben Jahre hinweg kontinuierlich gewachsenes PV-Portfolio.' } },

    { id: 'germany', scope: 'europe', lat: 49.99, lng: 8.25,
      country: { en: 'Germany', de: 'Deutschland' },
      years:   { en: 'Home market since 2012', de: 'Heimatmarkt seit 2012' },
      note:    { en: 'Head office in Mainz and the base for our development, EPC and O&amp;M teams.',
                 de: 'Hauptsitz in Mainz und Basis unserer Teams für Entwicklung, EPC und O&amp;M.' } },

    { id: 'italy', scope: 'europe', lat: 42.60, lng: 12.60,
      country: { en: 'Italy', de: 'Italien' },
      years:   { en: '2020, 2024, 2026', de: '2020, 2024, 2026' },
      note:    { en: 'Southern European PV projects benefiting from high irradiation levels.',
                 de: 'Südeuropäische PV-Projekte mit hoher Sonneneinstrahlung.' } },

    { id: 'iran', scope: 'world', lat: 32.40, lng: 53.70,
      country: { en: 'Iran', de: 'Iran' },
      years:   { en: '', de: '' },
      note:    { en: 'Photovoltaic project in the Middle East.',
                 de: 'Photovoltaikprojekt im Nahen Osten.' } },

    { id: 'south-africa', scope: 'world', lat: -29.20, lng: 24.60,
      country: { en: 'South Africa', de: 'Südafrika' },
      years:   { en: '2017, 2019', de: '2017, 2019' },
      note:    { en: 'Utility-scale PV in one of the sunniest regions we work in.',
                 de: 'PV-Großanlagen in einer der sonnenreichsten Regionen, in denen wir arbeiten.' } }
  ];

  var LAND_STYLE = {
    fillColor: '#d9d9d9',
    fillOpacity: 1,
    color: '#ffffff',   // hairline between neighbours, as in the artwork
    weight: 0.6,
    interactive: false
  };

  var PIN_SVG =
    '<svg viewBox="0 0 26 38" aria-hidden="true">' +
      '<path class="bejulo-pin__shape" d="M13 1.6c-6.3 0-11.4 5.1-11.4 11.4 0 3.1 1.4 6 3.3 8.5 ' +
      '1.9 2.5 4.3 4.8 6 7.4l2.1 3.2 2.1-3.2c1.7-2.6 4.1-4.9 6-7.4 1.9-2.5 3.3-5.4 3.3-8.5C24.4 ' +
      '6.7 19.3 1.6 13 1.6z"/>' +
    '</svg>';

  function lang() {
    return (window.BejuloI18n && window.BejuloI18n.get()) || 'en';
  }

  function txt(field, l) {
    if (!field) return '';
    return field[l] !== undefined ? field[l] : field.en;
  }

  function t(key, fallback) {
    var v = window.BejuloI18n && window.BejuloI18n.t(key);
    return v || fallback;
  }

  /* Both maps are static artwork: no panning, no zooming, no keyboard control.
     Only the pins are interactive. (Client review 2026-08-24 §3b, reconfirmed
     2026-08-26 — panning on the world map and zooming on the Europe inset were
     both tried in between and have been switched off again.) */
  function makeMap(el) {
    return L.map(el, {
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      boxZoom: false,
      dragging: false,
      keyboard: false,
      tap: false,
      zoomSnap: 0,
      inertia: false
    });
  }

  function init() {
    var panel = document.querySelector('.map-panel');
    var worldEl = document.getElementById('projects-map');
    var europeEl = document.getElementById('projects-map-europe');
    if (!panel || !worldEl || typeof L === 'undefined') return;

    var world = makeMap(worldEl);
    /* Frame the populated world (Antarctica omitted, as in the artwork) and
       refit on resize, so the map always fills its container instead of sitting
       at a fixed zoom that overflows narrow screens. */
    var WORLD_BOUNDS = L.latLngBounds([[-56, -168], [74, 178]]);
    function frameWorld() {
      world.fitBounds(WORLD_BOUNDS, { padding: [0, 0], animate: false });
    }
    frameWorld();

    
    var europe = europeEl ? makeMap(europeEl) : null;

    /* --- one shared popup card, outside the inset's clipping context ------- */
    var card = document.createElement('div');
    card.className = 'pin-card';
    card.setAttribute('role', 'status');
    panel.appendChild(card);
    var hideTimer = null;
    var openFor = null;

    function hide() {
      card.classList.remove('is-open');
      openFor = null;
    }
    function scheduleHide() {
      clearTimeout(hideTimer);
      hideTimer = setTimeout(function () {
        if (!card.matches(':hover')) hide();
      }, 220);
    }
    function cancelHide() { clearTimeout(hideTimer); }

    function show(p, marker, map) {
      cancelHide();
      openFor = p;
      var l = lang();
      var years = txt(p.years, l);
      card.innerHTML =
        '<p class="pin-card__country">' + txt(p.country, l) + '</p>' +
        (years ? '<p class="pin-card__meta">' + years + '</p>' : '') +
        '<p class="pin-card__text">' + txt(p.note, l) + '</p>' +
        '<a class="pin-card__more" href="project.html?id=' + p.id + '">' +
          t('btn.readmore', 'Read more…') + '</a>';
      card.classList.add('is-open');
      position(marker, map);
    }

    /* Place the card above the pin, in .map-panel coordinates, and keep it
       inside the panel horizontally. */
    function position(marker, map) {
      var el = marker.getElement();
      if (!el) return;
      var pin = el.getBoundingClientRect();
      var box = panel.getBoundingClientRect();
      var w = card.offsetWidth;
      var h = card.offsetHeight;

      var left = (pin.left - box.left) + pin.width / 2 - w / 2;
      left = Math.max(8, Math.min(left, box.width - w - 8));

      var top = (pin.top - box.top) - h - 10;
      var below = false;
      if (top < 8) {                    // not enough room above — flip below
        top = (pin.bottom - box.top) + 10;
        below = true;
      }
      card.classList.toggle('is-below', below);
      card.style.left = Math.round(left) + 'px';
      card.style.top = Math.round(top) + 'px';
    }

    card.addEventListener('mouseenter', cancelHide);
    card.addEventListener('mouseleave', scheduleHide);


    /* --- markers ---------------------------------------------------------- */
    var icon = L.divIcon({
      className: 'bejulo-pin',
      html: PIN_SVG,
      iconSize: [26, 38],
      iconAnchor: [13, 38]
    });

    var markers = [];

    function addPins(map, items) {
      items.forEach(function (p) {
        var m = L.marker([p.lat, p.lng], {
          icon: icon,
          keyboard: true,
          riseOnHover: true,
          // no `title`: it produces the browser's own black tooltip
          alt: txt(p.country, lang())
        }).addTo(map);

        m.on('mouseover', function () { show(p, m, map); });
        m.on('mouseout', scheduleHide);
        m.on('click', function () { show(p, m, map); });
        m.on('focus', function () { show(p, m, map); });
        m.on('blur', scheduleHide);

        m._project = p;
        m._map2 = map;
        markers.push(m);
      });
    }

    /* --- basemap ---------------------------------------------------------- */
    fetch('assets/data/world.geojson')
      .then(function (r) { return r.json(); })
      .then(function (geo) {
        L.geoJSON(geo, { style: LAND_STYLE, interactive: false }).addTo(world);
        if (europe) L.geoJSON(geo, { style: LAND_STYLE, interactive: false }).addTo(europe);

        addPins(world, PROJECTS.filter(function (p) { return p.scope === 'world'; }));
        if (europe) {
          var euro = PROJECTS.filter(function (p) { return p.scope === 'europe'; });
          addPins(europe, euro);
          frameEurope(euro);
        }
      })
      .catch(function (err) {
        // Without the basemap the pins would float on nothing — say so quietly.
        if (window.console) console.warn('bejulo: world.geojson failed to load', err);
      });

    /* Frame the inset on its five pins.
       fitBounds frames the anchor points, and each pin is drawn 38px ABOVE its
       anchor (the tip) and 13px either side — so the top padding has to clear a
       whole pin or the northernmost head gets cut off by the inset border. */
    function frameEurope(items) {
      if (!europe || !items.length) return;
      var bounds = L.latLngBounds(items.map(function (p) { return [p.lat, p.lng]; }));
      europe.fitBounds(bounds, {
        paddingTopLeft: [24, 50],
        paddingBottomRight: [24, 16],
        animate: false
      });

    }

    /* --- language ---------------------------------------------------------- */
    document.addEventListener('bejulo:langchange', function () {
      markers.forEach(function (m) {
        var el = m.getElement();
        if (el) el.setAttribute('alt', txt(m._project.country, lang()));
      });
      if (openFor) {
        var m = markers.filter(function (x) { return x._project === openFor; })[0];
        if (m) show(openFor, m, m._map2);
      }
    });

    /* --- responsive -------------------------------------------------------- */
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        world.invalidateSize();
        frameWorld();
        if (europe) {
          europe.invalidateSize();
          frameEurope(PROJECTS.filter(function (p) { return p.scope === 'europe'; }));
        }
        hide();
      }, 150);
    });
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
