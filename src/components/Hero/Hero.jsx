import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>SHILP'25</h1>
      <h2 className={styles.subtitle}>Civil Engineering Society</h2>
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src="../../../public/Shilp-logo.png"
          alt="Shilp Logo"
        />
      </div>
    </section>
  );
};

export default Hero;
