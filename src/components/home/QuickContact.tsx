import { El, Section } from "@/components/canvas/Canvas";
import { Envelope } from "./art";
import s from "./home.module.css";

/**
 * In place of the reference's newsletter sign-up: name and phone go to the order form,
 * which opens already filled in.
 */
export default function QuickContact() {
  return (
    <Section h={[628, 558]} className={s.contact} label="Brzi kontakt">
      <El d={[321, 178, 558]} m={[68, 134, 186]} fs={[16, 12]} tag="p" anim="fadeIn" className={`${s.sub} ${s.dark} ${s.center}`}>
        Počnimo zajedno
      </El>
      <El d={[264, 220, 673, 145]} m={[28, 159, 264, 102]} fs={[65, 32]} tag="h2" anim="fadeIn" className={`${s.serif} ${s.wine} ${s.center}`} style={{ lineHeight: 1.1 }}>
        Pozivnica koju će gosti <span className={s.italic}>zaista</span> otvoriti
      </El>
      <El d={[268, 377, 663]} m={[32, 278, 256]} fs={[16, 14]} tag="p" anim="fadeIn" className={`${s.para} ${s.dark} ${s.center}`}>
        Ostavite ime i broj telefona, a mi vas zovemo u roku od 24 sata.
      </El>

      <form action="/kontakt" method="get" className={s.form} aria-label="Ostavite kontakt">
        <El d={[232, 449, 227, 50]} m={[56, 339, 209, 46]} anim="fadeIn" className={s.field}>
          <input type="text" name="ime" required minLength={2} maxLength={100} autoComplete="name" placeholder="Ime" aria-label="Ime" />
        </El>
        <El d={[474, 449, 227, 50]} m={[56, 397, 209, 46]} anim="fadeIn" className={s.field}>
          <input type="tel" name="telefon" required maxLength={40} autoComplete="tel" placeholder="Telefon" aria-label="Telefon" />
        </El>
        <El d={[724, 449, 245, 50]} m={[85, 462, 150, 32]} fs={[13, 9]}>
          <button type="submit" className={`${s.pill} ${s.pillWine} ${s.submit}`} style={{ fontSize: "inherit" }}>
            Pošaljite
          </button>
        </El>
      </form>

      <El d={[948, 92, 252, 210, 6]} m={[244, 92, 70, 56, 7]} className={s.float} decorative>
        <Envelope />
      </El>
    </Section>
  );
}
