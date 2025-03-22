import { Github, Link } from "lucide-react";

export const SocialIcons: Record<string, React.ReactElement> = {
  github: <Github />,
};

export interface SocialPlatformLink {
  label: string;
  href: `https://${string}.${string}.${string}`;
}

export interface SocialsProps {
  platforms: SocialPlatformLink[];
}

export const Socials = ({ platforms }: SocialsProps) => (
  <span>
    {platforms.map(({ label, href }) => (
      <a href={href} aria-label={label} target="_blank">
        {SocialIcons[label] ?? <Link />}
      </a>
    ))}
  </span>
);
