"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Eased wheel and touchpad scrolling on the marketing pages and every invitation. Native scrolling
 * stays underneath, so sticky sections keep working.
 * `fromTop` (invitations): the page always opens at its beginning, never where it was left.
 */
export default function SmoothScroll({ fromTop = false }: { fromTop?: boolean }) {
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
    // While the menu or an invitation's envelope locks the page (overflow: hidden on <html>),
    // Lenis leaves the wheel alone, so the page behind can't move.
    const root = document.documentElement;
    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      allowNestedScroll: true,
      virtualScroll: () => root.style.overflow !== "hidden",
    });
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

  // An invitation starts from its beginning also on reload, on reopening the link and on coming
  // back to it, where the browser would otherwise put back the old position. Only while it is open.
  useEffect(() => {
    if (!fromTop) return;
    const before = history.scrollRestoration;
    history.scrollRestoration = "manual";
    const toTop = () => {
      if (window.location.hash) return;
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    };
    toTop();
    // A page brought back from the back/forward cache isn't mounted again.
    const onShow = (event: PageTransitionEvent) => {
      if (event.persisted) toTop();
    };
    window.addEventListener("pageshow", onShow);
    return () => {
      window.removeEventListener("pageshow", onShow);
      history.scrollRestoration = before;
    };
  }, [fromTop]);

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
