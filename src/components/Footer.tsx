import Link from "next/link";
import { El, Section, type Box } from "@/components/canvas/Canvas";
import { Preview } from "@/components/home/art";
import { ChatGlyph, HeartGlyph, MailGlyph, PhoneGlyph } from "@/components/home/glyphs";
import { InstagramIcon } from "@/components/icons";
import s from "@/components/home/home.module.css";
import { nav, site } from "@/lib/site";
import styles from "./Footer.module.css";

/* Row of photos at the top in the reference; here a row of our templates. */
const strip: { slug: string; d: Box | null; m: Box | null }[] = [
  { slug: "rodjendan-osamnaest", d: [-239, 41, 175, 172], m: null },
  { slug: "poslovno", d: [-52, 41, 175, 172], m: null },
  { slug: "vencanje-monogram", d: [135, 41, 179, 170], m: [4, 508, 101, 102] },
  { slug: "krstenje", d: [326, 41, 181, 170], m: [110, 508, 101, 102] },
  { slug: "rodjendan-prvi", d: [518, 41, 175, 170], m: [110, 614, 101, 102] },
  { slug: "proslava-bebe-mesec", d: [705, 41, 174, 171], m: [4, 614, 101, 102] },
  { slug: "vencanje-terakota", d: [890, 40, 175, 170], m: null },
  { slug: "rodjendan-konfete", d: [1077, 40, 174, 171], m: [216, 614, 101, 102] },
  { slug: "poslovno-konferencija", d: [1266, 40, 174, 171], m: [216, 508, 101, 102] },
];

const tel = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
const viber = `viber://chat?number=${encodeURIComponent(site.phone.replace(/[^\d+]/g, ""))}`;
const whatsapp = `https://wa.me/${site.phone.replace(/\D/g, "")}`;

export default function Footer() {
  const { company } = site;
  const domain = site.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const columns = [nav.slice(0, 3), nav.slice(3)];

  return (
    <footer className={styles.footer}>
      <Section h={[739, 762]}>
        {strip.map(({ slug, d, m }) =>
          d ? (
            <El key={slug} d={d} m={m} href={`/primer/${slug}`} label={`Primer: ${slug}`} className={`${s.shot} ${styles.thumb}`}>
              <Preview slug={slug} />
            </El>
          ) : null,
        )}

        <El d={[-1200, 253, 3600, 2]} m={[-320, 727, 960, 2]} className={styles.line} decorative />
        <El d={[-1200, 468, 3600, 2]} m={[-320, 93, 960, 2]} className={styles.line} decorative />

        <El d={[124, 287, 300]} m={[32, 115, 200]} fs={[38, 27]} tag="h2" className={`${s.serif} ${styles.heading}`}>
          Navigacija
        </El>
        {columns.map((links, i) => (
          <El key={i} d={[i === 0 ? 124 : 235, 347, 140]} m={[i === 0 ? 32 : 128, 161, 90]} fs={[12, 12]} tag="ul" className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </El>
        ))}

        <El d={[528, 286, 300]} m={[32, 248, 200]} fs={[38, 27]} tag="h2" className={`${s.serif} ${styles.heading}`}>
          Kontakt
        </El>
        <El d={[528, 347, 300]} m={[32, 289, 260]} fs={[12, 11]} tag="ul" className={`${styles.links} ${styles.contactLinks}`}>
          <li>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            <Link href="/">{domain}</Link>
          </li>
          <li>
            <a href={tel}>{site.phone}</a>
          </li>
          {site.instagram && (
            <li>
              <a href={`https://www.instagram.com/${site.instagram}/`} target="_blank" rel="noreferrer">
                @{site.instagram}
              </a>
            </li>
          )}
        </El>

        <El d={[861, 286, 300]} m={[34, 376, 200]} fs={[38, 27]} tag="h2" className={`${s.serif} ${styles.heading}`}>
          Javite se
        </El>
        <El d={[861, 345, 170, 25]} m={[34, 417, 130, 22]} className={styles.icons}>
          <a href={`mailto:${site.email}`} aria-label="E-mail">
            <MailGlyph />
          </a>
          <a href={tel} aria-label="Telefon">
            <PhoneGlyph />
          </a>
          <a href={viber} aria-label="Viber">
            <ChatGlyph />
          </a>
          <a href={whatsapp} aria-label="WhatsApp" target="_blank" rel="noreferrer">
            <HeartGlyph />
          </a>
          {site.instagram && (
            <a href={`https://www.instagram.com/${site.instagram}/`} aria-label="Instagram" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
          )}
        </El>
        <El d={[861, 391, 204, 31]} m={[32, 457, 152, 26]} fs={[14, 11]} href="/kontakt" className={styles.pill}>
          Poručite odmah
        </El>

        <El d={[-298, 497, 1796, 153]} m={[-97, 11, 515, 63]} fs={[150, 56]} tag="p" anim="fadeIn" className={`${s.serif} ${s.upper} ${s.center} ${styles.giant}`}>
          {site.name}
        </El>

        <El d={[560, 692, 604, 21]} m={[20, 737, 287, 20]} fs={[13, 9]} tag="p" className={styles.credit}>
          © 2026 {company.name || site.name}
          {company.pib && ` · PIB ${company.pib}`}
          {company.mb && ` · MB ${company.mb}`}
          {" · "}
          <Link href="/politika-privatnosti">Privatnost</Link>
          {" · "}
          <Link href="/uslovi-koriscenja">Uslovi</Link>
        </El>
      </Section>
    </footer>
  );
}
