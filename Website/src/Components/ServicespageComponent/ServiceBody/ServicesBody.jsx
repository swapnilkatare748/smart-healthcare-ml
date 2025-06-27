import React from "react";
import styles from "./ServicesBody.module.css";
import { FaUserMd, FaFileInvoice, FaRobot, FaHospital } from "react-icons/fa";

const servicesData = [
  { id: 1, icon: <FaUserMd />, title: "Effective Patient Management", description: "Streamlined patient record management for better care." },
  { id: 2, icon: <FaRobot />, title: "AI-Based Diagnosis", description: "Automatic image upload and detection of brain tumors." },
  { id: 3, icon: <FaFileInvoice />, title: "Automated Billing", description: "Seamless billing with automatic government scheme applications." },
  { id: 4, icon: <FaHospital />, title: "Insurance & Schemes", description: "Easy integration of insurance policies and government schemes for patients." }
];

const ServicesBody = () => {
  return (
    <section className={styles.servicesSection}>
       <div className={styles.servicesContainer}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </div>
        ))}
       </div>
    </section>
  );
};

export default ServicesBody;
