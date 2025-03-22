import { CircularProgress, LinearProgress } from "@mui/material";
import { Sparkles } from "lucide-react";
import styles from "./index.module.css";

export interface SkillProps {
  name: string;
  level: number;
}

export const Skill = ({ name, level }: SkillProps) => {
  return (
    <span className={styles["skill"]}>
      <small>{name}</small>
      <span>
        {Array.from({ length: level }).map(() => (
          <Sparkles />
        ))}
      </span>
    </span>
  );
};
