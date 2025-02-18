import styles from "./Footer.module.css";
import building from "../../assets/Building.png";
import insta from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";
const Footer = () => {
	return (
		<footer className={styles.footer} id="footer">
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
							Placeholder="Enter your email"
							className={styles.emailInput}
						/>
						<button type="submit">Subscribe</button>
					</div>
				</div>

				<div className={styles.socialSection}>
					<h3>Connect with us</h3>
					<div className={styles.socialIcons}>
						<a href="https://www.instagram.com/shilp.iitbhu/">
							<img src={insta} alt="Instagram" />
						</a>
						<a href="https://www.linkedin.com/in/shilpiitbhu/">
							<img src={linkedin} alt="LinkedIn" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
