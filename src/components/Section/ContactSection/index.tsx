import { Section } from "components/Section";
import { Contact } from "lucide-react";
import { ContactIcons } from "./ContactIcons";
import styles from "./index.module.css";

export interface Contact {
  tel: `(${string}) ${string}-${string}`;
  mailto: `${string}@${string}.${string}`;
}

const labels: Record<keyof Contact, string> = {
  tel: "Phone",
  mailto: "Email",
};

export const ContactSection = (contact: Contact) => {
  return (
    <Section subject="contact" className={styles["contact"]}>
      <h3>Contact</h3>
      <div className={styles["container"]}>
        {Object.keys(contact).map((key) => {
          const value = contact[key as keyof Contact];
          const label = labels[key as keyof Contact];
          const icon = ContactIcons[key as keyof Contact];

          return (
            <a key={key} href={`${key}:${contact[key as keyof Contact]}`}>
              <div className={styles["icon"]}>{icon}</div>
              <div className={styles["text"]}>
                <p>{label}</p>
                <p>{value}</p>
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
};
