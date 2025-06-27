import React, { useState } from "react";
import styles from "./LungCancerDetection.module.css";
import servicesimg from "../../../assets/ServicesPage/services.png";
import LoginPage from "../../SignUppageComponents/LoginPageForm/LoginPage";

function LungCancerDetection() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className={styles.container}>
        <div className={styles.description}>
        <h2>AI-Powered Lung Cancer Detection</h2>
        <p>
          Our system uses <strong>advanced AI & ML</strong> to analyze lung scans and detect cancerous areas automatically. Upload an image and get instant, reliable results.
        </p>
        <button className={styles.button} onClick={() => setShowLogin(true)}>
          Start Detection
        </button>
      </div>
      
      <div className={styles.imageContainer}>
        <img 
          src={servicesimg}
          alt="Lung Cancer Detection"
          className={styles.image}
        />
      </div>
    

      {/* Modal for Login Page */}
      {showLogin && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <LoginPage userRole="Doctor" />
          </div>
        </div>
      )}
    </div>
  );
}

export default LungCancerDetection;
