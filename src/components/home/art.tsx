import type { ComponentType } from "react";
import { El, type Box } from "@/components/canvas/Canvas";
import { invitationBySlug } from "@/invitations/registry";
import styles from "./home.module.css";

/** Live preview of one of our templates, used everywhere the reference shows a photo. */
export function Preview({ slug }: { slug: string }) {
  const { Preview: Component } = invitationBySlug(slug) as { Preview: ComponentType };
  return <Component />;
}

/** Rounded window holding a template preview. */
export function Shot({ d, m, slug, round = true, anim, dur }: { d: Box; m: Box | null; slug: string; round?: boolean; anim?: "fadeIn"; dur?: number }) {
  return (
    <El d={d} m={m} anim={anim} dur={dur} className={`${styles.shot} ${round ? styles.round10 : ""}`} decorative>
      <Preview slug={slug} />
    </El>
  );
}

/** Instant-camera frame with a template inside, like the reference's polaroids. */
export function Polaroid({ d, m, slug }: { d: Box; m: Box | null; slug: string }) {
  return (
    <El d={d} m={m} className={styles.polaroid} decorative>
      <div className={styles.polaroidPhoto}>
        <Preview slug={slug} />
      </div>
    </El>
  );
}

export { Badge, ChatGlyph, Envelope, HeartGlyph, MailGlyph, PhoneGlyph, WaxSeal } from "./glyphs";
