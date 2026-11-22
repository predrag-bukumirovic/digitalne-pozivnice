import { invitationCalendar } from "@/invitations/calendar";
import { catalog } from "@/invitations/catalog";
import { orders } from "@/invitations/orders";
import { isExpired } from "@/invitations/orders/expiry";

// "Dodaj u kalendar": one .ics file per invitation. Rebuilt hourly, so a customer's file stops
// giving out the date, place and phone numbers once the invitation has expired.
const all = [...catalog, ...orders];

export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  return all.map(({ slug }) => ({ slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = all.find((item) => item.slug === slug);
  if (!content) return new Response("Nije pronađeno", { status: 404 });
  if (orders.includes(content) && isExpired(content)) {
    return new Response("Pozivnica je istekla.", { status: 410, headers: { "X-Robots-Tag": "noindex" } });
  }
  return new Response(invitationCalendar(content), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      // Inline, so iPhone shows its "Add to Calendar" sheet instead of a download.
      "Content-Disposition": `inline; filename="${slug}.ics"`,
    },
  });
}
