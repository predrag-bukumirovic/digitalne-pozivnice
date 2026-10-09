"use client";

import Link from "next/link";
import { useActionState } from "react";
import { sendOrder, type OrderState } from "@/lib/actions";
import { CheckCircleIcon } from "./icons";
import styles from "./OrderForm.module.css";

const initialState: OrderState = { status: "idle", message: "" };

const packages = [
  { id: "sablon", name: "Šablon", price: "3.990 RSD", note: "Izaberete šablon, mi ga popunjavamo" },
  { id: "po-meri", name: "Po meri", price: "5.990 RSD", note: "Dizajn od nule, samo za vas" },
];

const eventTypes = ["Venčanje", "Krštenje", "Rođendan", "Proslava bebe", "Poslovno", "Nešto drugo"];

export default function OrderForm({
  templates,
  selectedTemplate,
  selectedPackage,
}: {
  templates: { slug: string; name: string; category: string }[];
  selectedTemplate: string;
  selectedPackage: string;
}) {
  const [state, formAction, pending] = useActionState(sendOrder, initialState);
  const values = state.fields ?? {
    package: selectedPackage,
    template: selectedTemplate,
    eventType: templates.find((t) => t.slug === selectedTemplate)?.category ?? "",
  };

  if (state.status === "success") {
    return (
      <div className={styles.success} role="status">
        <CheckCircleIcon className={styles.successIcon} />
        <h2 className={styles.successTitle}>Porudžbina je poslata</h2>
        <p>{state.message}</p>
        <Link href="/sabloni" className="btn btnSecondary">
          Pogledajte još šablona
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className={styles.form}>
      <fieldset className={styles.packages}>
        <legend className={styles.legend}>Paket</legend>
        {packages.map((pkg) => (
          <label key={pkg.id} className={styles.package}>
            <input type="radio" name="package" value={pkg.id} defaultChecked={(values.package || "sablon") === pkg.id} />
            <span className={styles.packageBody}>
              <span className={styles.packageName}>{pkg.name}</span>
              <span className={styles.packagePrice}>{pkg.price}</span>
              <span className={styles.packageNote}>{pkg.note}</span>
            </span>
          </label>
        ))}
      </fieldset>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Šablon</span>
          <select name="template" defaultValue={values.template}>
            <option value="">Još nisam izabrao/la</option>
            {eventTypes
              .filter((type) => templates.some((t) => t.category === type))
              .map((type) => (
                <optgroup key={type} label={type}>
                  {templates
                    .filter((t) => t.category === type)
                    .map((template) => (
                      <option key={template.slug} value={template.slug}>
                        {template.name}
                      </option>
                    ))}
                </optgroup>
              ))}
          </select>
        </label>
        <label className={styles.field}>
          <span>Vrsta proslave</span>
          <select name="eventType" defaultValue={values.eventType}>
            <option value="">Izaberite</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Ime i prezime *</span>
          <input type="text" name="name" required minLength={2} maxLength={100} autoComplete="name" defaultValue={values.name} placeholder="Ana Petrović" />
        </label>
        <label className={styles.field}>
          <span>Datum proslave</span>
          <input type="date" name="eventDate" defaultValue={values.eventDate} />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Telefon *</span>
          <input type="tel" name="phone" required maxLength={40} autoComplete="tel" defaultValue={values.phone} placeholder="+381 60 123 4567" />
        </label>
        <label className={styles.field}>
          <span>E-mail (opciono)</span>
          <input type="email" name="email" maxLength={254} autoComplete="email" defaultValue={values.email} placeholder="ana@email.com" />
        </label>
      </div>

      <label className={styles.field}>
        <span>Poruka (opciono)</span>
        <textarea
          name="message"
          rows={4}
          maxLength={3000}
          defaultValue={values.message}
          placeholder="Imena, satnica, lokacije, posebne želje..."
        />
      </label>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" className={styles.honeypot} aria-hidden="true" />

      {state.status === "error" && (
        <p className={styles.error} role="alert">
          {state.message}
        </p>
      )}

      <button type="submit" className={`btn btnPrimary ${styles.submit}`} disabled={pending}>
        {pending ? "Šaljemo..." : "Pošaljite porudžbinu"}
      </button>
      <p className={styles.privacy}>
        Slanjem forme prihvatate <Link href="/politika-privatnosti">politiku privatnosti</Link>. Plaćanje sledi tek
        nakon što odobrite pozivnicu.
      </p>
    </form>
  );
}
