import styles from "./button.module.scss";
import { PropsButton } from "./types";

function Button({ addClass, onClick, disabled }: PropsButton) {
  return disabled ? (
    <button
      className={`${styles.button} ${styles[addClass]}`}
      onClick={onClick}
      disabled={disabled}
    ></button>
  ) : (
    <button className={`${styles.button} ${styles[addClass]}`} onClick={onClick}></button>
  );
}

export default Button;
