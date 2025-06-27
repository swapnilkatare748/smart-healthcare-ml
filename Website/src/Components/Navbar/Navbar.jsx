import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
// import ThemToggle from '../ThemeToggle/ThemeToggel';
import { logo } from '../../assets/assets.js';
import AppConfig from '../../DataFiles/constent.js';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks user's login status
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.getElementById('header');
    const navbarList = document.getElementById('navbar-list');
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add(styles.scrolled);
      } else {
        header.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const userToken = localStorage.getItem("authToken");
    console.log("User Token:", userToken);
    
    if (userToken) {
      setIsLoggedIn(true); // User is logged in if the token exists
    } else {
      setIsLoggedIn(false); // User is logged out
    }
  }, []);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className={`${styles.header}`} id="header">
        <div className={styles.container}>
          <a href="/" className={styles.logos}>
            <img src={logo} alt="img"/>  <h3 className='AppName'>{AppConfig.Name}</h3>
          </a>
           
          <div className={styles.menuIcon} onClick={toggleMenu}>
          {menuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </div>

          <nav
            id="navbar"
            className={`${styles.navbar}  ${menuOpen ? styles.open : ''}`}
          >
            <ul id="navbar-list" className={styles['navbar-list']}>
              <li onClick={toggleMenu}>
                <Link to="/" className={styles['navbar-link']}>Home</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/services" className={styles['navbar-link']}>Services</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/contact" className={styles['navbar-link']}>Contact</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/Deparment" className={styles['navbar-link']}>Deparment</Link>
              </li>
              {!isLoggedIn ? (
              <>
                <li onClick={toggleMenu} ><Link to="/login" className={styles.navbarLink}>Login</Link></li>
                <li onClick={toggleMenu} ><Link to="/signup" className={`${styles.navbarLink} btn`}>Sign Up</Link></li>
              </>
            ) : (
              <li onClick={toggleMenu}>
                <Link to="/uer-profile" className={styles.navbarLink}>
                  <div className={styles.profilePhoto}></div>
                </Link>
              </li>
            )}
              
            </ul>            
          </nav>
          
        </div>
      </header>
    </div>
  );
};

export default Navbar;
