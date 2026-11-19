import { El, Section } from "@/components/canvas/Canvas";
import PhoneFrame from "@/components/PhoneFrame";
import { Preview } from "./art";
import s from "./home.module.css";

/** Where the reference promotes its podcast: a phone with a live invitation and links to try the demos. */
export default function LiveDemo() {
  return (
    <Section h={[736, 733]} className={s.demo} label="Primer uživo">
      <El d={[120, 112, 352]} m={[96, 470, 150]} href="/primer/rodjendan-prvi" label="Otvorite primer pozivnice za rođendan">
        <PhoneFrame>
          <Preview slug="rodjendan-prvi" />
        </PhoneFrame>
      </El>

      <El d={[608, 139, 300, 35]} m={[43, 54, 220]} fs={[42, 26]} tag="p" anim="fadeIn" className={`${s.script} ${s.light}`}>
        pogledajte uživo
      </El>
      <El d={[608, 201, 512, 144]} m={[43, 92, 234, 79]} fs={[77, 40]} tag="h2" anim="fadeIn" className={`${s.serif} ${s.upper} ${s.light}`}>
        Pozivnica na telefonu
      </El>
      <El d={[608, 367, 459, 199]} m={[43, 185, 234, 176]} fs={[15, 11]} anim="fadeIn" className={`${s.para} ${s.justify} ${s.light}`}>
        <p>Ovako vašu pozivnicu vide gosti: otvara se odmah, iz Vibera, WhatsAppa ili poruke.</p>
        <p>
          Na jednom mestu su satnica, mapa do lokacije, kalendar i odbrojavanje do proslave, kao i brojevi za potvrdu
          dolaska.
        </p>
        <p>Otvorite primer i probajte sami, baš onako kako će ga videti vaši gosti.</p>
      </El>

      <El d={[608, 595, 219, 46]} m={[43, 378, 177, 32]} fs={[13, 10]} href="/primer/vencanje" className={`${s.pill} ${s.pillPink}`}>
        Primer: venčanje
      </El>
      <El d={[843, 597, 219, 46]} m={[43, 419, 177, 32]} fs={[13, 10]} href="/primer/krstenje" className={`${s.pill} ${s.pillPink}`}>
        Primer: krštenje
      </El>
    </Section>
  );
}
