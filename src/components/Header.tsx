"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { MailGlyph, PhoneGlyph } from "@/components/home/glyphs";
import Logo from "@/components/Logo";
import { isActive, nav, site } from "@/lib/site";
import styles from "./Header.module.css";

const tel = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

/**
 * Wine-colored pill pinned to the top: contact icons and three links on the left, the logo in
 * the middle, three links on the right. On phones a hamburger opens a drawer from the right side.
 */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  const left = nav.slice(0, 3);
  const right = nav.slice(3);

  // Slide the drawer out first, then take it off the page.
  const close = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    // The page behind stays still while the menu is open.
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      root.style.overflow = previous;
    };
  }, [open, close]);

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
          <Logo className={styles.logo} />
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
        <div className={`${styles.drawer} ${closing ? styles.closing : ""}`}>
          <div className={styles.backdrop} onClick={close} aria-hidden="true" />
          <div className={styles.panel} role="dialog" aria-modal="true" aria-label="Meni" data-lenis-prevent>
            <div className={styles.panelTop}>
              <Link href="/" className={styles.panelBrand} onClick={close}>
                <Logo className={styles.panelLogo} />
              </Link>
              <button ref={closeButton} type="button" className={styles.close} onClick={close} aria-label="Zatvorite meni">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className={styles.panelLinks} aria-label="Glavni meni">
              {[{ href: "/", label: "Početna" }, ...nav].map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  style={{ animationDelay: `${0.12 + i * 0.045}s` }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className={styles.panelFoot}>
              <Link href="/kontakt" className={styles.panelCta} onClick={close}>
                Poručite pozivnicu
              </Link>
              <a href={`mailto:${site.email}`} className={styles.panelContact}>
                <MailGlyph />
                {site.email}
              </a>
              <a href={tel} className={styles.panelContact}>
                <PhoneGlyph />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
