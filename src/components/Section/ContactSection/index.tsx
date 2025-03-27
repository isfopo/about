import { Section } from "components/Section";
import { Contact } from "lucide-react";
import { ContactIcons } from "./ContactIcons";
import styles from "./index.module.css";

export interface Contact {
  tel: `(${string}) ${string}-${string}`;
  mailto: `${string}@${string}.${string}`;
}

export const ContactSection = (contact: Contact) => {
  return (
    <Section subject="contact" className={styles["contact"]}>
      <h1>Contact</h1>
      <div className={styles["container"]}>
        {Object.keys(contact).map((key) => {
          const value = contact[key as keyof Contact];
          const icon = ContactIcons[key as keyof Contact];

          return (
            <a key={key} href={`${key}:${contact[key as keyof Contact]}`}>
              {icon} <span>{value}</span>
            </a>
          );
        })}
      </div>
    </Section>
  );
};
