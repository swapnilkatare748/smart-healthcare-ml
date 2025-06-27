import React, { useState } from 'react';
import './DasbordWrapper.css';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';

function DashbordWrapper({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar); // Toggle the state
  };

  return (
    <>
      <Sidebar show={openSidebar} onClose={toggleSidebar} />
        <div className="Dashbord_Main">
        <Navbar  onMenuClick={toggleSidebar}/>
      
        {children}
        </div>
    </>
  );
}

export default DashbordWrapper;
