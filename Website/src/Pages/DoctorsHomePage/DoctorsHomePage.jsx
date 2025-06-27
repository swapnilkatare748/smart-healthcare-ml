import React from 'react';
import styles from "./DoctorsHomePage.module.css";
import { FaUserMd, FaCalendarCheck, FaClipboardList, FaNotesMedical, FaChartBar, FaCog } from "react-icons/fa";
import { users } from "../../DataFiles/User.js"; 


function DoctorsHomePage() {
  const userDetails = JSON.parse(localStorage.getItem("user"));

  if (userDetails) {
    console.log("User Name:", userDetails.name);
    console.log("Email:", userDetails.email);
    console.log("Role:", userDetails.role);
  } else {
    console.log("No user details found in localStorage.");
  }
  
  const user = users[0]; // Assuming you want to display the first user
  return (
    <div className={styles.DoctorsHomePage}>
      <div className={styles.banner}>
        <button className={styles.editButton}><FaCog /></button>
        <img src={user.profileBanner} alt="Doctor Banner" className={styles.bannerImage} />
      </div>
      <img src={user.profilePhoto} alt="Doctor Profile" className={styles.profilePhoto} />
      
      <div className={styles.profileInfo}>
        <h1>{userDetails.name}</h1>
        <p><strong>Specialization:</strong> Cardiologist</p>
        <p><strong>Email:</strong> {userDetails.email} </p>
        <p><strong>Phone:</strong> +91 9637053245</p>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <FaUserMd size={50} className={styles.icon} />
          <h2>150</h2>
          <p>Total Patients</p>
        </div>
        <div className={styles.card}>
          <FaCalendarCheck size={50} className={styles.icon} />
          <h2>10</h2>
          <p>Upcoming Appointments</p>
        </div>
        <div className={styles.card}>
          <FaClipboardList size={50} className={styles.icon} />
          <h2>25</h2>
          <p>Reports Pending</p>
        </div>
        <div className={styles.card}>
          <FaNotesMedical size={50} className={styles.icon} />
          <h2>5</h2>
          <p>New Consultations</p>
        </div>
        <div className={styles.card}>
          <FaChartBar size={50} className={styles.icon} />
          <h2>85%</h2>
          <p>Patient Satisfaction</p>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Doctor's Panel. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default DoctorsHomePage;
