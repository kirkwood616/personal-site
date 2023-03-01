import styles from "styles/ui/HeaderLogo.module.css";
import Logo from "../icons/Logo";

export default function HeaderLogo() {
  return (
    <div className={styles.HeaderLogo}>
      <Logo />
    </div>
  );
}
