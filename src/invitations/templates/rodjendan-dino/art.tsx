import type { CSSProperties, ReactNode } from "react";
import styles from "./template.module.css";

// Watercolor-style drawings for the dinosaur birthday template. All decorative and id-free,
// so the same drawing can appear many times on one page (gallery cards, footer strip).

const C = {
  leaf: "#6aa84f",
  leafDark: "#3f7f35",
  leafLight: "#a9d26f",
  leafPale: "#dcedc0",
  brachio: "#86c25e",
  brachioMid: "#6eaa4a",
  brachioDark: "#4c8a37",
  brachioLight: "#d3eaa9",
  orange: "#f08c3e",
  orangeDark: "#d0602a",
  orangeLight: "#f9c995",
  spike: "#d9532c",
  yellow: "#f3bf4f",
  yellowDark: "#d79a2c",
  yellowLight: "#fbe2a6",
  teal: "#5fb8a8",
  tealDark: "#3e8f82",
  tealLight: "#bfe6dc",
  sky: "#8cc3e0",
  trunk: "#b07a48",
  trunkDark: "#7f542e",
  rock: "#b98560",
  rockDark: "#8a5a38",
  egg: "#f8f0de",
  eggDark: "#d9c49f",
  twine: "#c9a36a",
  smoke: "#ece7df",
  ink: "#2e3a26",
  cheek: "#f39b93",
};

const ell = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx - rx} ${cy}a${rx} ${ry} 0 1 0 ${2 * rx} 0a${rx} ${ry} 0 1 0 ${-2 * rx} 0Z`;

const rr = (x: number, y: number, w: number, h: number, r: number) =>
  `M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 ${-r} ${r}h${-(w - 2 * r)}a${r} ${r} 0 0 1 ${-r} ${-r}v${-(h - 2 * r)}a${r} ${r} 0 0 1 ${r} ${-r}Z`;

const mix = (a: string, b: string, t: number) =>
  "#" +
  [1, 3, 5]
    .map((i) => {
      const [x, y] = [
        parseInt(a.slice(i, i + 2), 16),
        parseInt(b.slice(i, i + 2), 16),
      ];
      return Math.round(x + (y - x) * t)
        .toString(16)
        .padStart(2, "0");
    })
    .join("");

// Colors that get a watercolor wash: pale in the middle, pooled pigment at the edge.
const SHADED = [
  C.leaf,
  C.leafLight,
  C.leafDark,
  C.brachio,
  C.brachioMid,
  C.orange,
  C.orangeLight,
  C.spike,
  C.yellow,
  C.yellowDark,
  C.teal,
  C.tealLight,
  C.tealDark,
  C.trunk,
  C.rock,
  C.egg,
  C.smoke,
  C.sky,
];
const shade = (hex: string) =>
  SHADED.includes(hex) ? `url(#dino-${hex.slice(1)})` : hex;

/** Painted, slightly wobbly edges. Applied to whole groups, never to faces. */
const WOBBLE = "url(#dino-wobble)";

/**
 * Every SVG of this template carries its own copy of these definitions. The ids repeat when
 * several drawings share a page, which is harmless: the copies are identical.
 */
function Defs() {
  return (
    <defs>
      <filter id="dino-wobble" x="-8%" y="-8%" width="116%" height="116%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.045"
          numOctaves="2"
          seed="7"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="3.5"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      {SHADED.map((hex) => (
        <radialGradient
          key={hex}
          id={`dino-${hex.slice(1)}`}
          cx="42%"
          cy="36%"
          r="74%"
        >
          <stop offset="0" stopColor={mix(hex, "#ffffff", 0.42)} />
          <stop offset="0.6" stopColor={hex} />
          <stop offset="1" stopColor={mix(hex, "#000000", 0.1)} />
        </radialGradient>
      ))}
    </defs>
  );
}

/** A darker rim where the paint pooled, then the shaded wash on top. */
function Wash({
  d,
  fill,
  edge,
  w = 2.6,
}: {
  d: string[];
  fill: string;
  edge: string;
  w?: number;
}) {
  return (
    <>
      <g
        fill={edge}
        stroke={edge}
        strokeWidth={w}
        strokeLinejoin="round"
        opacity={0.65}
      >
        {d.map((p, i) => (
          <path key={i} d={p} />
        ))}
      </g>
      <g fill={shade(fill)}>
        {d.map((p, i) => (
          <path key={i} d={p} />
        ))}
      </g>
    </>
  );
}

function Glow({ d, opacity = 0.3 }: { d: string; opacity?: number }) {
  return <path d={d} fill="#fff" opacity={opacity} />;
}

function Eye({ x, y, r = 5 }: { x: number; y: number; r?: number }) {
  return (
    <>
      <ellipse cx={x} cy={y} rx={r * 0.82} ry={r} fill={C.ink} />
      <circle cx={x + r * 0.28} cy={y - r * 0.38} r={r * 0.34} fill="#fff" />
    </>
  );
}

function Line({ d, w = 2.6 }: { d: string; w?: number }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={C.ink}
      strokeWidth={w}
      strokeLinecap="round"
    />
  );
}

function Cheek({ x, y, r = 6 }: { x: number; y: number; r?: number }) {
  return (
    <ellipse cx={x} cy={y} rx={r} ry={r * 0.62} fill={C.cheek} opacity={0.8} />
  );
}

/* ---------- Plants ---------- */

/** Palm frond along +x, drooping toward +y, with leaflet notches on both edges. */
function frond(L: number, droop: number) {
  const n = 16;
  const lift = -L * 0.18;
  const end = L * droop;
  const top: string[] = [];
  const bottom: string[] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const u = 1 - t;
    const px = 2 * u * t * L * 0.5 + t * t * L;
    const py = 2 * u * t * lift + t * t * end;
    const dx = 2 * u * L * 0.5 + 2 * t * L * 0.5;
    const dy = 2 * u * lift + 2 * t * (end - lift);
    const m = Math.hypot(dx, dy);
    const [nx, ny] = [-dy / m, dx / m];
    const w =
      L * 0.17 * Math.pow(Math.sin(Math.PI * t), 0.7) * (i % 2 ? 1 : 0.42);
    top.push(`${(px - nx * w).toFixed(1)} ${(py - ny * w).toFixed(1)}`);
    bottom.push(`${(px + nx * w).toFixed(1)} ${(py + ny * w).toFixed(1)}`);
  }
  return {
    shape: `M${top.join("L")}L${bottom.reverse().join("L")}Z`,
    rib: `M0 0Q${L * 0.5} ${lift} ${L} ${end}`,
  };
}

function Frond({
  L,
  droop,
  fill,
  edge,
  at = "",
}: {
  L: number;
  droop: number;
  fill: string;
  edge: string;
  at?: string;
}) {
  const { shape, rib } = frond(L, droop);
  return (
    <g transform={at}>
      <Wash d={[shape]} fill={fill} edge={edge} w={2.2} />
      <path d={rib} fill="none" stroke={edge} strokeWidth={1.6} opacity={0.7} />
    </g>
  );
}

/** Smooth banana-style leaf along +x. */
function Leaf({
  L,
  W,
  fill,
  edge,
  at = "",
}: {
  L: number;
  W: number;
  fill: string;
  edge: string;
  at?: string;
}) {
  const veins = [0.25, 0.45, 0.65].map((t) => {
    const x = L * t;
    return `M${x} 0l${L * 0.1} ${-W * 0.55}M${x} 0l${L * 0.1} ${W * 0.55}`;
  });
  return (
    <g transform={at}>
      <Wash
        d={[
          `M0 0C${L * 0.28} ${-W} ${L * 0.74} ${-W} ${L} 0C${L * 0.74} ${W} ${L * 0.28} ${W} 0 0Z`,
        ]}
        fill={fill}
        edge={edge}
        w={2.2}
      />
      <path
        d={`M0 0L${L * 0.96} 0${veins.join("")}`}
        fill="none"
        stroke={edge}
        strokeWidth={1.4}
        opacity={0.55}
      />
    </g>
  );
}

/** Fan of thin pointed leaves, the yellow-orange accent in the garland. */
function Spikes({
  L,
  fill,
  edge,
  at = "",
}: {
  L: number;
  fill: string;
  edge: string;
  at?: string;
}) {
  const blades = [-38, -19, 0, 19, 38].map((a, i) => {
    const len = L * (i === 2 ? 1 : i % 2 ? 0.86 : 0.7);
    return {
      a,
      d: `M0 0Q${len * 0.5} ${-len * 0.09} ${len} 0Q${len * 0.5} ${len * 0.09} 0 0Z`,
    };
  });
  return (
    <g transform={at}>
      {blades.map(({ a, d }) => (
        <g key={a} transform={`rotate(${a})`}>
          <Wash d={[d]} fill={fill} edge={edge} w={1.6} />
        </g>
      ))}
    </g>
  );
}

function Palm({
  x,
  y,
  h,
  lean = 0,
  s = 1,
}: {
  x: number;
  y: number;
  h: number;
  lean?: number;
  s?: number;
}) {
  const top = [x + lean, y - h];
  const trunk = `M${x - 9 * s} ${y}Q${x - 5 + lean * 0.3} ${y - h / 2} ${top[0] - 4 * s} ${top[1]}L${top[0] + 4 * s} ${top[1]}Q${x + 7 + lean * 0.3} ${y - h / 2} ${x + 9 * s} ${y}Z`;
  const rings = Array.from({ length: 7 }, (_, i) => {
    const t = (i + 1) / 8;
    const cx = x + lean * t * t;
    const cy = y - h * t;
    const r = (9 - 4 * t) * s;
    return `M${cx - r} ${cy + 3}q${r} ${-5} ${2 * r} 0`;
  });
  const crown = `translate(${top[0]} ${top[1]}) scale(${s})`;
  return (
    <g filter={WOBBLE}>
      <Wash d={[trunk]} fill={C.trunk} edge={C.trunkDark} w={2.4} />
      <path
        d={rings.join("")}
        fill="none"
        stroke={C.trunkDark}
        strokeWidth={1.6}
        opacity={0.6}
      />
      <g transform={crown}>
        <Frond
          L={104}
          droop={0.62}
          fill={C.leafDark}
          edge={C.leafDark}
          at="rotate(-58)"
        />
        <Frond
          L={104}
          droop={0.62}
          fill={C.leafDark}
          edge={C.leafDark}
          at="scale(-1 1) rotate(-58)"
        />
        <Frond
          L={118}
          droop={0.55}
          fill={C.leaf}
          edge={C.leafDark}
          at="rotate(-22)"
        />
        <Frond
          L={118}
          droop={0.55}
          fill={C.leaf}
          edge={C.leafDark}
          at="scale(-1 1) rotate(-22)"
        />
        <Frond
          L={100}
          droop={0.5}
          fill={C.leafLight}
          edge={C.leaf}
          at="rotate(12)"
        />
        <Frond
          L={100}
          droop={0.5}
          fill={C.leafLight}
          edge={C.leaf}
          at="scale(-1 1) rotate(12)"
        />
        <circle r={9} fill={C.trunkDark} />
      </g>
    </g>
  );
}

function Tuft({
  x,
  y,
  s = 1,
  fill = C.leaf,
  edge = C.leafDark,
}: {
  x: number;
  y: number;
  s?: number;
  fill?: string;
  edge?: string;
}) {
  const blades = [
    [-48, 34],
    [-26, 44],
    [-6, 50],
    [14, 46],
    [34, 38],
    [52, 28],
  ].map(
    ([a, len]) =>
      `M-3 0Q${a * 0.2} ${-len * 0.55} ${a * 0.55} ${-len}Q${a * 0.2 + 4} ${-len * 0.5} 3 0Z`,
  );
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} filter={WOBBLE}>
      <Wash d={blades} fill={fill} edge={edge} w={1.6} />
    </g>
  );
}

function Bush({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} filter={WOBBLE}>
      <Wash
        d={[ell(-34, -14, 30, 24), ell(30, -14, 32, 24), ell(0, -30, 36, 30)]}
        fill={C.leaf}
        edge={C.leafDark}
      />
      <Glow d={ell(-6, -42, 16, 8)} opacity={0.25} />
      <Leaf
        L={46}
        W={12}
        fill={C.leafLight}
        edge={C.leaf}
        at="translate(-10 -6) rotate(-150)"
      />
      <Leaf
        L={46}
        W={12}
        fill={C.leafLight}
        edge={C.leaf}
        at="translate(10 -6) rotate(-30)"
      />
    </g>
  );
}

/* ---------- Dinosaurs (each in its own little coordinate box, feet on the bottom edge) ---------- */

/** Long-necked one, facing left. Box 0–254 × 0–216. */
function Brachio() {
  return (
    <g>
      <g filter={WOBBLE}>
        <Wash
          d={[rr(116, 182, 22, 32, 9), rr(160, 182, 22, 32, 9)]}
          fill={C.brachioMid}
          edge={C.brachioDark}
        />
        <Wash
          d={[
            ell(52, 46, 30, 23),
            "M58 60C52 95 62 130 92 160L140 150C112 128 92 100 86 52Z",
            ell(140, 168, 66, 40),
            "M196 156C226 162 242 182 254 202C234 198 214 194 190 190Z",
            rr(90, 180, 24, 36, 10),
            rr(184, 178, 24, 36, 10),
          ]}
          fill={C.brachio}
          edge={C.brachioDark}
        />
        <path
          d="M62 68C60 100 72 132 100 160C110 154 86 122 78 66Z"
          fill={C.brachioLight}
          opacity={0.85}
        />
        <g fill={C.brachioDark} opacity={0.4}>
          <circle cx={152} cy={142} r={7} />
          <circle cx={174} cy={152} r={5} />
          <circle cx={130} cy={138} r={4.5} />
          <circle cx={192} cy={168} r={4} />
          <circle cx={86} cy={88} r={3.5} />
        </g>
      </g>
      <Glow d={ell(150, 150, 34, 10)} opacity={0.22} />
      <Glow d={ell(58, 34, 13, 6)} />
      <Line d="M38 42q6-6 12 0" />
      <Cheek x={44} y={55} />
      <Line d="M24 55q6 5 12 1" w={2.2} />
      <circle cx={27} cy={41} r={1.7} fill={C.ink} />
    </g>
  );
}

/** A point just inside an ellipse's edge, with the angle of its outward normal (0° = up). */
function onEdge(cx: number, cy: number, rx: number, ry: number, deg: number, inset = 4) {
  const t = (deg * Math.PI) / 180;
  const [nx, ny] = [Math.cos(t) / rx, Math.sin(t) / ry];
  const m = Math.hypot(nx, ny);
  const [ux, uy] = [nx / m, ny / m];
  return { x: cx + rx * Math.cos(t) - ux * inset, y: cy + ry * Math.sin(t) - uy * inset, a: (Math.atan2(uy, ux) * 180) / Math.PI + 90 };
}

// One even row of plates down the T. rex's back: over the head, down the neck and back, onto the tail.
const HEAD = [94, 56, 42, 34] as const;
const BODY = [70, 120, 36, 40] as const;
const REX_SPIKES = [
  { ...onEdge(...HEAD, -100), s: 0.62 },
  { ...onEdge(...HEAD, -122), s: 0.74 },
  { ...onEdge(...HEAD, -144), s: 0.84 },
  { ...onEdge(...HEAD, -166), s: 0.9 },
  { ...onEdge(...HEAD, 172), s: 0.9 },
  { ...onEdge(...BODY, -140), s: 0.95 },
  { ...onEdge(...BODY, -162), s: 0.95 },
  { ...onEdge(...BODY, 176), s: 0.9 },
  { ...onEdge(...BODY, 154), s: 0.8 },
  { x: 25, y: 136, a: -62, s: 0.66 },
  { x: 12, y: 147, a: -56, s: 0.52 },
];

/** Little T. rex, facing right. Box 0–136 × 0–174. */
function Rex() {
  return (
    <g>
      <g filter={WOBBLE}>
        {REX_SPIKES.map(({ x, y, a, s }) => (
          <g key={`${x}-${y}`} transform={`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${a.toFixed(1)}) scale(${(s * 1.3).toFixed(2)})`}>
            {/* Flat, deeper red-orange: the plates read as a separate row against the body. */}
            <Wash d={["M-10 4C-8-5-4-13 0-16C4-13 8-5 10 4Z"]} fill="#e2572b" edge="#b8431f" w={1.6} />
          </g>
        ))}
        <Wash
          d={[
            "M44 124C24 128 8 142 0 160C20 156 38 150 56 144Z",
            ell(70, 120, 36, 40),
            ell(94, 56, 42, 34),
            "M100 104c10 0 18 6 18 14c-6 2-14-2-20-6Z",
            rr(44, 146, 26, 28, 11),
            rr(76, 148, 26, 26, 11),
          ]}
          fill={C.orange}
          edge={C.orangeDark}
        />
        <path d={ell(82, 126, 19, 27)} fill={C.orangeLight} opacity={0.9} />
        <g
          stroke={C.orangeDark}
          strokeWidth={1.6}
          opacity={0.45}
          fill="none"
          strokeLinecap="round"
        >
          <path d="M70 108q12 3 24 0M68 122q14 3 28 0M70 136q12 3 24 0" />
        </g>
      </g>
      <Glow d={ell(86, 36, 17, 7)} />
      <Eye x={108} y={48} r={6} />
      <Cheek x={116} y={66} r={7} />
      <Line d="M116 74q8 5 16-1" w={2.2} />
      <circle cx={130} cy={46} r={1.8} fill={C.ink} />
    </g>
  );
}

/** Triceratops, facing right. Box -10–152 × 0–122. */
function Trike() {
  const scallops = Array.from({ length: 9 }, (_, i) => {
    const a = (-200 + i * 26) * (Math.PI / 180);
    return ell(104 + Math.cos(a) * 33, 46 + Math.sin(a) * 31, 7, 7);
  });
  return (
    <g>
      <g filter={WOBBLE}>
        <Wash
          d={[ell(104, 46, 36, 34), ...scallops]}
          fill={C.yellowDark}
          edge="#c07f22"
        />
        <path d={ell(106, 48, 25, 23)} fill={C.yellowLight} opacity={0.55} />
        <Wash
          d={[
            "M24 80C10 82-2 90-10 100C6 100 18 96 32 92Z",
            ell(66, 84, 48, 30),
            ell(118, 64, 26, 22),
            rr(34, 100, 20, 22, 8),
            rr(62, 104, 20, 18, 8),
            rr(88, 100, 20, 22, 8),
          ]}
          fill={C.yellow}
          edge={C.yellowDark}
        />
        <Wash
          d={[
            "M106 46L98 22L116 42Z",
            "M126 44L132 20L138 46Z",
            "M140 62L152 50L148 68Z",
          ]}
          fill={C.egg}
          edge={C.eggDark}
          w={2}
        />
        <g fill={C.yellowDark} opacity={0.45}>
          <circle cx={58} cy={68} r={6} />
          <circle cx={78} cy={64} r={4.5} />
          <circle cx={44} cy={80} r={4} />
        </g>
      </g>
      <Glow d={ell(64, 70, 28, 8)} opacity={0.25} />
      <Eye x={124} y={60} r={4.6} />
      <Cheek x={131} y={73} r={5.5} />
      <Line d="M134 79q5 4 10 0" w={2} />
    </g>
  );
}

/** Baby peeking out of its egg. Box 4–68 × 6–86. */
function Hatchling() {
  return (
    <g>
      <Wash
        d={["M26 20l5-9 5 8z", "M35 18l6-10 4 10z", "M44 21l7-7 1 10z"]}
        fill={C.tealDark}
        edge={C.tealDark}
        w={1.4}
      />
      <Wash d={[ell(36, 34, 20, 17)]} fill={C.teal} edge={C.tealDark} />
      <Glow d={ell(30, 24, 8, 4)} />
      <Eye x={29} y={33} r={3.6} />
      <Eye x={43} y={33} r={3.6} />
      <Cheek x={24} y={42} r={3.6} />
      <Cheek x={48} y={42} r={3.6} />
      <Line d="M32 43q4 3 8 0" w={1.8} />
      <Wash
        d={[
          "M6 46L14 40L21 47L28 39L36 47L44 39L51 47L58 40L66 46C68 70 54 86 36 86C18 86 4 70 6 46Z",
        ]}
        fill={C.egg}
        edge={C.eggDark}
      />
      <g fill={C.teal} opacity={0.5}>
        <circle cx={22} cy={60} r={4} />
        <circle cx={46} cy={66} r={5} />
        <circle cx={34} cy={76} r={3} />
        <circle cx={56} cy={54} r={2.6} />
      </g>
    </g>
  );
}

/** Little volcano. Box 0–104 × 22–110; its smoke is a separate, moving layer. */
function Volcano() {
  return (
    <g filter={WOBBLE}>
      <Wash
        d={["M0 110L40 30C46 22 58 22 64 30L104 110Z"]}
        fill={C.rock}
        edge={C.rockDark}
      />
      <Wash
        d={[
          "M42 30C46 42 40 54 47 64C51 52 53 42 62 30Z",
          "M64 32C62 44 70 50 66 60C74 50 72 40 70 34Z",
        ]}
        fill={C.orange}
        edge={C.spike}
        w={1.6}
      />
      <Glow d="M30 60L44 34L50 36L38 66Z" opacity={0.18} />
    </g>
  );
}

/** Pterodactyl gliding to the right. Box -60–36 × -24–14. */
function Ptero() {
  return (
    <g>
      <g filter={WOBBLE}>
        <Wash
          d={[
            "M-2 0C-18-18-42-24-60-20C-48-12-40-2-36 8C-26 3-14 3-2 7Z",
            "M6 0C18-20 36-26 50-24C42-14 36-4 34 6C26 2 16 2 6 7Z",
            ell(2, 4, 12, 8),
            ell(14, -6, 9, 7),
            "M9-11L-4-20L13-13Z",
            "M20-8L36-3L20-1Z",
          ]}
          fill={C.orange}
          edge={C.orangeDark}
          w={2}
        />
        <path
          d="M-6 2C-20-10-36-16-50-18M10 2C20-12 32-18 44-21"
          fill="none"
          stroke={C.orangeDark}
          strokeWidth={1.4}
          opacity={0.5}
        />
      </g>
      <Eye x={16} y={-8} r={2.4} />
      <Cheek x={18} y={-3} r={2.6} />
    </g>
  );
}

/** The volcano's puff of smoke, in the volcano's own coordinates. */
function Smoke() {
  return (
    <g filter={WOBBLE}>
      <Wash
        d={[
          ell(44, 4, 12, 10),
          ell(60, 0, 14, 12),
          ell(52, -12, 13, 11),
          ell(70, -8, 10, 9),
        ]}
        fill={C.smoke}
        edge="#d6cec2"
        w={2}
      />
    </g>
  );
}

function Butterfly({
  at,
  fill,
  edge,
}: {
  at: string;
  fill: string;
  edge: string;
}) {
  return (
    <g transform={at}>
      <Wash
        d={[
          ell(-8, -6, 8, 10),
          ell(8, -6, 8, 10),
          ell(-6, 8, 6, 7),
          ell(6, 8, 6, 7),
        ]}
        fill={fill}
        edge={edge}
        w={1.6}
      />
      <path
        d="M0-10V12M0-10l-4-7M0-10l4-7"
        stroke={C.ink}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </g>
  );
}

/* ---------- Garland ---------- */

type Pennant = "orange" | "teal" | "green" | "yellow";
const PENNANT: Record<Pennant, [string, string]> = {
  orange: [C.orange, C.orangeDark],
  teal: [C.tealLight, C.teal],
  green: [C.leaf, C.leafDark],
  yellow: [C.yellow, C.yellowDark],
};
const ORDER: Pennant[] = ["orange", "teal", "green", "yellow"];

function Flag({
  x,
  y,
  angle,
  kind,
}: {
  x: number;
  y: number;
  angle: number;
  kind: Pennant;
}) {
  const [fill, edge] = PENNANT[kind];
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <Wash d={["M-21 0L21 0L0 52Z"]} fill={fill} edge={edge} w={2} />
      {kind === "green" ? (
        <path
          d="M-12 1V22M-4 1V41M4 1V41M12 1V22"
          stroke={C.leafLight}
          strokeWidth={3.2}
          strokeLinecap="round"
        />
      ) : (
        <g fill="#fff" opacity={0.9}>
          <circle cx={-9} cy={9} r={3} />
          <circle cx={7} cy={10} r={3} />
          <circle cx={-1} cy={22} r={3} />
          <circle cx={3} cy={34} r={2.6} />
        </g>
      )}
    </g>
  );
}

const FOLIAGE: [
  number,
  "frond" | "leaf" | "spikes",
  number,
  number,
  string,
  string,
][] = [
  [8, "frond", 72, 116, C.leaf, C.leafDark],
  [52, "leaf", 104, 96, C.leaf, C.leafDark],
  [92, "spikes", 92, 56, C.yellow, C.yellowDark],
  [128, "frond", 112, 112, C.leafLight, C.leaf],
  [182, "frond", 64, 124, C.leafDark, C.leafDark],
  [236, "leaf", 84, 92, C.leaf, C.leafDark],
  [276, "spikes", 96, 50, C.orange, C.orangeDark],
  [318, "frond", 116, 120, C.leaf, C.leafDark],
  [372, "leaf", 70, 98, C.leafLight, C.leaf],
  [414, "frond", 96, 112, C.leafDark, C.leafDark],
  [466, "spikes", 86, 56, C.yellow, C.yellowDark],
  [506, "frond", 118, 116, C.leaf, C.leafDark],
  [556, "leaf", 76, 100, C.leaf, C.leafDark],
];

/** One repeatable stretch of jungle garland with bunting; tiles side by side without a seam. */
export function Garland({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  const flags: { x: number; y: number; angle: number; kind: Pennant }[] = [];
  [0, 300].forEach((x0, arc) => {
    [0.14, 0.38, 0.62, 0.86].forEach((t, i) => {
      // String: quadratic from (x0, 76) through control (x0+150, 136) to (x0+300, 76).
      const y = 76 + 2 * (1 - t) * t * 60;
      const slope = (2 * (1 - 2 * t) * 60) / 300;
      flags.push({
        x: x0 + 300 * t,
        y: y - 1,
        angle: ((Math.atan(slope) * 180) / Math.PI) * 0.7,
        kind: ORDER[(arc * 4 + i + (flip ? 2 : 0)) % 4],
      });
    });
  });

  return (
    <svg
      className={className}
      viewBox="0 0 600 175"
      overflow="visible"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <Defs />
      <g filter={WOBBLE}>
        {FOLIAGE.map(([x, kind, angle, size, fill, edge]) => {
          const at = `translate(${x} -8) rotate(${angle})`;
          if (kind === "frond")
            return (
              <Frond
                key={x}
                L={size}
                droop={0.35}
                fill={fill}
                edge={edge}
                at={at}
              />
            );
          if (kind === "leaf")
            return (
              <Leaf
                key={x}
                L={size}
                W={size * 0.24}
                fill={fill}
                edge={edge}
                at={at}
              />
            );
          return <Spikes key={x} L={size} fill={fill} edge={edge} at={at} />;
        })}
      </g>
      <path
        d="M-4 78Q150 136 300 76Q450 136 604 78"
        fill="none"
        stroke={C.twine}
        strokeWidth={2.2}
      />
      <g filter={WOBBLE}>
        {flags.map((flag) => (
          <Flag key={flag.x} {...flag} />
        ))}
      </g>
    </svg>
  );
}

/* ---------- Ground scene ---------- */

/** viewBox of an actor in its own units: x, y, width, height. */
type Box = [number, number, number, number];

/**
 * One moving figure: a small SVG of its own laid over the scene at scene coordinates (x, y are
 * where its origin lands, scale its size there). Separate layers let the browser move them
 * on the GPU instead of repainting the whole watercolor scene on every frame.
 */
function Actor({
  x,
  y,
  scale = 1,
  box,
  anim,
  children,
}: {
  x: number;
  y: number;
  scale?: number;
  box: Box;
  anim: string;
  children: ReactNode;
}) {
  const [bx, by, bw, bh] = box;
  const place = {
    "--x": x + bx * scale,
    "--y": y + by * scale,
    "--aw": bw * scale,
    "--ah": bh * scale,
  } as CSSProperties;
  return (
    <svg
      className={`${styles.actor} ${anim}`}
      style={place}
      viewBox={box.join(" ")}
      overflow="visible"
    >
      <Defs />
      {children}
    </svg>
  );
}

const BUTTERFLY: Box = [-18, -19, 36, 36];
const PTERO: Box = [-62, -27, 114, 44];

/**
 * Wide strip (1600 × 340), cropped to the middle on phones (about 520–1080), so the dinosaurs
 * live there; palms and bushes on the far sides only show on wider screens. Three layers:
 * the still background, the moving figures, and the grass in front of their feet.
 */
export function Scene() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <svg
        className={styles.layer}
        viewBox="0 0 1600 340"
        preserveAspectRatio="xMidYMax slice"
      >
        <Defs />
        <path
          filter={WOBBLE}
          d="M0 270C180 232 340 252 520 262S900 238 1100 258S1420 242 1600 262V340H0Z"
          fill={C.leafPale}
        />
        <Palm x={120} y={306} h={200} lean={10} s={0.9} />
        <Palm x={330} y={300} h={218} lean={-12} />
        <Palm x={1300} y={304} h={214} lean={14} s={0.95} />
        <Palm x={1500} y={300} h={220} lean={-10} />
        <Palm x={578} y={306} h={214} lean={-16} s={0.95} />
        <Palm x={1046} y={302} h={222} lean={20} />
        <g transform="translate(676 158) scale(1.3)">
          <Volcano />
        </g>
        <path
          filter={WOBBLE}
          d="M0 300C200 286 400 308 600 298S1000 286 1200 300S1500 290 1600 296V340H0Z"
          fill={C.leafLight}
        />
        <Bush x={232} y={306} s={1.1} />
        <Bush x={460} y={304} s={0.9} />
        <Bush x={1170} y={304} s={0.95} />
        <Bush x={1400} y={306} s={1.1} />
      </svg>

      <Actor
        x={676}
        y={158}
        scale={1.3}
        box={[30, -25, 52, 41]}
        anim={styles.puff}
      >
        <Smoke />
      </Actor>
      <Actor x={880} y={90} box={[-2, 18, 260, 200]} anim={styles.sway}>
        <Brachio />
      </Actor>
      <Actor x={554} y={132} box={[-4, 2, 144, 174]} anim={styles.hop}>
        <Rex />
      </Actor>
      <Actor
        x={704}
        y={228}
        scale={0.95}
        box={[2, 6, 68, 82]}
        anim={styles.wobble}
      >
        <Hatchling />
      </Actor>
      <Actor x={928} y={184} box={[-154, 6, 166, 118]} anim={styles.nod}>
        <g transform="scale(-1 1)">
          <Trike />
        </g>
      </Actor>

      <Actor x={826} y={84} scale={0.9} box={PTERO} anim={styles.glide}>
        <Ptero />
      </Actor>
      <Actor
        x={230}
        y={60}
        scale={0.9}
        box={PTERO}
        anim={`${styles.glide} ${styles.late}`}
      >
        <Ptero />
      </Actor>
      <Actor x={652} y={96} box={BUTTERFLY} anim={styles.flutter}>
        <Butterfly at="" fill={C.sky} edge="#5f9fc4" />
      </Actor>
      <Actor
        x={838}
        y={128}
        scale={0.85}
        box={BUTTERFLY}
        anim={`${styles.flutter} ${styles.late}`}
      >
        <Butterfly at="" fill={C.orangeLight} edge={C.orange} />
      </Actor>
      <Actor
        x={1220}
        y={70}
        box={BUTTERFLY}
        anim={`${styles.flutter} ${styles.late}`}
      >
        <Butterfly at="" fill={C.sky} edge="#5f9fc4" />
      </Actor>
      <Actor x={380} y={70} scale={0.9} box={BUTTERFLY} anim={styles.flutter}>
        <Butterfly at="" fill={C.orangeLight} edge={C.orange} />
      </Actor>

      <svg
        className={styles.layer}
        viewBox="0 0 1600 340"
        preserveAspectRatio="xMidYMax slice"
      >
        <Defs />
        <path
          filter={WOBBLE}
          d="M0 318C260 306 520 326 800 314S1320 304 1600 318V340H0Z"
          fill={C.leaf}
        />
        {[
          40, 180, 300, 420, 512, 602, 690, 772, 862, 958, 1040, 1128, 1240,
          1352, 1470, 1570,
        ].map((x, i) => (
          <Tuft
            key={x}
            x={x}
            y={320 + (i % 3) * 3}
            s={0.8 + (i % 4) * 0.12}
            fill={i % 2 ? C.leaf : C.leafLight}
            edge={C.leafDark}
          />
        ))}
      </svg>
    </div>
  );
}

/** The hatchling again, rocking in its egg above the closing message. */
export function ClosingArt() {
  return (
    <svg
      className={`${styles.closingArt} ${styles.wobble}`}
      viewBox="2 6 68 82"
      overflow="visible"
      aria-hidden="true"
    >
      <Defs />
      <Hatchling />
    </svg>
  );
}

/* ---------- Confetti ---------- */

const CONFETTI: [number, number, string, number, boolean?][] = [
  [3, 30, C.leaf, 20],
  [7, 44, C.orange, -30],
  [3, 57, C.teal, 50],
  [8, 69, C.yellow, 10],
  [95, 28, C.teal, 35],
  [91, 41, C.orange, 70],
  [96, 54, C.leaf, -50],
  [92, 67, C.yellow, 15],
  [14, 34, C.teal, -10, true],
  [22, 52, C.orange, 40, true],
  [12, 66, C.leafLight, -35, true],
  [27, 26, C.yellow, 25, true],
  [86, 33, C.yellow, 60, true],
  [78, 50, C.teal, -20, true],
  [88, 62, C.orange, -45, true],
  [73, 27, C.leafLight, 30, true],
];

export function Confetti({
  className,
  dot,
  wide,
}: {
  className?: string;
  dot: string;
  wide: string;
}) {
  return (
    <div className={className} aria-hidden="true">
      {CONFETTI.map(([x, y, color, angle, onlyWide], i) => (
        <span
          key={i}
          className={onlyWide ? `${dot} ${wide}` : dot}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            background: color,
            rotate: `${angle}deg`,
            animationDelay: `${(i % 6) * -1.1}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Age balloon ---------- */

// Plates along the back of the number, like the dinosaur number balloon. Box: the digit's own
// box (0–60 wide, 0–95 tall). Traced on the round top of a 2 (a 3 has the same top); each plate
// points away from the middle of that curve and sits half behind the stroke.
const PLATES: [number, number][] = [
  [19, 12],
  [28.5, 6.5],
  [39, 5],
  [47.5, 8.8],
  [52.5, 17],
  [53, 26],
  [50, 34],
];
const CURVE_CENTER = [36, 21];

export function Plates({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 95"
      overflow="visible"
      aria-hidden="true"
    >
      {PLATES.map(([x, y]) => {
        const a = Math.atan2(y - CURVE_CENTER[1], x - CURVE_CENTER[0]);
        // Nudged outward so the plate clears the stroke and only its base hides behind it.
        const [px, py] = [x + Math.cos(a) * 5, y + Math.sin(a) * 5];
        return (
          <g
            key={`${x}-${y}`}
            transform={`translate(${px.toFixed(1)} ${py.toFixed(1)}) rotate(${((a * 180) / Math.PI + 90).toFixed(1)}) scale(0.85)`}
          >
            <path
              d="M-7 3Q-2-13 0-14Q2-13 7 3Z"
              fill="#c26a3a"
              stroke="#8f4724"
              strokeWidth={1.2}
              strokeLinejoin="round"
            />
          </g>
        );
      })}
    </svg>
  );
}

/** The hatchling on its own, e.g. where the child's photo goes until there is one. */
export function HatchlingArt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="-4 2 80 90" aria-hidden="true">
      <Defs />
      <Hatchling />
    </svg>
  );
}

/** A bunch of jungle leaves fanning out from the bottom-right corner; peeks out behind the envelope. */
export function LeafCluster({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 150" overflow="visible" aria-hidden="true">
      <Defs />
      <g transform="translate(170 130)" filter={WOBBLE}>
        <Frond L={150} droop={-0.25} fill={C.leafDark} edge={C.leafDark} at="rotate(-150)" />
        <Leaf L={120} W={28} fill={C.leaf} edge={C.leafDark} at="rotate(-118)" />
        <Frond L={140} droop={0.3} fill={C.leafLight} edge={C.leaf} at="rotate(-178)" />
        <Spikes L={70} fill={C.yellow} edge={C.yellowDark} at="rotate(-135)" />
        <Leaf L={96} W={22} fill={C.leafLight} edge={C.leaf} at="rotate(-95)" />
      </g>
    </svg>
  );
}
