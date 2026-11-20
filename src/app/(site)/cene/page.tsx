import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import PageHeader from "@/components/PageHeader";
import Pricing, { tiers } from "@/components/Pricing";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, serviceLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cene digitalnih pozivnica",
  description:
    "Digitalna pozivnica po šablonu 3.990 RSD ili dizajn po meri 5.990 RSD. Plaćate jednom, bez pretplate, tek kada odobrite pozivnicu.",
  path: "/cene",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([{ name: "Cene", path: "/cene" }]), serviceLd(tiers.map((tier) => ({ name: `Digitalna pozivnica – ${tier.name}`, price: tier.price.replace(".", ""), description: tier.description, path: `/kontakt?paket=${tier.id}` })))]} />
      <PageHeader eyebrow="Cene" title="Plaćate jednom, po pozivnici">
        Bez pretplate i skrivenih troškova. Plaćanje sledi tek kada odobrite pozivnicu.
      </PageHeader>
      <Pricing showHeading={false} />
      <section className="section">
        <div className="container">
          <div className="sectionHead center">
            <h2>Pitanja o porudžbini</h2>
          </div>
          <Faq />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
