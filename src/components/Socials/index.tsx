import { Link } from "lucide-react";

import styles from "./index.module.css";
import { SocialIcons } from "./SocialIcons";

export interface SocialPlatformLink {
  label: string;
  href: `https://${string}.${string}.${string}`;
}

export interface SocialsProps {
  platforms: SocialPlatformLink[];
}

export const Socials = ({ platforms }: SocialsProps) => (
  <div className={styles["socials"]}>
    {platforms.map(({ label, href }) => (
      <a href={href} aria-label={label} target="_blank" key={label}>
        {SocialIcons[label] ?? <Link />}
      </a>
    ))}
  </div>
);
