import styles from "./index.module.css";

export const Frame = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => {
  return (
    <div className={styles["frame"]}>
      <img {...props}></img>
    </div>
  );
};
