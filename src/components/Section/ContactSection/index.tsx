import { Section } from "components/Section";
import { ContactIcons } from "./ContactIcons";
import styles from "./index.module.css";
import { SocialPlatformLink } from "components/Socials";
import { ContactLabels } from "./ContactLabels";

export interface Contacts {
  tel: `(${string}) ${string}-${string}`;
  mailto: `${string}@${string}.${string}`;
}

export interface ContactSectionProps {
  contacts: Contacts;
  socials: SocialPlatformLink[];
}

export const ContactSection = ({ contacts }: ContactSectionProps) => {
  return (
    <Section subject="contact" className={styles["contact"]}>
      <h3>Contact</h3>
      <div className={styles["container"]}>
        {Object.keys(contacts).map((key) => {
          const value = contacts[key as keyof Contacts];
          const label = ContactLabels[key as keyof Contacts];
          const icon = ContactIcons[key as keyof Contacts];

          return (
            <a key={key} href={`${key}:${contacts[key as keyof Contacts]}`}>
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
