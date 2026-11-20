"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Eased wheel and touchpad scrolling on the marketing pages. Native scrolling stays underneath, so sticky sections keep working. */
export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const backRef = useRef(false);
  const firstRef = useRef(true);

  useEffect(() => {
    // Back and forward keep the browser's remembered position instead of jumping to the top.
    const onPop = () => {
      backRef.current = true;
    };
    window.addEventListener("popstate", onPop);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => window.removeEventListener("popstate", onPop);
    }

    // allowNestedScroll: a sideways swipe over a horizontal slider scrolls the slider natively,
    // while ordinary up/down wheeling over it still goes through the smooth page scroll.
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, allowNestedScroll: true });
    lenisRef.current = lenis;
    let frame = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    });

    return () => {
      window.removeEventListener("popstate", onPop);
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // A new page always opens at the very top. Without this, a glide still running from the
  // previous page (a flick of the wheel or touchpad just before the click) carries on and
  // lands the new page halfway down.
  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
      return;
    }
    const lenis = lenisRef.current;
    const back = backRef.current;
    backRef.current = false;

    lenis?.stop();
    if (!back && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      lenis?.scrollTo(0, { immediate: true, force: true });
    }
    // Briefly ignore the tail of touchpad momentum, then scroll normally again.
    const resume = setTimeout(() => {
      lenis?.resize();
      lenis?.start();
    }, 350);
    return () => clearTimeout(resume);
  }, [pathname]);

  return null;
}
