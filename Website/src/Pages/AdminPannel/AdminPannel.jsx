import React from 'react';
import styles from "./AdminPanel.module.css";
import DashbordWrapper from '../../Components/DashBordWrapper/index.jsx';
import { FaUsers, FaCalendarCheck, FaClipboardList, FaChartBar, FaCog } from "react-icons/fa";
import {  users } from "../../DataFiles/User.js";

function AdminPanel() {
  const userDetails = JSON.parse(localStorage.getItem("user"));

  if (userDetails) {
    console.log("User Name:", userDetails.name);
    console.log("Email:", userDetails.email);
    console.log("Role:", userDetails.role);
  } else {
    console.log("No user details found in localStorage.");
  }
  const admin = users[0]; // Assuming you want to display the first admin
  return (
    <DashbordWrapper>
      <div className={styles.adminPanel}>
        <div className={styles.banner}>
          <button className={styles.editButton}><FaCog /></button>
          <img src={admin.profileBanner} alt="Admin Banner" className={styles.bannerImage} />
        </div>
        <img src={admin.profilePhoto} alt="Admin Profile" className={styles.profilePhoto} />
        
        <div className={styles.profileInfo}>
          <h1> WelCome {userDetails.name}</h1>
          <p><strong>Role:</strong> {userDetails.role}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Phone:</strong> {admin.phone}</p>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <FaUsers size={50} className={styles.icon} />
            <h2>500</h2>
            <p>Total Users</p>
          </div>
          <div className={styles.card}>
            <FaCalendarCheck size={50} className={styles.icon} />
            <h2>20</h2>
            <p>Scheduled Appointments</p>
          </div>
          <div className={styles.card}>
            <FaClipboardList size={50} className={styles.icon} />
            <h2>15</h2>
            <p>Pending Reports</p>
          </div>
          <div className={styles.card}>
            <FaChartBar size={50} className={styles.icon} />
            <h2>75%</h2>
            <p>System Efficiency</p>
          </div>
          <div className={styles.card}>
            <FaUsers size={50} className={styles.icon} />
            <h2>10+</h2>
            <p>Number of Doctors</p>
          </div>
          <div className={styles.card}>
            <FaUsers size={50} className={styles.icon} />
            <h2>100+</h2>
            <p>Hospital Staf</p>
          </div>
        </div>

        <footer className={styles.footer}>
          <p>&copy; 2024 Admin Panel. All rights reserved.</p>
        </footer>
      </div>
    </DashbordWrapper>
  );
}

export default AdminPanel;
