import { Dispatch, SetStateAction } from "react";
import styles from "styles/ui/Nav.module.css";

interface NavProps {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}

export default function Nav({ isMenuActive, setIsMenuActive }: NavProps) {
  function barClass() {
    return isMenuActive ? `${styles.bar} ${styles.x}` : styles.bar;
  }

  return (
    <nav className={styles.Nav} onClick={() => setIsMenuActive((prev) => !prev)}>
      <div className={barClass()}></div>
      <div className={barClass()}></div>
      <div className={barClass()}></div>
    </nav>
  );
}
