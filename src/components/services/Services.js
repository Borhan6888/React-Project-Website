import React from 'react'
import './services.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'


const data = [
  {
    
    id: 1,
    image: Img1,
    title: "sunt aut facere repellat provident",
    github: 'https://www.github.com',
    demo: 'https://www.dribble.com',
  },
  {
    
    id: 2,
    image: Img2,
    title: "sunt aut facere repellat provident",
    github: 'https://www.github.com',
    demo: 'https://www.dribble.com',
  },
  {
    
    id: 3,
    image: Img3,
    title: "sunt aut facere repellat provident",
    github: 'https://www.github.com',
    demo: 'https://www.dribble.com',
  },
  {
    
    id: 4,
    image: Img4,
    title: "sunt aut facere repellat provident",
    github: 'https://www.github.com',
    demo: 'https://www.dribble.com',
  },
  {
    
    id: 5,
    image: Img5,
    title: "sunt aut facere repellat provident",
    github: 'https://www.github.com',
    demo: 'https://www.dribble.com',
  },
  {
    
    id: 6,
    image: Img6,
    title: "sunt aut facere repellat provident8",
    github: 'https://www.github.com',
    demo: 'https://www.dribble.com',
  },
]



const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
     <article className=' services__container'>
     {
         data.map(({id, image, title, github, demo}) => {
           return (
            <div key={id} className='container'>
            <div className='service__img'>
               <img src={image} alt={title} />
            </div>
            <div className='service__title'>
               <h2>{title}</h2>
            </div>
             <a href={github} className='btn' target='_blank'>Github</a>
             <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
           )
         })
       }
      </article>     
    </section>
  )
}

export default Services