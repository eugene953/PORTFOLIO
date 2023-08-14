import React from 'react'
import "./toggle.css";
import sun from "../../img/sun.jpg"
import moon from "../../img/moon.jpg"

const Toggle = () => {
  return (
    <div className='t'>
      <img src={sun} alt="" className="t-icon" />
      <img src={moon} alt="" className="t-icon" />
      <div
       className="t-button"
      ></div>
    </div>
    
  )
}

export default Toggle
