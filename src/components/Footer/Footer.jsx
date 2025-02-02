import styles from "./Footer.module.css";
import building from "../../../public/Building.png";
import insta from "../../../public/insta.png";
import linkedin from "../../../public/linkedin.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <img
            src={building}
            alt="Shilp Buildings"
            className={styles.buildingsLogo}
          />
        </div>

        <div className={styles.newsletterSection}>
          <h3>Subscribe to our Newsletter!</h3>
          <div className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.emailInput}
            />
            <button type="submit">Subscribe</button>
          </div>
        </div>

        <div className={styles.socialSection}>
          <h3>Connect with us</h3>
          <div className={styles.socialIcons}>
            <a href="#instagram">
              <img src={insta} alt="Instagram" />
            </a>
            <a href="#linkedin">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
