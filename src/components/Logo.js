import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'


const Logo = () => {
  return (
    <div className=' w-max mx-auto'>
      <Link to={'/'}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  )
}

export default Logo