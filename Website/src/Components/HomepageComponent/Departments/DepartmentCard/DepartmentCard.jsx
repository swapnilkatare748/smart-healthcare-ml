import React from 'react'
import styles from './DepartmentCard.module.css';

function DepartmentCard({CardData}) {
  return (
    <div className={styles.DepartmentCard}>
       <img src={CardData.img} alt={`card img ${CardData.id}`}/>
       <div className={styles.cardText}>
        <h3>{CardData.heading}</h3>
        <p>{CardData.description}</p>
        <a href="/">Lern More</a>
       </div>
    </div>
  )
}

export default DepartmentCard
