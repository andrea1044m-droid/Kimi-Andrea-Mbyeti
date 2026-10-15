import React, { useState } from 'react';
import { Play, Pause, Info } from 'lucide-react';

interface AtomCanvasProps {
  protons: number;
  neutrons: number;
  electrons: number;
  symbol: string;
  elementName: string;
  shells: number[];
  size?: number;
  showLabels?: boolean;
}

export const AtomCanvas: React.FC<AtomCanvasProps> = ({
  protons,
  neutrons,
  electrons,
  symbol,
  elementName,
  shells,
  size = 460,
  showLabels = true,
}) => {
  const [isRotating, setIsRotating] = useState(true);
  const [selectedShell, setSelectedShell] = useState<number | null>(null);

  const center = size / 2;
  const nucleusRadius = Math.max(34, Math.min(52, 28 + Math.sqrt(protons + neutrons) * 3));

  // Radii for shells (K, L, M, N)
  const shellRadii = [
    nucleusRadius + 44, // K (shell 1)
    nucleusRadius + 88, // L (shell 2)
    nucleusRadius + 132, // M (shell 3)
    nucleusRadius + 172, // N (shell 4)
  ];

  const shellNames = ['K (1)', 'L (2)', 'M (3)', 'N (4)'];

  return (
    <div className="relative flex flex-col items-center justify-center p-3 bg-gradient-to-b from-slate-900/95 via-slate-900 to-indigo-950/90 rounded-2xl border border-indigo-500/20 shadow-xl overflow-hidden text-white">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* Top Controls Overlay */}
      <div className="w-full flex items-center justify-between z-10 mb-2 px-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            Modeli i Bohr-it
          </span>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            {electrons} e⁻ në {shells.length} {shells.length === 1 ? 'shtresë' : 'shtresa'}
          </span>
        </div>

        <button
          onClick={() => setIsRotating(!isRotating)}
          className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition-colors"
          title={isRotating ? 'Pusho rrotullimin' : 'Aktivizo rrotullimin'}
        >
          {isRotating ? (
            <>
              <Pause className="w-3.5 h-3.5 text-blue-400" />
              <span>Ndalo</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-emerald-400" />
              <span>Lëviz</span>
            </>
          )}
        </button>
      </div>

      {/* Main SVG Atom */}
      <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-full select-none"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Gradients */}
            <radialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#818CF8" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#4F46E5" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="electronGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#67E8F9" stopOpacity="1" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0891B2" stopOpacity="0" />
            </radialGradient>

            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Nucleus diffuse background glow */}
          <circle
            cx={center}
            cy={center}
            r={nucleusRadius * 1.5}
            fill="url(#nucleusGlow)"
            className="pointer-events-none"
          />

          {/* Orbital Shell Rings */}
          {shells.map((count, index) => {
            const radius = shellRadii[index] || shellRadii[shellRadii.length - 1];
            const isHovered = selectedShell === index;
            const shellRotationSpeed = [28, 38, 48, 58][index] || 40;
            const rotationDirection = index % 2 === 0 ? 'normal' : 'reverse';

            return (
              <g key={`shell-${index}`}>
                {/* Orbit track */}
                <circle
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="none"
                  stroke={isHovered ? '#60A5FA' : '#475569'}
                  strokeWidth={isHovered ? '2' : '1.2'}
                  strokeDasharray={isHovered ? 'none' : '4 3'}
                  className="transition-all duration-200 cursor-pointer"
                  opacity={isHovered ? 1 : 0.65}
                  onMouseEnter={() => setSelectedShell(index)}
                  onMouseLeave={() => setSelectedShell(null)}
                />

                {/* Shell text label */}
                {showLabels && (
                  <text
                    x={center}
                    y={center - radius - 5}
                    textAnchor="middle"
                    className="text-[10px] font-mono fill-slate-400 select-none pointer-events-none"
                  >
                    {shellNames[index]}: {count} e⁻
                  </text>
                )}

                {/* Orbiting Electrons Group */}
                <g
                  style={{
                    transformOrigin: `${center}px ${center}px`,
                    animation: isRotating
                      ? `spin-slow ${shellRotationSpeed}s linear infinite ${rotationDirection}`
                      : 'none',
                  }}
                >
                  {Array.from({ length: count }).map((_, eIdx) => {
                    const angle = (2 * Math.PI * eIdx) / count;
                    const ex = center + radius * Math.cos(angle);
                    const ey = center + radius * Math.sin(angle);

                    return (
                      <g
                        key={`electron-${index}-${eIdx}`}
                        className="cursor-pointer group"
                      >
                        {/* Glow halo */}
                        <circle
                          cx={ex}
                          cy={ey}
                          r="9"
                          fill="url(#electronGlow)"
                          opacity="0.6"
                        />
                        {/* Electron body */}
                        <circle
                          cx={ex}
                          cy={ey}
                          r="5.5"
                          fill="#38BDF8"
                          stroke="#FFFFFF"
                          strokeWidth="1.2"
                          filter="url(#neonGlow)"
                        />
                        {/* Minus sign */}
                        <text
                          x={ex}
                          y={ey + 2.5}
                          textAnchor="middle"
                          fill="#0F172A"
                          fontSize="8"
                          fontWeight="bold"
                          className="pointer-events-none select-none font-sans"
                        >
                          −
                        </text>
                      </g>
                    );
                  })}
                </g>
              </g>
            );
          })}

          {/* Central Nucleus Core */}
          <g
            className="cursor-pointer group"
            transform={`translate(${center}, ${center})`}
          >
            {/* Nucleus boundary circle */}
            <circle
              r={nucleusRadius}
              fill="#1E1B4B"
              stroke="#6366F1"
              strokeWidth="2.5"
              className="drop-shadow-lg transition-transform group-hover:scale-105"
            />

            {/* If small proton count (<= 8), draw individual colored spheres */}
            {protons <= 8 && (
              <g opacity="0.9">
                {Array.from({ length: protons }).map((_, pIdx) => {
                  const pAngle = (2 * Math.PI * pIdx) / protons;
                  const dist = nucleusRadius * 0.42;
                  const px = Math.cos(pAngle) * dist;
                  const py = Math.sin(pAngle) * dist;
                  return (
                    <circle
                      key={`p-sphere-${pIdx}`}
                      cx={px}
                      cy={py}
                      r="6.5"
                      fill="#EF4444"
                      stroke="#FCA5A5"
                      strokeWidth="1"
                    />
                  );
                })}
                {Array.from({ length: Math.min(neutrons, 8) }).map((_, nIdx) => {
                  const nAngle = (2 * Math.PI * nIdx) / Math.min(neutrons, 8) + 0.5;
                  const dist = nucleusRadius * 0.22;
                  const nx = Math.cos(nAngle) * dist;
                  const ny = Math.sin(nAngle) * dist;
                  return (
                    <circle
                      key={`n-sphere-${nIdx}`}
                      cx={nx}
                      cy={ny}
                      r="5.5"
                      fill="#94A3B8"
                      stroke="#CBD5E1"
                      strokeWidth="1"
                    />
                  );
                })}
              </g>
            )}

            {/* Nucleus Central Badge */}
            <rect
              x="-24"
              y="-15"
              width="48"
              height="30"
              rx="6"
              fill="#0F172A"
              fillOpacity="0.85"
              stroke="#818CF8"
              strokeWidth="1"
            />
            <text
              y="5"
              textAnchor="middle"
              className="text-base font-bold fill-white select-none font-mono"
            >
              {symbol}
            </text>

            <text
              y="25"
              textAnchor="middle"
              className="text-[9px] font-mono fill-indigo-200 select-none tracking-tight"
            >
              Z={protons} | N={neutrons}
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Summary Bar */}
      <div className="w-full mt-2 pt-2 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-red-950/30 border border-red-500/20 rounded-lg p-1.5">
          <div className="text-red-400 font-medium">Protone (p⁺)</div>
          <div className="text-base font-bold text-white font-mono">{protons}</div>
        </div>
        <div className="bg-slate-800/50 border border-slate-700/40 rounded-lg p-1.5">
          <div className="text-slate-300 font-medium">Neutrone (n⁰)</div>
          <div className="text-base font-bold text-white font-mono">{neutrons}</div>
        </div>
        <div className="bg-blue-950/30 border border-blue-500/20 rounded-lg p-1.5">
          <div className="text-blue-400 font-medium">Elektrone (e⁻)</div>
          <div className="text-base font-bold text-white font-mono">{electrons}</div>
        </div>
      </div>

      {/* Legend footnote */}
      <div className="w-full mt-2 flex items-center justify-between text-[11px] text-slate-400 px-1">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> p⁺ (+1)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400" /> n⁰ (0)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" /> e⁻ (−1)
          </span>
        </div>
        <span className="text-indigo-300 font-medium">{elementName}</span>
      </div>
    </div>
  );
};
