import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.navBar}>
      <h1 className={styles.logo}>
        <Link to={`${process.env.PUBLIC_URL}/`}>Movie List</Link>
      </h1>
      <h1>
        <a className={styles.git_link} href="https://github.com/Jangeunhye">
          Jangeunhye
        </a>
      </h1>
    </div>
  );
}

export default Nav;
