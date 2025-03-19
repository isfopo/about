import { Link } from "react-scroll";
import { SectionLabels, SectionType } from "../../consts";
import styles from "./index.module.css";

export interface NavProps {
  sections: readonly SectionType[];
}

export const Nav = ({ sections }: NavProps) => {
  return (
    <header className={styles["header"]}>
      <nav className={styles["nav"]}>
        {sections.map((section) => (
          <Link activeClass="active" smooth spy to={section}>
            {SectionLabels[section]}
          </Link>
        ))}
      </nav>
    </header>
  );
};
