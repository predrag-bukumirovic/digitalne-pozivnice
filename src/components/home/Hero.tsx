import Image from "next/image";
import { El, Section } from "@/components/canvas/Canvas";
import { Badge } from "./art";
import heroPhoto from "./hero.jpg";
import s from "./home.module.css";

export default function Hero() {
  return (
    <Section
      h={[816, 525]}
      className={s.hero}
      label="Uvod"
      backdrop={
        <div className={s.heroPhoto} aria-hidden="true">
          <div className={s.heroPhotoInner}>
            <Image
              src={heroPhoto}
              alt=""
              fill
              priority
              sizes="120vw"
              placeholder="blur"
            />
          </div>
        </div>
      }
    >
      <El
        d={[98, 219, 411]}
        m={[33, 172, 186]}
        fs={[16, 11]}
        tag="p"
        anim="fadeIn"
        className={`${s.sub} ${s.light}`}
      >
        Bez štampe i čekanja
      </El>
      <El
        d={[98, 258, 720, 346]}
        m={[33, 194, 243, 199]}
        fs={[87, 40]}
        tag="h1"
        anim="fadeIn"
        delay={0.25}
        className={`${s.serif} ${s.upper} ${s.light} ${s.heroTitle}`}
      >
        Digitalne
        <br />
        pozivnice za vaše
        <br />
        najlepše trenutke
      </El>

      <El
        d={[98, 627, 219, 46]}
        m={[33, 412, 177, 32]}
        fs={[13, 10]}
        href="/sabloni"
        className={`${s.pill} ${s.pillPink}`}
      >
        Pogledajte šablone
      </El>

      <El d={[989, 574, 146, 146]} m={[247, 72, 96, 96]} decorative>
        <Badge text="Digitalne pozivnice • jednim linkom • sa ljubavlju •" />
      </El>
    </Section>
  );
}
