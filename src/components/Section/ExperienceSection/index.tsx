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
      <h1>Experience</h1>
      <div className={styles["container"]}>
        <div className={styles["career"]}>
          {career.map(
            ({ title, company, location, startDate, endDate, description }) => (
              <div>
                <h3>{title}</h3>
                <h4>
                  {company} - {location}
                </h4>
                <p>
                  {startDate} - {endDate ? endDate : "Present"}
                </p>
                <p>{description}</p>
              </div>
            )
          )}
        </div>
        <div className={styles["education"]}>
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
                <h3>{degree}</h3>
                <h4>
                  {institution} - {location}
                </h4>
                <p>
                  {startDate} - {endDate ? endDate : "Present"}
                </p>
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
      </div>
    </Section>
  );
};
