import React, { useState } from 'react';
import styles from "./SettingsPage.module.css";
import { FaUser, FaLock, FaBell, FaMoon, FaSun, FaShieldAlt, FaLanguage, FaTrash, FaHospital, FaUserMd, FaMoneyBillWave, FaDatabase, FaClipboardList } from "react-icons/fa";

function SettingsPage() {
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`${styles.settingsPage} ${darkMode ? styles.dark : ''}`}>
            {/* Profile Settings */}
            <div className={styles.section}>
                <h2><FaUser /> Profile Settings</h2>
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" />

                <label>Email</label>
                <input type="email" placeholder="Enter your email" />

                <button className={styles.saveButton}>Save Changes</button>
            </div>

            {/* Security Settings */}
            <div className={styles.section}>
                <h2><FaLock /> Security</h2>
                <label>Change Password</label>
                <input type="password" placeholder="Enter new password" />
                <input type="password" placeholder="Confirm new password" />
                <button className={styles.saveButton}>Update Password</button>
            </div>

            {/* Notifications Settings */}
            <div className={styles.section}>
                <h2><FaBell /> Notifications</h2>
                <label>
                    <input type="checkbox" /> Receive Email Alerts
                </label>
                <label>
                    <input type="checkbox" /> Receive Push Notifications
                </label>
                <button className={styles.saveButton}>Update Preferences</button>
            </div>

            {/* Dark Mode Toggle */}
            <div className={styles.section}>
                <h2><FaMoon /> Dark Mode</h2>
                <button className={styles.toggleButton} onClick={toggleDarkMode}>
                    {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>

            {/* Privacy & Security */}
            <div className={styles.section}>
                <h2><FaShieldAlt /> Privacy & Security</h2>
                <label>
                    <input type="checkbox" /> Enable Two-Factor Authentication
                </label>
                <label>
                    <input type="checkbox" /> Allow Location Access
                </label>
                <button className={styles.saveButton}>Save Privacy Settings</button>
            </div>

            {/* Language Preferences */}
            <div className={styles.section}>
                <h2><FaLanguage /> Language Preferences</h2>
                <select>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                </select>
                <button className={styles.saveButton}>Update Language</button>
            </div>

            {/* Hospital Management Settings */}
            <div className={styles.section}>
                <h2><FaHospital /> Hospital Management</h2>
                <label>Hospital Name</label>
                <input type="text" placeholder="Enter hospital name" />
                <label>Address</label>
                <input type="text" placeholder="Enter hospital address" />
                <button className={styles.saveButton}>Save Hospital Info</button>
            </div>

            {/* Doctor Management */}
            <div className={styles.section}>
                <h2><FaUserMd /> Doctor Management</h2>
                <button className={styles.saveButton}>Manage Doctors</button>
            </div>

            {/* Billing & Payments */}
            <div className={styles.section}>
                <h2><FaMoneyBillWave /> Billing & Payments</h2>
                <button className={styles.saveButton}>Manage Payments</button>
            </div>

            {/* Database & Reports */}
            <div className={styles.section}>
                <h2><FaDatabase /> Database & Records</h2>
                <button className={styles.saveButton}>Manage Database</button>
            </div>

            {/* Medical Reports */}
            <div className={styles.section}>
                <h2><FaClipboardList /> Medical Reports</h2>
                <button className={styles.saveButton}>View Reports</button>
            </div>

            {/* Account Deletion */}
            <div className={styles.section}>
                <h2><FaTrash /> Delete Account</h2>
                <p>Warning: Deleting your account is irreversible.</p>
                <button className={styles.deleteButton}>Delete My Account</button>
            </div>
        </div>
    );
}

export default SettingsPage;
