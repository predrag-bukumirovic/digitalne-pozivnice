import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/*
 * Customers' invitations (/pozivnica/…) stay crawlable on purpose: they carry "noindex",
 * which search engines only see if they may open the page. Blocking them here could still
 * leave the bare link in the results.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/kalendar/"] },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
