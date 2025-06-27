import React, { useState } from 'react';
import styles from './ServicesCom.module.css';
import BtnPrimary from '../../buttons/BtnPrimary/BtnPrimary';
import BookAppointment from '../../BookAppointment/BookAppointment';

function ServicesCom() {
  const [isModalOpen, setIsModalOpen] = useState(false);  

  const openModal = () => setIsModalOpen(true);   
  const closeModal = () => setIsModalOpen(false); 

  return (
    <div className={styles.ServicesCom}>
      <div className={`${styles.PropertyHero} ${isModalOpen ? styles.blurBackground : ''}`}>
        <div className={styles.Property_Banner}></div>
        <div className={styles.content}>
          <h1>Efficient Hospital Management</h1>
          <p>Streamline patient care, appointments, billing, and inventory with our all-in-one hospital management system for seamless operations.</p>
          <div onClick={openModal} className={styles.buttons}>
            <BtnPrimary text="Book Appointment" />
          </div>
        </div>
      </div>

      {/* ✅ Popup Modal for Booking Appointment */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent} >
          <button className={styles.closeBtn}  onClick={closeModal}>×</button> 
            {/*  ✅ Close Button */}
            <BookAppointment />
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesCom;
