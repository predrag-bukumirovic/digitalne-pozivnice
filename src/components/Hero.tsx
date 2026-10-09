import Link from "next/link";
import KrstenjePreview from "@/invitations/templates/krstenje/Preview";
import VencanjePreview from "@/invitations/templates/vencanje/Preview";
import PhoneFrame from "./PhoneFrame";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.copy}>
        <p className="eyebrow">Digitalne pozivnice</p>
        <h1 className={styles.headline}>Pozivnica koju gosti otvore jednim dodirom.</h1>
        <p className={styles.sub}>
          Venčanje, krštenje, rođendan ili poslovna večera. Izaberete dizajn i pošaljete nam podatke, a mi pripremimo
          pozivnicu sa satnicom, mapom i brojevima za potvrdu dolaska. Vi samo podelite link.
        </p>

        <div className={styles.actions}>
          <Link href="/sabloni" className="btn btnPrimary">
            Pogledajte šablone
          </Link>
          <Link href="/kako-funkcionise" className={styles.textLink}>
            Kako funkcioniše <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className={styles.facts}>
          <li>
            <strong>3.990 RSD</strong> plaćate jednom
          </li>
          <li>
            <strong>24 h</strong> do gotove pozivnice
          </li>
          <li>
            <strong>Bez aplikacija</strong> za vaše goste
          </li>
        </ul>
      </div>

      <Link href="/primer/vencanje" className={styles.visual} aria-label="Otvorite primer pozivnice za venčanje">
        <PhoneFrame className={styles.phoneBack}>
          <KrstenjePreview />
        </PhoneFrame>
        <PhoneFrame className={styles.phoneFront}>
          <VencanjePreview />
        </PhoneFrame>
      </Link>
    </section>
  );
}
