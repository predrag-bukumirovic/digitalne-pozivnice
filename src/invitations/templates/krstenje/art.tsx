/* Drawings for the "Nebo" (sky) template: soft clouds, a dove and a fine cross. */

const BLUE = "#3c6a8a";

/** A flat-bottomed cumulus cloud. */
export function Cloud({ className, opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <svg className={className} viewBox="0 0 200 80" aria-hidden="true" focusable="false">
      <path
        d="M20 72C4 72 0 56 12 50 8 36 24 28 36 35 40 18 62 13 72 28 80 10 110 11 116 30 128 21 148 28 146 44 160 41 172 52 166 62 180 62 186 72 176 72Z"
        fill="#fff"
        opacity={opacity}
      />
    </svg>
  );
}

/** A dove in flight, carrying a small olive twig. */
export function Dove({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 130 90" aria-hidden="true" focusable="false">
      <g fill="#fff" stroke={BLUE} strokeWidth="1.3" strokeLinejoin="round">
        {/* far wing */}
        <path d="M62 52C64 36 74 22 92 12 88 24 90 34 86 46Z" fill="#eaf1f6" />
        {/* tail */}
        <path d="M22 60L4 51 9 60 2 69 24 65Z" />
        {/* body */}
        <path d="M16 62C30 54 46 50 62 50 72 50 80 44 86 38 90 32 96 29 102 30 108 31 111 35 110 39L118 42 109 45C106 56 96 68 78 70 58 72 36 70 16 62Z" />
        {/* near wing, feathered edge */}
        <path d="M50 54C46 38 52 20 68 7 68 15 72 21 78 23 74 27 76 33 82 35 76 39 73 45 73 52Z" />
      </g>
      <circle cx="103.5" cy="36" r="1.3" fill={BLUE} />
      <g fill="none" stroke={BLUE} strokeWidth="1.1" strokeLinecap="round">
        <path d="M116 43C121 47 124 53 123 60" />
      </g>
      <g fill="#7f9a6a">
        <path d="M119 50C124 48 128 50 128 50 126 53 122 53 119 50Z" />
        <path d="M121 56C116 55 113 58 113 58 117 60 119 59 121 56Z" />
        <path d="M122 61C126 60 129 63 129 63 125 65 123 64 122 61Z" />
      </g>
    </svg>
  );
}

/** A fine cross with small rounded ends. */
export function Cross({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 44" aria-hidden="true" focusable="false">
      <path d="M15 4V40M5 14H25" fill="none" stroke={BLUE} strokeWidth="1.4" />
      <g fill={BLUE}>
        <circle cx="15" cy="3" r="2.2" />
        <circle cx="15" cy="41" r="2.2" />
        <circle cx="4" cy="14" r="2.2" />
        <circle cx="26" cy="14" r="2.2" />
      </g>
    </svg>
  );
}
