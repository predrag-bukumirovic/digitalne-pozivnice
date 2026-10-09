import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Česta pitanja",
  description: "Odgovori na najčešća pitanja o digitalnim pozivnicama: slanje gostima, potvrda dolaska, izmene, ćirilica i plaćanje.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="Česta pitanja" title="Imate pitanje? Tu smo.">
        Ako ovde ne pronađete odgovor, pišite nam ili nas pozovite.
      </PageHeader>
      <section className="section">
        <div className="container">
          <Faq />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
