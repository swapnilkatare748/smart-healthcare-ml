import React, { useState } from "react";
import styles from "./TumorDetection.module.css";
import servicesimg from "../../../assets/ServicesPage/services.png";
import LoginPage from "../../SignUppageComponents/LoginPageForm/LoginPage";

function TumorDetection() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img 
          src={servicesimg}
          alt="Brain Tumor Detection"
          className={styles.image}
        />
      </div>
      <div className={styles.description}>
        <h2>AI-Powered Brain Tumor Detection</h2>
        <p>
          Our system uses <strong>advanced AI & ML</strong> to analyze brain scans and detect tumors
          automatically. Upload an image and get instant, reliable results.
        </p>
        <button className={styles.button} onClick={() => setShowLogin(true)}>  
          Start Detection
        </button>
      </div>

      {/* Modal for Login Page */}
      {showLogin && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <LoginPage userRole= "Doctor" />
          </div>
        </div>
      )}
    </div>
  );
}

export default TumorDetection;
