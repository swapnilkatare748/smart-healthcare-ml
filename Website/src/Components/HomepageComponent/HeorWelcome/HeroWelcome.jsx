import React from 'react'
import styles from './HeroWelcome.module.css';
import { welcome1,welcome2 } from '../../../assets/assets';
import BtnSecondary from '../../buttons/btnSecondary/btnSecondary';

function HeroWelcome() {
  return (
    <div className={styles.HeroWelcome}>
           <div className={styles.Container}>
              <img src={welcome1} alt="Welcome Section image 1" className={styles.welcomeimage} />
              <img src={welcome2} alt="Welcome section image 2" className={styles.welcomeimage} />
           </div>
           <div className={`${styles.Container} ${styles.welcomecontent}`}>
               <div className={styles.seaction_Heading}>
                  Welcome to MediCare
               </div>
               <h3>Best Care For Your <br />
               Good Health </h3>
               <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
               <ul>
                <li>Apartments frequently or motionless.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
                <li>Voluptatem quia voluptas sit aspernatur.</li>
               </ul>
               <BtnSecondary text = "Learn More" color = "var(--btn-primery)"/>
           </div>
    </div>
  )
}

export default HeroWelcome
