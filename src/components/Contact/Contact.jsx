import styles from "./Contact.module.css";

import LandT from "../../assets/Placeholder.png";
import tataConc from "../../assets/Placeholder.png";
import jsw from "../../assets/Placeholder.png";
import godrej from "../../assets/Placeholder.png";
import js from "@eslint/js";

const Contact = () => {
	return (
		<section className={styles.contact} id="contacts">
			<h2 className={styles.title}>Contact Information</h2>

			<div className={styles.contactInfo}>
				<p>IIT (BHU), Varanasi, Uttar Pradesh</p>
				<p>shilp@iitbhu.ac.in</p>
				<p>+91 </p>
			</div>

			<div className={styles.sponsors}>
				<h3>Our Sponsors</h3>
				<div className={styles.sponsorGrid}>
					<img src={LandT} alt="L&T" />
					<img src={tataConc} alt="Tata Conc." />
					<img src={jsw} alt="JSW" />
					<img src={godrej} alt="Godrej" />
				</div>
			</div>
		</section>
	);
};

export default Contact;
