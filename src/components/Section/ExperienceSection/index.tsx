import { Section } from "components/Section";
import styles from "./index.module.css";

export interface Experience {
  location: string;
  startDate: string;
  endDate?: string;
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
      <div className={styles["career"]}>
        <h2>Experience</h2>
        {career.map(
          ({ title, company, location, startDate, endDate, description }) => (
            <div className={styles["container"]} key={`${company}-${title}`}>
              <h3>{company}</h3>
              <p>
                {startDate} - {endDate ? endDate : "Present"}
              </p>
              <h4>{title}</h4>
              <p>{location}</p>
              <p className={styles["description"]}>
                {description?.map((desc) => (
                  <span>{desc}</span>
                ))}
              </p>
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
            <div
              className={styles["container"]}
              key={`${degree}-${institution}`}
            >
              <h3>{institution}</h3>
              <p>
                {startDate} - {endDate ? endDate : "Present"}
              </p>
              <h4>{degree}</h4>
              <p>{location}</p>
              <p className={styles["description"]}>
                {description?.map((desc) => (
                  <span>{desc}</span>
                ))}
              </p>
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
            <div
              className={styles["container"]}
              key={`${organization}-${role}`}
            >
              <h3>{role}</h3>
              <h4>
                {organization} - {location}
              </h4>
              <p>
                {startDate} - {endDate ? endDate : "Present"}
              </p>
              {description?.map((desc) => (
                <p>{desc}</p>
              ))}
            </div>
          )
        )}
      </div>
      <div className={styles["certifications"]}>
        {certifications.map(({ title, issuer, dateIssued, description }) => (
          <div className={styles["container"]} key={`${issuer}-${title}`}>
            <h3>{title}</h3>
            <h4>{issuer}</h4>
            <p>{dateIssued}</p>
            {description?.map((desc) => (
              <p>{desc}</p>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};
