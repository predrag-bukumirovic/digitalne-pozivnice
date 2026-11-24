import styles from "./template.module.css";

/* Drawings for the "Somot" template. Fixed ids are fine: the hero appears once per page. */

/** Same numbers on the server and in the browser, so the needles never shift on hydration. */
function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const TILE = 400;
const branchY = (x: number) => 46 + 7 * Math.sin((2 * Math.PI * x) / TILE);

/* Fir needles as three paths (dark, mid, light), drawn once more across the tile's edges so the tiles join seamlessly. */
const needles = (() => {
  const random = seeded(7);
  const layers = ["", "", ""];
  for (let x = 0; x < TILE; x += 4) {
    for (let k = 0; k < 6; k++) {
      const layer = k < 2 ? 0 : k < 4 ? 1 : 2;
      const angle = random() * Math.PI * 2;
      const length = (layer === 2 ? 10 : 15) + random() * 16;
      const sx = x + (random() - 0.5) * 6;
      const sy = branchY(sx) + (random() - 0.5) * 8;
      const dx = Math.cos(angle) * length;
      const dy = Math.sin(angle) * length * 0.85;
      for (const shift of [-TILE, 0, TILE]) {
        const ax = sx + shift;
        if (Math.max(ax, ax + dx) < -2 || Math.min(ax, ax + dx) > TILE + 2) continue;
        layers[layer] += `M${ax.toFixed(1)} ${sy.toFixed(1)}l${dx.toFixed(1)} ${dy.toFixed(1)}`;
      }
    }
  }
  return layers;
})();

const BAUBLES = [
  { x: 62, r: 12, fill: "url(#somot-red)" },
  { x: 158, r: 9, fill: "url(#somot-gold)" },
  { x: 252, r: 13, fill: "url(#somot-red)" },
  { x: 338, r: 8.5, fill: "url(#somot-gold)" },
];

const LIGHTS = [18, 48, 96, 128, 186, 214, 236, 284, 306, 362, 388];
const BERRIES = [110, 206, 300, 374];

/** A fir garland with baubles and warm lights, tiled across the bottom of the hero. */
export function Garland({ className, tileClassName }: { className?: string; tileClassName?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg width="0" height="0" style={{ position: "absolute" }} focusable="false">
        <defs>
          <radialGradient id="somot-red" cx="35%" cy="30%" r="75%">
            <stop offset="0" stopColor="#f0566a" />
            <stop offset="0.45" stopColor="#b5142b" />
            <stop offset="1" stopColor="#4c0410" />
          </radialGradient>
          <radialGradient id="somot-gold" cx="35%" cy="30%" r="75%">
            <stop offset="0" stopColor="#fff2c4" />
            <stop offset="0.45" stopColor="#d9a84e" />
            <stop offset="1" stopColor="#6e4613" />
          </radialGradient>
          <radialGradient id="somot-glow">
            <stop offset="0" stopColor="#ffe7a6" stopOpacity="0.85" />
            <stop offset="1" stopColor="#ffe7a6" stopOpacity="0" />
          </radialGradient>
          <symbol id="somot-garland" viewBox={`0 0 ${TILE} 120`}>
            <g fill="none" strokeLinecap="round" strokeWidth="2.3">
              <path d={needles[0]} stroke="#123521" />
              <path d={needles[1]} stroke="#1f5230" />
              <path d={needles[2]} stroke="#3b7a44" />
            </g>
            {BERRIES.map((x) => (
              <g key={x} fill="#c4162e">
                <circle cx={x} cy={branchY(x) - 3} r="3.2" />
                <circle cx={x + 5} cy={branchY(x) + 1} r="2.8" />
                <circle cx={x - 1} cy={branchY(x) + 4} r="2.6" />
              </g>
            ))}
            {BAUBLES.map(({ x, r, fill }) => {
              const cy = branchY(x) + r + 8;
              return (
                <g key={x}>
                  <path d={`M${x} ${branchY(x)}V${cy - r}`} stroke="#c9a35a" strokeWidth="1" />
                  <rect x={x - r * 0.32} y={cy - r - 3.5} width={r * 0.64} height="4.5" rx="1" fill="#d8b56c" />
                  <circle cx={x} cy={cy} r={r} fill={fill} />
                  <ellipse cx={x - r * 0.38} cy={cy - r * 0.4} rx={r * 0.22} ry={r * 0.13} fill="#fff" opacity="0.7" transform={`rotate(-35 ${x - r * 0.38} ${cy - r * 0.4})`} />
                </g>
              );
            })}
            {LIGHTS.map((x, i) => {
              const cy = branchY(x) + ((i % 3) - 1) * 9;
              return (
                <g key={x}>
                  <circle cx={x} cy={cy} r="7" fill="url(#somot-glow)" />
                  <circle cx={x} cy={cy} r="1.9" fill="#fff6d8" />
                </g>
              );
            })}
          </symbol>
        </defs>
      </svg>
      {Array.from({ length: 7 }, (_, i) => (
        <svg key={i} className={tileClassName} viewBox={`0 0 ${TILE} 120`} focusable="false">
          <use href="#somot-garland" />
        </svg>
      ))}
    </div>
  );
}

/** A four-pointed glint. */
function Sparkle({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size / 8})`}>
      <path
        className={styles.twinkle}
        style={{ animationDelay: `${delay}s` }}
        d="M0-8C.9-2.2 2.2-.9 8 0 2.2.9.9 2.2 0 8-.9 2.2-2.2.9-8 0-2.2-.9-.9-2.2 0-8Z"
        fill="#f6dd9f"
      />
    </g>
  );
}

const BUBBLES = [
  [-30, 24, 1.6, 0],
  [-14, 26, 1.2, 0.9],
  [-2, 22, 1.8, 1.7],
  [12, 25, 1.3, 0.4],
  [26, 23, 1.5, 1.2],
  [36, 20, 1.1, 2.1],
] as const;

/** One champagne coupe, rim centered on (0, 0). */
function Coupe({ transform }: { transform: string }) {
  return (
    <g transform={transform}>
      {/* bowl */}
      <path d="M-56 0C-54 38 54 38 56 0A56 9 0 0 1-56 0Z" fill="rgba(255,244,228,0.1)" />
      {/* champagne */}
      <path d="M-49 8C-46 34 46 34 49 8A49 7.5 0 0 1-49 8Z" fill="url(#somot-champagne)" />
      <ellipse cx="0" cy="8" rx="49" ry="7.5" fill="#fbe6ad" opacity="0.92" />
      <g fill="#fff8e2">
        {BUBBLES.map(([x, y, r, delay]) => (
          <circle key={x} className={styles.bubble} style={{ animationDelay: `${delay}s` }} cx={x} cy={y} r={r} />
        ))}
      </g>
      {/* glass outline and shine */}
      <path d="M-56 0C-54 38 54 38 56 0" fill="none" stroke="rgba(255,240,222,0.75)" strokeWidth="1.3" />
      <ellipse cx="0" cy="0" rx="56" ry="9" fill="none" stroke="rgba(255,240,222,0.8)" strokeWidth="1.3" />
      <path d="M-44 9C-40 22-28 27-16 29" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity="0.55" />
      {/* stem and foot */}
      <ellipse cx="0" cy="29.5" rx="6.5" ry="3" fill="rgba(255,240,222,0.55)" />
      <path d="M-2.6 31C-2 52-2.2 86-1.8 104H1.8C2.2 86 2 52 2.6 31Z" fill="rgba(255,240,222,0.55)" />
      <path d="M-.6 34V100" stroke="#fff" strokeWidth="0.8" opacity="0.7" />
      <ellipse cx="0" cy="106" rx="34" ry="6.5" fill="rgba(255,244,228,0.16)" stroke="rgba(255,240,222,0.75)" strokeWidth="1.2" />
      <path d="M-26 104.5C-14 102.5 8 102.5 22 104" fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </g>
  );
}

/** Two coupes meeting in a toast, with a splash and glints where the rims touch. */
export function Glasses({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="-160 -70 320 210" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="somot-champagne" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f8d98a" />
          <stop offset="0.6" stopColor="#d8a347" />
          <stop offset="1" stopColor="#a8742a" />
        </linearGradient>
      </defs>
      <Coupe transform="translate(-55 14) rotate(13)" />
      <Coupe transform="translate(55 14) rotate(-13)" />
      {/* splash */}
      <g fill="#f8e2a6">
        <circle cx="-7" cy="-2" r="2.6" />
        <circle cx="5" cy="-9" r="2.1" />
        <circle cx="-2" cy="-20" r="1.7" />
        <circle cx="10" cy="-24" r="1.3" />
        <circle cx="-12" cy="-16" r="1.4" />
        <circle cx="16" cy="-6" r="1.6" />
      </g>
      <Sparkle x={0} y={-38} size={11} delay={0} />
      <Sparkle x={-38} y={-54} size={6} delay={0.9} />
      <Sparkle x={42} y={-48} size={7} delay={1.6} />
      <Sparkle x={-112} y={-30} size={5} delay={0.5} />
      <Sparkle x={118} y={-22} size={5.5} delay={2.1} />
    </svg>
  );
}

/** A satin bow above the closing message. */
export function Bow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 104" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="somot-satin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7e2ae" />
          <stop offset="0.5" stopColor="#d4a352" />
          <stop offset="1" stopColor="#8f6322" />
        </linearGradient>
      </defs>
      <g fill="url(#somot-satin)">
        <path d="M74 52C62 70 52 84 40 100L54 97 59 104C68 88 75 72 80 55Z" />
        <path d="M86 52C98 70 108 84 120 100L106 97 101 104C92 88 85 72 80 55Z" />
        <path d="M80 48C60 16 18 8 12 30 6 52 48 64 80 48Z" />
        <path d="M80 48C100 16 142 8 148 30 154 52 112 64 80 48Z" />
      </g>
      <g fill="none" stroke="#7a521b" strokeWidth="1.4" strokeLinecap="round" opacity="0.55">
        <path d="M74 46C58 30 36 22 22 28" />
        <path d="M86 46C102 30 124 22 138 28" />
        <path d="M70 52C50 54 32 50 22 42" />
        <path d="M90 52C110 54 128 50 138 42" />
      </g>
      <rect x="70" y="39" width="20" height="19" rx="6" fill="url(#somot-satin)" stroke="#7a521b" strokeOpacity="0.5" />
    </svg>
  );
}
