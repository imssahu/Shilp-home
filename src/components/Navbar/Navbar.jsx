import styles from "./Navbar.module.css";
import shilplogo from "../../../public/Shilp-logo.png";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={shilplogo} alt="CES Logo" />
      </div>
      <div className={styles.navLinks}>
        <a href="#home">Home</a>
        <a href="#competitions">Competitions</a>
        <a href="#guests">Guests</a>
        <a href="#events">Events</a>
        <a href="#contacts">Contacts</a>
        <button className={styles.registerButton}>Register now</button>
      </div>
    </nav>
  );
};

export default Navbar;
