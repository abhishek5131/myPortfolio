import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
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
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/abhishek-singh5131">Click on here</a>
          </article>
          <article className="contact__option">
            <AiFillGithub className='contact__option-icon'/>
            <h4>Github</h4>
            <a href="https://github.com/abhishek5131">Click on here</a>
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