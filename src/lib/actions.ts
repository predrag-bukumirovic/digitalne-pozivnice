"use server";

import { catalog } from "@/invitations/catalog";
import { site } from "./site";

export type OrderState = {
  status: "idle" | "success" | "error";
  message: string;
  fields?: Record<string, string>;
};

const PACKAGES: Record<string, string> = {
  sablon: "Šablon – 3.990 RSD",
  "po-meri": "Po meri – 5.990 RSD",
};

const SUCCESS = "Hvala! Primili smo vašu porudžbinu i javićemo vam se u roku od 24 sata.";

export async function sendOrder(_prev: OrderState, formData: FormData): Promise<OrderState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim().slice(0, 3000);
  const fields = {
    package: get("package"),
    template: get("template"),
    eventType: get("eventType"),
    eventDate: get("eventDate"),
    name: get("name"),
    phone: get("phone"),
    email: get("email"),
    message: get("message"),
  };
  const fail = (message: string): OrderState => ({ status: "error", message, fields });

  // Bots fill the hidden field; pretend success so they move on.
  if (get("website")) return { status: "success", message: SUCCESS };

  if (fields.name.length < 2) return fail("Unesite ime i prezime.");
  if (fields.phone.replace(/\D/g, "").length < 6) return fail("Unesite broj telefona na koji možemo da vas pozovemo.");
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) return fail("E-mail adresa nije ispravna.");

  const template = catalog.find((content) => content.slug === fields.template);
  const text = [
    `Paket: ${PACKAGES[fields.package] ?? PACKAGES.sablon}`,
    `Šablon: ${template ? `${template.templateName} (${template.category})` : "nije izabran"}`,
    `Vrsta proslave: ${fields.eventType || "nije navedena"}`,
    `Datum proslave: ${fields.eventDate || "nije naveden"}`,
    "",
    `Ime i prezime: ${fields.name}`,
    `Telefon: ${fields.phone}`,
    `E-mail: ${fields.email || "nije naveden"}`,
    "",
    fields.message || "(bez poruke)",
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ORDER_EMAIL_TO;
  if (!apiKey || !to) {
    console.warn(`[porudžbina] RESEND_API_KEY i ORDER_EMAIL_TO nisu podešeni, porudžbina nije poslata:\n${text}`);
    return fail(`Slanje porudžbine još nije podešeno. Pozovite nas na ${site.phone} ili pišite na ${site.email}.`);
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.ORDER_EMAIL_FROM ?? "Lumière <onboarding@resend.dev>",
        to: [to],
        reply_to: fields.email || undefined,
        subject: `Nova porudžbina: ${fields.name}`,
        text,
      }),
    });
    if (!response.ok) throw new Error(`Resend ${response.status}: ${await response.text()}`);
  } catch (error) {
    console.error("[porudžbina] Slanje nije uspelo:", error);
    return fail(`Slanje nije uspelo. Pokušajte ponovo ili nas pozovite na ${site.phone}.`);
  }

  return { status: "success", message: SUCCESS };
}
