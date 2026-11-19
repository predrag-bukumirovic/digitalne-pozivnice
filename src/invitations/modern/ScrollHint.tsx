"use client";

import { useEffect, useState } from "react";
import styles from "./modern.module.css";

/** "Skrolujte nadole" pill at the bottom of the first screen; it slips away once the guest scrolls. */
export default function ScrollHint() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`${styles.scrollHint} ${hidden ? styles.scrollHintHidden : ""}`}
      onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })}
      tabIndex={hidden ? -1 : 0}
      aria-hidden={hidden}
    >
      Skrolujte nadole
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
}
