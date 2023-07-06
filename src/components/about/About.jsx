import React from 'react'

import './about.css'
import Me from '../../assets/walk.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscRootFolder } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Wannabe Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Nill</small>
            </article><article className='about__card'>
              <VscRootFolder className='about__icon' />
              <h5>Projects</h5>
              <small>2+ Completed</small>
            </article>
          </div>
          <p>
            Front-End Developer with ability to collaborate effectively with other developers while spending extra time to be
            mentored. With a passion for both personal growth and for software
            development, I intend to learn new languages while sharpening existing skills to gain Full-Stack knowledge. Ready
            to apply my passion for coding to a talented engineering team to develop quality solutions.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About