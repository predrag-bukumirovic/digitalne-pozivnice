import s from "./home.module.css";

/* Plain SVG art with no template imports, so client components (the header) can use it too. */

/* ---------- Wax seal (turns with the scroll, like the reference's disco ball) ---------- */

const sealEdge = (() => {
  const points: string[] = [];
  for (let i = 0; i <= 72; i++) {
    const t = (i / 72) * Math.PI * 2;
    const r = 70 + 3.2 * Math.sin(t * 9) + 1.8 * Math.sin(t * 5 + 1.3);
    points.push(`${(80 + r * Math.cos(t)).toFixed(1)},${(80 + r * Math.sin(t)).toFixed(1)}`);
  }
  return `M${points.join("L")}Z`;
})();

export function WaxSeal() {
  return (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <defs>
        <radialGradient id="wax" cx="38%" cy="32%" r="75%">
          <stop offset="0" stopColor="#d24a64" />
          <stop offset="0.55" stopColor="#a31a30" />
          <stop offset="1" stopColor="#5c0c17" />
        </radialGradient>
      </defs>
      <path d={sealEdge} fill="url(#wax)" />
      <circle cx="80" cy="80" r="47" fill="none" stroke="#5c0c17" strokeOpacity="0.55" strokeWidth="4" />
      <circle cx="80" cy="80" r="43" fill="none" stroke="#e46d85" strokeOpacity="0.45" strokeWidth="1.5" />
      <text
        x="80"
        y="96"
        textAnchor="middle"
        fontSize="46"
        fill="#6d0f1d"
        style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
      >
        JS
      </text>
      <ellipse cx="58" cy="48" rx="16" ry="7" fill="#fff" opacity="0.18" transform="rotate(-30 58 48)" />
    </svg>
  );
}

/* ---------- Turning badge in the hero ---------- */

export function Badge({ text }: { text: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={s.badge}>
      <defs>
        <path id="badge-ring" d="M100 100m-74 0a74 74 0 1 1 148 0a74 74 0 1 1-148 0" />
      </defs>
      <text fill="#fff" fontSize="13" fontWeight="600" style={{ fontFamily: "var(--font-wide)" }}>
        <textPath href="#badge-ring" textLength="462" lengthAdjust="spacing">
          {text.toUpperCase()}
        </textPath>
      </text>
      <g stroke="#fff" strokeWidth="5" strokeLinecap="round">
        <path d="M100 76v48M79.2 88l41.6 24M79.2 112l41.6-24" />
      </g>
    </svg>
  );
}

/* ---------- Envelope that bobs in the contact section ---------- */

export function Envelope() {
  return (
    <svg viewBox="0 0 160 110" aria-hidden="true">
      <defs>
        <linearGradient id="env" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e6e3dc" />
        </linearGradient>
      </defs>
      <rect x="6" y="10" width="148" height="94" rx="6" fill="url(#env)" stroke="#d9d4cb" />
      <path d="M8 14 80 66l72-52" fill="none" stroke="#cfc9bf" strokeWidth="2" />
      <path d="M8 102 62 54M152 102 98 54" fill="none" stroke="#ddd8cf" strokeWidth="2" />
      <path
        d="M80 52c-6-11-24-8-24 4 0 11 24 25 24 25s24-14 24-25c0-12-18-15-24-4Z"
        fill="#d0162f"
        stroke="#9c0f22"
        strokeWidth="1.5"
      />
      <path d="M66 54c2-4 7-5 10-2" fill="none" stroke="#fff" strokeOpacity="0.6" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Small contact icons (fill = currentColor) ---------- */

export function MailGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2 7.6 5.6L19.6 7H4.4ZM20 8.4l-8 5.9-8-5.9V17h16V8.4Z" />
    </svg>
  );
}

export function PhoneGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 2.5c.5-.2 1 0 1.3.4l2.2 3.3c.3.5.2 1.1-.2 1.5L8.4 9.2a11.7 11.7 0 0 0 6.4 6.4l1.5-1.5c.4-.4 1-.5 1.5-.2l3.3 2.2c.4.3.6.8.4 1.3l-.9 2.6c-.2.6-.8 1-1.4 1C9.5 21 3 14.5 3 5.7c0-.6.4-1.2 1-1.4l2.6-1.8Z" />
    </svg>
  );
}

export function ChatGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5c5.5 0 9.5 3.7 9.5 8.6s-4 8.6-9.5 8.6c-1 0-2-.1-2.9-.4L4.5 21.5l1.2-4.1C3.7 15.9 2.5 13.6 2.5 11.1 2.5 6.2 6.5 2.5 12 2.5Zm0 2C7.6 4.5 4.5 7.4 4.5 11.1c0 2 1 3.8 2.8 5l.6.4-.5 1.8 2-.8.5.1c.7.2 1.4.3 2.1.3 4.4 0 7.5-2.9 7.5-6.8S16.4 4.5 12 4.5Z" />
    </svg>
  );
}

export function HeartGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 20.5S3 15 3 8.9C3 6 5.2 4 7.8 4c1.7 0 3.2.9 4.2 2.3C13 4.9 14.5 4 16.2 4 18.8 4 21 6 21 8.9c0 6.1-9 11.6-9 11.6Zm0-2.4c2.6-1.7 7-5.4 7-9.2C19 7.1 17.7 6 16.2 6c-1.4 0-2.6 1-3.3 2.4h-1.8C10.4 7 9.2 6 7.8 6 6.3 6 5 7.1 5 8.9c0 3.8 4.4 7.5 7 9.2Z" />
    </svg>
  );
}
