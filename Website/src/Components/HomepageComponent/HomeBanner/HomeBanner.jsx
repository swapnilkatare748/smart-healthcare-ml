import React from 'react'
import Styles from './HomeBanner.module.css';
import { FaQuoteLeft } from "react-icons/fa";

function HomeBanner() {
  return (
    <>
    <div className={Styles.HomeBanner}>
    <div className={Styles.Content_div}>
           <FaQuoteLeft size={40}/>
             <p> Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br />
              sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. <br />
              Fusce ac mattis nulla. Morbi eget ornare dui.
             </p>
             <h4>ASANA KORIM</h4>
        </div>      
    </div>
    </>
  )
}

export default HomeBanner
