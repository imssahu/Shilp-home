import styles from "./Events.module.css";
import technicalWorkshop from "../../assets/Placeholder.png";
import guestLecture from "../../assets/Placeholder.png";
import competition from "../../assets/Placeholder.png";

const Events = () => {
	const events = [
		{
			title: "Technical Workshop",
			image: technicalWorkshop,
			description: "Hands-on learning experience",
		},
		{
			title: "Guest Lecture",
			image: guestLecture,
			description: "Industry experts sharing insights",
		},
		{
			title: "Competition",
			image: competition,
			description: "Test your skills",
		},
	];

	return (
		<section className={styles.events} id="events">
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
