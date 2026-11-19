import { El, Section } from "@/components/canvas/Canvas";
import { Polaroid, Shot } from "./art";
import s from "./home.module.css";

export default function About() {
  return (
    <Section h={[826, 827]} className={s.about} label="O nama">
      <El d={[119, 140, 411]} m={[35, 48, 242]} fs={[16, 12]} tag="p" anim="fadeIn" className={`${s.sub} ${s.dark}`}>
        Upoznajte JustSend
      </El>
      <El d={[119, 175, 459, 73]} m={[35, 75, 253, 40]} fs={[68, 36]} tag="h2" anim="fadeIn" delay={0.25} className={`${s.serif} ${s.wine}`} style={{ letterSpacing: "-0.01em", lineHeight: 1.2 }}>
        Ovo je JustSend
      </El>
      <El d={[119, 270, 459, 314]} m={[35, 127, 242, 277]} fs={[15, 11]} anim="fadeIn" className={`${s.para} ${s.justify} ${s.dark}`}>
        <p>JustSend je nastao za sve koji žele da njihova proslava počne lepo, još od prve poruke koju pošalju gostima.</p>
        <p>
          Ne verujemo u pozivnice koje se izgube u grupnim porukama. Verujemo u pozivnicu koja izgleda kao luksuzna
          štampana kartica, a otvara se jednim dodirom.
        </p>
        <p>
          Svaku pozivnicu slažemo ručno: vaša imena, satnicu, mapu do sale i brojeve za potvrdu dolaska. Pre slanja dobijate
          link na pregled, a ispravke teksta su bez doplate.
        </p>
        <p>Jer kada su gosti dobro obavešteni, sve ostalo ide lakše.</p>
      </El>
      <El d={[119, 612, 219, 46]} m={[35, 426, 136, 32]} fs={[13, 9]} href="/o-nama" className={`${s.pill} ${s.pillWine}`}>
        O nama
      </El>

      <Shot d={[864, 69, 336, 445]} m={[35, 501, 146, 189]} slug="vencanje" round={false} />
      <Polaroid d={[708, 327, 327, 409, 6]} m={[128, 583, 157, 196, 2]} slug="krstenje-maslina" />
    </Section>
  );
}
