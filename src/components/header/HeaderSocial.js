import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {FaDribbble} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com' target='_blank'><AiFillLinkedin /></a>
      <a href='https://www.github.com' target='_blank'><BsGithub /></a>
      <a href='https://www.dribbble.com' target='_blank'><FaDribbble /></a>
    </div>
  )
}

export default HeaderSocial