import React from 'react'
import styles from './Homepage.module.css';
import Homehero from '../../Components/HomepageComponent/HomeHero/Homehero';
import HeroServices from '../../Components/HomepageComponent/HeroServices/HeroServices';
import HeroWelcome from '../../Components/HomepageComponent/HeorWelcome/HeroWelcome';
import Departments from '../../Components/HomepageComponent/Departments/Departments';
import HomeBanner from '../../Components/HomepageComponent/HomeBanner/HomeBanner';
import DoctorsCard from '../../Components/DepartmentsCom/Doctores_CardCom/DoctersCard';

function Homepage() {
  return (
    <div className={`${styles.Homepage} page`}>
      <Homehero/>
      <HeroServices/>
      <HeroWelcome/>
      <Departments/>
      <HomeBanner/>
      <DoctorsCard/>
    </div>   
  )
}
export default Homepage
