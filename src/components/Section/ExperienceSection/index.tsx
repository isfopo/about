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
        <h3>Experience</h3>
        {career.map(
          ({ title, company, location, startDate, endDate, description }) => (
            <div className={styles["container"]} key={`${company}-${title}`}>
              <h4>{company}</h4>
              <p>
                {startDate} - {endDate ? endDate : "Present"}
              </p>
              <h5>{title}</h5>
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
        <h3>Education</h3>
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
              <h4>{institution}</h4>
              <p>
                {startDate} - {endDate ? endDate : "Present"}
              </p>
              <h5>{degree}</h5>
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
              <h4>{role}</h4>
              <h5>
                {organization} - {location}
              </h5>
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
            <h4>{title}</h4>
            <h5>{issuer}</h5>
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
