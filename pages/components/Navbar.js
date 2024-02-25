import Link from "next/link";
import styles from "@/styles/components/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <Link className={styles.logo} href="/">
        AHMAD DZUIZZ
      </Link>

      <ul>
        <li>
          <Link href="#About">About</Link>
        </li>
        <li>
          <Link href="/">Projects (soon :D)</Link>
        </li>
        <li>
          <Link href="#Achievements">Achievements</Link>
        </li>
      </ul>
    </nav>
  );
}
