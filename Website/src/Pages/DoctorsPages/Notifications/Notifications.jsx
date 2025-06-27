import React, { useState } from "react";
import styles from "./Notifications.module.css";

const Notifications = () => {
  // Dummy notifications list
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New appointment scheduled with Dr. Smith", time: "10 mins ago" },
    { id: 2, message: "Your prescription is ready for pickup", time: "30 mins ago" },
    { id: 3, message: "Reminder: Blood test scheduled for tomorrow", time: "1 hour ago" },
    { id: 4, message: "New message from Dr. Johnson", time: "2 hours ago" },
    { id: 5, message: "Lab results available in your profile", time: "3 hours ago" },
    { id: 6, message: "Appointment with Dr. Taylor rescheduled", time: "Yesterday" },
    { id: 7, message: "Health checkup due in 7 days", time: "2 days ago" },
    { id: 8, message: "New feedback received from a patient", time: "3 days ago" },
    { id: 9, message: "Insurance claim has been processed", time: "4 days ago" },
    { id: 10, message: "Your health report is now available", time: "5 days ago" },
  ]);

  // Function to delete a notification
  const deleteNotification = (id) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.notificationList}>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <li key={notification.id} className={styles.notificationItem}>
              <div className={styles.notificationText}>
                <p>{notification.message}</p>
                <span className={styles.time}>{notification.time}</span>
              </div>
              <button
                className={styles.deleteButton}
                onClick={() => deleteNotification(notification.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li className={styles.noNotifications}>No notifications available.</li>
        )}
      </ul>
    </div>
  );
};

export default Notifications;
