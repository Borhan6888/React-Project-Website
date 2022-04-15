import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
              <img src={ME} alt='Image' />
          </div>
        </div>
        <div className='about__context'>
          <div className='about__cards'>

            <article className='about__card'>
                <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
                <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Clinents Wordwide</small>
            </article>

            <article className='about__card'>
                <AiFillFolderOpen className='about__icon' />
              <h5>Project</h5>
              <small>80+ Completed</small>
            </article>

          </div>
          <p>
          It is a long established fact that a reader will be distracted by the readable 
          content of a page when looking at its layout. The point of using Lorem Ipsum 
          is that it has a more-or-less normal distribution of letters, as opposed to using.
          </p>
          <a href='#contact' className='btn btn-primary'>Let,s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About