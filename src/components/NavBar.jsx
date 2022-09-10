import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navBar'>
      <div>
        <Link to={'/'}>
        <img src="./nubeLogo.png" alt="logo" className='img'/>
        </Link>
        
      </div>
        <a href='#' className='navEnlace'>Inicio</a>
        <a href='#' className='navEnlace'>Productos</a>
        <a href='#' className='navEnlace'>Sobre Mi</a>
        <a href='#' className='navEnlace'>Contacto</a>
        <CartWidget/>
    </div>
  )
}

export default NavBar