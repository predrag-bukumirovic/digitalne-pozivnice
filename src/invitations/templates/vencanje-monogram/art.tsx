/* Drawings for the "Monogram" template: a fine laurel wreath and corner flourishes. */

const INK = "#141414";
const WINE = "#7d1d2c";

/** A slim laurel leaf, 14 units long, pointing along +x. */
const LEAF = "M0 0C3-3.6 9-4.2 14 0C9 4.2 3 3.6 0 0Z";

/** Rounded to one decimal, so the server and every browser print the same numbers. */
const round = (n: number) => Math.round(n * 10) / 10;

/** The left branch: leaf pairs along a circle from the bottom up to the upper left. The right one is its mirror. */
const BRANCH = (() => {
  const [cx, cy, r] = [100, 100, 84];
  const from = 98;
  const to = 228;
  const point = (deg: number) => [cx + r * Math.cos((deg * Math.PI) / 180), cy + r * Math.sin((deg * Math.PI) / 180)];
  const leaves: { x: number; y: number; angle: number; size: number }[] = [];
  const count = 12;
  for (let i = 0; i < count; i++) {
    const deg = from + 6 + (i / (count - 1)) * (to - from - 12);
    const [x, y] = point(deg);
    const along = deg + 90; // direction of growth, counterclockwise on screen
    const size = 1.25 - (i / (count - 1)) * 0.45;
    leaves.push({ x: round(x), y: round(y), angle: round(along - 38), size: round(size) });
    leaves.push({ x: round(x), y: round(y), angle: round(along + 38), size: round(size * 0.92) });
  }
  const [x1, y1] = point(to);
  leaves.push({ x: round(x1), y: round(y1), angle: round(to + 90), size: 0.8 });
  const [x0, y0] = point(from);
  return { stem: `M${round(x0)} ${round(y0)}A${r} ${r} 0 0 1 ${round(x1)} ${round(y1)}`, leaves };
})();

function Branch() {
  return (
    <g>
      <path d={BRANCH.stem} fill="none" stroke={INK} strokeWidth="1" />
      {BRANCH.leaves.map((leaf, i) => (
        <path key={i} d={LEAF} fill={INK} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.angle}) scale(${leaf.size})`} />
      ))}
    </g>
  );
}

/** Two laurel branches meeting at the bottom, tied with a small wine-red bow. */
export function Wreath({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <Branch />
      <g transform="translate(200 0) scale(-1 1)">
        <Branch />
      </g>
      <g fill="none" stroke={WINE} strokeWidth="1.4" strokeLinecap="round">
        <path d="M100 184C93 177 86 179 87 184S96 189 100 184C104 189 112 189 113 184S107 177 100 184Z" />
        <path d="M99 185L92 197M101 185L108 197" />
      </g>
    </svg>
  );
}

/** The inner frame's notched corner: the paper covers the square corner, a quarter circle replaces it. */
export function Corner({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 30" aria-hidden="true" focusable="false">
      <path d="M-1-1H28A28 28 0 0 1-1 28Z" fill="#faf9f6" />
      <path d="M28 0A28 28 0 0 1 0 28" fill="none" stroke={INK} strokeOpacity="0.45" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <path d="M8 4L12 8L8 12L4 8Z" fill={WINE} />
    </svg>
  );
}
