"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MailGlyph, PhoneGlyph } from "@/components/home/glyphs";
import { isActive, nav, site } from "@/lib/site";
import styles from "./Header.module.css";

const tel = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

/**
 * Wine-colored pill pinned to the top: contact icons and three links on the left, the name in
 * the middle, three links on the right. On phones a hamburger opens a panel that slides down.
 */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const left = nav.slice(0, 3);
  const right = nav.slice(3);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <span className={styles.icons}>
          <a href={`mailto:${site.email}`} aria-label="Pošaljite e-mail">
            <MailGlyph />
          </a>
          <a href={tel} aria-label="Pozovite nas">
            <PhoneGlyph />
          </a>
        </span>

        <nav className={`${styles.links} ${styles.linksLeft}`} aria-label="Glavni meni">
          {left.map((link) => (
            <Link key={link.href} href={link.href} aria-current={isActive(pathname, link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <nav className={`${styles.links} ${styles.linksRight}`} aria-label="Ostale stranice">
          {right.map((link) => (
            <Link key={link.href} href={link.href} aria-current={isActive(pathname, link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button type="button" className={styles.menuButton} onClick={() => setOpen(true)} aria-expanded={open} aria-label="Otvorite meni">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className={styles.panel} role="dialog" aria-modal="true" aria-label="Meni">
          <Link href="/" className={styles.panelBrand} onClick={() => setOpen(false)}>
            {site.name}
          </Link>
          <button type="button" className={styles.close} onClick={() => setOpen(false)} aria-label="Zatvorite meni">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          <span className={styles.panelLine} aria-hidden="true" />

          <nav className={styles.panelLinks} aria-label="Glavni meni">
            <Link href="/" onClick={() => setOpen(false)}>
              Početna
            </Link>
            {nav.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={isActive(pathname, link.href) ? "page" : undefined}>
                {link.label}
              </Link>
            ))}
          </nav>

          <span className={styles.panelIcons}>
            <a href={`mailto:${site.email}`} aria-label="Pošaljite e-mail">
              <MailGlyph />
            </a>
            <a href={tel} aria-label="Pozovite nas">
              <PhoneGlyph />
            </a>
          </span>
        </div>
      )}
    </header>
  );
}
