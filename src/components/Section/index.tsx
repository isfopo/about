import { PropsWithChildren } from "react";
import { SECTIONS } from "../../App";

export interface SectionProps extends PropsWithChildren {
  subject: (typeof SECTIONS)[number];
}

export const Section = ({ subject, children }: SectionProps) => {
  return <section id={subject}>{children}</section>;
};
