import React, { useEffect, useState } from "react";
import styles from "./Doctors.module.css";
import axios from "axios";
import { getUsersByRole } from "../../Apis/userService"; // Adjust the import path as needed

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch doctors on component mount
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getUsersByRole("doctor"); 
        setDoctors(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // State to track editing
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [editedDoctor, setEditedDoctor] = useState({ name: "", specialty: "", email: "" });

  // Function to delete a doctor
  const deleteDoctor = (id) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
  };

  // Function to handle edit button click
  const startEditing = (doctor) => {
    setEditingDoctor(doctor.id);
    setEditedDoctor({ name: doctor.name, specialty: doctor.specialty, email: doctor.email });
  };

  // Function to handle input changes in edit mode
  const handleEditChange = (e) => {
    setEditedDoctor({ ...editedDoctor, [e.target.name]: e.target.value });
  };

  // Function to save the edited doctor
  const saveEdit = (id) => {
    setDoctors(doctors.map((doctor) => (doctor.id === id ? { ...doctor, ...editedDoctor } : doctor)));
    setEditingDoctor(null);
  };

  if (loading) return <p>Loading doctors...</p>;
  if (error) return <p className={styles.error}>Error fetching doctors: {error}</p>;

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>role</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.length > 0 ? (
            doctors.map((doctor,index) => (
              <tr key={doctor.id}>
                <td>{index+1}</td>
                <td>
                  {editingDoctor === doctor.id ? (
                    <input type="text" name="name" value={editedDoctor.name} onChange={handleEditChange} />
                  ) : (
                    doctor.name
                  )}
                </td>
                <td>
                  {editingDoctor === doctor.id ? (
                    <input type="text" name="specialty" value={editedDoctor.specialty} onChange={handleEditChange} />
                  ) : (
                    doctor.role
                  )}
                </td>
                <td>
                  {editingDoctor === doctor.id ? (
                    <input type="text" name="email" value={editedDoctor.email} onChange={handleEditChange} />
                  ) : (
                    doctor.email
                  )}
                </td>
                <td className={styles.Actions}>
                  {editingDoctor === doctor.id ? (
                    <button className={styles.saveButton} onClick={() => saveEdit(doctor.id)}>Save</button>
                  ) : (
                    <>
                      <button className={styles.editButton} onClick={() => startEditing(doctor)}>Edit</button>
                      <button className={styles.deleteButton} onClick={() => deleteDoctor(doctor.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className={styles.noDoctors}>No doctors available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Doctors;
