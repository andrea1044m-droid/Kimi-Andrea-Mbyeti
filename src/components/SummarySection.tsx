import React, { useState } from 'react';
import { FLASHCARDS } from '../data/flashcardsData';
import { SUBATOMIC_PARTICLES } from '../data/lessonsData';
import { ELEMENTS_DATA } from '../data/elementsData';
import { BookOpen, FileText, CheckCircle2, RotateCcw, ChevronLeft, ChevronRight, Sparkles, Lightbulb, Bookmark, Flame, Zap } from 'lucide-react';

export const SummarySection: React.FC = () => {
  // Flashcards state
  const [currentCardIdx, setCurrentCardIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [searchFilter, setSearchFilter] = useState<string>('');

  const currentCard = FLASHCARDS[currentCardIdx];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIdx((prev) => (prev + 1) % FLASHCARDS.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIdx((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
  };

  const handleResetCards = () => {
    setIsFlipped(false);
    setCurrentCardIdx(0);
  };

  const keyDefinitions = [
    {
      term: 'Atomi',
      definition: 'Njësia bazë ndërtimore e çdo lënde/materieje në univers. Përbëhet nga bërthama dhe reja elektronike.',
    },
    {
      term: 'Bërthama e atomit',
      definition: 'Pjesa qendrore me ngarkesë pozitive (+), shumë e vogël dhe e dendur, ku përqendrohet pothuajse e gjithë masa e atomit (protonet + neutronet).',
    },
    {
      term: 'Reja elektronike',
      definition: 'Hapësira përreth bërthamës ku lëvizin me shpejtësi të lartë elektronet në shtresa të caktuara energjie.',
    },
    {
      term: 'Numri atomik (Z)',
      definition: 'Numri i protoneve në bërthamë. Përcakton identitetin e elementit dhe vendin në tabelën periodike. Në atom neutral: Z = p⁺ = e⁻.',
    },
    {
      term: 'Numri i masës (A)',
      definition: 'Shuma e përgjithshme e protoneve dhe neutroneve në bërthamë: A = p⁺ + n⁰.',
    },
    {
      term: 'Izotopet',
      definition: 'Atome të të njëjtit element kimik me numër të njëjtë protonesh (Z), por numër të ndryshëm neutronesh dhe prandaj masa të ndryshme (A).',
    },
    {
      term: 'Shtresat elektronike',
      definition: 'Nivelet e caktuara energjetike (K, L, M, N) ku qarkullojnë elektronet rreth bërthamës.',
    },
    {
      term: 'Elektrone valente',
      definition: 'Elektronet që ndodhen në shtresën më të jashtme të atomit. Ato përcaktojnë vetitë kimike dhe formimin e lidhjeve.',
    },
    {
      term: 'Metalet alkaline (Grupi 1A)',
      definition: 'Metale shumë të buta me 1 elektron valent (Li, Na, K, Rb, Cs). Reagojnë me ujin me çlirim të H₂ dhe hidroksideve bazike. Reaktiviteti rritet duke zbritur në grup.',
    },
    {
      term: 'Halogjenet (Grupi 7A)',
      definition: 'Jometale aktive me 7 elektrone valente (F, Cl, Br, I). Kërkojnë të marrin 1 elektron (formojnë anione X⁻). Reaktiviteti zvogëlohet duke zbritur në grup.',
    },
    {
      term: 'Gazet fisnike (Grupi 8A / 0)',
      definition: 'Elemente inerte me konfigurim të qëndrueshëm dublet (He: 2) ose oktet (Ne, Ar: 8). Nuk formojnë lehtë lidhje kimike.',
    },
    {
      term: 'Prirja e rrezes atomike',
      definition: 'Rrezja atomike zmadhohet duke zbritur në grup (shtohen shtresat) dhe zvogëlohet përgjatë periodës nga e majta në të djathtë (rritet ngarkesa e bërthamës).',
    },
  ];

  const filteredDefinitions = keyDefinitions.filter((item) =>
    item.term.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div id="permbledhje" className="space-y-12 scroll-mt-24">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 text-white p-6 sm:p-8 rounded-3xl shadow-lg">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-xs border border-white/30">
            <Bookmark className="w-4 h-4 text-white" />
            <span>Fleta e Përsëritjes</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Përmbledhje për Provim
          </h2>
          <p className="text-sm sm:text-base text-purple-100 leading-relaxed">
            Gjithçka që të duhet për të marrë notën 10 në testimin e Kimisë për të 5 mësimet: përkufizimet kyçe, formulat thelbësore, prirjet e Grupeve 1A dhe 7A, kartelat mësimore dhe tabela e plotë e shpërndarjes elektronike.
          </p>
        </div>
      </div>

      {/* 1. Flashcards (Kartela Mësimore) with "Përsëriti të gjitha" */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Mësim aktiv me kartela (12 Kartela)
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              Kartela mësimore interaktive
            </h3>
            <p className="text-xs text-slate-500">
              Kliko mbi kartelë për ta rrotulluar dhe për të zbuluar përgjigjen!
            </p>
          </div>

          {/* Button: Përsëriti të gjitha */}
          <button
            onClick={handleResetCards}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 shadow-2xs transition-all cursor-pointer self-start sm:self-auto"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Përsëriti të gjitha</span>
          </button>
        </div>

        {/* 3D Flip Card Container */}
        <div className="max-w-xl mx-auto">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="relative w-full min-h-[260px] sm:min-h-[280px] p-8 rounded-3xl border-2 border-indigo-200/80 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/40 shadow-xl cursor-pointer select-none flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-indigo-300"
          >
            {/* Top Card Badge */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800">
                {currentCard.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Kartela {currentCardIdx + 1} / {FLASHCARDS.length}
              </span>
            </div>

            {/* Main Content (Front or Back) */}
            <div className="py-6 text-center">
              {!isFlipped ? (
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Pyetja:
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                    {currentCard.question}
                  </h4>
                  <p className="text-xs text-indigo-600 font-semibold mt-2">
                    (Kliko kartelën për të parë përgjigjen ↻)
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                    Përgjigja:
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-800 whitespace-pre-line leading-relaxed">
                    {currentCard.answer}
                  </p>
                  {currentCard.tip && (
                    <div className="mt-3 p-2.5 rounded-xl bg-amber-50 text-amber-900 text-xs font-medium border border-amber-200 flex items-center justify-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{currentCard.tip}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom footnote */}
            <div className="text-center text-[11px] text-slate-400">
              Kliko kudo mbi kartë për ta kthyer
            </div>
          </div>

          {/* Card Navigation Controls */}
          <div className="flex items-center justify-between mt-4 px-2">
            <button
              onClick={handlePrevCard}
              className="flex items-center gap-1 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-2xs transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Mëparshmja
            </button>

            <span className="text-xs font-semibold text-slate-500">
              {currentCardIdx + 1} nga {FLASHCARDS.length}
            </span>

            <button
              onClick={handleNextCard}
              className="flex items-center gap-1 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-2xs transition-colors cursor-pointer"
            >
              Tjetra <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Key Formulas to Remember */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-slate-900">
          Formulat dhe Barazimet që duhen mbajtur mend për test
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-1">
            <span className="text-xs font-bold text-blue-700 uppercase">Numri atomik Z</span>
            <div className="text-xl font-black text-blue-950 font-mono">Z = p⁺ = e⁻</div>
            <p className="text-xs text-blue-800">Në atom neutral, numri atomik barazohet me protonet dhe elektronet.</p>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-1">
            <span className="text-xs font-bold text-indigo-700 uppercase">Numri i masës A</span>
            <div className="text-xl font-black text-indigo-950 font-mono">A = p⁺ + n⁰</div>
            <p className="text-xs text-indigo-800">Numri i masës është shuma e protoneve dhe neutroneve.</p>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-1">
            <span className="text-xs font-bold text-purple-700 uppercase">Llogaritja e neutroneve</span>
            <div className="text-xl font-black text-purple-950 font-mono">n⁰ = A − Z</div>
            <p className="text-xs text-purple-800">Neutronet gjenden duke zbritur numrin atomik nga masa.</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
            <span className="text-xs font-bold text-amber-700 uppercase">Reaksioni i Grupit 1A me ujin</span>
            <div className="text-lg font-black text-amber-950 font-mono">2M + 2H₂O → 2MOH + H₂↑</div>
            <p className="text-xs text-amber-800">Formon hidroksid alkalik dhe çliron gaz hidrogjen.</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
            <span className="text-xs font-bold text-emerald-700 uppercase">Jonizimi i Halogjeneve (7A)</span>
            <div className="text-lg font-black text-emerald-950 font-mono">X + 1e⁻ → X⁻ (Anion)</div>
            <p className="text-xs text-emerald-800">Marrin 1 elektron për të arritur oktetin e qëndrueshëm.</p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-1">
            <span className="text-xs font-bold text-rose-700 uppercase">Rregulli i shtresave (Klasa 9)</span>
            <div className="text-lg font-black text-rose-950 font-mono">K: 2 | L: 8 | M: 8</div>
            <p className="text-xs text-rose-800">Kapaciteti maksimal për 20 elementet e para shkollore.</p>
          </div>
        </div>
      </div>

      {/* 3. Trends of Groups Summary Table */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-slate-900">
          Përmbledhja e prirjeve: Grupi 1A, Grupi 7A dhe Periodat
        </h3>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <th className="py-3 px-4">Tema / Grupi</th>
                <th className="py-3 px-4">Elektrone valente</th>
                <th className="py-3 px-4">Sjellja kimike</th>
                <th className="py-3 px-4">Prirja e reaktivitetit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/60">
                <td className="py-3 px-4 font-bold text-amber-900">Grupi 1A (Metalet alkaline)</td>
                <td className="py-3 px-4 font-mono">1 e⁻</td>
                <td className="py-3 px-4">Lëshojnë 1 elektron lehtësisht (katione M⁺)</td>
                <td className="py-3 px-4 font-bold text-red-600">RRITET duke zbritur (Li &lt; Na &lt; K &lt; Rb &lt; Cs)</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="py-3 px-4 font-bold text-emerald-900">Grupi 7A (Halogjenet)</td>
                <td className="py-3 px-4 font-mono">7 e⁻</td>
                <td className="py-3 px-4">Tërheqin 1 elektron për të bërë 8 (anione X⁻)</td>
                <td className="py-3 px-4 font-bold text-blue-600">ZVOGËLOHET duke zbritur (F &gt; Cl &gt; Br &gt; I)</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="py-3 px-4 font-bold text-purple-900">Grupi 8A (Gazet fisnike)</td>
                <td className="py-3 px-4 font-mono">2 (He) / 8 e⁻</td>
                <td className="py-3 px-4">Inerte, nuk formojnë lidhje në kushte normale</td>
                <td className="py-3 px-4 text-slate-500">Inerte (nuk reagojnë)</td>
              </tr>
              <tr className="hover:bg-slate-50/60">
                <td className="py-3 px-4 font-bold text-slate-900">Përgjatë Periodës (Majtas → Djathtas)</td>
                <td className="py-3 px-4 font-mono">1 → 8 e⁻</td>
                <td className="py-3 px-4">Karakteri metalik bie, rritet ai jometalik</td>
                <td className="py-3 px-4 font-bold text-purple-600">Rrezja atomike zvogëlohet</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Subatomic Particles Table */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">
          Tabela e grimcave nënatomike
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">
                <th className="py-3 px-5">Grimca</th>
                <th className="py-3 px-5">Vendndodhja</th>
                <th className="py-3 px-5">Ngarkesa elektrike</th>
                <th className="py-3 px-5">Masa relative</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {SUBATOMIC_PARTICLES.map((p) => (
                <tr key={p.name} className="hover:bg-slate-50/80">
                  <td className="py-3.5 px-5 font-bold text-slate-900">
                    {p.name} ({p.symbol})
                  </td>
                  <td className="py-3.5 px-5 text-slate-700">{p.location}</td>
                  <td className="py-3.5 px-5">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      p.chargeValue === 1 ? 'bg-red-100 text-red-700' : p.chargeValue === -1 ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {p.charge}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 font-mono text-xs text-slate-600">{p.massRel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Complete Electron Configuration Table for First 20 Elements */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Tabela e shpërndarjes elektronike për 20 elementet e para
            </h3>
            <p className="text-xs text-slate-500">
              Elementet e kërkuara në programin mësimor PEGI për klasën e 9-të:
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100/90 text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">
                <th className="py-3 px-4">Z</th>
                <th className="py-3 px-4">Elementi</th>
                <th className="py-3 px-4">Simboli</th>
                <th className="py-3 px-4">A</th>
                <th className="py-3 px-4">Shpërndarja elektronike</th>
                <th className="py-3 px-4">K (1)</th>
                <th className="py-3 px-4">L (2)</th>
                <th className="py-3 px-4">M (3)</th>
                <th className="py-3 px-4">N (4)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ELEMENTS_DATA.map((el) => {
                const isHighlight = [1, 2, 3, 6, 8, 10, 11, 12, 17].includes(el.atomicNumber);
                return (
                  <tr
                    key={el.atomicNumber}
                    className={`transition-colors ${
                      isHighlight ? 'bg-blue-50/40 font-semibold' : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{el.atomicNumber}</td>
                    <td className="py-2.5 px-4 font-bold text-slate-900">
                      {el.nameSq}
                      {isHighlight && (
                        <span className="ml-1.5 text-[10px] px-1.5 py-0.2 rounded bg-blue-100 text-blue-700">
                          kryesor
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-4 font-mono font-bold text-blue-600">{el.symbol}</td>
                    <td className="py-2.5 px-4 font-mono text-slate-500">{el.massNumber}</td>
                    <td className="py-2.5 px-4 font-mono font-bold text-purple-700">
                      {el.shells.join(', ')}
                    </td>
                    <td className="py-2.5 px-4 font-mono text-slate-700">{el.shells[0] || '—'}</td>
                    <td className="py-2.5 px-4 font-mono text-slate-700">{el.shells[1] || '—'}</td>
                    <td className="py-2.5 px-4 font-mono text-slate-700">{el.shells[2] || '—'}</td>
                    <td className="py-2.5 px-4 font-mono text-slate-700">{el.shells[3] || '—'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. Key Definitions Glossar */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Fjalor i përkufizimeve kryesore (12 Përkufizime)
            </h3>
            <p className="text-xs text-slate-500">
              Kërko termat për t'i mbajtur mend qartë
            </p>
          </div>

          <input
            type="text"
            placeholder="Filtro përkufizimet..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="text-xs sm:text-sm px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-blue-500 max-w-xs"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDefinitions.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-1.5 hover:border-indigo-300 transition-colors"
            >
              <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>{item.term}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
