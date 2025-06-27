import React,{useState} from 'react';
import DoctorNavbar from '../DoctorNavbar/DoctorNavbar';
import DoctorSidebar from '../DoctorSidebar/DoctorSidebar';
import "./DoctorLayout.css";


const DoctorLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar); 
  };

  return (
    <div className="App">
            <DoctorSidebar show={openSidebar} onClose={toggleSidebar} />
            <div className="Dashbord_Main">
            <DoctorNavbar  onMenuClick={toggleSidebar}/>
            {children} 
        </div>
    </div>
  );
};

export default DoctorLayout;
