/* ==========================================================================
   bejulo — copy dictionary (EN / DE)

   BOTH LANGUAGES ARE THE CLIENT'S OWN TEXT, transcribed verbatim from the
   Figma files supplied on 2026-08-24:
     EN  channel 8vek3r8v   (see docs/client-text/en-figma.txt, en-international.txt)
     DE  channel pyuzy0bt   (see docs/client-text/de-figma.txt, de-international.txt)

   Do not reword either language. Where the client's review notes asked for a
   change that differs from the Figma text, the note wins and the line is
   marked "client review 2026-08-24".

   Values may contain inline HTML (the orange "be" span, <br>, <strong>, <ul>)
   and are rendered with data-i18n-html. All content here is first-party.

   RULE: a value containing markup or HTML entities must only ever be consumed
   with data-i18n-html. Keys read via plain data-i18n (textContent) must hold
   literal characters — write "&", not "&amp;" — or the entity shows verbatim.

   The "be <adjective>." lead-ins stay in English in both languages: the client
   uses them identically in the DE file, so they are a brand device, not copy.
   ========================================================================== */
window.BEJULO_CONTENT = {

  /* =========================== ENGLISH =========================== */
  en: {
    /* --- chrome --- */
    'skip': 'Skip to content',
    'nav.services': 'Our Services',
    'nav.international': 'International',
    'nav.projects': 'Projects',
    'nav.about': 'About us',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    'nav.menu.open': 'Open menu',
    'nav.menu.close': 'Close menu',
    'nav.primary': 'Primary',
    'logo.alt': 'bejulo — sense of energy',
    'lang.label': 'Language',
    'lang.en': 'EN',
    'lang.de': 'DE',
    'lang.en.full': 'Switch to English',
    'lang.de.full': 'Auf Deutsch umschalten',

    'footer.copy': '© bejulo 2026',
    'footer.legalnav': 'Legal',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.cookies': 'Cookies',
    /* client review 2026-09-08 §2 — ISO 9001:2015 badge in the footer, linked
       to the certificate in the language the visitor is reading. The href is a
       dictionary value rather than markup precisely so the EN/DE switch swaps
       the PDF along with the rest of the page; see layout.js. */
    'footer.iso.href': 'assets/certificates/bejulo-iso-9001-en.pdf',
    'footer.iso.alt': 'ISO 9001:2015 certified company — certificate registration number 260812 11 QM',
    'footer.iso.title': 'Open our ISO 9001:2015 certificate (PDF)',

    /* --- meta --- */
    'meta.title.home': 'bejulo — PV and BESS: Reliable. Sustainable. Profitable.',
    'meta.desc.home': 'bejulo develops, builds and operates turnkey solar PV and battery energy storage projects worldwide — reliable, sustainable and profitable.',
    'meta.title.services': 'Our Services — End-to-end PV and BESS solutions | bejulo',
    'meta.desc.services': 'Project development, construction, operations and maintenance and IPP energy marketing for solar PV and battery storage.',
    'meta.title.international': 'International — Operating globally, taking responsibility | bejulo',
    'meta.desc.international': 'bejulo delivers turnkey solar PV, battery energy storage and revamping projects around the world.',
    'meta.title.international-experience': 'International experience — Local expertise | bejulo',
    'meta.desc.international-experience': 'Valuable experience across a range of regulatory, climatic and technical environments.',
    'meta.title.international-services': 'Service spectrum — Your one-stop shop for PV, BESS and revamping | bejulo',
    'meta.desc.international-services': 'EPC, BESS integration, revamping and O&M under one roof, wherever your projects are located.',
    'meta.title.international-contact': 'International contact | bejulo',
    'meta.desc.international-contact': 'Get in touch with the bejulo international team in Mainz, Germany.',
    'meta.title.projects': 'Projects — Our projects speak for themselves | bejulo',
    'meta.desc.projects': 'More than 65 PV projects with around 700 MWp installed capacity across three continents.',
    'meta.title.about': 'About us — The people behind sustainable energy | bejulo',
    'meta.desc.about': 'Since 2012 bejulo has been creating a more sustainable future through expert PV solutions.',
    'meta.title.careers': 'Careers — Build your career with us | bejulo',
    'meta.desc.careers': 'Join the bejulo team and share our passion for renewable energy.',
    'meta.title.contact': 'Contact | bejulo',
    'meta.desc.contact': 'bejulo GmbH, Dekan-Laist-Straße 15a, 55129 Mainz, Germany.',
    'meta.title.project': 'Project detail | bejulo',
    'meta.desc.project': 'Detail page for a bejulo photovoltaic project.',
    'meta.title.project-germany': 'Projects in Germany | bejulo',
    'meta.desc.project-germany': 'More than 46 PV plants with over 455 MWp — including Kahsel Süd, Merbitz, Gerbstedt and Sennewitz.',
    'meta.title.project-netherlands': 'Projects in the Netherlands | bejulo',
    'meta.desc.project-netherlands': 'Six PV plants with over 135 MWp — Almelo, Hall, Heerenveen, Stadskanaal and Mercurius.',
    'meta.title.project-ireland': 'Projects in Ireland | bejulo',
    'meta.desc.project-ireland': 'Three PV plants with over 25 MWp — Lehinch, Friarspark and Horsepasture, with Ballinaclough under construction.',
    'meta.title.project-united-kingdom': 'Projects in the United Kingdom | bejulo',
    'meta.desc.project-united-kingdom': 'Five PV plants with over 50 MWp — Odell, Glebe and Caswell.',
    'meta.title.project-hungary': 'Projects in Hungary | bejulo',
    'meta.desc.project-hungary': 'A 23 MWp PV plant at Bükkabrany, built on a former opencast coal mine.',
    'meta.title.project-iran': 'Projects in Iran | bejulo',
    'meta.desc.project-iran': 'Three PV plants with 22 MWp — Ehyaei, Eslamieh and Vian.',
    'meta.title.project-south-africa': 'Projects in South Africa | bejulo',
    'meta.desc.project-south-africa': 'Two PV plants with a total capacity of 443 kWp.',

    /* --- shared buttons --- */
    'btn.contact': 'Get in touch!',
    'btn.contactus': 'Contact us',
    'btn.services': 'Explore our services',
    'btn.projects': 'Explore our projects',
    'btn.experience': 'Discover our experience',
    'btn.international': 'Explore our international competence',
    'btn.intlprojects': 'Explore our international projects',
    'btn.readmore': 'Read more…',

    /* --- home --- */
    'home.hero.alt': 'Aerial view of a large bejulo solar photovoltaic plant',
    'home.scrollcue': 'Scroll down to the introduction',
    'home.backtotop': 'Back to top',
    'home.h1': 'PV and BESS –<br>Reliable. Sustainable. Profitable.',
    'home.lede': '<span class="be">be</span><span class="be-lead"> ready.</span> The future is renewable. As a trusted partner for PV and BESS projects, we develop sustainable energy solutions with long-term commercial benefits. Together with landowners and investors, we create lasting value – for local businesses, communities and the environment. Ready for the future?  We’re here to help you make it happen.',

    /* --- services --- */
    'services.hero.alt': 'Aerial view of a bejulo solar park in an arid landscape',
    'services.h2': 'End-to-end PV and BESS solutions',
    'services.c1.title': 'PV and BESS project development',
    'services.c1.sub': 'Powering performance',
    'services.c1.alt': 'High-voltage transmission towers at dusk',
    'services.c1.body': '<span class="be">be</span><span class="be-lead"> strong.</span> Great energy projects start with the right foundations. That’s why we develop PV and BESS projects that are commercially sound, environmentally responsible and built for long-term success. As an independent, privately financed company, every one of our projects is selected for its location, planning certainty and financial strength – ensuring confidence for landowner, local authorities and investors.',
    'services.c1.body2': 'For us, working in partnership means acting transparently, reliably and with commercial foresight. Through clear contractual structures, early stakeholder engagement and regional value creation, we build trusting partnerships with businesses, municipal utilities, local authorities and investors. Our independently financed projects deliver stable returns, long-term operational performance and sustainable energy solutions built to last.',
    'services.c1.body3': '<span class="be">be</span><span class="be-lead"> in touch.</span> We purchase PV and BESS project rights at every stage of development – from early pipeline opportunities to shovel-ready projects. Our fast and collaborative decision-making processes are complemented by fair and reliable business terms. Our independent financing creates commercially robust energy projects that drive the energy transition while delivering long-term value, reliable returns and lasting benefits for local communities.',
    'services.c2.title': 'PV and BESS project construction',
    'services.c2.sub': 'Built for high performance',
    'services.c2.alt': 'Battery energy storage containers installed at a solar park',
    'services.c2.body': '<span class="be">be</span><span class="be-lead"> successful.</span> As your trusted PV and BESS project partner, we draw on many years of experience in renewable energy infrastructure. We deliver tailored solutions to meet a wide range of project requirements. Every PV plant is engineered for quality, reliability and long-term performance.',
    'services.c3.title': 'Operations and maintenance',
    'services.c3.sub': 'Looking after what matters',
    'services.c3.alt': 'A bejulo technician inspecting electrical switchgear',
    'services.c3.body': '<span class="be">be</span><span class="be-lead"> responsible.</span> Our experienced team operates and maintains renewable energy assets with care, expertise and fast response times – helping to maximise availability, profitability and long-term growth for our customers.',
    'services.c4.title': 'IPP energy marketing',
    'services.c4.sub': 'Greater independence. Greater flexibility.',
    'services.c4.alt': 'Solar modules bordered by a wildflower meadow',
    'services.c4.body': '<span class="be">be</span><span class="be-lead"> independent.</span> Energy is a foundational element of the future. As an independent power producer, we’re building our own portfolio of PV and BESS assets, enabling us to market electricity flexibly and feed it into the grid in line with demand. By combining renewable power generation with direct marketing, we’re helping to build a more independent, diversified and resilient energy supply.',
    /* client review 2026-08-24 §2b — split into two sentences, period + line break */
    'services.cta.line1': 'Whether you’re a landowner, looking to sell project rights or seeking a trusted delivery partner.',
    'services.cta.line2': 'bejulo is here to help.',

    /* --- international (shared) --- */
    'intl.hero.alt': 'Hands holding a glowing globe against a sunrise',
    'intl.headline': 'Operating globally. Taking responsibility. Building the future.<span>bejulo: your one-stop shop for PV, BESS &amp; revamping</span>',

    /* --- international landing --- */
    'intl.p1.title': 'From planning to operation &amp; maintenance – we’re with you every step of the way.',
    'intl.p1.body': '<span class="be">be</span><span class="be-lead"> committed.</span> We deliver turnkey solar PV, battery energy storage and revamping projects around the world. For you, that means maximum reliability, minimal complexity and sustainable returns.',
    'intl.p2.title': 'One partner for every project phase.',
    'intl.p2.body': '<span class="be">be</span><span class="be-lead"> integrated.</span> You’ll have one dedicated partner coordinating every aspect of your project. We coordinate all processes, interfaces and project partners, allowing you to focus on what matters most – your investment.',
    'intl.p3.title': 'Your project. Our responsibility.',
    'intl.p3.body': '<span class="be">be</span><span class="be-lead"> responsible.</span> We believe the best projects are built on long-term partnerships. That’s why we stay committed beyond completion, helping your investment deliver lasting technical performance, commercial value and operational reliability.',

    /* --- international experience --- */
    'intl.exp.a1': '<span class="be">be</span> expert – International experience. Local expertise.',
    'intl.exp.a1.body': 'Thanks to our international project portfolio, we have valuable experience and expertise in a range of regulatory, climatic and technical environments. By building close local partnerships, we make sure every project is delivered efficiently and sustainably.',
    'intl.exp.a2': '<span class="be">be</span> sustainable – Driving the energy transition',
    'intl.exp.a2.alt': 'Wildflower meadow in front of a bejulo solar park',
    'intl.exp.a2.body': 'We’re committed to accelerating the transition to renewable energy. We develop PV plants that combine environmental responsibility with strong commercial performance. Using proven technology and efficient processes, we maximise energy generation while safeguarding long-term investment returns.',
    'intl.exp.a3': '<span class="be">be</span> reliable – Quality you can trust',
    'intl.exp.a3.alt': 'Two bejulo employees in branded workwear inspecting solar modules',
    'intl.exp.a3.body': 'Open communication, uncompromising safety standards and close collaboration are at the heart of everything we do. Whether working with investors, energy providers or industrial clients, we build lasting partnerships through expertise, reliability and consistent project delivery.',
    'intl.exp.tl.more': '… <strong>and many more</strong>…',
    'intl.exp.tl.note': '22 projects connected to the grid on time and in compliance with local regulations across six countries outside Germany.',
    'intl.exp.tl.capacity': 'more than 250 MWp installed capacity',
    'intl.exp.tl.caption': 'bejulo project timeline, 2014 to 2026',

    /* --- international services --- */
    'intl.svc.a1': '<span class="be">be</span> holistic – Your one-stop shop for PV, BESS and revamping',
    'intl.svc.a1.alt': 'Aerial view of solar module rows crossed by a service track',
    'intl.svc.a1.body': 'Our end-to-end service covers every stage of your project – from initial design and engineering to delivery and long-term operational management. By bringing everything under one roof, we reduce complexity, mitigate risk and deliver high-performance energy solutions optimised for long-term commercial success, wherever your projects are located.',
    'intl.svc.a1.listtitle': 'Our services include:',
    'intl.svc.a1.li1': 'Engineering, procurement and construction (EPC): technical design and turnkey delivery of your installation',
    'intl.svc.a1.li2': 'BESS integration: proven, tailored battery energy storage solutions for maximum flexibility and enhanced returns',
    'intl.svc.a1.li3': 'Revamping: upgrading and enhancing the performance of existing PV systems',
    'intl.svc.a1.li4': 'Operations and maintenance (O&amp;M): technical asset management to ensure long-term performance',
    'intl.svc.a2': '<span class="be">be</span> supportive – Reducing complexity. Maximising returns.',
    'intl.svc.a2.alt': 'Solar park under a dramatic cloudy sky',
    'intl.svc.a2.body': 'Energy projects are becoming increasingly demanding from a regulatory, technical and commercial perspective. We simplify that complexity with an integrated approach designed to streamline collaboration, reduce friction and provide complete transparency throughout the project lifecycle.',
    'intl.svc.a2.listtitle': 'Your benefits:',
    'intl.svc.a2.li1': 'Increased planning confidence',
    'intl.svc.a2.li2': 'Optimised project delivery times',
    'intl.svc.a2.li3': 'Higher energy yields and stronger returns',

    /* --- contact (both variants) --- */
    'contact.company': '<strong><span class="be">be</span>julo GmbH</strong>',
    'contact.street': 'Dekan-Laist-Straße 15a',
    'contact.city': '55129 Mainz',
    'contact.country': 'Germany',
    'contact.tel.label': 'Tel.:',
    'contact.tel': '+49 6131 – 2151-400',
    'contact.email.label': 'E-Mail:',
    'contact.email': 'info@bejulo.de',
    'contact.email.intl': 'international@bejulo.de',
    'contact.follow': 'Follow us on LinkedIn',
    'contact.linkedin.alt': 'bejulo on LinkedIn',
    'contact.photo.alt': 'The bejulo head office in Mainz, Germany',
    'contact.pending': 'Content for the international contact page is still to be confirmed by bejulo.',

    /* --- projects --- */
    'projects.hero.alt': 'Rows of solar modules stretching towards the horizon',
    'projects.h2': 'Our projects speak for themselves',
    'projects.lede': '<span class="be">be</span><span class="be-lead"> international.</span> We operate internationally – and we’re proud of it. Today, bejulo projects can be found across three continents. Since our company was founded, we’ve successfully completed more than 65 PV projects with a total installed capacity of around 700 MWp. Numerous additional projects are currently under construction, with further developments already in the pipeline.',
    'projects.map.label': 'Map of bejulo project locations worldwide',
    'projects.map.insetLabel': 'Detail map of bejulo project locations in Europe',
    'projects.map.hint': 'Hover a marker for project details',
    'projects.map.note': 'The countries with orange markers represent a selection of our successfully completed projects.',
    'projects.customers.h2': 'Satisfied customers are our greatest success',
    'projects.customers.body': '<span class="be">be</span><span class="be-lead"> happy.</span> We work with customers across a broad range of industries, with many placing their trust in our expertise and commercial performance for years. They choose bejulo because we combine technical expertise, commercial efficiency and a fully integrated approach to project delivery. Built on quality, transparency and fairness, our partnerships are designed to create lasting value for everyone involved.',
    'project.back': 'Back to all projects',

    /* --- project detail pages ---------------------------------------------
       Client copy from "Button Projekte EN & DE" (supplied 2026-09-10),
       transcribed from the client's own EN column. `.specs` values are <dl>
       markup and must be consumed with data-i18n-html.

       Normalised against the source, so the two languages read consistently
       (every change is listed in the hand-over notes):
         · decimal separator in the EN figures: "38,4 MWp" -> "38.4 MWp"
         · a space before the unit in both languages: "70MWh" -> "70 MWh"
       Left ALONE because only bejulo can say which number is right:
         · Germany  — DE "mehr als 45 Anlagen" vs EN "more than 46 PV Plants"
         · Odell & Glebe — DE 34,3 MWp vs EN 34,4 MWp
       ---------------------------------------------------------------------- */
    'proj.hero.alt': 'Rows of solar modules stretching towards the horizon',
    'proj.specs.label': 'Project data',

    /* Germany */
    'proj.germany.h1': 'Germany',
    'proj.germany.stats': 'More than 46 PV Plants installed and commissioned, with a total capacity of over 455 MWp.',
    'proj.germany.stats2': 'Further plants currently under construction, in the development phase and in the tendering process.',
    'proj.germany.intro': 'Successfully commissioned: Three of our major reference projects',
    'proj.germany.soil': 'Challenging soil conditions',

    'proj.kahsel.title': 'Kahsel Süd, Brandenburg',
    'proj.kahsel.body': 'With the commissioning of this project, bejulo has achieved a major milestone: the planning, construction and commissioning of our first PV Plant with BESS',
    'proj.kahsel.specs': '<dt>Installed capacity PV Plant:</dt><dd>38.4 MWp</dd><dt>Installed capacity BESS:</dt><dd>70 MWh</dd><dt>Construction time:</dt><dd>Feb – Jun 2026</dd><dt>Commissioning:</dt><dd>Aug 2026</dd>',
    'proj.kahsel.alt': 'Aerial view of the battery storage containers being installed alongside the Kahsel Süd solar park',

    'proj.merbitz.title': 'Merbitz, Saxony-Anhalt',
    'proj.merbitz.body': 'A 71.5 MWp PV plant - planned, constructed, and commissioned by bejulo. Undercrossing of the motorway and railway line: Realised via HDD.',
    'proj.merbitz.specs': '<dt>Installed capacity:</dt><dd>71.5 MWp</dd><dt>Construction time:</dt><dd>Oct 2025 – Mar 2026</dd><dt>Commissioning:</dt><dd>Apr 2026</dd>',
    'proj.merbitz.alt': 'Aerial view of the Merbitz solar park between farmland and a village',

    'proj.gerbstedt.title': 'Gerbstedt, Saxony-Anhalt',
    'proj.gerbstedt.body': 'A 53 MWp PV farm, planned and constructed on rolling terrain.',
    'proj.gerbstedt.specs': '<dt>Installed capacity:</dt><dd>52.9 MWp</dd><dt>Construction time:</dt><dd>Mar 2026 – Nov 2026</dd>',
    'proj.gerbstedt.alt': 'Aerial view of the Gerbstedt solar park in open farmland, with wind turbines on the horizon',

    'proj.sennewitz.title': 'Sennewitz Petersberg and Sennewitz 2, Saxony-Anhalt',
    'proj.sennewitz.body': 'Both projects were constructed on a former ash landfill.',
    'proj.sennewitz.specs': '<dt>Installed capacity, both projects:</dt><dd>11.7 MWp</dd><dt>Construction time, both projects:</dt><dd>Feb 2019 – Apr 2019 and<br>Jan 2020 – Mar 2020</dd>',
    'proj.sennewitz.alt': 'Aerial view of the two Sennewitz solar parks beside a railway line',

    /* Hungary */
    'proj.hungary.h1': 'Hungary',
    'proj.hungary.stats': '1 PV Plant installed and commissioned, with a total capacity of 23 MWp.',

    'proj.bukkabrany.title': 'Bukkabrany',
    'proj.bukkabrany.body': 'A 23 MWp PV plant, which we planned and constructed on a former opencast coal mine.',
    'proj.bukkabrany.specs': '<dt>Installed capacity:</dt><dd>22.7 MWp</dd><dt>Construction time:</dt><dd>Sep 2018 – Feb 2019</dd>',
    'proj.bukkabrany.alt': 'Aerial view of the Bükkabrany solar park on a reclaimed opencast coal mine',

    /* Ireland */
    'proj.ireland.h1': 'Ireland',
    'proj.ireland.stats': '3 PV Plants installed and commissioned, with a total capacity of over 25 MWp.',
    'proj.ireland.stats2': 'Further plants currently under construction and in the tendering process.',

    'proj.lehinch.title': 'Lehinch',
    'proj.lehinch.body': 'A 6.3 MWp PV plant, constructed in winter on undulating, inhomogeneous terrain with extensive surface water accumulation after heavy rain',
    'proj.lehinch.specs': '<dt>Installed capacity:</dt><dd>6.3 MWp</dd><dt>Construction time:</dt><dd>Sep 2023 – Jun 2024</dd>',
    'proj.lehinch.alt': 'Site team assembling mounting structures on wet ground at Lehinch',

    'proj.friarspark.title': 'Friarspark',
    'proj.friarspark.specs': '<dt>Installed capacity:</dt><dd>6.5 MWp</dd><dt>Construction time:</dt><dd>Jul 2023 – Jun 2024</dd>',
    'proj.friarspark.alt': 'A grass track running between the module rows at Friarspark, with an oak tree beyond',

    'proj.horsepasture.title': 'Horsepasture',
    'proj.horsepasture.body': 'A 12.7 MWp PV plant constructed on inhomogeneous soil; Piling foundation via pre-drilling and root posts; approx. 1-year project suspension due to archaeological finds on site',
    'proj.horsepasture.specs': '<dt>Installed capacity:</dt><dd>12.7 MWp</dd><dt>Construction time:</dt><dd>Jul 2023 – Mar 2025</dd>',
    'proj.horsepasture.alt': 'Module rows at Horsepasture under a rainbow after rainfall',

    'proj.ballinaclough.title': 'Ballinaclough',
    'proj.ballinaclough.specs': '<dt>Installed capacity:</dt><dd>15.5 MWp</dd><dt>Construction time:</dt><dd>under construction (start: Jul 2026)</dd>',

    /* The Netherlands */
    'proj.netherlands.h1': 'The Netherlands',
    'proj.netherlands.stats': '6 PV Plants installed and commissioned, with a total capacity of over 135 MWp.',

    'proj.almelo.title': 'Almelo',
    'proj.almelo.specs': '<dt>Installed capacity:</dt><dd>39.3 MWp</dd><dt>Construction time:</dt><dd>Jun 2019 – Nov 2019</dd>',
    'proj.almelo.alt': 'Aerial view of the Almelo solar park on the edge of farmland',

    'proj.hall.title': 'Hall',
    'proj.hall.specs': '<dt>Installed capacity:</dt><dd>36.1 MWp</dd><dt>Construction time:</dt><dd>Jul 2022 – Apr 2023</dd>',
    'proj.hall.alt': 'The Hall solar park seen from a wooden viewing platform',

    'proj.heerenveen.title': 'Heerenveen',
    'proj.heerenveen.specs': '<dt>Installed capacity:</dt><dd>7.3 MWp</dd><dt>Construction time:</dt><dd>Jun 2020 – Sep 2020</dd>',
    'proj.heerenveen.alt': 'The Heerenveen solar park behind a green field margin',

    'proj.stadskanaal.title': 'Stadskanaal',
    'proj.stadskanaal.specs': '<dt>Installed capacity:</dt><dd>13.7 MWp</dd><dt>Construction time:</dt><dd>Oct 2017 – Feb 2018</dd>',
    'proj.stadskanaal.alt': 'Module rows at Stadskanaal converging towards the horizon',

    'proj.mercurius.title': 'Mercurius',
    'proj.mercurius.specs': '<dt>Installed capacity:</dt><dd>4.4 MWp</dd><dt>Construction time:</dt><dd>Aug 2018 – Nov 2018</dd>',
    'proj.mercurius.alt': 'Aerial view of the Mercurius mounting structures under construction on an industrial estate',

    /* United Kingdom */
    'proj.uk.h1': 'United Kingdom',
    'proj.uk.stats': '5 PV Plants installed and commissioned, with a total capacity of over 50 MWp.',

    'proj.odellglebe.title': 'Odell and Glebe',
    'proj.odellglebe.specs': '<dt>Installed capacity, both projects:</dt><dd>34.4 MWp</dd><dt>Construction time, both projects:</dt><dd>Nov/Dec 2014 – Mar 2015</dd>',
    'proj.odellglebe.alt1': 'Aerial view of the Odell solar park across harvested fields',
    'proj.odellglebe.alt2': 'Aerial view of the Glebe solar park in a patchwork of fields',

    'proj.caswell.title': 'Caswell',
    'proj.caswell.specs': '<dt>Installed capacity:</dt><dd>5.9 MWp</dd><dt>Construction time:</dt><dd>Jan 2016 – Mar 2016</dd>',
    'proj.caswell.alt': 'Aerial view of the Caswell solar park bordered by hedgerows',

    /* Iran */
    'proj.iran.h1': 'Iran',
    'proj.iran.stats': '3 PV Plants installed and commissioned, with a total capacity of 22 MWp.',

    'proj.ehyaei.title': 'Ehyaei and Eslamieh',
    'proj.ehyaei.specs': '<dt>Installed capacity, both projects:</dt><dd>13.9 MWp</dd><dt>Construction time, both projects:</dt><dd>Sep 2016 – Jan 2017</dd>',
    'proj.ehyaei.alt1': 'Aerial view of the Ehyaei solar park on an arid plain, with mountains on the horizon',
    'proj.ehyaei.alt2': 'Aerial view of the Eslamieh module arrays on open desert ground',

    'proj.vian.title': 'Vian',
    'proj.vian.specs': '<dt>Installed capacity:</dt><dd>7.9 MWp</dd><dt>Construction time:</dt><dd>May 2017 – Jul 2017</dd>',
    'proj.vian.alt': 'The fenced Vian solar array with its inverter station',

    /* South Africa — bejulo supplied country figures but no project entries. */
    'proj.southafrica.h1': 'South Africa',
    'proj.southafrica.stats': '2 PV Plants installed and commissioned, with a total capacity of 443 kWp.',
    'proj.southafrica.pending': 'Project details for South Africa will follow.',

    /* --- about --- */
    'about.hero.alt': 'The bejulo team photographed together outdoors',
    'about.h2': 'The people behind sustainable energy',
    'about.body1': '<span class="be">be</span><span class="be-lead"> passionate. be with us.</span>',
    'about.body2': 'Since 2012, bejulo has been creating a more sustainable future through expert PV solutions and a genuine passion for renewable energy. Responsibility, reliability, quality and teamwork are the values that shape our culture and define the way we work.',
    'about.body3': 'Our people bring together technical excellence, international experience and a shared ambition to make a difference. With personal commitment, expertise and a long-term perspective, we help our customers achieve sustainable success.',
    'about.body4': 'What matters most to us? Building partnerships based on trust and mutual respect. We believe in working openly, fairly and respectfully. We see our customers not simply as clients, but as long-term partners.',
    'about.body5': 'When you choose bejulo, you choose a partner you can rely on.',

    /* --- careers --- */
    'careers.h1': 'Build your career with us',
    'careers.lede': '<span class="be">be</span><span class="be-lead"> part of the team!</span><br>If you share our passion for renewable energy, we’d love to have you on board!',
    'careers.callout': 'We look forward to receiving your application.  Please send it to: <strong>bewerbung@bejulo.de</strong>',
    'careers.vacancies': 'Vacancies:',
    'careers.job1': 'Projektleiter:in (m/w/d)',
    'careers.job2': 'Ingenieur:in (m/w/d)',
    'careers.job.pending': 'The full role description will be published here. Please send speculative applications to bewerbung@bejulo.de.'
  },

  /* =========================== DEUTSCH =========================== */
  /* Client text, Figma channel pyuzy0bt. Verbatim — do not reword. */
  de: {
    /* --- chrome --- */
    'skip': 'Zum Inhalt springen',
    'nav.services': 'Unsere Leistungen',
    'nav.international': 'International',
    'nav.projects': 'Projekte',
    'nav.about': 'Über uns',
    'nav.careers': 'Karriere',
    'nav.contact': 'Kontakt',
    'nav.menu.open': 'Menü öffnen',
    'nav.menu.close': 'Menü schließen',
    'nav.primary': 'Hauptnavigation',
    'logo.alt': 'bejulo — sense of energy',
    'lang.label': 'Sprache',
    'lang.en': 'EN',
    'lang.de': 'DE',
    'lang.en.full': 'Switch to English',
    'lang.de.full': 'Auf Deutsch umschalten',

    'footer.copy': '© bejulo 2026',
    'footer.legalnav': 'Rechtliches',
    'footer.legal': 'Impressum',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.terms': 'AGB',
    'footer.cookies': 'Cookies',
    /* client review 2026-09-08 §2 — siehe EN */
    'footer.iso.href': 'assets/certificates/bejulo-iso-9001-de.pdf',
    'footer.iso.alt': 'Nach ISO 9001:2015 zertifiziertes Unternehmen — Zertifikat-Register-Nr. 260812 11 QM',
    'footer.iso.title': 'ISO-9001:2015-Zertifikat öffnen (PDF)',

    /* --- meta --- */
    'meta.title.home': 'bejulo — PV und BESS: zuverlässig, nachhaltig, wirtschaftlich',
    'meta.desc.home': 'bejulo entwickelt, baut und betreibt schlüsselfertige Photovoltaik- und Batteriespeicherprojekte weltweit.',
    'meta.title.services': 'Unsere Leistungen — PV und BESS ganzheitlich gedacht | bejulo',
    'meta.desc.services': 'Projektentwicklung, Anlagenbau, technische Betriebsführung und Stromvermarktung für PV und BESS.',
    'meta.title.international': 'International — Global agieren, Verantwortung übernehmen | bejulo',
    'meta.desc.international': 'bejulo realisiert Photovoltaik-, Batteriespeicher- und Revamping-Projekte weltweit.',
    'meta.title.international-experience': 'Erfahrung — internationale Erfahrung, lokale Kompetenz | bejulo',
    'meta.desc.international-experience': 'Fundierte Erfahrung bei unterschiedlichsten regulatorischen, klimatischen und infrastrukturellen Rahmenbedingungen.',
    'meta.title.international-services': 'Leistungsspektrum — One-Stop-Shop für PV, BESS und Revamping | bejulo',
    'meta.desc.international-services': 'EPC, BESS-Integration, Revamping und Betriebsführung aus einer Hand.',
    'meta.title.international-contact': 'Internationaler Kontakt | bejulo',
    'meta.desc.international-contact': 'Nehmen Sie Kontakt zum internationalen Team von bejulo in Mainz auf.',
    'meta.title.projects': 'Projekte — Unsere Projekte, unsere Visitenkarte | bejulo',
    'meta.desc.projects': 'Mehr als 65 Photovoltaikprojekte mit rund 700 Megawattpeak Gesamtleistung auf drei Kontinenten.',
    'meta.title.about': 'Über uns — Kompetenz, die Energie bewegt | bejulo',
    'meta.desc.about': 'Seit 2012 steht bejulo für nachhaltige Energielösungen und fundierte PV-Expertise.',
    'meta.title.careers': 'Karriere — Bei uns können Sie Karriere machen | bejulo',
    'meta.desc.careers': 'Wenn Sie Energie leben und lieben, sind Sie bei uns richtig.',
    'meta.title.contact': 'Kontakt | bejulo',
    'meta.desc.contact': 'bejulo GmbH, Dekan-Laist-Straße 15a, 55129 Mainz, Deutschland.',
    'meta.title.project': 'Projektdetails | bejulo',
    'meta.desc.project': 'Detailseite zu einem Photovoltaikprojekt von bejulo.',
    'meta.title.project-germany': 'Projekte in Deutschland | bejulo',
    'meta.desc.project-germany': 'Mehr als 45 Anlagen mit über 455 MWp — darunter Kahsel Süd, Merbitz, Gerbstedt und Sennewitz.',
    'meta.title.project-netherlands': 'Projekte in den Niederlanden | bejulo',
    'meta.desc.project-netherlands': 'Sechs Anlagen mit über 135 MWp — Almelo, Hall, Heerenveen, Stadskanaal und Mercurius.',
    'meta.title.project-ireland': 'Projekte in Irland | bejulo',
    'meta.desc.project-ireland': 'Drei Anlagen mit über 25 MWp — Lehinch, Friarspark und Horsepasture, Ballinaclough im Bau.',
    'meta.title.project-united-kingdom': 'Projekte in Großbritannien | bejulo',
    'meta.desc.project-united-kingdom': 'Fünf Anlagen mit über 50 MWp — Odell, Glebe und Caswell.',
    'meta.title.project-hungary': 'Projekte in Ungarn | bejulo',
    'meta.desc.project-hungary': 'Ein 23 MWp großer PV-Park in Bükkabrany auf einem ehemaligen Kohletagebau.',
    'meta.title.project-iran': 'Projekte im Iran | bejulo',
    'meta.desc.project-iran': 'Drei Anlagen mit 22 MWp — Ehyaei, Eslamieh und Vian.',
    'meta.title.project-south-africa': 'Projekte in Südafrika | bejulo',
    'meta.desc.project-south-africa': 'Zwei Anlagen mit einer Gesamtkapazität von 443 kWp.',

    /* --- shared buttons --- */
    'btn.contact': 'Kontaktieren Sie uns!',
    /* Buttons the DE file labels explicitly */
    'btn.experience': 'Erfahrung',
    'btn.services': 'Leistungsspektrum',
    'btn.intlprojects': 'International',
    /* client review 2026-08-24 §1b */
    'btn.international': 'Entdecken Sie unsere internationale Kompetenz',
    /* NOTE: the DE Figma file shows no button for these two — the wording below
       is a placeholder and still needs the client's German. */
    'btn.projects': 'Projekte',
    'btn.contactus': 'Kontakt',
    'btn.readmore': 'Mehr erfahren…',

    /* --- home --- */
    'home.hero.alt': 'Luftaufnahme einer großen Photovoltaikanlage von bejulo',
    'home.scrollcue': 'Nach unten zur Einführung scrollen',
    'home.backtotop': 'Nach oben',
    /* client review 2026-08-24 §1a — replaces the Figma "Photovoltaik und BESS …" */
    'home.h1': 'PV und BESS – zuverlässig, nachhaltig, wirtschaftlich',
    'home.lede': '<span class="be">be</span><span class="be-lead"> ready.</span> Die Zukunft gehört den erneuerbaren Energien. Als erfahrener Partner für PV- und Batteriespeicherprojekte entwickeln wir nachhaltige Energielösungen mit wirtschaftlichem Mehrwert. Gemeinsam mit Flächeneigentümern und Investoren schaffen wir langfristige Werte – ökologisch und ökonomisch. Bereit für die Zukunft?<br>Mit uns haben Sie den richtigen Partner an Ihrer Seite.',

    /* --- services --- */
    'services.hero.alt': 'Luftaufnahme eines bejulo-Solarparks in trockener Landschaft',
    'services.h2': 'Von Entwicklung bis Betrieb: PV und BESS ganzheitlich gedacht',
    'services.c1.title': 'Projektentwicklung PV und BESS',
    'services.c1.sub': 'Leistung unter Strom',
    'services.c1.alt': 'Hochspannungsmasten in der Abenddämmerung',
    'services.c1.body': '<span class="be">be</span><span class="be-lead"> strong.</span> Wir entwickeln PV- und BESS-Projekte mit klarem Fokus auf Wirtschaftlichkeit, Nachhaltigkeit und starke Performance. Als unabhängiges, eigenfinanziertes Unternehmen realisieren wir nur Projekte mit überzeugendem Standort, belastbarer Genehmigung und solidem wirtschaftlichem Fundament – für maximale Sicherheit bei Eigentümern, Kommunen und Investoren.',
    'services.c1.body2': 'Partnerschaft heißt für uns: Transparenz, Verlässlichkeit und wirtschaftlicher Weitblick. Mit klaren Verträgen, frühzeitiger Einbindung und regionaler Wertschöpfung schaffen wir Vertrauen bei Unternehmen, Stadtwerken, Kommunen und Investoren. Unsere unabhängig finanzierten Projekte stehen für stabile Erträge, langfristigen Betrieb und nachhaltige Energie mit Substanz.',
    'services.c1.body3': '<span class="be">be</span><span class="be-lead"> in touch.</span> Wir erwerben Rechte für PV- und BESS-Projekte in allen Entwicklungsphasen – von der frühen Pipeline bis zum baureifen Projekt. Wir prüfen schnell, entscheiden partnerschaftlich und bieten faire, verlässliche Konditionen. Dank unabhängiger Finanzierung entstehen wirtschaftlich starke Energieprojekte mit langfristiger Perspektive und nachhaltigem Mehrwert für die Region und ihre Energiezukunft.',
    'services.c2.title': 'Anlagenbau PV und BESS',
    'services.c2.sub': 'Gebaut für Erfolg',
    'services.c2.alt': 'Batteriespeicher-Container in einem Solarpark',
    'services.c2.body': '<span class="be">be</span><span class="be-lead"> successful.</span> Als PV- und BESS-Partner begleiten wir Sie mit langjähriger Erfahrung in der nachhaltigen Energieversorgung. Wir realisieren maßgeschneiderte Lösungen für unterschiedliche Anforderungen. Unsere Anlagen stehen für hohe Qualität und zuverlässige Verfügbarkeit.',
    'services.c3.title': 'Technische Betriebsführung PV und BESS',
    'services.c3.sub': 'Sorgfalt für stabile Erträge',
    'services.c3.alt': 'Ein bejulo-Techniker prüft eine Schaltanlage',
    'services.c3.body': '<span class="be">be</span><span class="be-lead"> responsible.</span> Wir warten und betreiben unsere Anlagen und die unserer Kunden mit großer Verantwortung und schnellen Reaktionszeiten. Damit gelingt es uns, langfristig verlässliche Erlöse zu sichern – für maximale Wirtschaftlichkeit und schnelles Wachstum.',
    'services.c4.title': 'Stromvermarktung IPP',
    'services.c4.sub': 'In Zukunft unabhängig und noch flexibler',
    'services.c4.alt': 'Solarmodule am Rand einer Blühwiese',
    'services.c4.body': '<span class="be">be</span><span class="be-lead"> independent.</span> Energie ist ein fundamentaler Baustein einer nachhaltigen Zukunft. Deshalb bauen wir als IPP ein eigenes Portfolio aus PV- und BESS-Anlagen auf, um erzeugten Strom flexibel zu vermarkten und bedarfsgerecht ins Netz einzuspeisen. Die Kombination aus Stromerzeugung und Stromvermarktung schafft wirtschaftliche Stabilität und stärkt eine diversifizierte sowie unabhängige Energieversorgung.',
    /* client review 2026-08-24 §2b — wording taken from the CTA screenshot the
       client supplied, which supersedes the DE Figma text for this section
       ("Ganz gleich ob Sie Flächeneigentümer sind, … bejulo ist Ihr
       Ansprechpartner."). */
    'services.cta.line1': 'Ob Sie Flächen besitzen, Projektrechte verkaufen möchten oder einen verlässlichen Umsetzungspartner suchen.',
    'services.cta.line2': 'bejulo ist für Sie da.',

    /* --- international (shared) --- */
    'intl.hero.alt': 'Hände halten eine leuchtende Weltkugel im Sonnenaufgang',
    'intl.headline': 'Global agieren, Verantwortung übernehmen, Zukunft schaffen<span>bejulo - One-Stop-Shop für PV, BESS und Revamping</span>',

    /* --- international landing --- */
    'intl.p1.title': 'Von der Planung bis zur Betriebsführung – wir übernehmen.',
    'intl.p1.body': '<span class="be">be</span><span class="be-lead"> committed.</span> Wir realisieren Freiflächen-Photovoltaikanlagen, integrierte Batteriespeicher und Revamping-Projekte weltweit – schlüsselfertig und aus einer Hand. Für Sie bedeutet das: maximale Sicherheit, minimale Komplexität und nachhaltige Erträge.',
    'intl.p2.title': 'Alles aus einer Hand – sorgenfrei zum erfolgreichen Projekt.',
    'intl.p2.body': '<span class="be">be</span><span class="be-lead"> integrated.</span> Mit uns haben Sie einen zentralen Ansprechpartner für alle Projektphasen. Wir koordinieren sämtliche Prozesse, Schnittstellen und Partner, sodass Sie sich auf das Wesentliche konzentrieren können: Ihre Investition.',
    'intl.p3.title': 'Ihr Projekt. Unsere Verantwortung.',
    'intl.p3.body': '<span class="be">be</span><span class="be-lead"> responsible.</span> Wir verstehen uns nicht nur als Dienstleister, sondern als langfristiger Partner. Unser Ziel ist es, Ihre Projekte nicht nur erfolgreich zu realisieren, sondern nachhaltig zum Erfolg zu führen – technisch, wirtschaftlich und operativ.',

    /* --- international experience --- */
    'intl.exp.a1': '<span class="be">be</span> expert – internationale Erfahrung, lokale Kompetenz',
    'intl.exp.a1.body': 'Mit Projekten auf mehreren Kontinenten verfügen wir über fundierte Erfahrung in unterschiedlichsten regulatorischen, klimatischen und infrastrukturellen Rahmenbedingungen. Gleichzeitig setzen wir auf starke lokale Partnerschaften, um Projekte effizient und nachhaltig umzusetzen.',
    'intl.exp.a2': '<span class="be">be</span> sustainable – Nachhaltigkeit und Wirtschaftlichkeit im Fokus',
    'intl.exp.a2.alt': 'Blühwiese vor einem Solarpark von bejulo',
    'intl.exp.a2.body': 'Unsere Motivation ist es, die Energiewende aktiv mitzugestalten. Wir entwickeln Photovoltaikanlagen, die nicht nur ökologisch sinnvoll, sondern auch wirtschaftlich attraktiv sind. Durch erprobte Technologien und optimierte Prozesse maximieren wir Energieerträge und sichern langfristige Investitionswerte.',
    'intl.exp.a3': '<span class="be">be</span> reliable – Vertrauen durch Qualität und Zuverlässigkeit',
    'intl.exp.a3.alt': 'Zwei bejulo-Mitarbeitende in Arbeitskleidung prüfen Solarmodule',
    'intl.exp.a3.body': 'Wir stehen für transparente Kommunikation, höchste Sicherheitsstandards und eine partnerschaftliche Zusammenarbeit. Unsere Kunden – von Investoren über Energieversorger bis hin zu Industrieunternehmen – vertrauen auf unsere Kompetenz und unsere Fähigkeit, komplexe Projekte erfolgreich zu realisieren.',
    'intl.exp.tl.more': '… <strong>und viele weitere</strong>…',
    'intl.exp.tl.note': '22 Projekte termingerecht und im Einklang mit den lokalen Vorschriften ans Netz gebracht – in sechs Ländern außerhalb Deutschlands.',
    'intl.exp.tl.capacity': 'mehr als 250 MWp installierte Leistung',
    'intl.exp.tl.caption': 'bejulo-Projektzeitleiste, 2014 bis 2026',

    /* --- international services --- */
    'intl.svc.a1': '<span class="be">be</span> holistic – ihr One-Stop-Shop für PV, BESS und Revamping',
    'intl.svc.a1.alt': 'Luftaufnahme von Modulreihen, durchzogen von einem Wartungsweg',
    'intl.svc.a1.body': 'Als One-Stop-Shop übernehmen wir die vollständige Verantwortung: von der ersten Planung über die Umsetzung bis zur langfristigen Betriebsführung. Unser Anspruch ist klar: Wir nehmen Ihnen die Komplexität ab, minimieren Risiken und liefern leistungsstarke, wirtschaftlich optimierte Energielösungen – zuverlässig und weltweit.',
    'intl.svc.a1.listtitle': 'Unser Leistungsspektrum umfasst:',
    'intl.svc.a1.li1': 'EPC (Engineering, Procurement, Construction): technisches Design und schlüsselfertige Umsetzung Ihrer Anlage',
    'intl.svc.a1.li2': 'BESS-Integration: erprobte, maßgeschneiderte Speicherlösungen für maximale Flexibilität und Erträge',
    'intl.svc.a1.li3': 'Revamping: Modernisierung und Leistungssteigerung bestehender PV-Anlagen',
    'intl.svc.a1.li4': 'Betriebsführung (O&amp;M): technische Betriebsführung für langfristige Performance',
    'intl.svc.a2': '<span class="be">be</span> supportive – Komplexität reduzieren, Erträge maximieren',
    'intl.svc.a2.alt': 'Solarpark unter einem dramatischen Wolkenhimmel',
    'intl.svc.a2.body': 'Energieprojekte werden zunehmend anspruchsvoller – regulatorisch, technisch und wirtschaftlich. Genau hier setzen wir an: Durch unsere integrierte Herangehensweise reduzieren wir Schnittstellen, vermeiden Reibungsverluste und schaffen maximale Transparenz.',
    'intl.svc.a2.listtitle': 'Das Ergebnis:',
    'intl.svc.a2.li1': 'höhere Planungssicherheit',
    'intl.svc.a2.li2': 'optimierte Projektlaufzeiten',
    'intl.svc.a2.li3': 'maximierte Renditen',

    /* --- contact --- */
    'contact.company': '<strong><span class="be">be</span>julo GmbH</strong>',
    'contact.street': 'Dekan-Laist-Straße 15a',
    'contact.city': '55129 Mainz',
    'contact.country': 'Deutschland',
    'contact.tel.label': 'Tel.:',
    'contact.tel': '+49 6131 2151-400',
    'contact.email.label': 'E-Mail:',
    'contact.email': 'info@bejulo.de',
    'contact.email.intl': 'international@bejulo.de',
    'contact.follow': 'Folgen Sie uns auf LinkedIn',
    'contact.linkedin.alt': 'bejulo auf LinkedIn',
    'contact.photo.alt': 'Der Hauptsitz von bejulo in Mainz',
    'contact.pending': 'Die Inhalte der internationalen Kontaktseite sind noch mit bejulo abzustimmen.',

    /* --- projects --- */
    'projects.hero.alt': 'Reihen von Solarmodulen bis zum Horizont',
    'projects.h2': 'Unsere Projekte – unsere Visitenkarte',
    'projects.lede': '<span class="be">be</span><span class="be-lead"> international.</span> Wir sind international tätig – und darauf sind wir stolz: bejulo-Projekte sind mittlerweile auf drei Kontinenten vertreten. Seit unserer Gründung haben wir mehr als 65 Photovoltaikprojekte mit einer Gesamtleistung von rund 700 Megawattpeak erfolgreich umgesetzt. Weitere Projekte befinden sich derzeit im Bau, zusätzliche Vorhaben sind bereits in der Planung.',
    'projects.map.label': 'Karte der bejulo-Projektstandorte weltweit',
    'projects.map.insetLabel': 'Detailkarte der bejulo-Projektstandorte in Europa',
    'projects.map.hint': 'Marker ansteuern für Projektdetails',
    'projects.map.note': 'Die orangefarbenen Marker zeigen eine Auswahl unserer erfolgreich realisierten Projekte in den verschiedenen Ländern.',
    'projects.customers.h2': 'Zufriedene Kunden sind unser größter Erfolg',
    'projects.customers.body': '<span class="be">be</span><span class="be-lead"> happy.</span> Unsere Kunden stammen aus den unterschiedlichsten Branchen und vertrauen zum Teil bereits seit vielen Jahren auf unsere Leistungsfähigkeit und Wirtschaftlichkeit. Dabei schätzen sie uns als zuverlässigen und kompetenten Komplettdienstleister, der Projekte ganzheitlich und effizient umsetzt. Qualität, Transparenz und Fairness bilden die Grundlage für unseren nachhaltigen gemeinsamen Erfolg.',
    'project.back': 'Zurück zu allen Projekten',

    /* --- Projekt-Detailseiten (siehe EN-Block für die Normalisierungen) --- */
    'proj.hero.alt': 'Reihen von Solarmodulen bis zum Horizont',
    'proj.specs.label': 'Projektdaten',

    /* Deutschland */
    'proj.germany.h1': 'Deutschland',
    'proj.germany.stats': 'Mehr als 45 Anlagen installiert und in Betrieb genommen mit einer Gesamtkapazität von mehr als 455 MWp.',
    'proj.germany.stats2': 'Weitere Anlagen aktuell im Bau, in der Entwicklung und in der Angebotsphase.',
    'proj.germany.intro': 'Erfolgreich am Netz: Drei unserer größten Referenzen…',
    'proj.germany.soil': 'Herausfordernde Bodenverhältnisse',

    'proj.kahsel.title': 'Kahsel Süd, Brandenburg',
    'proj.kahsel.body': 'Mit der Inbetriebnahme dieses Projekts hat bejulo einen wichtigen Meilenstein erreicht: die Planung, Errichtung und Inbetriebnahme unseres ersten PV-Parks mit Batteriespeicher.',
    'proj.kahsel.specs': '<dt>Installierte Leistung PV-Park:</dt><dd>38,4 MWp</dd><dt>Installierte Kapazität BESS:</dt><dd>70 MWh</dd><dt>Realisierung:</dt><dd>Feb – Jun 2026</dd><dt>Inbetriebnahme:</dt><dd>Aug 2026</dd>',
    'proj.kahsel.alt': 'Luftaufnahme der Batteriespeicher-Container neben dem Solarpark Kahsel Süd',

    'proj.merbitz.title': 'Merbitz, Sachsen-Anhalt',
    'proj.merbitz.body': 'Ein 71,5 MWp großer PV-Park, den wir geplant, errichtet und in Betrieb genommen haben. Unterquerung der Autobahn und Bahntrasse: Realisiert durch Spülbohrung.',
    'proj.merbitz.specs': '<dt>Anlagenleistung:</dt><dd>71,5 MWp</dd><dt>Realisierung:</dt><dd>Okt 2025 – März 2026</dd><dt>Inbetriebnahme:</dt><dd>Apr 2026</dd>',
    'proj.merbitz.alt': 'Luftaufnahme des Solarparks Merbitz zwischen Feldern und Ortsrand',

    'proj.gerbstedt.title': 'Gerbstedt, Sachsen-Anhalt',
    'proj.gerbstedt.body': 'Ein 53 MWp großer PV-Park, geplant und auf teilweise sehr ungleichmäßigem Untergrund errichtet.',
    'proj.gerbstedt.specs': '<dt>Anlagenleistung:</dt><dd>52,9 MWp</dd><dt>Realisierung:</dt><dd>März 2026 – Nov 2026</dd>',
    'proj.gerbstedt.alt': 'Luftaufnahme des Solarparks Gerbstedt in offener Feldflur, am Horizont Windräder',

    'proj.sennewitz.title': 'Sennewitz Petersberg und Sennewitz 2, Sachsen-Anhalt',
    'proj.sennewitz.body': 'Beide Projekte wurden auf einer ehemaligen Aschedeponie errichtet.',
    'proj.sennewitz.specs': '<dt>Anlagenleistung beider Projekte:</dt><dd>11,7 MWp</dd><dt>Realisierung beider Projekte:</dt><dd>Feb 2019 – Apr 2019 und<br>Jan 2020 – März 2020</dd>',
    'proj.sennewitz.alt': 'Luftaufnahme der beiden Solarparks Sennewitz an einer Bahntrasse',

    /* Ungarn */
    'proj.hungary.h1': 'Ungarn',
    'proj.hungary.stats': '1 Anlage installiert und in Betrieb genommen mit einer Gesamtkapazität von 23 MWp.',

    'proj.bukkabrany.title': 'Bükkabrany',
    'proj.bukkabrany.body': 'Ein 23 MWp großer PV-Park, den wir auf einem ehemaligen Kohletagebau geplant und errichtet haben.',
    'proj.bukkabrany.specs': '<dt>Anlagenleistung:</dt><dd>22,7 MWp</dd><dt>Realisierung:</dt><dd>Sep 2018 – Feb 2019</dd>',
    'proj.bukkabrany.alt': 'Luftaufnahme des Solarparks Bükkabrany auf einem ehemaligen Kohletagebau',

    /* Irland */
    'proj.ireland.h1': 'Irland',
    'proj.ireland.stats': '3 Anlagen installiert und in Betrieb genommen mit einer Gesamtkapazität von mehr als 25 MWp.',
    'proj.ireland.stats2': 'Weitere Anlagen aktuell im Bau und in der Angebotsphase.',

    'proj.lehinch.title': 'Lehinch',
    'proj.lehinch.body': 'Ein 6,3 MWp großer PV-Park, geplant und auf sehr ungleichmäßigem und inhomogenem Untergrund in den Wintermonaten errichtet; teilweise mit großflächigen Wasseransammlungen nach Regenfall',
    'proj.lehinch.specs': '<dt>Anlagenleistung:</dt><dd>6,3 MWp</dd><dt>Realisierung:</dt><dd>Sep 2023 – Jun 2024</dd>',
    'proj.lehinch.alt': 'Montage der Unterkonstruktion auf nassem Untergrund in Lehinch',

    'proj.friarspark.title': 'Friarspark',
    'proj.friarspark.specs': '<dt>Anlagenleistung:</dt><dd>6,5 MWp</dd><dt>Realisierung:</dt><dd>Jul 2023 – Jun 2024</dd>',
    'proj.friarspark.alt': 'Grasweg zwischen den Modulreihen in Friarspark, dahinter eine Eiche',

    'proj.horsepasture.title': 'Horsepasture',
    'proj.horsepasture.body': 'Ein 12,7 MWp großer PV-Park, errichtet auf inhomogenem Boden; Gründung der Pfosten mittels Vorbohrens und Anbringen von Querpfosten („root posts“). Aufgrund archäologischer Funde auf dem Baufeld, Unterbrechung der Arbeiten von ca. 1 Jahr.',
    'proj.horsepasture.specs': '<dt>Anlagenleistung:</dt><dd>12,7 MWp</dd><dt>Realisierung:</dt><dd>Jul 2023 – März 2025</dd>',
    'proj.horsepasture.alt': 'Modulreihen in Horsepasture unter einem Regenbogen nach dem Regen',

    'proj.ballinaclough.title': 'Ballinaclough',
    'proj.ballinaclough.specs': '<dt>Anlagenleistung:</dt><dd>15,5 MWp</dd><dt>Realisierung:</dt><dd>Im Bau (Baustart Jul 2026)</dd>',

    /* Niederlande */
    'proj.netherlands.h1': 'Niederlande',
    'proj.netherlands.stats': '6 Anlagen installiert und in Betrieb genommen mit einer Gesamtkapazität von mehr als 135 MWp.',

    'proj.almelo.title': 'Almelo',
    'proj.almelo.specs': '<dt>Anlagenleistung:</dt><dd>39,3 MWp</dd><dt>Realisierung:</dt><dd>Jun 2019 – Nov 2019</dd>',
    'proj.almelo.alt': 'Luftaufnahme des Solarparks Almelo am Rand der Feldflur',

    'proj.hall.title': 'Hall',
    'proj.hall.specs': '<dt>Anlagenleistung:</dt><dd>36,1 MWp</dd><dt>Realisierung:</dt><dd>Jul 2022 – Apr 2023</dd>',
    'proj.hall.alt': 'Blick von einer hölzernen Aussichtsplattform über den Solarpark Hall',

    'proj.heerenveen.title': 'Heerenveen',
    'proj.heerenveen.specs': '<dt>Anlagenleistung:</dt><dd>7,3 MWp</dd><dt>Realisierung:</dt><dd>Jun 2020 – Sep 2020</dd>',
    'proj.heerenveen.alt': 'Der Solarpark Heerenveen hinter einem begrünten Feldsaum',

    'proj.stadskanaal.title': 'Stadskanaal',
    'proj.stadskanaal.specs': '<dt>Anlagenleistung:</dt><dd>13,7 MWp</dd><dt>Realisierung:</dt><dd>Okt 2017 – Feb 2018</dd>',
    'proj.stadskanaal.alt': 'Modulreihen in Stadskanaal, die zum Horizont zusammenlaufen',

    'proj.mercurius.title': 'Mercurius',
    'proj.mercurius.specs': '<dt>Anlagenleistung:</dt><dd>4,4 MWp</dd><dt>Realisierung:</dt><dd>Aug 2018 – Nov 2018</dd>',
    'proj.mercurius.alt': 'Luftaufnahme der Unterkonstruktion von Mercurius im Bau auf einem Gewerbegebiet',

    /* Großbritannien */
    'proj.uk.h1': 'Großbritannien',
    'proj.uk.stats': '5 Anlagen installiert und in Betrieb genommen mit einer Gesamtkapazität von mehr als 50 MWp.',

    'proj.odellglebe.title': 'Odell und Glebe',
    'proj.odellglebe.specs': '<dt>Anlagenleistung beider Projekte:</dt><dd>34,3 MWp</dd><dt>Realisierung beider Projekte:</dt><dd>Nov/Dez 2014 – März 2015</dd>',
    'proj.odellglebe.alt1': 'Luftaufnahme des Solarparks Odell über abgeernteten Feldern',
    'proj.odellglebe.alt2': 'Luftaufnahme des Solarparks Glebe in einer Feldlandschaft',

    'proj.caswell.title': 'Caswell',
    'proj.caswell.specs': '<dt>Anlagenleistung:</dt><dd>5,9 MWp</dd><dt>Realisierung:</dt><dd>Jan 2016 – März 2016</dd>',
    'proj.caswell.alt': 'Luftaufnahme des von Hecken gesäumten Solarparks Caswell',

    /* Iran */
    'proj.iran.h1': 'Iran',
    'proj.iran.stats': '3 Anlagen installiert und in Betrieb genommen mit einer Gesamtkapazität von 22 MWp.',

    'proj.ehyaei.title': 'Ehyaei und Eslamieh',
    'proj.ehyaei.specs': '<dt>Anlagenleistung beider Projekte:</dt><dd>13,9 MWp</dd><dt>Realisierung beider Projekte:</dt><dd>Sep 2016 – Jan 2017</dd>',
    'proj.ehyaei.alt1': 'Luftaufnahme des Solarparks Ehyaei in einer Trockenebene, am Horizont Berge',
    'proj.ehyaei.alt2': 'Luftaufnahme der Modulfelder von Eslamieh auf offenem Wüstenboden',

    'proj.vian.title': 'Vian',
    'proj.vian.specs': '<dt>Anlagenleistung:</dt><dd>7,9 MWp</dd><dt>Realisierung:</dt><dd>Mai 2017 – Jul 2017</dd>',
    'proj.vian.alt': 'Die eingezäunte Solaranlage Vian mit ihrer Wechselrichterstation',

    /* Südafrika — bejulo hat Länderzahlen, aber keine Projekteinträge geliefert. */
    'proj.southafrica.h1': 'Südafrika',
    'proj.southafrica.stats': '2 Anlagen installiert und in Betrieb genommen mit einer Gesamtkapazität von 443 kWp.',
    'proj.southafrica.pending': 'Projektdetails zu Südafrika folgen.',

    /* --- about --- */
    'about.hero.alt': 'Das bejulo-Team gemeinsam im Freien',
    'about.h2': 'Kompetenz, die Energie bewegt – unser Team',
    'about.body1': '<span class="be">be</span><span class="be-lead"> passionate. be with us.</span>',
    'about.body2': 'Seit 2012 steht bejulo für nachhaltige Energielösungen, fundierte PV-Expertise und echte Leidenschaft für das, was wir tun. Verantwortung, Verlässlichkeit, Qualitätsanspruch sowie Teamgeist sind die Werte, die uns verbinden und unser tägliches Handeln prägen.',
    'about.body3': 'Mit Energie, Begeisterung und internationaler Erfahrung arbeiten wir daran, gemeinsam etwas zu bewegen. Dabei begleiten wir unsere Kunden mit persönlichem Engagement, fachlicher Kompetenz und einem klaren Blick für nachhaltigen, langfristigen Erfolg.',
    'about.body4': 'Was uns besonders wichtig ist? Eine partnerschaftliche Zusammenarbeit auf Augenhöhe. Fairness, Respekt und Transparenz bilden die Grundlage unseres Handelns. Denn wir verstehen unsere Kunden nicht nur als Auftraggeber, sondern als langfristige Partner.',
    'about.body5': 'Mit bejulo entscheiden Sie sich für einen Partner, auf den Sie sich verlassen können.',

    /* --- careers --- */
    'careers.h1': 'Bei uns können Sie Karriere machen!',
    'careers.lede': '<span class="be">be</span><span class="be-lead"> part of the team!</span><br>Wenn Sie Energie leben und lieben, sind Sie bei uns richtig!',
    'careers.callout': 'Wir sind gespannt auf Sie. Senden Sie Ihre Bewerbung an: <strong>bewerbung@bejulo.de</strong>',
    'careers.vacancies': 'Offene Stellen:',
    'careers.job1': 'Projektleiter:in (m/w/d)',
    'careers.job2': 'Ingenieur:in (m/w/d)',
    'careers.job.pending': 'Die vollständige Stellenbeschreibung wird hier veröffentlicht. Initiativbewerbungen senden Sie gerne an bewerbung@bejulo.de.'
  }
};
