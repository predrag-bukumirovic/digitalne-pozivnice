import Link from "next/link";
import type { ReactNode } from "react";
import type { InvitationContent } from "../types";
import Calendar from "./Calendar";
import Contacts from "./Contacts";
import Countdown from "./Countdown";
import Program from "./Program";
import styles from "./modern.module.css";

/**
 * Shared page for every invitation. The template supplies its hero and a theme class that
 * defines the --inv-* variables (colors, fonts, alignment); everything below the hero follows them.
 * `demo` adds the bar that sells the template; a customer's real invitation leaves it out.
 */
export default function ModernInvitation({
  content,
  className,
  hero,
  demo = true,
}: {
  content: InvitationContent;
  className: string;
  hero: ReactNode;
  demo?: boolean;
}) {
  const orderHref = `/kontakt?sablon=${content.slug}`;

  return (
    <div className={`${styles.page} ${className}`}>
      {demo && (
        <nav className={styles.demoBar} aria-label="Primer pozivnice">
          <Link href="/sabloni" className={styles.demoLink}>
            ← Šabloni
          </Link>
          <Link href={orderHref} className={`${styles.demoLink} ${styles.demoOrder}`}>
            Naručite ovu pozivnicu
          </Link>
        </nav>
      )}

      <main>
        {hero}

        <section className={`${styles.section} ${styles.countdownSection}`}>
          <div className={styles.container}>
            <p className={styles.countdownTitle}>{content.countdownText}</p>
            <Countdown date={content.date} />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <p className={styles.intro}>{content.intro}</p>
            <Calendar date={content.date} />
          </div>
        </section>

        <section className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <h2 className={styles.heading}>{content.eventsTitle}</h2>
            <Program events={content.events} />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.heading}>Potvrda dolaska</h2>
            <p className={styles.note}>{content.rsvpNote}</p>
            {content.rsvpContacts.length > 0 && <Contacts contacts={content.rsvpContacts} />}
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <span>
          Pozivnica napravljena uz <Link href="/">Lumière</Link>
        </span>
        <Link href={demo ? orderHref : "/"} className={styles.footerOrder}>
          {demo ? "Poručite svoju →" : "Napravite i vi svoju →"}
        </Link>
      </footer>
    </div>
  );
}
