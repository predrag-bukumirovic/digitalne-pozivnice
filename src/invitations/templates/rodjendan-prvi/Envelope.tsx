"use client";

import Image, { type StaticImageData } from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { useEnvelope } from "@/invitations/modern/useEnvelope";
import s from "./envelope.module.css";

const LETTER_COLORS = ["#1f9d55", "#f6c026", "#2f6fe4", "#e03a3e", "#8b4fd8", "#f2792b"];
const PAINT = ["#1f8f4e", "#f6b21a", "#2457c5", "#e03a3e", "#f2792b"];

// Confetti thrown out of the seal: [dx, dy] in envelope widths, and a spin. Every other piece is a star.
const BURST: [number, number, number][] = [
  [-0.34, -0.22, 120],
  [-0.26, -0.4, -80],
  [-0.08, -0.48, 200],
  [0.1, -0.46, -150],
  [0.28, -0.38, 90],
  [0.36, -0.18, -60],
  [0.3, 0.06, 140],
  [-0.32, 0.04, -120],
  [-0.18, -0.3, 60],
  [0.2, -0.26, -200],
  [0.02, -0.34, 170],
  [-0.42, -0.08, 30],
];

// Airmail stripes along the envelope's edges, in the template's colors.
const STRIPES = ["#1f8f4e", "#fbf3d6", "#f6b21a", "#fbf3d6", "#2457c5", "#fbf3d6", "#e03a3e", "#fbf3d6"];

/** `angle` keeps the stripes across the edges they run along: 45° for the pocket, upright for the flap. */
function Airmail({ id, angle = 45 }: { id: string; angle?: number }) {
  return (
    <pattern id={id} width={STRIPES.length * 1.1} height="4" patternUnits="userSpaceOnUse" patternTransform={`rotate(${angle})`}>
      {STRIPES.map((color, i) => (
        <rect key={i} x={i * 1.1} width="1.1" height="4" fill={color} />
      ))}
    </pattern>
  );
}

const POCKET = "M0 3Q0 0 2.2 1.6L50 40 97.8 1.6Q100 0 100 3V65Q100 68 97 68H3Q0 68 0 65Z";
const FLAP = "M0 2.5Q0 0 2.5 0H97.5Q100 0 100 2.5L55 37.6Q50 41.6 45 37.6Z";

/**
 * The invitation arrives in a striped airmail envelope sealed with a big "1". A tap on the seal
 * pops it: confetti flies, the child's photo comes out, the flap opens, the card slides out, and
 * the page fades into the invitation. The tap also starts the music.
 */
export default function Envelope({
  name,
  from,
  age = 1,
  photo,
  panel,
  decor,
}: {
  name: string;
  /** Line under "Imate poziv!", e.g. "Jovan vas zove na svoj prvi rođendan". */
  from: string;
  age?: number;
  photo?: StaticImageData;
  /** Server-rendered drawings, passed in so the art stays out of the browser bundle. */
  panel: ReactNode;
  decor: ReactNode;
}) {
  const { stage, visible, open } = useEnvelope();

  if (!visible) return null;

  return (
    <div className={`${s.overlay} ${s[stage]}`} role="dialog" aria-modal="true" aria-label="Koverta sa pozivnicom">
      {decor}

      <div className={s.stage}>
        <div className={s.panel} aria-hidden="true">
          {panel}
        </div>

        <div className={s.photo} aria-hidden="true">
          {photo && (
            <span className={s.photoInner}>
              <Image src={photo} alt="" fill sizes="200px" className={s.photoImg} priority />
            </span>
          )}
        </div>

        <div className={s.title}>
          <p className={s.invited}>
            {[..."Imate poziv!"].map((letter, i) => (
              <span key={i} style={{ color: LETTER_COLORS[i % LETTER_COLORS.length] }}>
                {letter}
              </span>
            ))}
          </p>
          <p className={s.from}>{from}</p>
        </div>

        <div className={s.envelope} onClick={open}>
          <svg className={`${s.layer} ${s.back}`} viewBox="0 0 100 68" aria-hidden="true">
            <rect width="100" height="68" rx="3" fill="#2457c5" />
          </svg>

          <div className={s.card} aria-hidden="true">
            <span className={s.cardStripes} />
            <p className={s.cardFun}>Žurka!</p>
            <p className={s.cardName}>
              {[...name.toUpperCase()].map((letter, i) => (
                <span key={i} style={{ color: LETTER_COLORS[i % LETTER_COLORS.length] }}>
                  {letter}
                </span>
              ))}
            </p>
            <p className={s.cardAge}>puni {age}!</p>
          </div>

          <svg className={`${s.layer} ${s.pocket}`} viewBox="0 0 100 68" aria-hidden="true">
            <defs>
              <Airmail id="trake-airmail-pocket" />
              <clipPath id="trake-pocket-clip">
                <path d={POCKET} />
              </clipPath>
            </defs>
            <path d={POCKET} fill="#fbf3d6" />
            <path d="M0.5 67.5 43 35M99.5 67.5 57 35" stroke="#e8d9a8" strokeWidth="0.5" fill="none" />
            <path d="M1.3 3V66.7H98.7V3" stroke="url(#trake-airmail-pocket)" strokeWidth="2.6" fill="none" clipPath="url(#trake-pocket-clip)" />
          </svg>
          <p className={s.address} aria-hidden="true">
            Za naše drage goste
          </p>

          <svg className={`${s.layer} ${s.flap}`} viewBox="0 0 100 68" aria-hidden="true">
            <defs>
              <Airmail id="trake-airmail-flap" angle={0} />
              <clipPath id="trake-flap-clip">
                <path d={FLAP} />
              </clipPath>
            </defs>
            <path d={FLAP} fill="#f8ecc4" />
            <path d={FLAP} stroke="url(#trake-airmail-flap)" strokeWidth="5" fill="none" clipPath="url(#trake-flap-clip)" />
          </svg>

          <button
            type="button"
            className={s.seal}
            onClick={(event) => {
              event.stopPropagation();
              open();
            }}
            aria-label="Dodirnite jedinicu i otvorite pozivnicu"
          >
            <svg className={s.sealArt} viewBox="0 0 100 100" aria-hidden="true">
              <g fill="#f6b21a">
                <circle cx="50" cy="50" r="42" />
                {Array.from({ length: 16 }, (_, i) => {
                  const angle = (i / 16) * Math.PI * 2;
                  return <circle key={i} cx={50 + Math.cos(angle) * 41} cy={50 + Math.sin(angle) * 41} r="8.5" />;
                })}
              </g>
              <circle cx="50" cy="50" r="36" fill="#e03a3e" />
              <circle cx="50" cy="50" r="30.5" fill="none" stroke="#fff" strokeWidth="1.6" strokeDasharray="3.2 3.2" opacity="0.8" />
            </svg>
            <span className={s.sealNumber}>{age}</span>
          </button>

          <div className={s.burst} aria-hidden="true">
            {BURST.map(([dx, dy, r], i) => (
              <span
                key={i}
                className={i % 2 ? s.star : undefined}
                style={
                  {
                    "--dx": `calc(var(--W) * ${dx})`,
                    "--dy": `calc(var(--W) * ${dy})`,
                    "--r": `${r}deg`,
                    background: PAINT[i % PAINT.length],
                  } as CSSProperties
                }
              />
            ))}
          </div>
        </div>

        <p className={s.hint}>Dodirnite jedinicu</p>
      </div>
    </div>
  );
}
