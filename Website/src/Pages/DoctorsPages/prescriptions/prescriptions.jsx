import React, { useState } from "react";
import styles from "./Prescriptions.module.css";

const Prescriptions = () => {
  // Dummy prescription records
  const [prescriptions, setPrescriptions] = useState([
    { id: 1, patient: "John Doe", doctor: "Dr. Smith", date: "2024-04-10", medication: "Paracetamol", dosage: "500mg, Twice a day" },
    { id: 2, patient: "Jane Smith", doctor: "Dr. Brown", date: "2024-04-12", medication: "Ibuprofen", dosage: "200mg, Three times a day" },
    { id: 3, patient: "Michael Brown", doctor: "Dr. Taylor", date: "2024-04-15", medication: "Amoxicillin", dosage: "250mg, Twice a day" },
    { id: 4, patient: "Sarah Wilson", doctor: "Dr. Johnson", date: "2024-04-18", medication: "Cetirizine", dosage: "10mg, Once a day" },
    { id: 5, patient: "David Johnson", doctor: "Dr. White", date: "2024-04-20", medication: "Metformin", dosage: "500mg, Twice a day" },
    { id: 6, patient: "Emma Taylor", doctor: "Dr. Green", date: "2024-04-22", medication: "Aspirin", dosage: "75mg, Once a day" },
    { id: 7, patient: "James Anderson", doctor: "Dr. Lee", date: "2024-04-25", medication: "Losartan", dosage: "50mg, Once a day" },
    { id: 8, patient: "Olivia Martinez", doctor: "Dr. Harris", date: "2024-04-27", medication: "Prednisone", dosage: "10mg, Twice a day" },
    { id: 9, patient: "William Thomas", doctor: "Dr. Scott", date: "2024-04-30", medication: "Atorvastatin", dosage: "20mg, Once a day" },
    { id: 10, patient: "Sophia Hernandez", doctor: "Dr. Adams", date: "2024-05-02", medication: "Albuterol", dosage: "2 puffs, As needed" }
  ]);

  // Function to delete a prescription
  const deletePrescription = (id) => {
    const updatedPrescriptions = prescriptions.filter((prescription) => prescription.id !== id);
    setPrescriptions(updatedPrescriptions);
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Medication</th>
            <th>Dosage</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.length > 0 ? (
            prescriptions.map((prescription, index) => (
              <tr key={prescription.id}>
                <td>{index + 1}</td>
                <td>{prescription.patient}</td>
                <td>{prescription.doctor}</td>
                <td>{prescription.date}</td>
                <td>{prescription.medication}</td>
                <td>{prescription.dosage}</td>
                <td>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deletePrescription(prescription.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className={styles.noPrescriptions}>
                No prescriptions available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Prescriptions;
