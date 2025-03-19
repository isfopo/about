import { PropsWithChildren } from "react";

export interface SectionProps extends PropsWithChildren {
  subject: string;
}

export const Section = ({ subject, children }: SectionProps) => {
  return <section id={subject}>{children}</section>;
};
