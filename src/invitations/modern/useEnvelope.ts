"use client";

import { useEffect, useRef, useState } from "react";
import { INVITATION_OPEN } from "./events";

/**
 * closed → hatching (the seal breaks, the photo pops out) → opening (photo rises, flap opens,
 * card slides out) → leaving (card zooms, everything fades) → gone. The stage is set as a class
 * on the envelope's overlay; each template animates it in its own look.
 */
export type EnvelopeStage = "closed" | "hatching" | "opening" | "leaving" | "gone";

const TIMING = { hatch: 2300, open: 2900, leave: 900 };

/** Timeline shared by the opening envelopes. The page behind can't scroll until the envelope is gone. */
export function useEnvelope() {
  const [stage, setStage] = useState<EnvelopeStage>("closed");
  const timers = useRef<number[]>([]);
  const visible = stage !== "gone";

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((id) => window.clearTimeout(id));
  }, []);

  useEffect(() => {
    if (!visible) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [visible]);

  const later = (fn: () => void, ms: number) => timers.current.push(window.setTimeout(fn, ms));

  const open = () => {
    if (stage !== "closed") return;
    // Still inside the guest's tap, so the browser lets the music start.
    window.dispatchEvent(new Event(INVITATION_OPEN));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage("leaving");
      later(() => setStage("gone"), TIMING.leave);
      return;
    }
    setStage("hatching");
    later(() => setStage("opening"), TIMING.hatch);
    later(() => setStage("leaving"), TIMING.hatch + TIMING.open);
    later(() => setStage("gone"), TIMING.hatch + TIMING.open + TIMING.leave);
  };

  return { stage, visible, open };
}
