import { SocialPlatformLink, Socials } from "components/Socials";
import styles from "./index.module.css";

export interface FooterProps {
  socials: SocialPlatformLink[];
}

export const Footer = ({ socials }: FooterProps) => {
  return (
    <footer className={styles["footer"]}>
      <Socials platforms={socials} />
      <p>© {new Date().getFullYear()} Isaac Poole - All rights reserved.</p>
    </footer>
  );
};
