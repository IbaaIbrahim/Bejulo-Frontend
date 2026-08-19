/* ==========================================================================
   bejulo — accordion
   Drives the expand/collapse rows on the International and Careers pages.
   Rows may start open by adding class="accordion__item is-open" in the markup
   (the Figma file shows both collapsed and expanded states).
   ========================================================================== */
(function () {
  'use strict';

  function init() {
    var items = document.querySelectorAll('.accordion__item');
    if (!items.length) return;

    Array.prototype.forEach.call(items, function (item, i) {
      var trigger = item.querySelector('.accordion__trigger');
      var panel = item.querySelector('.accordion__panel');
      if (!trigger || !panel) return;

      var open = item.classList.contains('is-open');
      var panelId = panel.id || 'acc-panel-' + i + '-' + Math.random().toString(36).slice(2, 7);
      panel.id = panelId;
      trigger.setAttribute('aria-expanded', String(open));
      trigger.setAttribute('aria-controls', panelId);
      panel.setAttribute('role', 'region');
      panel.setAttribute('aria-labelledby', trigger.id || (trigger.id = panelId + '-trigger'));

      trigger.addEventListener('click', function () {
        var isOpen = item.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', String(isOpen));
      });
    });
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
