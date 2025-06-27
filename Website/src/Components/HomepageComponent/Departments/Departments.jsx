import React from "react";
import styles from "./Departments.module.css";
import DepartmentCard from './DepartmentCard/DepartmentCard';
import {Dep1,Dep2,Dep3,Dep4,Dep5,Dep6} from '../../../assets/assets';

const DepartmentsData = [
  {
    id:"1",
    heading: "Dry Eye Syndrome",
    img: Dep1,
    description:
      "Diagnosis and treatment for dry eyes, ensuring comfort and clear vision.",
    buttonText: "Learn More",
  },
  {
    id:"2",
    heading: "Physical Therapy",
    img: Dep2,
    description:
      "Esteem spirit temper too say adieus who direct esteem.",
    buttonText: "Learn More",
  },
  {
    id:"3",
    heading: "Dental Care",
    img: Dep3,
    description:
      "Esteem spirit temper too say adieus who direct esteem.",
    buttonText: "Learn More",
  },
];

function Departments() {
  return (
    <div className={styles.Departments}>
      <div className={styles.seaction_Heading}>Our Departments</div>
       <div className="text-center">
       <p>Esteem spirit temper too say adieus who direct esteem.</p>
       <p>It esteems luckily or picture placing drawing.</p>
       </div>
       <div className={styles.DepartmentsCars}>
        {
            DepartmentsData.map((Department,index)=>(
                  <DepartmentCard key={Department.id} CardData={Department} />
            ))
        }
       </div>
    </div>
  );
}

export default Departments;
