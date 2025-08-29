import styles from "./index.module.css";

export interface FrameProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  background?: React.ReactElement;
}

export const Frame = (props: FrameProps) => {
  return (
    <div className={styles["frame"]}>
      <img {...props}></img>
      <div className={styles["background"]}>{props.background}</div>
    </div>
  );
};
