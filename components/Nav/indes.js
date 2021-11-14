import styles from "./Styles.module.css";
import Link from "next/link";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link href="/new-movie" passHref>
        <div className={styles.button}>New Movie</div>
      </Link>
      <Link href="/" passHref>
        <div className={styles.button}>See Movies</div>
      </Link>
    </div>
  );
};
