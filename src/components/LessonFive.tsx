import React, { useState } from 'react';
import { Sparkles, ArrowRight, ArrowDown, Layers, ShieldCheck, Flame, Scale, Check, AlertTriangle } from 'lucide-react';

interface HalogenInfo {
  symbol: string;
  formula: string;
  nameSq: string;
  z: number;
  shells: number[];
  stateSq: string;
  colorSq: string;
  colorHex: string;
  reactivityRank: number; // 1 = highest
  useSq: string;
}

export const LessonFive: React.FC = () => {
  const halogens: HalogenInfo[] = [
    {
      symbol: 'F',
      formula: 'F₂',
      nameSq: 'Fluor',
      z: 9,
      shells: [2, 7],
      stateSq: 'Gaz',
      colorSq: 'E verdhë shumë e zbehtë',
      colorHex: '#FEF08A',
      reactivityRank: 1,
      useSq: 'Elementi më reaktiv në Tokë! Përdoret në pastën e dhëmbëve dhe teflon.',
    },
    {
      symbol: 'Cl',
      formula: 'Cl₂',
      nameSq: 'Klor',
      z: 17,
      shells: [2, 8, 7],
      stateSq: 'Gaz',
      colorSq: 'E verdhë në të gjelbër',
      colorHex: '#86EFAC',
      reactivityRank: 2,
      useSq: 'Gaz me erë të fortë therëse; dezinfektues uji dhe zbardhues.',
    },
    {
      symbol: 'Br',
      formula: 'Br₂',
      nameSq: 'Brom',
      z: 35,
      shells: [2, 8, 18, 7],
      stateSq: 'Lëng',
      colorSq: 'E kuqe e errët në kafe',
      colorHex: '#B91C1C',
      reactivityRank: 3,
      useSq: 'I vetmi jometal lëng në temperaturë dhome; avullon shpejt me avuj të kuq.',
    },
    {
      symbol: 'I',
      formula: 'I₂',
      nameSq: 'Jod',
      z: 53,
      shells: [2, 8, 18, 18, 7],
      stateSq: 'I ngurtë',
      colorSq: 'Gri e errët metalike (avuj vjollcë)',
      colorHex: '#7C3AED',
      reactivityRank: 4,
      useSq: 'Kristale të ngurta që sublimohen në gaz ngjyrë vjollcë; antiseptik mjekësor.',
    },
  ];

  const nobleGases = [
    { symbol: 'He', name: 'Helium', z: 2, shells: [2], note: 'Dublet i qëndrueshëm (2e⁻). I lehtë, mbush balona.' },
    { symbol: 'Ne', name: 'Neon', z: 10, shells: [2, 8], note: 'Oktet i plotësuar (8e⁻). Ndriçon me ngjyrë të kuqe.' },
    { symbol: 'Ar', name: 'Argon', z: 18, shells: [2, 8, 8], note: 'Oktet i qëndrueshëm (8e⁻). Mjedis inert për llamba e saldim.' },
    { symbol: 'Kr', name: 'Kripton', z: 36, shells: [2, 8, 18, 8], note: 'Gaz fisnik i rëndë për llamba fotografike.' },
  ];

  const [activeContrastTab, setActiveContrastTab] = useState<'grupi1' | 'grupi7' | 'grupi8'>('grupi7');

  return (
    <div className="space-y-10">
      {/* Lesson Header */}
      <div className="bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 p-6 sm:p-8 rounded-3xl border border-teal-200/80">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-600 text-white shadow-xs">
              Mësimi 5
            </span>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
              Prirjet e Përgjithshme Periodike
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Prirjet e atomeve të elementeve të tjera
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Si sillen jometalet e <strong>Grupit 7A (Halogjenet)</strong> dhe pse reaktiviteti i tyre sillet <em>ekzaktësisht në mënyrë të kundërt</em> me metalet? Çfarë i bën <strong>Gazet fisnike (Grupi 8A)</strong> kaq të qëndrueshme dhe si ndryshojnë vetitë përgjatë një periode?
          </p>
        </div>
      </div>

      {/* Halogens Section (Grupi 7A) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
              Grupi 7A (17) • Jometale Shumë Reaktive
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              Halogjenet: Formuesit e Kripërave
            </h3>
          </div>
          <div className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold self-start sm:self-auto">
            7 elektrone valente (Kërkojnë +1 e⁻)
          </div>
        </div>

        {/* 4 Halogens Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {halogens.map((h) => (
            <div
              key={h.symbol}
              className="p-5 rounded-2xl border-2 border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-300 transition-all space-y-3 shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-full border border-black/20"
                    style={{ backgroundColor: h.colorHex }}
                  />
                  <span className="font-black text-xl font-mono text-slate-900">
                    {h.formula}
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                  {h.stateSq}
                </span>
              </div>

              <div>
                <h4 className="font-extrabold text-slate-900 text-base">{h.nameSq}</h4>
                <p className="text-xs text-slate-500 font-mono">
                  Z = {h.z} • Shtresat: {h.shells.join(', ')}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-xs space-y-1">
                <div className="text-slate-500">Ngjyra: <strong className="text-slate-800">{h.colorSq}</strong></div>
                <div className="text-slate-500">Reaktiviteti: <strong className="text-emerald-700">Rangu #{h.reactivityRank}</strong></div>
              </div>

              <p className="text-[11px] text-slate-600 leading-snug">
                {h.useSq}
              </p>
            </div>
          ))}
        </div>

        {/* Crucial Halogen Rule: Reactivity decreases down the group */}
        <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-300/80 space-y-2 text-sm text-amber-950">
          <div className="flex items-center gap-2 font-black text-amber-900 text-base">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Kujdes! Prirja e reaktivitetit te Halogjenet është e KUNDËRT me Grupin 1A:</span>
          </div>
          <p className="leading-relaxed">
            Te halogjenet, reaktiviteti <strong>ZVOGËLOHET duke zbritur në grup (F &gt; Cl &gt; Br &gt; I)</strong>!
          </p>
          <div className="p-3 bg-white/80 rounded-xl border border-amber-200 text-xs font-medium space-y-1">
            <div>
              <strong>Pse?</strong> Halogjenet duan të <em>tërheqin (fitojnë)</em> 1 elektron shtesë për të plotësuar oktetin.
            </div>
            <div>
              Atomi i vogël i Fluorit (vetëm 2 shtresa) e ka bërthamën shumë afër sipërfaqes dhe e tërheq elektronin e huaj me fuqi maksimale. Duke zbritur poshtë te Klori, Bromi dhe Jodi, rrezja rritet dhe bërthama e ka gjithnjë e më të vështirë të tërheqë një elektron të ri!
            </div>
          </div>
        </div>
      </div>

      {/* Noble Gases Section (Grupi 8A / 0) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-md space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
              Grupi 8A (18 ose Grupi 0)
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              Gazet Fisnike: Qëndrueshmëria Absolute
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200 font-bold">
            Dublet / Oktet i plotësuar
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {nobleGases.map((g) => (
            <div
              key={g.symbol}
              className="p-5 rounded-2xl bg-purple-50/40 border border-purple-200 space-y-2 hover:bg-purple-50/70 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-black text-2xl text-purple-900">{g.symbol}</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-200 text-purple-900">
                  {g.shells.join(',')}
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">{g.name} (Z={g.z})</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{g.note}</p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Pse quhen inerte?</strong> Sepse kanë shtresën e jashtme krejtësisht të mbushur (Heliumi me 2 elektrone, Neoni dhe Argoni me 8 elektrone). Ato nuk kanë nevojë as të japin, as të marrin dhe as të ndajnë elektrone me elemente të tjera!
          </p>
        </div>
      </div>

      {/* Periodic Trends Across a Period (Left to Right) */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
        <div>
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
            Prirjet Përgjatë Periodës
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Çfarë ndodh kur ecim nga e majta në të djathtë në një periodë?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            P.sh. në Periodën 3: Nga Natriumi (Na) → Magnezi (Mg) → Alumini (Al) → Silici (Si) → Fosfori (P) → Squfuri (S) → Klori (Cl) → Argoni (Ar):
          </p>
        </div>

        {/* 3 Major Trends Across Period */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
            <div className="text-amber-400 font-bold text-sm">1. Rrezja atomike ZVOGËLOHET</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Megjithëse shtohen elektrone, të gjitha vendosen në të njëjtën shtresë. Ndërkohë, bërthama fiton më shumë protone (+), kështu që i tërheq shtresat më fuqishëm drejt qendrës, duke e zvogëluar përmasën e atomit!
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
            <div className="text-sky-400 font-bold text-sm">2. Nga Metal në Jometal</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Në të majtë ndodhen metalet aktive (Na, Mg), në mes metaloidët (Si), dhe në të djathtë jometalet aktive (P, S, Cl) deri te gazet fisnike (Ar).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
            <div className="text-emerald-400 font-bold text-sm">3. Elektronet valente rriten</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Elektronet në shtresën e jashtme rriten nga 1 (Grupi 1) → 2 (Grupi 2) → 3 (Grupi 3) → ... → 7 (Grupi 7) → 8 (Grupi 8).
            </p>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison: Group 1A vs Group 7A */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-slate-900">
          Krahasim i drejtpërdrejtë: Grupi 1A vs Grupi 7A
        </h3>
        <p className="text-xs text-slate-500">
          Kjo tabelë i përmbledh të gjitha prirjet e mësuara në Mësimin 4 dhe 5:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <th className="py-3 px-4">Karakteristika</th>
                <th className="py-3 px-4 text-amber-800 bg-amber-50/60">Grupi 1A (Metalet alkaline)</th>
                <th className="py-3 px-4 text-emerald-800 bg-emerald-50/60">Grupi 7A (Halogjenet)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Elektrone valente</td>
                <td className="py-3 px-4 font-mono font-bold text-amber-700 bg-amber-50/20">1 elektron (2, 1 ose 2, 8, 1)</td>
                <td className="py-3 px-4 font-mono font-bold text-emerald-700 bg-emerald-50/20">7 elektrone (2, 7 ose 2, 8, 7)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Qëllimi kimik</td>
                <td className="py-3 px-4 bg-amber-50/20">Të HUMBASË 1 elektron (krijon kation M⁺)</td>
                <td className="py-3 px-4 bg-emerald-50/20">Të FITOJË 1 elektron (krijon anion X⁻)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Prirja e reaktivitetit në grup</td>
                <td className="py-3 px-4 font-bold text-red-600 bg-amber-50/20">
                  RRITET duke zbritur (Li &lt; Na &lt; K &lt; Rb &lt; Cs)
                </td>
                <td className="py-3 px-4 font-bold text-blue-600 bg-emerald-50/20">
                  ZVOGËLOHET duke zbritur (F &gt; Cl &gt; Br &gt; I)
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Gjendja fizike</td>
                <td className="py-3 px-4 bg-amber-50/20">Të gjitha të ngurta, metale të buta</td>
                <td className="py-3 px-4 bg-emerald-50/20">Gaz (F, Cl), Lëng (Br), I ngurtë (I)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
