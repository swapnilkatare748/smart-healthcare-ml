import React, { useState, useEffect } from "react";
import { getAppointments, deleteAppointment } from "../../../Apis/apiService"; // Import API functions
import styles from "./Appointments.module.css";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  // ✅ Fetch Appointments using API function
  const fetchAppointments = async () => {
    try {
      const data = await getAppointments(); // Call API function
      console.log(data);
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  // ✅ Fetch appointments when component mounts
  useEffect(() => {
    fetchAppointments();
  }, []);

  // ✅ Function to delete an appointment using API function
  const handleDelete = async (id) => {
    try {
      await deleteAppointment(id); // Call delete API function
      setAppointments(appointments.filter((appointment) => appointment.id !== id)); // Update state
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Serial No</th>
            <th>Name</th>
            <th>Email</th>
            <th>TimeSlot</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map((appointment, index) => (
              <tr key={appointment.id}>
                <td>{index + 1}</td>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{appointment.timeSlot}</td>
                <td>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(appointment.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className={styles.noAppointments}>
                No appointments available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
