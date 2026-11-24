/* Drawings for the "Gala" template. Fixed ids are fine: the hero appears once per page. */

/** A geometric monogram: a diamond inside a diamond, with a fine bar across. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <g fill="none" stroke="url(#gala-gold)" strokeWidth="2">
        <path d="M24 3 45 24 24 45 3 24Z" />
        <path d="M24 12 36 24 24 36 12 24Z" strokeWidth="1.4" />
      </g>
      <path d="M24 18 30 24 24 30 18 24Z" fill="url(#gala-gold)" />
      <path d="M9 24H39" stroke="url(#gala-gold)" strokeWidth="1" />
      <defs>
        <linearGradient id="gala-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3dc9e" />
          <stop offset="0.55" stopColor="#c99f52" />
          <stop offset="1" stopColor="#e9cd86" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Gold veins through dark marble, drawn for the left edge; the right edge is the same drawing mirrored. */
const VEINS: { d: string; width: number; opacity: number }[] = [
  { d: "M-4 40C30 96 18 150 46 214S36 330 70 392 54 520 92 586 80 700 110 812", width: 1.8, opacity: 0.9 },
  { d: "M46 214C64 230 92 232 118 262S150 300 168 306", width: 1, opacity: 0.7 },
  { d: "M70 392C52 420 20 432 8 470S-6 540 -10 560", width: 1.2, opacity: 0.75 },
  { d: "M-6 150C16 170 10 214 26 250S14 300 30 340", width: 0.8, opacity: 0.55 },
  { d: "M92 586C112 600 132 640 128 676S140 730 160 746", width: 0.9, opacity: 0.6 },
  { d: "M18 -6C40 20 60 30 64 62S90 110 100 120", width: 0.7, opacity: 0.5 },
  { d: "M-8 640C14 652 30 690 26 724S40 780 34 812", width: 1, opacity: 0.6 },
];

export function Veins({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 800" preserveAspectRatio="xMinYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="gala-vein" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e7c983" />
          <stop offset="0.5" stopColor="#9c7638" />
          <stop offset="1" stopColor="#e7c983" />
        </linearGradient>
        <radialGradient id="gala-cloud">
          <stop offset="0" stopColor="#2a3f6e" stopOpacity="0.55" />
          <stop offset="1" stopColor="#2a3f6e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="250" rx="110" ry="160" fill="url(#gala-cloud)" />
      <ellipse cx="90" cy="640" rx="90" ry="130" fill="url(#gala-cloud)" />
      <g fill="none" stroke="url(#gala-vein)" strokeLinecap="round">
        {VEINS.map(({ d, width, opacity }) => (
          <path key={d} d={d} strokeWidth={width} opacity={opacity} />
        ))}
      </g>
    </svg>
  );
}
