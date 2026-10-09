import { faqs } from "@/lib/faq";
import styles from "./Faq.module.css";

export default function Faq({ limit }: { limit?: number }) {
  return (
    <div className={styles.list}>
      {faqs.slice(0, limit).map((item) => (
        <details key={item.q} className={styles.item}>
          <summary className={styles.question}>{item.q}</summary>
          <p className={styles.answer}>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
