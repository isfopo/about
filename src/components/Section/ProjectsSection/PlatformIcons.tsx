import Github from "assets/logos/github.svg?react";
import Bandcamp from "assets/logos/bandcamp.svg?react";
import { ProjectLinkPlatform } from ".";

export const PlatformIcons: Record<ProjectLinkPlatform, React.ReactElement> = {
  github: <Github />,
  bandcamp: <Bandcamp />,
};
