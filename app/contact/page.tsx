import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-grid'>
        <div className='contact-info'>
          <h2 className='contact-title'>Contact Us</h2>
          <p className='contact-description'>
            Drop me a line, give me a call, or send me a message by submitting the following form.
          </p>
          <div className='contact-method'>
            <MdOutlineEmail size={30} className='contact-icon' /> 
            <a href="mailto:muhammadanasqadri2@gmail.com">muhammadanasqadri2@gmail.com</a>
          </div>
          <div className='contact-method'>
            <BsTelephone size={30} className='contact-icon' />
            <span>(92)313-3305615</span>
          </div>
        </div>
        <div className='contact-form'>
          <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input type="text" className='form-input' id='name' required />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input type="email" className='form-input' id='email' required />
          </div>
          <div className='form-group'>
            <label htmlFor="msg">Message</label>
            <textarea className='form-input' id='msg' rows={8} required></textarea>
          </div>
          <button className='submit-btn' style={{backgroundColor:"brown"}}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
