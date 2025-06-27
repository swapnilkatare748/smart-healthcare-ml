import React, { useState } from "react"; // ✅ Import useState
import { useNavigate } from "react-router-dom";
import styles from "./UserSeting.module.css";
import LoginPage from "../../SignUppageComponents/LoginPageForm/LoginPage";

import {
  FaSignInAlt,
  FaUser,
  FaBell,
  FaCreditCard,
  FaShieldAlt,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";

function UserSeting() {
  const navigate = useNavigate();
  const [showAdminLogin, setShowAdminLogin] = useState(false); // ✅ Manage Admin login popup

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
    window.location.reload(); // Ensures complete logout
  };

  const handleAdminLogin = () => {
    setShowAdminLogin(true); // ✅ Open Admin Login popup
  };

  const closeAdminLogin = () => {
    setShowAdminLogin(false); // ✅ Close popup
  };

  const Seting = [
    {
      id: 1,
      name: "Settings",
      icon: <FaCog />,
    },
    {
      id: 2,
      name: "Profile",
      icon: <FaUser />,
    },
    {
      id: 3,
      name: "Notifications",
      icon: <FaBell />,
    },
    {
      id: 4,
      name: "Payment Methods",
      icon: <FaCreditCard />,
    },
    {
      id: 5,
      name: "Security",
      icon: <FaShieldAlt />,
    },
    {
      id: 6,
      name: "Logout",
      icon: <FaSignOutAlt />,
      action: handleLogout,
    },
    {
      id: 7,
      name: "Login As Admin",
      icon: <FaSignInAlt />,
      action: handleAdminLogin,
    },
  ];

  return (
    <div className={styles.UserSeting}>
      {Seting.map((item) => (
        <div
          key={item.id}
          className={styles.settingItem}
          onClick={item.action ? item.action : undefined}
        >
          {item.icon} <span>{item.name}</span>
        </div>
      ))}

      {/* ✅ Admin Login Modal */}
      {showAdminLogin && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeBtn} onClick={closeAdminLogin}>
              ×
            </button>
            <LoginPage userRole="Admin"/> {/* ✅ Show Admin Login Page inside the modal */}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserSeting;
