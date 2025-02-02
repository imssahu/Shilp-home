import styles from "./Events.module.css";

const Events = () => {
  const events = [
    {
      title: "Technical Workshop",
      image: "/images/technical-workshop.jpg",
      description: "Hands-on learning experience",
    },
    {
      title: "Guest Lecture",
      image: "/images/guest-lecture.jpg",
      description: "Industry experts sharing insights",
    },
    {
      title: "Competition",
      image: "/images/competition.jpg",
      description: "Test your skills",
    },
  ];

  return (
    <section className={styles.events}>
      <h2 className={styles.title}>Featured Events</h2>
      <div className={styles.eventGrid}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
