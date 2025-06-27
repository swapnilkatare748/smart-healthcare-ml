import React from 'react'
import styles from './BtnPrimary.module.css';


function BtnPrimary(props) {
  return (
      <button className={styles.btn_primary}>{props.text}</button>
  )
}

export default BtnPrimary
