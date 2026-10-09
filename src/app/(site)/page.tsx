import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import TemplateShowcase from "@/components/TemplateShowcase";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <TemplateShowcase />

      <section className={`section ${styles.alt}`}>
        <div className="container">
          <h2 className={styles.heading}>Kako do pozivnice</h2>
          <Steps />
        </div>
      </section>

      <Services />
      <Pricing />

      <section className="section">
        <div className={`container ${styles.faq}`}>
          <div>
            <h2 className={styles.heading}>Česta pitanja</h2>
            <p className={styles.faqText}>Ne vidite odgovor? Pozovite nas ili pišite, odgovaramo istog dana.</p>
            <Link href="/cesta-pitanja" className={styles.textLink}>
              Sva pitanja <span aria-hidden="true">→</span>
            </Link>
          </div>
          <Faq limit={5} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
