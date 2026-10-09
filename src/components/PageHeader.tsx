import type { ReactNode } from "react";
import styles from "./PageHeader.module.css";

export default function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className={`container ${styles.header}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h1 className={styles.title}>{title}</h1>
      {children && <p className={styles.lead}>{children}</p>}
    </section>
  );
}
