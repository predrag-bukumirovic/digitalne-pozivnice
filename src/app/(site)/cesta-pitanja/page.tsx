import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, faqLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Česta pitanja o digitalnim pozivnicama",
  description:
    "Odgovori na najčešća pitanja o digitalnim pozivnicama: kako se šalju gostima, potvrda dolaska, izmene, ćirilica i plaćanje.",
  path: "/cesta-pitanja",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([{ name: "Česta pitanja", path: "/cesta-pitanja" }]), faqLd()]} />
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
