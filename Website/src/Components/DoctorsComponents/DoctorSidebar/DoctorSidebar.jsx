import React from 'react';
import {SiBuildkite} from "../../../Utils/Icons.js"
import { doctorSidebar } from '../../../DataFiles/DoctorsDatafiles/DoctorRoutes.jsx';
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './DoctorSidebar.module.css'; // Import CSS module
import  AppConfig from "../../../DataFiles/constent.js";
import {defolt_User} from "../../../assets/assets.js";
import ThemeToggle from "../../ThemeToggle/ThemeToggel.jsx";
import { logo } from '../../../assets/assets.js';

function DoctorSidebar({ show, onClose }) {

// const userTypeRoute = window.localStorage.getItem("userRole");
const userTypeRoute = "doctor";
const location =  useLocation();
const pathname = location.pathname; // ✅ Define pathname


  const handleBottomClick = () => {
    navigate('/settings'); // ✅ Fixed navigation issue
  };

  return (
    <>
       {show && <div className={styles.sidebarOverlay} onClick={onClose} />}
      
      <aside className={`${styles.DoctorSidebar} ${show ? styles.show : ''}`}>
        {/* Top Section */}
        <div className={`flex-center ${styles.top}`}>
          <div className={`flex-center ${styles.logo}`}>
            <div className={`flex-center logoSize`}>
              <img src={logo} alt="sidebar img" />
            </div>
            <span>
              <span className="gradient-text AppName">{AppConfig.Name}</span>
            </span>
          </div>
          <div className={`flex-center ${styles.iconWrapper} ${styles.cancleBtn}`} onClick={onClose}>
            <FaTimes />
          </div>
        </div>

        {/* Middle Section */}
        <div className={`${styles.middle} no-scrollbar`}>
          <div className={styles.tabContainer}>
            {doctorSidebar.map((list, index) => {
              const isActive = list.activeRoutes?.includes(pathname);
              const updatedRoute = userTypeRoute ? `/${userTypeRoute}/${list.route}` : list.route;

              return (
                <Link
              
                to={updatedRoute}
                className={`flex-center ${styles.tab} ${isActive ? 'active' : ''}`}
                key={index}
              >
                {list.icon}
                <span className={`name  ${isActive ? 'gradient-text' : ''}`}>{list.name}</span>
              </Link>
              );
            })}
          </div>

          {/* Divider Section */}
          {/* <div className={styles.divider}>
            <div className={styles.infoContainer}>
              <div className={styles.top}>
                <h3>Explore Trending Program</h3>
                <div className={styles.divider}></div>
                <div className={styles.middle}>
                  <p className={styles.description}>
                    Discover a wide range of programs tailored for your needs. Stay updated with the latest trends and enhance your skills today!
                  </p>
                </div>
                <div className={styles.bottom}>
                  <button className={`flex-center ${styles.btnExplore} ${styles.exploreBtn}`}>
                    Explore <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>   */}
        </div>

        {/* Bottom Section */}
          
         <div className={styles.bottom} onClick={handleBottomClick}>
           <div className={`flex-center ${styles.userContainer}`}>
             <div className={styles.profileAdmin}>
               <img src={defolt_User} alt="User Profile" />
             </div>
             <div className={styles.details}>
               <h4> Swapnil</h4> 
               <small className="muted clamp-1">Frontend Developer</small>
             </div>
          </div>
          </div>
      </aside>
    </>
  );
}

export default DoctorSidebar;



