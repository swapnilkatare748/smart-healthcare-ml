import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./Homehero.module.css";
import {useNavigate} from 'react-router-dom';
import { hero1 ,hero2,hero3} from '../../../assets/assets';
import BtnSecondary from "../../buttons/btnSecondary/btnSecondary";

const slides = [
  {
    id: 1,
    image: hero1,
    title: "Your Health, Our Priority, Quality Tritment ",
    description: "Experience world-class medical care with our expert team.",
  },
  {
    id: 2,
    image: hero2,
    title: "Advanced Medical Technology",
    description: "Bringing the future of healthcare to you today.",
  },
  {
    id: 3,
    image: hero3,
    title: "Compassionate Patient Care",
    description: "Providing personalized and patient-centered healthcare services.",
  },
];

const Homehero = () => {
  const [current, setCurrent] = useState(0);

  const Navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className={styles.sliderContainer}>
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className={styles.slide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          <div className={styles.overlay}>
            <h1>{slides[current].title}</h1>
            <p>{slides[current].description}</p>
            <p className={styles.Explore_btn}>< BtnSecondary text = "Explore Now " onClick={()=>{
                Navigate('/services');
            }} /></p>
          </div>
        </motion.div>
      </AnimatePresence>
      <button className={`${styles.prev} ${styles.button_prev_next} `} onClick={prevSlide}><FiChevronLeft size={30} /></button>
      <button className={`${styles.next} ${styles.button_prev_next} `} onClick={nextSlide}><FiChevronRight size={30} /></button>
    </div>
  );
};

export default Homehero;
