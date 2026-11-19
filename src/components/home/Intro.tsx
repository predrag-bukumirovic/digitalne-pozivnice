import { El, Section } from "@/components/canvas/Canvas";
import { Polaroid, Shot, WaxSeal } from "./art";
import s from "./home.module.css";

/**
 * Red statement pinned to the window, then a transparent layer that carries the photos up over it.
 */
export default function Intro() {
  return (
    <>
      <Section h={[778, 586]} screen sticky className={s.intro} label="O pozivnicama">
        <El d={[395, 162, 411]} m={[67, 94, 186]} fs={[16, 11]} tag="p" anim="fadeIn" className={`${s.sub} ${s.light} ${s.center}`}>
          Tu smo za vas.
        </El>
        <El d={[231, 215, 739, 136]} m={[38, 124, 244, 109]} fs={[78, 37]} tag="h2" anim="fadeIn" className={`${s.serif} ${s.upper} ${s.light} ${s.center}`}>
          Pozivnica nije samo obaveštenje.
        </El>
        <El d={[196, 378, 809, 72]} m={[38, 239, 245, 59]} fs={[70, 32]} tag="p" anim="fadeIn" className={`${s.serif} ${s.italic} ${s.light} ${s.center}`}>
          To je prvi utisak slavlja.
        </El>
        <El d={[281, 486, 639, 115]} m={[46, 319, 230, 157]} fs={[15, 11]} anim="fadeIn" className={`${s.para} ${s.loose} ${s.light} ${s.center}`}>
          <p>
            U JustSend-u ne verujemo u pozivnice koje se izgube u porukama, u PDF koji niko ne otvori, ni u dizajn koji
            izgleda lepo, a ne kaže ništa.
          </p>
          <p>
            Svaku pozivnicu slažemo ručno, sa satnicom, mapom i potvrdom dolaska, tako da gosti imaju sve na jednom mestu, a
            vi mir pred veliki dan.
          </p>
        </El>
      </Section>

      <Section h={[778, 586]} screen sticky>
        <Shot d={[-35, 124, 184, 214]} m={[-12, 40, 71, 93]} slug="rodjendan-prvi" anim="fadeIn" dur={0.25} />
        <Polaroid d={[1047, 362, 257, 322, 6]} m={[260, 412, 106, 134, 7]} slug="proslava-bebe" />
        <El d={[416, 289, 157, 154, 12]} m={[102, 160, 70, 77]} decorative>
          <div data-spin className={s.spin}>
            <WaxSeal />
          </div>
        </El>
      </Section>
    </>
  );
}
