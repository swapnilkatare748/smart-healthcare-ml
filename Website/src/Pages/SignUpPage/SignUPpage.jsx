import React from 'react';
import styles from './SignUPpage.module.css';
import RegistrationForm from '../../Components/SignUppageComponents/SignUp/SignUp';

function SignUPpage() {
  return (
    <div className={`${styles.SignUPpage} page flex-center`}>
      <RegistrationForm userRole="Patient"/>
    </div>
  )
}

export default SignUPpage
