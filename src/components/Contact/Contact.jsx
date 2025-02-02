import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contact Information</h2>

      <div className={styles.contactInfo}>
        <p>IIT (BHU), Varanasi, Uttar Pradesh</p>
        <p>shilp@iitbhu.ac.in</p>
        <p>+91 </p>
      </div>

      <div className={styles.sponsors}>
        <h3>Our Sponsors</h3>
        <div className={styles.sponsorGrid}>
          <img src="/images/sponsors/L&T.png" alt="L&T" />
          <img src="/images/sponsors/Tata Conc.png" alt="Tata Conc." />
          <img src="/images/sponsors/JSW.png" alt="JSW" />
          <img src="/images/sponsors/Godrej.png" alt="Godrej" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
