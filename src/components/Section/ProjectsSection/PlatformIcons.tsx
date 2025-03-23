import Github from "assets/icons/github.svg?react";
import Bandcamp from "assets/icons/bandcamp.svg?react";
import { ProjectLinkPlatform } from ".";

export const PlatformIcons: Record<ProjectLinkPlatform, React.ReactElement> = {
  github: <Github />,
  bandcamp: <Bandcamp />,
};
