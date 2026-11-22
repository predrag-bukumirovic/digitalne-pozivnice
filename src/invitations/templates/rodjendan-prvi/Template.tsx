import type { StaticImageData } from "next/image";
import ModernInvitation from "@/invitations/modern/ModernInvitation";
import type { InvitationContent } from "@/invitations/types";
import { Decorations, Panel } from "./art";
import demoContent from "./content";
import demoPhoto from "./primer-foto.jpg";
import Envelope from "./Envelope";
import env from "./envelope.module.css";
import { display } from "./fonts";
import Hero from "./Hero";
import styles from "./template.module.css";

export default function Template({
  content = demoContent,
  photo = demoPhoto,
  demo = true,
}: {
  content?: InvitationContent;
  photo?: StaticImageData;
  demo?: boolean;
}) {
  const envelope = (
    <>
      <Envelope
        name={content.names}
        from={`${content.names} vas zove na svoj prvi rođendan`}
        age={content.age ?? 1}
        photo={photo}
        panel={<Panel className={env.panelShape} />}
        decor={<Decorations className={env.decor} />}
      />
      {/* Without JavaScript the seal can't be opened, so skip the envelope altogether. */}
      <noscript>
        <style>{`.${env.overlay}{display:none}`}</style>
      </noscript>
    </>
  );

  return (
    <ModernInvitation
      content={content}
      demo={demo}
      className={`${display.variable} ${styles.theme}`}
      intro={envelope}
      hero={<Hero content={content} photo={photo} />}
      music={content.music ?? "/muzika/srecan-rodjendan.m4a"}
    />
  );
}
