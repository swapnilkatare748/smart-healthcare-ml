import React, { useEffect, useState } from "react";
import styles from "./Requests.module.css";
import axios from "axios";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get("http://localhost:8000/apis/contact");
        setRequests(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const deleteRequest = (id) => {
    setRequests(requests.filter((request) => request._id !== id));
  };

  const acceptRequest = (id) => {
    console.log("Accepted request with ID:", id);
  };

  if (loading) return <p>Loading requests...</p>;
  if (error) return <p className={styles.error}>Error fetching requests: {error.message}</p>;

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((request, index) => (
              <tr key={request._id}>
                <td>{index + 1}</td>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{request.phone}</td>
                <td>{request.message}</td>
                <td className={styles.Actions}>
                  <button className={styles.acceptButton} onClick={() => acceptRequest(request._id)}>Accept</button>
                  <button className={styles.deleteButton} onClick={() => deleteRequest(request._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className={styles.noRequests}>No requests available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Requests;