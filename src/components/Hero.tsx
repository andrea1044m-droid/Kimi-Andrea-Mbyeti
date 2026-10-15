import React, { useState } from 'react';
import { ArrowRight, Sparkles, BookOpen, Layers, CheckCircle2, Flame, Scale } from 'lucide-react';
import { AtomCanvas } from './AtomCanvas';
import { ELEMENTS_DATA } from '../data/elementsData';

interface HeroProps {
  onStartLearning: () => void;
  onExploreModels: () => void;
  onSelectLesson?: (lessonId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartLearning, onExploreModels, onSelectLesson }) => {
  // Allow switching quick demo elements in Hero preview (Carbon, Oxygen, Neon, Sodium, Potassium)
  const [demoZ, setDemoZ] = useState<number>(6); // Karboni default
  const demoElement = ELEMENTS_DATA.find((e) => e.atomicNumber === demoZ) || ELEMENTS_DATA[5];

  const quickPicks = [
    { z: 1, label: 'Hidrogjen (H)' },
    { z: 6, label: 'Karbon (C)' },
    { z: 8, label: 'Oksigjen (O)' },
    { z: 11, label: 'Natrium (Na - Grupi 1A)' },
    { z: 17, label: 'Klor (Cl - Grupi 7A)' },
  ];

  return (
    <section id="kryefaqja" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      {/* Soft gradient background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-blue-100/60 via-purple-100/40 to-indigo-50/20 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Pill Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200/70 shadow-xs">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Kimia Klasa 9 • Libri PEGI</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-xs">
                <span>Punoi Andrea Mbyeti</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Zbulo botën e{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                atomeve!
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Çdo gjë që na rrethon përbëhet nga atome. Mëso si janë ndërtuar ato, si sillen elektronet, si reagojnë metalet alkaline të Grupit 1A me ujin dhe si ndryshojnë vetitë e elementeve të tjera përmes shpjegimeve të thjeshta, shembujve dhe lojërave.
            </p>

            {/* Key benefits / 5 Grade 9 topics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-left">
              <div
                onClick={() => onSelectLesson?.('mesimi-1')}
                className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-400 transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">1. Struktura e atomit</div>
                  <div className="text-slate-500 text-[11px]">Bërthama, p⁺, n⁰, e⁻</div>
                </div>
              </div>

              <div
                onClick={() => onSelectLesson?.('mesimi-2')}
                className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-indigo-400 transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">2. Më shumë për atomet</div>
                  <div className="text-slate-500 text-[11px]">Z, A dhe izotopet</div>
                </div>
              </div>

              <div
                onClick={() => onSelectLesson?.('mesimi-3')}
                className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-purple-400 transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">3. Shtresat elektronike</div>
                  <div className="text-slate-500 text-[11px]">K, L, M, N (2, 8, 8)</div>
                </div>
              </div>

              <div
                onClick={() => onSelectLesson?.('mesimi-4')}
                className="flex items-start gap-2 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200 shadow-2xs hover:border-amber-400 transition-all cursor-pointer"
              >
                <Flame className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-amber-950">4. Prirjet e Grupit 1A</div>
                  <div className="text-amber-800 text-[11px]">Metalet alkaline & uji</div>
                </div>
              </div>

              <div
                onClick={() => onSelectLesson?.('mesimi-5')}
                className="col-span-2 sm:col-span-1 flex items-start gap-2 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 shadow-2xs hover:border-emerald-400 transition-all cursor-pointer"
              >
                <Scale className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-emerald-950">5. Elementet e tjera</div>
                  <div className="text-emerald-800 text-[11px]">Halogjenet & gazet fisnike</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onStartLearning}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-base text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Fillo të mësosh</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreModels}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-base text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all cursor-pointer"
              >
                <Layers className="w-5 h-5 text-indigo-600" />
                <span>Eksploro modelet</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Interactive Atom Preview */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-white p-4 rounded-3xl border border-slate-200/80 shadow-xl relative">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Shembull i drejtpërdrejtë
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200">
                  {demoElement.nameSq} ({demoElement.symbol})
                </span>
              </div>

              {/* Atom Canvas */}
              <AtomCanvas
                protons={demoElement.atomicNumber}
                neutrons={demoElement.neutrons}
                electrons={demoElement.atomicNumber}
                symbol={demoElement.symbol}
                elementName={demoElement.nameSq}
                shells={demoElement.shells}
                size={380}
              />

              {/* Quick Pick Chips */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 flex-wrap">
                <span className="text-xs text-slate-400 font-medium mr-1">Provo:</span>
                {quickPicks.map((pick) => (
                  <button
                    key={pick.z}
                    onClick={() => setDemoZ(pick.z)}
                    className={`text-xs px-2.5 py-1 rounded-lg font-semibold transition-all ${
                      demoZ === pick.z
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {pick.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
