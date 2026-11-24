/* Drawings for the "Maslina" (olive) template: an olive branch with fruit. */

const TONES = ["#4f6132", "#6b7d4a", "#93a07a"];
const OLIVE = "#3d4b25";

/** A slender olive leaf, 34 units long, pointing along +x. */
const LEAF = "M0 0C6-4 22-5 34 0C22 5 6 4 0 0Z";

/** Rounded to one decimal, so the server and every browser print the same numbers. */
const round = (n: number) => Math.round(n * 10) / 10;

type Leaf = { x: number; y: number; angle: number; size: number; tone: string };
type Olive = { x: number; y: number; angle: number };

/** Leaf pairs along a curved stem (a quadratic curve), with an olive hanging at every few nodes. */
function twig([x0, y0, cx, cy, x1, y1]: number[], nodes: number, start: number, oliveEvery: number) {
  const leaves: Leaf[] = [];
  const olives: Olive[] = [];
  for (let i = 0; i < nodes; i++) {
    const t = 0.05 + (i / (nodes - 1)) * 0.9;
    const x = (1 - t) ** 2 * x0 + 2 * (1 - t) * t * cx + t ** 2 * x1;
    const y = (1 - t) ** 2 * y0 + 2 * (1 - t) * t * cy + t ** 2 * y1;
    const along = (Math.atan2(2 * (1 - t) * (cy - y0) + 2 * t * (y1 - cy), 2 * (1 - t) * (cx - x0) + 2 * t * (x1 - cx)) * 180) / Math.PI;
    const size = start * (1 - (i / (nodes - 1)) * 0.4);
    const flip = i % 2 ? 1 : -1;
    leaves.push({ x: round(x), y: round(y), angle: round(along + flip * 32), size: round(size), tone: TONES[i % 3] });
    leaves.push({ x: round(x), y: round(y), angle: round(along - flip * 40), size: round(size * 0.78), tone: TONES[(i + 2) % 3] });
    if (i % oliveEvery === 1) olives.push({ x: round(x), y: round(y), angle: round(along + 90 * flip) });
  }
  const tip = (Math.atan2(y1 - cy, x1 - cx) * 180) / Math.PI;
  leaves.push({ x: x1, y: y1, angle: round(tip), size: round(start * 0.7), tone: TONES[0] });
  return { stem: `M${x0} ${y0}Q${cx} ${cy} ${x1} ${y1}`, leaves, olives };
}

/** The main branch and one shoot. Computed once, the same everywhere. */
const BRANCH = [twig([316, 6, 190, 30, 24, 172], 18, 1.15, 3), twig([210, 46, 196, 92, 150, 120], 6, 0.85, 3)];

/** One olive branch sweeping from the top right corner down to the left. */
export function Branch({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 200" aria-hidden="true" focusable="false">
      {BRANCH.map((part, p) => (
        <g key={p}>
          <path d={part.stem} fill="none" stroke={TONES[0]} strokeWidth={p ? 1.5 : 2} strokeLinecap="round" />
          {part.olives.map((olive, i) => (
            <g key={`o${i}`} transform={`translate(${olive.x} ${olive.y}) rotate(${olive.angle - 90})`}>
              <path d="M0 0V8" stroke={TONES[0]} strokeWidth="1.2" />
              <ellipse cx="0" cy="15" rx="5.2" ry="7.4" fill={(i + p) % 2 ? OLIVE : "#6f7f3c"} />
              <ellipse cx="-1.6" cy="12" rx="1.3" ry="2.2" fill="#f3f1e7" opacity="0.35" />
            </g>
          ))}
          {part.leaves.map((leaf, i) => (
            <path key={i} d={LEAF} fill={leaf.tone} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.angle}) scale(${leaf.size})`} />
          ))}
        </g>
      ))}
    </svg>
  );
}

/** A fine cross for the hero, drawn in the olive green. */
export function Cross({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 36" aria-hidden="true" focusable="false">
      <path d="M12 1V35M3 11H21" fill="none" stroke={TONES[0]} strokeWidth="1.6" />
    </svg>
  );
}
