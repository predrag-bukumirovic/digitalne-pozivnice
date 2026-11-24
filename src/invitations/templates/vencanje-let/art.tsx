/* Drawings for the "Let" (flight) template. Fixed ids are fine: the hero appears once per page. */

const NAVY = "#1e2f66";

/** A small airliner seen from above, nose up, about 20 units long. */
const PLANE =
  "M0-10C1-10 1.6-8.6 1.6-7.2V-3.4L10 1.6V3.6L1.6 1.2V6.4L4.2 8.4V10L0 9 -4.2 10V8.4L-1.6 6.4V1.2L-10 3.6V1.6L-1.6-3.4V-7.2C-1.6-8.6-1-10 0-10Z";

export function Plane({ x, y, angle, size = 1, fill = NAVY }: { x: number; y: number; angle: number; size?: number; fill?: string }) {
  return <path d={PLANE} fill={fill} transform={`translate(${x} ${y}) rotate(${angle}) scale(${size})`} />;
}

/** A desk globe with a plane circling it on a dashed route. */
export function Globe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 180" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="let-globe">
          <circle cx="104" cy="84" r="56" />
        </clipPath>
      </defs>
      {/* route behind the globe */}
      <path d="M18 120C10 70 60 30 120 22S214 40 206 74" fill="none" stroke={NAVY} strokeWidth="1.6" strokeDasharray="5 5" opacity="0.7" />
      {/* stand */}
      <path d="M164 84A60 60 0 0 1 104 144" fill="none" stroke={NAVY} strokeWidth="4" strokeLinecap="round" />
      <path d="M104 144V160" stroke={NAVY} strokeWidth="5" />
      <path d="M78 168C80 160 128 160 130 168Z" fill={NAVY} />
      {/* sphere */}
      <circle cx="104" cy="84" r="56" fill={NAVY} />
      <g clipPath="url(#let-globe)">
        <g fill="#fbfaf5">
          <path d="M60 46C70 36 86 34 96 40S104 54 98 60 86 62 84 72 72 84 66 78 62 66 56 62 52 54 60 46Z" />
          <path d="M84 84C92 80 104 84 106 94S102 110 98 120 90 136 84 132 80 116 78 106 76 88 84 84Z" />
          <path d="M112 44C122 38 140 40 150 48S160 64 150 68 136 64 130 72 118 76 114 68 104 52 112 44Z" />
          <path d="M130 92C138 88 150 92 152 100S146 112 138 112 126 102 130 92Z" />
          <path d="M44 92C48 88 56 90 56 96S50 104 46 102 40 96 44 92Z" />
        </g>
        <g fill="none" stroke="#fbfaf5" strokeWidth="0.9" opacity="0.35">
          <ellipse cx="104" cy="84" rx="20" ry="56" />
          <ellipse cx="104" cy="84" rx="40" ry="56" />
          <path d="M48 84H160M52 62H156M52 106H156M62 44H146M62 124H146" />
        </g>
      </g>
      <circle cx="104" cy="84" r="56" fill="none" stroke={NAVY} strokeWidth="2" />
      {/* route in front of the globe, ending at the plane */}
      <path d="M206 74C200 104 160 128 110 134" fill="none" stroke={NAVY} strokeWidth="1.6" strokeDasharray="5 5" opacity="0.7" />
      <Plane x={36} y={52} angle={58} size={1.25} />
      <Plane x={190} y={112} angle={-128} size={0.9} />
    </svg>
  );
}

/** A round passport stamp with the couple's names and date running around the rim. */
export function Stamp({ className, text }: { className?: string; text: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <defs>
        <path id="let-stamp-ring" d="M50 14A36 36 0 1 1 49.9 14" />
      </defs>
      {/* The stamp sits on the paper, so the box lines under it don't run through. */}
      <circle cx="50" cy="50" r="48" fill="#fbfaf5" />
      <circle cx="50" cy="50" r="46" fill="none" stroke={NAVY} strokeWidth="2.4" />
      <circle cx="50" cy="50" r="28" fill="none" stroke={NAVY} strokeWidth="1.2" />
      <text fill={NAVY} fontSize="9.2" fontWeight="700" letterSpacing="1.4" fontFamily="var(--font-let-mono), monospace">
        <textPath href="#let-stamp-ring" textLength="222" lengthAdjust="spacingAndGlyphs">
          {text}
        </textPath>
      </text>
      <Plane x={50} y={50} angle={45} size={1.35} />
    </svg>
  );
}

/** Stable bar widths, so the code is the same on the server and in the browser. */
const BARS = (() => {
  let seed = 9;
  const bars: [number, number][] = [];
  let x = 0;
  while (x < 196) {
    seed = (seed * 16807) % 2147483647;
    const width = 1 + (seed % 3);
    bars.push([x, width]);
    x += width + 1 + ((seed >> 3) % 3);
  }
  return bars;
})();

export function Barcode({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      {BARS.map(([x, width]) => (
        <rect key={x} x={x} y="0" width={width} height="40" fill={NAVY} />
      ))}
    </svg>
  );
}

/** A dashed flight route ending in a plane, for the navy around the ticket. */
export function Route({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 220 120" aria-hidden="true" focusable="false" style={flip ? { transform: "scale(-1, -1)" } : undefined}>
      <path d="M4 112C40 108 64 70 104 64S170 86 186 46" fill="none" stroke="#fbfaf5" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.65" />
      <circle cx="4" cy="112" r="3" fill="#fbfaf5" opacity="0.65" />
      <Plane x={194} y={28} angle={24} size={1.15} fill="#fbfaf5" />
    </svg>
  );
}

/** Closing: a plane trailing a dashed loop. */
export function ClosingPlane({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 70" aria-hidden="true" focusable="false">
      <path d="M6 54C30 60 52 46 50 30S28 14 34 30 74 52 112 36" fill="none" stroke="#fbfaf5" strokeWidth="1.4" strokeDasharray="4 5" opacity="0.7" />
      <Plane x={128} y={28} angle={64} size={1.3} fill="#fbfaf5" />
    </svg>
  );
}
