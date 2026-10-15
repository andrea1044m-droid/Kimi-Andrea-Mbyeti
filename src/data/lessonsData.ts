import { SubatomicParticleInfo } from '../types/chemistry';

export const SUBATOMIC_PARTICLES: SubatomicParticleInfo[] = [
  {
    name: 'Protoni',
    symbol: 'p⁺',
    charge: 'Pozitive (+1)',
    chargeValue: 1,
    massRel: '1 njësi (u)',
    location: 'Në bërthamë',
    color: 'text-red-600',
    borderClass: 'border-red-200 bg-red-50',
    bgClass: 'bg-red-500',
    descriptionSq: 'Përcakton identitetin e elementit kimik (numrin atomik Z). Nëse ndryshon numri i protoneve, ndryshon vetë elementi!',
  },
  {
    name: 'Neutroni',
    symbol: 'n⁰',
    charge: 'Pa ngarkesë (0)',
    chargeValue: 0,
    massRel: '1 njësi (u)',
    location: 'Në bërthamë',
    color: 'text-slate-600',
    borderClass: 'border-slate-200 bg-slate-50',
    bgClass: 'bg-slate-400',
    descriptionSq: 'Mban bërthamën të bashkuar përmes forcës së fortë bërthamore, duke parandaluar shtyrjen reciproke të protoneve pozitive.',
  },
  {
    name: 'Elektroni',
    symbol: 'e⁻',
    charge: 'Negative (−1)',
    chargeValue: -1,
    massRel: 'Pothuajse 0 (1/1836 u)',
    location: 'Rreth bërthamës (në re elektronike)',
    color: 'text-blue-600',
    borderClass: 'border-blue-200 bg-blue-50',
    bgClass: 'bg-blue-500',
    descriptionSq: 'Grimcë shumë e lehtë që lëviz me shpejtësi të madhe rreth bërthamës në nivele të caktuara energjetike (shtresa). Përcakton vetitë kimike dhe lidhjet.',
  },
];

export interface LessonContent {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  readTime: string;
  summary: string;
  sections: {
    title: string;
    content: string;
    bulletPoints?: string[];
    callout?: {
      type: 'info' | 'formula' | 'warning' | 'tip';
      title: string;
      text: string;
    };
  }[];
}

export const LESSONS: LessonContent[] = [
  {
    id: 'mesimi-1',
    number: 1,
    title: 'Struktura e atomit',
    subtitle: 'Nga se përbëhet materia dhe çfarë fshihet brenda një atomi?',
    readTime: '6 min lexim',
    summary: 'Atomi është njësia bazë ndërtimore e gjithë materies. Ai përbëhet nga bërthama qendrore shumë e dendur dhe reja elektronike.',
    sections: [
      {
        title: 'Çfarë është atomi?',
        content: 'Fjala "atom" vjen nga greqishtja e lashtë "atomos", që do të thotë "i pandashëm". Megjithatë, sot shkenca di me siguri se atomi NUK është i pandashëm — ai përbëhet nga grimca akoma më të vogla, të quajtura grimca nënatomike.',
        bulletPoints: [
          'Çdo objekt në univers, ajri, uji, shkëmbinjtë dhe trupi ynë, përbëhet nga atome.',
          'Në qendër të atomit ndodhet një bërthamë jashtëzakonisht e vogël por që përmban pothuajse të gjithë masën e atomit.',
          'Rreth bërthamës shtrihet një hapësirë kryesisht boshe ku lëvizin me shpejtësi elektronet.',
        ],
        callout: {
          type: 'info',
          title: 'Krahasim mbresëlënës',
          text: 'Nëse bërthama e atomit do të kishte madhësinë e një kokrre bizelja në mes të një fushe futbolli, i gjithë atomi do të zinte madhësinë e të gjithë stadiumit! Pjesa më e madhe e atomit është hapësirë boshe.',
        },
      },
      {
        title: 'Dy pjesët kryesore të atomit',
        content: 'Struktura e atomit ndahet lehtësisht në dy rajone thelbësore:',
        bulletPoints: [
          '1. Bërthama e atomit: Ndodhet në qendër. Është shumë e dendur dhe ka ngarkesë pozitive. Në të gjenden protonet dhe neutronet (të quajtura së bashku nukleone).',
          '2. Reja elektronike (mbështjella): Hapësira rreth bërthamës ku lëvizin elektronet me ngarkesë negative në shtresa të caktuara.',
        ],
      },
      {
        title: 'Grimcat nënatomike dhe vetitë e tyre',
        content: 'Të tre grimcat thelbësore që duhet të mbani mend për klasën e 9-të janë protoni, neutroni dhe elektroni.',
        callout: {
          type: 'tip',
          title: 'Pse atomi është elektro-neutral?',
          text: 'Në gjendje normale, një atom i lirë ka numër të barabartë protonesh pozitive (+) dhe elektronesh negative (−). Kështu, ngarkesat barazohen plotësisht dhe atomi ka ngarkesë të përgjithshme ZERO (është neutral).',
        },
      },
    ],
  },
  {
    id: 'mesimi-2',
    number: 2,
    title: 'Të mësojmë më shumë për atomet',
    subtitle: 'Numri atomik (Z), numri i masës (A), llogaritja e grimcave dhe çfarë janë izotopet.',
    readTime: '8 min lexim',
    summary: 'Çdo element kimik ka kartën e tij të identitetit: numrin atomik Z dhe numrin e masës A. Mëso formulat thelbësore dhe misterin e izotopeve.',
    sections: [
      {
        title: 'Numri atomik (Z) – Karta e identitetit të elementit',
        content: 'Numri atomik shënohet me shkronjën Z. Ai tregon numrin e saktë të protoneve që ndodhen në bërthamën e një atomi. Ky numër është unik për çdo element kimik.',
        bulletPoints: [
          'Të gjitha atomet e Hidrogjenit kanë 1 proton (Z = 1).',
          'Të gjitha atomet e Karbonit kanë 6 protone (Z = 6).',
          'Nëse një atom ka 8 protone, ai është patjetër Oksigjen (Z = 8).',
        ],
        callout: {
          type: 'formula',
          title: 'Formula 1: Numri atomik',
          text: 'Numri atomik (Z) = Numri i protoneve (p⁺)',
        },
      },
      {
        title: 'Numri i masës (A) dhe llogaritja e neutroneve',
        content: 'Meqenëse masa e elektronit është e papërfillshme (afërsisht 1/1836 e protonit), pothuajse e gjithë masa e atomit ndodhet në bërthamë. Numri i masës shënohet me A dhe është shuma e protoneve dhe neutroneve.',
        callout: {
          type: 'formula',
          title: 'Formulat themelore për provim',
          text: 'A = p⁺ + n⁰ (Numri i masës = protonet + neutronet)\nn⁰ = A − Z (Numri i neutroneve = Numri i masës − Numri atomik)\nNë një atom neutral: e⁻ = p⁺ = Z',
        },
      },
      {
        title: 'Shembuj konkretë të llogaritjes',
        content: 'Le të zbatojmë formulat për dy elementet bazë të jetës: Karbonin dhe Oksigjenin.',
        bulletPoints: [
          'Shembull 1 — Karboni (¹²₆C): Numri atomik Z = 6, Numri i masës A = 12. \n• Numri i protoneve: p⁺ = Z = 6 \n• Numri i elektroneve: e⁻ = p⁺ = 6 \n• Numri i neutroneve: n⁰ = A − Z = 12 − 6 = 6 neutrone.',
          'Shembull 2 — Oksigjeni (¹⁶₈O): Numri atomik Z = 8, Numri i masës A = 16. \n• Numri i protoneve: p⁺ = Z = 8 \n• Numri i elektroneve: e⁻ = p⁺ = 8 \n• Numri i neutroneve: n⁰ = A − Z = 16 − 8 = 8 neutrone.',
        ],
      },
      {
        title: 'Çfarë janë izotopet?',
        content: 'Izotopet janë atome të të njëjtit element kimik që kanë të njëjtin numër protonesh (të njëjtin Z), por numër të ndryshëm neutronesh (dhe rrjedhimisht numër të ndryshëm mase A).',
        bulletPoints: [
          'Kanë të njëjtat veti kimike sepse kanë të njëjtin numër elektronesh.',
          'Dallojnë vetëm në masë për shkak të numrit të neutroneve.',
          'Shembull i famshëm: Karbon-12 (6p, 6n) dhe Karbon-14 (6p, 8n). Karboni-14 përdoret nga shkencëtarët për të gjetur moshën e fosileve arkeologjike!',
          'Shembull tjetër: Hidrogjeni ka tre izotope: Proti (0n), Deuteri (1n) dhe Triti (2n).',
        ],
      },
    ],
  },
  {
    id: 'mesimi-3',
    number: 3,
    title: 'Shpërndarja e elektroneve në shtresa',
    subtitle: 'Si rregullohen elektronet në orbita dhe rregulli i thjeshtuar për klasën e 9-të.',
    readTime: '7 min lexim',
    summary: 'Elektronet nuk lëvizin kuturu rreth bërthamës, por vendosen në shtresa me nivele të caktuara energjie sipas rregullave të qarta.',
    sections: [
      {
        title: 'Shtresat elektronike (Nivelet energjetike)',
        content: 'Sipas modelit të Niels Bohr, elektronet lëvizin në shtresa përreth bërthamës. Shtresat shënohen me numra (1, 2, 3, 4...) ose me shkronja të mëdha: K, L, M, N. Shtresa më e afërt me bërthamën është shtresa e parë (K).',
        bulletPoints: [
          'Elektronet mbushin fillimisht shtresën me energji më të ulët (më të afërt me bërthamën).',
          'Vetëm pasi plotësohet një shtresë, fillon mbushja e shtresës tjetër më të jashtme.',
        ],
      },
      {
        title: 'Rregulli i thjeshtuar për klasën e 9-të',
        content: 'Për 20 elementet e para që mësohen në klasën e 9-të, zbatohet rregulli shumë i qartë:',
        bulletPoints: [
          'Shtresa e 1-rë (K): mban deri në 2 elektrone (maksimumi 2).',
          'Shtresa e 2-të (L): mban deri në 8 elektrone (maksimumi 8).',
          'Shtresa e 3-të (M): mban deri në 8 elektrone për elementet e para (Argoni arrin oktetin 2, 8, 8).',
          'Shtresa e 4-të (N): te Kaliumi (Z=19) merr 1 elektron (2, 8, 8, 1) dhe te Kalciumi (Z=20) merr 2 elektrone (2, 8, 8, 2).',
        ],
        callout: {
          type: 'info',
          title: 'Çfarë janë elektronet valente?',
          text: 'Elektronet që ndodhen në shtresën më të jashtme quhen elektrone valente. Ato përcaktojnë se si reagon elementi me të tjerët dhe në cilin grup të tabelës periodike ndodhet ai!',
        },
      },
      {
        title: 'Shembuj kryesorë të shpërndarjes elektronike',
        content: 'Ja lista e elementeve kryesore sipas kërkesave të programit shkollor PEGI:',
        bulletPoints: [
          'Hidrogjeni (Z = 1): 1',
          'Heliumi (Z = 2): 2 (dublet i plotësuar, shumë i qëndrueshëm)',
          'Litiumi (Z = 3): 2, 1',
          'Karboni (Z = 6): 2, 4',
          'Oksigjeni (Z = 8): 2, 6',
          'Neoni (Z = 10): 2, 8 (oktet i plotësuar, gaz fisnik)',
          'Natriumi (Z = 11): 2, 8, 1',
          'Magnezi (Z = 12): 2, 8, 2',
          'Klori (Z = 17): 2, 8, 7',
        ],
      },
    ],
  },
  {
    id: 'mesimi-4',
    number: 4,
    title: 'Prirjet e elementeve të grupit 1A',
    subtitle: 'Metalet alkaline (Li, Na, K, Rb, Cs): vetitë fizike, reaksioni me ujin dhe pse reaktiviteti rritet duke zbritur në grup.',
    readTime: '7 min lexim',
    summary: 'Elementet e grupit 1A quhen metale alkaline. Ato kanë 1 elektron në shtresën e jashtme, janë shumë reaktive dhe bëhen akoma më reaktive duke zbritur poshtë në grup.',
    sections: [
      {
        title: 'Kush janë elementet e Grupit 1A?',
        content: 'Grupi 1A përfshin: Litiumin (Li), Natriumin (Na), Kaliumin (K), Rubidiumin (Rb), Ceziumin (Cs) dhe Franciumin (Fr radioaktiv). (Vini re: Hidrogjeni ndodhet sipër tyre në tabelë për shkak të 1 elektroni, por nuk është metal alkal!).',
        bulletPoints: [
          'Janë metale aq të buta sa mund të priten lehtë me thikë.',
          'Kanë ngjyrë argjendi kur priten, por oksidohen brenda sekondash në kontakt me ajrin (prandaj ruhen në vaj vajguri/parafinë).',
          'Kanë densitet shumë të ulët: Litiumi, Natriumi dhe Kaliumi janë aq të lehtë sa notojnë mbi ujë!',
          'Të gjitha kanë ekzaktësisht 1 elektron në shtresën më të jashtme (valente).',
        ],
      },
      {
        title: 'Reaksioni me ujin: Krijimi i hidroksideve dhe çlirimi i hidrogjenit',
        content: 'Të gjitha metalet alkaline reagojnë me ujin me shpejtësi të madhe. Ato formojnë tretësirë bazike (alkaline) të hidroksidit të metalit dhe çlirojnë gaz hidrogjen (H₂).',
        bulletPoints: [
          'Litiumi (Li): Flluskon dhe pluskon mbi ujë duke lëshuar hidrogjen ngadalë.',
          'Natriumi (Na): Shkrihet në një rruazë/sferë të shndritshme që lëviz me vrull mbi ujë, fishkëllen dhe ndizet me flakë të verdhë-portokalli.',
          'Kaliumi (K): Reagon me forcë të jashtëzakonshme, ndizet menjëherë me një flakë të mrekullueshme ngjyrë vjollce (lilac) dhe përfundon me një krismë/shpërthim të vogël.',
        ],
        callout: {
          type: 'formula',
          title: 'Barazimi kimik i përgjithshëm',
          text: '2M(s) + 2H₂O(l) → 2MOH(aq) + H₂(g) ↑\nShembull: 2Na + 2H₂O → 2NaOH (hidroksid natriumi) + H₂ ↑',
        },
      },
      {
        title: 'Pse reaktiviteti rritet duke zbritur poshtë në grup?',
        content: 'Kjo është një nga pyetjet më kryesore në testet e kimisë së klasës së 9-të! Prirja e reaktivitetit: Li < Na < K < Rb < Cs.',
        bulletPoints: [
          '1. Shtohen shtresat elektronike: Litiumi ka 2 shtresa, Natriumi ka 3, Kaliumi ka 4, Rubidiumi ka 5...',
          '2. Rrezja atomike zmadhohet: Elektroni i jashtëm ndodhet gjithnjë e më larg bërthamës pozitive.',
          '3. Ekranimi nga shtresat e brendshme: Shtresat e ndërmjetme elektronike dobësojnë tërheqjen elektrike midis bërthamës (+) dhe elektronit valent (−).',
          '4. Përfundimi: Atomi e lëshon shumë më me lehtësi elektronin e tij të jashtëm, prandaj reaksioni bëhet gjithnjë e më i vrullshëm!',
        ],
        callout: {
          type: 'tip',
          title: 'Prirja e pikave të shkrirjes',
          text: 'Pikat e shkrirjes dhe të vlimit të metaleve alkaline ZVOGËLOHEN duke zbritur në grup (Li shkrihet në 180°C, Na në 98°C, K në 63°C, Cs në vetëm 28°C!).',
        },
      },
    ],
  },
  {
    id: 'mesimi-5',
    number: 5,
    title: 'Prirjet e atomeve të elementeve të tjera',
    subtitle: 'Halogjenet (Grupi 7A), Gazet fisnike (Grupi 8A) dhe prirjet përgjatë një periode.',
    readTime: '8 min lexim',
    summary: 'Si ndryshojnë vetitë e elementeve të tjera? Mëso për Halogjenet reaktive, Gazet fisnike inerte dhe ndryshimet e rrezes dhe karakterit metalik përgjatë periodës.',
    sections: [
      {
        title: 'Grupi 7A – Halogjenet (Formuesit e kripërave)',
        content: 'Halogjenet përfshijnë: Fluorin (F), Klorin (Cl), Bromin (Br) dhe Jodin (I). Të gjitha kanë 7 elektrone në shtresën e jashtme dhe u mungon vetëm 1 elektron për të plotësuar oktetin.',
        bulletPoints: [
          'Fluori (F₂): Gaz helmues me ngjyrë të verdhë të zbehtë, elementi më reaktiv në të gjithë tabelën periodike!',
          'Klori (Cl₂): Gaz i verdhë në të gjelbër me erë mbytëse dhe veti të forta dezinfektuese.',
          'Bromi (Br₂): I vetmi jometal që është lëng në temperaturë dhome, me ngjyrë të kuqërremtë në kafe.',
          'Jodi (I₂): Trup i ngurtë ngjyrë gri-të errët/vjollcë me shkëlqim metalik, që sublimohet lehtë në avuj vjollcë.',
        ],
      },
      {
        title: 'Prirja e reaktivitetit te Halogjenet: E kundërta e Grupit 1A!',
        content: 'Te Halogjenet, reaktiviteti ZVOGËLOHET duke zbritur në grup: F > Cl > Br > I!',
        bulletPoints: [
          'Halogjenet NUK duan të japin elektrone, por DUAN TË MARRIN 1 elektron për t’u bërë me 8 (oktet).',
          'Atomi i vogël i Fluorit (vetëm 2 shtresa) e ka bërthamën shumë afër sipërfaqes, prandaj e tërheq elektronin e huaj me forcë maksimale.',
          'Duke zbritur te Klori, Bromi dhe Jodi, rrezja zmadhohet dhe bërthama e ka më të vështirë të tërheqë një elektron shtesë.',
        ],
        callout: {
          type: 'warning',
          title: 'Kujdes në test!',
          text: '• Grupi 1A (Metalet): Reaktiviteti RRITET duke zbritur poshtë (sepse elektroni jepet më lehtë).\n• Grupi 7A (Jometalet): Reaktiviteti ZVOGËLOHET duke zbritur poshtë (sepse elektroni merret më me vështirësi).',
        },
      },
      {
        title: 'Grupi 8A (ose Grupi 0) – Gazet fisnike',
        content: 'Heliumi (He), Neoni (Ne), Argoni (Ar), Kriptoni (Kr), Ksenoni (Xe). Janë gazet me qëndrueshmëri maksimale.',
        bulletPoints: [
          'Heliumi ka dublet të plotë (2 elektrone në shtresën 1).',
          'Të gjitha të tjerat kanë shtresën e jashtme me 8 elektrone (oktet i plotësuar).',
          'Nuk fitojnë, nuk humbasin dhe nuk ndajnë elektrone në kushte normale (janë kimikisht inerte).',
          'Gjenden në atmosferë si atome të veçuara (monoatomike). Pikat e vlimit rriten lehtësisht duke zbritur poshtë.',
        ],
      },
      {
        title: 'Prirjet përgjatë një periode (nga e majta në të djathtë)',
        content: 'Kur kalojmë nga e majta në të djathtë brenda së njëjtës periodë (p.sh. nga Na → Mg → Al → Si → P → S → Cl → Ar):',
        bulletPoints: [
          '1. Karakteri metalik zvogëlohet dhe karakteri jometalik rritet.',
          '2. Numri i protoneve rritet me nga 1 në çdo hap, ndërsa shtresat mbeten të njëjta.',
          '3. Rrezja atomike ZVOGËLOHET! Sepse ngarkesa pozitive e bërthamës bëhet më e madhe dhe i tërheq shtresat më fort drejt qendrës.',
          '4. Numri i elektroneve valente rritet nga 1 (te grupi 1) deri në 8 (te grupi 8).',
        ],
      },
    ],
  },
];
