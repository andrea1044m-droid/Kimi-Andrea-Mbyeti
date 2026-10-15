import React, { useState } from 'react';
import { ELEMENTS_DATA, getElectronShells, getElementByZ } from '../data/elementsData';
import { AtomCanvas } from './AtomCanvas';
import { Plus, Minus, RotateCcw, Sparkles, AlertCircle, CheckCircle2, FlaskConical } from 'lucide-react';

export const InteractiveModels: React.FC = () => {
  // Free manipulation state
  const [protons, setProtons] = useState<number>(6); // Karbon default
  const [neutrons, setNeutrons] = useState<number>(6);
  const [electrons, setElectrons] = useState<number>(6);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Identify current element by proton count (Z)
  const currentElement = getElementByZ(protons) || {
    atomicNumber: protons,
    symbol: `X${protons}`,
    nameSq: `Elementi i panjohur Z=${protons}`,
    nameLatin: 'Elementum',
    massNumber: protons + neutrons,
    neutrons: neutrons,
    shells: getElectronShells(electrons),
    category: 'Jometal' as const,
    period: 1,
    group: '1',
    stateSq: 'Gaz' as const,
    descriptionSq: '',
    applicationSq: '',
    isotopes: [],
  };

  const massNumber = protons + neutrons;
  const charge = protons - electrons;
  const shells = getElectronShells(electrons);

  // Check if standard isotope
  const standardNeutrons = currentElement.neutrons;
  const isStandardIsotope = neutrons === standardNeutrons;

  // Set preset element
  const handleSelectElement = (z: number) => {
    const el = getElementByZ(z);
    if (el) {
      setProtons(el.atomicNumber);
      setNeutrons(el.neutrons);
      setElectrons(el.atomicNumber);
    }
  };

  // Reset to neutral Carbon-12
  const handleReset = () => {
    handleSelectElement(6);
  };

  // Preset challenges
  const presets = [
    { label: 'Karbon-14 (Izotop)', z: 6, n: 8, e: 6, desc: 'Izotop me 8 neutrone për datimin e fosileve' },
    { label: 'Jon Natriumi (Na⁺)', z: 11, n: 12, e: 10, desc: 'Kation me ngarkesë +1 (humbi 1 elektron)' },
    { label: 'Jon Kloruri (Cl⁻)', z: 17, n: 18, e: 18, desc: 'Anion me ngarkesë −1 (fitoi 1 elektron)' },
    { label: 'Helium (Dublet)', z: 2, n: 2, e: 2, desc: 'Gaz fisnik i plotësuar me 2 elektrone' },
  ];

  // Filter elements
  const filteredElements = ELEMENTS_DATA.filter((el) => {
    if (categoryFilter === 'all') return true;
    if (categoryFilter === 'metale') return el.category.toLowerCase().includes('metal');
    if (categoryFilter === 'jometale') return el.category === 'Jometal' || el.category === 'Halogjen';
    if (categoryFilter === 'gaz') return el.category === 'Gaz fisnik';
    return true;
  });

  return (
    <div id="modele-interaktive" className="space-y-10 scroll-mt-24">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-xs border border-white/30">
            <FlaskConical className="w-4 h-4 text-white" />
            <span>Laboratori Virtual i Kimisë</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Modele Interaktive të Atomit
          </h2>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
            Eksperimento lirisht! Ndrysho numrin e <strong>protoneve</strong> dhe shiko si transformohet elementi. Ndrysho <strong>neutronet</strong> për të krijuar izotope, dhe ndrysho <strong>elektronet</strong> për të formuar jone pozitive ose negative.
          </p>
        </div>
      </div>

      {/* Preset Challenges Bar */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> Provo modele të gatshme:
        </span>
        {presets.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => {
              setProtons(preset.z);
              setNeutrons(preset.n);
              setElectrons(preset.e);
            }}
            className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-2xs hover:border-blue-400 transition-all cursor-pointer"
            title={preset.desc}
          >
            {preset.label}
          </button>
        ))}
        <button
          onClick={handleReset}
          className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center gap-1 transition-all ml-auto cursor-pointer"
          title="Rivendos te Karboni"
        >
          <RotateCcw className="w-3 h-3" /> Rivendos
        </button>
      </div>

      {/* Main Interactive Workbench (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Interactive Canvas & Particle Status */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/90 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Pamja grafike e atomit
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">
                  {currentElement.nameSq} ({currentElement.symbol})
                </h3>
              </div>

              {/* Status Badge: Neutral, Cation, Anion */}
              <div>
                {charge === 0 ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Atom Neutral (q = 0)
                  </span>
                ) : charge > 0 ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    Kation Pozitiv (q = +{charge})
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-900 border border-purple-300">
                    Anion Negativ (q = {charge})
                  </span>
                )}
              </div>
            </div>

            {/* SVG Bohr Atom */}
            <AtomCanvas
              protons={protons}
              neutrons={neutrons}
              electrons={electrons}
              symbol={currentElement.symbol}
              elementName={currentElement.nameSq}
              shells={shells}
              size={440}
            />

            {/* Isotope Feedback Alert */}
            <div className="mt-4">
              {!isStandardIsotope ? (
                <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-900 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Ke krijuar një Izotop!</span> Numri i neutroneve ({neutrons}) është i ndryshëm nga ai standard i natyrës ({standardNeutrons}). Numri i ri i masës është <strong>A = {massNumber}</strong>. Ky atom shënohet: <strong>^{massNumber}_{protons}{currentElement.symbol}</strong>.
                  </div>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Izotopi kryesor i qëndrueshëm</span> ({currentElement.symbol}-{massNumber}) me {neutrons} neutrone dhe {protons} protone.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Particle Sliders and Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md space-y-6">
            <h3 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">
              Modifiko grimcat nënatomike
            </h3>

            {/* 1. Protons Control (Z) */}
            <div className="space-y-2 p-4 rounded-2xl bg-red-50/60 border border-red-200/80">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-sm font-bold text-red-950">
                    Protonet (p⁺) = Z
                  </span>
                </div>
                <span className="font-mono font-black text-xl text-red-600">
                  {protons}
                </span>
              </div>
              <p className="text-[11px] text-red-800/80">
                ⚠️ Ndryshimi i protoneve ndryshon <strong>identitetin e elementit</strong>!
              </p>
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => protons > 1 && setProtons(protons - 1)}
                  disabled={protons <= 1}
                  className="w-9 h-9 rounded-xl bg-white border border-red-200 text-red-700 flex items-center justify-center font-bold hover:bg-red-50 disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={protons}
                  onChange={(e) => setProtons(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
                <button
                  onClick={() => protons < 20 && setProtons(protons + 1)}
                  disabled={protons >= 20}
                  className="w-9 h-9 rounded-xl bg-white border border-red-200 text-red-700 flex items-center justify-center font-bold hover:bg-red-50 disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 2. Neutrons Control (N) */}
            <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-400" />
                  <span className="text-sm font-bold text-slate-900">
                    Neutronet (n⁰)
                  </span>
                </div>
                <span className="font-mono font-black text-xl text-slate-800">
                  {neutrons}
                </span>
              </div>
              <p className="text-[11px] text-slate-600">
                Ndryshimi i neutroneve ndryshon <strong>masën (A = {massNumber})</strong> dhe krijon izotope.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => neutrons > 0 && setNeutrons(neutrons - 1)}
                  disabled={neutrons <= 0}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-300 text-slate-700 flex items-center justify-center font-bold hover:bg-slate-100 disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={neutrons}
                  onChange={(e) => setNeutrons(Number(e.target.value))}
                  className="w-full accent-slate-600 cursor-pointer"
                />
                <button
                  onClick={() => neutrons < 25 && setNeutrons(neutrons + 1)}
                  disabled={neutrons >= 25}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-300 text-slate-700 flex items-center justify-center font-bold hover:bg-slate-100 disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 3. Electrons Control (E) */}
            <div className="space-y-2 p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-sm font-bold text-blue-950">
                    Elektronet (e⁻)
                  </span>
                </div>
                <span className="font-mono font-black text-xl text-blue-600">
                  {electrons}
                </span>
              </div>
              <p className="text-[11px] text-blue-800/80">
                Përcaktojnë shpërndarjen në shtresa: <strong>{shells.join(', ')}</strong>
              </p>
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => electrons > 1 && setElectrons(electrons - 1)}
                  disabled={electrons <= 1}
                  className="w-9 h-9 rounded-xl bg-white border border-blue-200 text-blue-700 flex items-center justify-center font-bold hover:bg-blue-50 disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={electrons}
                  onChange={(e) => setElectrons(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <button
                  onClick={() => electrons < 20 && setElectrons(electrons + 1)}
                  disabled={electrons >= 20}
                  className="w-9 h-9 rounded-xl bg-white border border-blue-200 text-blue-700 flex items-center justify-center font-bold hover:bg-blue-50 disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Live Atomic Math Box */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs space-y-2 shadow-inner">
              <div className="text-slate-400 font-sans text-[11px] font-bold uppercase tracking-wider mb-1">
                Llogaritjet aktuale:
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Numri atomik Z:</span>
                <span className="font-bold text-amber-300">{protons}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Numri i masës A (p + n):</span>
                <span className="font-bold text-emerald-300">{massNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Ngarkesa elektrike (p − e):</span>
                <span className={`font-bold ${charge === 0 ? 'text-slate-300' : charge > 0 ? 'text-amber-400' : 'text-purple-400'}`}>
                  {charge > 0 ? `+${charge}` : charge}
                </span>
              </div>
              <div className="flex justify-between border-t border-slate-800 pt-2">
                <span className="text-slate-400">Shtresat elektronike:</span>
                <span className="font-bold text-sky-300">{shells.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Element Selector Grid (1 to 20) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Zgjidh një element nga Tabela Periodike (1–20)
            </h3>
            <p className="text-xs text-slate-500">
              Kliko mbi çdo element për të parë konfigurimin e tij të plotë në laborator
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-3 py-1 rounded-lg transition-all ${
                categoryFilter === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Të gjithë (20)
            </button>
            <button
              onClick={() => setCategoryFilter('metale')}
              className={`px-3 py-1 rounded-lg transition-all ${
                categoryFilter === 'metale' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Metale
            </button>
            <button
              onClick={() => setCategoryFilter('jometale')}
              className={`px-3 py-1 rounded-lg transition-all ${
                categoryFilter === 'jometale' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Jometale
            </button>
            <button
              onClick={() => setCategoryFilter('gaz')}
              className={`px-3 py-1 rounded-lg transition-all ${
                categoryFilter === 'gaz' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Gaze fisnike
            </button>
          </div>
        </div>

        {/* Elements Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-2.5">
          {filteredElements.map((el) => {
            const isSelected = protons === el.atomicNumber;
            return (
              <button
                key={el.atomicNumber}
                onClick={() => handleSelectElement(el.atomicNumber)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between min-h-[90px] ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-300'
                    : 'bg-slate-50 hover:bg-blue-50/70 border-slate-200 text-slate-800'
                }`}
              >
                <div className="w-full flex items-center justify-between text-[10px] font-mono opacity-70">
                  <span>{el.atomicNumber}</span>
                  <span>A={el.massNumber}</span>
                </div>
                <div className="text-xl font-black font-mono my-0.5">{el.symbol}</div>
                <div className="text-[11px] font-semibold truncate w-full">{el.nameSq}</div>
                <div
                  className={`text-[9px] font-mono px-1 rounded ${
                    isSelected ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {el.shells.join(',')}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
