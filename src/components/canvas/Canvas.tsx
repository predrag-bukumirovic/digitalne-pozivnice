import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import styles from "./canvas.module.css";

/**
 * Pages built like the reference design: every element sits at fixed coordinates on a
 * 1200px desktop canvas and a 320px mobile canvas, both scaled through --u.
 */

/** [x, y, width, height?, rotation in degrees?] in design pixels. */
export type Box = readonly [x: number, y: number, w: number, h?: number, a?: number];
export type Anim = "fadeIn" | "slideInUp" | "slideInRight";

const px = (n: number) => `calc(${n} * var(--u))`;

function boxVars(box: Box | null, prefix: "" | "m"): Record<string, string> {
  if (!box) return {};
  const [x, y, w, h, a] = box;
  return {
    [`--${prefix}l`]: px(x),
    [`--${prefix}t`]: px(y),
    [`--${prefix}w`]: px(w),
    [`--${prefix}h`]: h === undefined ? "auto" : px(h),
    [`--${prefix}r`]: `${a ?? 0}deg`,
  };
}

type ElProps = {
  /** Desktop box, or null to hide on desktop. */
  d: Box | null;
  /** Mobile box, or null to hide on phones. */
  m: Box | null;
  /** Font size in design pixels: [desktop, mobile]. */
  fs?: readonly [number, number];
  anim?: Anim;
  /** Animation length in seconds. */
  dur?: number;
  delay?: number;
  tag?: "div" | "h1" | "h2" | "h3" | "p" | "span" | "ul";
  href?: string;
  label?: string;
  decorative?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export function El({ d, m, fs, anim, dur, delay, tag: Tag = "div", href, label, decorative, className, style, children }: ElProps) {
  const props = {
    className: [styles.el, fs && styles.fs, !d && styles.mobileOnly, !m && styles.desktopOnly, className]
      .filter(Boolean)
      .join(" "),
    style: {
      ...boxVars(d, ""),
      ...boxVars(m, "m"),
      ...(fs && { "--fs": px(fs[0]), "--mfs": px(fs[1]) }),
      ...(dur && { "--dur": `${dur}s` }),
      ...(delay && { "--delay": `${delay}s` }),
      ...style,
    } as CSSProperties,
    "data-anim": anim,
    "aria-hidden": decorative || undefined,
  };

  if (href) {
    return (
      <Link href={href} aria-label={label} {...props}>
        {children}
      </Link>
    );
  }
  return <Tag {...props}>{children}</Tag>;
}

type SectionProps = {
  /** Height in design pixels: [desktop, mobile]. For `screen` sections this is the minimum. */
  h: readonly [number, number];
  /** As tall as the window, like the reference's full-height canvases. */
  screen?: boolean;
  /** Stays pinned to the top while the next sections scroll over it. */
  sticky?: boolean;
  className?: string;
  /** Full-bleed layers drawn behind the canvas (backgrounds, textures). */
  backdrop?: ReactNode;
  id?: string;
  label?: string;
  children?: ReactNode;
};

export function Section({ h, screen, sticky, className, backdrop, id, label, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={[styles.section, screen && styles.screen, sticky && styles.sticky, className].filter(Boolean).join(" ")}
      style={{ "--sh": px(h[0]), "--msh": px(h[1]) } as CSSProperties}
    >
      {backdrop}
      <div className={styles.canvas}>{children}</div>
    </section>
  );
}
