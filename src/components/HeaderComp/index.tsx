import React from 'react'
import './style.css'
import Logo from '../../assets/logo.png';

const HeaderComponent = () => {
  return (
    <div className='header'>
      <img className='logo' src={Logo} alt="logo" />
      <ul className='menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  )
}

export default HeaderComponent
