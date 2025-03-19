export interface SectionProps {
  subject: string;
}

export const Section = ({ subject }: SectionProps) => {
  return (
    <section id={subject}>
      <h1>{subject}</h1>
    </section>
  );
};
