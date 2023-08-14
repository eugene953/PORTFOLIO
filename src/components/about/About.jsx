import React from 'react'
import  "./about.css";
//import  Award from "../../img/Award.jpg"
import eu from "../../img/eu.jpg";


const About = () => {
  return (
    <div className='a'>
     <div className='a-left'>
     <div className='a-card bg'></div>
     <div className='a-card'>
<img src={eu} alt="" className="" />

     </div>
      </div> 
     <div className='a-right'>
     <h1 className='a-title'>About Me</h1>
     <p className="a-sub">
          I am Nfoua Eugene an intern in Summit Tech. Hoping to acquire skills in software developement.
        </p>
        <p className="a-desc">
        I am a young software engineer student at the Faculty of
              Engineering and Technology(FET) of the University of Buea . 
              I applied to SUMMIT TECH as an intern which i was accepted and taken for internship and 
              give me the chance to develope my skills on real
              business projects in order to gain experience. From Jully 18 to
              today, I learned technologies such as html, css, react js,
                 , I am still learning and counting on the
              support of SUMMIT TECH to increase my knownlege at the end being an
              engineer with skills.
       
         </p>
         
        <div className="a-award">
  <img src="" alt="" className="a-award-img"/>
  <div className="award-texts">
  <div className="award-title">   </div>
  <p className="award-desc">
    
  </p>


  </div>
          </div>
          
     </div>
    </div>
  )
}

export default About