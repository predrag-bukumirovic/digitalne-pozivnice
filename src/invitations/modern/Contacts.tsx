import type { RsvpContact } from "../types";
import styles from "./modern.module.css";

/** The hosts' phone numbers side by side: tap to call or send a message. */
export default function Contacts({ contacts }: { contacts: RsvpContact[] }) {
  return (
    <div className={styles.contacts}>
      {contacts.map((contact) => {
        const number = contact.phone.replace(/[^\d+]/g, "");
        return (
          <div key={contact.phone} className={styles.contact}>
            <p className={styles.contactName}>{contact.name}</p>
            <a href={`tel:${number}`} className={styles.contactPhone}>
              {contact.phone}
            </a>
            <a href={`sms:${number}`} className={styles.contactSms}>
              Pošalji poruku
            </a>
          </div>
        );
      })}
    </div>
  );
}
