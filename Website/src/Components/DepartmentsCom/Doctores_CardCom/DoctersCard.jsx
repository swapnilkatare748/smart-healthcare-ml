import React from "react";
import styles from "./DoctorsCard.module.css";
import { users } from "../../../DataFiles/User.js";
import { FaStar } from "react-icons/fa";

function DoctorsCard() {
  const doctors = users.filter((user) => user.userRole === "Doctor");

  return (
    <div className={styles.cardContainerdocters}>
      {doctors.map((doctor) => (
        <div key={doctor.id} className={styles.card}>
          <img
            src={doctor.profilePhoto}
            alt={doctor.name}
            className={styles.profilePhoto}
          />
          <div className={styles.info}>
            <h3 className={styles.name}>{doctor.name}</h3>
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.round(doctor.rating)
                      ? styles.starFilled
                      : styles.starEmpty
                  }
                />
              ))}
              <span className={styles.ratingText}> {doctor.rating} / 5</span>
            </div>
            <p className={styles.specialization}>{doctor.specialization}</p>
            <p className={styles.experience}>Experience: {doctor.experience}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorsCard;
