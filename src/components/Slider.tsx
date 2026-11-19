"use client";

import { Children, type ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Slider.module.css";

/**
 * Swipeable row of cards on CSS scroll snap: one card and a peek of the next on phones, three on
 * wide screens. Arrows and dots move by one card; dots count the positions you can actually reach.
 */
export default function Slider({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const slides = Children.toArray(children);
  const [view, setView] = useState({
    index: 0,
    positions: slides.length,
    atStart: true,
    atEnd: false,
  });

  const step = () => {
    const el = track.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return 0;
    return (
      first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0")
    );
  };

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const size = step();
      if (!size) return;
      const visible = Math.max(
        1,
        Math.round(
          (el.clientWidth - parseFloat(getComputedStyle(el).paddingLeft) * 2) /
            size,
        ),
      );
      const positions = Math.max(1, slides.length - visible + 1);
      setView({
        index: Math.min(positions - 1, Math.round(el.scrollLeft / size)),
        positions,
        atStart: el.scrollLeft <= 2,
        atEnd: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
      });
    };
    el.addEventListener("scroll", update, { passive: true });
    const resize = new ResizeObserver(update);
    resize.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      resize.disconnect();
    };
  }, [slides.length]);

  const scrollTo = (index: number) =>
    track.current?.scrollTo({ left: index * step(), behavior: "smooth" });

  return (
    <div
      className={styles.slider}
      role="region"
      aria-roledescription="slajder"
      aria-label={label}
    >
      {/* Native horizontal scrolling here, not the page's smooth-scroll wheel handling. */}
      <div
        ref={track}
        className={styles.track}
        tabIndex={0}
        data-lenis-prevent-wheel
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={styles.slide}
            role="group"
            aria-roledescription="kartica"
            aria-label={`${i + 1} od ${slides.length}`}
          >
            {slide}
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => scrollTo(view.index - 1)}
          disabled={view.atStart}
          aria-label="Prethodno pitanje"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 5 8 12l7 7" />
          </svg>
        </button>
        <div className={styles.dots}>
          {Array.from({ length: view.positions }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === view.index ? styles.dotActive : ""}`}
              onClick={() => scrollTo(i)}
              aria-label={`Idi na ${i + 1}.`}
              aria-current={i === view.index}
            />
          ))}
        </div>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => scrollTo(view.index + 1)}
          disabled={view.atEnd}
          aria-label="Sledeće pitanje"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
