/* ==========================================================================
   bejulo — copy dictionary (EN / DE)

   English is transcribed verbatim from the Figma file (channel fi7cys1x).

   ---------------------------------------------------------------------------
   GERMAN IS A DRAFT AND NEEDS bejulo's SIGN-OFF.
   The Figma file supplies German only for the navigation labels, the
   "Kontaktieren Sie uns!" button and the two job titles. Every other German
   string below was written for this build so the language switcher has real
   content to show. Please have it reviewed before go-live.
   ---------------------------------------------------------------------------

   The "be <adjective>." lead-ins are deliberately left in English in both
   languages: they are a brand device tied to the bejulo name, not body copy.

   Values may contain inline HTML (the orange "be" span, <br>, <strong>, <ul>)
   and are rendered with data-i18n-html. All content here is first-party.

   RULE: a value containing markup or HTML entities must only ever be consumed
   with data-i18n-html. Keys read via plain data-i18n (textContent) must hold
   literal characters — write "&", not "&amp;" — or the entity shows verbatim.
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
    'nav.downloads': 'Downloads',
    'nav.search': 'Search',
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

    /* --- meta --- */
    'meta.title.home': 'bejulo — PV and BESS: Reliable. Sustainable. Profitable.',
    'meta.desc.home': 'bejulo develops, builds and operates turnkey solar PV and battery energy storage projects worldwide — reliable, sustainable and profitable.',
    'meta.title.services': 'Our Services — End-to-end PV and BESS solutions | bejulo',
    'meta.desc.services': 'Project development, construction, operations and maintenance and IPP energy marketing for solar PV and battery storage.',
    'meta.title.international': 'International — Operating globally, taking responsibility | bejulo',
    'meta.desc.international': 'bejulo delivers turnkey solar PV, battery energy storage and revamping projects around the world.',
    'meta.title.international-experience': 'International experience — Local expertise | bejulo',
    'meta.desc.international-experience': 'More than a decade of grid-connected PV across three continents, delivered in compliance with local regulations.',
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

    /* --- shared buttons --- */
    'btn.contact': 'Get in touch!',
    'btn.contactus': 'Contact us',
    'btn.services': 'Explore our services',
    'btn.projects': 'Explore our projects',
    'btn.experience': 'Discover our experience',
    'btn.international': 'Explore our international competence',
    'btn.intlprojects': 'Explore our international projects',

    /* --- home --- */
    'home.hero.alt': 'Aerial view of a large bejulo solar photovoltaic plant',
    'home.play': 'Play the bejulo company video',
    'home.h1': 'PV and BESS&nbsp;–<br>Reliable. Sustainable. Profitable.',
    'home.lede': '<span class="be">be</span><span class="be-lead"> ready.</span> The future is renewable. As a trusted partner for photovoltaic and battery energy storage projects, we develop sustainable energy solutions with long-term commercial benefits. Together with landowners and investors, we create lasting value – for local businesses, communities and the environment. Ready for the future?<br>We’re here to help you make it happen.',

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
    'services.c2.sub': 'Built for success',
    'services.c2.alt': 'Battery energy storage containers installed at a solar park',
    'services.c2.body': '<span class="be">be</span><span class="be-lead"> successful.</span> As your trusted PV and BESS project partner, we draw on many years of experience in renewable energy infrastructure. We deliver tailored solutions to meet a wide range of project requirements. Every PV plant is engineered for quality, reliability and long-term performance.',
    'services.c3.title': 'Operations and maintenance',
    'services.c3.sub': 'Looking after what matters',
    'services.c3.alt': 'A bejulo technician inspecting electrical switchgear',
    'services.c3.body': '<span class="be">be</span><span class="be-lead"> responsible.</span> Our experienced team operates and maintains renewable energy assets with care, expertise and fast response times – helping to maximise availability, profitability and long-term growth for our customers.',
    'services.c4.title': 'IPP energy marketing',
    'services.c4.sub': 'Greater independence. Greater flexibility.',
    'services.c4.alt': 'Solar modules bordered by a wildflower meadow',
    'services.c4.body': '<span class="be">be</span><span class="be-lead"> independent.</span> Energy is at the heart of a sustainable future. As an independent power producer, we’re building our own portfolio of PV and BESS assets, enabling us to market electricity flexibly and feed it into the grid in line with demand. By combining renewable power generation with direct marketing, we’re helping to build a more independent, diversified and resilient energy supply.',
    'services.cta': 'Whether you’re a landowner, looking to sell project rights or seeking a trusted delivery partner, <strong>bejulo is here to help.</strong>',

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
    'contact.company': '<span class="be">be</span>julo GmbH',
    'contact.street': 'Dekan-Laist-Straße 15a',
    'contact.city': '55129 Mainz',
    'contact.country': 'Germany',
    'contact.tel.label': 'Tel.:',
    'contact.tel': '+49 6131 – 2151-400',
    'contact.email.label': 'E-Mail:',
    'contact.email': 'info@bejulo.de',
    'contact.email.intl': 'international@bejulo.de',
    'contact.follow': 'Follow us and<br>never miss an update!',
    'contact.linkedin.alt': 'bejulo on LinkedIn',
    'contact.photo.alt': 'The bejulo head office in Mainz, Germany',
    'contact.pending': 'Content for the international contact page is still to be confirmed by bejulo.',

    /* --- projects --- */
    'projects.hero.alt': 'Rows of solar modules stretching towards the horizon',
    'projects.h2': 'Our projects speak for themselves',
    'projects.lede': '<span class="be">be</span><span class="be-lead"> international.</span> We operate internationally – and we’re proud of it. Today, bejulo projects can be found across three continents. Since our company was founded, we’ve successfully completed more than 65 PV projects with a total installed capacity of around 700 MWp. Numerous additional projects are currently under construction, with further developments already in the pipeline. Wherever solar energy creates opportunities, we deliver sustainable solutions that cross borders and exceed expectations – bejulo follows the sun!',
    'projects.map.label': 'Map of bejulo project locations worldwide',
    'projects.map.hint': 'Hover a marker for project details · Ctrl + scroll to zoom',
    'projects.map.note': 'The orange markers highlight a selection of our flagship projects, showcasing the breadth of our international activities.',
    'projects.customers.h2': 'Satisfied customers are our greatest success',
    'projects.customers.body': '<span class="be">be</span><span class="be-lead"> happy.</span> We work with customers across a broad range of industries, with many placing their trust in our expertise and commercial performance for years. They choose bejulo because we combine technical expertise, commercial efficiency and a fully integrated approach to project delivery. Built on quality, transparency and fairness, our partnerships are designed to create lasting value for everyone involved.',

    /* --- about --- */
    'about.hero.alt': 'The bejulo team photographed together outdoors',
    'about.h2': 'The people behind sustainable energy',
    'about.body1': '<span class="be">be</span><span class="be-lead"> passionate. be with us.</span>',
    'about.body2': 'Since 2012, bejulo has been creating a more sustainable future through expert PV solutions and a genuine passion for renewable energy. Responsibility, reliability, quality and teamwork are the values that shape our culture and define the way we work.',
    'about.body3': 'Our people bring together technical excellence, international experience and a shared ambition to make a difference. With personal commitment, technical expertise and a long-term perspective, we help our customers achieve sustainable success.',
    'about.body4': 'What matters most to us? Building partnerships based on trust and mutual respect. We believe in working openly, fairly and respectfully. We see our customers not simply as clients, but as long-term partners.',
    'about.body5': 'When you choose bejulo, you choose a partner you can rely on.',

    /* --- careers --- */
    'careers.h1': 'Build your career with us',
    'careers.lede': '<span class="be">be</span><span class="be-lead"> part of the team!</span><br>If you share our passion for renewable energy, we’d love to have you on board!',
    'careers.callout': 'We look forward to receiving your application.<br>Please send it to: <strong>bewerbung@bejulo.de</strong>',
    'careers.vacancies': 'Vacancies:',
    'careers.job1': 'Projektleiter:in (m/w/d)',
    'careers.job2': 'Ingenieur:in (m/w/d)',
    'careers.job.pending': 'The full role description will be published here. Please send speculative applications to bewerbung@bejulo.de.'
  },

  /* =========================== DEUTSCH =========================== */
  /* DRAFT — awaiting bejulo review (see header note). */
  de: {
    /* --- chrome --- */
    'skip': 'Zum Inhalt springen',
    'nav.services': 'Unsere Leistungen',
    'nav.international': 'International',
    'nav.projects': 'Projekte',
    'nav.about': 'Über uns',
    'nav.careers': 'Karriere',
    'nav.downloads': 'Downloads',
    'nav.search': 'Suche',
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
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.cookies': 'Cookies',

    /* --- meta --- */
    'meta.title.home': 'bejulo — PV und BESS: Zuverlässig. Nachhaltig. Rentabel.',
    'meta.desc.home': 'bejulo entwickelt, baut und betreibt schlüsselfertige Photovoltaik- und Batteriespeicherprojekte weltweit — zuverlässig, nachhaltig und rentabel.',
    'meta.title.services': 'Unsere Leistungen — PV- und BESS-Lösungen aus einer Hand | bejulo',
    'meta.desc.services': 'Projektentwicklung, Bau, Betrieb und Wartung sowie IPP-Direktvermarktung für Photovoltaik und Batteriespeicher.',
    'meta.title.international': 'International — Weltweit tätig, verantwortungsvoll handeln | bejulo',
    'meta.desc.international': 'bejulo realisiert schlüsselfertige PV-, Batteriespeicher- und Revamping-Projekte weltweit.',
    'meta.title.international-experience': 'Internationale Erfahrung — Lokale Expertise | bejulo',
    'meta.desc.international-experience': 'Mehr als ein Jahrzehnt netzgekoppelte PV-Projekte auf drei Kontinenten, umgesetzt im Einklang mit den lokalen Vorschriften.',
    'meta.title.international-services': 'Leistungsspektrum — Alles für PV, BESS und Revamping aus einer Hand | bejulo',
    'meta.desc.international-services': 'EPC, BESS-Integration, Revamping und O&M unter einem Dach — wo auch immer Ihre Projekte entstehen.',
    'meta.title.international-contact': 'Internationaler Kontakt | bejulo',
    'meta.desc.international-contact': 'Nehmen Sie Kontakt zum internationalen Team von bejulo in Mainz auf.',
    'meta.title.projects': 'Projekte — Unsere Projekte sprechen für sich | bejulo',
    'meta.desc.projects': 'Mehr als 65 PV-Projekte mit rund 700 MWp installierter Leistung auf drei Kontinenten.',
    'meta.title.about': 'Über uns — Die Menschen hinter nachhaltiger Energie | bejulo',
    'meta.desc.about': 'Seit 2012 gestaltet bejulo mit fundierten PV-Lösungen eine nachhaltigere Zukunft.',
    'meta.title.careers': 'Karriere — Gestalten Sie Ihre Zukunft mit uns | bejulo',
    'meta.desc.careers': 'Werden Sie Teil des bejulo-Teams und teilen Sie unsere Begeisterung für erneuerbare Energien.',
    'meta.title.contact': 'Kontakt | bejulo',
    'meta.desc.contact': 'bejulo GmbH, Dekan-Laist-Straße 15a, 55129 Mainz, Deutschland.',

    /* --- shared buttons --- */
    'btn.contact': 'Kontaktieren Sie uns!',
    'btn.contactus': 'Kontakt aufnehmen',
    'btn.services': 'Unsere Leistungen entdecken',
    'btn.projects': 'Unsere Projekte entdecken',
    'btn.experience': 'Unsere Erfahrung entdecken',
    'btn.international': 'Unsere internationale Kompetenz entdecken',
    'btn.intlprojects': 'Unsere internationalen Projekte entdecken',

    /* --- home --- */
    'home.hero.alt': 'Luftaufnahme einer großen Photovoltaikanlage von bejulo',
    'home.play': 'bejulo-Unternehmensvideo abspielen',
    'home.h1': 'PV und BESS&nbsp;–<br>Zuverlässig. Nachhaltig. Rentabel.',
    'home.lede': '<span class="be">be</span><span class="be-lead"> ready.</span> Die Zukunft ist erneuerbar. Als verlässlicher Partner für Photovoltaik- und Batteriespeicherprojekte entwickeln wir nachhaltige Energielösungen mit langfristigem wirtschaftlichem Nutzen. Gemeinsam mit Flächeneigentümern und Investoren schaffen wir dauerhafte Werte – für die regionale Wirtschaft, die Menschen vor Ort und die Umwelt. Bereit für die Zukunft?<br>Wir helfen Ihnen, sie zu gestalten.',

    /* --- services --- */
    'services.hero.alt': 'Luftaufnahme eines bejulo-Solarparks in trockener Landschaft',
    'services.h2': 'PV- und BESS-Lösungen aus einer Hand',
    'services.c1.title': 'PV- und BESS-Projektentwicklung',
    'services.c1.sub': 'Leistung von Anfang an',
    'services.c1.alt': 'Hochspannungsmasten in der Abenddämmerung',
    'services.c1.body': '<span class="be">be</span><span class="be-lead"> strong.</span> Große Energieprojekte brauchen ein solides Fundament. Deshalb entwickeln wir PV- und BESS-Projekte, die wirtschaftlich tragfähig, umweltgerecht und auf langfristigen Erfolg ausgelegt sind. Als unabhängiges, privat finanziertes Unternehmen wählen wir jedes Projekt nach Standort, Planungssicherheit und Finanzstärke aus – für Vertrauen bei Flächeneigentümern, Kommunen und Investoren.',
    'services.c1.body2': 'Partnerschaftlich zu arbeiten bedeutet für uns: transparent, verlässlich und mit wirtschaftlichem Weitblick. Durch klare Vertragsstrukturen, frühe Einbindung aller Beteiligten und regionale Wertschöpfung entstehen vertrauensvolle Partnerschaften mit Unternehmen, Stadtwerken, Kommunen und Investoren. Unsere unabhängig finanzierten Projekte liefern stabile Renditen, dauerhafte Betriebsleistung und nachhaltige Energielösungen.',
    'services.c1.body3': '<span class="be">be</span><span class="be-lead"> in touch.</span> Wir erwerben PV- und BESS-Projektrechte in jeder Entwicklungsphase – von der frühen Projektidee bis zum baureifen Projekt. Schnelle, partnerschaftliche Entscheidungsprozesse verbinden wir mit fairen und verlässlichen Konditionen. Unsere unabhängige Finanzierung schafft wirtschaftlich robuste Energieprojekte, die die Energiewende voranbringen und langfristigen Wert, verlässliche Renditen und dauerhaften Nutzen für die Regionen schaffen.',
    'services.c2.title': 'PV- und BESS-Projektbau',
    'services.c2.sub': 'Gebaut für den Erfolg',
    'services.c2.alt': 'Batteriespeicher-Container in einem Solarpark',
    'services.c2.body': '<span class="be">be</span><span class="be-lead"> successful.</span> Als Ihr verlässlicher Partner für PV- und BESS-Projekte greifen wir auf langjährige Erfahrung in der Infrastruktur für erneuerbare Energien zurück. Wir realisieren passgenaue Lösungen für unterschiedlichste Projektanforderungen. Jede PV-Anlage ist auf Qualität, Zuverlässigkeit und dauerhafte Leistung ausgelegt.',
    'services.c3.title': 'Betrieb und Wartung',
    'services.c3.sub': 'Wir kümmern uns um das Wesentliche',
    'services.c3.alt': 'Ein bejulo-Techniker prüft eine Schaltanlage',
    'services.c3.body': '<span class="be">be</span><span class="be-lead"> responsible.</span> Unser erfahrenes Team betreibt und wartet Anlagen für erneuerbare Energien mit Sorgfalt, Fachwissen und kurzen Reaktionszeiten – für maximale Verfügbarkeit, Wirtschaftlichkeit und langfristiges Wachstum unserer Kunden.',
    'services.c4.title': 'IPP-Direktvermarktung',
    'services.c4.sub': 'Mehr Unabhängigkeit. Mehr Flexibilität.',
    'services.c4.alt': 'Solarmodule am Rand einer Blühwiese',
    'services.c4.body': '<span class="be">be</span><span class="be-lead"> independent.</span> Energie ist der Schlüssel zu einer nachhaltigen Zukunft. Als unabhängiger Stromerzeuger bauen wir ein eigenes Portfolio an PV- und BESS-Anlagen auf und vermarkten Strom flexibel und bedarfsgerecht. Indem wir erneuerbare Stromerzeugung mit Direktvermarktung verbinden, tragen wir zu einer unabhängigeren, breiter aufgestellten und krisenfesteren Energieversorgung bei.',
    'services.cta': 'Ob Sie Flächen besitzen, Projektrechte verkaufen möchten oder einen verlässlichen Umsetzungspartner suchen – <strong>bejulo ist für Sie da.</strong>',

    /* --- international (shared) --- */
    'intl.hero.alt': 'Hände halten eine leuchtende Weltkugel im Sonnenaufgang',
    'intl.headline': 'Weltweit tätig. Verantwortung tragen. Zukunft gestalten.<span>bejulo: alles für PV, BESS &amp; Revamping aus einer Hand</span>',

    /* --- international landing --- */
    'intl.p1.title': 'Von der Planung bis zu Betrieb &amp; Wartung – wir begleiten Sie in jeder Phase.',
    'intl.p1.body': '<span class="be">be</span><span class="be-lead"> committed.</span> Wir realisieren schlüsselfertige Projekte für Photovoltaik, Batteriespeicher und Revamping weltweit. Für Sie bedeutet das: höchste Zuverlässigkeit, minimale Komplexität und nachhaltige Renditen.',
    'intl.p2.title': 'Ein Partner für jede Projektphase.',
    'intl.p2.body': '<span class="be">be</span><span class="be-lead"> integrated.</span> Sie haben einen festen Partner, der alle Aspekte Ihres Projekts koordiniert. Wir steuern sämtliche Prozesse, Schnittstellen und Projektpartner, damit Sie sich auf das Wesentliche konzentrieren können – Ihre Investition.',
    'intl.p3.title': 'Ihr Projekt. Unsere Verantwortung.',
    'intl.p3.body': '<span class="be">be</span><span class="be-lead"> responsible.</span> Wir sind überzeugt: Die besten Projekte entstehen aus langfristigen Partnerschaften. Deshalb bleiben wir auch nach der Fertigstellung an Ihrer Seite, damit Ihre Investition dauerhaft technische Leistung, wirtschaftlichen Wert und betriebliche Zuverlässigkeit liefert.',

    /* --- international experience --- */
    'intl.exp.a1': '<span class="be">be</span> expert – Internationale Erfahrung. Lokale Expertise.',
    'intl.exp.a1.body': 'Durch unser internationales Projektportfolio verfügen wir über wertvolle Erfahrung in unterschiedlichsten regulatorischen, klimatischen und technischen Rahmenbedingungen. Durch enge Partnerschaften vor Ort stellen wir sicher, dass jedes Projekt effizient und nachhaltig umgesetzt wird.',
    'intl.exp.a2': '<span class="be">be</span> sustainable – Die Energiewende voranbringen',
    'intl.exp.a2.alt': 'Blühwiese vor einem Solarpark von bejulo',
    'intl.exp.a2.body': 'Wir treiben den Umstieg auf erneuerbare Energien voran. Wir entwickeln PV-Anlagen, die ökologische Verantwortung mit starker Wirtschaftlichkeit verbinden. Mit bewährter Technik und effizienten Prozessen maximieren wir die Energieerzeugung und sichern gleichzeitig langfristige Investitionsrenditen.',
    'intl.exp.a3': '<span class="be">be</span> reliable – Qualität, auf die Sie sich verlassen können',
    'intl.exp.a3.alt': 'Zwei bejulo-Mitarbeitende in Arbeitskleidung prüfen Solarmodule',
    'intl.exp.a3.body': 'Offene Kommunikation, kompromisslose Sicherheitsstandards und enge Zusammenarbeit prägen alles, was wir tun. Ob mit Investoren, Energieversorgern oder Industriekunden – wir bauen dauerhafte Partnerschaften auf Basis von Fachwissen, Verlässlichkeit und konsequenter Projektumsetzung.',
    'intl.exp.tl.more': '… <strong>und viele weitere</strong>…',
    'intl.exp.tl.note': '22 Projekte termingerecht und im Einklang mit den lokalen Vorschriften ans Netz gebracht – in sechs Ländern außerhalb Deutschlands.',
    'intl.exp.tl.capacity': 'mehr als 250 MWp installierte Leistung',
    'intl.exp.tl.caption': 'bejulo-Projektzeitleiste, 2014 bis 2026',

    /* --- international services --- */
    'intl.svc.a1': '<span class="be">be</span> holistic – Alles für PV, BESS und Revamping aus einer Hand',
    'intl.svc.a1.alt': 'Luftaufnahme von Modulreihen, durchzogen von einem Wartungsweg',
    'intl.svc.a1.body': 'Unser Leistungsspektrum deckt jede Phase Ihres Projekts ab – von der ersten Planung und Auslegung bis zur Umsetzung und zum langfristigen Betriebsmanagement. Weil alles unter einem Dach liegt, reduzieren wir Komplexität, minimieren Risiken und liefern leistungsstarke Energielösungen, die auf langfristigen wirtschaftlichen Erfolg ausgelegt sind – wo auch immer Ihre Projekte entstehen.',
    'intl.svc.a1.listtitle': 'Unsere Leistungen umfassen:',
    'intl.svc.a1.li1': 'Engineering, Procurement and Construction (EPC): technische Planung und schlüsselfertige Umsetzung Ihrer Anlage',
    'intl.svc.a1.li2': 'BESS-Integration: bewährte, passgenaue Batteriespeicherlösungen für maximale Flexibilität und höhere Renditen',
    'intl.svc.a1.li3': 'Revamping: Modernisierung und Leistungssteigerung bestehender PV-Anlagen',
    'intl.svc.a1.li4': 'Betrieb und Wartung (O&amp;M): technisches Asset-Management für dauerhafte Leistung',
    'intl.svc.a2': '<span class="be">be</span> supportive – Komplexität reduzieren. Renditen maximieren.',
    'intl.svc.a2.alt': 'Solarpark unter einem dramatischen Wolkenhimmel',
    'intl.svc.a2.body': 'Energieprojekte werden regulatorisch, technisch und wirtschaftlich immer anspruchsvoller. Wir vereinfachen diese Komplexität mit einem integrierten Ansatz, der die Zusammenarbeit strafft, Reibungsverluste reduziert und volle Transparenz über den gesamten Projektlebenszyklus schafft.',
    'intl.svc.a2.listtitle': 'Ihre Vorteile:',
    'intl.svc.a2.li1': 'Höhere Planungssicherheit',
    'intl.svc.a2.li2': 'Optimierte Projektlaufzeiten',
    'intl.svc.a2.li3': 'Höhere Energieerträge und stärkere Renditen',

    /* --- contact --- */
    'contact.company': '<span class="be">be</span>julo GmbH',
    'contact.street': 'Dekan-Laist-Straße 15a',
    'contact.city': '55129 Mainz',
    'contact.country': 'Deutschland',
    'contact.tel.label': 'Tel.:',
    'contact.tel': '+49 6131 – 2151-400',
    'contact.email.label': 'E-Mail:',
    'contact.email': 'info@bejulo.de',
    'contact.email.intl': 'international@bejulo.de',
    'contact.follow': 'Folgen Sie uns und<br>bleiben Sie auf dem Laufenden!',
    'contact.linkedin.alt': 'bejulo auf LinkedIn',
    'contact.photo.alt': 'Der Hauptsitz von bejulo in Mainz',
    'contact.pending': 'Die Inhalte der internationalen Kontaktseite sind noch mit bejulo abzustimmen.',

    /* --- projects --- */
    'projects.hero.alt': 'Reihen von Solarmodulen bis zum Horizont',
    'projects.h2': 'Unsere Projekte sprechen für sich',
    'projects.lede': '<span class="be">be</span><span class="be-lead"> international.</span> Wir arbeiten international – und sind stolz darauf. Heute finden sich bejulo-Projekte auf drei Kontinenten. Seit unserer Gründung haben wir mehr als 65 PV-Projekte mit einer installierten Gesamtleistung von rund 700 MWp erfolgreich realisiert. Zahlreiche weitere Projekte befinden sich im Bau, weitere Entwicklungen sind in Vorbereitung. Wo Solarenergie Chancen schafft, liefern wir nachhaltige Lösungen über Grenzen hinweg – bejulo folgt der Sonne!',
    'projects.map.label': 'Karte der bejulo-Projektstandorte weltweit',
    'projects.map.hint': 'Marker ansteuern für Projektdetails · Strg + Scrollen zum Zoomen',
    'projects.map.note': 'Die orangen Marker zeigen eine Auswahl unserer Leuchtturmprojekte und damit die Bandbreite unserer internationalen Tätigkeit.',
    'projects.customers.h2': 'Zufriedene Kunden sind unser größter Erfolg',
    'projects.customers.body': '<span class="be">be</span><span class="be-lead"> happy.</span> Wir arbeiten mit Kunden aus den unterschiedlichsten Branchen – viele vertrauen seit Jahren auf unsere Expertise und unsere wirtschaftliche Leistungsfähigkeit. Sie entscheiden sich für bejulo, weil wir technisches Know-how, wirtschaftliche Effizienz und einen vollständig integrierten Umsetzungsansatz verbinden. Aufgebaut auf Qualität, Transparenz und Fairness schaffen unsere Partnerschaften dauerhaften Wert für alle Beteiligten.',

    /* --- about --- */
    'about.hero.alt': 'Das bejulo-Team gemeinsam im Freien',
    'about.h2': 'Die Menschen hinter nachhaltiger Energie',
    'about.body1': '<span class="be">be</span><span class="be-lead"> passionate. be with us.</span>',
    'about.body2': 'Seit 2012 gestaltet bejulo mit fundierten PV-Lösungen und echter Begeisterung für erneuerbare Energien eine nachhaltigere Zukunft. Verantwortung, Verlässlichkeit, Qualität und Teamgeist sind die Werte, die unsere Kultur und unsere Arbeitsweise prägen.',
    'about.body3': 'Unsere Mitarbeitenden verbinden technische Exzellenz, internationale Erfahrung und den gemeinsamen Anspruch, etwas zu bewegen. Mit persönlichem Engagement, technischem Sachverstand und langfristiger Perspektive helfen wir unseren Kunden zu nachhaltigem Erfolg.',
    'about.body4': 'Was uns am wichtigsten ist? Partnerschaften auf Basis von Vertrauen und gegenseitigem Respekt. Wir arbeiten offen, fair und respektvoll. Unsere Kunden sind für uns nicht einfach Auftraggeber, sondern langfristige Partner.',
    'about.body5': 'Wer sich für bejulo entscheidet, entscheidet sich für einen Partner, auf den man sich verlassen kann.',

    /* --- careers --- */
    'careers.h1': 'Gestalten Sie Ihre Zukunft mit uns',
    'careers.lede': '<span class="be">be</span><span class="be-lead"> part of the team!</span><br>Wenn Sie unsere Begeisterung für erneuerbare Energien teilen, freuen wir uns auf Sie!',
    'careers.callout': 'Wir freuen uns auf Ihre Bewerbung.<br>Bitte senden Sie sie an: <strong>bewerbung@bejulo.de</strong>',
    'careers.vacancies': 'Offene Stellen:',
    'careers.job1': 'Projektleiter:in (m/w/d)',
    'careers.job2': 'Ingenieur:in (m/w/d)',
    'careers.job.pending': 'Die vollständige Stellenbeschreibung wird hier veröffentlicht. Initiativbewerbungen senden Sie gerne an bewerbung@bejulo.de.'
  }
};
