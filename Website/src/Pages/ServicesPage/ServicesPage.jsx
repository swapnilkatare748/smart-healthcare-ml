import React from 'react'
import styles from './ServicesPage.module.css';
import ServicesCom from '../../Components/ServicespageComponent/ServicesCom/ServicesCom';
import ServicesBody from '../../Components/ServicespageComponent/ServiceBody/ServicesBody';
import TumorDetection from '../../Components/ServicespageComponent/TumorDetectioninfo/TumorDetection';
import LungCancerDetection from '../../Components/ServicespageComponent/LungCancerDetection/LungCancerDetection';

function ServicesPage() {
  return (
    <div className={styles.ServicesPage}>
      <ServicesCom/>
      <ServicesBody/>
      <TumorDetection/>
      <LungCancerDetection/>
    </div>
  )
}

export default ServicesPage
