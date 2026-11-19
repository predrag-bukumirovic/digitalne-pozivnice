import type { StaticImageData } from "next/image";
import ModernInvitation from "@/invitations/modern/ModernInvitation";
import type { InvitationContent } from "@/invitations/types";
import { ClosingArt, Garland, HatchlingArt, LeafCluster } from "./art";
import demoContent from "./content";
import Envelope from "./Envelope";
import env from "./envelope.module.css";
import { display, script } from "./fonts";
import Hero from "./Hero";
import styles from "./template.module.css";

export default function Template({
  content = demoContent,
  photo,
  demo = true,
}: {
  content?: InvitationContent;
  /** The child's photo that pops out of the egg; without it, the baby dinosaur hatches. */
  photo?: StaticImageData;
  demo?: boolean;
}) {
  const envelope = (
    <>
      <Envelope
        name={content.names}
        age={content.age}
        photo={photo}
        garland={
          <div className={env.garland} aria-hidden="true">
            <Garland className={env.tile} flip />
            <Garland className={env.tile} />
            <Garland className={env.tile} flip />
          </div>
        }
        cardGarland={<Garland className={env.cardGarland} />}
        baby={<HatchlingArt className={env.babyArt} />}
        leaves={[<LeafCluster key="top" className={`${env.leaves} ${env.leavesTop}`} />, <LeafCluster key="bottom" className={`${env.leaves} ${env.leavesBottom}`} />]}
      />
      {/* Without JavaScript the egg can't be opened, so skip the envelope altogether. */}
      <noscript>
        <style>{`.${env.overlay}{display:none}`}</style>
      </noscript>
    </>
  );

  return (
    <ModernInvitation
      content={content}
      demo={demo}
      className={`${display.variable} ${script.variable} ${styles.theme}`}
      intro={envelope}
      hero={<Hero content={content} />}
      music={content.music ?? "/muzika/srecan-rodjendan.m4a"}
      closingArt={<ClosingArt />}
    />
  );
}
