import React, { useState } from "react";
import axios from "axios";
import styles from "./BookAppointment.module.css";
import { logo } from "../../assets/assets";
import AppConfig from "../../DataFiles/constent";

const doctors = [
  { id: 1, name: "Dr. Smith (Neurologist)", slots: ["10:00 AM", "12:00 PM", "3:00 PM"] },
  { id: 2, name: "Dr. Johnson (Cardiologist)", slots: ["11:00 AM", "1:00 PM", "4:00 PM"] },
  { id: 3, name: "Dr. Lee (Dermatologist)", slots: ["9:30 AM", "2:00 PM", "5:00 PM"] },
];

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    symptoms: "",
    doctor: doctors[0].name,
    timeSlot: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDoctorChange = (e) => {
    const selectedDoctor = doctors.find((doc) => doc.name === e.target.value);
    setFormData({ ...formData, doctor: selectedDoctor.name, timeSlot: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/apis/appointments", formData);
      alert("Appointment booked successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        symptoms: "",
        doctor: doctors[0].name,
        timeSlot: "",
      });
    } catch (error) {
      alert("Error booking appointment: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt="Hospital Logo" className={styles.logo} />
        <h2 className={styles.title}>Book Your Appointment {AppConfig.Name}</h2>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.Section}>
          <div className={styles.subSection}>
            <label className={styles.label}>Full Name:</label>
            <input type="text" name="name" className={styles.input} value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles.subSection}>
            <label className={styles.label}>Email:</label>
            <input type="email" name="email" className={styles.input} value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className={styles.Section}>
          <div className={styles.subSection}>
            <label className={styles.label}>Phone:</label>
            <input type="tel" name="phone" className={styles.input} value={formData.phone} onChange={handleChange} required />
          </div>
          <div className={styles.subSection}>
            <label className={styles.label}>Age:</label>
            <input type="number" name="age" className={styles.input} value={formData.age} onChange={handleChange} required />
          </div>
        </div>

        <div className={styles.subSectiontextarea}>
          <label className={styles.label}>Symptoms:</label>
          <textarea name="symptoms" className={styles.textarea} rows="3" value={formData.symptoms} onChange={handleChange} required />
        </div>

        <div className={styles.Section}>
          <div className={styles.subSection}>
            <label className={styles.label}>Select Doctor:</label>
            <select name="doctor" className={styles.select} value={formData.doctor} onChange={handleDoctorChange} required>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.subSection}>
            <label className={styles.label}>Available Time Slots:</label>
            <select name="timeSlot" className={styles.select} value={formData.timeSlot} onChange={handleChange} required>
              <option value="">Select a time slot</option>
              {doctors
                .find((doc) => doc.name === formData.doctor)
                ?.slots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;