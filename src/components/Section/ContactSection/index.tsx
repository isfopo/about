import { Section } from "components/Section";
import { Contact } from "lucide-react";
import { ContactIcons } from "./ContactIcons";
import styles from "./index.module.css";

export interface Contact {
  phone: `(${string}) ${string}-${string}`;
  email: `${string}@${string}.${string}`;
}

export const ContactSection = (contact: Contact) => {
  return (
    <Section subject="contact" className={styles["contact"]}>
      <h1>Contact</h1>
      <div className={styles["container"]}>
        {Object.keys(contact).map((key) => (
          <div key={key}>
            {ContactIcons[key as keyof Contact]}{" "}
            <span>{contact[key as keyof Contact]}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};
