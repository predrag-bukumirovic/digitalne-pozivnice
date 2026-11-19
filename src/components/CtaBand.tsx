import Link from "next/link";
import styles from "./CtaBand.module.css";

export default function CtaBand({
  title = "Spremni za svoju pozivnicu?",
  text = "Izaberite šablon ili nam opišite svoju ideju, a mi ćemo pripremiti pozivnicu koju ćete s ponosom poslati.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.script}>hajde da počnemo!</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <div className={styles.actions}>
          <Link href="/kontakt" className="btn btnPrimary">
            Poručite pozivnicu
          </Link>
          <Link href="/sabloni" className="btn btnSecondary">
            Pogledajte šablone
          </Link>
        </div>
      </div>
    </section>
  );
}
