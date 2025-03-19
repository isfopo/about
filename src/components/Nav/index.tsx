import { Link } from "react-scroll";
import { SectionLabels, SectionType } from "../../consts";

export interface NavProps {
  sections: readonly SectionType[];
}

export const Nav = ({ sections }: NavProps) => {
  return (
    <header>
      <nav>
        {sections.map((section) => (
          <Link activeClass="active" smooth spy to={section}>
            {SectionLabels[section]}
          </Link>
        ))}
      </nav>
    </header>
  );
};
