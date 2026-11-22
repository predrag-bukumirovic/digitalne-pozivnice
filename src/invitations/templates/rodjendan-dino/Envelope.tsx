"use client";

import Image, { type StaticImageData } from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { useEnvelope } from "@/invitations/modern/useEnvelope";
import s from "./envelope.module.css";

const LETTER_COLORS = ["#5a9e3c", "#f08c3e", "#3fa69a", "#e5a92e"];
const PAINT = ["#6aa84f", "#f08c3e", "#5fb8a8", "#f3bf4f", "#a9d26f"];

// Confetti thrown out of the egg: [dx, dy] in envelope widths, and a spin.
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

// Still confetti on the background: [left %, top %].
const DOTS: [number, number, number][] = [
  [6, 26, 20],
  [92, 22, -30],
  [12, 48, 60],
  [88, 44, 15],
  [5, 72, -40],
  [94, 70, 35],
  [16, 88, 10],
  [84, 90, -20],
  [30, 18, 45],
  [70, 16, -55],
];

/**
 * The invitation arrives in an envelope sealed with a dinosaur egg. A tap on the egg hatches it:
 * the child's photo pops out, the flap opens, the card slides out, and the page fades into the
 * invitation. The tap also counts as the guest's first touch, so the music starts with it.
 */
export default function Envelope({
  name,
  age,
  photo,
  garland,
  cardGarland,
  baby,
  leaves,
}: {
  name: string;
  age?: number;
  photo?: StaticImageData;
  /** Server-rendered drawings, passed in so the art stays out of the browser bundle. */
  garland: ReactNode;
  cardGarland: ReactNode;
  baby: ReactNode;
  leaves: [ReactNode, ReactNode];
}) {
  const { stage, visible, open } = useEnvelope();

  if (!visible) return null;

  return (
    <div className={`${s.overlay} ${s[stage]}`} role="dialog" aria-modal="true" aria-label="Koverta sa pozivnicom">
      {garland}
      <div className={s.dots} aria-hidden="true">
        {DOTS.map(([x, y, r], i) => (
          <span key={i} style={{ left: `${x}%`, top: `${y}%`, rotate: `${r}deg`, background: PAINT[i % PAINT.length] }} />
        ))}
      </div>

      <div className={s.stage}>
        <div className={s.photo} aria-hidden="true">
          {photo ? <Image src={photo} alt="" fill sizes="200px" className={s.photoImg} priority /> : baby}
        </div>

        <div className={s.title}>
          <p className={s.invited}>Imate poziv!</p>
          <p className={s.from}>{name} vas zove na dino žurku</p>
        </div>

        <div className={s.envelope} onClick={open}>
          {leaves[0]}
          {leaves[1]}
          <svg className={`${s.layer} ${s.back}`} viewBox="0 0 100 68" aria-hidden="true">
            <rect width="100" height="68" rx="3" fill="#a9cf7e" />
          </svg>

          <div className={s.card} aria-hidden="true">
            {cardGarland}
            <p className={s.cardScript}>Dino žurka!</p>
            <p className={s.cardName}>
              {[...name.toUpperCase()].map((letter, i) => (
                <span key={i} style={{ color: LETTER_COLORS[i % LETTER_COLORS.length] }}>
                  {letter}
                </span>
              ))}
            </p>
            {age !== undefined && <p className={s.cardAge}>puni {age}!</p>}
          </div>

          <svg className={`${s.layer} ${s.pocket}`} viewBox="0 0 100 68" aria-hidden="true">
            <path d="M0 3Q0 0 2.2 1.6L50 40 97.8 1.6Q100 0 100 3V65Q100 68 97 68H3Q0 68 0 65Z" fill="#d6ebb6" />
            <path d="M0.5 67.5 43 35M99.5 67.5 57 35" stroke="#9cc977" strokeWidth="0.5" fill="none" />
            <g opacity="0.7">
              <ellipse cx="12" cy="52" rx="0.9" ry="1.7" fill="#f08c3e" transform="rotate(30 12 52)" />
              <ellipse cx="86" cy="50" rx="0.9" ry="1.7" fill="#5fb8a8" transform="rotate(-30 86 50)" />
              <ellipse cx="22" cy="62" rx="0.9" ry="1.7" fill="#f3bf4f" transform="rotate(60 22 62)" />
              <ellipse cx="78" cy="62" rx="0.9" ry="1.7" fill="#6aa84f" transform="rotate(-50 78 62)" />
            </g>
          </svg>
          <p className={s.address} aria-hidden="true">
            Za naše drage goste
          </p>

          <svg className={`${s.layer} ${s.flap}`} viewBox="0 0 100 68" aria-hidden="true">
            <path d="M0 2.5Q0 0 2.5 0H97.5Q100 0 100 2.5L55 37.6Q50 41.6 45 37.6Z" fill="#bcdc93" stroke="#8fbf63" strokeWidth="0.5" />
            <path d="M8 1.5Q50 10 92 1.5" stroke="#c9a36a" strokeWidth="0.45" fill="none" />
            {[14, 23, 32, 41, 59, 68, 77, 86].map((x, i) => {
              const y = 1.5 + 8.5 * (1 - ((x - 50) / 42) ** 2) * 0.5;
              return <path key={x} d={`M${x - 3} ${y}H${x + 3}L${x} ${y + 6}Z`} fill={PAINT[i % 4]} />;
            })}
          </svg>

          <button
            type="button"
            className={s.egg}
            onClick={(event) => {
              event.stopPropagation();
              open();
            }}
            aria-label="Dodirnite jaje i otvorite pozivnicu"
          >
            <svg className={`${s.eggHalf} ${s.eggBottom}`} viewBox="0 0 60 80" aria-hidden="true">
              <path
                d="M4.6 40 12 34l7 7 7-7 7 7 7-7 7 7 8.4-3c.6 4 .6 6 .6 8 0 18-11 30-26 30S4 64 4 46c0-2 .2-4 .6-6Z"
                fill="#f8f0de"
                stroke="#d9c49f"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <g fill="#5fb8a8" opacity="0.55">
                <circle cx="18" cy="56" r="4" />
                <circle cx="40" cy="62" r="5" />
                <circle cx="30" cy="71" r="3" />
                <circle cx="47" cy="49" r="2.6" />
              </g>
            </svg>
            <svg className={`${s.eggHalf} ${s.eggTop}`} viewBox="0 0 60 80" aria-hidden="true">
              <path
                d="M4.6 40 12 34l7 7 7-7 7 7 7-7 7 7 8.4-3C55 22 44.5 4 30 4S5 22 4.6 40Z"
                fill="#f8f0de"
                stroke="#d9c49f"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <g fill="#5fb8a8" opacity="0.55">
                <circle cx="22" cy="19" r="3.5" />
                <circle cx="38" cy="25" r="4.5" />
                <circle cx="27" cy="31" r="2.4" />
              </g>
              <ellipse cx="20" cy="15" rx="5" ry="3" fill="#fff" opacity="0.6" />
            </svg>
          </button>

          <div className={s.burst} aria-hidden="true">
            {BURST.map(([dx, dy, r], i) => (
              <span
                key={i}
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

        <p className={s.hint}>Dodirnite jaje</p>
      </div>
    </div>
  );
}
