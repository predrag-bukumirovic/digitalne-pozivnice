/* Drawings for the "Žalfija" (sage) template. */

const TONES = ["#56694d", "#6f8264", "#8c9d80"];

/** One soft, rounded sage leaf, 32 units long, pointing along +x. */
const LEAF = "M0 0C6-10 22-11 32 0C22 11 6 10 0 0Z";

/** Rounded to one decimal, so the server and every browser print the same numbers. */
const round = (n: number) => Math.round(n * 10) / 10;

type Leaf = { x: number; y: number; angle: number; size: number; tone: string };

/** Leaves in pairs along a curved stem (a quadratic curve), smaller toward the tip. */
function branch([x0, y0, cx, cy, x1, y1]: number[], nodes: number, start: number, shade: number) {
  const leaves: Leaf[] = [];
  for (let i = 0; i < nodes; i++) {
    const t = 0.12 + (i / (nodes - 1)) * 0.8;
    const x = (1 - t) ** 2 * x0 + 2 * (1 - t) * t * cx + t ** 2 * x1;
    const y = (1 - t) ** 2 * y0 + 2 * (1 - t) * t * cy + t ** 2 * y1;
    const along = (Math.atan2(2 * (1 - t) * (cy - y0) + 2 * t * (y1 - cy), 2 * (1 - t) * (cx - x0) + 2 * t * (x1 - cx)) * 180) / Math.PI;
    const size = start * (1 - (i / (nodes - 1)) * 0.5);
    leaves.push({ x: round(x), y: round(y), angle: round(along - 52), size: round(size), tone: TONES[(i + shade) % 3] });
    leaves.push({ x: round(x), y: round(y), angle: round(along + 52), size: round(size * 0.9), tone: TONES[(i + shade + 1) % 3] });
  }
  const tip = (Math.atan2(y1 - cy, x1 - cx) * 180) / Math.PI;
  leaves.push({ x: x1, y: y1, angle: round(tip), size: round(start * 0.5), tone: TONES[shade % 3] });
  return { stem: `M${x0} ${y0}Q${cx} ${cy} ${x1} ${y1}`, leaves };
}

/** A main stem and one side shoot. Computed once, the same everywhere. */
const SPRIG = [branch([56, 198, 36, 110, 70, 10], 7, 1.05, 0), branch([50, 150, 20, 120, 12, 70], 4, 0.8, 1)];

function SprigShape() {
  return (
    <>
      {SPRIG.map((part, p) => (
        <g key={p}>
          <path d={part.stem} fill="none" stroke={TONES[0]} strokeWidth="1.8" strokeLinecap="round" />
          {part.leaves.map((leaf, i) => (
            <path key={i} d={LEAF} fill={leaf.tone} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.angle}) scale(${leaf.size})`} />
          ))}
        </g>
      ))}
    </>
  );
}

/** A sage sprig growing up from the bottom, for the corners of the arch. */
export function Sprig({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 200" aria-hidden="true" focusable="false">
      <SprigShape />
    </svg>
  );
}

/** Closing: two sprigs crossed at the stems. */
export function ClosingSprigs({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 170 120" aria-hidden="true" focusable="false">
      <g transform="translate(85 118) rotate(-30) scale(.56) translate(-56 -198)">
        <SprigShape />
      </g>
      <g transform="translate(85 118) scale(-1 1) rotate(-30) scale(.56) translate(-56 -198)">
        <SprigShape />
      </g>
    </svg>
  );
}
