import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css"; // Import CSS for styling
import logo from "../../../assets/logo icons/logo.png.webp"; // Adjust path as needed
import AppConfig from "../../../DataFiles/constent"; // Ensure correct filename
import axios from "axios";

const LoginPage = ({ userRole = "Patient" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState(userRole); 

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    try {
      const response = await axios.post("http://localhost:8000/apis/auth/login", {
        email,
        password
      });

      console.log("API Response:", response.data);

      // Extract token and user details
      const { token, user } = response.data;
      if (!token || !user) {
        throw new Error("Invalid response from server");
      }

      // Save token and user details in local storage
      localStorage.setItem("authToken", token);
      localStorage.setItem("userId", user._id);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userRole", user.isAdmin ? "admin" : "user");

      alert("Login successful!");

      console.log("User details:", user);

      // Navigate based on user role
      if (user?.role === "doctor") {
        navigate("/doctor");
      } else if (user?.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    
    } catch (err) {
      console.error("Login error:", err);
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <div className={styles.logo}>
          <img src={logo} alt="login logo" className="logoSize" />
          <h3 className="AppName">{AppConfig.Name}</h3>
        </div>
        
        <h2 className={styles.login_name}>Login {role} </h2>

        {/* Display error message */}
        {error && <div className={styles.error}>{error}</div>}

        {/* Email Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
