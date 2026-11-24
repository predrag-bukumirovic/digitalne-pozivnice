// Flat drawings for the striped first-birthday template. All decorative.

/** White panel with a scalloped edge; stretched to the panel's size. */
function scallopPath(x0: number, y0: number, x1: number, y1: number, nx: number, ny: number, h: number) {
  const w = (x1 - x0) / nx;
  const v = (y1 - y0) / ny;
  const run = (n: number, arc: string) => Array.from({ length: n }, () => arc).join(" ");
  return [
    `M${x0} ${y0}`,
    run(nx, `a${w / 2} ${h} 0 0 1 ${w} 0`),
    run(ny, `a${h} ${v / 2} 0 0 1 0 ${v}`),
    run(nx, `a${w / 2} ${h} 0 0 1 ${-w} 0`),
    run(ny, `a${h} ${v / 2} 0 0 1 0 ${-v}`),
    "Z",
  ].join(" ");
}

const PANEL = scallopPath(36, 36, 364, 524, 4, 6, 34);

export function Panel({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 560" preserveAspectRatio="none" aria-hidden="true">
      <path d={PANEL} fill="#fff" />
    </svg>
  );
}

export function Brush({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M6 16C40 7 120 3 194 9c4 6 4 17-3 22-60 5-130 8-183 3-6-5-7-13-2-18Z"
        fill="#f7c531"
      />
      <path d="M20 13c50-4 110-5 160-2M14 27c60 2 120 1 170-3" stroke="#f9d662" strokeWidth="3" fill="none" />
    </svg>
  );
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 150 28" aria-hidden="true">
      <path
        d="M3 14q8-11 16 0t16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Party hat matching the one in the customer's photo: striped cone, green trim, red flower.
const CONE = { apex: [50, 18], baseY: 98, half: 32 };
const halfAt = (y: number) => ((y - CONE.apex[1]) / (CONE.baseY - CONE.apex[1])) * CONE.half;
const stripe = (y1: number, y2: number) =>
  `${50 - halfAt(y1)},${y1} ${50 + halfAt(y1)},${y1} ${50 + halfAt(y2)},${y2} ${50 - halfAt(y2)},${y2}`;

export function PartyHat({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 112" aria-hidden="true">
      <path d="M50 18 82 98Q50 106 18 98Z" fill="#fbf3d6" />
      {[
        [30, 42],
        [54, 66],
        [78, 92],
      ].map(([a, b]) => (
        <polygon key={a} points={stripe(a, b)} fill="#2f6fe4" />
      ))}
      {[18, 28, 39, 50, 61, 72, 82].map((x, i) => (
        <circle key={x} cx={x} cy={98 + (i === 0 || i === 6 ? -2 : 1)} r="6.5" fill="#6cc04a" />
      ))}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return <circle key={i} cx={50 + Math.cos(angle) * 8} cy={14 + Math.sin(angle) * 8} r="5.5" fill="#e53935" />;
      })}
      <circle cx="50" cy="14" r="4.5" fill="#c62828" />
    </svg>
  );
}

const STAR = "M12 1.8l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 16.7l-6.1 3.5 1.5-6.8L2.2 8.8l6.9-.7Z";
const SPARKLE = "M12 2c.8 5 2.4 7 10 10-7.6 3-9.2 5-10 10-.8-5-2.4-7-10-10 7.6-3 9.2-5 10-10Z";
const CURL = "M3 21c2-7 9-8 10-3s-6 6-5 1 8-8 11-3-3 7-4 2 3-8 7-8";

// [kind, left %, top %, size in cqi, color, rotation]
const DECOR: [string, number, number, number, string, number][] = [
  ["star", 7, 5, 6, "#f08a24", -12],
  ["star", 56, 4, 5, "#f6c026", 10],
  ["dot", 80, 7, 3, "#2457c5", 0],
  ["sparkle", 87, 15, 7, "#f08a24", 0],
  ["curl", 2, 13, 10, "#cfa86a", 0],
  ["star", 91, 44, 5, "#2457c5", 8],
  ["dot", 3, 50, 3, "#1f9d55", 0],
  ["star", 3, 83, 5.5, "#f6c026", -6],
  ["star", 88, 85, 6, "#1f9d55", 14],
  ["dot", 14, 95, 3.5, "#2457c5", 0],
  ["dot", 83, 95, 3.5, "#e03a3e", 0],
];

export function Decorations({ className }: { className?: string }) {
  return (
    <>
      {DECOR.map(([kind, left, top, size, color, rotate]) => (
        <svg
          key={`${left}-${top}`}
          className={className}
          viewBox="0 0 24 24"
          style={{ left: `${left}%`, top: `${top}%`, width: `${size}cqi`, rotate: `${rotate}deg`, color }}
          aria-hidden="true"
        >
          {kind === "star" && <path d={STAR} fill="currentColor" />}
          {kind === "dot" && <circle cx="12" cy="12" r="10" fill="currentColor" />}
          {kind === "sparkle" && <path d={SPARKLE} fill="none" stroke="currentColor" strokeWidth="1.6" />}
          {kind === "curl" && <path d={CURL} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />}
        </svg>
      ))}
    </>
  );
}

// Balloons floating beside the cake: [cx, cy, rx, ry, color].
const BALLOONS: [number, number, number, number, string][] = [
  [58, 44, 20, 24, "#2457c5"],
  [92, 62, 14, 17, "#f6b21a"],
  [244, 42, 20, 24, "#e03a3e"],
  [209, 62, 14, 17, "#1f8f4e"],
];

// Confetti around the cake: strips [x, y, color, angle] and dots [x, y, color].
const STRIPS: [number, number, string, number][] = [
  [122, 30, "#e03a3e", 20],
  [180, 22, "#1f8f4e", -30],
  [112, 12, "#f6b21a", 60],
  [190, 46, "#8b4fd8", -15],
  [22, 98, "#f6b21a", 30],
  [278, 92, "#2457c5", -40],
  [268, 128, "#f2792b", 15],
];
const DOTS: [number, number, string][] = [
  [168, 34, "#2457c5"],
  [130, 46, "#1f8f4e"],
  [18, 26, "#e03a3e"],
  [284, 18, "#f6b21a"],
  [34, 128, "#1f8f4e"],
  [256, 104, "#e03a3e"],
];
const SPRINKLES: [number, number, string, number][] = [
  [118, 87, "#e03a3e", 20],
  [128, 83, "#2457c5", -30],
  [134, 91, "#1f8f4e", 60],
  [164, 83, "#f2792b", -10],
  [170, 91, "#8b4fd8", 40],
  [182, 86, "#f6b21a", -50],
  [110, 90, "#f6b21a", -20],
  [190, 90, "#e03a3e", 30],
];

/** A birthday cake with one candle, balloons and confetti, for the envelope's opening screen. */
export function Cake({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 8 300 136" aria-hidden="true" focusable="false">
      {BALLOONS.map(([cx, cy, rx, ry, color], i) => (
        <g key={`b${i}`}>
          <path
            d={`M${cx} ${cy + ry + 4}q${i % 2 ? 5 : -5} 12 0 22t0 22`}
            fill="none"
            stroke="#c9bfa0"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path d={`M${cx - 3} ${cy + ry + 4}L${cx} ${cy + ry - 1}L${cx + 3} ${cy + ry + 4}Z`} fill={color} />
          <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={color} />
          <ellipse
            cx={cx - rx * 0.38}
            cy={cy - ry * 0.38}
            rx={rx * 0.2}
            ry={ry * 0.3}
            fill="#fff"
            opacity="0.45"
            transform={`rotate(-20 ${cx - rx * 0.38} ${cy - ry * 0.38})`}
          />
        </g>
      ))}

      {STRIPS.map(([x, y, color, angle], i) => (
        <rect key={`s${i}`} x={x - 4} y={y - 1.6} width="8" height="3.2" rx="1" fill={color} transform={`rotate(${angle} ${x} ${y})`} />
      ))}
      {DOTS.map(([x, y, color], i) => (
        <circle key={`d${i}`} cx={x} cy={y} r="2.6" fill={color} />
      ))}

      {/* plate */}
      <ellipse cx="150" cy="135" rx="72" ry="8" fill="#2457c5" />
      <ellipse cx="150" cy="132" rx="68" ry="6" fill="#3f76e6" />

      {/* sponge with a strawberry layer */}
      <path d="M100 88V126Q150 140 200 126V88Z" fill="#f2c27b" />
      <path d="M100 106Q150 120 200 106V113Q150 127 100 113Z" fill="#e03a3e" />
      <path d="M100 119Q150 133 200 119V121Q150 135 100 121Z" fill="#e5ad62" />

      {/* icing with drips */}
      <path
        d="M100 87C100 93 102 99 105 99C108 99 109 95 112 95C115 95 116 104 120 104C124 104 124 97 128 97C132 97 133 101 137 101C141 101 141 97 145 97C149 97 150 108 155 108C160 108 159 99 164 99C168 99 169 103 173 103C177 103 177 97 181 96C185 95 187 101 191 100C195 99 197 94 200 87Z"
        fill="#fff8ee"
      />
      <ellipse cx="150" cy="88" rx="50" ry="9" fill="#fff8ee" />
      <ellipse cx="150" cy="88" rx="50" ry="9" fill="none" stroke="#efe2c9" strokeWidth="1" />
      {SPRINKLES.map(([x, y, color, angle], i) => (
        <rect key={`p${i}`} x={x - 3} y={y - 1} width="6" height="2" rx="1" fill={color} transform={`rotate(${angle} ${x} ${y})`} />
      ))}

      {/* candle */}
      <circle cx="150" cy="38" r="15" fill="#f6c026" opacity="0.2" />
      <rect x="145" y="50" width="10" height="38" rx="2" fill="#2457c5" />
      <path d="M145 59l10-5M145 69l10-5M145 79l10-5" stroke="#fff" strokeWidth="2.4" opacity="0.9" />
      <path d="M150 50V44" stroke="#2a2350" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M150 25C155 32 157 36 157 39.5C157 43.5 154 45.5 150 45.5C146 45.5 143 43.5 143 39.5C143 36 145 32 150 25Z" fill="#f6b21a" />
      <path d="M150 33C153 37 154 39 154 40.5C154 42.5 152.3 43.6 150 43.6C147.7 43.6 146 42.5 146 40.5C146 39 147 37 150 33Z" fill="#f2792b" />
    </svg>
  );
}
