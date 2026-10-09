import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Cene",
  description: "Digitalna pozivnica po šablonu 3.990 RSD ili dizajn po meri 5.990 RSD. Plaćate jednom, bez pretplate.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader eyebrow="Cene" title="Plaćate jednom, po pozivnici">
        Bez pretplate i skrivenih troškova. Plaćanje sledi tek kada odobrite pozivnicu.
      </PageHeader>
      <Pricing showHeading={false} />
      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <h2>Pitanja o porudžbini</h2>
          </div>
          <Faq />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
