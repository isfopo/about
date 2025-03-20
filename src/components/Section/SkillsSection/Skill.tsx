export interface SkillProps {
  name: string;
  level: number;
}

export const Skill = ({ name, level }: SkillProps) => {
  return (
    <span>
      <h4>{name}</h4>
    </span>
  );
};
