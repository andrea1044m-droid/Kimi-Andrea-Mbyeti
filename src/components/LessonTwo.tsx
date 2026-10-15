import React, { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, Layers, HelpCircle } from 'lucide-react';
import { ELEMENTS_DATA } from '../data/elementsData';

export const LessonTwo: React.FC = () => {
  // Interactive mini calculator for students
  const [selectedElementZ, setSelectedElementZ] = useState<number>(6); // Karbon default
  const currentElement = ELEMENTS_DATA.find((e) => e.atomicNumber === selectedElementZ) || ELEMENTS_DATA[5];

  return (
    <div className="space-y-10">
      {/* Lesson Header */}
      <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-6 sm:p-8 rounded-3xl border border-indigo-100">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white shadow-xs">
            Mësimi 2
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Të mësojmë më shumë për atomet
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Pse atomi i hekurit ndryshon nga ai i arit apo i oksigjenit? Çdo element ka numrin e tij unik të protoneve (numrin atomik Z) dhe një masë të caktuar (numrin e masës A).
          </p>
        </div>
      </div>

      {/* Prominent Formulas Section (As requested by user prompt) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-indigo-600" />
          <h3 className="text-xl font-bold text-slate-900">
            Formulat thelbësore (Mësoji përmendsh!)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-5 rounded-2xl shadow-md relative overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
              Formula 1: Numri Atomik
            </span>
            <div className="text-2xl font-black mt-2 font-mono">
              Z = Numri i protoneve (p⁺)
            </div>
            <p className="text-xs text-blue-100 mt-2 leading-relaxed">
              Z përcakton identitetin e elementit. Renditja në tabelën periodike bëhet sipas rritjes së numrit atomik Z.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-5 rounded-2xl shadow-md relative overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-200">
              Formula 2: Numri i Masës
            </span>
            <div className="text-2xl font-black mt-2 font-mono">
              A = protonet + neutronet
            </div>
            <p className="text-xs text-purple-100 mt-2 leading-relaxed">
              A është numri i përgjithshëm i nukleoneve (protonet + neutronet). Shënohet si eksponent lart majtas të simbolit.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-5 rounded-2xl shadow-md relative overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-200">
              Formula 3: Llogaritja e Neutroneve
            </span>
            <div className="text-2xl font-black mt-2 font-mono">
              n⁰ = A − Z
            </div>
            <p className="text-xs text-pink-100 mt-2 leading-relaxed">
              Numri i neutroneve gjendet gjithmonë duke zbritur numrin atomik nga numri i masës: n⁰ = A − Z.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-5 rounded-2xl shadow-md relative overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
              Formula 4: Atomi Neutral
            </span>
            <div className="text-2xl font-black mt-2 font-mono">
              e⁻ = p⁺ = Z
            </div>
            <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
              Në një atom neutral, numri i elektroneve negative barazon plotësisht numrin e protoneve pozitive.
            </p>
          </div>
        </div>
      </div>

      {/* Symbol Standard Notation Visual: A/Z X */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
          Si shënohet një atom me formulë kimike?
        </h3>
        <p className="text-sm text-slate-600 mb-6">
          Në kiminë e klasës së 9-të përdoret shënimi ndërkombëtar:
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-4">
          {/* Symbol Box */}
          <div className="flex items-center gap-2 p-6 rounded-2xl bg-slate-900 text-white shadow-lg">
            <div className="flex flex-col text-right font-mono text-sm sm:text-base font-bold text-amber-300">
              <span className="leading-none mb-2" title="Numri i masës (A)">
                A (12)
              </span>
              <span className="leading-none" title="Numri atomik (Z)">
                Z (6)
              </span>
            </div>
            <div className="text-5xl sm:text-6xl font-black font-mono text-white px-2">
              C
            </div>
          </div>

          {/* Explanation Notes */}
          <div className="space-y-2 text-sm text-slate-700 max-w-md">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs mt-0.5 shrink-0">
                A
              </div>
              <div>
                <strong>Numri i masës (A)</strong> shënohet <em>lart majtas</em> = 12 (6 protone + 6 neutrone).
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs mt-0.5 shrink-0">
                Z
              </div>
              <div>
                <strong>Numri atomik (Z)</strong> shënohet <em>poshtë majtas</em> = 6 (tregon 6 protone).
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs mt-0.5 shrink-0">
                X
              </div>
              <div>
                <strong>Simboli kimik (X)</strong> shënohet në qendër = C (Karbon).
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Textbook Examples: Carbon and Oxygen Step-by-Step */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">
          Shembuj të detajuar: Atomi i Karbonit dhe i Oksigjenit
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Carbon Card */}
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-xs hover:border-blue-400 transition-colors">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-mono font-bold text-xl flex items-center justify-center shadow-sm">
                  ¹²₆C
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">Karboni (C)</h4>
                  <span className="text-xs text-slate-500 font-mono">Z = 6, A = 12</span>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700">
                Shembulli 1
              </span>
            </div>

            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                <span className="text-slate-600 font-medium">Numri i protoneve (p⁺):</span>
                <span className="font-bold text-red-600 font-mono">p⁺ = Z = 6</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                <span className="text-slate-600 font-medium">Numri i elektroneve (e⁻):</span>
                <span className="font-bold text-blue-600 font-mono">e⁻ = p⁺ = 6</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                <span className="text-slate-600 font-medium">Numri i neutroneve (n⁰):</span>
                <span className="font-bold text-slate-800 font-mono">n⁰ = A − Z = 12 − 6 = 6</span>
              </li>
            </ul>

            <div className="mt-4 p-3 rounded-xl bg-blue-50 text-xs text-blue-900 font-medium">
              💡 Përfundim: Atomi i Karbonit-12 përbëhet nga <strong>6 protone, 6 neutrone dhe 6 elektrone</strong>.
            </div>
          </div>

          {/* Oxygen Card */}
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-xs hover:border-indigo-400 transition-colors">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-700 text-white font-mono font-bold text-xl flex items-center justify-center shadow-sm">
                  ¹⁶₈O
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">Oksigjeni (O)</h4>
                  <span className="text-xs text-slate-500 font-mono">Z = 8, A = 16</span>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700">
                Shembulli 2
              </span>
            </div>

            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                <span className="text-slate-600 font-medium">Numri i protoneve (p⁺):</span>
                <span className="font-bold text-red-600 font-mono">p⁺ = Z = 8</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                <span className="text-slate-600 font-medium">Numri i elektroneve (e⁻):</span>
                <span className="font-bold text-blue-600 font-mono">e⁻ = p⁺ = 8</span>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                <span className="text-slate-600 font-medium">Numri i neutroneve (n⁰):</span>
                <span className="font-bold text-slate-800 font-mono">n⁰ = A − Z = 16 − 8 = 8</span>
              </li>
            </ul>

            <div className="mt-4 p-3 rounded-xl bg-indigo-50 text-xs text-indigo-900 font-medium">
              💡 Përfundim: Atomi i Oksigjenit-16 përbëhet nga <strong>8 protone, 8 neutrone dhe 8 elektrone</strong>.
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Step-by-Step Calculator */}
      <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-3xl shadow-xl border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              Kalkulatori Interaktiv i Nxënësit
            </span>
            <h4 className="text-xl font-bold text-white mt-1">
              Zgjidh një element dhe shiko zbatimin e formulave:
            </h4>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-400">Zgjidh elementin:</label>
            <select
              value={selectedElementZ}
              onChange={(e) => setSelectedElementZ(Number(e.target.value))}
              className="bg-slate-800 text-white text-xs sm:text-sm font-semibold px-3 py-2 rounded-xl border border-slate-700 focus:outline-hidden focus:border-blue-500"
            >
              {ELEMENTS_DATA.slice(0, 15).map((el) => (
                <option key={el.atomicNumber} value={el.atomicNumber}>
                  {el.atomicNumber}. {el.nameSq} ({el.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60">
            <span className="text-xs text-slate-400">Numri Atomik (Z)</span>
            <div className="text-2xl font-black text-amber-400 font-mono mt-1">
              {currentElement.atomicNumber}
            </div>
            <span className="text-[10px] text-slate-400">p⁺ = {currentElement.atomicNumber}</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60">
            <span className="text-xs text-slate-400">Numri i Masës (A)</span>
            <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
              {currentElement.massNumber}
            </div>
            <span className="text-[10px] text-slate-400">p⁺ + n⁰</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60">
            <span className="text-xs text-slate-400">Neutronet (n⁰)</span>
            <div className="text-2xl font-black text-sky-400 font-mono mt-1">
              {currentElement.neutrons}
            </div>
            <span className="text-[10px] text-slate-400">
              {currentElement.massNumber} − {currentElement.atomicNumber} = {currentElement.neutrons}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60">
            <span className="text-xs text-slate-400">Elektronet (e⁻)</span>
            <div className="text-2xl font-black text-purple-400 font-mono mt-1">
              {currentElement.atomicNumber}
            </div>
            <span className="text-[10px] text-slate-400">baraz me p⁺</span>
          </div>
        </div>
      </div>

      {/* Isotopes Explanation with Visual Cards */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
        <div>
          <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Koncept Special
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Çfarë janë Izotopet?
          </h3>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
            A mund të kenë atomet e të njëjtit element masa të ndryshme? <strong>Po!</strong> Ato quhen <strong>izotope</strong>. Kanë të njëjtin numër protonesh (i njëjti Z, pra i njëjti element me të njëjtat veti kimike), por kanë numër të ndryshëm <strong>neutronesh</strong>.
          </p>
        </div>

        {/* Carbon isotopes comparison table/cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-lg text-slate-900">¹²₆C (Karbon-12)</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                98.9% në natyrë
              </span>
            </div>
            <p className="text-xs text-slate-600">Standardi kryesor i masës atomike.</p>
            <div className="text-xs font-mono space-y-1 pt-2 border-t border-slate-200">
              <div className="text-red-600">6 Protone</div>
              <div className="text-slate-700">6 Neutrone (12 − 6 = 6)</div>
              <div className="text-blue-600">6 Elektrone</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-lg text-slate-900">¹³₆C (Karbon-13)</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">
                1.1% në natyrë
              </span>
            </div>
            <p className="text-xs text-slate-600">I qëndrueshëm, përdoret në shkencë.</p>
            <div className="text-xs font-mono space-y-1 pt-2 border-t border-slate-200">
              <div className="text-red-600">6 Protone</div>
              <div className="text-slate-700">7 Neutrone (13 − 6 = 7)</div>
              <div className="text-blue-600">6 Elektrone</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-lg text-purple-900">¹⁴₆C (Karbon-14)</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-200 text-purple-900 font-bold">
                Gjurmë të rralla
              </span>
            </div>
            <p className="text-xs text-purple-700">Radioaktiv! Përdoret për datimin e fosileve.</p>
            <div className="text-xs font-mono space-y-1 pt-2 border-t border-purple-200">
              <div className="text-red-600">6 Protone</div>
              <div className="text-purple-900 font-bold">8 Neutrone (14 − 6 = 8)</div>
              <div className="text-blue-600">6 Elektrone</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
