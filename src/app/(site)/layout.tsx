import type { ReactNode } from "react";
import Motion from "@/components/canvas/Motion";
import SmoothScroll from "@/components/canvas/SmoothScroll";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <Motion />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
