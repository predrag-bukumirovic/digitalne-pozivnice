import type { StaticImageData } from "next/image";
import ModernInvitation from "@/invitations/modern/ModernInvitation";
import type { InvitationContent } from "@/invitations/types";
import { Cake, Decorations, Panel } from "./art";
import demoContent from "./content";
import demoPhoto from "./primer-foto.jpg";
import Envelope from "./Envelope";
import env from "./envelope.module.css";
import { display } from "./fonts";
import Hero from "./Hero";
import Months, { type MonthPhoto } from "./Months";
import styles from "./template.module.css";

export default function Template({
  content = demoContent,
  photo = demoPhoto,
  demo = true,
  cake = false,
  wordDate = false,
  months,
}: {
  content?: InvitationContent;
  photo?: StaticImageData;
  demo?: boolean;
  /** Draw a birthday cake above "Imate poziv!" on the envelope screen. */
  cake?: boolean;
  /** Hero date and time as "10. januar 2027." and "17:00h". */
  wordDate?: boolean;
  /** A photo for every month of the first year, shown before the closing. */
  months?: MonthPhoto[];
}) {
  const envelope = (
    <>
      <Envelope
        name={content.names}
        from={`${content.names} vas poziva na svoj prvi rođendan`}
        age={content.age ?? 1}
        photo={photo}
        panel={<Panel className={env.panelShape} />}
        decor={<Decorations className={env.decor} />}
        topper={cake ? <Cake className={env.topper} /> : undefined}
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
      hero={<Hero content={content} photo={photo} wordDate={wordDate} />}
      closingArt={<Cake className={styles.closingArt} />}
      extra={months?.length ? <Months name={content.names} months={months} date={content.date} /> : undefined}
      music={content.music ?? "/muzika/srecan-rodjendan.m4a"}
    />
  );
}
