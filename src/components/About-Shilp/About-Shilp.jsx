import React from "react";
import styles from "./About-Shilp.module.css";

const AboutShilp = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img
            src="../../assets/Shilp-logo.png"
            alt="Ancient Greek Architecture"
          />
        </div>

        <div className={styles.contentSection}>
          <p className={styles.description}>
            Shilp, the annual fest by the Civil Engineering Society, is a
            dynamic celebration of creativity and innovation in the field.
            Serving as a pivotal platform, Shilp fosters collaboration, promotes
            innovation, and values inclusivity. Beyond a mere event, Shilp's
            significance lies in its commitment to inspiring a culture of
            learning, pushing boundaries, and preparing participants for the
            professional world. With a focus on both technical and soft skills,
            Shilp stands as a vibrant testament to the values that drive the
            civil engineering community forward, shaping the next generation of
            engineers to embrace challenges and contribute meaningfully to the
            field.
          </p>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statIcon}>👥</span>
              <h3>1500+</h3>
              <p>Participants from across India</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statIcon}>📅</span>
              <h3>20+ Events</h3>
              <p>Technical and Cultural programs</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statIcon}>🏆</span>
              <h3>₹5L+</h3>
              <p>Prize pool</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutShilp;
