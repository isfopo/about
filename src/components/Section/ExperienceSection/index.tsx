import { Section } from "components/Section";
import styles from "./index.module.css";
import { useCallback } from "react";

export interface Experience {
  location?: string;
  startDate: string;
  endDate?: string;
  bio?: string;
  description?: string[];
}

export interface CareerExperience extends Experience {
  title: string;
  company: string;
}

export interface EducationExperience extends Experience {
  degree: string;
  institution: string;
}

export interface VolunteerExperience extends Experience {
  role: string;
  organization: string;
}

export interface Certification {
  title: string;
  issuer: string;
  dateIssued: string;
  expirationDate?: string;
  description?: string[];
}

export interface ExperienceSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  career?: CareerExperience[];
  education?: EducationExperience[];
  volunteer?: VolunteerExperience[];
  certifications?: Certification[];
}

export const ExperienceSection = ({
  career = [],
  education = [],
  volunteer = [],
  certifications = [],
  className,
  ...props
}: ExperienceSectionProps) => {
  const item = useCallback(
    ({
      title,
      company,
      location,
      startDate,
      endDate,
      bio,
      description,
    }: { title: string; company: string } & Experience): React.ReactElement => {
      return (
        <div className={styles["container"]} key={`${company}-${title}`}>
          <header>
            <p>
              <strong>{company}</strong>
            </p>
            <p>
              {startDate} - {endDate ? endDate : "Present"}
            </p>
            <p>{title}</p>
            <p>{location}</p>
          </header>
          <p>
            <i>{bio}</i>
          </p>

          <ul className={styles["description"]}>
            {description?.map((desc: string) => (
              <li>{desc}</li>
            ))}
          </ul>
        </div>
      );
    },
    [],
  );

  return (
    <Section
      subject="experience"
      className={`${styles["experience"]} ${className}`}
      {...props}
    >
      <div className={styles["career"]}>
        <h3>Experience</h3>
        {career.map(item)}
      </div>
      <div className={styles["education"]}>
        <h3>Education</h3>
        {education.map(({ degree, institution, ...props }) =>
          item({ title: degree, company: institution, ...props }),
        )}
      </div>
      <div className={styles["volunteer"]}>
        {volunteer.map(({ role, organization, ...props }) =>
          item({ title: role, company: organization, ...props }),
        )}
      </div>
      <div className={styles["certifications"]}>
        {certifications.map(
          ({ dateIssued, expirationDate, issuer, ...props }) =>
            item({
              company: issuer,
              startDate: dateIssued,
              endDate: expirationDate,
              ...props,
            }),
        )}
      </div>
    </Section>
  );
};
