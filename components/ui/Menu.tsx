import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import styles from "styles/ui/Menu.module.css";

interface MenuProps {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}

export default function Menu({ isMenuActive, setIsMenuActive }: MenuProps) {
  return (
    <menu
      className={isMenuActive ? styles.menu_active : styles.menu_inactive}
      onClick={() => setIsMenuActive((prev) => !prev)}
    >
      <Link href="/">
        <li>HOME</li>
      </Link>
      <Link href="#">
        <li>ABOUT</li>
      </Link>
      <Link href="#">
        <li>PORTFOLIO</li>
      </Link>
      <Link href="#">
        <li>ART</li>
      </Link>
      <Link href="#">
        <li>CONTACT</li>
      </Link>
    </menu>
  );
}
