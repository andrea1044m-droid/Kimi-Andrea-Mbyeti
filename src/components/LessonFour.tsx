import React, { useState } from 'react';
import { Flame, Droplets, ArrowDown, Sparkles, ShieldAlert, Zap, Layers, CheckCircle2 } from 'lucide-react';

interface AlkaliMetal {
  symbol: string;
  nameSq: string;
  z: number;
  shells: number[];
  meltingPoint: string;
  density: string;
  flameColor: string;
  flameHex: string;
  reactionWaterDesc: string;
  vigorLevel: number; // 1 to 5
  soundDesc: string;
}

export const LessonFour: React.FC = () => {
  const alkaliMetals: AlkaliMetal[] = [
    {
      symbol: 'Li',
      nameSq: 'Litium',
      z: 3,
      shells: [2, 1],
      meltingPoint: '180.5 °C',
      density: '0.53 g/cm³ (noton mbi ujë)',
      flameColor: 'E kuqe e ndezur (krëmtë)',
      flameHex: '#DC2626',
      reactionWaterDesc: 'Flluskon qetësisht dhe pluskon në sipërfaqe duke çliruar gaz hidrogjen. Nuk ndizet vetvetiu.',
      vigorLevel: 1,
      soundDesc: 'Fshshsh... flluska të lehta hidrogjeni',
    },
    {
      symbol: 'Na',
      nameSq: 'Natrium',
      z: 11,
      shells: [2, 8, 1],
      meltingPoint: '97.8 °C',
      density: '0.97 g/cm³ (noton mbi ujë)',
      flameColor: 'E verdhë e fortë në portokalli',
      flameHex: '#F59E0B',
      reactionWaterDesc: 'Nxehtësia e reaksionit e shkrin në një rruazë të shndritshme sferike. Lëviz me vrull mbi ujë, fishkëllen dhe ndizet me flakë të verdhë.',
      vigorLevel: 2,
      soundDesc: 'Fishkëllimë e fortë dhe kërcitje të shpejta',
    },
    {
      symbol: 'K',
      nameSq: 'Kalium',
      z: 19,
      shells: [2, 8, 8, 1],
      meltingPoint: '63.5 °C',
      density: '0.86 g/cm³ (noton mbi ujë)',
      flameColor: 'Vjollcë karakteristike (lilac)',
      flameHex: '#A855F7',
      reactionWaterDesc: 'Ndizet MENJËHERË në kontakt me ujin me një flakë të ndritshme ngjyrë vjollcë, rrotullohet me shpejtësi të rrufeshme dhe përfundon me një krisëm shpërthyese.',
      vigorLevel: 3,
      soundDesc: 'Zhurmë e mprehtë, flakë e menjëhershme dhe "PAK!"',
    },
    {
      symbol: 'Rb',
      nameSq: 'Rubidium',
      z: 37,
      shells: [2, 8, 18, 8, 1],
      meltingPoint: '39.3 °C',
      density: '1.53 g/cm³ (zhytet në ujë)',
      flameColor: 'E kuqe në të purpurt',
      flameHex: '#E11D48',
      reactionWaterDesc: 'Reaksion i dhunshëm i menjëhershëm! Shpërthen brenda fraksionit të sekondës me çlirim të madh energjie.',
      vigorLevel: 4,
      soundDesc: 'Shpërthim i menjëhershëm!',
    },
    {
      symbol: 'Cs',
      nameSq: 'Cezium',
      z: 55,
      shells: [2, 8, 18, 18, 8, 1],
      meltingPoint: '28.4 °C (shkrihet në dorë)',
      density: '1.93 g/cm³ (zhytet në ujë)',
      flameColor: 'Blu qielli në vjollcë',
      flameHex: '#3B82F6',
      reactionWaterDesc: 'Shpërthim jashtëzakonisht i dhunshëm! Copëton enën e qelqit dhe çliron sasi të jashtëzakonshme gazi hidrogjen të ndezur.',
      vigorLevel: 5,
      soundDesc: 'Boom i fuqishëm që thyen gotën laboratorike!',
    },
  ];

  const [selectedMetal, setSelectedMetal] = useState<AlkaliMetal>(alkaliMetals[1]); // Na default
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 3500);
  };

  return (
    <div className="space-y-10">
      {/* Lesson Header */}
      <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 p-6 sm:p-8 rounded-3xl border border-amber-200/80">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-600 text-white shadow-xs">
              Mësimi 4
            </span>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
              Metalet Alkaline
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Prirjet e elementeve të grupit 1A
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Pse elementet e grupit 1A quhen <strong>metale alkaline</strong>? Ato kanë të gjitha <strong>1 elektron në shtresën e jashtme</strong>, janë jashtëzakonisht reaktive dhe bëhen <em>gjithnjë e më të dhunshme</em> duke zbritur nga lart-poshtë në tabelë!
          </p>
        </div>
      </div>

      {/* Main Chemical Equation Callout */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-lg space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-sky-400" />
            <h3 className="font-bold text-lg text-white">
              Reaksioni karakteristik me ujin (Formulë e detyrueshme)
            </h3>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
            Klasa 9 PEGI
          </span>
        </div>

        <div className="text-center py-2">
          <div className="text-xl sm:text-3xl font-black font-mono text-amber-300 tracking-wide">
            2M + 2H₂O → 2MOH + H₂ ↑
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            <strong>Metal alkal</strong> (M) + <strong>Ujë</strong> → <strong>Hidroksid metali</strong> (bazë e fortë) + <strong>Gaz Hidrogjen</strong> (çlirohet me flluska)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300 font-mono">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
            <span className="text-amber-400 font-bold block mb-1">Shembull me Natriumin:</span>
            2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g) ↑
            <span className="text-slate-400 block mt-1 font-sans">
              (Formon tretësirë hidroksid natriumi dhe çliron hidrogjen)
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
            <span className="text-purple-400 font-bold block mb-1">Shembull me Kaliumin:</span>
            2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g) ↑
            <span className="text-slate-400 block mt-1 font-sans">
              (Formon hidroksid kaliumi dhe flakë vjollcë)
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Water Reaction Simulator */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" /> Eksperiment Virtual
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              Simulimi: Hidhe metalin në ujë!
            </h3>
            <p className="text-xs text-slate-500">
              Zgjidh një metal të Grupit 1A dhe shiko sa me forcë reagon ai me ujin:
            </p>
          </div>

          <button
            onClick={handleSimulate}
            disabled={isSimulating}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 shadow-md shadow-red-500/20 disabled:opacity-50 transition-all cursor-pointer self-start sm:self-auto"
          >
            <Flame className="w-4 h-4" />
            <span>{isSimulating ? 'Duke reaguar...' : `Provo reagimin e ${selectedMetal.nameSq}it`}</span>
          </button>
        </div>

        {/* Metal Choice Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {alkaliMetals.map((m) => {
            const isSelected = selectedMetal.symbol === m.symbol;
            return (
              <button
                key={m.symbol}
                onClick={() => setSelectedMetal(m)}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-white border-amber-500 shadow-md scale-102 font-bold'
                    : 'bg-slate-50 hover:bg-amber-50/50 border-slate-200 text-slate-700'
                }`}
              >
                <div className="text-xs font-mono opacity-80">Z = {m.z}</div>
                <div className="text-2xl font-black font-mono my-0.5">{m.symbol}</div>
                <div className="text-xs truncate">{m.nameSq}</div>
                <div className="mt-1 text-[10px] font-mono px-1 py-0.5 rounded bg-black/10">
                  {m.shells.join(',')}
                </div>
              </button>
            );
          })}
        </div>

        {/* Beaker / Simulator Graphic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Beaker Container */}
          <div className="md:col-span-6 bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden text-white">
            {/* Water Beaker SVG */}
            <div className="relative w-64 h-56 border-x-4 border-b-4 border-slate-400/80 rounded-b-3xl bg-slate-900/60 p-2 overflow-hidden flex flex-col justify-end">
              {/* Measurement ticks on beaker */}
              <div className="absolute left-2 top-6 text-[9px] text-slate-500 font-mono space-y-4 select-none">
                <div>— 200 ml</div>
                <div>— 150 ml</div>
                <div>— 100 ml</div>
                <div>— 50 ml</div>
              </div>

              {/* Water Volume (turns purple/pink if phenolphthalein is added to detect base!) */}
              <div
                className={`w-full transition-all duration-700 rounded-b-2xl flex items-center justify-center relative ${
                  isSimulating
                    ? 'h-36 bg-gradient-to-t from-pink-600/80 via-purple-600/70 to-pink-500/60 animate-pulse'
                    : 'h-32 bg-gradient-to-t from-sky-600/60 to-cyan-400/40'
                }`}
              >
                {/* Surface floating metal bead */}
                <div
                  className={`absolute top-2 w-7 h-7 rounded-full shadow-lg transition-all ${
                    isSimulating
                      ? 'animate-bounce scale-125'
                      : 'translate-y-0'
                  }`}
                  style={{
                    backgroundColor: isSimulating ? selectedMetal.flameHex : '#94A3B8',
                    boxShadow: isSimulating
                      ? `0 0 25px 8px ${selectedMetal.flameHex}`
                      : '0 2px 8px rgba(0,0,0,0.4)',
                  }}
                >
                  {isSimulating && (
                    <Flame className="w-5 h-5 text-white absolute -top-4 left-1/2 -translate-x-1/2 animate-ping" />
                  )}
                </div>

                {/* Hydrogen bubbles during reaction */}
                {isSimulating && (
                  <div className="absolute inset-0 flex items-center justify-around pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-white/70 animate-ping" />
                    <span className="w-3 h-3 rounded-full bg-white/60 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-white/80 animate-ping delay-100" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/70 animate-bounce delay-200" />
                  </div>
                )}
              </div>
            </div>

            {/* Reaction subtitle status */}
            <div className="mt-4 text-center">
              <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                {isSimulating ? `⚠️ Reaksion aktiv: ${selectedMetal.soundDesc}` : `Gati për testim: ${selectedMetal.nameSq} në ujë`}
              </span>
            </div>
          </div>

          {/* Details & Explanation on Right */}
          <div className="md:col-span-6 space-y-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="font-bold text-slate-900 text-base">
                  {selectedMetal.nameSq} ({selectedMetal.symbol})
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-bold text-white font-mono"
                  style={{ backgroundColor: selectedMetal.flameHex }}
                >
                  Flakë: {selectedMetal.flameColor}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Shkalla e vrullit (Reaktiviteti):</span>
                  <span className="font-bold text-amber-600">
                    {'★'.repeat(selectedMetal.vigorLevel)}{'☆'.repeat(5 - selectedMetal.vigorLevel)} (Niveli {selectedMetal.vigorLevel}/5)
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Pika e shkrirjes:</span>
                  <span className="font-mono font-bold">{selectedMetal.meltingPoint}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Dendësia:</span>
                  <span className="font-mono font-bold">{selectedMetal.density}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Konfigurimi elektronik:</span>
                  <span className="font-mono font-bold text-purple-700">{selectedMetal.shells.join(', ')}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <strong>Vëzhgimi në laborator:</strong> {selectedMetal.reactionWaterDesc}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Does Reactivity Increase Down Group 1A? (Crucial Concept) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-red-100 text-red-800 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Pyetje Tipike Provimi
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Pse reaktiviteti rritet duke zbritur në Grupin 1A?
          </h3>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
            Shumë nxënës pyesin: <em>"Pse Kaliumi reagon më me vrull se Natriumi, dhe Natriumi më shumë se Litiumi?"</em>. Përgjigja qëndron te <strong>struktura e atomit</strong>:
          </p>
        </div>

        {/* 3 Step Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              Shtohen shtresat elektronike
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Litiumi ka vetëm 2 shtresa (2, 1). Natriumi ka 3 shtresa (2, 8, 1). Kaliumi ka 4 shtresa (2, 8, 8, 1).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              Elektroni largohet nga bërthama
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Duke u zmadhuar rrezja atomike, elektroni i vetëm valent ndodhet shumë më larg nga bërthama pozitive (+) dhe frenohet/ekranohet nga shtresat e brendshme.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              Lëshohet me lehtësi të madhe!
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Meqenëse tërheqja është më e dobët, atomi e humb shumë më lehtë elektronin valent për të formuar kationin M⁺. Kështu reaksioni ndodh menjëherë dhe më me vrull!
            </p>
          </div>
        </div>

        {/* Summary Trend Direction Indicator */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-100 via-amber-50 to-red-100 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-slate-900">Litium (Li)</span>
            <span>→</span>
            <span className="font-mono font-bold text-amber-900">Natrium (Na)</span>
            <span>→</span>
            <span className="font-mono font-bold text-red-900">Kalium (K)</span>
            <span>→</span>
            <span className="font-mono font-bold text-purple-900">Rubidium (Rb)</span>
            <span>→</span>
            <span className="font-mono font-bold text-blue-900">Cezium (Cs)</span>
          </div>

          <div className="flex items-center gap-1.5 text-red-700 font-bold bg-white px-3 py-1.5 rounded-xl shadow-2xs border border-red-200 shrink-0">
            <ArrowDown className="w-4 h-4" />
            <span>Reaktiviteti rritet duke zbritur në grup!</span>
          </div>
        </div>
      </div>
    </div>
  );
};
