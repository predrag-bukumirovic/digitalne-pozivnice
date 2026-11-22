import type { ReactNode } from "react";
import { preload } from "react-dom";
import Motion from "@/components/canvas/Motion";
import SmoothScroll from "@/components/canvas/SmoothScroll";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageLoader from "@/components/PageLoader";

export default function SiteLayout({ children }: { children: ReactNode }) {
  // The logo is a CSS mask (fetched in CORS mode); start loading it with the page so it never pops in late.
  preload("/logo.svg", { as: "image", crossOrigin: "anonymous", fetchPriority: "high" });
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
