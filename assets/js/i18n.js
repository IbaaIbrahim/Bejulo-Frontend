/* ==========================================================================
   bejulo — bilingual engine (EN / DE)

   Copy lives in assets/js/content.js as one dictionary per language, so the
   markup carries structure only and both languages are guaranteed to render
   the identical design.

   Usage in markup:
     data-i18n="key"              -> sets textContent
     data-i18n-html="key"         -> sets innerHTML (for copy containing the
                                     orange "be" span, <br>, <strong>, lists)
     data-i18n-attr="alt:key"     -> sets an attribute; several may be
                                     comma-separated, e.g. "alt:x,title:y"

   Language resolution order: ?lang= → saved choice → browser → DEFAULT_LANG.
   ========================================================================== */
(function (w, d) {
  'use strict';

  var DEFAULT_LANG = 'en';          // change to 'de' to make German the default
  var SUPPORTED = ['en', 'de'];
  var STORE_KEY = 'bejulo.lang';

  function dict(lang) {
    return (w.BEJULO_CONTENT && w.BEJULO_CONTENT[lang]) || {};
  }

  function pick() {
    var fromQuery = new URLSearchParams(w.location.search).get('lang');
    if (fromQuery && SUPPORTED.indexOf(fromQuery) > -1) return fromQuery;

    var saved;
    try { saved = w.localStorage.getItem(STORE_KEY); } catch (e) { /* private mode */ }
    if (saved && SUPPORTED.indexOf(saved) > -1) return saved;

    var nav = (w.navigator.language || '').slice(0, 2).toLowerCase();
    if (SUPPORTED.indexOf(nav) > -1) return nav;

    return DEFAULT_LANG;
  }

  /* Resolve a key, falling back to English so a missing German string shows
     real copy rather than an empty element. */
  function lookup(key, lang) {
    var value = dict(lang)[key];
    if (value === undefined && lang !== 'en') value = dict('en')[key];
    return value;
  }

  function apply(lang) {
    d.documentElement.setAttribute('lang', lang);

    var textNodes = d.querySelectorAll('[data-i18n]');
    Array.prototype.forEach.call(textNodes, function (el) {
      var v = lookup(el.getAttribute('data-i18n'), lang);
      if (v !== undefined) el.textContent = v;
    });

    // Dictionary values are first-party content authored in this repo, so the
    // HTML variant carries no untrusted input.
    var htmlNodes = d.querySelectorAll('[data-i18n-html]');
    Array.prototype.forEach.call(htmlNodes, function (el) {
      var v = lookup(el.getAttribute('data-i18n-html'), lang);
      if (v !== undefined) el.innerHTML = v;
    });

    var attrNodes = d.querySelectorAll('[data-i18n-attr]');
    Array.prototype.forEach.call(attrNodes, function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var bits = pair.split(':');
        if (bits.length !== 2) return;
        var v = lookup(bits[1].trim(), lang);
        if (v !== undefined) el.setAttribute(bits[0].trim(), v);
      });
    });

    // <title> and meta description.
    // data-meta lets several pages share a nav highlight (data-page) while
    // keeping their own title — e.g. the International sub-pages.
    var page = d.body.getAttribute('data-meta') || d.body.getAttribute('data-page');
    var title = lookup('meta.title.' + page, lang);
    if (title) d.title = title;
    var desc = lookup('meta.desc.' + page, lang);
    var descTag = d.querySelector('meta[name="description"]');
    if (desc && descTag) descTag.setAttribute('content', desc);

    // Reflect state on the switcher
    var buttons = d.querySelectorAll('[data-lang-choice]');
    Array.prototype.forEach.call(buttons, function (b) {
      var on = b.getAttribute('data-lang-choice') === lang;
      b.setAttribute('aria-pressed', String(on));
      b.classList.toggle('is-active', on);
    });

    w.BEJULO_LANG = lang;
    d.dispatchEvent(new CustomEvent('bejulo:langchange', { detail: { lang: lang } }));
  }

  function set(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    try { w.localStorage.setItem(STORE_KEY, lang); } catch (e) { /* ignore */ }
    apply(lang);
  }

  w.BejuloI18n = {
    apply: apply,
    set: set,
    get: function () { return w.BEJULO_LANG || pick(); },
    t: function (key) { return lookup(key, w.BEJULO_LANG || pick()); },
    supported: SUPPORTED
  };

  // Set <html lang> as early as possible; full pass runs once layout.js has
  // injected the chrome (see layout.js).
  d.documentElement.setAttribute('lang', pick());
})(window, document);
