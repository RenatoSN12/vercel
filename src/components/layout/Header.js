import logo from "../../img/logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo-notion"/>
        <h1>Notion do Erick</h1>
      </div>
    </header>
  );
}

export default Header;