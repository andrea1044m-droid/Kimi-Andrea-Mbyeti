import { ElementInfo } from '../types/chemistry';

export const ELEMENTS_DATA: ElementInfo[] = [
  {
    atomicNumber: 1,
    symbol: 'H',
    nameSq: 'Hidrogjen',
    nameLatin: 'Hydrogenium',
    massNumber: 1,
    neutrons: 0,
    shells: [1],
    category: 'Jometal',
    period: 1,
    group: 'IA (1)',
    stateSq: 'Gaz',
    descriptionSq: 'Elementi më i lehtë dhe më i përhapur në gjithësi. Përbën pjesën më të madhe të yjeve.',
    applicationSq: 'Përbërës i ujit (H₂O) dhe karburant ekologjik i së ardhmes.',
    isotopes: [
      { symbolWithA: '¹H (Proti)', neutrons: 0, abundance: '99.98%', note: 'Forma më e zakonshme pa neutrone.' },
      { symbolWithA: '²H (Deuteri)', neutrons: 1, abundance: '0.015%', note: 'Përdoret në ujin e rëndë për reaktorët bërthamorë.' },
      { symbolWithA: '³H (Triti)', neutrons: 2, abundance: 'Gjurmë', note: 'Radioaktiv, përdoret në shkencë.' },
    ],
  },
  {
    atomicNumber: 2,
    symbol: 'He',
    nameSq: 'Helium',
    nameLatin: 'Helium',
    massNumber: 4,
    neutrons: 2,
    shells: [2],
    category: 'Gaz fisnik',
    period: 1,
    group: 'VIIIA (18)',
    stateSq: 'Gaz',
    descriptionSq: 'Gaz fisnik inert me shtresën e parë të plotësuar me 2 elektrone (dublet i qëndrueshëm).',
    applicationSq: 'Përdoret për mbushjen e balonave atmosferike dhe ftohjen e pajisjeve MRI.',
    isotopes: [
      { symbolWithA: '⁴He', neutrons: 2, abundance: '99.99%', note: 'Bërthamë jashtëzakonisht e qëndrueshme.' },
      { symbolWithA: '³He', neutrons: 1, abundance: '0.0001%', note: 'I rrallë në Tokë, më i bollshëm në Hënë.' },
    ],
  },
  {
    atomicNumber: 3,
    symbol: 'Li',
    nameSq: 'Litium',
    nameLatin: 'Lithium',
    massNumber: 7,
    neutrons: 4,
    shells: [2, 1],
    category: 'Metal alkalin',
    period: 2,
    group: 'IA (1)',
    stateSq: 'I ngurtë',
    descriptionSq: 'Metali më i lehtë dhe shumë reaktiv me ujin. Ka 1 elektron në shtresën e jashtme.',
    applicationSq: 'Bateritë e telefonave, laptopëve dhe makinave elektrike.',
    isotopes: [
      { symbolWithA: '⁷Li', neutrons: 4, abundance: '92.5%', note: 'Izotopi kryesor i qëndrueshëm.' },
      { symbolWithA: '⁶Li', neutrons: 3, abundance: '7.5%', note: 'I qëndrueshëm.' },
    ],
  },
  {
    atomicNumber: 4,
    symbol: 'Be',
    nameSq: 'Berilium',
    nameLatin: 'Beryllium',
    massNumber: 9,
    neutrons: 5,
    shells: [2, 2],
    category: 'Metal alkaline-tokësor',
    period: 2,
    group: 'IIA (2)',
    stateSq: 'I ngurtë',
    descriptionSq: 'Metal i fortë me ngjyrë gri çeliku, shumë i lehtë dhe me rezistencë të lartë termike.',
    applicationSq: 'Përdoret në pjesë të anijeve kozmike dhe dritare të tubave me rreze X.',
    isotopes: [
      { symbolWithA: '⁹Be', neutrons: 5, abundance: '100%', note: 'I vetmi izotop natyror i qëndrueshëm.' },
    ],
  },
  {
    atomicNumber: 5,
    symbol: 'B',
    nameSq: 'Bor',
    nameLatin: 'Borum',
    massNumber: 11,
    neutrons: 6,
    shells: [2, 3],
    category: 'Metaloid',
    period: 2,
    group: 'IIIA (13)',
    stateSq: 'I ngurtë',
    descriptionSq: 'Gjysmëmetal i rrallë në koren e Tokës, por me veti të rëndësishme kimike.',
    applicationSq: 'Përdoret në qelqin rezistent termik Pyrex dhe fibra xhami.',
    isotopes: [
      { symbolWithA: '¹¹B', neutrons: 6, abundance: '80.1%', note: 'Izotopi më i zakonshëm.' },
      { symbolWithA: '¹⁰B', neutrons: 5, abundance: '19.9%', note: 'Përthithës i shkëlqyer i neutroneve.' },
    ],
  },
  {
    atomicNumber: 6,
    symbol: 'C',
    nameSq: 'Karbon',
    nameLatin: 'Carboneum',
    massNumber: 12,
    neutrons: 6,
    shells: [2, 4],
    category: 'Jometal',
    period: 2,
    group: 'IVA (14)',
    stateSq: 'I ngurtë',
    descriptionSq: 'Baza e të gjithë jetës organike në Tokë! Mund të formojë grafitin e butë ose diamantin e tejdukshëm e të fortë.',
    applicationSq: 'Grafit për lapsa, diamante, nanomateriale dhe gjithë kiminë e gjallë.',
    isotopes: [
      { symbolWithA: '¹²C', neutrons: 6, abundance: '98.9%', note: 'Standardi për njësinë atomike të masës (u).' },
      { symbolWithA: '¹³C', neutrons: 7, abundance: '1.1%', note: 'I qëndrueshëm, përdoret në RMN spektroskopi.' },
      { symbolWithA: '¹⁴C', neutrons: 8, abundance: 'Gjurmë', note: 'Radioaktiv, përdoret për datimin e fosileve të lashta.' },
    ],
  },
  {
    atomicNumber: 7,
    symbol: 'N',
    nameSq: 'Azot',
    nameLatin: 'Nitrogenium',
    massNumber: 14,
    neutrons: 7,
    shells: [2, 5],
    category: 'Jometal',
    period: 2,
    group: 'VA (15)',
    stateSq: 'Gaz',
    descriptionSq: 'Përbën rreth 78% të ajrit që thithim. Është pjesë thelbësore e proteinave dhe ADN-së.',
    applicationSq: 'Plehra kimike bujqësore, ftohje kriogjenike dhe mbrojtje e ushqimeve.',
    isotopes: [
      { symbolWithA: '¹⁴N', neutrons: 7, abundance: '99.63%', note: 'Pjesa dërrmuese e azotit në natyrë.' },
      { symbolWithA: '¹⁵N', neutrons: 8, abundance: '0.37%', note: 'Përdoret si shënues në kërkime biologjike.' },
    ],
  },
  {
    atomicNumber: 8,
    symbol: 'O',
    nameSq: 'Oksigjen',
    nameLatin: 'Oxygenium',
    massNumber: 16,
    neutrons: 8,
    shells: [2, 6],
    category: 'Jometal',
    period: 2,
    group: 'VIA (16)',
    stateSq: 'Gaz',
    descriptionSq: 'Thelbësor për frymëmarrjen qelizore dhe djegien. Përbën rreth 21% të atmosferës.',
    applicationSq: 'Frymëmarrje mjekësore, djegie industriale, ozoni mbrojtës (O₃).',
    isotopes: [
      { symbolWithA: '¹⁶O', neutrons: 8, abundance: '99.76%', note: 'Izotopi më i rëndësishëm në ujë dhe ajër.' },
      { symbolWithA: '¹⁷O', neutrons: 9, abundance: '0.04%', note: 'I qëndrueshëm me 9 neutrone.' },
      { symbolWithA: '¹⁸O', neutrons: 10, abundance: '0.20%', note: 'Përdoret për studimin e historisë së klimës.' },
    ],
  },
  {
    atomicNumber: 9,
    symbol: 'F',
    nameSq: 'Fluor',
    nameLatin: 'Fluorum',
    massNumber: 19,
    neutrons: 10,
    shells: [2, 7],
    category: 'Halogjen',
    period: 2,
    group: 'VIIA (17)',
    stateSq: 'Gaz',
    descriptionSq: 'Elementi me elektronegativitetin më të lartë në tabelën periodike. Kërkon vetëm 1 elektron për të plotësuar oktetin.',
    applicationSq: 'Fluorur në pastën e dhëmbëve për parandalimin e kariesit dhe veshje tefloni.',
    isotopes: [
      { symbolWithA: '¹⁹F', neutrons: 10, abundance: '100%', note: 'I vetmi izotop i qëndrueshëm natyror.' },
    ],
  },
  {
    atomicNumber: 10,
    symbol: 'Ne',
    nameSq: 'Neon',
    nameLatin: 'Neon',
    massNumber: 20,
    neutrons: 10,
    shells: [2, 8],
    category: 'Gaz fisnik',
    period: 2,
    group: 'VIIIA (18)',
    stateSq: 'Gaz',
    descriptionSq: 'Gaz fisnik inert me konfigurim oktet plotësisht të qëndrueshëm (2, 8). Nuk formon lehtë lidhje kimike.',
    applicationSq: 'Tuba ndriçues me dritë të kuqe-portokalli në reklama dhe lazerë.',
    isotopes: [
      { symbolWithA: '²⁰Ne', neutrons: 10, abundance: '90.48%', note: 'Izotopi kryesor.' },
      { symbolWithA: '²²Ne', neutrons: 12, abundance: '9.25%', note: 'I qëndrueshëm me 12 neutrone.' },
    ],
  },
  {
    atomicNumber: 11,
    symbol: 'Na',
    nameSq: 'Natrium',
    nameLatin: 'Natrium',
    massNumber: 23,
    neutrons: 12,
    shells: [2, 8, 1],
    category: 'Metal alkalin',
    period: 3,
    group: 'IA (1)',
    stateSq: 'I ngurtë',
    descriptionSq: 'Metal i butë argjendor që mund të pritet me thikë. Reagon vrullshëm me ujin duke çliruar gaz hidrogjen.',
    applicationSq: 'Përbërës i kripës së gjellës (NaCl) dhe llambave rrugore me dritë të verdhë.',
    isotopes: [
      { symbolWithA: '²³Na', neutrons: 12, abundance: '100%', note: 'I vetmi izotop i qëndrueshëm natyror.' },
    ],
  },
  {
    atomicNumber: 12,
    symbol: 'Mg',
    nameSq: 'Magnez',
    nameLatin: 'Magnesium',
    massNumber: 24,
    neutrons: 12,
    shells: [2, 8, 2],
    category: 'Metal alkaline-tokësor',
    period: 3,
    group: 'IIA (2)',
    stateSq: 'I ngurtë',
    descriptionSq: 'Metal i lehtë që digjet me një dritë të bardhë verbuese. Ka 2 elektrone valente.',
    applicationSq: 'Përbërës qendror i klorofilit te bimët, fishekzjarre dhe aliaxhe të lehta.',
    isotopes: [
      { symbolWithA: '²⁴Mg', neutrons: 12, abundance: '79.0%', note: 'Izotopi më i bollshëm.' },
      { symbolWithA: '²⁵Mg', neutrons: 13, abundance: '10.0%', note: 'I qëndrueshëm.' },
      { symbolWithA: '²⁶Mg', neutrons: 14, abundance: '11.0%', note: 'I qëndrueshëm.' },
    ],
  },
  {
    atomicNumber: 13,
    symbol: 'Al',
    nameSq: 'Alumin',
    nameLatin: 'Aluminium',
    massNumber: 27,
    neutrons: 14,
    shells: [2, 8, 3],
    category: 'Metal i zakonshëm',
    period: 3,
    group: 'IIIA (13)',
    stateSq: 'I ngurtë',
    descriptionSq: 'Metali më me bollëk në koren e Tokës. Është i lehtë, i qëndrueshëm ndaj korrozionit dhe përcjellës i mirë.',
    applicationSq: 'Kanoçe pijesh, fletë alumini ushqimore, avionë dhe dritare.',
    isotopes: [
      { symbolWithA: '²⁷Al', neutrons: 14, abundance: '100%', note: 'I vetmi izotop stabil natyror.' },
    ],
  },
  {
    atomicNumber: 14,
    symbol: 'Si',
    nameSq: 'Silic',
    nameLatin: 'Silicium',
    massNumber: 28,
    neutrons: 14,
    shells: [2, 8, 4],
    category: 'Metaloid',
    period: 3,
    group: 'IVA (14)',
    stateSq: 'I ngurtë',
    descriptionSq: 'Gjysmëpërcjellësi themelor i erës dixhitale. Përbërës kryesor i rërës (SiO₂) dhe qelqit.',
    applicationSq: 'Çipat e kompjuterëve, qelizat fotovoltaike diellore dhe xhami.',
    isotopes: [
      { symbolWithA: '²⁸Si', neutrons: 14, abundance: '92.2%', note: 'Izotopi dominues.' },
      { symbolWithA: '²⁹Si', neutrons: 15, abundance: '4.7%', note: 'I qëndrueshëm.' },
      { symbolWithA: '³⁰Si', neutrons: 16, abundance: '3.1%', note: 'I qëndrueshëm.' },
    ],
  },
  {
    atomicNumber: 15,
    symbol: 'P',
    nameSq: 'Fosfor',
    nameLatin: 'Phosphorus',
    massNumber: 31,
    neutrons: 16,
    shells: [2, 8, 5],
    category: 'Jometal',
    period: 3,
    group: 'VA (15)',
    stateSq: 'I ngurtë',
    descriptionSq: 'Jometal thelbësor për qeniet e gjalla, i pranishëm në skeletin e ADN-së dhe në molekulat energjetike ATP.',
    applicationSq: 'Koka e fijeve të shkrepëseve, plehra bujqësore fosfatike.',
    isotopes: [
      { symbolWithA: '³¹P', neutrons: 16, abundance: '100%', note: 'I vetmi izotop i qëndrueshëm natyror.' },
    ],
  },
  {
    atomicNumber: 16,
    symbol: 'S',
    nameSq: 'Squfur',
    nameLatin: 'Sulfur',
    massNumber: 32,
    neutrons: 16,
    shells: [2, 8, 6],
    category: 'Jometal',
    period: 3,
    group: 'VIA (16)',
    stateSq: 'I ngurtë',
    descriptionSq: 'Jometal me ngjyrë të verdhë të ndezur, i njohur që në lashtësi pranë vullkaneve.',
    applicationSq: 'Prodhimi i acidit sulfurik (H₂SO₄), ilaçe dhe vullkanizimi i gomave.',
    isotopes: [
      { symbolWithA: '³²S', neutrons: 16, abundance: '95.0%', note: 'Izotopi kryesor natyror.' },
      { symbolWithA: '³⁴S', neutrons: 18, abundance: '4.2%', note: 'I qëndrueshëm.' },
    ],
  },
  {
    atomicNumber: 17,
    symbol: 'Cl',
    nameSq: 'Klor',
    nameLatin: 'Chlorum',
    massNumber: 35,
    neutrons: 18,
    shells: [2, 8, 7],
    category: 'Halogjen',
    period: 3,
    group: 'VIIA (17)',
    stateSq: 'Gaz',
    descriptionSq: 'Gaz me ngjyrë të verdhë në të gjelbër me erë therëse. Kërkon 1 elektron për të arritur strukturën e argonit.',
    applicationSq: 'Dezinfektimi i ujit të pijshëm, pishinave dhe kripa e gjellës (NaCl).',
    isotopes: [
      { symbolWithA: '³⁵Cl', neutrons: 18, abundance: '75.78%', note: 'Izotopi më i zakonshëm.' },
      { symbolWithA: '³⁷Cl', neutrons: 20, abundance: '24.22%', note: 'Izotopi tjetër i qëndrueshëm.' },
    ],
  },
  {
    atomicNumber: 18,
    symbol: 'Ar',
    nameSq: 'Argon',
    nameLatin: 'Argon',
    massNumber: 40,
    neutrons: 22,
    shells: [2, 8, 8],
    category: 'Gaz fisnik',
    period: 3,
    group: 'VIIIA (18)',
    stateSq: 'Gaz',
    descriptionSq: 'Gaz fisnik me shtresë të tretë të qëndrueshme me 8 elektrone (oktet). Përbën rreth 0.93% të ajrit.',
    applicationSq: 'Mjedis mbrojtës inert për saldim dhe mbushje e llambave elektrike inkandeshente.',
    isotopes: [
      { symbolWithA: '⁴⁰Ar', neutrons: 22, abundance: '99.6%', note: 'Izotopi më i zakonshëm në atmosferë.' },
      { symbolWithA: '³⁶Ar', neutrons: 18, abundance: '0.3%', note: 'I qëndrueshëm.' },
    ],
  },
  {
    atomicNumber: 19,
    symbol: 'K',
    nameSq: 'Kalium',
    nameLatin: 'Kalium',
    massNumber: 39,
    neutrons: 20,
    shells: [2, 8, 8, 1],
    category: 'Metal alkalin',
    period: 4,
    group: 'IA (1)',
    stateSq: 'I ngurtë',
    descriptionSq: 'Metal alkalin shumë reaktiv me 1 elektron në shtresën e katërt (N). Reagon fuqishëm me ujin me flakë ngjyrë vjollcë.',
    applicationSq: 'Thelbësor për funksionimin e muskujve dhe sistemit nervor (p.sh. te bananet).',
    isotopes: [
      { symbolWithA: '³⁹K', neutrons: 20, abundance: '93.26%', note: 'Izotopi dominues stabil.' },
      { symbolWithA: '⁴¹K', neutrons: 22, abundance: '6.73%', note: 'I qëndrueshëm.' },
      { symbolWithA: '⁴⁰K', neutrons: 21, abundance: '0.01%', note: 'Radioizotop i dobët natyror.' },
    ],
  },
  {
    atomicNumber: 20,
    symbol: 'Ca',
    nameSq: 'Kalcium',
    nameLatin: 'Calcium',
    massNumber: 40,
    neutrons: 20,
    shells: [2, 8, 8, 2],
    category: 'Metal alkaline-tokësor',
    period: 4,
    group: 'IIA (2)',
    stateSq: 'I ngurtë',
    descriptionSq: 'Metal me rëndësi jetike për strukturën e eshtrave dhe dhëmbëve te njeriu dhe kafshët.',
    applicationSq: 'Ndërtimi i eshtrave, gur gëlqeror (CaCO₃), çimento dhe shkumës shkollor.',
    isotopes: [
      { symbolWithA: '⁴⁰Ca', neutrons: 20, abundance: '96.94%', note: 'Bërthamë e dyfishtë magjike (20p, 20n).' },
      { symbolWithA: '⁴⁴Ca', neutrons: 24, abundance: '2.09%', note: 'I qëndrueshëm.' },
    ],
  },
];

/**
 * Calculates Bohr electron shell distribution for elements up to Z=20
 * Simplified rule for 9th grade:
 * Shell 1 (K): up to 2
 * Shell 2 (L): up to 8
 * Shell 3 (M): up to 8 (for Z <= 20)
 * Shell 4 (N): up to 2 (for Z=19 and 20)
 */
export function getElectronShells(totalElectrons: number): number[] {
  if (totalElectrons <= 0) return [0];
  
  const shells: number[] = [];
  let remaining = totalElectrons;

  // Shell 1 (K) max 2
  const k = Math.min(remaining, 2);
  shells.push(k);
  remaining -= k;

  if (remaining <= 0) return shells;

  // Shell 2 (L) max 8
  const l = Math.min(remaining, 8);
  shells.push(l);
  remaining -= l;

  if (remaining <= 0) return shells;

  // Grade 9 curriculum specific for first 20 elements:
  // Shell 3 (M) takes up to 8 before electrons start entering Shell 4
  if (totalElectrons <= 20) {
    const m = Math.min(remaining, 8);
    shells.push(m);
    remaining -= m;

    if (remaining > 0) {
      shells.push(remaining); // N shell (up to 2 for K and Ca)
    }
  } else {
    // General fallback
    const m = Math.min(remaining, 18);
    shells.push(m);
    remaining -= m;
    if (remaining > 0) {
      shells.push(remaining);
    }
  }

  return shells;
}

export function getElementByZ(z: number): ElementInfo | undefined {
  return ELEMENTS_DATA.find((el) => el.atomicNumber === z);
}
