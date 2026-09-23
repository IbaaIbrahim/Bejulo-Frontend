/* ==========================================================================
   bejulo — shared header & footer

   One source of truth so every page renders identical chrome. Each page
   declares its context on <body>:
     data-page   which nav item is current   (services | international |
                 projects | about | careers | home | contact)
     data-header "overlay" sits on top of a hero image and uses the white
                 logo; "solid" is a white bar and uses the dark logo.

   Labels come from assets/js/content.js via data-i18n keys, so the chrome
   translates with the rest of the page.

   Loaded synchronously (no defer) at the end of <body>, so the chrome is in
   the DOM before first paint. The placeholders reserve its height in CSS.
   ========================================================================== */
(function () {
  'use strict';

  var NAV = [
    { key: 'services',      href: 'services.html',      i18n: 'nav.services' },
    { key: 'international', href: 'international.html', i18n: 'nav.international' },
    { key: 'projects',      href: 'projects.html',      i18n: 'nav.projects' },
    { key: 'about',         href: 'about.html',         i18n: 'nav.about' },
    { key: 'careers',       href: 'careers.html',       i18n: 'nav.careers' },
    // Downloads and the search icon were removed at the client's request
    // (review 2026-08-24 §4). The DE Figma nav ends with Kontakt, which is now
    // the menu in both languages.
    { key: 'contact',       href: 'contact.html',       i18n: 'nav.contact' }
  ];

  var FOOTER_LINKS = [
    { href: 'imprint.html', i18n: 'footer.legal' },
    { href: 'privacy.html', i18n: 'footer.privacy' },
    { href: 'assets/docs/2022-04-bejulo-Mustervertrag-AEB-mit-SPV_EN-1.pdf', i18n: 'footer.terms', attr: 'href:footer.terms.href', target: '_blank', rel: 'noopener' },
    { href: 'cookies.html', i18n: 'footer.cookies' }
  ];

  var body = document.body;
  var current = body.getAttribute('data-page') || '';
  var mode = body.getAttribute('data-header') === 'solid' ? 'solid' : 'overlay';
  var logo = mode === 'solid' ? 'logo-dark.png' : 'logo-light.png';

  /* --- Header ------------------------------------------------------------ */
  var links = NAV.map(function (item) {
    return '<a class="nav__link" href="' + item.href + '" data-i18n="' + item.i18n + '"' +
      (item.key === current ? ' aria-current="page"' : '') + '></a>';
  }).join('');

  var switcher =
    '<div class="lang" role="group" data-i18n-attr="aria-label:lang.label">' +
      '<button class="lang__btn" type="button" data-lang-choice="en" ' +
        'data-i18n="lang.en" data-i18n-attr="title:lang.en.full"></button>' +
      '<span class="lang__sep" aria-hidden="true">/</span>' +
      '<button class="lang__btn" type="button" data-lang-choice="de" ' +
        'data-i18n="lang.de" data-i18n-attr="title:lang.de.full"></button>' +
    '</div>';

  var headerHTML =
    '<a class="skip-link" href="#main" data-i18n="skip"></a>' +
    '<header class="site-header' + (mode === 'overlay' ? ' site-header--overlay' : '') + '">' +
      '<div class="site-header__inner">' +
        '<a class="site-header__logo" href="index.html">' +
          '<img src="assets/img/' + logo + '" width="194" height="75" ' +
            'alt="" data-i18n-attr="alt:logo.alt">' +
        '</a>' +
        '<button class="nav-toggle" type="button" aria-expanded="false" ' +
          'aria-controls="primary-nav" data-i18n-attr="aria-label:nav.menu.open">' +
          '<span class="nav-toggle__bar"></span>' +
        '</button>' +
        '<nav class="nav" id="primary-nav" data-i18n-attr="aria-label:nav.primary">' +
          links +
          switcher +
        '</nav>' +
      '</div>' +
    '</header>';

  /* --- Footer ------------------------------------------------------------ */
  /* ISO 9001:2015 badge (client review 2026-09-08 §2). The href is translated
     rather than hard-coded so EN and DE each open their own certificate, and
     it falls back to the English PDF for a no-JS reader. The artwork is a
     white-background PNG, so CSS sets it on a white chip — otherwise it lands
     on the grey footer as a bare white rectangle.

     It goes on the LEFT, beside the copyright, not at the far right: the
     home page's floating scroll cue is fixed to the bottom-right corner and
     lands on top of a right-hand badge at any width below ~1330px. */
  var certHTML =
    '<a class="site-footer__cert" href="assets/certificates/bejulo-iso-9001-en.pdf" ' +
      'target="_blank" rel="noopener" ' +
      'data-i18n-attr="href:footer.iso.href,title:footer.iso.title">' +
      '<img src="assets/img/iso-9001-certified.png" width="200" height="88" ' +
        'alt="" data-i18n-attr="alt:footer.iso.alt" loading="lazy" decoding="async">' +
    '</a>';

  var footerHTML =
    '<footer class="site-footer">' +
      '<div class="container site-footer__inner">' +
        '<p class="site-footer__copy" data-i18n="footer.copy"></p>' +
        certHTML +
        '<nav class="site-footer__nav" data-i18n-attr="aria-label:footer.legalnav">' +
          FOOTER_LINKS.map(function (l) {
            var extra = '';
            if (l.attr) extra += ' data-i18n-attr="' + l.attr + '"';
            if (l.target) extra += ' target="' + l.target + '"';
            if (l.rel) extra += ' rel="' + l.rel + '"';
            return '<a href="' + l.href + '" data-i18n="' + l.i18n + '"' + extra + '></a>';
          }).join('') +
        '</nav>' +
      '</div>' +
    '</footer>';

  var headerSlot = document.getElementById('site-header');
  var footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.outerHTML = headerHTML;
  if (footerSlot) footerSlot.outerHTML = footerHTML;

  /* --- Translate everything now the chrome exists ------------------------ */
  if (window.BejuloI18n) window.BejuloI18n.apply(window.BejuloI18n.get());

  /* --- Behaviour --------------------------------------------------------- */
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('primary-nav');

    if (toggle && nav) {
      var setOpen = function (open) {
        nav.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        var key = open ? 'nav.menu.close' : 'nav.menu.open';
        toggle.setAttribute('data-i18n-attr', 'aria-label:' + key);
        if (window.BejuloI18n) {
          toggle.setAttribute('aria-label', window.BejuloI18n.t(key) || '');
        }
      };

      toggle.addEventListener('click', function () {
        setOpen(!nav.classList.contains('is-open'));
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
          setOpen(false);
          toggle.focus();
        }
      });

      document.addEventListener('click', function (e) {
        if (!nav.classList.contains('is-open')) return;
        if (nav.contains(e.target) || toggle.contains(e.target)) return;
        setOpen(false);
      });
    }

    // Language switcher
    document.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('[data-lang-choice]') : null;
      if (!btn || !window.BejuloI18n) return;
      window.BejuloI18n.set(btn.getAttribute('data-lang-choice'));
    });
  });
})();
