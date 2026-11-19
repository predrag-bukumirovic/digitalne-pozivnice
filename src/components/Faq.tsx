"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/faq";
import styles from "./Faq.module.css";

/** One answer open at a time: opening a question closes the previous one, both animated. */
export default function Faq({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <div className={styles.list}>
      {faqs.slice(0, limit).map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
            <h3 className={styles.heading}>
              <button
                type="button"
                id={`${id}-q${i}`}
                className={styles.question}
                aria-expanded={isOpen}
                aria-controls={`${id}-a${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {item.q}
                <span className={styles.icon} aria-hidden="true" />
              </button>
            </h3>
            <div id={`${id}-a${i}`} role="region" aria-labelledby={`${id}-q${i}`} className={styles.panel} inert={!isOpen}>
              <div className={styles.panelInner}>
                <p className={styles.answer}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
