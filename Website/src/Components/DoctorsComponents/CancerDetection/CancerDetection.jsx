import React, { useState } from "react";
import styles from "./CancerDetection.module.css"; // Import modular CSS

function CancerDetection() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [response, setResponse] = useState("");

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Preview image
    }
  };

  // Handle form submission with random prediction
  const handleSubmit = () => {
    if (!image) {
      alert("Please select an image!");
      return;
    }

    // Simulating backend response
    const randomResult = Math.random() < 0.5 ? "Cancer Detected" : "No Cancer Found";

    // Delay to mimic API response time
    setResponse("Analyzing...");
    setTimeout(() => {
      setResponse(randomResult);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.headingName}>🩺 How It Works? </h3>
      <ul className={styles.listSteps}>
        <li>1️⃣ Select an Image (Medical scan).</li>
        <li>2️⃣ Preview the Image before submitting.</li>
        <li>3️⃣ Click "Analyze Image" to process.</li>
        <li>4️⃣ Receive Diagnosis (e.g., "Cancer Detected" or "No Cancer Found").</li>
      </ul>

      <div className={styles.uploadBox}>
        <div className={styles.imageContainer}>
          {preview && <img src={preview} alt="Preview" className={styles.preview} />}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.fileInput}
        />
      </div>

      <button onClick={handleSubmit} className={styles.uploadButton}>
        Analyze Image
      </button>

      <div className={styles.result}>
        Result : {response ? <p className={styles.responseBox}>{response}</p> : <p className={styles.responseBox}>No Response</p>}
      </div>
    </div>
  );
}

export default CancerDetection;
