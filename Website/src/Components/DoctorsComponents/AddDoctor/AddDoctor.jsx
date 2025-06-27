import React from 'react';
import styles from './AddDoctor.module.css';
import RegistrationForm from '../../SignUppageComponents/SignUp/SignUp';
import  DashbordWrapper from '../../DashBordWrapper/index';



function AddDoctor() {
  return (
    <DashbordWrapper>
    <div className={styles.AddDoctor}>
        <RegistrationForm userRole="doctor"/>
    </div>
    </DashbordWrapper>
  )
}

export default AddDoctor
