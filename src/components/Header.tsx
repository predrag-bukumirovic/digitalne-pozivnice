"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { isActive, nav } from "@/lib/site";
import { CloseIcon, MenuIcon } from "./icons";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          Lumière
        </Link>

        <nav className={styles.nav} aria-label="Glavni meni">
          {nav.map((link) => (
            <Link key={link.href} href={link.href} aria-current={isActive(pathname, link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/kontakt" className={`btn btnPrimary ${styles.cta}`}>
          Poručite pozivnicu
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Meni"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav className={styles.mobileMenu} aria-label="Glavni meni">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt" className="btn btnPrimary" onClick={() => setOpen(false)}>
            Poručite pozivnicu
          </Link>
        </nav>
      )}
    </header>
  );
}
