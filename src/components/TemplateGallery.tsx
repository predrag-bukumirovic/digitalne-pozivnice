import Link from "next/link";
import { categories, categorySlug } from "@/invitations/categories";
import { invitations } from "@/invitations/registry";
import styles from "./TemplateGallery.module.css";

export default function TemplateGallery({ category }: { category: string }) {
  const visible = category ? invitations.filter(({ content }) => categorySlug(content.category) === category) : invitations;
  const filters = [
    { slug: "", label: "Sve", count: invitations.length },
    ...categories.map((item) => ({
      ...item,
      count: invitations.filter(({ content }) => content.category === item.label).length,
    })),
  ];

  return (
    <div className="container">
      <nav className={styles.filters} aria-label="Filtriraj šablone po vrsti proslave">
        {filters.map((filter) => (
          <Link
            key={filter.slug}
            href={filter.slug ? `/sabloni?kategorija=${filter.slug}` : "/sabloni"}
            scroll={false}
            className={styles.filter}
            aria-current={filter.slug === category ? "page" : undefined}
          >
            {filter.label}
            <span className={styles.count}>{filter.count}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.grid}>
        {visible.map(({ content, Preview }) => (
          <article key={content.slug} className={styles.card}>
            <Link href={`/primer/${content.slug}`} className={styles.preview} aria-label={`Primer pozivnice: ${content.templateName}`}>
              <Preview />
            </Link>
            <div className={styles.body}>
              <span className={styles.tag}>{content.category}</span>
              <h2 className={styles.title}>{content.templateName}</h2>
              <p className={styles.text}>{content.description}</p>
              <div className={styles.actions}>
                <Link href={`/primer/${content.slug}`} className="btn btnSecondary">
                  Pogledajte primer
                </Link>
                <Link href={`/kontakt?sablon=${content.slug}`} className="btn btnPrimary">
                  Poručite
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
