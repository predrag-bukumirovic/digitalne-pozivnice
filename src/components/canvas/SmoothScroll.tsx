"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

/** Eased wheel and touchpad scrolling on the marketing pages. Native scrolling stays underneath, so sticky sections keep working. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // allowNestedScroll: a sideways swipe over a horizontal slider scrolls the slider natively,
    // while ordinary up/down wheeling over it still goes through the smooth page scroll.
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, allowNestedScroll: true });
    let frame = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
