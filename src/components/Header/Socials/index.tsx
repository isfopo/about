import { Link } from "lucide-react";
import Github from "assets/icons/github.svg?react";
import LinkedIn from "assets/icons/linkedin.svg?react";
import Bandcamp from "assets/icons/bandcamp.svg?react";
import styles from "./index.module.css";

export const SocialIcons: Record<string, React.ReactElement> = {
  github: <Github />,
  linkedin: <LinkedIn />,
  bandcamp: <Bandcamp />,
};

export interface SocialPlatformLink {
  label: string;
  href: `https://${string}.${string}.${string}`;
}

export interface SocialsProps {
  platforms: SocialPlatformLink[];
}

export const Socials = ({ platforms }: SocialsProps) => (
  <span className={styles["socials"]}>
    {platforms.map(({ label, href }) => (
      <a href={href} aria-label={label} target="_blank" key={label}>
        {SocialIcons[label] ?? <Link />}
      </a>
    ))}
  </span>
);
