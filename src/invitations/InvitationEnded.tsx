import Link from "next/link";
import Logo from "@/components/Logo";
import styles from "./InvitationEnded.module.css";

/** What an expired invitation's link shows: nothing about the guests or the hosts, just a thank-you. */
export default function InvitationEnded() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <Logo className={styles.logo} />
        <h1 className={styles.title}>Proslava je završena</h1>
        <p className={styles.text}>Ova pozivnica više nije dostupna. Hvala svima koji su bili deo ovog dana.</p>
        <Link href="/" className={styles.link}>
          Napravite svoju pozivnicu →
        </Link>
      </div>
    </main>
  );
}
