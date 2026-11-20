import Link from "next/link";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { googleCalendarUrl } from "../calendar";
import { categoryByLabel } from "../categories";
import type { InvitationContent } from "../types";
import Calendar from "./Calendar";
import Contacts from "./Contacts";
import Countdown from "./Countdown";
import MusicButton from "./MusicButton";
import Program from "./Program";
import ScrollHint from "./ScrollHint";
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
  music,
  closingArt,
  intro,
}: {
  content: InvitationContent;
  className: string;
  hero: ReactNode;
  demo?: boolean;
  /** Audio file under /public; adds a play/pause button in the corner. */
  music?: string;
  /** Small drawing above the closing message. */
  closingArt?: ReactNode;
  /** Shown over the page before the invitation itself, e.g. an envelope to open. */
  intro?: ReactNode;
}) {
  const orderHref = `/kontakt?sablon=${content.slug}`;
  const category = categoryByLabel(content.category);
  const galleryHref = category ? `/sabloni/${category.slug}` : "/sabloni";

  return (
    <div className={`${styles.page} ${music ? styles.withMusic : ""} ${className}`}>
      {intro}
      {demo && category && (
        <JsonLd
          data={breadcrumbLd([
            { name: "Šabloni", path: "/sabloni" },
            { name: category.page.heading, path: galleryHref },
            { name: `Šablon ${content.templateName}`, path: `/primer/${content.slug}` },
          ])}
        />
      )}
      {demo && (
        <nav className={styles.demoBar} aria-label="Primer pozivnice">
          <Link href={galleryHref} className={styles.demoLink}>
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
            <div className={styles.calendarActions}>
              {/* A plain link: the .ics file comes from a route handler, not a page. */}
              <a href={`/kalendar/${content.slug}`} className={styles.calendarButton}>
                Dodaj u kalendar
              </a>
              <a href={googleCalendarUrl(content)} target="_blank" rel="noopener noreferrer" className={`${styles.calendarButton} ${styles.calendarGhost}`}>
                Google kalendar
              </a>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <h2 className={styles.heading}>{content.eventsTitle}</h2>
            <Program events={content.events} notes={content.notes} />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.heading}>Potvrda dolaska</h2>
            <p className={styles.note}>{content.rsvpNote}</p>
            {content.rsvpContacts.length > 0 && <Contacts contacts={content.rsvpContacts} />}
          </div>
        </section>

        {content.closing && (
          <section className={`${styles.section} ${styles.alt} ${styles.closing}`}>
            <div className={styles.container}>
              {closingArt}
              <p className={styles.closingText}>{content.closing}</p>
              {content.signature && <p className={styles.signature}>{content.signature}</p>}
            </div>
          </section>
        )}

      </main>

      <footer className={styles.footer}>
        <span>
          Pozivnica napravljena uz <Link href="/">JustSend</Link>
        </span>
        <Link href={demo ? orderHref : "/"} className={styles.footerOrder}>
          {demo ? "Poručite svoju →" : "Napravite i vi svoju →"}
        </Link>
      </footer>

      <ScrollHint />
      {music && <MusicButton src={music} waitForOpen={Boolean(intro)} />}
    </div>
  );
}
