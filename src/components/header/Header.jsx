import React from 'react'
import './header.css'
import CTA from './CTA'
const header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Abhishek Singh</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default header