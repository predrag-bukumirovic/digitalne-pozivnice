import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import LiveDemo from "@/components/home/LiveDemo";
import Marquee from "@/components/home/Marquee";
import Questions from "@/components/home/Questions";
import QuickContact from "@/components/home/QuickContact";
import Services from "@/components/home/Services";
import JsonLd from "@/components/JsonLd";
import { organizationLd, pageMetadata, websiteLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Digitalne pozivnice za venčanje, rođendan i krštenje | JustSend",
  absoluteTitle: true,
  description:
    "Digitalne pozivnice koje šaljete jednim linkom preko Vibera i WhatsAppa: satnica, mapa, odbrojavanje i potvrda dolaska. Za venčanja, krštenja i rođendane, od 3.990 RSD.",
  path: "/",
});

/*
 * Order and behaviour follow the reference design: the intro, photos and service folders are
 * pinned one over another, and everything after them scrolls over the pinned stack.
 */
export default function Home() {
  return (
    <>
      <JsonLd data={[organizationLd, websiteLd]} />
      <Hero />
      <Intro />
      <Services />
      <Questions />
      <Marquee />
      <About />
      <LiveDemo />
      <QuickContact />
    </>
  );
}
