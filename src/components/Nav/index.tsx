import { Link } from "react-scroll";
import { SECTIONS } from "../../App";

export interface NavProps {
  sections: readonly (typeof SECTIONS)[number][];
}

export const Nav = ({ sections }: NavProps) => {
  return (
    <header>
      <nav>
        {sections.map((section) => (
          <Link activeClass="active" smooth spy to={section}>
            {section}
          </Link>
        ))}
      </nav>
    </header>
  );
};
