/* ==========================================================================
   bejulo — International project timeline (2014–2026)

   In Figma this is a flat raster image. It is rendered from data here so the
   years and country lists stay selectable, searchable, translatable and
   responsive. Years alternate above / below the rail, and the node marking
   each year alternates between the bejulo chevron and an outline ring —
   matching the rhythm of the original artwork.

   Source: "be expert" accordion, International page.
   ========================================================================== */
(function () {
  'use strict';

  var C = {
    dom: { en: 'Dominican Republic',           de: 'Dominikanische Republik' },
    egy: { en: 'Egypt',                        de: 'Ägypten' },
    jpn: { en: 'Japan',                        de: 'Japan' },
    per: { en: 'Peru',                         de: 'Peru' },
    gbr: { en: 'United Kingdom',               de: 'Vereinigtes Königreich' },
    dnk: { en: 'Denmark',                      de: 'Dänemark' },
    nga: { en: 'Nigeria',                      de: 'Nigeria' },
    irl: { en: 'Ireland',                      de: 'Irland' },
    mex: { en: 'Mexico',                       de: 'Mexiko' },
    cyp: { en: 'Cyprus',                       de: 'Zypern' },
    hun: { en: 'Hungary',                      de: 'Ungarn' },
    nld: { en: 'Kingdom of the Netherlands',   de: 'Königreich der Niederlande' },
    zaf: { en: 'South Africa',                 de: 'Südafrika' },
    ukr: { en: 'Ukraine',                      de: 'Ukraine' },
    bra: { en: 'Brazil',                       de: 'Brasilien' },
    ita: { en: 'Italy',                        de: 'Italien' },
    grc: { en: 'Greece',                       de: 'Griechenland' },
    tun: { en: 'Tunisia',                      de: 'Tunesien' },
    fra: { en: 'France',                       de: 'Frankreich' },
    esp: { en: 'Spain',                        de: 'Spanien' },
    zmb: { en: 'Zambia',                       de: 'Sambia' }
  };

  var YEARS = [
    { year: '2014', where: 'above', c: ['dom', 'egy', 'jpn', 'per', 'gbr'] },
    { year: '2015', where: 'below', c: ['dnk', 'nga', 'gbr'] },
    { year: '2016', where: 'above', c: ['irl', 'mex', 'gbr'] },
    { year: '2017', where: 'below', c: ['irl', 'nld', 'zaf'] },
    { year: '2018', where: 'above', c: ['cyp', 'hun', 'nld'] },
    { year: '2019', where: 'below', c: ['hun', 'nld', 'zaf', 'ukr'] },
    { year: '2020', where: 'above', c: ['bra', 'ita', 'nld'] },
    { year: '2021', where: 'below', c: ['grc', 'nld'] },
    { year: '2022', where: 'above', c: ['irl', 'nld'] },
    { year: '2023', where: 'below', c: ['irl', 'nld', 'tun'] },
    { year: '2024', where: 'above', c: ['fra', 'irl', 'ita'] },
    { year: '2025', where: 'below', c: ['irl'] },
    { year: '2026', where: 'above', c: ['irl', 'ita', 'esp', 'zmb'] }
  ];

  var CHEVRON = '<img src="assets/icons/chevrons.svg" width="34" height="24" alt="">';

  function render(lang) {
    var host = document.getElementById('project-timeline');
    if (!host) return;

    host.innerHTML = YEARS.map(function (step) {
      var isAbove = step.where === 'above';
      var countries = step.c.map(function (key) {
        return '<li>' + ((C[key] && C[key][lang]) || (C[key] && C[key].en) || key) + '</li>';
      }).join('');

      return '<div class="timeline__step timeline__step--' + step.where +
             (isAbove ? ' timeline__step--chevron' : '') + '">' +
               '<div class="timeline__card">' +
                 '<p class="timeline__year">' + step.year + '</p>' +
                 '<ul class="timeline__list">' + countries + '</ul>' +
               '</div>' +
               '<span class="timeline__node">' + (isAbove ? CHEVRON : '') + '</span>' +
             '</div>';
    }).join('');
  }

  function current() {
    return (window.BejuloI18n && window.BejuloI18n.get()) || 'en';
  }

  function init() {
    render(current());
    document.addEventListener('bejulo:langchange', function (e) {
      render((e.detail && e.detail.lang) || current());
    });
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
