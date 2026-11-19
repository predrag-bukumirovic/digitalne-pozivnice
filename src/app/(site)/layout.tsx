import type { ReactNode } from "react";
import Motion from "@/components/canvas/Motion";
import SmoothScroll from "@/components/canvas/SmoothScroll";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageLoader from "@/components/PageLoader";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageLoader />
      <SmoothScroll />
      <Motion />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
