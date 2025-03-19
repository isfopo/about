import { PropsWithChildren } from "react";
import { SectionType } from "../../consts";

export interface SectionProps extends PropsWithChildren {
  subject: SectionType;
}

export const Section = ({ subject, children }: SectionProps) => {
  return <section id={subject}>{children}</section>;
};
