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
