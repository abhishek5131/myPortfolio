import React from 'react'
import './portfolio.css'
import img1 from '../../assets/DashboardWebApps.webp'
import img2 from '../../assets/Chart.webp'
import img3 from '../../assets/NodeSys.webp'

const data = [

  {
    id: 1,
    image: img1,
    title: 'Dashboard UI kit for data design web apps',
    demo: 'https://dribbble.com/shots/19727520-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    github: 'https://github.com/abhishek5131/myPortfolio'
  },
  {
    id: 2,
    image: img2,
    title: 'Chart components',
    demo: 'https://dribbble.com/shots/19551493-Chart-components',
    github: 'https://github.com/abhishek5131/myPortfolio'
  },
  {
    id: 3,
    image: img3,
    title: 'Node system dashboard',
    demo: 'https://dribbble.com/shots/19314346-Node-system-dashboard',
    github: 'https://github.com/abhishek5131/myPortfolio'
  }

]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, demo, github}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Abhishek Live</a>
          </div>
        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default portfolio




