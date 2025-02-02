import React, { useState } from "react";
import styles from "./Schedule.module.css";

const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState("Day 1");

  const schedule = {
    "Day 1": [
      {
        title: "Opening Ceremony",
        location: "Main Auditorium",
        time: "9:00 AM",
        duration: "2 Hours",
      },
      {
        title: "Technical Workshop",
        location: "Workshop Hall A",
        time: "11:30 AM",
        duration: "3 Hours",
      },
      {
        title: "Guest Lecture",
        location: "Seminar Hall",
        time: "2:30 PM",
        duration: "1.5 Hours",
      },
    ],
    "Day 2": [
      {
        title: "Panel Discussion",
        location: "Main Auditorium",
        time: "10:00 AM",
        duration: "2 Hours",
      },
      {
        title: "Hands-on Workshop",
        location: "Workshop Hall B",
        time: "1:00 PM",
        duration: "3 Hours",
      },
    ],
    "Day 3": [
      {
        title: "Closing Ceremony",
        location: "Main Auditorium",
        time: "4:00 PM",
        duration: "2 Hours",
      },
    ],
  };

  return (
    <div className={styles.eventSchedule}>
      <h2 className={styles.title}>Event Schedule</h2>

      <div className={styles.tabs}>
        {Object.keys(schedule).map((day) => (
          <button
            key={day}
            className={`${styles.tab} ${
              activeDay === day ? styles.active : ""
            }`}
            onClick={() => setActiveDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <div className={styles.scheduleDetails}>
        {schedule[activeDay].map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <div className={styles.eventInfo}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventLocation}>{event.location}</p>
            </div>
            <div className={styles.eventTime}>
              <p className={styles.time}>{event.time}</p>
              <p className={styles.duration}>{event.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSchedule;
