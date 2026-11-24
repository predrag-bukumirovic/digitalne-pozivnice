/* Drawings for the "Terakota" template: vineyard hills at sunset and a bunch of grapes. */

const CLAY = "#a94d28";
const CREAM = "#f7efe6";

/** Rolling hills with vine rows and a low sun. The front hill is cream, so it runs into the page below. */
export function Landscape({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 150" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <circle cx="304" cy="66" r="30" fill="#f2c39c" />
      <g fill="none" stroke={CREAM} strokeWidth="1.4" strokeLinecap="round" opacity="0.8">
        <path d="M232 42q3-4 6 0q3-4 6 0M250 32q2.5-3.4 5 0q2.5-3.4 5 0" />
      </g>
      <path d="M0 90C56 70 118 64 186 78S318 64 400 72V150H0Z" fill="#bd6239" />
      <g fill="#86391b">
        <path d="M118 78C110 68 111 52 118 38 125 52 126 68 118 78Z" />
        <path d="M133 76C127 68 128 56 133 46 138 56 139 68 133 76Z" />
        <path d="M356 74C350 66 351 55 356 46 361 55 362 66 356 74Z" />
      </g>
      <path d="M0 110C74 94 150 94 226 104S344 98 400 92V150H0Z" fill="#cf7a50" />
      <g fill="none" stroke="#a94d28" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="1 5" opacity="0.75">
        <path d="M0 117C74 101 150 101 226 111S344 105 400 99" />
        <path d="M0 124C74 108 150 108 226 118S344 112 400 106" />
      </g>
      <path d="M0 134C88 118 186 114 268 124S368 128 400 120V150H0Z" fill={CREAM} />
    </svg>
  );
}

/** A bunch of grapes with a vine leaf and a curling tendril. */
export function Grapes({ className }: { className?: string }) {
  const rows = [
    [27, 41, 55, 69],
    [34, 48, 62],
    [41, 55],
    [48],
  ];
  return (
    <svg className={className} viewBox="0 0 100 110" aria-hidden="true" focusable="false">
      <path d="M62 4C60 14 54 22 50 30" fill="none" stroke={CLAY} strokeWidth="2" strokeLinecap="round" />
      <path d="M60 14C70 10 78 14 76 21S66 25 68 19" fill="none" stroke={CLAY} strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M52 26C46 27 40 30 36 35 33 30 26 29 20 32 21 26 18 20 12 17 18 14 22 9 22 3 28 7 34 7 39 3 41 9 46 13 52 13 48 18 49 22 52 26Z"
        fill={CLAY}
        opacity="0.85"
      />
      <path d="M52 26L22 8M38 17L14 18M40 20L28 31" fill="none" stroke={CREAM} strokeWidth="0.9" opacity="0.7" />
      {rows.map((row, r) =>
        row.map((x) => (
          <g key={`${r}-${x}`}>
            <circle cx={x} cy={42 + r * 12} r="7" fill={CLAY} />
            <circle cx={x - 2.4} cy={39.6 + r * 12} r="1.8" fill={CREAM} opacity="0.55" />
          </g>
        )),
      )}
    </svg>
  );
}

/** Closing: the sun setting behind two hills. */
export function ClosingSun({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 64" aria-hidden="true" focusable="false">
      <g stroke={CLAY} strokeWidth="1.6" strokeLinecap="round" fill="none">
        <path d="M70 14V6M50 21l-5-6M90 21l5-6M38 36l-7-3M102 36l7-3" />
        <path d="M4 56C30 42 52 42 72 50S112 44 136 52" />
        <path d="M18 62C44 52 66 54 86 58S120 56 132 60" opacity="0.55" />
      </g>
      <path d="M46 46A24 24 0 0 1 94 46Z" fill={CLAY} />
    </svg>
  );
}
