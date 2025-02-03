import React from "react";
import styles from "./Hero.module.css";
import shilplogo from "../../assets/Shilp-logo.png";
const Hero = () => {
	return (
		<section className={styles.hero} id="home">
			<h1 className={styles.title}>SHILP'25</h1>
			<h2 className={styles.subtitle}>Civil Engineering Society</h2>
			<div className={styles.logoContainer}>
				<img className={styles.logo} src={shilplogo} alt="Shilp Logo" />
			</div>
		</section>
	);
};

export default Hero;
