import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow="Greška 404" title="Ova stranica ne postoji">
          Možda je link pogrešno prepisan ili je stranica premeštena.
        </PageHeader>
        <div className="container" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", paddingBlock: "2.5rem 5rem" }}>
          <Link href="/" className="btn btnPrimary">
            Početna strana
          </Link>
          <Link href="/sabloni" className="btn btnSecondary">
            Pogledajte šablone
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
