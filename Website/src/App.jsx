import React from 'react'
import './App.css';
import { BrowserRouter , Routes, Route, Link ,useLocation} from 'react-router-dom';
import Homepage from './Pages/HomePage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import ThemeToggel from './Components/ThemeToggle/ThemeToggel';
import SignUPpage from './Pages/SignUpPage/SignUPpage';
import LoginePage from './Pages/Loginpage/LoginePage';
import UserProfile from './Pages/UserProfile/UserProfile';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/ContactPage/Contact';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import Departments from './Pages/Departments/Departments.jsx';
import AdminPannel from "./Pages/AdminPannel/AdminPannel.jsx";
import UserProfilePage from './Pages/UserProfilePage/UserProfilePage.jsx';
import DoctorLayout from "./Components/DoctorsComponents/DoctorLayout/DoctorLayout.jsx";
import DoctorsHomePage from "./Pages/DoctorsHomePage/DoctorsHomePage.jsx";
import NeuroScan from './Components/DoctorsComponents/NeuroScan/NeuroScan.jsx';
import Error from "./Pages/ErrorPage/Error.jsx";
import AddDoctor from './Components/DoctorsComponents/AddDoctor/AddDoctor.jsx';
import Appointments from './Pages/DoctorsPages/Appointments/Appointments.jsx';
import Patients from './Pages/DoctorsPages/PatientsPage/Patients.jsx';
import Prescriptions from './Pages/DoctorsPages/prescriptions/prescriptions.jsx';
import Notifications from './Pages/DoctorsPages/Notifications/Notifications.jsx';
import Doctors from './Components/Doctors/Doctors.jsx';
import DashbordWrapper from './Components/DashBordWrapper/index.jsx';
import SettingsPage from './Pages/SettingsPage/SettingsPage.jsx';
import Requests from './Pages/DoctorsPages/requests/requests.jsx';
import CancerDetection from './Components/DoctorsComponents/CancerDetection/CancerDetection.jsx';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavFooter = location.pathname.startsWith('/admin') || location.pathname.startsWith('/doctor'); 
  

  return (
    <div className='App'>
        {!hideNavFooter && <Navbar />}
        {children}
        {!hideNavFooter && <Footer />}
    </div>
  );
};


const DoctorRoutes = () => {
  return (
    <DoctorLayout>
      <Routes>
      <Route path="/" element={<DoctorsHomePage />} />
        <Route path="/dashboard" element={<DoctorsHomePage />} />
        <Route path="/MedScan" element={<NeuroScan/>} />
        <Route path='appointments' element={<Appointments/>}/>
        <Route path='patients' element={<Patients/>}/>
        <Route path='prescriptions' element={<Prescriptions/>}/>
        <Route path='notifications' element={<Notifications/>}/>
        <Route path="settings" element={<SettingsPage/>}/>
        <Route path="requests" element={<Requests/>}/>
        <Route path='CancerDetection' element={<CancerDetection/>}/>
        {/* <Route path="/patients" element={<h2>Doctor Patients</h2>} /> */}
      </Routes>
    </DoctorLayout>
  );
}

const AdmineRoutes=()=>{
         return(
          <DashbordWrapper>
            <Routes>
            <Route path='notifications' element={<Notifications/>}/>
            <Route path="inbox" element={<Notifications/>}/>
            <Route path="doctors" element={<Doctors/>}/>
            <Route path='patients' element={<Patients/>}/>
            <Route path="settings" element={<SettingsPage/>}/>
            <Route path="requests" element={<Requests/>}/>
            </Routes>
          </DashbordWrapper>
         )
}

function App() {
  return (
    <div className='App'>
      <Layout>
       <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/signUp' element={<SignUPpage/>}/>
          <Route path='/login' element={<LoginePage/>}/>
          <Route path='/user' element={<UserProfile/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Deparment" element={<Departments/>}/>
          <Route path="/admin" element={<AdminPannel/>} />
          <Route path="settings" element={<SettingsPage/>}/>
          <Route path="/uer-profile" element={<UserProfilePage/>}/>
           {/* Admine routes  */}
           <Route path='admin/dashboard' element={<AdminPannel/>}/>
          <Route path="admin/add-doctor" element={<AddDoctor/>}/>    
          <Route path='/admin/*' element={<AdmineRoutes/>}/>
            
          {/* Doctor routes  */}
          <Route path='/doctor/*' element={ <DoctorRoutes/>  } />
          
       </Routes>
       </Layout>
    </div>
  )
}

export default App
