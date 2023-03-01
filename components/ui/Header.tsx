import useClickOutisde from "@/hooks/useClickOutside";
import Link from "next/link";
import styles from "styles/ui/Header.module.css";
import HeaderLogo from "./HeaderLogo";
import Menu from "./Menu";
import Nav from "./Nav";

export default function Header() {
  const { ref, isActive, setIsActive } = useClickOutisde();

  return (
    <header ref={ref} className={styles.Header}>
      <Link href="/" onClick={() => isActive && setIsActive((prev) => !prev)}>
        <HeaderLogo />
      </Link>
      <Nav isMenuActive={isActive} setIsMenuActive={setIsActive} />
      <Menu isMenuActive={isActive} setIsMenuActive={setIsActive} />
    </header>
  );
}
