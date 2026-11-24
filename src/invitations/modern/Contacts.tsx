import type { RsvpContact } from "../types";
import styles from "./modern.module.css";

/**
 * "064 123 4567" → "064 *** **67". Sample invitations show what a number looks like without
 * putting a whole, possibly real, number on a public page.
 */
function masked(phone: string) {
  const cut = phone.indexOf(" ");
  const head = cut > 0 ? phone.slice(0, cut) : "";
  let keep = 2;
  const tail = [...phone.slice(head.length)]
    .reverse()
    .map((char) => (/\d/.test(char) ? (keep-- > 0 ? char : "*") : char))
    .reverse()
    .join("");
  return head + tail;
}

/**
 * The hosts' phone numbers side by side: tap to call or send a message.
 * On a sample (`demo`) the numbers are partly hidden and can't be dialed.
 */
export default function Contacts({ contacts, demo = false }: { contacts: RsvpContact[]; demo?: boolean }) {
  return (
    <div className={styles.contacts}>
      {contacts.map((contact, i) => {
        const number = contact.phone.replace(/[^\d+]/g, "");
        return (
          <div key={i} className={styles.contact}>
            <p className={styles.contactName}>{contact.name}</p>
            {demo ? (
              <>
                <span className={`${styles.contactPhone} ${styles.contactMasked}`}>{masked(contact.phone)}</span>
                <span className={styles.contactSms}>Pošalji poruku</span>
              </>
            ) : (
              <>
                <a href={`tel:${number}`} className={styles.contactPhone}>
                  {contact.phone}
                </a>
                <a href={`sms:${number}`} className={styles.contactSms}>
                  Pošalji poruku
                </a>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
