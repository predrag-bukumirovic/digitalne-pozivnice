"use client";

import { useEffect, useRef } from "react";
import { El, Section } from "@/components/canvas/Canvas";
import s from "./home.module.css";

const CURVE = "M0 100 C 200 20, 400 180, 600 100 S 1000 20, 1200 100";
const phrases = ["Venčanja", "Krštenja", "Rođendani", "Proslave beba", "Poslovni događaji", "Pozivnica jednim linkom"];
const line = Array.from({ length: 3 }, () => phrases.map((p) => `${p}  •  `).join("")).join("");

/**
 * The white page above ends in a wave, and a pink ribbon follows it with words gliding
 * along the curve, the same way the reference's marquee does.
 */
export default function Marquee() {
  const first = useRef<SVGTextPathElement>(null);
  const second = useRef<SVGTextPathElement>(null);

  useEffect(() => {
    const a = first.current;
    const b = second.current;
    if (!a || !b || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (cancelled) return;
      const length = a.getComputedTextLength();
      let offsetA = 0;
      let offsetB = length;
      const step = () => {
        offsetA -= 0.4;
        offsetB -= 0.4;
        if (offsetA <= -length) offsetA = offsetB + length;
        if (offsetB <= -length) offsetB = offsetA + length;
        a.setAttribute("startOffset", String(offsetA));
        b.setAttribute("startOffset", String(offsetB));
        frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Section h={[297, 118]} className={s.marquee} label="Prilike">
      <El d={[-700, -80, 2600, 375]} m={[-269, 0, 820, 118]} decorative>
        <svg viewBox="0 0 1200 173" className={s.marqueeSvg} preserveAspectRatio="xMinYMin meet">
          <path transform="scale(-1, 1) translate(-1200, 0)" d="M0 0 H1200 V100 C 1000 20, 800 180, 600 100 S 200 20, 0 100 Z" fill="#fff" />
          <g transform="translate(0 24)">
            <path id="marquee-curve" d={CURVE} fill="none" stroke="var(--color-pink)" strokeWidth="50" />
            <text className={s.marqueeText}>
              <textPath ref={first} href="#marquee-curve" startOffset="0">
                {line}
              </textPath>
              <textPath ref={second} href="#marquee-curve" startOffset="100%">
                {line}
              </textPath>
            </text>
          </g>
        </svg>
      </El>
    </Section>
  );
}
