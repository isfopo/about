import { PropsWithChildren } from "react";
import { SectionType } from "consts";

export interface SectionProps
  extends PropsWithChildren,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  subject: SectionType;
}

export const Section = ({ subject, children, ...props }: SectionProps) => {
  return (
    <section {...props} id={subject}>
      {children}
    </section>
  );
};
