import styles from "./About.module.css";
import cesLogo from "../../../public/CES_logo/ces-logo.png";

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>About CES</h2>
      <div className={styles.content}>
        <img src={cesLogo} alt="CES Logo" className={styles.logo} />
        <p className={styles.description}>
          The Civil Engineering Society (CES) at IIT BHU is a revered
          organization that provides a shared platform for students, faculty,
          and alumni, featuring a series of community and collaboration. Our
          mission is to foster growth, innovation, and professional development
          among our members. Guided by experienced students, esteemed
          professors, and successful alumni, CES stands as a distinguished
          institution in the realm of civil engineering. We are committed to
          excellence, ensuring that the exchange of knowledge and experience
          thrives, enabling each member to reach their full potential.
        </p>
        <button className={styles.exploreButton}>Explore More</button>
      </div>
    </section>
  );
};

export default About;
