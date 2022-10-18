import React from 'react'

import './about.css'
import Me from '../../assets/walk.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscRootFolder} from 'react-icons/vsc'

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
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Nill</small>
            </article><article className='about__card'>
              <VscRootFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>2+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptate aperiam odio alias 
            vero dolor maxime illo fugit, possimus ut voluptatibus. Voluptatum ipsam inventore quibusdam 
            quae quia, labore voluptas veritatis.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About