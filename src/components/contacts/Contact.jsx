import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
const contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abhishek5131singh@gmail.com</h5>
            <a href="mailto:dummy@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 **** *** **8</h5>
            <a href="https://api.whatsapp.com/send?phone=+91*********8">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name="email" placeholder='Email'required />
          <textarea name="message" rows="10" placeholder='Type your message here' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact