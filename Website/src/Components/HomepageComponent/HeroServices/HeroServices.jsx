import React, { useState } from "react"; // ✅ Import useState
import stylels from "./HeroServices.module.css";
import BtnSecondary from "../../buttons/btnSecondary/btnSecondary";
import { FaRegHospital, FaAmbulance } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import BookAppointment from "../../../Components/BookAppointment/BookAppointment";

function HeroServices() {
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ State to manage popup visibility
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true); // ✅ Open modal
  const closeModal = () => setIsModalOpen(false); // ✅ Close modal

  const handleApplyBed = () => {
    navigate("/contact");
  };

  const EmergancyContact = () => {
    window.location.href = "tel:+91180000008000"; // Redirects to phone dialer
  };

  const AppintmentBookhandle = () => {
    openModal(); // ✅ Opens modal instead of navigation
  };

  const Deta = [
    {
      icon: <FaRegHospital size={50} />,
      Services_name: "Hospitality",
      discription: "Clinical excellence must be the priority for any health care service provider.",
      buttonText: "Apply For A Bed",
      onclick: handleApplyBed,
    },
    {
      icon: <FaAmbulance size={50} />,
      Services_name: "Emergency Care",
      discription: "Clinical excellence must be the priority for any health care service provider.",
      buttonText: "+91 1800 0000 8000",
      onclick: EmergancyContact,
    },
    {
      icon: <FaUserDoctor size={50} />,
      Services_name: "Chamber Service",
      discription: "Clinical excellence must be the priority for any health care service provider.",
      buttonText: "Make An Appointment",
      onclick: AppintmentBookhandle,
    },
  ];

  return (
    <div className={stylels.HeroServices}>
      {Deta.map((deta, index) => (
        <div key={index} className={`${stylels.content_contener} ${index === 1 ? stylels.specialBg : ""}`}>
          <div className="icon"> {deta.icon}</div>
          <h3>{deta.Services_name}</h3>
          <p>{deta.discription}</p>
          <BtnSecondary text={deta.buttonText} onClick={deta.onclick} />
        </div>
      ))}

      {/* ✅ Modal moved outside of `.map()` */}
      {isModalOpen && (
        <div className={stylels.modalOverlay}>
          <div className={stylels.modalContent}>
            <button className={stylels.closeBtn} onClick={closeModal}>×</button>
            <BookAppointment />
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroServices;
