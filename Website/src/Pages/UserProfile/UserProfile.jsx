import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./UserProfile.module.css";

function UserProfile() {
  const [userInfo, setUserInfo] = useState("");
  const [error, setError] = useState("");

  const userToken = localStorage.getItem("userToken"); // Assuming token is stored in localStorage


  useEffect(() => {
    const fetchUserInfo = async () => {
      const userId = localStorage.getItem("userId");
      console.log("user id is : ", userId);
      const token = localStorage.getItem("authToken");
      if (!userId || !token) {
        setError("User not logged in");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8000/user/profile/${userId}`
        );
        if (!response) {
          console.log("responce ", response);
        }
        setUserInfo(response.data);
      } catch (err) {
        if (err.response && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          console.log("Failed to fetch user information.");
        }
      }
    };

    fetchUserInfo();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!userInfo) {
    return <div>Loading user info...</div>;
  }

  return (
    <div className="page flex-center">
      <div className={styles.UserProfile}>
        <div className={styles.profile_photo}>
          <img src={userInfo.photo} alt="user profile" />
        </div>
        <div className="user_info">
          <h1>Welcome, {userInfo.name}!</h1>
          <p>Email: {userInfo.email}</p>
          <p>Phone: {userInfo.phone}</p>
          <p>Role: {userInfo.isAdmin}</p>
          <div>
            <h4>Addres</h4>
            <p>City :{userInfo.address.city} </p>
            <p>state : {userInfo.address.state}</p>
            <p>country :{userInfo.address.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
