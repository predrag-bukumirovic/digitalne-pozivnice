import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import LiveDemo from "@/components/home/LiveDemo";
import Marquee from "@/components/home/Marquee";
import Questions from "@/components/home/Questions";
import QuickContact from "@/components/home/QuickContact";
import Services from "@/components/home/Services";

/*
 * Order and behaviour follow the reference design: the intro, photos and service folders are
 * pinned one over another, and everything after them scrolls over the pinned stack.
 */
export default function Home() {
  return (
    <>
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
