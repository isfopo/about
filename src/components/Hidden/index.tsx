import styles from "./index.module.css";

export interface HiddenProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, the element will be hidden.
   * If false, the element will be visible.
   * @default true
   */
  when?: boolean;
}

export const Hidden = ({
  when = true,
  className = "",
  ...props
}: HiddenProps) => {
  return (
    <div
      {...props}
      className={`${when ? styles["hidden"] : ""} ${className}`}
    ></div>
  );
};
