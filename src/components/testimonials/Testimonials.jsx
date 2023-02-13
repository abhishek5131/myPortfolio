import React from 'react'
import './testimonials.css'
import avtr1 from '../../assets/avatar1.jpg'
import avtr2 from '../../assets/avatar2.jpg'
import avtr3 from '../../assets/avatar3.jpg'
import avtr4 from '../../assets/avatar4.jpg'


const data = [
  {
    avatar: avtr1,
    name: 'Nikhil Srivastav',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad quae aperiam amet earum, provident laboriosam deleniti natus, perferendis fugit numquam repellat in ipsa voluptas dolores officia nihil. Impedit, fuga!'
  },
  {
    avatar: avtr2,
    name: 'Dheeraj Kanwal',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad quae aperiam amet earum, provident laboriosam deleniti natus, perferendis fugit numquam repellat in ipsa voluptas dolores officia nihil. Impedit, fuga!'
  },
  {
    avatar: avtr3,
    name: 'Gaurav Belwal',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad quae aperiam amet earum, provident laboriosam deleniti natus, perferendis fugit numquam repellat in ipsa voluptas dolores officia nihil. Impedit, fuga!'
  },
  {
    avatar: avtr4,
    name: 'I.D. Paliwal',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad quae aperiam amet earum, provident laboriosam deleniti natus, perferendis fugit numquam repellat in ipsa voluptas dolores officia nihil. Impedit, fuga!'
  }
]


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review, index}) => {
            return(
              <article key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt = 'reviewers'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default testimonials