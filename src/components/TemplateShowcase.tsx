import Link from "next/link";
import { categories } from "@/invitations/categories";
import { invitations } from "@/invitations/registry";
import styles from "./TemplateShowcase.module.css";

export default function TemplateShowcase() {
  // One template per kind of celebration; the rest live on /sabloni.
  const featured = categories.flatMap((category) => invitations.find(({ content }) => content.category === category.label) ?? []);

  return (
    <section className="section">
      <div className="container">
        <div className={styles.head}>
          <div>
            <h2 className={styles.title}>Šabloni za svaku proslavu</h2>
            <p className={styles.lead}>Dodirnite šablon i otvorite pravu pozivnicu, onako kako je vide vaši gosti.</p>
          </div>
          <Link href="/sabloni" className={styles.all}>
            Svih {invitations.length} šablona <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.rail}>
          {featured.map(({ content, Preview }) => (
            <Link key={content.slug} href={`/primer/${content.slug}`} className={styles.item}>
              <div className={styles.preview} aria-hidden="true">
                <Preview />
              </div>
              <span className={styles.itemTitle}>{content.templateName}</span>
              <span className={styles.itemTag}>{content.category}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
