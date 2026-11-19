"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Plays each [data-anim] element's entrance once it scrolls into view, and turns
 * [data-spin] elements with the scroll position. Runs again after every page change.
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const pending = document.querySelectorAll<HTMLElement>("[data-anim]:not([data-in])");
    const show = (el: Element) => el.setAttribute("data-in", "");

    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              show(entry.target);
              observer?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -5% 0px" },
      );
      pending.forEach((el) => observer?.observe(el));
    } else {
      pending.forEach(show);
    }

    const spinners = document.querySelectorAll<HTMLElement>("[data-spin]");
    const spin = () => spinners.forEach((el) => (el.style.transform = `rotate(${window.scrollY / 5}deg)`));
    spin();
    window.addEventListener("scroll", spin, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", spin);
    };
  }, [pathname]);

  return null;
}
