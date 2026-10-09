import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Steps from "@/components/Steps";

export const metadata: Metadata = {
  title: "Kako funkcioniše",
  description: "Izaberite šablon, pošaljite podatke, odobrite pozivnicu i podelite link sa gostima putem Vibera ili WhatsAppa.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader eyebrow="Kako funkcioniše" title="Jednostavno, od prvog klika do poslednjeg gosta">
        Vi birate dizajn i šaljete podatke, a mi pripremamo pozivnicu. Za nekoliko minuta vašeg vremena dobijate link
        koji gosti otvaraju na telefonu.
      </PageHeader>
      <section className="section">
        <div className="container">
          <Steps />
        </div>
      </section>
      <Services />
      <CtaBand />
    </>
  );
}
