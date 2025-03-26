import { Section } from "components/Section";
import styles from "./index.module.css";

export interface CareerExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface EducationExperience {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface VolunteerExperience {
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  dateIssued: string;
  expirationDate?: string;
  description?: string;
}

export interface ExperienceSectionProps {
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
}: ExperienceSectionProps) => {
  return (
    <Section subject="experience" className={styles["experience"]}>
      <div className={styles["container"]}>
        <div className={styles["career"]}>
          <h2>Experience</h2>
          {career.map(
            ({ title, company, location, startDate, endDate, description }) => (
              <div>
                <div className={styles["header"]}>
                  <h3>{company}</h3>
                  <p>
                    {startDate} - {endDate ? endDate : "Present"}
                  </p>
                </div>
                <h4>
                  {title} - {location}
                </h4>
                <p>{description}</p>
              </div>
            )
          )}
        </div>
        <div className={styles["education"]}>
          <h2>Education</h2>
          {education.map(
            ({
              degree,
              institution,
              location,
              startDate,
              endDate,
              description,
            }) => (
              <div>
                <div className={styles["header"]}>
                  <h3>{institution}</h3>
                  <p>
                    {startDate} - {endDate ? endDate : "Present"}
                  </p>
                </div>
                <h4>
                  {degree} - {location}
                </h4>
                <p>{description}</p>
              </div>
            )
          )}
        </div>
        <div className={styles["volunteer"]}>
          {volunteer.map(
            ({
              role,
              organization,
              location,
              startDate,
              endDate,
              description,
            }) => (
              <div>
                <h3>{role}</h3>
                <h4>
                  {organization} - {location}
                </h4>
                <p>
                  {startDate} - {endDate ? endDate : "Present"}
                </p>
                <p>{description}</p>
              </div>
            )
          )}
        </div>
        <div className={styles["certifications"]}>
          {certifications.map(({ title, issuer, dateIssued, description }) => (
            <div>
              <h3>{title}</h3>
              <h4>{issuer}</h4>
              <p>{dateIssued}</p>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
