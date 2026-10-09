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
    <section className={`container ${styles.band}`}>
      <div className={styles.inner}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.actions}>
          <Link href="/kontakt" className={`btn ${styles.light}`}>
            Poručite pozivnicu
          </Link>
          <Link href="/sabloni" className="btn btnGhostOnDark">
            Pogledajte šablone
          </Link>
        </div>
      </div>
    </section>
  );
}
