import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {IoNotificationsCircleOutline, IoSearch, BiMessageSquareDetail, BiPlus, 
       LuSettings, TiThMenu } from "../../../Utils/Icons.js";

import { navTabs } from '../../../DataFiles/SidebarData.jsx';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css'; // ✅ Import CSS module


function Navbar({ onMenuClick }) {
  const [searchInputForce, setSearchInputForce] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const userTypeRoute = "admin";

  return (
    <nav className={styles.navbar}>
      <div className={styles.navRow}>
        <div className={` ${styles.column}`}>
          <div className={`${styles.searchContainer} ${searchInputForce ? styles.active : ''}`}>
            <IoSearch className={styles.icon} />
            <input
              type="text"
              placeholder="Search item..."
              onFocus={() => setSearchInputForce(true)}
              onBlur={() => setSearchInputForce(false)}
            />
          </div>
          <div className="iconWrapper">
            <LuSettings />
          </div>
        </div>
        <div className={` ${styles.column}`}>
          <div  className="iconWrapper" >
            <BiMessageSquareDetail />
          </div>
          <div className="iconWrapper">
            <IoNotificationsCircleOutline />
          </div>
          <div className={styles.addBtn} onClick={() => navigate(`/admin/add-doctor`)}>
            <BiPlus />
            Add Doctor
          </div>
          <div className="iconWrapper" onClick={onMenuClick}>
            <TiThMenu />
          </div>
        </div>
      </div>
      <div className={styles.navRow}>
        <div className={styles.tabsContainer}>
          {navTabs.map((tab, index) => {
            const updatedRoute = userTypeRoute ? `/${userTypeRoute}/${tab.route}` : tab.route;
            return (
              <Link
                to={updatedRoute}
                className={`${styles.tab} ${tab.activeRoutes.includes(pathname) ? styles.active : ''}`}
                key={index}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
