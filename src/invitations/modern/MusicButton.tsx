"use client";

import { useEffect, useRef, useState } from "react";
import { INVITATION_OPEN } from "./events";
import styles from "./modern.module.css";

/**
 * Background music with a round play/pause button in the corner. Browsers allow sound only after
 * the guest touches the page, so it starts on the first tap anywhere, or, when the invitation
 * opens with an intro (`waitForOpen`), only when the guest opens it.
 */
export default function MusicButton({ src, waitForOpen = false }: { src: string; waitForOpen?: boolean }) {
  const audio = useRef<HTMLAudioElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const armed = useRef(false);
  const stoppedByGuest = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const element = audio.current;
    if (!element) return;
    element.volume = 0.6;

    const start = () => {
      if (armed.current && !stoppedByGuest.current && element.paused) element.play().catch(() => {});
    };
    const arm = () => {
      armed.current = true;
      start();
    };

    const firstTouch = (event: Event) => {
      // A tap on the button itself is handled by its own click.
      if (event.target instanceof Node && button.current?.contains(event.target)) return;
      arm();
      removeFirstTouch();
    };
    const triggers = ["pointerdown", "keydown"] as const;
    const removeFirstTouch = () => triggers.forEach((type) => window.removeEventListener(type, firstTouch));

    if (waitForOpen) {
      window.addEventListener(INVITATION_OPEN, arm);
    } else {
      triggers.forEach((type) => window.addEventListener(type, firstTouch, { passive: true }));
      arm(); // plays right away where the browser allows it
    }

    // Quiet while the guest is in another tab or app.
    const visibility = () => (document.hidden ? element.pause() : start());
    document.addEventListener("visibilitychange", visibility);

    return () => {
      removeFirstTouch();
      window.removeEventListener(INVITATION_OPEN, arm);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [waitForOpen]);

  const toggle = () => {
    const element = audio.current;
    if (!element) return;
    armed.current = true;
    if (element.paused) {
      stoppedByGuest.current = false;
      element.play().catch(() => {});
    } else {
      stoppedByGuest.current = true;
      element.pause();
    }
  };

  return (
    <>
      <audio ref={audio} src={src} loop preload="auto" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
      <button
        ref={button}
        type="button"
        className={`${styles.music} ${playing ? styles.musicOn : ""}`}
        onClick={toggle}
        aria-label={playing ? "Zaustavi muziku" : "Pusti muziku"}
        aria-pressed={playing}
      >
        {playing ? (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1.2" />
            <rect x="14" y="5" width="4" height="14" rx="1.2" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6Z" />
          </svg>
        )}
      </button>
    </>
  );
}
