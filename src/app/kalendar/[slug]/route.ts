import { invitationCalendar } from "@/invitations/calendar";
import { catalog } from "@/invitations/catalog";
import { orders } from "@/invitations/orders";

// "Dodaj u kalendar": one .ics file per invitation, built at deploy time.
const all = [...catalog, ...orders];

export const dynamicParams = false;

export function generateStaticParams() {
  return all.map(({ slug }) => ({ slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = all.find((item) => item.slug === slug);
  if (!content) return new Response("Nije pronađeno", { status: 404 });
  return new Response(invitationCalendar(content), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      // Inline, so iPhone shows its "Add to Calendar" sheet instead of a download.
      "Content-Disposition": `inline; filename="${slug}.ics"`,
    },
  });
}
