import React, { useState } from "react";
import axios from "axios";
import styles from "./Contact.module.css";
import {
  FaLocationCrosshairs,
  FaEnvelopeOpenText,
  FaPhoneAlt,
} from "../../Utils/Icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/apis/contact", formData);
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Error sending message!");
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactContent}>
        <p className={styles.sectionSubtitle}>Contact</p>
        <h2 className={`${styles.sectionTitle}`}>
          Simplifying Hospital Management for Better Care.
        </h2>
        <p className={styles.sectionText}>
          Providing Seamless Healthcare Management – Book Appointments, Access
          Records, and Improve Patient Care.
        </p>

        <ul className={styles.contactList}>
          <li className={styles.contactListItem}>
            <div className={styles.contactItemIcon}>
              <FaLocationCrosshairs />
            </div>
            <div className={styles.wrapper}>
              <h3 className={styles.contactItemTitle}>Address:</h3>
              <address className={styles.contactInfo}>
                Sant Tukaram Nagar Pimpri Pune, Maharashtra 411018
              </address>
            </div>
          </li>
          <li className={styles.contactListItem}>
            <div className={styles.contactItemIcon}>
              <FaPhoneAlt />
            </div>
            <div className={styles.wrapper}>
              <h3 className={styles.contactItemTitle}>Phone:</h3>
              <a href="tel:+919637053245" className={styles.contactInfo}>
                +91 9637053245
              </a>
            </div>
          </li>
          <li className={styles.contactListItem}>
            <div className={styles.contactItemIcon}>
              <FaEnvelopeOpenText />
            </div>
            <div className={styles.wrapper}>
              <h3 className={styles.contactItemTitle}>Email:</h3>
              <a href="mailto:swapnilkatare748@gmail.com" className={styles.contactInfo}>
                swapnilkatare748@gmail.com
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        {[
          { id: "name", type: "text", label: "Name", placeholder: "e.g Swapnil Katare" },
          { id: "email", type: "email", label: "Email", placeholder: "swapnilkatare748@gmail.com" },
          { id: "phone", type: "tel", label: "Phone", placeholder: "Phone Number" },
          { id: "message", type: "textarea", label: "Message", placeholder: "Write message..." },
        ].map(({ id, type, label, placeholder }) => (
          <div className={styles.formWrapper} key={id}>
            <label htmlFor={id} className={styles.formLabel}>{label}</label>
            <div className={styles.inputWrapper}>
              {type === "textarea" ? (
                <textarea
                  name={id}
                  id={id}
                  required
                  placeholder={placeholder}
                  className={styles.inputField}
                  value={formData[id]}
                  onChange={handleChange}
                ></textarea>
              ) : (
                <input
                  type={type}
                  name={id}
                  id={id}
                  required
                  placeholder={placeholder}
                  className={styles.inputField}
                  value={formData[id]}
                  onChange={handleChange}
                />
              )}
            </div>
          </div>
        ))}
        <button type="submit" className={`${styles.btn} ${styles.btnPrimary} ${styles.effect}`}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
