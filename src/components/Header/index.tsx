import { Link } from "react-scroll";
import { SectionLabels, SectionType } from "consts";
import styles from "./index.module.css";
import { SocialPlatformLink, Socials } from "./Socials";

export interface HeaderProps {
  sections: readonly SectionType[];
  socials: SocialPlatformLink[];
}

export const Header = ({ sections, socials }: HeaderProps) => {
  return (
    <header className={styles["header"]}>
      <nav className={styles["nav"]}>
        {sections.map((section) => (
          <Link key={section} activeClass="active" smooth spy to={section}>
            {SectionLabels[section]}
          </Link>
        ))}
      </nav>
      <Socials platforms={socials} />
    </header>
  );
};
