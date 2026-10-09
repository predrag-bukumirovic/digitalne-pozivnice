import Link from "next/link";
import { categories } from "@/invitations/categories";
import { site } from "@/lib/site";
import styles from "./Footer.module.css";

const columns = [
  {
    heading: "Šabloni",
    links: categories.map((category) => ({ label: category.label, href: `/sabloni?kategorija=${category.slug}` })),
  },
  {
    heading: "Lumière",
    links: [
      { label: "Kako funkcioniše", href: "/kako-funkcionise" },
      { label: "Cene", href: "/cene" },
      { label: "Česta pitanja", href: "/cesta-pitanja" },
      { label: "O nama", href: "/o-nama" },
    ],
  },
  {
    heading: "Kontakt",
    links: [
      { label: "Poručite pozivnicu", href: "/kontakt" },
      { label: "Dizajn po meri", href: "/kontakt?paket=po-meri" },
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.phone, href: `tel:${site.phone.replace(/[^\d+]/g, "")}` },
    ],
  },
];

export default function Footer() {
  const { company } = site;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brand}>
            Lumière
          </Link>
          <p className={styles.tagline}>Digitalne pozivnice lepe kao i događaj koji najavljuju.</p>
        </div>

        {columns.map((column) => (
          <div key={column.heading} className={styles.col}>
            <h2 className={styles.colHeading}>{column.heading}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>
          © 2026 {company.name || site.name}. Sva prava zadržana.
          {company.pib && ` PIB: ${company.pib}.`}
          {company.mb && ` MB: ${company.mb}.`}
          {company.address && ` ${company.address}.`}
        </span>
        <span className={styles.legal}>
          <Link href="/politika-privatnosti">Politika privatnosti</Link>
          <Link href="/uslovi-koriscenja">Uslovi korišćenja</Link>
        </span>
      </div>
    </footer>
  );
}
