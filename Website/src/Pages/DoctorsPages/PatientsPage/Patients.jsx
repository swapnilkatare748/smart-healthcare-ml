import React, { useState, useEffect } from "react";
import styles from "./Patients.module.css";
import { getAllUsers, deleteUser } from "../../../Apis/userService"; // Import API functions

const Patients = () => {
  const [patients, setPatients] = useState([]);

  // Fetch only patients from the backend
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await getAllUsers(); // Call API function
        setPatients(response);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  // Function to delete a patient record
  const handleDeletePatient = async (id) => {
    try {
      await deleteUser(id); // Call API function
      setPatients(patients.filter((patient) => patient._id !== id));
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Name</th>
            <th>role</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.length > 0 ? (
            patients.map((patient, index) => (
              <tr key={patient._id}>
                <td>{index + 1}</td>
                <td>{patient.name}</td>
                <td>{patient.role}</td>
                <td>{patient.email}</td>
                <td>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDeletePatient(patient._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className={styles.noPatients}>
                No patients available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
