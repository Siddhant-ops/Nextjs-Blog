import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.navLogoBox}>
        <Link href="/">
          <a>
            <h4>TB</h4>
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/Explore">
            <a className={router.pathname == "/Explore" ? styles.active : ""}>
              Explore
            </a>
          </Link>
        </li>
        <li>
          <Link href="/Contact">
            <a className={router.pathname == "/Contact" ? styles.active : ""}>
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href="/Sign-in">
            <a>Sign-in</a>
          </Link>
        </li>
        <li>
          <Link href="/Sign-up">
            <a>Sing-up</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
