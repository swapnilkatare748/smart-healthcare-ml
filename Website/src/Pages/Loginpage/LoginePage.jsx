import React from 'react'
import styles from './LoginPage.module.css';
import LoginPage from '../../Components/SignUppageComponents/LoginPageForm/LoginPage';

function LoginePage() {
  return (
    <div className={`${styles.LoginePage} page flex-center`}>
         <LoginPage userRole="Patient"/>
    </div>
  )
}

export default LoginePage
