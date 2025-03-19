import { Link } from "react-scroll";

export interface NavProps {
  subjects: string[];
}

export const Nav = ({ subjects }: NavProps) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {subjects.map((subject) => (
              <Link activeClass="active" smooth spy to={subject}>
                {subject}
              </Link>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  );
};
