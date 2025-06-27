import React from "react";
import styles from "./DepartmentsCom.module.css";

import {Dep1,Dep2,Dep3,Dep4} from "../../assets/assets";


// Sample Department Data
const departments = [
  {
    id: 1,
    name: "Cardiology",
    description: "Expert care for heart and blood vessel diseases.",
    icon: Dep1,
    doctors: 12,
  },
  {
    id: 2,
    name: "Neurology",
    description: "Specialized treatment for brain and nervous system disorders.",
    icon: Dep2,
    doctors: 8,
  },
  {
    id: 3,
    name: "Orthopedics",
    description: "Advanced bone and joint care for all ages.",
    icon: Dep4,
    doctors: 10,
  },
  {
    id: 4,
    name: "Pediatrics",
    description: "Comprehensive healthcare for infants and children.",
    icon: Dep3,
    doctors: 15,
  },
];

const DepartmentsCom = () => {
  return (
    <section className={styles.departments}>
      <h4 className={styles.heading}>Our Medical Departments</h4>
      <p className={styles.subheading}>
        We offer specialized medical services for your well-being.
      </p>

      <div className={styles.departmentList}>
        {departments.map((dept) => (
          <div key={dept.id} className={styles.card}>
            <img src={dept.icon} alt={dept.name} className={styles.icon} />
            <h3 className={styles.title}>{dept.name}</h3>
            <p className={styles.description}>{dept.description}</p>
            <p className={styles.doctorCount}>👨‍⚕️ {dept.doctors} Doctors Available</p>
            <button className={styles.bookBtn}>Book Appointment</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentsCom;
