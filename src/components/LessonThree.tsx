import React, { useState } from 'react';
import { AtomCanvas } from './AtomCanvas';
import { ELEMENTS_DATA } from '../data/elementsData';
import { Sparkles, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export const LessonThree: React.FC = () => {
  // Elements specifically requested in the prompt:
  // Hidrogjeni: 1, Heliumi: 2, Litiumi: 2,1, Karboni: 2,4, Oksigjeni: 2,6, Neoni: 2,8, Natriumi: 2,8,1, Magnezi: 2,8,2, Klori: 2,8,7
  const targetElementsZ = [1, 2, 3, 6, 8, 10, 11, 12, 17];
  const [selectedZ, setSelectedZ] = useState<number>(8); // Oksigjen default

  const currentElement = ELEMENTS_DATA.find((e) => e.atomicNumber === selectedZ) || ELEMENTS_DATA[7];

  return (
    <div className="space-y-10">
      {/* Lesson Header */}
      <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 p-6 sm:p-8 rounded-3xl border border-purple-100">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-600 text-white shadow-xs">
            Mësimi 3
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Shpërndarja e elektroneve në atomet e elementeve
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Elektronet lëvizin rreth bërthamës në <strong>shtresa energjetike</strong> (të shënuara me K, L, M, N). Secila shtresë ka një kapacitet maksimal të caktuar elektronesh.
          </p>
        </div>
      </div>

      {/* Rules for Grade 9 Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-2xl border-2 border-blue-100 shadow-xs hover:border-blue-400 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg mb-3">
            K (1)
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1">
            Shtresa e 1-rë (K)
          </h3>
          <p className="text-xs text-slate-500 mb-3">Më e afërta me bërthamën</p>
          <div className="p-3 bg-blue-50 rounded-xl text-blue-900 font-extrabold text-sm mb-2 font-mono">
            Kapaciteti: Deri në 2 elektrone
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Kur kjo shtresë ka 2 elektrone (si te Heliumi), ajo quhet <strong>dublet i plotësuar</strong>.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-indigo-100 shadow-xs hover:border-indigo-400 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg mb-3">
            L (2)
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1">
            Shtresa e 2-të (L)
          </h3>
          <p className="text-xs text-slate-500 mb-3">Shtresa e dytë energjetike</p>
          <div className="p-3 bg-indigo-50 rounded-xl text-indigo-900 font-extrabold text-sm mb-2 font-mono">
            Kapaciteti: Deri në 8 elektrone
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Mbushja me 8 elektrone krijon një konfigurim të qëndrueshëm të quajtur <strong>oktet</strong> (si te Neoni).
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-purple-100 shadow-xs hover:border-purple-400 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg mb-3">
            M (3)
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1">
            Shtresa e 3-të (M)
          </h3>
          <p className="text-xs text-slate-500 mb-3">Për elementet e para (Z ≤ 20)</p>
          <div className="p-3 bg-purple-50 rounded-xl text-purple-900 font-extrabold text-sm mb-2 font-mono">
            Kapaciteti: Deri në 8 elektrone
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Pasi mbushet me 8 elektrone (Argoni 2, 8, 8), elektronet e radhës shkojnë te shtresa e 4-të (K dhe Ca).
          </p>
        </div>
      </div>

      {/* Interactive Model for Lesson 3 (As requested: Choose element, see nucleus and electrons on shells) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Model Interaktiv i Shpërndarjes Elektronike
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Zgjidh një nga 9 shembujt kryesorë të librit:
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500">I përzgjedhur:</span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
              {currentElement.nameSq} ({currentElement.symbol}) • Z={currentElement.atomicNumber}
            </span>
          </div>
        </div>

        {/* Buttons for the 9 key examples from the prompt */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 mb-8">
          {targetElementsZ.map((z) => {
            const el = ELEMENTS_DATA.find((item) => item.atomicNumber === z)!;
            const isSelected = selectedZ === z;
            return (
              <button
                key={z}
                onClick={() => setSelectedZ(z)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105'
                    : 'bg-slate-50 hover:bg-blue-50/60 border-slate-200 text-slate-700'
                }`}
              >
                <span className="text-xs font-mono opacity-80">Z={el.atomicNumber}</span>
                <span className="text-lg font-black font-mono my-0.5">{el.symbol}</span>
                <span className="text-[11px] font-semibold truncate w-full">{el.nameSq}</span>
                <span
                  className={`mt-1 text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-blue-700 text-white' : 'bg-slate-200/80 text-slate-700'
                  }`}
                >
                  {el.shells.join(', ')}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Viewer Grid: Visual Atom on Left, Breakdown on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[440px]">
              <AtomCanvas
                protons={currentElement.atomicNumber}
                neutrons={currentElement.neutrons}
                electrons={currentElement.atomicNumber}
                symbol={currentElement.symbol}
                elementName={currentElement.nameSq}
                shells={currentElement.shells}
                size={420}
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <h4 className="text-xl font-black text-slate-900">
                    {currentElement.nameSq}
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">
                    Simboli: <strong className="text-slate-900">{currentElement.symbol}</strong> | Numri atomik: <strong className="text-slate-900">Z = {currentElement.atomicNumber}</strong>
                  </p>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-indigo-100 text-indigo-700">
                  {currentElement.category}
                </span>
              </div>

              {/* Shell Formula badge */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">Shpërndarja elektronike:</div>
                <div className="text-2xl font-black text-blue-600 font-mono mt-1">
                  {currentElement.shells.join(', ')}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Totali: {currentElement.shells.reduce((a, b) => a + b, 0)} elektrone
                </div>
              </div>

              {/* Per-Shell Breakdown List */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Detajet e shtresave:
                </span>
                {currentElement.shells.map((count, idx) => {
                  const names = ['Shtresa 1 (K)', 'Shtresa 2 (L)', 'Shtresa 3 (M)', 'Shtresa 4 (N)'];
                  const maxCap = [2, 8, 8, 2][idx];
                  const isOuter = idx === currentElement.shells.length - 1;

                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-2.5 rounded-lg text-xs font-medium ${
                        isOuter
                          ? 'bg-blue-50 border border-blue-200 text-blue-900'
                          : 'bg-white border border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span>{names[idx]}</span>
                        {isOuter && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-200 text-blue-800">
                            Shtresë e jashtme (Valente)
                          </span>
                        )}
                      </div>
                      <span className="font-mono font-bold">
                        {count} / {maxCap} e⁻
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Educational Note */}
              <p className="text-xs text-slate-600 leading-relaxed italic bg-amber-50/70 p-3 rounded-lg border border-amber-200/60">
                {currentElement.descriptionSq}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Table of the 9 required examples */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-slate-900">
          Tabela e 9 shembujve kryesorë sipas librit
        </h3>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100/80 text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">
                <th className="py-3 px-5">Elementi</th>
                <th className="py-3 px-5">Simboli</th>
                <th className="py-3 px-5">Numri atomik (Z)</th>
                <th className="py-3 px-5">Shpërndarja elektronike</th>
                <th className="py-3 px-5">Elektrone valente</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {targetElementsZ.map((z) => {
                const el = ELEMENTS_DATA.find((e) => e.atomicNumber === z)!;
                const valenceElectrons = el.shells[el.shells.length - 1];
                return (
                  <tr
                    key={z}
                    onClick={() => setSelectedZ(z)}
                    className={`cursor-pointer transition-colors ${
                      selectedZ === z ? 'bg-blue-50 font-semibold' : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="py-3 px-5 font-bold text-slate-900">{el.nameSq}</td>
                    <td className="py-3 px-5 font-mono font-bold text-blue-600">{el.symbol}</td>
                    <td className="py-3 px-5 font-mono text-slate-700">{el.atomicNumber}</td>
                    <td className="py-3 px-5 font-mono font-bold text-purple-700">
                      {el.shells.join(', ')}
                    </td>
                    <td className="py-3 px-5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 font-mono">
                        {valenceElectrons}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
