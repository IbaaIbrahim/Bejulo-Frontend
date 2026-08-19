/* ==========================================================================
   bejulo — Projects map (Leaflet + OpenStreetMap)

   Replaces the static world map in the Figma file. The design note on that
   frame reads "bejulo klärt mit Programmierung die Darstellung der Projekte
   inkl. Projektbeschreibungen" — the display of projects including their
   descriptions is to be built in code, which is what this does.

   Basemap: CARTO "Positron" raster tiles rendered from OpenStreetMap data.
   Chosen over the standard osm.org style because the Figma map is a flat pale
   grey landmass on white, which Positron matches almost exactly.

   ---------------------------------------------------------------------------
   PROJECT DATA IS PROVISIONAL — needs bejulo's confirmation.
   Countries and years are taken from the timeline on the International page.
   Coordinates are country/region centroids, not real sites, and the notes were
   written for this build. One marker per country: 65+ projects across 22
   countries, which is what the page copy calls "a selection".
   Replace the PROJECTS array with the real project list when available.
   ---------------------------------------------------------------------------
   ========================================================================== */
(function () {
  'use strict';

  var PROJECTS = [
    { lat: 53.05,  lng: -7.75,
      country: { en: 'Ireland', de: 'Irland' },
      years:   { en: '2016, 2017, 2022, 2023, 2024, 2025, 2026', de: '2016, 2017, 2022, 2023, 2024, 2025, 2026' },
      note:    { en: 'Our most active market, with projects delivered every year since 2016.',
                 de: 'Unser aktivster Markt – seit 2016 realisieren wir hier jedes Jahr Projekte.' } },
    { lat: 52.65,  lng: -1.55,
      country: { en: 'United Kingdom', de: 'Vereinigtes Königreich' },
      years:   { en: '2014, 2015, 2016', de: '2014, 2015, 2016' },
      note:    { en: 'Early international expansion, including some of our first utility-scale PV plants.',
                 de: 'Früher Schritt ins Ausland – mit einigen unserer ersten PV-Großanlagen.' } },
    { lat: 52.20,  lng: 5.45,
      country: { en: 'Kingdom of the Netherlands', de: 'Königreich der Niederlande' },
      years:   { en: '2017–2023', de: '2017–2023' },
      note:    { en: 'A long-running portfolio of PV projects delivered across seven consecutive years.',
                 de: 'Ein über sieben Jahre hinweg kontinuierlich gewachsenes PV-Portfolio.' } },
    { lat: 49.99,  lng: 8.25,
      country: { en: 'Germany', de: 'Deutschland' },
      years:   { en: 'Home market since 2012', de: 'Heimatmarkt seit 2012' },
      note:    { en: 'Head office in Mainz and the base for our development, EPC and O&amp;M teams.',
                 de: 'Hauptsitz in Mainz und Basis unserer Teams für Entwicklung, EPC und O&amp;M.' } },
    { lat: 42.60,  lng: 12.60,
      country: { en: 'Italy', de: 'Italien' },
      years:   { en: '2020, 2024, 2026', de: '2020, 2024, 2026' },
      note:    { en: 'Southern European PV projects benefiting from high irradiation levels.',
                 de: 'Südeuropäische PV-Projekte mit hoher Sonneneinstrahlung.' } },
    { lat: 47.05,  lng: 19.45,
      country: { en: 'Hungary', de: 'Ungarn' },
      years:   { en: '2018, 2019', de: '2018, 2019' },
      note:    { en: 'Grid-connected PV delivered in compliance with local regulations.',
                 de: 'Netzgekoppelte PV-Anlagen im Einklang mit den lokalen Vorschriften.' } },
    { lat: 35.05,  lng: 33.20,
      country: { en: 'Cyprus', de: 'Zypern' },
      years:   { en: '2018', de: '2018' },
      note:    { en: 'Island PV project delivered under Mediterranean climatic conditions.',
                 de: 'PV-Projekt auf der Insel unter mediterranen Klimabedingungen.' } },
    { lat: 39.00,  lng: 22.20,
      country: { en: 'Greece', de: 'Griechenland' },
      years:   { en: '2021', de: '2021' },
      note:    { en: 'PV plant developed with local partners.',
                 de: 'PV-Anlage gemeinsam mit lokalen Partnern entwickelt.' } },
    { lat: 48.90,  lng: 31.40,
      country: { en: 'Ukraine', de: 'Ukraine' },
      years:   { en: '2019', de: '2019' },
      note:    { en: 'PV capacity added to a fast-growing renewables market.',
                 de: 'Zusätzliche PV-Leistung in einem schnell wachsenden Markt.' } },
    { lat: 46.60,  lng: 2.40,
      country: { en: 'France', de: 'Frankreich' },
      years:   { en: '2024', de: '2024' },
      note:    { en: 'Recent addition to our Western European pipeline.',
                 de: 'Jüngster Zugang in unserer westeuropäischen Projektpipeline.' } },
    { lat: 40.10,  lng: -3.70,
      country: { en: 'Spain', de: 'Spanien' },
      years:   { en: '2026', de: '2026' },
      note:    { en: 'Currently in delivery, adding to our Southern European portfolio.',
                 de: 'Aktuell in Umsetzung – eine Erweiterung unseres südeuropäischen Portfolios.' } },
    { lat: 56.05,  lng: 9.60,
      country: { en: 'Denmark', de: 'Dänemark' },
      years:   { en: '2015', de: '2015' },
      note:    { en: 'Northern European PV project delivered on schedule.',
                 de: 'Termingerecht realisiertes PV-Projekt in Nordeuropa.' } },
    { lat: 26.80,  lng: 30.30,
      country: { en: 'Egypt', de: 'Ägypten' },
      years:   { en: '2014', de: '2014' },
      note:    { en: 'One of our first projects outside Europe.',
                 de: 'Eines unserer ersten Projekte außerhalb Europas.' } },
    { lat: 34.20,  lng: 9.40,
      country: { en: 'Tunisia', de: 'Tunesien' },
      years:   { en: '2023', de: '2023' },
      note:    { en: 'North African PV delivered with regional partners.',
                 de: 'Nordafrikanische PV-Anlage mit regionalen Partnern realisiert.' } },
    { lat: 9.30,   lng: 8.20,
      country: { en: 'Nigeria', de: 'Nigeria' },
      years:   { en: '2015', de: '2015' },
      note:    { en: 'Solar capacity supporting a growing power market.',
                 de: 'Solarleistung für einen wachsenden Strommarkt.' } },
    { lat: -29.20, lng: 24.60,
      country: { en: 'South Africa', de: 'Südafrika' },
      years:   { en: '2017, 2019', de: '2017, 2019' },
      note:    { en: 'Utility-scale PV in one of the sunniest regions we work in.',
                 de: 'PV-Großanlagen in einer der sonnenreichsten Regionen, in denen wir arbeiten.' } },
    { lat: -13.40, lng: 27.90,
      country: { en: 'Zambia', de: 'Sambia' },
      years:   { en: '2026', de: '2026' },
      note:    { en: 'In delivery — extending our footprint in Southern Africa.',
                 de: 'In Umsetzung – wir erweitern unsere Präsenz im südlichen Afrika.' } },
    { lat: 18.80,  lng: -70.30,
      country: { en: 'Dominican Republic', de: 'Dominikanische Republik' },
      years:   { en: '2014', de: '2014' },
      note:    { en: 'Caribbean PV project, part of our first international wave.',
                 de: 'PV-Projekt in der Karibik, Teil unserer ersten internationalen Welle.' } },
    { lat: 23.20,  lng: -102.20,
      country: { en: 'Mexico', de: 'Mexiko' },
      years:   { en: '2016', de: '2016' },
      note:    { en: 'PV delivered for the North American market.',
                 de: 'PV-Anlage für den nordamerikanischen Markt.' } },
    { lat: -9.80,  lng: -75.60,
      country: { en: 'Peru', de: 'Peru' },
      years:   { en: '2014', de: '2014' },
      note:    { en: 'High-altitude PV in South America.',
                 de: 'PV-Anlage in großer Höhe in Südamerika.' } },
    { lat: -12.40, lng: -49.20,
      country: { en: 'Brazil', de: 'Brasilien' },
      years:   { en: '2020', de: '2020' },
      note:    { en: 'Large-scale solar in one of the world’s key growth markets.',
                 de: 'Solar-Großprojekt in einem der wichtigsten Wachstumsmärkte weltweit.' } },
    { lat: 36.20,  lng: 138.20,
      country: { en: 'Japan', de: 'Japan' },
      years:   { en: '2014', de: '2014' },
      note:    { en: 'PV project delivered to Japanese technical standards.',
                 de: 'PV-Projekt nach japanischen technischen Standards realisiert.' } }
  ];

  /* The Figma marker: an orange outline teardrop. Inline SVG so it inherits
     the brand colour and can react to hover. */
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
    return field[l] !== undefined ? field[l] : field.en;
  }

  function popupHTML(p, l) {
    return '<div class="pin-card">' +
      '<p class="pin-card__country">' + txt(p.country, l) + '</p>' +
      '<p class="pin-card__meta">' + txt(p.years, l) + '</p>' +
      '<p class="pin-card__text">' + txt(p.note, l) + '</p>' +
      '</div>';
  }

  function init() {
    var el = document.getElementById('projects-map');
    if (!el || typeof L === 'undefined') return;

    var map = L.map(el, {
      center: [30, 5],
      zoom: 2,
      minZoom: 2,
      maxZoom: 12,
      scrollWheelZoom: false,   // don't hijack page scrolling
      worldCopyJump: true
    });

    // Ctrl/Cmd + wheel zooms, matching common map UX
    var wheelTimer;
    el.addEventListener('wheel', function (e) {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        map.scrollWheelZoom.enable();
        clearTimeout(wheelTimer);
        wheelTimer = setTimeout(function () { map.scrollWheelZoom.disable(); }, 400);
      }
    }, { passive: false });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; ' +
        '<a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map);

    var icon = L.divIcon({
      className: 'bejulo-pin',
      html: PIN_SVG,
      iconSize: [26, 38],
      iconAnchor: [13, 38],
      popupAnchor: [0, -34]
    });

    var markers = [];

    PROJECTS.forEach(function (p) {
      var l = lang();
      var m = L.marker([p.lat, p.lng], {
        icon: icon,
        title: txt(p.country, l),
        riseOnHover: true,
        keyboard: true,
        alt: txt(p.country, l)
      }).addTo(map);

      m.bindPopup(popupHTML(p, l), {
        closeButton: true,
        autoPan: true,
        maxWidth: 274,
        offset: [0, 4]
      });

      // Hover opens the popup (as requested). It stays put while the pointer is
      // over either the pin or the popup, so its content remains reachable.
      var closeTimer;
      function open() { clearTimeout(closeTimer); m.openPopup(); }
      function scheduleClose() {
        closeTimer = setTimeout(function () {
          var pop = m.getPopup();
          if (pop && pop.isOpen() && !pop._hovered && !m._pinHovered) m.closePopup();
        }, 180);
      }

      m.on('mouseover', function () { m._pinHovered = true; open(); });
      m.on('mouseout',  function () { m._pinHovered = false; scheduleClose(); });
      m.on('click',     open);
      m.on('focus',     open);
      m.on('blur',      function () { m.closePopup(); });

      m.on('popupopen', function (e) {
        var node = e.popup.getElement();
        if (!node) return;
        node.addEventListener('mouseenter', function () {
          e.popup._hovered = true;
          clearTimeout(closeTimer);
        });
        node.addEventListener('mouseleave', function () {
          e.popup._hovered = false;
          scheduleClose();
        });
      });

      m._project = p;
      markers.push(m);
    });

    // Re-label pins and popups when the language changes
    document.addEventListener('bejulo:langchange', function (e) {
      var l = (e.detail && e.detail.lang) || lang();
      markers.forEach(function (m) {
        m.setPopupContent(popupHTML(m._project, l));
        var node = m.getElement();
        if (node) node.setAttribute('title', txt(m._project.country, l));
      });
    });

    // Frame all projects on load
    map.fitBounds(L.featureGroup(markers).getBounds(), { padding: [56, 56] });

    // Keep the map correct across responsive breakpoints
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { map.invalidateSize(); }, 150);
    });
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
