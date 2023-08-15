import './contact.css';
import phone from "../../img/phone.jpg";
import email from "../../img/email.jpg";
import address from "../../img/address.jpg";
import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';


const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_3f02c4h', 
        'template_ohphcbd',
         formRef.current, 
         'ujhcnnJ1qfhl9yTNz')
        .then(
            (result) => {
            console.log(result.text);
            setDone(true)
        }, 
        (error) => {
            console.log(error.text);
        }
        );

    };



  return (
    <div className='c'>
          <div className='c-bg'></div>
          <div className='c-wrapper'>
          <div className='c-left'>
          <h1 className='c-title'>Let's discuss your project  </h1>
          <div className='c-info'>
<div className="c-info-item">
<img  
src={phone}
alt='' 
className='c-icon'
/>
+237 678697513
</div>
<div className="c-info-item">
    <img className='c-icon' src={email} alt=""/>
    nfouaeugene953@gmail.com
</div>
<div className="c-info-item">
    <img className='c-icon' src={address} alt=""/>
    Molyko Ndongo, South West Region.
</div>

          </div>
    </div>
    <div className='c-right'>
    <p className='c-desc'>
<b>What's your story?</b>Get in touch. Always available for
            freelancing if the right project comes along. 
</p>

<form ref={formRef} onSubmit={handleSubmit}>
<input type='text' placeholder='Name' name='user_name'/>
<input type='text' placeholder='Subject' name='user_subject'/>
<input type='text' placeholder='Email' name='user_email'/>
<textarea rows="5" placeholder='Message' name='message'/>
<button>Submit</button>
{done && "Thank you....."}
</form>
</div>
    </div>
    </div>
    
  )
}

export default Contact
