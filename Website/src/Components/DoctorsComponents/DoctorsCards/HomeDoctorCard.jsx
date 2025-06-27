import React from 'react'
import styles from './HomeDoctorCard.module.css';
import BtnPrimary from '../../buttons/BtnPrimary/BtnPrimary';

const Doctores =[
        {
          "img": "https://via.placeholder.com/150",
          "name": "Dr. John Smith",
          "description": "Cardiologist with 10+ years of experience in heart disease management."
        },
        {
          "img": "https://via.placeholder.com/150",
          "name": "Dr. Emily Johnson",
          "description": "Pediatrician specializing in child healthcare and immunization."
        },
        {
          "img": "https://via.placeholder.com/150",
          "name": "Dr. Raj Patel",
          "description": "Orthopedic surgeon focusing on sports injuries and joint replacement."
        },
        {
          "img": "https://via.placeholder.com/150",
          "name": "Dr. Sarah Lee",
          "description": "Dermatologist expert in skincare treatments and laser therapy."
        },
        {
          "img": "https://via.placeholder.com/150",
          "name": "Dr. Ahmed Khan",
          "description": "Neurologist specializing in stroke recovery and brain disorders."
        }
      ]
      


function HomeDoctorCard() {
  return (
    <div className={styles.HomeDoctorCard}>
    {
      Doctores.map((doctor,index)=>(
        <div key={index} className={styles.DoctorCard}>
            <img src={doctor.img} alt={`docuter image ${index}`} />
            <h3>{doctor.name}</h3>
            <p>{doctor.description}</p>
            <BtnPrimary text="Make An Appointment"/>
        </div>
      ))
    }    
    </div>
  )
}

export default HomeDoctorCard
