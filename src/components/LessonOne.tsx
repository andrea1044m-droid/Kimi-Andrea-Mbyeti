import React, { useState } from 'react';
import { SUBATOMIC_PARTICLES } from '../data/lessonsData';
import { Atom, ShieldCheck, Sparkles, HelpCircle, Check, Info } from 'lucide-react';

export const LessonOne: React.FC = () => {
  const [activeParticle, setActiveParticle] = useState<string>('all');

  return (
    <div className="space-y-10">
      {/* Intro Header */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-6 sm:p-8 rounded-3xl border border-blue-100">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-xs">
            Mësimi 1
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Struktura e atomit
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Çdo gjë që prek, ha ose merr me frymë është e ndërtuar nga grimca të panumërta mikroskopike të quajtura <strong>atome</strong>. Edhe pse për shekuj me radhë u mendua se atomi ishte i pandashëm, sot dimë se ai ka një strukturë të mrekullueshme të brendshme!
          </p>
        </div>
      </div>

      {/* 2 Main Parts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Bërthama e atomit</h3>
              <p className="text-xs text-slate-500">Qendra e dendur me ngarkesë pozitive (+)</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Ndodhet ekzaktësisht në qendër të atomit. Megjithëse zë vetëm një pjesë të papërfillshme të vëllimit, në bërthamë ndodhet <strong>mbi 99.9% e të gjithë masës</strong> së atomit. Aty qëndrojnë fort të lidhur <strong>protonet</strong> dhe <strong>neutronet</strong>.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Reja elektronike</h3>
              <p className="text-xs text-slate-500">Hapësira rreth bërthamës me ngarkesë negative (−)</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Është një hapësirë e gjerë boshe rreth bërthamës ku lëvizin me shpejtësi të rrufeshme <strong>elektronet</strong>. Ato qarkullojnë në shtresa të caktuara energjetike (të ngjashme me orbitat e planetëve rreth Diellit).
          </p>
        </div>
      </div>

      {/* Large Labeled Illustration of the Atom */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl overflow-hidden relative">
        <div className="text-center max-w-xl mx-auto mb-6">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
            Ilustrim i detajuar shkollor
          </span>
          <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
            Si duket atomi me të gjitha pjesët e tij?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Kliko mbi butonat më poshtë ose mbi etiketat për të veçuar secilën grimcë
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setActiveParticle('all')}
            className={`text-xs px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
              activeParticle === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Të gjitha pjesët
          </button>
          <button
            onClick={() => setActiveParticle('proton')}
            className={`text-xs px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
              activeParticle === 'proton'
                ? 'bg-red-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Vetëm Protonet (p⁺)
          </button>
          <button
            onClick={() => setActiveParticle('neutron')}
            className={`text-xs px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
              activeParticle === 'neutron'
                ? 'bg-slate-300 text-slate-900'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Vetëm Neutronet (n⁰)
          </button>
          <button
            onClick={() => setActiveParticle('electron')}
            className={`text-xs px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
              activeParticle === 'electron'
                ? 'bg-sky-500 text-slate-950 font-bold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Vetëm Elektronet (e⁻)
          </button>
        </div>

        {/* Big Atom Diagram with Visual Callouts/Labels */}
        <div className="relative max-w-2xl mx-auto flex items-center justify-center">
          <svg
            viewBox="0 0 600 420"
            className="w-full h-auto select-none"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#818CF8" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Elliptical Bohr / Rutherford Orbits */}
            <g
              transform="translate(300, 210)"
              className="transition-opacity duration-300"
              opacity={activeParticle === 'proton' || activeParticle === 'neutron' ? 0.25 : 1}
            >
              {/* Orbit 1 */}
              <ellipse
                rx="210"
                ry="80"
                fill="none"
                stroke="url(#orbitGrad)"
                strokeWidth="2"
                strokeDasharray="5 4"
                transform="rotate(-25)"
              />
              {/* Orbit 2 */}
              <ellipse
                rx="210"
                ry="80"
                fill="none"
                stroke="url(#orbitGrad)"
                strokeWidth="2"
                strokeDasharray="5 4"
                transform="rotate(35)"
              />
              {/* Orbit 3 */}
              <ellipse
                rx="210"
                ry="80"
                fill="none"
                stroke="url(#orbitGrad)"
                strokeWidth="2"
                strokeDasharray="5 4"
                transform="rotate(90)"
              />
            </g>

            {/* Electrons with Pulsing Glow */}
            <g
              className="transition-opacity duration-300"
              opacity={activeParticle === 'proton' || activeParticle === 'neutron' ? 0.15 : 1}
            >
              {/* Electron 1 (top-right) */}
              <g transform="translate(460, 110)">
                <circle r="12" fill="#38BDF8" fillOpacity="0.3" className="animate-ping" />
                <circle r="9" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
                <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                  −
                </text>
              </g>

              {/* Electron 2 (bottom-left) */}
              <g transform="translate(140, 310)">
                <circle r="12" fill="#38BDF8" fillOpacity="0.3" className="animate-ping" />
                <circle r="9" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
                <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                  −
                </text>
              </g>

              {/* Electron 3 (top-left) */}
              <g transform="translate(160, 130)">
                <circle r="12" fill="#38BDF8" fillOpacity="0.3" className="animate-ping" />
                <circle r="9" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
                <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                  −
                </text>
              </g>

              {/* Electron 4 (bottom-right) */}
              <g transform="translate(440, 290)">
                <circle r="12" fill="#38BDF8" fillOpacity="0.3" className="animate-ping" />
                <circle r="9" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
                <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                  −
                </text>
              </g>

              {/* Electron 5 (top center) */}
              <g transform="translate(300, 40)">
                <circle r="12" fill="#38BDF8" fillOpacity="0.3" className="animate-ping" />
                <circle r="9" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
                <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                  −
                </text>
              </g>

              {/* Electron 6 (bottom center) */}
              <g transform="translate(300, 380)">
                <circle r="12" fill="#38BDF8" fillOpacity="0.3" className="animate-ping" />
                <circle r="9" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
                <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                  −
                </text>
              </g>
            </g>

            {/* Central Nucleus Boundary */}
            <circle
              cx="300"
              cy="210"
              r="48"
              fill="#1E1B4B"
              stroke="#6366F1"
              strokeWidth="2"
              strokeDasharray="3 3"
              opacity="0.8"
            />

            {/* Protons inside nucleus */}
            <g
              className="transition-opacity duration-300"
              opacity={activeParticle === 'electron' || activeParticle === 'neutron' ? 0.2 : 1}
            >
              {[
                { x: 285, y: 195 },
                { x: 315, y: 200 },
                { x: 295, y: 225 },
                { x: 310, y: 220 },
                { x: 285, y: 215 },
                { x: 300, y: 185 },
              ].map((pos, idx) => (
                <g key={`p-${idx}`} transform={`translate(${pos.x}, ${pos.y})`}>
                  <circle r="11" fill="#DC2626" stroke="#F87171" strokeWidth="1.5" />
                  <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                    +
                  </text>
                </g>
              ))}
            </g>

            {/* Neutrons inside nucleus */}
            <g
              className="transition-opacity duration-300"
              opacity={activeParticle === 'electron' || activeParticle === 'proton' ? 0.2 : 1}
            >
              {[
                { x: 300, y: 205 },
                { x: 275, y: 205 },
                { x: 325, y: 210 },
                { x: 295, y: 235 },
                { x: 312, y: 190 },
                { x: 288, y: 180 },
              ].map((pos, idx) => (
                <g key={`n-${idx}`} transform={`translate(${pos.x}, ${pos.y})`}>
                  <circle r="10" fill="#64748B" stroke="#94A3B8" strokeWidth="1.5" />
                  <text y="3" textAnchor="middle" fill="#F1F5F9" fontSize="9" fontWeight="bold">
                    0
                  </text>
                </g>
              ))}
            </g>

            {/* LABELS & POINTERS */}
            {/* Pointer 1: Elektroni (top-right) */}
            <path d="M 460 110 L 510 70 L 580 70" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
            <circle cx="460" cy="110" r="3" fill="#38BDF8" />
            <text x="580" y="65" textAnchor="end" fill="#38BDF8" fontSize="13" fontWeight="bold">
              Elektroni (e⁻)
            </text>
            <text x="580" y="82" textAnchor="end" fill="#94A3B8" fontSize="10">
              Ngarkesë negative (−)
            </text>

            {/* Pointer 2: Shtresa / Orbita (bottom-right) */}
            <path d="M 470 240 L 520 240 L 580 240" fill="none" stroke="#818CF8" strokeWidth="1.5" />
            <circle cx="470" cy="240" r="3" fill="#818CF8" />
            <text x="580" y="235" textAnchor="end" fill="#A5B4FC" fontSize="13" fontWeight="bold">
              Shtresa elektronike
            </text>
            <text x="580" y="252" textAnchor="end" fill="#94A3B8" fontSize="10">
              Hapësirë ku sillen elektronet
            </text>

            {/* Pointer 3: Protoni (left side) */}
            <path d="M 285 195 L 210 160 L 50 160" fill="none" stroke="#F87171" strokeWidth="1.5" />
            <circle cx="285" cy="195" r="3" fill="#F87171" />
            <text x="50" y="155" textAnchor="start" fill="#F87171" fontSize="13" fontWeight="bold">
              Protoni (p⁺)
            </text>
            <text x="50" y="172" textAnchor="start" fill="#94A3B8" fontSize="10">
              Ngarkesë pozitive (+)
            </text>

            {/* Pointer 4: Neutroni (left bottom) */}
            <path d="M 275 215 L 210 240 L 50 240" fill="none" stroke="#94A3B8" strokeWidth="1.5" />
            <circle cx="275" cy="215" r="3" fill="#94A3B8" />
            <text x="50" y="235" textAnchor="start" fill="#E2E8F0" fontSize="13" fontWeight="bold">
              Neutroni (n⁰)
            </text>
            <text x="50" y="252" textAnchor="start" fill="#94A3B8" fontSize="10">
              Pa ngarkesë (neutral)
            </text>

            {/* Pointer 5: Bërthama e atomit (center bottom) */}
            <path d="M 300 258 L 300 310 L 260 310" fill="none" stroke="#C084FC" strokeWidth="1.5" />
            <circle cx="300" cy="258" r="3" fill="#C084FC" />
            <text x="250" y="306" textAnchor="end" fill="#C084FC" fontSize="13" fontWeight="bold">
              Bërthama
            </text>
            <text x="250" y="322" textAnchor="end" fill="#94A3B8" fontSize="10">
              Protone + Neutrone
            </text>
          </svg>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 text-center text-xs text-slate-400">
          Shembulli i mësipërm paraqet modelin e atomit të Karbonit (me 6 protone, 6 neutrone dhe 6 elektrone).
        </div>
      </div>

      {/* Mandatory PEGI Curriculum Table: Grimca | Vendndodhja | Ngarkesa */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Tabela përmbledhëse e grimcave nënatomike
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Kjo është tabela standarde që kërkohet gjithmonë në testet e klasës së 9-të:
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/90 text-slate-700 text-xs sm:text-sm font-bold uppercase tracking-wider border-b border-slate-200">
                <th className="py-4 px-6">Grimca</th>
                <th className="py-4 px-6">Vendndodhja</th>
                <th className="py-4 px-6">Ngarkesa</th>
                <th className="py-4 px-6 hidden sm:table-cell">Masa relative</th>
                <th className="py-4 px-6 hidden md:table-cell">Roli kryesor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {SUBATOMIC_PARTICLES.map((particle) => (
                <tr
                  key={particle.name}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-3 h-3 rounded-full ${particle.bgClass}`} />
                      <span className="font-bold text-slate-900">
                        {particle.name} ({particle.symbol})
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-700">
                    {particle.location}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                        particle.chargeValue === 1
                          ? 'bg-red-100 text-red-700 border border-red-200'
                          : particle.chargeValue === -1
                          ? 'bg-blue-100 text-blue-700 border border-blue-200'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {particle.charge}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-mono text-xs text-slate-600 hidden sm:table-cell">
                    {particle.massRel}
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-500 hidden md:table-cell">
                    {particle.descriptionSq}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Crucial Concept Callout: Elektro-neutraliteti */}
      <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-4">
        <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div className="space-y-1 text-sm">
          <h4 className="font-bold text-amber-900 text-base">
            Rregull i artë: Pse atomi në gjendje normale nuk ka ngarkesë?
          </h4>
          <p className="text-amber-800/90 leading-relaxed">
            Në një atom neutral, numri i protoneve pozitive (+) është gjithmonë i barabartë me numrin e elektroneve negative (−). Për shembull: nëse një atom ka 6 ngarkesa pozitive (+6) dhe 6 ngarkesa negative (−6), shuma e tyre bëhet <strong>(+6) + (−6) = 0</strong>. Prandaj atomi është <strong>elektro-neutral</strong>!
          </p>
        </div>
      </div>
    </div>
  );
};
